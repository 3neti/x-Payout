<?php

namespace App\Deployment\Cloud;

use App\Deployment\Controller\ContinuousDeploymentAdapter;
use App\Deployment\Controller\ContinuousDeploymentException;
use App\Deployment\Controller\DeploymentAuthority;
use App\Deployment\Controller\DeploymentPhase;
use App\Deployment\Dns\DnsReconciler;
use App\Deployment\Evidence\DeploymentEvidenceJournal;
use App\Deployment\Preflight\PreflightRunner;
use App\Deployment\Runtime\RuntimeConfigurationReconciler;
use App\Deployment\Secrets\ManagedSecretReconciler;
use App\Deployment\State\ResourceDiscovery;
use App\Deployment\Support\CommandExecutor;
use JsonException;
use Symfony\Component\Yaml\Yaml;

final readonly class LaravelCloudContinuousDeploymentAdapter implements ContinuousDeploymentAdapter
{
    /** @param array<string, string> $secretValues */
    public function __construct(
        private LaravelCloudClient $cloud,
        private CommandExecutor $commands,
        private ResourceDiscovery $discovery,
        private PreflightRunner $preflight,
        private ManagedSecretReconciler $secrets,
        private RuntimeConfigurationReconciler $runtime,
        private DnsReconciler $dns,
        private DeploymentEvidenceJournal $evidence,
        private array $secretValues = [],
        private string $binary = 'cloud',
        private string $gitBinary = 'git',
        private string $environmentName = 'production',
        private string $region = 'ap-southeast-1',
    ) {}

    public function execute(
        DeploymentPhase $phase,
        array $compiled,
        array $state,
        DeploymentAuthority $authority,
    ): array {
        return match ($phase) {
            DeploymentPhase::Preflight => $this->preflight($compiled, $state),
            DeploymentPhase::Foundation => $this->foundation($compiled, $state),
            DeploymentPhase::Secrets => $this->secrets($compiled, $state, $authority),
            DeploymentPhase::Runtime => $this->runtime($compiled, $state),
            DeploymentPhase::Deploy => $this->deploy($compiled, $state),
            DeploymentPhase::PreCommission => $this->remote($state, 'php artisan x-change:doctor --pre-commission --strict --json'),
            DeploymentPhase::Commission => $this->commission($compiled, $state),
            DeploymentPhase::Domain => $this->domain($compiled, $state),
            DeploymentPhase::Verify => $this->verify($state),
        };
    }

    /**
     * @param  array<string, mixed>  $compiled
     * @param  array<string, mixed>  $state
     * @return array<string, mixed>
     */
    private function preflight(array $compiled, array $state): array
    {
        $report = $this->preflight->run($compiled['preflight_plan'] ?? []);
        $this->evidence->record('preflight', [
            'ready' => $report['ready'],
            'checked_at' => $report['checked_at'],
            'summary' => $report['summary'],
            'results' => $report['results'],
        ]);
        $this->preflight->assertReady($report);

        if (($state['resources'] ?? []) !== []) {
            $discovered = $this->discovery->discover($compiled['profile']);

            foreach ($state['resources'] as $name => $identifier) {
                if (($discovered['resources'][$name] ?? null) !== $identifier) {
                    throw new ContinuousDeploymentException("Recorded resource [{$name}] was not rediscovered exactly.");
                }
            }
        }

        return [];
    }

    /**
     * @param  array<string, mixed>  $compiled
     * @param  array<string, mixed>  $state
     * @return array<string, mixed>
     */
    private function foundation(array $compiled, array $state): array
    {
        $profile = $compiled['profile'];
        $discovered = $this->discovery->discover($profile);
        $resources = $discovered['resources'];

        if (! isset($resources['application_id'])) {
            $application = $this->cloud->json('application:create', [
                '--name='.$profile['identity']['display_name'],
                '--repository='.$profile['release']['repository'],
                '--source-provider=github',
                '--region='.$this->region,
            ]);
            $resources['application_id'] = $this->id($application, 'application');
            $environmentId = $application['defaultEnvironmentId'] ?? null;

            if (is_string($environmentId) && $environmentId !== '') {
                $resources['environment_id'] = $environmentId;
            } else {
                $application = $this->cloud->json('application:get', [$resources['application_id']]);
                $environmentId = $application['defaultEnvironmentId'] ?? null;

                if (is_string($environmentId) && $environmentId !== '') {
                    $resources['environment_id'] = $environmentId;
                }
            }
        }

        if (! isset($resources['environment_id'])) {
            $environment = $this->cloud->json('environment:create', [
                $resources['application_id'],
                '--name='.$this->environmentName,
                '--branch='.$profile['release']['cloud_source_branch'],
            ]);
            $resources['environment_id'] = $this->id($environment, 'environment');
        }

        if (! isset($resources['database_cluster_id'])) {
            $cluster = $this->cloud->json('database-cluster:create', [
                '--name='.LaravelCloudResourceNames::foundation($profile),
                '--type=neon_serverless_postgres',
                '--engine-version=18',
                '--region='.$this->region,
            ]);
            $resources['database_cluster_id'] = $this->id($cluster, 'database cluster');
            $this->waitUntilAvailable('database-cluster:get', $resources['database_cluster_id']);
        }

        if (! isset($resources['database_id'])) {
            $database = $this->cloud->json('database:create', [
                $resources['database_cluster_id'],
                '--name=x_payout',
            ]);
            $resources['database_id'] = $this->id($database, 'database');
        }

        if (! isset($resources['cache_id'])) {
            $cache = $this->cloud->json('cache:create', [
                '--name='.LaravelCloudResourceNames::foundation($profile),
                '--type=laravel_valkey',
                '--region='.$this->region,
                '--size=valkey-pro.250mb',
                '--auto-upgrade-enabled=true',
                '--is-public=false',
                '--eviction-policy=allkeys-lru',
            ]);
            $resources['cache_id'] = $this->id($cache, 'cache');
            $this->waitUntilAvailable('cache:get', $resources['cache_id']);
        }

        $this->cloud->json('environment:update', [
            $resources['environment_id'],
            '--database-id='.$resources['database_id'],
            '--cache-id='.$resources['cache_id'],
            '--force',
        ]);

        if (! isset($resources['instance_id'])) {
            $instance = $this->cloud->json('instance:create', [
                $resources['environment_id'],
                '--name=App',
                '--type=app',
                '--size=flex-512mb',
                '--scaling-type=none',
                '--min-replicas=1',
                '--max-replicas=1',
                '--uses-scheduler=true',
            ]);
            $resources['instance_id'] = $this->id($instance, 'instance');
        }

        ksort($resources, SORT_STRING);

        return ['resources' => $resources];
    }

    /**
     * @param  array<string, mixed>  $compiled
     * @param  array<string, mixed>  $state
     * @return array<string, mixed>
     */
    private function secrets(array $compiled, array $state, DeploymentAuthority $authority): array
    {
        $environmentId = $this->resource($state, 'environment_id');
        $required = array_values(array_unique($compiled['required_secrets'] ?? []));
        $result = $this->secrets->reconcile(
            $environmentId,
            $required,
            $this->secretValues,
            $state['managed_secret_ids'] ?? [],
            false,
            $authority->rotateSecrets ? $required : [],
        );

        if (! $result['ready']) {
            throw new ContinuousDeploymentException('Required managed secrets are not ready.');
        }

        $this->evidence->record('secrets', ['actions' => $result['actions']]);

        return ['managed_secret_ids' => $result['managed_secret_ids']];
    }

    /**
     * @param  array<string, mixed>  $compiled
     * @param  array<string, mixed>  $state
     * @return array<string, mixed>
     */
    private function runtime(array $compiled, array $state): array
    {
        $environmentId = $this->resource($state, 'environment_id');
        $runtime = $this->runtime->reconcile($environmentId, $compiled['runtime'], true);
        $this->evidence->record('runtime', [
            'changed_keys' => $runtime['changed'],
            'unchanged_keys' => $runtime['unchanged'],
        ]);
        $resources = [];

        if (! isset($state['resources']['worker_process_id'])) {
            $worker = $this->cloud->json('background-process:create', [
                $this->resource($state, 'instance_id'),
                '--type=worker',
                '--connection=redis',
                '--queue=x-change-funding,x-change-feedback,default',
                '--backoff=30', '--sleep=3', '--rest=0', '--timeout=60', '--tries=3', '--processes=1',
            ]);
            $resources['worker_process_id'] = $this->id($worker, 'queue worker');
        }

        $this->cloud->json('instance:update', [
            $this->resource($state, 'instance_id'),
            '--uses-scheduler=true',
            '--force',
        ]);

        return $resources === [] ? [] : ['resources' => $resources];
    }

    /**
     * @param  array<string, mixed>  $compiled
     * @param  array<string, mixed>  $state
     * @return array<string, mixed>
     */
    private function deploy(array $compiled, array $state): array
    {
        $expectedCommit = $this->releaseCommit($compiled['profile']['release']);
        $recoveredDeploymentId = $this->recoverSuccessfulDeployment(
            $this->resource($state, 'environment_id'),
            $compiled['profile']['release']['cloud_source_branch'],
            $expectedCommit,
        );

        if ($recoveredDeploymentId !== null) {
            $this->recordDeployment($compiled, $recoveredDeploymentId, $expectedCommit, 'recovered');

            return ['last_deployment_id' => $recoveredDeploymentId];
        }

        $this->cloud->json('environment:update', [
            $this->resource($state, 'environment_id'),
            '--branch='.$compiled['profile']['release']['cloud_source_branch'],
            '--build-command=composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader',
            '--deploy-command=php artisan migrate --force',
            '--force',
        ]);
        $result = $this->commands->run([
            $this->binary, 'deploy', $this->resource($state, 'application_id'), $this->environmentName,
            '--json', '--no-wait', '-n',
        ]);

        if (! $result->successful()) {
            throw new ContinuousDeploymentException('Laravel Cloud deployment could not be started.');
        }

        $deploymentId = $this->deploymentId($result->output);
        $this->waitForDeployment($deploymentId, $compiled['profile']['release']['cloud_source_branch'], $expectedCommit);
        $this->recordDeployment($compiled, $deploymentId, $expectedCommit, 'started');

        return ['last_deployment_id' => $deploymentId];
    }

    /** @param array<string, mixed> $release */
    private function releaseCommit(array $release): string
    {
        $repository = (string) ($release['repository'] ?? '');

        if (! str_contains($repository, '://') && ! str_starts_with($repository, 'git@')) {
            $repository = 'git@github.com:'.$repository.'.git';
        }

        $ref = (string) ($release['ref'] ?? '');
        $result = $this->commands->run([
            $this->gitBinary,
            'ls-remote',
            '--exit-code',
            $repository,
            'refs/tags/'.$ref,
            'refs/tags/'.$ref.'^{}',
        ]);

        if (! $result->successful()) {
            throw new ContinuousDeploymentException('The immutable release commit could not be resolved for deployment.');
        }

        $references = [];

        foreach (preg_split('/\R/', trim($result->output)) ?: [] as $line) {
            $parts = preg_split('/\s+/', trim($line), 2);

            if (count($parts) === 2) {
                $references[$parts[1]] = $parts[0];
            }
        }

        $commit = $references['refs/tags/'.$ref.'^{}'] ?? $references['refs/tags/'.$ref] ?? null;

        if (! is_string($commit) || preg_match('/^[a-f0-9]{40}$/', $commit) !== 1) {
            throw new ContinuousDeploymentException('The immutable release tag did not resolve to a commit for deployment.');
        }

        return $commit;
    }

    private function recoverSuccessfulDeployment(string $environmentId, string $branch, string $commit): ?string
    {
        $deployments = $this->cloud->json('deployment:list', [$environmentId]);
        $matches = array_values(array_filter(
            array_is_list($deployments) ? $deployments : [],
            static fn (array $deployment): bool => ($deployment['status'] ?? null) === 'deployment.succeeded'
                && ($deployment['branchName'] ?? null) === $branch
                && ($deployment['commitHash'] ?? null) === $commit,
        ));

        if (count($matches) > 1) {
            throw new ContinuousDeploymentException('Exact successful deployment recovery is ambiguous.');
        }

        if ($matches === []) {
            return null;
        }

        return $this->id($matches[0], 'deployment');
    }

    private function waitForDeployment(string $deploymentId, string $branch, string $commit): void
    {
        for ($attempt = 1; $attempt <= 180; $attempt++) {
            $deployment = $this->cloud->json('deployment:get', [$deploymentId]);
            $status = $deployment['status'] ?? null;

            if ($status === 'deployment.succeeded') {
                if (($deployment['branchName'] ?? null) !== $branch
                    || ($deployment['commitHash'] ?? null) !== $commit) {
                    throw new ContinuousDeploymentException('Laravel Cloud deployed a source other than the exact release.');
                }

                return;
            }

            if (is_string($status) && (str_contains($status, 'failed') || str_contains($status, 'cancelled'))) {
                throw new ContinuousDeploymentException('Laravel Cloud deployment did not complete successfully.');
            }

            usleep(2_000_000);
        }

        throw new ContinuousDeploymentException('Laravel Cloud deployment did not complete in time.');
    }

    /** @param array<string, mixed> $compiled */
    private function recordDeployment(array $compiled, string $deploymentId, string $commit, string $disposition): void
    {
        $this->evidence->record('deployment', [
            'deployment_id' => $deploymentId,
            'release_ref' => $compiled['profile']['release']['ref'],
            'cloud_source_branch' => $compiled['profile']['release']['cloud_source_branch'],
            'commit' => $commit,
            'disposition' => $disposition,
            'status' => 'succeeded',
        ]);
    }

    /**
     * @param  array<string, mixed>  $state
     * @return array<string, mixed>
     */
    private function commission(array $compiled, array $state): array
    {
        $status = $this->remotePayload($state, 'php artisan x-change:commissioning:status --json', false);

        if (($status['operational'] ?? false) === true) {
            $this->evidence->record('commissioning', ['disposition' => 'already_operational']);

            return [];
        }

        if (($status['reason'] ?? null) === 'installation_manifest_stale') {
            $this->remote($state, 'php artisan x-change:commissioning:adopt --confirm-existing-installation --no-interaction');
            $this->evidence->record('commissioning', ['disposition' => 'adopted_existing_installation']);

            return [];
        }

        $manifest = $this->materializeCommissioningManifest($compiled, $state);
        $preview = $this->remotePayload(
            $state,
            'php artisan x-change:commission:preview --manifest='.$manifest.' --json --no-interaction',
            true,
        );
        $token = $preview['preview_token'] ?? null;

        if (($preview['ready'] ?? false) !== true
            || ! is_string($token)
            || preg_match('/^[a-f0-9]{64}$/', $token) !== 1) {
            throw new ContinuousDeploymentException('Hardened commissioning preview did not return a valid ready token.');
        }

        $this->evidence->record('commissioning_preview', [
            'disposition' => 'matched',
            'schema' => $preview['schema'] ?? null,
            'facts' => $preview['facts'] ?? [],
            'preview_token_hash' => hash('sha256', $token),
        ]);
        $this->remote(
            $state,
            'composer x-payout:bootstrap -- --manifest='.$manifest.' --skip-build --commissioning-preview-token='.$token.' --no-interaction',
        );
        $this->evidence->record('commissioning', [
            'disposition' => 'commissioned_once',
            'preview_token_hash' => hash('sha256', $token),
        ]);

        return [];
    }

    /** @param array<string, mixed> $compiled */
    private function materializeCommissioningManifest(array $compiled, array $state): string
    {
        $compiledOpening = (array) data_get($compiled, 'commissioning.opening', []);
        $invitations = (array) data_get($compiled, 'commissioning.invitations', []);
        $makerAmountMinor = (int) data_get($invitations, 'maker.amount_minor', 0);
        $checkerAmountMinor = (int) data_get($invitations, 'checker.amount_minor', 0);
        $deliveryMode = trim((string) ($invitations['delivery_mode'] ?? 'contact'));

        if ($makerAmountMinor <= 0 || $makerAmountMinor !== $checkerAmountMinor) {
            throw new ContinuousDeploymentException(
                'Hardened commissioning requires equal positive maker and checker invitation amounts.',
            );
        }

        $overlay = Yaml::dump([
            'extends' => 'commissioning/default.yaml',
            'onboarding' => [
                'invitation_amount' => $makerAmountMinor / 100,
            ],
            'commissioning' => [
                'opening' => $compiledOpening,
                'invitations' => [
                    'delivery_mode' => $deliveryMode,
                ],
            ],
        ], 6, 2);
        $encoded = base64_encode($overlay);
        $directory = 'storage/app/private/x-payout';
        $path = $directory.'/commissioning.generated.yaml';
        $php = '$directory='.var_export($directory, true).';'
            .'is_dir($directory) || mkdir($directory, 0700, true);'
            .'file_put_contents('.var_export($path, true).', base64_decode('.var_export($encoded, true).'));';

        $this->remote($state, 'php -r '.escapeshellarg($php));
        $this->evidence->record('commissioning_manifest', [
            'disposition' => 'materialized_from_compiled_profile',
            'path' => $path,
            'sha256' => hash('sha256', $overlay),
            'delivery_mode' => $deliveryMode,
        ]);

        return $path;
    }

    /**
     * @param  array<string, mixed>  $compiled
     * @param  array<string, mixed>  $state
     * @return array<string, mixed>
     */
    private function domain(array $compiled, array $state): array
    {
        $resources = [];
        $host = parse_url((string) $compiled['profile']['public']['canonical_url'], PHP_URL_HOST);

        if (! is_string($host) || $host === '') {
            throw new ContinuousDeploymentException('The canonical domain hostname is invalid.');
        }

        if (! isset($state['resources']['domain_id'])) {
            $domain = $this->cloud->json('domain:create', [
                $this->resource($state, 'environment_id'),
                '--name='.$host,
                '--wildcard-enabled=false',
                '--verification-method=pre_verification',
            ]);
            $resources['domain_id'] = $this->id($domain, 'domain');
        } else {
            $domain = $this->cloud->json('domain:get', [$this->resource($state, 'domain_id')]);
        }

        $domainId = $resources['domain_id'] ?? $this->resource($state, 'domain_id');
        $dns = $this->dns->reconcile($host, is_array($domain['dnsRecords'] ?? null) ? $domain['dnsRecords'] : []);
        $verification = $this->waitForDomain($domainId);
        $this->evidence->record('domain', [
            'domain_id' => $domainId,
            'dns_changed' => $dns['changed'],
            'dns_actions' => $dns['actions'],
            'hostname_status' => $verification['hostnameStatus'] ?? null,
            'ssl_status' => $verification['sslStatus'] ?? null,
            'origin_status' => $verification['originStatus'] ?? null,
        ]);

        foreach (['hostnameStatus', 'sslStatus'] as $statusKey) {
            if (! in_array($verification[$statusKey] ?? null, ['active', 'ready', 'verified'], true)) {
                throw new ContinuousDeploymentException('Laravel Cloud domain verification is not ready.');
            }
        }

        return $resources === [] ? [] : ['resources' => $resources];
    }

    /** @return array<string, mixed>|list<array<string, mixed>> */
    private function waitForDomain(string $domainId): array
    {
        $verification = [];

        for ($attempt = 1; $attempt <= 90; $attempt++) {
            $verification = $this->cloud->json('domain:verify', [$domainId]);

            if (in_array($verification['hostnameStatus'] ?? null, ['active', 'ready', 'verified'], true)
                && in_array($verification['sslStatus'] ?? null, ['active', 'ready', 'verified'], true)) {
                return $verification;
            }

            usleep(2_000_000);
        }

        return $verification;
    }

    /**
     * @param  array<string, mixed>  $state
     * @return array<string, mixed>
     */
    private function verify(array $state): array
    {
        $strict = $this->remotePayload($state, 'php artisan x-change:doctor --strict --json', true);
        $mcp = $this->remotePayload($state, 'php artisan x-mcp:doctor --json', true);
        $this->evidence->record('strict_doctor', $this->doctorSummary($strict));
        $this->evidence->record('mcp_doctor', $this->doctorSummary($mcp));

        return [];
    }

    /**
     * @param  array<string, mixed>  $state
     * @return array<string, mixed>
     */
    private function remote(array $state, string $command): array
    {
        $payload = $this->remotePayload($state, $command, true);

        if (str_contains($command, '--pre-commission')) {
            $this->evidence->record('pre_commission', $this->doctorSummary($payload));
        }

        return [];
    }

    /**
     * @param  array<string, mixed>  $state
     * @return array<string, mixed>
     */
    private function remotePayload(array $state, string $command, bool $mustSucceed): array
    {
        $started = $this->cloud->json('command:run', [
            $this->resource($state, 'environment_id'),
            '--cmd='.$command,
            '--no-monitor',
        ]);
        $commandId = $started['command_id'] ?? $started['id'] ?? null;

        if (! is_string($commandId) || $commandId === '') {
            throw new ContinuousDeploymentException('Laravel Cloud did not return a remote command identity.');
        }

        $payload = $this->waitForRemoteCommand($commandId);
        $exitCode = $payload['exitCode'] ?? $payload['exit_code'] ?? null;
        $status = $payload['status'] ?? 'command.success';

        if ($mustSucceed && ($status !== 'command.success' || ! is_numeric($exitCode) || (int) $exitCode !== 0)) {
            throw new ContinuousDeploymentException('A required remote verification command failed.');
        }

        $output = $payload['output'] ?? '{}';

        if (! is_string($output) || trim($output) === '') {
            return [];
        }

        try {
            $decoded = json_decode($output, true, flags: JSON_THROW_ON_ERROR);
        } catch (JsonException) {
            return [];
        }

        return is_array($decoded) ? $decoded : [];
    }

    /** @return array<string, mixed> */
    private function waitForRemoteCommand(string $commandId): array
    {
        for ($attempt = 1; $attempt <= 180; $attempt++) {
            $payload = $this->cloud->json('command:get', [$commandId]);
            $status = $payload['status'] ?? null;

            if (in_array($status, ['command.success', 'command.failed'], true)) {
                return $payload;
            }

            usleep(1_000_000);
        }

        throw new ContinuousDeploymentException('Laravel Cloud remote command did not complete in time.');
    }

    /** @param array<string, mixed> $state */
    private function resource(array $state, string $name): string
    {
        $identifier = $state['resources'][$name] ?? null;

        if (! is_string($identifier) || $identifier === '') {
            throw new ContinuousDeploymentException("Required deployment resource [{$name}] is missing.");
        }

        return $identifier;
    }

    /** @param array<string, mixed>|list<array<string, mixed>> $payload */
    private function id(array $payload, string $resource): string
    {
        $identifier = $payload['id'] ?? null;

        if (! is_string($identifier) || $identifier === '') {
            throw new ContinuousDeploymentException("Laravel Cloud {$resource} did not return an identity.");
        }

        return $identifier;
    }

    private function deploymentId(string $output): string
    {
        try {
            $payload = json_decode($output, true, flags: JSON_THROW_ON_ERROR);
            $identifier = $payload['deployment_id'] ?? $payload['id'] ?? null;
        } catch (JsonException) {
            $identifier = null;
        }

        if (! is_string($identifier) || $identifier === '') {
            throw new ContinuousDeploymentException('Laravel Cloud did not return a deployment identity.');
        }

        return $identifier;
    }

    private function waitUntilAvailable(string $operation, string $identifier): void
    {
        for ($attempt = 1; $attempt <= 180; $attempt++) {
            $payload = $this->cloud->json($operation, [$identifier]);
            $status = $payload['status'] ?? null;

            if (in_array($status, ['available', 'ready', 'active'], true)) {
                return;
            }

            if (in_array($status, ['failed', 'error'], true)) {
                throw new ContinuousDeploymentException("Laravel Cloud resource [{$identifier}] failed provisioning.");
            }

            usleep(500_000);
        }

        throw new ContinuousDeploymentException("Laravel Cloud resource [{$identifier}] did not become available in time.");
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    private function doctorSummary(array $payload): array
    {
        return array_filter([
            'success' => $payload['success'] ?? null,
            'ready' => $payload['ready'] ?? null,
            'passed' => $payload['passed'] ?? null,
            'failed' => $payload['failed'] ?? null,
            'state' => $payload['state'] ?? null,
            'reason' => $payload['reason'] ?? null,
        ], static fn (mixed $value): bool => $value !== null);
    }
}
