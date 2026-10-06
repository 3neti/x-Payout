<?php

use App\Deployment\Secrets\SecretReconciliationException;
use App\Deployment\Secrets\SecretRotationSelection;
use Symfony\Component\Process\Process;

it('distinguishes no rotation from backward-compatible all-secret rotation', function (): void {
    expect(SecretRotationSelection::fromInput(null, false))->toBeNull()
        ->and(SecretRotationSelection::fromInput(null, true)?->resolve(['SECOND', 'FIRST']))
        ->toBe(['FIRST', 'SECOND']);
});

it('normalizes an explicit named rotation allowlist', function (): void {
    $selection = SecretRotationSelection::fromInput(
        'PASSPORT_PUBLIC_KEY, PASSPORT_PRIVATE_KEY',
        false,
    );

    expect($selection?->resolve([
        'NETBANK_CLIENT_SECRET',
        'PASSPORT_PRIVATE_KEY',
        'PASSPORT_PUBLIC_KEY',
    ]))->toBe([
        'PASSPORT_PRIVATE_KEY',
        'PASSPORT_PUBLIC_KEY',
    ]);
});

it('rejects ambiguous malformed duplicate and unused named rotation requests', function (
    ?string $namedSecrets,
    bool $rotateAll,
    string $message,
): void {
    $resolve = static function () use ($namedSecrets, $rotateAll): array {
        $selection = SecretRotationSelection::fromInput($namedSecrets, $rotateAll);

        return $selection?->resolve(['PASSPORT_PRIVATE_KEY', 'PASSPORT_PUBLIC_KEY']) ?? [];
    };

    expect($resolve)->toThrow(SecretReconciliationException::class, $message);
})->with([
    'mixed all and named authority' => [
        'PASSPORT_PRIVATE_KEY',
        true,
        'Use either bare --rotate-secrets',
    ],
    'empty named authority' => ['', false, 'requires a comma-delimited list'],
    'empty list item' => [
        'PASSPORT_PRIVATE_KEY,',
        false,
        'requires a comma-delimited list',
    ],
    'invalid name' => ['passport_private_key', false, 'invalid secret name'],
    'duplicate name' => [
        'PASSPORT_PRIVATE_KEY,PASSPORT_PRIVATE_KEY',
        false,
        'duplicate secret name',
    ],
    'unused name' => ['UNUSED_SECRET', false, 'unused secrets: UNUSED_SECRET'],
]);

it('requires the owner-only secrets input when named rotation reaches the real entrypoint', function (): void {
    $root = dirname(__DIR__, 4);
    $process = new Process([
        PHP_BINARY,
        $root.'/bin/x-payout-deploy',
        'continuous',
        '--instance='.$root.'/ops/deployment/examples/instance.yaml',
        '--adapter=laravel-cloud',
        '--apply',
        '--rotate-secrets=PASSPORT_PRIVATE_KEY,PASSPORT_PUBLIC_KEY',
    ], $root);

    $process->run();

    expect($process->getExitCode())->toBe(1)
        ->and($process->getErrorOutput())
        ->toContain('Secret rotation requires the owner-only --secrets input.');
});
