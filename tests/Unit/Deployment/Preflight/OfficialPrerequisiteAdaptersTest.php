<?php

use App\Deployment\Dns\DigitalOceanDnsPrerequisiteProbe;
use App\Deployment\Preflight\CompositePrerequisiteProbe;
use App\Deployment\Preflight\PreflightException;
use App\Deployment\Preflight\PrerequisiteProbe;
use App\Deployment\Providers\EmiProviderPrerequisiteProbe;
use App\Deployment\Support\CommandExecutor;
use App\Deployment\Support\CommandResult;
use LBHurtado\EmiCore\Contracts\ProviderLivePreflightProbe;
use LBHurtado\EmiCore\Data\Providers\ProviderLivePreflightRequestData;
use LBHurtado\EmiCore\Data\Providers\ProviderLivePreflightResultData;

it('uses DigitalOcean read-only zone discovery without exposing its CLI context', function (): void {
    $executor = new class implements CommandExecutor
    {
        public array $calls = [];

        public function run(array $command, ?string $input = null): CommandResult
        {
            $this->calls[] = $command;

            return new CommandResult(0, '[{"domain":"disburse.cash","ttl":1800}]', '');
        }
    };
    $probe = new DigitalOceanDnsPrerequisiteProbe($executor, 'disburse.cash', context: 'x-payout-production');
    $result = $probe->inspect(['id' => 'public.dns']);

    expect($result['status'])->toBe('ready')
        ->and($result['evidence'])->toBe(['authority' => 'digitalocean', 'zone' => 'disburse.cash'])
        ->and($executor->calls)->toBe([[
            'doctl', 'compute', 'domain', 'get', 'disburse.cash', '--output', 'json',
            '--context', 'x-payout-production',
        ]]);
});

it('adapts the installed EMI provider live-readiness contract without moving money', function (): void {
    $liveProbe = new class implements ProviderLivePreflightProbe
    {
        public ?ProviderLivePreflightRequestData $request = null;

        public function providerCode(): string
        {
            return 'netbank';
        }

        public function checkLiveReadiness(ProviderLivePreflightRequestData $request): ProviderLivePreflightResultData
        {
            $this->request = $request;

            return new ProviderLivePreflightResultData(
                provider: 'netbank',
                connectionReference: $request->connectionReference,
                ready: true,
                checkedAt: new DateTimeImmutable('2026-10-05T00:00:00+00:00'),
            );
        }
    };
    $profile = [
        'providers' => [
            'connections' => [[
                'name' => 'netbank-primary',
                'driver' => 'netbank',
                'currency' => 'PHP',
                'capabilities' => ['balance', 'funding'],
                'runtime' => ['NETBANK_SOURCE_ACCOUNT_NUMBER' => '113-001-00001-9'],
            ]],
        ],
    ];
    $probe = new EmiProviderPrerequisiteProbe($profile, [$liveProbe]);
    $identity = $probe->inspect(['id' => 'providers.netbank-primary.identity']);
    $capabilities = $probe->inspect(['id' => 'providers.netbank-primary.capabilities']);

    expect($identity['status'])->toBe('ready')
        ->and($identity['evidence']['fingerprint'])->toBe(hash('sha256', '113-001-00001-9'))
        ->and(json_encode($identity, JSON_THROW_ON_ERROR))->not->toContain('113-001-00001-9')
        ->and($liveProbe->request?->connectionReference)->toBe('netbank-primary')
        ->and($liveProbe->request?->settlementResourceReference)->toBe('113-001-00001-9')
        ->and($capabilities['evidence']['capabilities'])->toBe(['balance', 'funding']);
});

it('routes prerequisites by declared transport and fails when no adapter owns one', function (): void {
    $dns = new class implements PrerequisiteProbe
    {
        public function inspect(array $check): array
        {
            return ['status' => 'ready', 'reason' => 'Fake DNS ready.', 'remediation' => 'None.'];
        }
    };
    $composite = new CompositePrerequisiteProbe(['dns' => $dns]);

    expect($composite->inspect(['transport' => 'dns'])['status'])->toBe('ready')
        ->and(fn () => $composite->inspect(['transport' => 'provider']))
        ->toThrow(PreflightException::class, 'No prerequisite adapter');
});
