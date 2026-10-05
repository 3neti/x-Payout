<?php

use App\Deployment\Controller\ContinuousDeploymentAdapter;
use App\Deployment\Controller\ContinuousDeploymentController;
use App\Deployment\Controller\ContinuousDeploymentException;
use App\Deployment\Controller\DeploymentAuthority;
use App\Deployment\Controller\DeploymentPhase;
use App\Deployment\State\DeploymentStateStore;

function controllerCompiledProfile(): array
{
    return [
        'profile_fingerprint' => hash('sha256', 'resumable-controller'),
        'profile' => ['identity' => ['id' => 'example']],
        'runtime' => ['APP_ENV' => 'production'],
    ];
}

function controllerFakeAdapter(?DeploymentPhase $failOnceAt = null): ContinuousDeploymentAdapter
{
    return new class($failOnceAt) implements ContinuousDeploymentAdapter
    {
        /** @var array<string, int> */
        public array $calls = [];

        private bool $failed = false;

        public function __construct(private readonly ?DeploymentPhase $failOnceAt) {}

        public function execute(DeploymentPhase $phase, array $compiled, array $state, DeploymentAuthority $authority): array
        {
            $this->calls[$phase->value] = ($this->calls[$phase->value] ?? 0) + 1;

            if ($phase === $this->failOnceAt && ! $this->failed) {
                $this->failed = true;

                throw new RuntimeException('Injected failure.');
            }

            return match ($phase) {
                DeploymentPhase::Foundation => ['resources' => ['application_id' => 'app-one', 'environment_id' => 'env-one']],
                DeploymentPhase::Secrets => ['managed_secret_ids' => ['APP_KEY' => 'secret-one']],
                DeploymentPhase::Deploy => ['last_deployment_id' => 'deployment-one'],
                default => [],
            };
        }
    };
}

it('resumes safely after a failure in every phase', function (DeploymentPhase $failurePhase): void {
    $adapter = controllerFakeAdapter($failurePhase);
    $controller = new ContinuousDeploymentController(new DeploymentStateStore, $adapter, 'fake-cloud');
    $statePath = sys_get_temp_dir().'/x-payout-controller-'.bin2hex(random_bytes(4)).'/state.json';
    $authority = new DeploymentAuthority(apply: true, commission: true, activateDomain: true);

    expect(fn () => $controller->run($statePath, controllerCompiledProfile(), $authority))
        ->toThrow(ContinuousDeploymentException::class, "Deployment phase [{$failurePhase->value}] failed safely.");

    $failedState = (new DeploymentStateStore)->load($statePath);
    expect($failedState['checkpoints'][$failurePhase->value])->toBe('failed');

    $completedBeforeFailure = [];

    foreach (DeploymentPhase::cases() as $phase) {
        if ($phase === $failurePhase) {
            break;
        }

        $completedBeforeFailure[] = $phase;
    }

    $final = $controller->run($statePath, controllerCompiledProfile(), $authority);

    foreach ($completedBeforeFailure as $phase) {
        $expectedCalls = $phase === DeploymentPhase::Preflight ? 2 : 1;
        expect($adapter->calls[$phase->value])->toBe($expectedCalls);
    }

    expect($adapter->calls[$failurePhase->value])->toBe(2)
        ->and(array_values(array_unique($final['checkpoints'])))->toBe(['complete'])
        ->and($final['resources']['environment_id'])->toBe('env-one')
        ->and($final['managed_secret_ids']['APP_KEY'])->toBe('secret-one')
        ->and($final['last_deployment_id'])->toBe('deployment-one');

    $callsBeforeRerun = $adapter->calls;
    $rerun = $controller->run($statePath, controllerCompiledProfile(), $authority);

    foreach (DeploymentPhase::cases() as $phase) {
        $expectedIncrease = in_array($phase, [DeploymentPhase::Preflight, DeploymentPhase::Verify], true) ? 1 : 0;
        expect($adapter->calls[$phase->value])->toBe($callsBeforeRerun[$phase->value] + $expectedIncrease);
    }

    expect($rerun['resources'])->toBe($final['resources'])
        ->and($rerun['managed_secret_ids'])->toBe($final['managed_secret_ids'])
        ->and($rerun['last_deployment_id'])->toBe($final['last_deployment_id']);
})->with(array_combine(
    array_map(static fn (DeploymentPhase $phase): string => $phase->value, DeploymentPhase::cases()),
    array_map(static fn (DeploymentPhase $phase): array => [$phase], DeploymentPhase::cases()),
));

it('rejects state from a different compiled profile', function (): void {
    $adapter = controllerFakeAdapter();
    $store = new DeploymentStateStore;
    $controller = new ContinuousDeploymentController($store, $adapter, 'fake-cloud');
    $statePath = sys_get_temp_dir().'/x-payout-controller-'.bin2hex(random_bytes(4)).'/state.json';
    $store->write($statePath, $store->initial(hash('sha256', 'other-profile'), 'fake-cloud'));

    expect(fn () => $controller->run(
        $statePath,
        controllerCompiledProfile(),
        new DeploymentAuthority(apply: true, commission: true, activateDomain: true),
    ))->toThrow(ContinuousDeploymentException::class, 'does not belong');
});
