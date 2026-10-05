<?php

use App\Deployment\Dns\DigitalOceanDnsReconciler;
use App\Deployment\Dns\DnsReconciliationException;
use App\Deployment\Support\CommandExecutor;
use App\Deployment\Support\CommandResult;

function fakeDigitalOceanDnsExecutor(array $records = []): CommandExecutor
{
    return new class($records) implements CommandExecutor
    {
        public array $calls = [];

        public function __construct(private array $records) {}

        public function run(array $command, ?string $input = null): CommandResult
        {
            $this->calls[] = $command;
            $operation = implode(' ', array_slice($command, 1, 4));

            if ($operation === 'compute domain records list') {
                return new CommandResult(0, json_encode($this->records, JSON_THROW_ON_ERROR), '');
            }

            if ($operation === 'compute domain records create') {
                $this->records[] = [
                    'id' => count($this->records) + 1,
                    'type' => $this->option($command, '--record-type='),
                    'name' => $this->option($command, '--record-name='),
                    'data' => $this->option($command, '--record-data='),
                    'ttl' => (int) $this->option($command, '--record-ttl='),
                ];

                return new CommandResult(0, '{}', '');
            }

            if ($operation === 'compute domain records update') {
                $id = $this->option($command, '--record-id=');

                foreach ($this->records as &$record) {
                    if ((string) $record['id'] === $id) {
                        $record['type'] = $this->option($command, '--record-type=');
                        $record['name'] = $this->option($command, '--record-name=');
                        $record['data'] = $this->option($command, '--record-data=');
                    }
                }

                return new CommandResult(0, '{}', '');
            }

            return new CommandResult(1, '', 'unexpected fake command');
        }

        private function option(array $command, string $prefix): string
        {
            foreach ($command as $argument) {
                if (str_starts_with($argument, $prefix)) {
                    return substr($argument, strlen($prefix));
                }
            }

            return '';
        }
    };
}

it('creates an allowlisted Cloud DNS record and becomes a no-op after convergence', function (): void {
    $executor = fakeDigitalOceanDnsExecutor();
    $reconciler = new DigitalOceanDnsReconciler($executor, 'disburse.cash');
    $records = [['type' => 'CNAME', 'name' => 'payout.disburse.cash', 'value' => 'origin.example.net.']];

    $first = $reconciler->reconcile('payout.disburse.cash', $records);
    $second = $reconciler->reconcile('payout.disburse.cash', $records);

    expect($first)->toBe([
        'changed' => true,
        'actions' => [['action' => 'create', 'type' => 'CNAME', 'name' => 'payout']],
    ])->and($second)->toBe([
        'changed' => false,
        'actions' => [['action' => 'noop', 'type' => 'CNAME', 'name' => 'payout']],
    ]);
});

it('rejects DNS records outside the x-PayOut hostname allowlist', function (): void {
    $reconciler = new DigitalOceanDnsReconciler(fakeDigitalOceanDnsExecutor(), 'disburse.cash');

    expect(fn () => $reconciler->reconcile('payout.disburse.cash', [[
        'type' => 'TXT',
        'name' => 'unrelated.disburse.cash',
        'value' => 'unsafe',
    ]]))->toThrow(DnsReconciliationException::class, 'outside the x-PayOut allowlist');
});
