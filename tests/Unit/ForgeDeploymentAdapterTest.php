<?php

use Symfony\Component\Process\Process;

function forgeDeploymentKitPath(string $path): string
{
    return dirname(__DIR__, 2).'/'.ltrim($path, '/');
}

it('ships a secret-free Forge deployment-control worksheet', function (): void {
    $environment = file_get_contents(forgeDeploymentKitPath('.env.forge.production.example'));

    expect($environment)
        ->toContain('FORGE_CONFIRM_PRODUCTION=NO')
        ->toContain('FORGE_CONFIRM_COMMISSIONING=NO')
        ->toContain('FORGE_EXPECTED_XCHANGE_VERSION=v1.0.98')
        ->not->toContain('APP_KEY=')
        ->not->toContain('NETBANK_CLIENT_SECRET=')
        ->not->toContain('AWS_SECRET_ACCESS_KEY=');
});

it('renders the Forge adapter plan without touching a server', function (): void {
    $process = new Process([
        'bash',
        forgeDeploymentKitPath('scripts/deploy-production-forge.sh'),
        'plan',
        '--env='.forgeDeploymentKitPath('.env.forge.production.example'),
    ]);
    $process->mustRun();

    expect($process->getOutput())
        ->toContain('X-PAYOUT FORGE DEPLOYMENT ADAPTER')
        ->toContain('Recurring deployment never invokes commissioning.');
});

it('refuses a Forge production deployment without explicit confirmation', function (): void {
    $process = new Process([
        'bash',
        forgeDeploymentKitPath('scripts/deploy-production-forge.sh'),
        'deploy',
        '--env='.forgeDeploymentKitPath('.env.forge.production.example'),
    ]);
    $process->run();

    expect($process->isSuccessful())->toBeFalse()
        ->and($process->getErrorOutput())->toContain('FORGE_CONFIRM_PRODUCTION=YES');
});

it('keeps recurring deployment separate from one-time commissioning', function (): void {
    $script = file_get_contents(forgeDeploymentKitPath('scripts/deploy-production-forge.sh'));

    expect($script)
        ->toContain('git pull --ff-only')
        ->toContain('artisan queue:restart')
        ->toContain('artisan x-change:doctor --strict')
        ->toContain('FORGE_CONFIRM_COMMISSIONING')
        ->not->toContain('migrate:fresh')
        ->not->toContain('db:wipe');

    preg_match('/recurring_deploy\(\) \{(?<body>.*?)\n\}/s', $script, $matches);

    expect($matches['body'] ?? '')
        ->not->toContain('x-payout:bootstrap');
});

it('contains no infrastructure deletion command in the Forge adapter', function (): void {
    $script = file_get_contents(forgeDeploymentKitPath('scripts/deploy-production-forge.sh'));

    expect($script)
        ->not->toContain('server:delete')
        ->not->toContain('site:delete')
        ->not->toContain('database:delete')
        ->not->toContain('rm -rf');
});
