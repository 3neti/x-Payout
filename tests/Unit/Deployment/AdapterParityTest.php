<?php

use App\Deployment\Cloud\LaravelCloudClient;
use App\Deployment\Cloud\LaravelCloudManagedSecretTransport;
use App\Deployment\Cloud\LaravelCloudResourceDiscovery;
use App\Deployment\Dns\DigitalOceanDnsPrerequisiteProbe;
use App\Deployment\Preflight\CompositePrerequisiteProbe;
use App\Deployment\Preflight\PreflightCatalog;
use App\Deployment\Preflight\PreflightRunner;
use App\Deployment\Preflight\PrerequisiteProbe;
use App\Deployment\Profiles\InstanceProfileCompiler;
use App\Deployment\Providers\EmiProviderPrerequisiteProbe;
use App\Deployment\Secrets\ManagedSecretReconciler;
use App\Deployment\State\DeploymentStateStore;
use App\Deployment\State\ResourceStateReconciler;
use App\Deployment\Support\CommandExecutor;
use App\Deployment\Support\CommandResult;
use LBHurtado\EmiCore\Contracts\ProviderLivePreflightProbe;
use LBHurtado\EmiCore\Data\Providers\ProviderLivePreflightRequestData;
use LBHurtado\EmiCore\Data\Providers\ProviderLivePreflightResultData;

it('proves fake-transport parity resource recovery and an unchanged rerun', function (): void {
    $root = dirname(__DIR__, 3);
    $profile = (new InstanceProfileCompiler)->validate($root.'/ops/deployment/examples/instance.yaml');
    $fingerprint = hash('sha256', 'adapter-parity');
    $plan = (new PreflightCatalog)->build($profile, $fingerprint);
    $liveProvider = new class implements ProviderLivePreflightProbe
    {
        public function providerCode(): string
        {
            return 'netbank';
        }

        public function checkLiveReadiness(ProviderLivePreflightRequestData $request): ProviderLivePreflightResultData
        {
            return new ProviderLivePreflightResultData(
                provider: $request->provider,
                connectionReference: $request->connectionReference,
                ready: true,
                checkedAt: new DateTimeImmutable('2026-10-05T00:00:00+00:00'),
            );
        }
    };
    $dnsCommands = new class implements CommandExecutor
    {
        public function run(array $command, ?string $input = null): CommandResult
        {
            return new CommandResult(0, '[{"domain":"example.com"}]', '');
        }
    };
    $ready = new class implements PrerequisiteProbe
    {
        public function inspect(array $check): array
        {
            return [
                'status' => 'ready',
                'reason' => 'Verified by the fake read-only adapter.',
                'remediation' => 'None.',
                'evidence' => ['adapter' => 'fake'],
            ];
        }
    };
    $runner = new PreflightRunner(new CompositePrerequisiteProbe([
        'source-control' => $ready,
        'dns' => new DigitalOceanDnsPrerequisiteProbe($dnsCommands, 'example.com'),
        'object-storage' => $ready,
        'secret-custody' => $ready,
        'provider' => new EmiProviderPrerequisiteProbe($profile, [$liveProvider]),
        'sms' => $ready,
        'operator-approval' => $ready,
    ]));
    $report = $runner->run($plan, new DateTimeImmutable('2026-10-05T00:00:00+00:00'));
    $runner->assertReady($report);

    $requiredSecrets = $profile['deployment_required_secrets'];
    $attachedSecrets = array_map(
        fn (string $name): array => ['id' => 'secret-'.strtolower($name), 'key' => $name],
        $requiredSecrets,
    );
    $cloudCommands = new class($attachedSecrets) implements CommandExecutor
    {
        public array $operations = [];

        public function __construct(private array $attachedSecrets) {}

        public function run(array $command, ?string $input = null): CommandResult
        {
            $operation = $command[1];
            $this->operations[] = $operation;
            $payload = match ($operation) {
                'application:list' => [[
                    'id' => 'app-one',
                    'name' => 'Example PayOut',
                    'repositoryFullName' => 'example/x-payout',
                ]],
                'environment:list' => [[
                    'id' => 'env-one',
                    'name' => 'production',
                    'databaseSchemaId' => 'database-one',
                    'cacheId' => 'cache-one',
                ]],
                'instance:list' => [['id' => 'instance-one', 'isDefault' => true]],
                'database-cluster:list' => [[
                    'id' => 'cluster-one',
                    'schemas' => [['id' => 'database-one']],
                ]],
                'cache:list' => [['id' => 'cache-one']],
                'background-process:list' => [[
                    'id' => 'worker-one',
                    'command' => 'php artisan queue:work',
                ]],
                'domain:list' => [['id' => 'domain-one', 'name' => 'payout.example.com']],
                'environment-secret:list' => $this->attachedSecrets,
                default => null,
            };

            return $payload === null
                ? new CommandResult(1, '', 'mutation was not expected')
                : new CommandResult(0, json_encode($payload, JSON_THROW_ON_ERROR), '');
        }
    };
    $cloud = new LaravelCloudClient($cloudCommands);
    $statePath = sys_get_temp_dir().'/x-payout-adapter-parity-'.bin2hex(random_bytes(4)).'/state.json';
    $reconciler = new ResourceStateReconciler(
        new DeploymentStateStore,
        new LaravelCloudResourceDiscovery($cloud),
    );
    $first = $reconciler->reconcile($statePath, $fingerprint, 'laravel-cloud', $profile);
    $second = $reconciler->reconcile($statePath, $fingerprint, 'laravel-cloud', $profile);
    $secretResult = (new ManagedSecretReconciler(new LaravelCloudManagedSecretTransport($cloud)))
        ->reconcile(
            'env-one',
            $requiredSecrets,
            [],
            $second['state']['managed_secret_ids'],
            true,
        );

    expect($report['ready'])->toBeTrue()
        ->and($first['changed'])->toBeTrue()
        ->and($second['changed'])->toBeFalse()
        ->and($secretResult['ready'])->toBeTrue()
        ->and(array_unique(array_column($secretResult['actions'], 'action')))->toBe(['unchanged'])
        ->and($cloudCommands->operations)->not->toContain(
            'application:create',
            'environment:create',
            'secret:create',
            'secret:update',
            'environment-secret:attach',
            'domain:create',
        );

    unlink($statePath);
    $recovered = $reconciler->reconcile($statePath, $fingerprint, 'laravel-cloud', $profile);

    expect($recovered['changed'])->toBeTrue()
        ->and($recovered['state']['resources'])->toBe($first['state']['resources'])
        ->and($cloudCommands->operations)->not->toContain('application:create', 'domain:create');
});
