<?php

use Symfony\Component\Process\Process;

function productionDeploymentKitPath(string $path): string
{
    return dirname(__DIR__, 2).'/'.ltrim($path, '/');
}

it('ships a secret-free production environment worksheet', function (): void {
    $environment = file_get_contents(productionDeploymentKitPath('.env.production.example'));

    expect($environment)
        ->toContain('APP_ENV=production')
        ->toContain('APP_DEBUG=false')
        ->toContain('SESSION_DRIVER=redis')
        ->toContain('QUEUE_CONNECTION=redis')
        ->toContain('CACHE_STORE=redis')
        ->toContain('FILESYSTEM_DISK=s3')
        ->toContain('AWS_ENDPOINT=https://sgp1.digitaloceanspaces.com')
        ->toContain('XCHANGE_PUBLIC_AUTO_GENERATE_ENABLED=false')
        ->toContain('DEPLOY_DNS_NAMESERVERS_PRESERVED=true')
        ->toContain('DEPLOY_CONFIRM_PRODUCTION=NO')
        ->toContain('APP_URL=REPLACE_WITH_CURRENT_LARAVEL_CLOUD_URL')
        ->not->toMatch('/^(APP_KEY|AWS_ACCESS_KEY_ID|AWS_SECRET_ACCESS_KEY|NETBANK_CLIENT_SECRET|TXTCMDR_API_TOKEN)=.+$/m');
});

it('renders a non destructive deployment plan by default', function (): void {
    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'plan',
        '--render-only',
        '--env='.productionDeploymentKitPath('.env.production.example'),
    ]);
    $process->mustRun();

    expect($process->getOutput())
        ->toContain('X-PAYOUT CLEANROOM DEPLOYMENT')
        ->toContain('DigitalOcean Space and its archived/active prefixes')
        ->toContain('Never automated by this script')
        ->not->toContain('application:delete')
        ->not->toContain('database:delete');
});

it('refuses production mutations without explicit confirmation', function (): void {
    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'foundation',
        '--apply',
        '--env='.productionDeploymentKitPath('.env.production.example'),
    ]);
    $process->run();

    expect($process->isSuccessful())->toBeFalse()
        ->and($process->getErrorOutput())->toContain('DEPLOY_CONFIRM_PRODUCTION=YES');
});

it('contains no destructive cloud resource command', function (): void {
    $script = file_get_contents(productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'));

    expect($script)
        ->not->toContain('application:delete')
        ->not->toContain('environment:delete')
        ->not->toContain('database:delete')
        ->not->toContain('database-cluster:delete')
        ->not->toContain('cache:delete')
        ->not->toContain('secret:delete');
});

it('sets runtime variables idempotently and rejects unresolved storage placeholders', function (): void {
    $script = file_get_contents(productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'));

    expect($script)
        ->toContain('--action=set')
        ->toContain('require_resolved_value AWS_BUCKET')
        ->toContain('require_resolved_value XCHANGE_CLAIM_EVIDENCE_DIRECTORY')
        ->toContain('require_resolved_value XCHANGE_INSTANCE_KEEPSAKE_DIRECTORY');
});
