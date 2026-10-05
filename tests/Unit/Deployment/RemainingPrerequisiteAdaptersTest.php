<?php

use App\Deployment\Controller\DeploymentAuthority;
use App\Deployment\Preflight\CommissioningAuthorityPrerequisiteProbe;
use App\Deployment\Preflight\HttpsIntegrationPrerequisiteProbe;
use App\Deployment\Preflight\ObjectStoragePrerequisiteProbe;
use App\Deployment\Preflight\SourceReleasePrerequisiteProbe;
use App\Deployment\Support\CommandExecutor;
use App\Deployment\Support\CommandResult;

it('checks remaining prerequisites without financial or messaging mutations', function (): void {
    $commands = new class implements CommandExecutor
    {
        public array $calls = [];

        public function run(array $command, ?string $input = null): CommandResult
        {
            $this->calls[] = $command;

            return str_contains(implode(' ', $command), 'ls-remote')
                ? new CommandResult(0, implode("\n", [
                    "0123456789abcdef\trefs/tags/v1.2.3",
                    "0123456789abcdef\trefs/heads/release/v1.2.3",
                ])."\n", '')
                : new CommandResult(0, '', '');
        }
    };
    $release = (new SourceReleasePrerequisiteProbe(
        $commands,
        'git@github.com:3neti/x-payout.git',
        'v1.2.3',
        'release/v1.2.3',
    ))
        ->inspect(['id' => 'release.source']);
    $storage = (new ObjectStoragePrerequisiteProbe($commands, 'private-bucket', 'https://sgp1.digitaloceanspaces.com'))
        ->inspect(['id' => 'storage.evidence']);
    $integrations = (new HttpsIntegrationPrerequisiteProbe($commands, [
        'sms' => 'https://api.engagespark.com/health',
        'otp' => 'https://api.txtcmdr.com/health',
        'kyc' => 'https://api.hyperverge.co/health',
        'maps' => 'https://api.mapbox.com/',
        'geocoding' => 'https://api.opencagedata.com/',
        'oauth' => 'https://payout.disburse.cash/mcp/x-change',
    ]));
    $commissioning = (new CommissioningAuthorityPrerequisiteProbe([
        'connection' => 'netbank-primary',
        'cutover_at' => '2026-10-05T00:00:00Z',
        'cutover_transaction_id' => 'watermark-one',
    ], new DeploymentAuthority))->inspect(['id' => 'commissioning.authority']);

    expect($release['status'])->toBe('ready')
        ->and($release['evidence'])->toMatchArray([
            'ref' => 'v1.2.3',
            'branch' => 'release/v1.2.3',
            'commit' => '0123456789abcdef',
        ])
        ->and($storage['status'])->toBe('ready')
        ->and($commissioning['status'])->toBe('ready')
        ->and($commissioning['evidence']['authorized_for_this_run'])->toBeFalse()
        ->and(implode("\n", array_map(static fn (array $call): string => implode(' ', $call), $commands->calls)))
        ->not->toContain('send', 'put-object', 'delete-object');

    foreach (['sms', 'otp', 'kyc', 'maps', 'geocoding', 'oauth'] as $transport) {
        expect($integrations->inspect([
            'id' => 'integrations.'.$transport,
            'transport' => $transport,
        ])['status'])->toBe('ready');
    }
});

it('blocks deployment when the Cloud source branch is absent or differs from the release tag', function (string $output, string $reason): void {
    $commands = new class($output) implements CommandExecutor
    {
        public function __construct(private readonly string $output) {}

        public function run(array $command, ?string $input = null): CommandResult
        {
            return new CommandResult(0, $this->output, '');
        }
    };

    $result = (new SourceReleasePrerequisiteProbe(
        $commands,
        'git@github.com:3neti/x-payout.git',
        'v1.2.3',
        'release/v1.2.3',
    ))->inspect(['id' => 'release.source']);

    expect($result['status'])->toBe('blocked')
        ->and($result['reason'])->toBe($reason);
})->with([
    'missing branch' => [
        "0123456789abcdef\trefs/tags/v1.2.3\n",
        'The Laravel Cloud source branch could not be resolved.',
    ],
    'mismatched branch' => [
        "0123456789abcdef\trefs/tags/v1.2.3\nfedcba9876543210\trefs/heads/release/v1.2.3\n",
        'The Laravel Cloud source branch does not resolve to the immutable release commit.',
    ],
]);
