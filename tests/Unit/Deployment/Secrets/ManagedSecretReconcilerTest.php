<?php

use App\Deployment\Secrets\ManagedSecretReconciler;
use App\Deployment\Secrets\ManagedSecretTransport;
use App\Deployment\Secrets\SecretInputLoader;
use App\Deployment\Secrets\SecretReconciliationException;

function fakeManagedSecretTransport(array $attached = [], ?array $available = null): ManagedSecretTransport
{
    return new class($attached, $available ?? $attached) implements ManagedSecretTransport
    {
        public array $calls = [];

        public function __construct(
            private array $attachedSecrets,
            private array $availableSecrets,
        ) {}

        public function attached(string $environmentId): array
        {
            $this->calls[] = ['attached', $environmentId];

            return $this->attachedSecrets;
        }

        public function available(): array
        {
            $this->calls[] = ['available'];

            return $this->availableSecrets;
        }

        public function create(string $name, string $value): string
        {
            $this->calls[] = ['create', $name, hash('sha256', $value)];

            return 'secret-'.strtolower($name);
        }

        public function rotate(string $secretId, string $value): void
        {
            $this->calls[] = ['rotate', $secretId, hash('sha256', $value)];
        }

        public function attach(string $environmentId, string $secretId): void
        {
            $this->calls[] = ['attach', $environmentId, $secretId];
        }
    };
}

it('loads an exact owner-only one-time secrets file', function (): void {
    $path = tempnam(sys_get_temp_dir(), 'x-payout-secret-input-');
    file_put_contents($path, "SECOND=value-two\nFIRST=value-one\n");
    chmod($path, 0600);

    $values = (new SecretInputLoader)->load($path, ['FIRST', 'SECOND']);

    expect($values)->toBe(['FIRST' => 'value-one', 'SECOND' => 'value-two']);

    unlink($path);
});

it('rejects missing unused duplicate empty and permissive secret input', function (string $contents, array $required, int $mode, string $message): void {
    $path = tempnam(sys_get_temp_dir(), 'x-payout-secret-input-');
    file_put_contents($path, $contents);
    chmod($path, $mode);

    expect(fn () => (new SecretInputLoader)->load($path, $required))
        ->toThrow(SecretReconciliationException::class, $message);

    unlink($path);
})->with([
    'missing' => ["FIRST=value\n", ['FIRST', 'SECOND'], 0600, 'missing required entries: SECOND'],
    'unused' => ["FIRST=value\nEXTRA=value\n", ['FIRST'], 0600, 'unused entries: EXTRA'],
    'duplicate' => ["FIRST=value\nFIRST=other\n", ['FIRST'], 0600, 'duplicated'],
    'empty' => ["FIRST=\n", ['FIRST'], 0600, 'is empty'],
    'permissions' => ["FIRST=value\n", ['FIRST'], 0644, 'permissions 0600'],
]);

it('creates and attaches only missing secrets without returning their values', function (): void {
    $transport = fakeManagedSecretTransport(['FIRST' => ['secret-first']]);
    $result = (new ManagedSecretReconciler($transport))->reconcile(
        'env-test',
        ['FIRST', 'SECOND'],
        ['FIRST' => 'never-used', 'SECOND' => 'private-second'],
        ['FIRST' => 'secret-first'],
    );

    expect($result)->toBe([
        'ready' => true,
        'managed_secret_ids' => [
            'FIRST' => 'secret-first',
            'SECOND' => 'secret-second',
        ],
        'actions' => [
            ['name' => 'FIRST', 'action' => 'unchanged'],
            ['name' => 'SECOND', 'action' => 'created_and_attached'],
        ],
    ])->and(json_encode($result, JSON_THROW_ON_ERROR))->not->toContain('private-second', 'never-used')
        ->and($transport->calls)->toContain(
            ['create', 'SECOND', hash('sha256', 'private-second')],
            ['attach', 'env-test', 'secret-second'],
        );
});

it('is a no-op on an unchanged rerun and reports missing attachments in check mode', function (): void {
    $attached = ['FIRST' => ['secret-first']];
    $transport = fakeManagedSecretTransport($attached);
    $reconciler = new ManagedSecretReconciler($transport);

    $unchanged = $reconciler->reconcile('env-test', ['FIRST'], [], ['FIRST' => 'secret-first']);
    $check = $reconciler->reconcile('env-test', ['FIRST', 'SECOND'], [], ['FIRST' => 'secret-first'], true);

    expect($unchanged['actions'])->toBe([['name' => 'FIRST', 'action' => 'unchanged']])
        ->and($check['ready'])->toBeFalse()
        ->and($check['actions'])->toContain(['name' => 'SECOND', 'action' => 'create_and_attach_required'])
        ->and(array_column($transport->calls, 0))->not->toContain('create', 'rotate', 'attach');
});

it('rotates only with explicit authority and rejects identity ambiguity', function (): void {
    $transport = fakeManagedSecretTransport([
        'FIRST' => ['secret-first'],
        'SECOND' => ['secret-second'],
    ]);
    $result = (new ManagedSecretReconciler($transport))->reconcile(
        'env-test',
        ['FIRST', 'SECOND'],
        ['FIRST' => 'replacement', 'SECOND' => 'leave-unchanged'],
        ['FIRST' => 'secret-first', 'SECOND' => 'secret-second'],
        false,
        ['FIRST'],
    );

    expect($result['actions'])->toBe([
        ['name' => 'FIRST', 'action' => 'rotated'],
        ['name' => 'SECOND', 'action' => 'unchanged'],
    ])->and($transport->calls)
        ->toContain(['rotate', 'secret-first', hash('sha256', 'replacement')])
        ->not->toContain(['rotate', 'secret-second', hash('sha256', 'leave-unchanged')]);

    $ambiguous = fakeManagedSecretTransport(['FIRST' => ['secret-one', 'secret-two']]);

    expect(fn () => (new ManagedSecretReconciler($ambiguous))->reconcile('env-test', ['FIRST'], []))
        ->toThrow(SecretReconciliationException::class, 'multiple attached identities');

    $missingAttachment = fakeManagedSecretTransport();

    expect(fn () => (new ManagedSecretReconciler($missingAttachment))->reconcile(
        'env-test',
        ['FIRST'],
        ['FIRST' => 'replacement'],
        ['FIRST' => 'secret-first'],
    ))->toThrow(SecretReconciliationException::class, 'no longer exists');
});

it('reattaches one exact existing organization secret without requiring its value', function (): void {
    $transport = fakeManagedSecretTransport([], ['FIRST' => ['secret-first']]);
    $result = (new ManagedSecretReconciler($transport))->reconcile(
        'env-new',
        ['FIRST'],
        [],
    );

    expect($result['managed_secret_ids'])->toBe(['FIRST' => 'secret-first'])
        ->and($result['actions'])->toBe([['name' => 'FIRST', 'action' => 'attached_existing']])
        ->and($transport->calls)->toContain(['attach', 'env-new', 'secret-first']);
});
