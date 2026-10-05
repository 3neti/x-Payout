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
                ? new CommandResult(0, "0123456789abcdef\trefs/tags/v1.2.3\n", '')
                : new CommandResult(0, '', '');
        }
    };
    $release = (new SourceReleasePrerequisiteProbe($commands, 'git@github.com:3neti/x-payout.git', 'v1.2.3'))
        ->inspect(['id' => 'release.source']);
    $storage = (new ObjectStoragePrerequisiteProbe($commands, 'private-bucket', 'https://sgp1.digitaloceanspaces.com'))
        ->inspect(['id' => 'storage.evidence']);
    $integration = (new HttpsIntegrationPrerequisiteProbe($commands, [
        'sms' => 'https://api.engagespark.com/health',
    ]))->inspect(['id' => 'integrations.sms', 'transport' => 'sms']);
    $commissioning = (new CommissioningAuthorityPrerequisiteProbe([
        'connection' => 'netbank-primary',
        'cutover_at' => '2026-10-05T00:00:00Z',
        'cutover_transaction_id' => 'watermark-one',
    ], new DeploymentAuthority))->inspect(['id' => 'commissioning.authority']);

    expect($release['status'])->toBe('ready')
        ->and($storage['status'])->toBe('ready')
        ->and($integration['status'])->toBe('ready')
        ->and($commissioning['status'])->toBe('ready')
        ->and($commissioning['evidence']['authorized_for_this_run'])->toBeFalse()
        ->and(implode("\n", array_map(static fn (array $call): string => implode(' ', $call), $commands->calls)))
        ->not->toContain('send', 'put-object', 'delete-object');
});
