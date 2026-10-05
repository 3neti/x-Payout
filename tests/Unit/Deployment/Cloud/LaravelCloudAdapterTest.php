<?php

use App\Deployment\Cloud\LaravelCloudAdapterException;
use App\Deployment\Cloud\LaravelCloudClient;
use App\Deployment\Cloud\LaravelCloudManagedSecretTransport;
use App\Deployment\Cloud\LaravelCloudResourceDiscovery;
use App\Deployment\Support\CommandExecutor;
use App\Deployment\Support\CommandResult;

function fakeCloudExecutor(array $responses): CommandExecutor
{
    return new class($responses) implements CommandExecutor
    {
        public array $calls = [];

        public function __construct(private array $responses) {}

        public function run(array $command, ?string $input = null): CommandResult
        {
            $this->calls[] = ['command' => $command, 'input' => $input];
            $operation = $command[1] ?? '';
            $payload = $this->responses[$operation] ?? null;

            if ($payload instanceof Closure) {
                $payload = $payload($command);
            }

            if ($payload === null) {
                return new CommandResult(1, '', 'unexpected fake command');
            }

            return new CommandResult(0, json_encode($payload, JSON_THROW_ON_ERROR), '');
        }
    };
}

function cloudDiscoveryProfile(): array
{
    return [
        'identity' => ['display_name' => 'x-PayOut'],
        'release' => ['repository' => '3neti/x-Payout'],
        'runtime' => ['APP_ENV' => 'production'],
        'public' => ['canonical_url' => 'https://payout.disburse.cash'],
    ];
}

function completeCloudResponses(): array
{
    return [
        'application:list' => [[
            'id' => 'app-one',
            'name' => 'x-PayOut',
            'repositoryFullName' => '3neti/x-Payout',
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
            'command' => 'php artisan queue:work --queue=x-change-funding',
        ]],
        'domain:list' => [['id' => 'domain-one', 'name' => 'payout.disburse.cash']],
        'environment-secret:list' => [
            ['id' => 'secret-netbank', 'key' => 'NETBANK_CLIENT_SECRET'],
        ],
    ];
}

it('rediscovers one complete Laravel Cloud resource set using official list commands', function (): void {
    $executor = fakeCloudExecutor(completeCloudResponses());
    $discovered = (new LaravelCloudResourceDiscovery(new LaravelCloudClient($executor)))
        ->discover(cloudDiscoveryProfile());

    expect($discovered)->toBe([
        'resources' => [
            'application_id' => 'app-one',
            'cache_id' => 'cache-one',
            'database_cluster_id' => 'cluster-one',
            'database_id' => 'database-one',
            'domain_id' => 'domain-one',
            'environment_id' => 'env-one',
            'instance_id' => 'instance-one',
            'worker_process_id' => 'worker-one',
        ],
        'managed_secret_ids' => ['NETBANK_CLIENT_SECRET' => 'secret-netbank'],
        'missing' => [],
    ]);

    foreach ($executor->calls as $call) {
        expect(array_slice($call['command'], -2))->toBe(['--json', '-n']);
    }
});

it('returns a missing plan for an absent foundation and fails on ambiguous identity', function (): void {
    $missing = new LaravelCloudResourceDiscovery(new LaravelCloudClient(fakeCloudExecutor([
        'application:list' => [],
    ])));

    expect($missing->discover(cloudDiscoveryProfile())['missing'])
        ->toContain('application_id', 'environment_id', 'domain_id');

    $responses = completeCloudResponses();
    $responses['application:list'][] = array_merge($responses['application:list'][0], ['id' => 'app-two']);
    $ambiguous = new LaravelCloudResourceDiscovery(new LaravelCloudClient(fakeCloudExecutor($responses)));

    expect(fn () => $ambiguous->discover(cloudDiscoveryProfile()))
        ->toThrow(LaravelCloudAdapterException::class, 'application discovery is ambiguous');
});

it('pipes secret values to the official Cloud commands and never places them in arguments', function (): void {
    $executor = fakeCloudExecutor([
        'environment-secret:list' => [['id' => 'secret-existing', 'key' => 'EXISTING']],
        'secret:create' => ['id' => 'secret-created'],
        'secret:update' => ['id' => 'secret-existing'],
        'environment-secret:attach' => ['id' => 'env-one'],
    ]);
    $transport = new LaravelCloudManagedSecretTransport(new LaravelCloudClient($executor));

    expect($transport->attached('env-one'))->toBe(['EXISTING' => ['secret-existing']])
        ->and($transport->create('CREATED', 'private-create-value'))->toBe('secret-created');
    $transport->rotate('secret-existing', 'private-rotate-value');
    $transport->attach('env-one', 'secret-created');

    $serializedCommands = json_encode(array_column($executor->calls, 'command'), JSON_THROW_ON_ERROR);

    expect($serializedCommands)
        ->not->toContain('private-create-value', 'private-rotate-value')
        ->and($executor->calls[1]['input'])->toBe('private-create-value')
        ->and($executor->calls[2]['input'])->toBe('private-rotate-value')
        ->and($executor->calls[1]['command'])->toContain('secret:create', '--name=CREATED', '--json', '-n')
        ->and($executor->calls[2]['command'])->toContain('secret:update', 'secret-existing', '--force');
});
