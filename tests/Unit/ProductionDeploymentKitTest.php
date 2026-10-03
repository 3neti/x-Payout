<?php

use Symfony\Component\Process\Process;

function productionDeploymentKitPath(string $path): string
{
    return dirname(__DIR__, 2).'/'.ltrim($path, '/');
}

it('ships a secret-free production environment worksheet', function (): void {
    $environment = file_get_contents(productionDeploymentKitPath('deployment.production.example'));

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
        ->toContain('DEPLOY_REQUIRED_CLOUD_SECRET_NAMES=AWS_ACCESS_KEY_ID,')
        ->not->toMatch('/^DEPLOY_REQUIRED_CLOUD_SECRET_NAMES=(?:[^,\n]+,)*APP_KEY(?:,|$)/m')
        ->toContain('APP_URL=REPLACE_WITH_CURRENT_LARAVEL_CLOUD_URL')
        ->not->toMatch('/^(APP_KEY|AWS_ACCESS_KEY_ID|AWS_SECRET_ACCESS_KEY|NETBANK_CLIENT_SECRET|TXTCMDR_API_TOKEN)=.+$/m');
});

it('renders a non destructive deployment plan by default', function (): void {
    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'plan',
        '--render-only',
        '--control='.productionDeploymentKitPath('deployment.production.example'),
    ]);
    $process->mustRun();

    expect($process->getOutput())
        ->toContain('X-PAYOUT CLEANROOM DEPLOYMENT')
        ->toContain('Secret authority: Laravel Cloud managed secrets')
        ->toContain('pre-commission checkpoint')
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
        '--control='.productionDeploymentKitPath('deployment.production.example'),
    ]);
    $process->run();

    expect($process->isSuccessful())->toBeFalse()
        ->and($process->getErrorOutput())->toContain('DEPLOY_CONFIRM_PRODUCTION=YES');
});

it('rejects production secret values in the deployment control worksheet', function (): void {
    $controlFile = tempnam(sys_get_temp_dir(), 'x-payout-deployment-control-');
    $worksheet = file_get_contents(productionDeploymentKitPath('deployment.production.example'));

    file_put_contents($controlFile, $worksheet."\nAPP_KEY=base64:must-not-live-here\n");

    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'plan',
        '--render-only',
        '--control='.$controlFile,
    ]);
    $process->run();

    unlink($controlFile);

    expect($process->isSuccessful())->toBeFalse()
        ->and($process->getErrorOutput())
        ->toContain('contains a value for production secret APP_KEY')
        ->toContain('no local production .env');
});

it('ships a gitignored one-time re-entry worksheet without app key or values', function (): void {
    $worksheet = file_get_contents(productionDeploymentKitPath('deployment.production.secrets.example'));
    $gitignore = file_get_contents(productionDeploymentKitPath('.gitignore'));

    expect($worksheet)
        ->toContain('AWS_ACCESS_KEY_ID=')
        ->toContain('NETBANK_CLIENT_SECRET=')
        ->toContain('XCHANGE_COMMISSIONING_ACCESS_TOKEN=')
        ->not->toMatch('/^APP_KEY=/m')
        ->not->toMatch('/^[A-Z][A-Z0-9_]*=.+$/m')
        ->and($gitignore)->toContain('deployment.production.secrets.local');
});

it('provides a continuous fail-closed orchestration path', function (): void {
    $script = file_get_contents(productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'));

    expect($script)
        ->toContain('continuous()')
        ->toContain('assert_managed_secret_attachments')
        ->toContain('Continuous deployment reached the accountable commissioning checkpoint.')
        ->toContain('Generated-domain deployment is commissioned and verified.')
        ->toContain('environment-secret:list')
        ->not->toContain('secret:get');
});

it('stops before commissioning when a required managed secret is not attached', function (): void {
    $controlFile = tempnam(sys_get_temp_dir(), 'x-payout-deployment-control-');
    $cloudBinary = tempnam(sys_get_temp_dir(), 'x-payout-fake-cloud-');
    $worksheet = file_get_contents(productionDeploymentKitPath('deployment.production.example'));
    $worksheet = preg_replace(
        '/^DEPLOY_CLOUD_ENVIRONMENT_ID=.*$/m',
        'DEPLOY_CLOUD_ENVIRONMENT_ID=env-test',
        $worksheet,
    );
    $worksheet = preg_replace(
        '/^DEPLOY_REQUIRED_CLOUD_SECRET_NAMES=.*$/m',
        'DEPLOY_REQUIRED_CLOUD_SECRET_NAMES=AWS_ACCESS_KEY_ID',
        $worksheet,
    );

    file_put_contents($controlFile, $worksheet);
    file_put_contents($cloudBinary, <<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then
    exit 0
fi

if [[ "${1:-}" == "environment-secret:list" ]]; then
    printf '[]\n'
    exit 0
fi

exit 1
BASH);
    chmod($cloudBinary, 0755);

    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'pre-commission',
        '--control='.$controlFile,
    ], env: ['CLOUD_BIN' => $cloudBinary]);
    $process->run();

    unlink($controlFile);
    unlink($cloudBinary);

    expect($process->isSuccessful())->toBeFalse()
        ->and($process->getErrorOutput())
        ->toContain('Required Laravel Cloud managed secrets are not attached:')
        ->toContain('AWS_ACCESS_KEY_ID')
        ->toContain('no local production .env fallback');
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
