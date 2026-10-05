<?php

use App\Deployment\State\DeploymentStateException;
use App\Deployment\State\DeploymentStateStore;
use App\Deployment\State\ResourceDiscovery;
use App\Deployment\State\ResourceStateReconciler;

function fakeResourceDiscovery(array $result): ResourceDiscovery
{
    return new class($result) implements ResourceDiscovery
    {
        public int $reads = 0;

        public int $mutations = 0;

        public function __construct(private array $result) {}

        public function discover(array $profile): array
        {
            $this->reads++;

            return $this->result;
        }
    };
}

function completeDiscoveryResult(): array
{
    return [
        'resources' => [
            'application_id' => 'app-one',
            'environment_id' => 'env-one',
            'domain_id' => 'domain-one',
        ],
        'managed_secret_ids' => ['NETBANK_CLIENT_SECRET' => 'secret-one'],
        'missing' => [],
    ];
}

it('reconstructs deleted state and leaves an unchanged rerun untouched', function (): void {
    $path = sys_get_temp_dir().'/x-payout-recovery-'.bin2hex(random_bytes(4)).'/state.json';
    $fingerprint = str_repeat('a', 64);
    $discovery = fakeResourceDiscovery(completeDiscoveryResult());
    $reconciler = new ResourceStateReconciler(new DeploymentStateStore, $discovery);

    $first = $reconciler->reconcile($path, $fingerprint, 'laravel-cloud', []);
    $firstContents = file_get_contents($path);
    $firstTimestamp = filemtime($path);
    $second = $reconciler->reconcile($path, $fingerprint, 'laravel-cloud', []);

    expect($first['changed'])->toBeTrue()
        ->and($second['changed'])->toBeFalse()
        ->and(file_get_contents($path))->toBe($firstContents)
        ->and(filemtime($path))->toBe($firstTimestamp)
        ->and($discovery->reads)->toBe(2)
        ->and($discovery->mutations)->toBe(0);

    unlink($path);
    $recovered = $reconciler->reconcile($path, $fingerprint, 'laravel-cloud', []);

    expect($recovered['changed'])->toBeTrue()
        ->and($recovered['state']['resources'])->toBe(completeDiscoveryResult()['resources'])
        ->and($discovery->mutations)->toBe(0);
});

it('fails closed when rediscovery conflicts with or loses recorded state', function (): void {
    $path = sys_get_temp_dir().'/x-payout-conflict-'.bin2hex(random_bytes(4)).'/state.json';
    $store = new DeploymentStateStore;
    $state = $store->initial(str_repeat('b', 64), 'laravel-cloud');
    $state['resources'] = ['application_id' => 'app-original'];
    $store->write($path, $state);

    $conflict = completeDiscoveryResult();
    $conflict['resources']['application_id'] = 'app-different';

    expect(fn () => (new ResourceStateReconciler($store, fakeResourceDiscovery($conflict)))
        ->reconcile($path, str_repeat('b', 64), 'laravel-cloud', []))
        ->toThrow(DeploymentStateException::class, 'conflicts with state');

    $missing = completeDiscoveryResult();
    unset($missing['resources']['application_id']);

    expect(fn () => (new ResourceStateReconciler($store, fakeResourceDiscovery($missing)))
        ->reconcile($path, str_repeat('b', 64), 'laravel-cloud', []))
        ->toThrow(DeploymentStateException::class, 'was not rediscovered');
});
