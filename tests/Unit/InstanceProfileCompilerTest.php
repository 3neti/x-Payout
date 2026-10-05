<?php

use App\Deployment\Profiles\InstanceProfileCompiler;
use App\Deployment\Profiles\InstanceProfileException;
use Symfony\Component\Yaml\Yaml;

function instanceProfilePath(string $path): string
{
    return dirname(__DIR__, 2).'/'.ltrim($path, '/');
}

/** @return array<string, mixed> */
function validInstanceProfile(): array
{
    return Yaml::parseFile(instanceProfilePath('ops/deployment/examples/instance.yaml'));
}

function writeInstanceProfile(array $profile): string
{
    $path = tempnam(sys_get_temp_dir(), 'x-payout-instance-');
    file_put_contents($path, Yaml::dump($profile, 10, 2));

    return $path;
}

function writeProfileSecrets(array $names, string $value = 'private-test-value'): string
{
    $path = tempnam(sys_get_temp_dir(), 'x-payout-secrets-');
    $contents = '';

    foreach ($names as $name) {
        $contents .= "{$name}={$value}\n";
    }

    file_put_contents($path, $contents);
    chmod($path, 0600);

    return $path;
}

it('validates the sanitized portable profile without booting Laravel', function (): void {
    $compiler = new InstanceProfileCompiler;
    $profile = $compiler->validate(instanceProfilePath('ops/deployment/examples/instance.yaml'));

    expect($profile['schema'])->toBe('x-payout.instance.v1')
        ->and($profile['providers']['active'])->toBe('primary-payout')
        ->and($profile['deployment_required_secrets'])->toContain('NETBANK_CLIENT_SECRET')
        ->not->toContain('X_PAYOUT_MAKER_MOBILE')
        ->and($profile['commissioning_required_secrets'])->toContain('X_PAYOUT_MAKER_MOBILE')
        ->and($profile['required_secrets'])->toContain('NETBANK_CLIENT_SECRET', 'X_PAYOUT_MAKER_MOBILE');

    $executable = file_get_contents(instanceProfilePath('bin/x-payout-profile'));

    expect($executable)
        ->toContain('vendor/autoload.php')
        ->not->toContain('bootstrap/app.php')
        ->not->toContain('Artisan');
});

it('compiles deterministic sanitized artifacts without serializing secret values', function (): void {
    $compiler = new InstanceProfileCompiler;
    $profile = $compiler->validate(instanceProfilePath('ops/deployment/examples/instance.yaml'));
    $secretsPath = writeProfileSecrets($profile['required_secrets'], 'do-not-serialize-this-value');
    $firstDirectory = sys_get_temp_dir().'/x-payout-compiled-'.bin2hex(random_bytes(4));
    $secondDirectory = sys_get_temp_dir().'/x-payout-compiled-'.bin2hex(random_bytes(4));

    $first = $compiler->compile(instanceProfilePath('ops/deployment/examples/instance.yaml'), $secretsPath, $firstDirectory);
    $second = $compiler->compile(instanceProfilePath('ops/deployment/examples/instance.yaml'), $secretsPath, $secondDirectory);

    expect(array_keys($first['files']))->toBe([
        'compiled-instance.json',
        'runtime.env',
        'required-secrets.json',
        'commissioning.yaml',
        'preflight-plan.json',
        'manifest.sha256',
    ])->and($second)->toBe($first)
        ->and(implode("\n", $first['files']))->not->toContain('do-not-serialize-this-value')
        ->and($first['files']['runtime.env'])
        ->toContain('APP_URL=https://payout.example.com')
        ->not->toContain('NETBANK_CLIENT_SECRET')
        ->and($first['files']['preflight-plan.json'])
        ->toContain('x-payout.preflight-plan.v1', 'block_before_mutation')
        ->not->toContain('do-not-serialize-this-value');

    $compiledInstance = json_decode($first['files']['compiled-instance.json'], true, flags: JSON_THROW_ON_ERROR);

    expect($compiledInstance['runtime'])
        ->toBeArray()
        ->toHaveKey('APP_URL', 'https://payout.example.com')
        ->not->toHaveKey('NETBANK_CLIENT_SECRET');

    unlink($secretsPath);
});

it('compiles deployment artifacts without requiring secret values', function (): void {
    $compiler = new InstanceProfileCompiler;
    $directory = sys_get_temp_dir().'/x-payout-deployment-only-'.bin2hex(random_bytes(4));
    $compiled = $compiler->compile(
        instanceProfilePath('ops/deployment/examples/instance.yaml'),
        null,
        $directory,
    );

    $requiredSecrets = json_decode($compiled['files']['required-secrets.json'], true, flags: JSON_THROW_ON_ERROR);

    expect($requiredSecrets['required'])
        ->toContain('NETBANK_CLIENT_SECRET')
        ->not->toContain('X_PAYOUT_MAKER_MOBILE')
        ->and($requiredSecrets['commissioning_required'])
        ->toContain('X_PAYOUT_MAKER_MOBILE')
        ->and(implode("\n", $compiled['files']))
        ->not->toContain('private-test-value');
});

it('requires a complete public MCP runtime when public on-demand issuance is enabled', function (): void {
    $profile = validInstanceProfile();
    $profile['features']['public_on_demand_issuance'] = true;
    $profile['runtime']['XCHANGE_PUBLIC_AUTO_GENERATE_ENABLED'] = true;
    $profile['runtime']['XMCP_PUBLIC_ISSUANCE_ENABLED'] = true;
    $profile['runtime']['XMCP_PUBLIC_ISSUANCE_API_BASE_URL'] = 'https://payout.example.com/api/x/v1/public-issuance';
    $path = writeInstanceProfile($profile);

    $validated = (new InstanceProfileCompiler)->validate($path);

    expect($validated['runtime']['XMCP_PUBLIC_ISSUANCE_ENABLED'])->toBeTrue();

    $profile['runtime']['XMCP_PUBLIC_ISSUANCE_ENABLED'] = false;
    file_put_contents($path, Yaml::dump($profile, 10, 2));

    expect(fn () => (new InstanceProfileCompiler)->validate($path))
        ->toThrow(InstanceProfileException::class, 'runtime.XMCP_PUBLIC_ISSUANCE_ENABLED must be true');

    unlink($path);
});

it('requires a pinned same-origin Partner MCP contract and durable Passport keys', function (): void {
    $profile = validInstanceProfile();
    $profile['features']['partner_api'] = true;
    $profile['runtime']['XCHANGE_PARTNER_API_ENABLED'] = true;
    $profile['runtime']['XMCP_ENABLED'] = true;
    $path = writeInstanceProfile($profile);

    $validated = (new InstanceProfileCompiler)->validate($path);

    expect($validated['runtime']['XMCP_EXPECTED_PARTNER_CONTRACT_VERSION'])->toBe('1.4.0')
        ->and($validated['deployment_required_secrets'])
        ->toContain('PASSPORT_PRIVATE_KEY', 'PASSPORT_PUBLIC_KEY');

    $profile['runtime']['XMCP_API_BASE_URL'] = 'https://different.example.com/api/partner/v1';
    file_put_contents($path, Yaml::dump($profile, 10, 2));

    expect(fn () => (new InstanceProfileCompiler)->validate($path))
        ->toThrow(InstanceProfileException::class, 'must use the canonical public host');

    $profile['runtime']['XMCP_API_BASE_URL'] = 'https://payout.example.com/api/partner/v1';
    unset($profile['secret_refs']['passport_private_key']);
    file_put_contents($path, Yaml::dump($profile, 10, 2));

    expect(fn () => (new InstanceProfileCompiler)->validate($path))
        ->toThrow(InstanceProfileException::class, 'must include PASSPORT_PRIVATE_KEY');

    unlink($path);
});

it('rejects missing drivers capabilities and plaintext credentials', function (Closure $mutate, string $message): void {
    $profile = validInstanceProfile();
    $mutate($profile);
    $path = writeInstanceProfile($profile);

    expect(fn () => (new InstanceProfileCompiler)->validate($path))
        ->toThrow(InstanceProfileException::class, $message);

    unlink($path);
})->with([
    'missing driver' => [
        function (array &$profile): void {
            unset($profile['providers']['connections'][0]['driver']);
        },
        'driver must be a non-empty string',
    ],
    'missing capability' => [
        function (array &$profile): void {
            $profile['providers']['connections'][0]['capabilities'] = [];
        },
        'capabilities must be a non-empty list',
    ],
    'plaintext credential' => [
        function (array &$profile): void {
            $profile['providers']['connections'][0]['secrets']['client_secret'] = 'plain-text-secret';
        },
        'uppercase secret-name reference',
    ],
]);

it('requires a complete private secrets file', function (): void {
    $compiler = new InstanceProfileCompiler;
    $profile = $compiler->validate(instanceProfilePath('ops/deployment/examples/instance.yaml'));
    $secretsPath = writeProfileSecrets(array_slice($profile['required_secrets'], 1));
    chmod($secretsPath, 0644);

    expect(fn () => $compiler->compile(instanceProfilePath('ops/deployment/examples/instance.yaml'), $secretsPath, sys_get_temp_dir().'/unused'))
        ->toThrow(InstanceProfileException::class, 'permissions 0600');

    chmod($secretsPath, 0600);

    expect(fn () => $compiler->compile(instanceProfilePath('ops/deployment/examples/instance.yaml'), $secretsPath, sys_get_temp_dir().'/unused'))
        ->toThrow(InstanceProfileException::class, 'missing or empty');

    unlink($secretsPath);
});

it('detects any change to a compiled artifact', function (): void {
    $compiler = new InstanceProfileCompiler;
    $profile = $compiler->validate(instanceProfilePath('ops/deployment/examples/instance.yaml'));
    $secretsPath = writeProfileSecrets($profile['required_secrets']);
    $directory = sys_get_temp_dir().'/x-payout-compiled-'.bin2hex(random_bytes(4));
    $compiler->compile(instanceProfilePath('ops/deployment/examples/instance.yaml'), $secretsPath, $directory);
    file_put_contents($directory.'/runtime.env', "UNREVIEWED_CHANGE=true\n", FILE_APPEND);

    expect(fn () => $compiler->verifyCompiledArtifacts($directory))
        ->toThrow(InstanceProfileException::class, 'manifest does not match');

    unlink($secretsPath);
});

it('ships a valid json schema and the versioned legacy classification contract', function (): void {
    $schema = json_decode(file_get_contents(instanceProfilePath('ops/deployment/schema/instance.v1.schema.json')), true, flags: JSON_THROW_ON_ERROR);
    $contract = json_decode(file_get_contents(instanceProfilePath('ops/deployment/contracts/legacy-setting-classification.json')), true, flags: JSON_THROW_ON_ERROR);

    expect($schema['properties']['schema']['const'])->toBe('x-payout.instance.v1')
        ->and($contract['schema'])->toBe('x-payout.legacy-setting-classification.v2')
        ->and(array_keys($contract['sources']))->toBe(['deployment_control', 'secret_reentry'])
        ->and($contract['categories'])->not->toBeEmpty();
});

it('retains an explicit legacy worksheet mode in the compatibility controller', function (): void {
    $controller = file_get_contents(instanceProfilePath('scripts/deploy-production-cleanroom.sh'));

    expect($controller)
        ->toContain('PAYOUT_COMPILED_PROFILE_DIRECTORY')
        ->toContain('load_compiled_profile')
        ->toContain('source "${CONTROL_FILE}"')
        ->toContain('legacy worksheet');
});

it('ships Passport persistence and treats signing keys as managed secrets', function (): void {
    $migrations = glob(instanceProfilePath('database/migrations/*_create_oauth_clients_table.php'));
    $controller = file_get_contents(instanceProfilePath('scripts/deploy-production-cleanroom.sh'));
    $worksheet = file_get_contents(instanceProfilePath('deployment.production.secrets.example'));

    expect($migrations)->toHaveCount(1)
        ->and($controller)->toContain('PASSPORT_PRIVATE_KEY PASSPORT_PUBLIC_KEY')
        ->and($worksheet)->toContain('PASSPORT_PRIVATE_KEY=', 'PASSPORT_PUBLIC_KEY=');
});
