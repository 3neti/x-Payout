<?php

use App\Deployment\Profiles\InstanceProfileCompiler;
use Symfony\Component\Process\Process;

function productionDeploymentKitPath(string $path): string
{
    return dirname(__DIR__, 2).'/'.ltrim($path, '/');
}

/**
 * @param  array<string, string>  $overrides
 */
function productionDeploymentControl(array $overrides): string
{
    $controlFile = tempnam(sys_get_temp_dir(), 'x-payout-deployment-control-');
    $worksheet = file_get_contents(productionDeploymentKitPath('deployment.production.example'));

    foreach ($overrides as $key => $value) {
        $pattern = '/^'.preg_quote($key, '/').'=.*$/m';

        if (preg_match($pattern, $worksheet) === 1) {
            $worksheet = preg_replace($pattern, $key.'='.$value, $worksheet);
        } else {
            $worksheet .= "\n{$key}={$value}\n";
        }
    }

    file_put_contents($controlFile, $worksheet);

    return $controlFile;
}

function productionDeploymentFakeExecutable(string $contents): string
{
    $path = tempnam(sys_get_temp_dir(), 'x-payout-fake-command-');

    file_put_contents($path, $contents);
    chmod($path, 0755);

    return $path;
}

/** @return array{directory: string, secrets: string} */
function productionCompiledProfile(): array
{
    $compiler = new InstanceProfileCompiler;
    $instance = productionDeploymentKitPath('ops/deployment/examples/instance.yaml');
    $profile = $compiler->validate($instance);
    $secrets = tempnam(sys_get_temp_dir(), 'x-payout-compiled-secrets-');
    $contents = '';

    foreach ($profile['required_secrets'] as $secretName) {
        $contents .= "{$secretName}=private-test-value\n";
    }

    file_put_contents($secrets, $contents);
    chmod($secrets, 0600);
    $directory = sys_get_temp_dir().'/x-payout-compiled-controller-'.bin2hex(random_bytes(4));
    $compiler->compile($instance, $secrets, $directory);

    return ['directory' => $directory, 'secrets' => $secrets];
}

it('ships a secret-free production environment worksheet', function (): void {
    $environment = file_get_contents(productionDeploymentKitPath('deployment.production.example'));

    expect($environment)
        ->toContain('APP_ENV=production')
        ->toContain('APP_DEBUG=false')
        ->toContain('SESSION_DRIVER=redis')
        ->toContain('QUEUE_CONNECTION=redis')
        ->toContain('CACHE_STORE=redis')
        ->toContain('DEPLOY_CACHE_EVICTION_POLICY=allkeys-lru')
        ->toContain('XCHANGE_SYSTEM_USER_ID=system@x-payout.test')
        ->toContain('FILESYSTEM_DISK=s3')
        ->toContain('AWS_ENDPOINT=https://sgp1.digitaloceanspaces.com')
        ->toContain('XCHANGE_PUBLIC_AUTO_GENERATE_ENABLED=false')
        ->toContain('DEPLOY_DNS_NAMESERVERS_PRESERVED=true')
        ->toContain('DEPLOY_CONFIRM_PRODUCTION=NO')
        ->toContain('DEPLOY_REQUIRED_CLOUD_SECRET_NAMES=AWS_ACCESS_KEY_ID,')
        ->not->toMatch('/^DEPLOY_REQUIRED_CLOUD_SECRET_NAMES=(?:[^,\n]+,)*APP_KEY(?:,|$)/m')
        ->not->toMatch('/^DEPLOY_REQUIRED_CLOUD_SECRET_NAMES=.*NETBANK_BALANCE_ENDPOINT/m')
        ->toContain('NETBANK_BALANCE_ENDPOINT=REPLACE_WITH_NETBANK_BALANCE_ENDPOINT')
        ->toContain('XCHANGE_INSTANCE_KEEPSAKE_PUBLIC_KEY=REPLACE_WITH_KEEPSAKE_PUBLIC_KEY')
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

it('retains legacy worksheet behavior when no compiled profile is supplied', function (): void {
    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'plan',
        '--render-only',
        '--control='.productionDeploymentKitPath('deployment.production.example'),
    ]);
    $process->mustRun();

    expect($process->getOutput())
        ->toContain('Input mode:       legacy worksheet')
        ->toContain('Repository:       3neti/x-Payout')
        ->toContain('Public domain:    payout.disburse.cash');
});

it('consumes verified compiled artifacts in compatibility mode', function (): void {
    $compiled = productionCompiledProfile();
    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'plan',
        '--render-only',
        '--control='.productionDeploymentKitPath('deployment.production.example'),
        '--compiled='.$compiled['directory'],
    ]);
    $process->mustRun();

    expect($process->getOutput())
        ->toContain('Input mode:       compiled profile compatibility')
        ->toContain('Repository:       example/x-payout')
        ->toContain('Branch:           v1.0.0')
        ->toContain('Public domain:    payout.example.com')
        ->toMatch('/Profile:\s+[a-f0-9]{64}/')
        ->not->toContain('private-test-value');

    unlink($compiled['secrets']);
});

it('rejects tampered compiled artifacts before evaluating a deployment phase', function (): void {
    $compiled = productionCompiledProfile();
    file_put_contents($compiled['directory'].'/runtime.env', "APP_NAME=tampered\n", FILE_APPEND);
    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'plan',
        '--render-only',
        '--control='.productionDeploymentKitPath('deployment.production.example'),
        '--compiled='.$compiled['directory'],
    ]);
    $process->run();

    expect($process->isSuccessful())->toBeFalse()
        ->and($process->getErrorOutput())->toContain('manifest does not match');

    unlink($compiled['secrets']);
});

it('uses compiled runtime and secret requirements during cloud configuration', function (): void {
    $compiled = productionCompiledProfile();
    $commandLog = tempnam(sys_get_temp_dir(), 'x-payout-compiled-cloud-log-');
    $requiredSecrets = json_decode(file_get_contents($compiled['directory'].'/required-secrets.json'), true, flags: JSON_THROW_ON_ERROR);
    $attachedSecrets = array_map(
        static fn (string $name): array => ['key' => $name],
        $requiredSecrets['required'],
    );
    $controlFile = productionDeploymentControl([
        'DEPLOY_CONFIRM_PRODUCTION' => 'YES',
        'DEPLOY_CLOUD_ENVIRONMENT_ID' => 'env-test',
        'DEPLOY_CLOUD_INSTANCE_ID' => 'instance-test',
        'DEPLOY_CLOUD_WORKER_PROCESS_ID' => 'worker-test',
        'DEPLOY_CLOUD_SECRET_IDS' => 'secret-test',
        'DEPLOY_DIGITALOCEAN_SPACE' => 'existing-space',
    ]);
    $cloudBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
printf '%s\n' "$*" >>"${FAKE_CLOUD_COMMAND_LOG}"
if [[ "${1:-}" == "environment-secret:list" ]]; then printf '%s\n' "${FAKE_ATTACHED_SECRETS}"; exit 0; fi
if [[ "${1:-}" == "environment-secret:attach" ]]; then printf '%s\n' '[]'; exit 0; fi
if [[ "${1:-}" == "environment:variables" ]]; then exit 0; fi
if [[ "${1:-}" == "instance:update" ]]; then printf '%s\n' '{}'; exit 0; fi
exit 1
BASH);

    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'configure',
        '--apply',
        '--control='.$controlFile,
        '--compiled='.$compiled['directory'],
    ], env: [
        'CLOUD_BIN' => $cloudBinary,
        'FAKE_CLOUD_COMMAND_LOG' => $commandLog,
        'FAKE_ATTACHED_SECRETS' => json_encode($attachedSecrets, JSON_THROW_ON_ERROR),
    ]);
    $process->mustRun();
    $commands = file_get_contents($commandLog);

    expect($process->getOutput())->toContain('Managed-secret attachment gate passed')
        ->and($commands)
        ->toContain('environment:variables env-test --action=set --key=APP_NAME --value=Example PayOut')
        ->toContain('environment:variables env-test --action=set --key=APP_URL --value=https://payout.example.com')
        ->toContain('environment:variables env-test --action=set --key=XMCP_PUBLIC_ISSUANCE_ENABLED --value=false')
        ->toContain('environment:variables env-test --action=set --key=XMCP_PUBLIC_ISSUANCE_API_BASE_URL --value=https://payout.example.com/api/x/v1/public-issuance')
        ->toContain('environment:variables env-test --action=set --key=XMCP_EXPECTED_PARTNER_CONTRACT_VERSION --value=1.4.0')
        ->toContain('environment-secret:attach env-test secret-test')
        ->not->toContain('private-test-value');

    unlink($compiled['secrets']);
    unlink($controlFile);
    unlink($cloudBinary);
    unlink($commandLog);
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
        ->toContain('.key? // .name? // empty')
        ->toContain('Continuous deployment reached the accountable commissioning checkpoint.')
        ->toContain('Generated-domain deployment is commissioned and verified.')
        ->toContain('domain_acceptance')
        ->toContain('/.well-known/x-change-public-mcp')
        ->toContain('without creating a funding order')
        ->toContain('REMOTE_COMMAND_EXIT_CODE')
        ->toContain('Installation is already operational; skipping the one-time commissioning ceremony.')
        ->toContain('deployment:get')
        ->toContain('environment-secret:list')
        ->not->toContain('secret:get');
});

it('fails closed when cloud reports success around a failed remote process', function (): void {
    $controlFile = productionDeploymentControl([
        'DEPLOY_CLOUD_ENVIRONMENT_ID' => 'env-test',
        'DEPLOY_REQUIRED_CLOUD_SECRET_NAMES' => 'FAKE_SECRET',
    ]);
    $cloudBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
if [[ "${1:-}" == "environment-secret:list" ]]; then printf '[{"key":"FAKE_SECRET"}]\n'; exit 0; fi
if [[ "${1:-}" == "command:run" ]]; then
    printf '%s\n' '{"command_id":"command-test","status":"command.running"}'
    printf '%s\n' '{"id":"command-test","status":"command.success","output":"failed\n","exitCode":1}'
    exit 0
fi
exit 1
BASH);

    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'pre-commission',
        '--control='.$controlFile,
    ], env: ['CLOUD_BIN' => $cloudBinary]);
    $process->run();

    expect($process->isSuccessful())->toBeFalse()
        ->and($process->getErrorOutput())
        ->toContain('Remote command failed with inner exit code 1');

    unlink($controlFile);
    unlink($cloudBinary);
});

it('does not rerun commissioning when the installation is already operational', function (): void {
    $commandLog = tempnam(sys_get_temp_dir(), 'x-payout-cloud-command-log-');
    $controlFile = productionDeploymentControl([
        'DEPLOY_CONFIRM_PRODUCTION' => 'YES',
        'DEPLOY_CONFIRM_COMMISSIONING' => 'YES',
        'DEPLOY_CLOUD_ENVIRONMENT_ID' => 'env-test',
        'DEPLOY_PROVIDER_CUTOVER_AT' => '2026-10-04T00:00:00Z',
        'DEPLOY_PROVIDER_CUTOVER_TRANSACTION_ID' => 'test-watermark',
        'XCHANGE_TREASURY_OPENING_CAPITALIZATION_ALLOW_PRODUCTION' => 'true',
    ]);
    $cloudBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
if [[ "${1:-}" == "command:run" ]]; then
    printf '%s\n' "$*" >>"${FAKE_CLOUD_COMMAND_LOG}"
    if [[ "$*" == *"commissioning:status"* ]]; then
        printf '%s\n' '{"id":"status","status":"command.success","output":"{\"operational\":true}\n","exitCode":0}'
    else
        printf '%s\n' '{"id":"doctor","status":"command.success","output":"{\"success\":true}\n","exitCode":0}'
    fi
    exit 0
fi
exit 1
BASH);

    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'commission',
        '--apply',
        '--control='.$controlFile,
    ], env: [
        'CLOUD_BIN' => $cloudBinary,
        'FAKE_CLOUD_COMMAND_LOG' => $commandLog,
    ]);
    $process->mustRun();

    expect($process->getOutput())
        ->toContain('already operational; skipping the one-time commissioning ceremony')
        ->and(file_get_contents($commandLog))
        ->toContain('commissioning:status')
        ->toContain('doctor --strict')
        ->not->toContain('x-payout:bootstrap');

    unlink($controlFile);
    unlink($cloudBinary);
    unlink($commandLog);
});

it('adopts a verified stale installation without repeating opening capitalization', function (): void {
    $commandLog = tempnam(sys_get_temp_dir(), 'x-payout-cloud-command-log-');
    $controlFile = productionDeploymentControl([
        'DEPLOY_CONFIRM_PRODUCTION' => 'YES',
        'DEPLOY_CONFIRM_COMMISSIONING' => 'YES',
        'DEPLOY_CLOUD_ENVIRONMENT_ID' => 'env-test',
        'DEPLOY_PROVIDER_CUTOVER_AT' => '2026-10-04T00:00:00Z',
        'DEPLOY_PROVIDER_CUTOVER_TRANSACTION_ID' => 'test-watermark',
        'DEPLOY_REQUIRED_CLOUD_SECRET_NAMES' => 'FAKE_SECRET',
        'XCHANGE_TREASURY_OPENING_CAPITALIZATION_ALLOW_PRODUCTION' => 'true',
    ]);
    $cloudBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
if [[ "${1:-}" == "environment-secret:list" ]]; then printf '[{"key":"FAKE_SECRET"}]\n'; exit 0; fi
if [[ "${1:-}" == "command:run" ]]; then
    printf '%s\n' "$*" >>"${FAKE_CLOUD_COMMAND_LOG}"
    if [[ "$*" == *"commissioning:status"* ]]; then
        printf '%s\n' '{"id":"status","status":"command.success","output":"{\"operational\":false,\"reason\":\"installation_manifest_stale\"}\n","exitCode":1}'
    else
        printf '%s\n' '{"id":"command","status":"command.success","output":"{\"success\":true}\n","exitCode":0}'
    fi
    exit 0
fi
exit 1
BASH);

    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'commission',
        '--apply',
        '--control='.$controlFile,
    ], env: [
        'CLOUD_BIN' => $cloudBinary,
        'FAKE_CLOUD_COMMAND_LOG' => $commandLog,
    ]);
    $process->mustRun();

    expect($process->getOutput())
        ->toContain('adopting without opening capitalization')
        ->and(file_get_contents($commandLog))
        ->toContain('doctor --pre-commission --strict')
        ->toContain('commissioning:adopt --confirm-existing-installation')
        ->toContain('doctor --strict')
        ->not->toContain('x-payout:bootstrap');

    unlink($controlFile);
    unlink($cloudBinary);
    unlink($commandLog);
});

it('bounds the cloud monitor after a terminally successful deployment', function (): void {
    $controlFile = productionDeploymentControl([
        'DEPLOY_CONFIRM_PRODUCTION' => 'YES',
        'DEPLOY_CLOUD_APPLICATION_ID' => 'app-test',
        'DEPLOY_CLOUD_ENVIRONMENT_ID' => 'env-test',
        'DEPLOY_CLOUD_ENVIRONMENT_NAME' => 'production',
        'DEPLOY_MONITOR_ATTEMPTS' => '2',
        'DEPLOY_MONITOR_INTERVAL_SECONDS' => '0',
    ]);
    $cloudBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
case "${1:-}" in
    environment:update) printf '{}\n' ;;
    deploy)
        printf '%s\n' '{"deployment_id":"deployment-test","status":"initiated"}'
        printf '%s\n' '{"status":"deployment.succeeded","message":"Deployment succeeded!"}'
        ;;
    deploy:monitor) sleep 30 ;;
    deployment:get) printf '%s\n' '{"id":"deployment-test","status":"deployment.succeeded"}' ;;
    *) exit 1 ;;
esac
BASH);

    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'deploy',
        '--apply',
        '--control='.$controlFile,
    ], env: ['CLOUD_BIN' => $cloudBinary]);
    $process->setTimeout(10);
    $process->mustRun();

    expect($process->getOutput())
        ->toContain('Deployment deployment-test 1/2: deployment.succeeded');

    unlink($controlFile);
    unlink($cloudBinary);
});

it('uses bounded custom-domain verification and preserves external nameservers', function (): void {
    $script = file_get_contents(productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'));
    $environment = file_get_contents(productionDeploymentKitPath('deployment.production.example'));

    expect($script)
        ->toContain('DEPLOY_DOMAIN_VERIFY_ATTEMPTS')
        ->toContain('DEPLOY_DOMAIN_VERIFY_INTERVAL_SECONDS')
        ->toContain('Keep ${DEPLOY_DNS_ZONE} nameservers unchanged')
        ->toContain('origin metadata remains pending, but verified TLS and the live origin probe passed')
        ->not->toContain('domain-record:create')
        ->not->toContain('domain-record:delete')
        ->and($environment)
        ->toContain('DEPLOY_DOMAIN_VERIFY_ATTEMPTS=12')
        ->toContain('DEPLOY_DOMAIN_VERIFY_INTERVAL_SECONDS=5')
        ->toContain('DEPLOY_DNS_NAMESERVERS_PRESERVED=true');
});

it('cleans up domain acceptance responses without leaking a return trap', function (): void {
    $controlFile = productionDeploymentControl([
        'DEPLOY_PUBLIC_DOMAIN' => 'payout.example.test',
        'XCHANGE_PUBLIC_AUTO_GENERATE_ENABLED' => 'false',
    ]);
    $curlBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
output=''
url=''

while (($#)); do
    case "$1" in
        --output)
            shift
            output="${1:-}"
            ;;
        http://*|https://*)
            url="$1"
            ;;
    esac

    shift || true
done

if [[ "${url}" == */x/auto-generate ]]; then
    printf 'Public issuance is unavailable.' >"${output}"
else
    printf 'Accepted.' >"${output}"
fi
BASH);

    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'domain-acceptance',
        '--control='.$controlFile,
    ], env: ['CURL_BIN' => $curlBinary]);
    $process->mustRun();

    expect($process->getOutput())
        ->toContain('Accepted https://payout.example.test/')
        ->toContain('Accepted https://payout.example.test/x/auto-generate without creating a funding order.')
        ->and($process->getErrorOutput())->not->toContain('unbound variable');

    unlink($controlFile);
    unlink($curlBinary);
});

it('supports the current cloud foundation lifecycle', function (): void {
    $script = file_get_contents(productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'));

    expect($script)
        ->toContain('application:get')
        ->toContain('wait_for_database_cluster_available')
        ->toContain('wait_for_cache_available')
        ->toContain('--eviction-policy="${DEPLOY_CACHE_EVICTION_POLICY:-allkeys-lru}"');
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

it('reports an exact no-write DNS dry run when Cloud and DigitalOcean already match', function (): void {
    $snapshotDirectory = sys_get_temp_dir().'/x-payout-dns-snapshots-'.bin2hex(random_bytes(4));
    $controlFile = productionDeploymentControl([
        'DEPLOY_CLOUD_DOMAIN_ID' => 'domain-test',
        'DEPLOY_DNS_AUTOMATION_ENABLED' => 'true',
        'DEPLOY_DOCTL_CONTEXT' => 'x-payout-test-dns',
        'DEPLOY_DNS_SNAPSHOT_DIRECTORY' => $snapshotDirectory,
    ]);
    $commandLog = tempnam(sys_get_temp_dir(), 'x-payout-doctl-log-');
    $cloudBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then
    exit 0
fi

if [[ "${1:-}" == "domain:get" ]]; then
    printf '%s\n' "${FAKE_CLOUD_DOMAIN_JSON}"
    exit 0
fi

exit 1
BASH);
    $doctlBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
printf '%s\n' "$*" >>"${FAKE_DOCTL_LOG}"
if [[ "$*" == *"compute domain records list"* ]]; then
    printf '%s\n' "${FAKE_DOCTL_RECORDS_JSON}"
    exit 0
fi

exit 1
BASH);
    $cloudDomain = json_encode([
        'dnsRecords' => [
            'origin' => ['type' => 'A', 'name' => 'payout.disburse.cash', 'value' => '103.133.1.1'],
            'ssl' => [[
                'type' => 'CNAME',
                'name' => '_acme-challenge.payout.disburse.cash',
                'value' => 'payout.validation.example.com',
            ]],
        ],
    ], JSON_THROW_ON_ERROR);
    $digitalOceanRecords = json_encode([
        ['id' => 1, 'type' => 'A', 'name' => 'payout', 'data' => '103.133.1.1', 'ttl' => 3600],
        ['id' => 2, 'type' => 'CNAME', 'name' => '_acme-challenge.payout', 'data' => 'payout.validation.example.com', 'ttl' => 3600],
        ['id' => 3, 'type' => 'MX', 'name' => '@', 'data' => 'mail.example.com', 'ttl' => 3600],
    ], JSON_THROW_ON_ERROR);

    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'domain-reconcile',
        '--control='.$controlFile,
    ], env: [
        'CLOUD_BIN' => $cloudBinary,
        'DOCTL_BIN' => $doctlBinary,
        'FAKE_CLOUD_DOMAIN_JSON' => $cloudDomain,
        'FAKE_DOCTL_RECORDS_JSON' => $digitalOceanRecords,
        'FAKE_DOCTL_LOG' => $commandLog,
    ]);
    $process->mustRun();

    expect($process->getOutput())
        ->toContain('NOOP   A payout -> 103.133.1.1')
        ->toContain('NOOP   CNAME _acme-challenge.payout -> payout.validation.example.com')
        ->toContain('DNS is already reconciled. No DigitalOcean mutation is required.')
        ->and(file_get_contents($commandLog))
        ->toContain('compute domain records list disburse.cash')
        ->not->toContain('records create')
        ->not->toContain('records update')
        ->not->toContain('records delete')
        ->and(glob($snapshotDirectory.'/*-before.json'))->toHaveCount(1)
        ->and(glob($snapshotDirectory.'/*-after.json'))->toHaveCount(1);

    unlink($controlFile);
    unlink($cloudBinary);
    unlink($doctlBinary);
    unlink($commandLog);
});

it('shows updates and stale ownership deletion without mutating during a DNS dry run', function (): void {
    $controlFile = productionDeploymentControl([
        'DEPLOY_CLOUD_DOMAIN_ID' => 'domain-test',
        'DEPLOY_DNS_AUTOMATION_ENABLED' => 'true',
        'DEPLOY_DOCTL_CONTEXT' => 'x-payout-test-dns',
        'DEPLOY_DNS_SNAPSHOT_DIRECTORY' => sys_get_temp_dir().'/x-payout-dns-snapshots-'.bin2hex(random_bytes(4)),
    ]);
    $commandLog = tempnam(sys_get_temp_dir(), 'x-payout-doctl-log-');
    $cloudBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
if [[ "${1:-}" == "domain:get" ]]; then printf '%s\n' "${FAKE_CLOUD_DOMAIN_JSON}"; exit 0; fi
exit 1
BASH);
    $doctlBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
printf '%s\n' "$*" >>"${FAKE_DOCTL_LOG}"
if [[ "$*" == *"compute domain records list"* ]]; then printf '%s\n' "${FAKE_DOCTL_RECORDS_JSON}"; exit 0; fi
exit 1
BASH);

    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'domain-reconcile',
        '--control='.$controlFile,
    ], env: [
        'CLOUD_BIN' => $cloudBinary,
        'DOCTL_BIN' => $doctlBinary,
        'FAKE_CLOUD_DOMAIN_JSON' => '{"dnsRecords":{"origin":{"type":"A","name":"payout.disburse.cash","value":"103.133.1.1"}}}',
        'FAKE_DOCTL_RECORDS_JSON' => '[{"id":1,"type":"A","name":"payout","data":"198.51.100.8","ttl":3600},{"id":2,"type":"TXT","name":"_cf-custom-hostname.payout","data":"obsolete","ttl":3600}]',
        'FAKE_DOCTL_LOG' => $commandLog,
    ]);
    $process->mustRun();

    expect($process->getOutput())
        ->toContain('UPDATE 1 A payout: 198.51.100.8 -> 103.133.1.1')
        ->toContain('DELETE 2 TXT _cf-custom-hostname.payout -> obsolete')
        ->toContain('DNS dry run only.')
        ->and(file_get_contents($commandLog))
        ->not->toContain('records update')
        ->not->toContain('records delete');

    unlink($controlFile);
    unlink($cloudBinary);
    unlink($doctlBinary);
    unlink($commandLog);
});

it('rejects a Laravel Cloud DNS record outside the x-PayOut allowlist', function (): void {
    $controlFile = productionDeploymentControl([
        'DEPLOY_CLOUD_DOMAIN_ID' => 'domain-test',
        'DEPLOY_DNS_AUTOMATION_ENABLED' => 'true',
        'DEPLOY_DOCTL_CONTEXT' => 'x-payout-test-dns',
    ]);
    $cloudBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
if [[ "${1:-}" == "domain:get" ]]; then printf '%s\n' "${FAKE_CLOUD_DOMAIN_JSON}"; exit 0; fi
exit 1
BASH);
    $doctlBinary = productionDeploymentFakeExecutable("#!/usr/bin/env bash\nprintf '[]\\n'\n");

    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'domain-reconcile',
        '--control='.$controlFile,
    ], env: [
        'CLOUD_BIN' => $cloudBinary,
        'DOCTL_BIN' => $doctlBinary,
        'FAKE_CLOUD_DOMAIN_JSON' => '{"dnsRecords":{"mail":{"type":"MX","name":"disburse.cash","value":"mail.example.com"}}}',
    ]);
    $process->run();

    expect($process->isSuccessful())->toBeFalse()
        ->and($process->getErrorOutput())
        ->toContain('outside the x-PayOut allowlist: MX @');

    unlink($controlFile);
    unlink($cloudBinary);
    unlink($doctlBinary);
});

it('refuses DNS mutation without the independent DNS write confirmation', function (): void {
    $controlFile = productionDeploymentControl([
        'DEPLOY_CONFIRM_PRODUCTION' => 'YES',
        'DEPLOY_CONFIRM_DOMAIN_CUTOVER' => 'YES',
        'DEPLOY_CONFIRM_DNS_WRITE' => 'NO',
        'DEPLOY_CLOUD_DOMAIN_ID' => 'domain-test',
        'DEPLOY_DNS_AUTOMATION_ENABLED' => 'true',
        'DEPLOY_DOCTL_CONTEXT' => 'x-payout-test-dns',
        'DEPLOY_DNS_SNAPSHOT_DIRECTORY' => sys_get_temp_dir().'/x-payout-dns-snapshots-'.bin2hex(random_bytes(4)),
    ]);
    $commandLog = tempnam(sys_get_temp_dir(), 'x-payout-doctl-log-');
    $cloudBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
if [[ "${1:-}" == "domain:get" ]]; then printf '%s\n' "${FAKE_CLOUD_DOMAIN_JSON}"; exit 0; fi
exit 1
BASH);
    $doctlBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
printf '%s\n' "$*" >>"${FAKE_DOCTL_LOG}"
if [[ "$*" == *"compute domain records list"* ]]; then printf '[]\n'; exit 0; fi
exit 1
BASH);

    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'domain-reconcile',
        '--apply',
        '--control='.$controlFile,
    ], env: [
        'CLOUD_BIN' => $cloudBinary,
        'DOCTL_BIN' => $doctlBinary,
        'FAKE_CLOUD_DOMAIN_JSON' => '{"dnsRecords":{"origin":{"type":"A","name":"payout.disburse.cash","value":"103.133.1.1"}}}',
        'FAKE_DOCTL_LOG' => $commandLog,
    ]);
    $process->run();

    expect($process->isSuccessful())->toBeFalse()
        ->and($process->getErrorOutput())
        ->toContain('DEPLOY_CONFIRM_DNS_WRITE=YES')
        ->and(file_get_contents($commandLog))
        ->not->toContain('records create');

    unlink($controlFile);
    unlink($cloudBinary);
    unlink($doctlBinary);
    unlink($commandLog);
});

it('applies only the reviewed DNS diff and verifies the resulting state', function (): void {
    $snapshotDirectory = sys_get_temp_dir().'/x-payout-dns-snapshots-'.bin2hex(random_bytes(4));
    $controlFile = productionDeploymentControl([
        'DEPLOY_CONFIRM_PRODUCTION' => 'YES',
        'DEPLOY_CONFIRM_DOMAIN_CUTOVER' => 'YES',
        'DEPLOY_CONFIRM_DNS_WRITE' => 'YES',
        'DEPLOY_CLOUD_DOMAIN_ID' => 'domain-test',
        'DEPLOY_DNS_AUTOMATION_ENABLED' => 'true',
        'DEPLOY_DOCTL_CONTEXT' => 'x-payout-test-dns',
        'DEPLOY_DNS_SNAPSHOT_DIRECTORY' => $snapshotDirectory,
    ]);
    $commandLog = tempnam(sys_get_temp_dir(), 'x-payout-doctl-log-');
    $recordState = tempnam(sys_get_temp_dir(), 'x-payout-doctl-state-');
    file_put_contents($recordState, '[{"id":1,"type":"A","name":"payout","data":"198.51.100.8","ttl":3600},{"id":2,"type":"TXT","name":"_cf-custom-hostname.payout","data":"obsolete","ttl":3600}]');
    $cloudBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
if [[ "${1:-}" == "domain:get" ]]; then printf '%s\n' "${FAKE_CLOUD_DOMAIN_JSON}"; exit 0; fi
exit 1
BASH);
    $doctlBinary = productionDeploymentFakeExecutable(<<<'BASH'
#!/usr/bin/env bash
set -euo pipefail
printf '%s\n' "$*" >>"${FAKE_DOCTL_LOG}"

flag_value() {
    local prefix="$1"
    shift
    local argument
    for argument in "$@"; do
        case "${argument}" in
            "${prefix}"=*) printf '%s' "${argument#*=}"; return ;;
        esac
    done
}

if [[ "$*" == *"compute domain records list"* ]]; then
    cat "${FAKE_DOCTL_STATE}"
    exit 0
fi

if [[ "$*" == *"compute domain records create"* ]]; then
    type="$(flag_value --record-type "$@")"
    name="$(flag_value --record-name "$@")"
    data="$(flag_value --record-data "$@")"
    ttl="$(flag_value --record-ttl "$@")"
    temporary="$(mktemp)"
    jq --arg type "${type}" --arg name "${name}" --arg data "${data}" --argjson ttl "${ttl}" \
        '. + [{id: 99, type: $type, name: $name, data: $data, ttl: $ttl}]' \
        "${FAKE_DOCTL_STATE}" >"${temporary}"
    mv "${temporary}" "${FAKE_DOCTL_STATE}"
    printf '{"id":99}\n'
    exit 0
fi

if [[ "$*" == *"compute domain records update"* ]]; then
    id="$(flag_value --record-id "$@")"
    type="$(flag_value --record-type "$@")"
    name="$(flag_value --record-name "$@")"
    data="$(flag_value --record-data "$@")"
    ttl="$(flag_value --record-ttl "$@")"
    temporary="$(mktemp)"
    jq --arg id "${id}" --arg type "${type}" --arg name "${name}" --arg data "${data}" --argjson ttl "${ttl}" \
        'map(if (.id | tostring) == $id then .type = $type | .name = $name | .data = $data | .ttl = $ttl else . end)' \
        "${FAKE_DOCTL_STATE}" >"${temporary}"
    mv "${temporary}" "${FAKE_DOCTL_STATE}"
    printf '{"id":%s}\n' "${id}"
    exit 0
fi

if [[ "$*" == *"compute domain records delete"* ]]; then
    id="${6}"
    temporary="$(mktemp)"
    jq --arg id "${id}" 'map(select((.id | tostring) != $id))' \
        "${FAKE_DOCTL_STATE}" >"${temporary}"
    mv "${temporary}" "${FAKE_DOCTL_STATE}"
    exit 0
fi

exit 1
BASH);
    $cloudDomain = json_encode([
        'dnsRecords' => [
            'origin' => ['type' => 'A', 'name' => 'payout.disburse.cash', 'value' => '103.133.1.1'],
            'ssl' => [[
                'type' => 'CNAME',
                'name' => '_acme-challenge.payout.disburse.cash',
                'value' => 'payout.validation.example.com',
            ]],
        ],
    ], JSON_THROW_ON_ERROR);

    $process = new Process([
        'bash',
        productionDeploymentKitPath('scripts/deploy-production-cleanroom.sh'),
        'domain-reconcile',
        '--apply',
        '--control='.$controlFile,
    ], env: [
        'CLOUD_BIN' => $cloudBinary,
        'DOCTL_BIN' => $doctlBinary,
        'FAKE_CLOUD_DOMAIN_JSON' => $cloudDomain,
        'FAKE_DOCTL_LOG' => $commandLog,
        'FAKE_DOCTL_STATE' => $recordState,
    ]);
    $process->mustRun();

    $finalRecords = json_decode(file_get_contents($recordState), true, flags: JSON_THROW_ON_ERROR);
    expect($process->getOutput())
        ->toContain('DigitalOcean DNS matches Laravel Cloud')
        ->and(file_get_contents($commandLog))
        ->toContain('records create disburse.cash')
        ->toContain('records update disburse.cash')
        ->toContain('records delete disburse.cash 2')
        ->and($finalRecords)->toBe([
            ['id' => 1, 'type' => 'A', 'name' => 'payout', 'data' => '103.133.1.1', 'ttl' => 3600],
            ['id' => 99, 'type' => 'CNAME', 'name' => '_acme-challenge.payout', 'data' => 'payout.validation.example.com', 'ttl' => 3600],
        ])
        ->and(glob($snapshotDirectory.'/*-before.json'))->toHaveCount(1)
        ->and(glob($snapshotDirectory.'/*-after.json'))->toHaveCount(1);

    unlink($controlFile);
    unlink($cloudBinary);
    unlink($doctlBinary);
    unlink($commandLog);
    unlink($recordState);
});
