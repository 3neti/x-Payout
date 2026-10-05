<?php

use App\Deployment\Runtime\RuntimeConfigurationReconciler;
use App\Deployment\Runtime\RuntimeConfigurationTransport;

it('writes only changed runtime values and leaves an unchanged rerun alone', function (): void {
    $transport = new class implements RuntimeConfigurationTransport
    {
        public array $values = ['APP_ENV' => 'production', 'APP_DEBUG' => 'true'];

        public array $writes = [];

        public function current(string $environmentId): array
        {
            return $this->values;
        }

        public function set(string $environmentId, string $key, string $value): void
        {
            $this->writes[] = [$environmentId, $key, $value];
            $this->values[$key] = $value;
        }
    };
    $reconciler = new RuntimeConfigurationReconciler($transport);
    $desired = ['APP_ENV' => 'production', 'APP_DEBUG' => false, 'APP_NAME' => 'x-PayOut'];

    $first = $reconciler->reconcile('env-one', $desired, true);
    $second = $reconciler->reconcile('env-one', $desired, true);

    expect($first)->toBe([
        'changed' => ['APP_DEBUG', 'APP_NAME'],
        'unchanged' => ['APP_ENV'],
    ])->and($transport->writes)->toBe([
        ['env-one', 'APP_DEBUG', 'false'],
        ['env-one', 'APP_NAME', 'x-PayOut'],
    ])->and($second)->toBe([
        'changed' => [],
        'unchanged' => ['APP_DEBUG', 'APP_ENV', 'APP_NAME'],
    ]);
});

it('plans runtime changes without writing in dry-run mode', function (): void {
    $transport = new class implements RuntimeConfigurationTransport
    {
        public array $writes = [];

        public function current(string $environmentId): array
        {
            return [];
        }

        public function set(string $environmentId, string $key, string $value): void
        {
            $this->writes[] = [$environmentId, $key, $value];
        }
    };

    $result = (new RuntimeConfigurationReconciler($transport))->reconcile('env-one', ['APP_ENV' => 'production'], false);

    expect($result['changed'])->toBe(['APP_ENV'])
        ->and($transport->writes)->toBe([]);
});
