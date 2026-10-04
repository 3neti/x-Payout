<?php

use App\Deployment\State\DeploymentStateException;
use App\Deployment\State\DeploymentStateStore;

it('writes and loads owner-only generated state atomically', function (): void {
    $store = new DeploymentStateStore;
    $directory = sys_get_temp_dir().'/x-payout-state-'.bin2hex(random_bytes(4));
    $path = $directory.'/instance.json';
    $state = $store->initial(str_repeat('a', 64), 'laravel-cloud');
    $state['resources'] = [
        'application_id' => 'app-test',
        'environment_id' => 'env-test',
    ];
    $state['managed_secret_ids'] = ['NETBANK_CLIENT_ID' => 'secret-test'];
    $state['checkpoints'] = ['foundation' => 'complete'];

    $written = $store->write($path, $state, new DateTimeImmutable('2026-10-05T00:00:00+00:00'));
    $loaded = $store->load($path);

    expect($loaded)->toBe($written)
        ->and($loaded['updated_at'])->toBe('2026-10-05T00:00:00+00:00')
        ->and(fileperms($path) & 0777)->toBe(0600)
        ->and(fileperms($directory) & 0777)->toBe(0700)
        ->and(glob($directory.'/.x-payout-state-*'))->toBe([]);
});

it('returns null when generated state has not been created', function (): void {
    $path = sys_get_temp_dir().'/missing-x-payout-state-'.bin2hex(random_bytes(4)).'.json';

    expect((new DeploymentStateStore)->load($path))->toBeNull();
});

it('rejects unsupported state that could become a second configuration authority', function (): void {
    $store = new DeploymentStateStore;
    $state = $store->initial(str_repeat('b', 64), 'laravel-cloud');
    $state['runtime'] = ['APP_URL' => 'https://unexpected.example'];

    expect(fn () => $store->validate($state))
        ->toThrow(DeploymentStateException::class, 'unsupported keys: runtime');
});

it('rejects invalid resource secret and checkpoint identities', function (Closure $mutate, string $message): void {
    $store = new DeploymentStateStore;
    $state = $store->initial(str_repeat('c', 64), 'laravel-cloud');
    $mutate($state);

    expect(fn () => $store->validate($state))
        ->toThrow(DeploymentStateException::class, $message);
})->with([
    'unknown resource' => [
        function (array &$state): void {
            $state['resources']['provider_account_number'] = 'sensitive';
        },
        'unsupported resources',
    ],
    'invalid secret name' => [
        function (array &$state): void {
            $state['managed_secret_ids']['not-a-secret-name'] = 'secret-test';
        },
        'invalid managed secret identity',
    ],
    'invalid checkpoint status' => [
        function (array &$state): void {
            $state['checkpoints']['commission'] = 'authorized';
        },
        'invalid checkpoint',
    ],
]);

it('ships a value-free state schema matching the store contract', function (): void {
    $schemaPath = dirname(__DIR__, 4).'/ops/deployment/schema/state.v1.schema.json';
    $schema = json_decode((string) file_get_contents($schemaPath), true, flags: JSON_THROW_ON_ERROR);

    expect($schema['properties']['schema']['const'])->toBe('x-payout.deployment-state.v1')
        ->and($schema['properties'])->not->toHaveKeys([
            'runtime',
            'credentials',
            'account_number',
            'operator_authority',
        ]);
});
