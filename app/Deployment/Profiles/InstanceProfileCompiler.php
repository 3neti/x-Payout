<?php

namespace App\Deployment\Profiles;

use App\Deployment\Preflight\PreflightCatalog;
use JsonException;
use Symfony\Component\Yaml\Exception\ParseException;
use Symfony\Component\Yaml\Yaml;

final class InstanceProfileCompiler
{
    private const SCHEMA = 'x-payout.instance.v1';

    /** @return array<string, mixed> */
    public function validate(string $instancePath): array
    {
        if (! is_file($instancePath) || ! is_readable($instancePath)) {
            throw new InstanceProfileException("Instance profile [{$instancePath}] is not readable.");
        }

        try {
            $profile = Yaml::parseFile($instancePath, Yaml::PARSE_EXCEPTION_ON_INVALID_TYPE);
        } catch (ParseException $exception) {
            throw new InstanceProfileException('Instance profile YAML is invalid: '.$exception->getMessage(), previous: $exception);
        }

        if (! is_array($profile)) {
            throw new InstanceProfileException('Instance profile must be a YAML mapping.');
        }

        $this->assertString($profile, 'schema');

        if ($profile['schema'] !== self::SCHEMA) {
            throw new InstanceProfileException('Instance profile schema must be ['.self::SCHEMA.'].');
        }

        foreach (['identity', 'release', 'public', 'features', 'providers', 'storage', 'commissioning'] as $section) {
            $this->assertMapping($profile, $section);
        }

        $this->assertString($profile['identity'], 'id', 'identity');
        $this->assertString($profile['identity'], 'legal_name', 'identity');
        $this->assertString($profile['identity'], 'display_name', 'identity');
        $this->assertString($profile['release'], 'repository', 'release');
        $this->assertString($profile['release'], 'ref', 'release');
        $this->assertString($profile['release'], 'cloud_source_branch', 'release');
        $this->assertHttpsUrl($profile['public']['canonical_url'] ?? null, 'public.canonical_url');
        $this->assertString($profile['public'], 'locale', 'public');
        $this->assertStringList($profile['public']['currencies'] ?? null, 'public.currencies');
        $this->assertBooleanMapping($profile['features'], 'features');
        $this->assertString($profile['providers'], 'active', 'providers');

        $connections = $profile['providers']['connections'] ?? null;

        if (! is_array($connections) || $connections === [] || ! array_is_list($connections)) {
            throw new InstanceProfileException('providers.connections must be a non-empty list.');
        }

        $connectionNames = [];
        $requiredSecrets = [];
        $commissioningSecrets = [];

        foreach ($connections as $index => $connection) {
            if (! is_array($connection)) {
                throw new InstanceProfileException("providers.connections.{$index} must be a mapping.");
            }

            $path = "providers.connections.{$index}";
            $this->assertString($connection, 'name', $path);
            $this->assertString($connection, 'driver', $path);
            $this->assertString($connection, 'currency', $path);
            $this->assertStringList($connection['capabilities'] ?? null, "{$path}.capabilities");
            $this->assertEnvironmentMapping($connection['runtime'] ?? [], "{$path}.runtime");
            $this->collectSecretReferences($connection['secrets'] ?? [], "{$path}.secrets", $requiredSecrets);
            $connectionNames[] = $connection['name'];
        }

        if (count($connectionNames) !== count(array_unique($connectionNames))) {
            throw new InstanceProfileException('Provider connection names must be unique.');
        }

        if (! in_array($profile['providers']['active'], $connectionNames, true)) {
            throw new InstanceProfileException('providers.active must reference a declared provider connection.');
        }

        $this->assertMapping($profile['storage'], 'evidence', 'storage');
        $this->assertString($profile['storage']['evidence'], 'driver', 'storage.evidence');
        $this->assertEnvironmentMapping($profile['storage']['evidence']['runtime'] ?? [], 'storage.evidence.runtime');
        $this->collectSecretReferences($profile['storage']['evidence']['secrets'] ?? [], 'storage.evidence.secrets', $requiredSecrets);

        $this->assertMapping($profile['commissioning'], 'opening', 'commissioning');
        $this->assertMapping($profile['commissioning'], 'commercial_principal', 'commissioning');
        $this->assertMapping($profile['commissioning'], 'invitations', 'commissioning');
        $this->assertString($profile['commissioning']['opening'], 'policy', 'commissioning.opening');
        $this->assertString($profile['commissioning']['opening'], 'connection', 'commissioning.opening');

        if (! in_array($profile['commissioning']['opening']['connection'], $connectionNames, true)) {
            throw new InstanceProfileException('commissioning.opening.connection must reference a declared provider connection.');
        }

        $this->assertString($profile['commissioning']['commercial_principal'], 'reference', 'commissioning.commercial_principal');
        $this->assertString($profile['commissioning']['commercial_principal'], 'legal_name', 'commissioning.commercial_principal');
        $invitationDeliveryMode = $profile['commissioning']['invitations']['delivery_mode'] ?? 'contact';

        if (! in_array($invitationDeliveryMode, ['contact', 'manual'], true)) {
            throw new InstanceProfileException('commissioning.invitations.delivery_mode must be [contact] or [manual].');
        }

        foreach (['maker', 'checker'] as $role) {
            $invitation = $profile['commissioning']['invitations'][$role] ?? null;

            if (! is_array($invitation)) {
                throw new InstanceProfileException("commissioning.invitations.{$role} must be a mapping.");
            }

            $this->assertPositiveInteger($invitation['amount_minor'] ?? null, "commissioning.invitations.{$role}.amount_minor");
            if ($invitationDeliveryMode === 'contact') {
                $this->assertSecretReference($invitation['email_secret'] ?? null, "commissioning.invitations.{$role}.email_secret", $commissioningSecrets);
                $this->assertSecretReference($invitation['mobile_secret'] ?? null, "commissioning.invitations.{$role}.mobile_secret", $commissioningSecrets);
            }
        }

        $this->assertEnvironmentMapping($profile['runtime'] ?? [], 'runtime');
        $this->assertFeatureRuntimeConsistency($profile);
        $this->collectSecretReferences($profile['secret_refs'] ?? [], 'secret_refs', $requiredSecrets);
        $this->rejectSensitivePlaintext($profile);

        $profile['deployment_required_secrets'] = array_values(array_unique($requiredSecrets));
        $profile['commissioning_required_secrets'] = array_values(array_unique($commissioningSecrets));
        $profile['required_secrets'] = array_values(array_unique(array_merge($requiredSecrets, $commissioningSecrets)));
        sort($profile['deployment_required_secrets'], SORT_STRING);
        sort($profile['commissioning_required_secrets'], SORT_STRING);
        sort($profile['required_secrets'], SORT_STRING);

        return $this->canonicalize($profile);
    }

    /** @param array<string, mixed> $profile */
    private function assertFeatureRuntimeConsistency(array $profile): void
    {
        $runtime = $profile['runtime'] ?? [];

        if (($profile['features']['public_on_demand_issuance'] ?? false) === true) {
            foreach (['XCHANGE_PUBLIC_AUTO_GENERATE_ENABLED', 'XCHANGE_FUNDING_NETBANK_ENABLED', 'XMCP_PUBLIC_ISSUANCE_ENABLED'] as $key) {
                if (($runtime[$key] ?? null) !== true) {
                    throw new InstanceProfileException("runtime.{$key} must be true when features.public_on_demand_issuance is enabled.");
                }
            }

            $this->assertHttpsUrl(
                $runtime['XMCP_PUBLIC_ISSUANCE_API_BASE_URL'] ?? null,
                'runtime.XMCP_PUBLIC_ISSUANCE_API_BASE_URL',
            );
        }

        if (($profile['features']['partner_api'] ?? false) !== true) {
            return;
        }

        foreach (['XCHANGE_PARTNER_API_ENABLED', 'XMCP_ENABLED'] as $key) {
            if (($runtime[$key] ?? null) !== true) {
                throw new InstanceProfileException("runtime.{$key} must be true when features.partner_api is enabled.");
            }
        }

        $this->assertHttpsUrl($runtime['XMCP_API_BASE_URL'] ?? null, 'runtime.XMCP_API_BASE_URL');

        if (parse_url((string) $runtime['XMCP_API_BASE_URL'], PHP_URL_HOST)
            !== parse_url((string) $profile['public']['canonical_url'], PHP_URL_HOST)) {
            throw new InstanceProfileException('runtime.XMCP_API_BASE_URL must use the canonical public host.');
        }

        $endpoint = $runtime['XMCP_ENDPOINT'] ?? null;

        if (! is_string($endpoint) || ! str_starts_with($endpoint, '/')) {
            throw new InstanceProfileException('runtime.XMCP_ENDPOINT must be an absolute application path.');
        }

        $version = $runtime['XMCP_EXPECTED_PARTNER_CONTRACT_VERSION'] ?? null;

        if (! is_string($version) || preg_match('/^\d+\.\d+\.\d+$/', $version) !== 1) {
            throw new InstanceProfileException('runtime.XMCP_EXPECTED_PARTNER_CONTRACT_VERSION must be a semantic version.');
        }

        $sha256 = $runtime['XMCP_EXPECTED_PARTNER_CONTRACT_SHA256'] ?? null;

        if (! is_string($sha256) || preg_match('/^[a-f0-9]{64}$/', $sha256) !== 1) {
            throw new InstanceProfileException('runtime.XMCP_EXPECTED_PARTNER_CONTRACT_SHA256 must be a lowercase SHA-256 digest.');
        }

        $secretReferences = $profile['secret_refs'] ?? [];

        foreach (['PASSPORT_PRIVATE_KEY', 'PASSPORT_PUBLIC_KEY'] as $requiredSecret) {
            if (! in_array($requiredSecret, $secretReferences, true)) {
                throw new InstanceProfileException("secret_refs must include {$requiredSecret} when features.partner_api is enabled.");
            }
        }
    }

    public function __construct(private readonly PreflightCatalog $preflightCatalog = new PreflightCatalog) {}

    /** @return array{fingerprint: string, files: array<string, string>} */
    public function compile(string $instancePath, ?string $secretsPath, string $outputDirectory): array
    {
        $profile = $this->validate($instancePath);
        $requiredSecrets = $profile['required_secrets'];
        $deploymentRequiredSecrets = $profile['deployment_required_secrets'];
        $commissioningRequiredSecrets = $profile['commissioning_required_secrets'];

        if ($secretsPath !== null) {
            $this->assertPrivateSecretsFile($secretsPath);
            $secretValues = $this->parseSecretFile($secretsPath);

            foreach ($requiredSecrets as $secretName) {
                if (! isset($secretValues[$secretName]) || trim($secretValues[$secretName]) === '') {
                    throw new InstanceProfileException("Required secret [{$secretName}] is missing or empty.");
                }
            }
        }

        $sanitizedProfile = $profile;
        unset(
            $sanitizedProfile['required_secrets'],
            $sanitizedProfile['deployment_required_secrets'],
            $sanitizedProfile['commissioning_required_secrets'],
        );
        $fingerprint = hash('sha256', $this->encodeCanonicalJson($sanitizedProfile));
        $runtime = $profile['runtime'] ?? [];

        foreach ($profile['providers']['connections'] as $connection) {
            $runtime = array_merge($runtime, $connection['runtime'] ?? []);
        }

        $runtime = array_merge($runtime, $profile['storage']['evidence']['runtime'] ?? []);
        $runtime = array_merge($runtime, [
            'APP_NAME' => $profile['identity']['display_name'],
            'APP_URL' => $profile['public']['canonical_url'],
            'APP_LOCALE' => $profile['public']['locale'],
            'XCHANGE_INSTANCE_ID' => $profile['identity']['id'],
            'XCHANGE_COMMERCIAL_PRINCIPAL_REFERENCE' => $profile['commissioning']['commercial_principal']['reference'],
            'XCHANGE_COMMERCIAL_PRINCIPAL_LEGAL_NAME' => $profile['commissioning']['commercial_principal']['legal_name'],
            'XCHANGE_COMMERCIAL_REVENUE_ACCOUNT_SLUG' => $profile['commissioning']['commercial_principal']['revenue_account_slug'] ?? 'commercial-revenue',
            'XCHANGE_TREASURY_OPENING_CAPITALIZATION_ALLOW_PRODUCTION' => $profile['commissioning']['opening']['allow_production'] ?? false,
            'XCHANGE_TREASURY_OPENING_CAPITALIZATION_ALLOWED_CONNECTIONS' => $profile['commissioning']['opening']['connection'],
        ]);
        ksort($runtime, SORT_STRING);

        $compiledInstance = [
            'schema' => self::SCHEMA,
            'profile_fingerprint' => $fingerprint,
            'profile' => $sanitizedProfile,
            'runtime' => $runtime,
        ];

        $commissioning = [
            'schema' => 'x-payout.commissioning.v1',
            'profile_fingerprint' => $fingerprint,
            'opening' => $profile['commissioning']['opening'],
            'commercial_principal' => $profile['commissioning']['commercial_principal'],
            'invitations' => $profile['commissioning']['invitations'],
        ];
        $preflightPlan = $this->preflightCatalog->build($profile, $fingerprint);

        $files = [
            'compiled-instance.json' => $this->encodeCanonicalJson($compiledInstance)."\n",
            'runtime.env' => $this->renderEnvironment($runtime),
            'required-secrets.json' => $this->encodeCanonicalJson([
                'schema' => 'x-payout.required-secrets.v2',
                'profile_fingerprint' => $fingerprint,
                'required' => $deploymentRequiredSecrets,
                'commissioning_required' => $commissioningRequiredSecrets,
            ])."\n",
            'commissioning.yaml' => Yaml::dump($this->canonicalize($commissioning), 8, 2, Yaml::DUMP_MULTI_LINE_LITERAL_BLOCK),
            'preflight-plan.json' => $this->encodeCanonicalJson($preflightPlan)."\n",
        ];

        $manifestMaterial = '';

        foreach ($files as $name => $contents) {
            $manifestMaterial .= $name."\0".hash('sha256', $contents)."\n";
        }

        $files['manifest.sha256'] = hash('sha256', $manifestMaterial)."\n";
        $this->writeArtifacts($outputDirectory, $files);

        return ['fingerprint' => $fingerprint, 'files' => $files];
    }

    /** @return array{fingerprint: string, manifest: string} */
    public function verifyCompiledArtifacts(string $directory): array
    {
        $artifactNames = [
            'compiled-instance.json',
            'runtime.env',
            'required-secrets.json',
            'commissioning.yaml',
            'preflight-plan.json',
        ];
        $contents = [];

        foreach ($artifactNames as $artifactName) {
            $path = rtrim($directory, '/').'/'.$artifactName;

            if (! is_file($path) || ! is_readable($path)) {
                throw new InstanceProfileException("Compiled artifact [{$artifactName}] is missing or unreadable.");
            }

            $contents[$artifactName] = file_get_contents($path);
        }

        $manifestPath = rtrim($directory, '/').'/manifest.sha256';

        if (! is_file($manifestPath) || ! is_readable($manifestPath)) {
            throw new InstanceProfileException('Compiled artifact [manifest.sha256] is missing or unreadable.');
        }

        $manifestMaterial = '';

        foreach ($contents as $name => $content) {
            $manifestMaterial .= $name."\0".hash('sha256', $content)."\n";
        }

        $expectedManifest = hash('sha256', $manifestMaterial);
        $actualManifest = trim((string) file_get_contents($manifestPath));

        if (! hash_equals($expectedManifest, $actualManifest)) {
            throw new InstanceProfileException('Compiled artifact manifest does not match its contents.');
        }

        try {
            $compiled = json_decode($contents['compiled-instance.json'], true, flags: JSON_THROW_ON_ERROR);
            $requiredSecrets = json_decode($contents['required-secrets.json'], true, flags: JSON_THROW_ON_ERROR);
            $preflightPlan = json_decode($contents['preflight-plan.json'], true, flags: JSON_THROW_ON_ERROR);
            $commissioning = Yaml::parse($contents['commissioning.yaml'], Yaml::PARSE_EXCEPTION_ON_INVALID_TYPE);
        } catch (JsonException|ParseException $exception) {
            throw new InstanceProfileException('Compiled artifacts contain invalid structured data.', previous: $exception);
        }

        $fingerprint = $compiled['profile_fingerprint'] ?? null;

        if (! is_string($fingerprint) || preg_match('/^[a-f0-9]{64}$/', $fingerprint) !== 1) {
            throw new InstanceProfileException('Compiled profile fingerprint is invalid.');
        }

        if (($requiredSecrets['profile_fingerprint'] ?? null) !== $fingerprint
            || ($commissioning['profile_fingerprint'] ?? null) !== $fingerprint
            || ($preflightPlan['profile_fingerprint'] ?? null) !== $fingerprint) {
            throw new InstanceProfileException('Compiled artifact fingerprints do not agree.');
        }

        $secretNames = array_merge(
            $requiredSecrets['required'] ?? [],
            $requiredSecrets['commissioning_required'] ?? [],
        );

        foreach ($secretNames as $secretName) {
            if (preg_match('/^'.preg_quote((string) $secretName, '/').'=/m', $contents['runtime.env']) === 1) {
                throw new InstanceProfileException("Runtime artifact contains secret key [{$secretName}].");
            }
        }

        return ['fingerprint' => $fingerprint, 'manifest' => $actualManifest];
    }

    /** @param array<string, mixed> $mapping */
    private function assertString(array $mapping, string $key, string $path = ''): void
    {
        $value = $mapping[$key] ?? null;
        $qualified = $path === '' ? $key : "{$path}.{$key}";

        if (! is_string($value) || trim($value) === '') {
            throw new InstanceProfileException("{$qualified} must be a non-empty string.");
        }
    }

    /** @param array<string, mixed> $mapping */
    private function assertMapping(array $mapping, string $key, string $path = ''): void
    {
        $value = $mapping[$key] ?? null;
        $qualified = $path === '' ? $key : "{$path}.{$key}";

        if (! is_array($value) || array_is_list($value)) {
            throw new InstanceProfileException("{$qualified} must be a mapping.");
        }
    }

    private function assertHttpsUrl(mixed $value, string $path): void
    {
        if (! is_string($value) || filter_var($value, FILTER_VALIDATE_URL) === false || ! str_starts_with($value, 'https://')) {
            throw new InstanceProfileException("{$path} must be an HTTPS URL.");
        }
    }

    private function assertPositiveInteger(mixed $value, string $path): void
    {
        if (! is_int($value) || $value <= 0) {
            throw new InstanceProfileException("{$path} must be a positive integer.");
        }
    }

    private function assertStringList(mixed $value, string $path): void
    {
        if (! is_array($value) || $value === [] || ! array_is_list($value)) {
            throw new InstanceProfileException("{$path} must be a non-empty list.");
        }

        foreach ($value as $item) {
            if (! is_string($item) || trim($item) === '') {
                throw new InstanceProfileException("{$path} must contain only non-empty strings.");
            }
        }
    }

    /** @param array<string, mixed> $mapping */
    private function assertBooleanMapping(array $mapping, string $path): void
    {
        foreach ($mapping as $key => $value) {
            if (! is_string($key) || ! is_bool($value)) {
                throw new InstanceProfileException("{$path} must contain boolean feature flags.");
            }
        }
    }

    private function assertEnvironmentMapping(mixed $mapping, string $path): void
    {
        if (! is_array($mapping) || array_is_list($mapping)) {
            throw new InstanceProfileException("{$path} must be a mapping.");
        }

        foreach ($mapping as $key => $value) {
            if (! is_string($key) || preg_match('/^[A-Z][A-Z0-9_]*$/', $key) !== 1 || ! is_scalar($value)) {
                throw new InstanceProfileException("{$path} must contain uppercase environment keys and scalar values.");
            }
        }
    }

    /** @param array<int, string> $requiredSecrets */
    private function collectSecretReferences(mixed $references, string $path, array &$requiredSecrets): void
    {
        if (! is_array($references) || array_is_list($references)) {
            throw new InstanceProfileException("{$path} must be a mapping.");
        }

        foreach ($references as $key => $reference) {
            $this->assertSecretReference($reference, "{$path}.{$key}", $requiredSecrets);
        }
    }

    /** @param array<int, string> $requiredSecrets */
    private function assertSecretReference(mixed $reference, string $path, array &$requiredSecrets): void
    {
        if (! is_string($reference) || preg_match('/^[A-Z][A-Z0-9_]*$/', $reference) !== 1) {
            throw new InstanceProfileException("{$path} must be an uppercase secret-name reference, never a secret value.");
        }

        $requiredSecrets[] = $reference;
    }

    /** @param array<string, mixed> $profile */
    private function rejectSensitivePlaintext(array $profile, string $path = ''): void
    {
        foreach ($profile as $key => $value) {
            $qualified = $path === '' ? (string) $key : "{$path}.{$key}";

            if (is_array($value)) {
                $this->rejectSensitivePlaintext($value, $qualified);

                continue;
            }

            if (preg_match('/(?:password|secret|token|private_key|access_key)$/i', (string) $key) === 1
                && ! str_ends_with((string) $key, '_secret')
                && (! is_string($value) || preg_match('/^[A-Z][A-Z0-9_]*$/', $value) !== 1)) {
                throw new InstanceProfileException("{$qualified} appears to contain plaintext secret material.");
            }
        }
    }

    private function assertPrivateSecretsFile(string $path): void
    {
        if (! is_file($path) || ! is_readable($path)) {
            throw new InstanceProfileException("Secrets file [{$path}] is not readable.");
        }

        $permissions = fileperms($path);

        if ($permissions !== false && ($permissions & 0077) !== 0) {
            throw new InstanceProfileException('Secrets file must have permissions 0600 or stricter.');
        }
    }

    /** @return array<string, string> */
    private function parseSecretFile(string $path): array
    {
        $values = [];
        $lines = file($path, FILE_IGNORE_NEW_LINES);

        if ($lines === false) {
            throw new InstanceProfileException('Secrets file could not be read.');
        }

        foreach ($lines as $lineNumber => $line) {
            $trimmed = trim($line);

            if ($trimmed === '' || str_starts_with($trimmed, '#')) {
                continue;
            }

            if (preg_match('/^([A-Z][A-Z0-9_]*)=(.*)$/', $line, $matches) !== 1) {
                throw new InstanceProfileException('Secrets file line '.($lineNumber + 1).' is invalid.');
            }

            $values[$matches[1]] = $matches[2];
        }

        return $values;
    }

    /** @param array<string, scalar> $environment */
    private function renderEnvironment(array $environment): string
    {
        $lines = [];

        foreach ($environment as $key => $value) {
            $rendered = match (true) {
                is_bool($value) => $value ? 'true' : 'false',
                is_int($value), is_float($value) => (string) $value,
                default => $this->quoteEnvironmentValue((string) $value),
            };
            $lines[] = "{$key}={$rendered}";
        }

        return implode("\n", $lines)."\n";
    }

    private function quoteEnvironmentValue(string $value): string
    {
        if ($value !== '' && preg_match('/^[A-Za-z0-9_\/.:\-]+$/', $value) === 1) {
            return $value;
        }

        return "'".str_replace("'", "'\\''", str_replace(["\n", "\r"], ['\\n', '\\r'], $value))."'";
    }

    /** @param array<string, mixed> $value */
    private function encodeCanonicalJson(array $value): string
    {
        try {
            return json_encode($this->canonicalize($value), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR);
        } catch (JsonException $exception) {
            throw new InstanceProfileException('Compiled profile could not be encoded.', previous: $exception);
        }
    }

    private function canonicalize(mixed $value): mixed
    {
        if (! is_array($value)) {
            return $value;
        }

        if (array_is_list($value)) {
            return array_map(fn (mixed $item): mixed => $this->canonicalize($item), $value);
        }

        ksort($value, SORT_STRING);

        foreach ($value as $key => $item) {
            $value[$key] = $this->canonicalize($item);
        }

        return $value;
    }

    /** @param array<string, string> $files */
    private function writeArtifacts(string $outputDirectory, array $files): void
    {
        if (! is_dir($outputDirectory) && ! mkdir($outputDirectory, 0755, true) && ! is_dir($outputDirectory)) {
            throw new InstanceProfileException("Output directory [{$outputDirectory}] could not be created.");
        }

        foreach ($files as $name => $contents) {
            $temporaryPath = tempnam($outputDirectory, '.x-payout-profile-');

            if ($temporaryPath === false || file_put_contents($temporaryPath, $contents, LOCK_EX) === false) {
                throw new InstanceProfileException("Artifact [{$name}] could not be written.");
            }

            if (! rename($temporaryPath, $outputDirectory.'/'.$name)) {
                @unlink($temporaryPath);

                throw new InstanceProfileException("Artifact [{$name}] could not be finalized.");
            }
        }
    }
}
