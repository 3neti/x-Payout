<?php

use App\Deployment\Cloud\LaravelCloudClient;
use App\Deployment\Controller\ContinuousDeploymentAdapter;
use App\Deployment\Controller\ContinuousDeploymentException;
use App\Deployment\Controller\DeploymentAuthority;
use App\Deployment\Controller\DeploymentPhase;
use App\Deployment\Evidence\DeploymentEvidenceJournal;
use App\Deployment\State\DeploymentStateStore;
use App\Deployment\State\ResourceDiscovery;
use App\Deployment\Support\CommandExecutor;
use App\Deployment\Support\CommandResult;
use App\Deployment\Verification\LaravelCloudPreCommissionVerifier;

function portableVerificationCompiled(): array
{
    return [
        'profile_fingerprint' => str_repeat('a', 64),
        'profile' => [
            'release' => [
                'ref' => 'v1.0.0-beta.71',
                'cloud_source_branch' => 'release/v1.0.0-beta.71',
            ],
        ],
        'required_secrets' => ['NETBANK_CLIENT_SECRET'],
        'commissioning_required_secrets' => [],
    ];
}

function portableVerificationDiscovery(array $overrides = []): ResourceDiscovery
{
    $defaults = [
        'resources' => [
            'application_id' => 'app-one',
            'environment_id' => 'env-one',
            'instance_id' => 'instance-one',
            'database_cluster_id' => 'cluster-one',
            'database_id' => 'database-one',
            'cache_id' => 'cache-one',
            'worker_process_id' => 'worker-one',
            'domain_id' => 'domain-one',
        ],
        'managed_secret_ids' => ['NETBANK_CLIENT_SECRET' => 'secret-one'],
        'missing' => [],
    ];
    $result = array_replace($defaults, $overrides);

    if (isset($overrides['resources'])) {
        $result['resources'] = array_replace($defaults['resources'], $overrides['resources']);
    }

    return new class($result) implements ResourceDiscovery
    {
        public function __construct(private array $result) {}

        public function discover(array $profile): array
        {
            return $this->result;
        }
    };
}

function portableVerificationAdapter(DeploymentEvidenceJournal $evidence): ContinuousDeploymentAdapter
{
    return new class($evidence) implements ContinuousDeploymentAdapter
    {
        public array $phases = [];

        public function __construct(private DeploymentEvidenceJournal $evidence) {}

        public function execute(
            DeploymentPhase $phase,
            array $compiled,
            array $state,
            DeploymentAuthority $authority,
        ): array {
            $this->phases[] = $phase;

            if ($phase === DeploymentPhase::Preflight) {
                $this->evidence->record('preflight', [
                    'results' => [[
                        'id' => 'release.source',
                        'status' => 'ready',
                        'evidence' => [
                            'commit' => str_repeat('b', 40),
                        ],
                    ]],
                ]);
            }

            if ($phase === DeploymentPhase::PreCommission) {
                $this->evidence->record('pre_commission', ['success' => true]);
            }

            return [];
        }
    };
}

function portableVerificationCloud(array $deployments): LaravelCloudClient
{
    $executor = new class($deployments) implements CommandExecutor
    {
        public array $calls = [];

        public function __construct(private array $deployments) {}

        public function run(array $command, ?string $input = null): CommandResult
        {
            $this->calls[] = $command;

            return new CommandResult(
                0,
                json_encode($this->deployments, JSON_THROW_ON_ERROR),
                '',
            );
        }
    };

    return new LaravelCloudClient($executor);
}

function portableVerifier(
    ResourceDiscovery $discovery,
    ContinuousDeploymentAdapter $adapter,
    LaravelCloudClient $cloud,
    DeploymentEvidenceJournal $evidence,
): LaravelCloudPreCommissionVerifier {
    return new LaravelCloudPreCommissionVerifier(
        $discovery,
        $adapter,
        $cloud,
        $evidence,
        new DeploymentStateStore,
    );
}

it('verifies the exact deployed release without running mutating phases', function (): void {
    $evidence = new DeploymentEvidenceJournal;
    $adapter = portableVerificationAdapter($evidence);
    $verifier = portableVerifier(
        portableVerificationDiscovery(),
        $adapter,
        portableVerificationCloud([[
            'id' => 'deployment-one',
            'status' => 'deployment.succeeded',
            'branchName' => 'release/v1.0.0-beta.71',
            'commitHash' => str_repeat('b', 40),
        ]]),
        $evidence,
    );

    $state = $verifier->verify(portableVerificationCompiled());

    expect($adapter->phases)->toBe([
        DeploymentPhase::Preflight,
        DeploymentPhase::PreCommission,
    ])->and($state['last_deployment_id'])->toBe('deployment-one')
        ->and($state['checkpoints'])->toBe([
            'preflight' => 'complete',
            'deploy' => 'complete',
            'pre-commission' => 'complete',
        ])->and($evidence->all()['deployment']['disposition'])->toBe('verified_existing')
        ->and($evidence->all()['pre_commission'])->toBe(['success' => true]);
});

it('fails before remote verification when a required resource is absent', function (): void {
    $evidence = new DeploymentEvidenceJournal;
    $adapter = portableVerificationAdapter($evidence);
    $discovery = portableVerificationDiscovery([
        'resources' => ['worker_process_id' => null],
        'missing' => ['worker_process_id'],
    ]);

    expect(fn () => portableVerifier(
        $discovery,
        $adapter,
        portableVerificationCloud([]),
        $evidence,
    )->verify(portableVerificationCompiled()))
        ->toThrow(ContinuousDeploymentException::class, 'missing resources: worker_process_id');

    expect($adapter->phases)->toBe([]);
});

it('fails before remote verification when a required managed secret is absent', function (): void {
    $evidence = new DeploymentEvidenceJournal;
    $adapter = portableVerificationAdapter($evidence);

    expect(fn () => portableVerifier(
        portableVerificationDiscovery(['managed_secret_ids' => []]),
        $adapter,
        portableVerificationCloud([]),
        $evidence,
    )->verify(portableVerificationCompiled()))
        ->toThrow(ContinuousDeploymentException::class, 'missing managed secrets: NETBANK_CLIENT_SECRET');

    expect($adapter->phases)->toBe([]);
});

it('fails closed when exact successful deployment identity is ambiguous', function (): void {
    $evidence = new DeploymentEvidenceJournal;
    $adapter = portableVerificationAdapter($evidence);
    $deployment = [
        'id' => 'deployment-one',
        'status' => 'deployment.succeeded',
        'branchName' => 'release/v1.0.0-beta.71',
        'commitHash' => str_repeat('b', 40),
    ];

    expect(fn () => portableVerifier(
        portableVerificationDiscovery(),
        $adapter,
        portableVerificationCloud([$deployment, array_replace($deployment, ['id' => 'deployment-two'])]),
        $evidence,
    )->verify(portableVerificationCompiled()))
        ->toThrow(ContinuousDeploymentException::class, 'verification is ambiguous');

    expect($adapter->phases)->toBe([DeploymentPhase::Preflight]);
});
