<?php

use App\Deployment\Profiles\InstanceProfileCompiler;
use Symfony\Component\Process\Process;
use Symfony\Component\Yaml\Yaml;

function compiledParityPath(string $path): string
{
    return dirname(__DIR__, 2).'/'.ltrim($path, '/');
}

/**
 * @param  null|Closure(array<string, mixed>&): void  $mutate
 * @return array{directory: string, secrets: string, attached: string}
 */
function compiledParityProfile(?Closure $mutate = null): array
{
    $profile = Yaml::parseFile(compiledParityPath('ops/deployment/examples/instance.yaml'));
    $profile['commissioning']['opening']['cutover_at'] = '2026-10-04T00:00:00Z';
    $profile['commissioning']['opening']['cutover_transaction_id'] = 'test-provider-watermark';

    if ($mutate !== null) {
        $mutate($profile);
    }

    $instance = tempnam(sys_get_temp_dir(), 'x-payout-parity-instance-');
    file_put_contents($instance, Yaml::dump($profile, 12, 2));
    $compiler = new InstanceProfileCompiler;
    $validated = $compiler->validate($instance);
    $secrets = tempnam(sys_get_temp_dir(), 'x-payout-parity-secrets-');
    $secretContents = '';

    foreach ($validated['required_secrets'] as $secretName) {
        $secretContents .= "{$secretName}=private-parity-value\n";
    }

    file_put_contents($secrets, $secretContents);
    chmod($secrets, 0600);
    $directory = sys_get_temp_dir().'/x-payout-parity-compiled-'.bin2hex(random_bytes(4));
    $compiler->compile($instance, $secrets, $directory);
    unlink($instance);

    return [
        'directory' => $directory,
        'secrets' => $secrets,
        'attached' => json_encode(array_map(
            static fn (string $name): array => ['key' => $name],
            $validated['required_secrets'],
        ), JSON_THROW_ON_ERROR),
    ];
}

/** @param array<string, string> $overrides */
function compiledParityControl(array $overrides): string
{
    $path = tempnam(sys_get_temp_dir(), 'x-payout-parity-control-');
    $contents = file_get_contents(compiledParityPath('deployment.production.example'));

    foreach ($overrides as $key => $value) {
        $pattern = '/^'.preg_quote($key, '/').'=.*$/m';
        $contents = preg_match($pattern, $contents) === 1
            ? preg_replace($pattern, $key.'='.$value, $contents)
            : $contents."\n{$key}={$value}\n";
    }

    file_put_contents($path, $contents);

    return $path;
}

function compiledParityExecutable(string $contents): string
{
    $path = tempnam(sys_get_temp_dir(), 'x-payout-parity-command-');
    file_put_contents($path, $contents);
    chmod($path, 0755);

    return $path;
}

/**
 * @param  array<int, string>  $arguments
 * @param  array<string, string>  $environment
 */
function compiledParityProcess(array $arguments, array $environment = []): Process
{
    return new Process([
        'bash',
        compiledParityPath('scripts/deploy-production-cleanroom.sh'),
        ...$arguments,
    ], env: $environment);
}

it('persists generated foundation state in compiled compatibility mode', function (): void {
    $compiled = compiledParityProfile();
    $control = compiledParityControl([
        'DEPLOY_CONFIRM_PRODUCTION' => 'YES',
        'DEPLOY_DIGITALOCEAN_SPACE' => 'existing-space',
    ]);
    $log = tempnam(sys_get_temp_dir(), 'x-payout-parity-cloud-log-');
    $cloud = compiledParityExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
printf '%s\n' "$*" >>"${FAKE_CLOUD_LOG}"
case "${1:-}" in
    application:create) printf '%s\n' '{"id":"app-compiled","defaultEnvironmentId":"env-compiled"}' ;;
    database-cluster:create) printf '%s\n' '{"id":"cluster-compiled"}' ;;
    database-cluster:get) printf '%s\n' '{"status":"available"}' ;;
    database:create) printf '%s\n' '{"id":"database-compiled"}' ;;
    cache:create) printf '%s\n' '{"id":"cache-compiled"}' ;;
    cache:get) printf '%s\n' '{"status":"available"}' ;;
    environment:update) printf '%s\n' '{}' ;;
    environment:get) printf '%s\n' '{"instances":[]}' ;;
    instance:create) printf '%s\n' '{"id":"instance-compiled"}' ;;
    instance:update) printf '%s\n' '{}' ;;
    *) exit 1 ;;
esac
BASH);

    $process = compiledParityProcess([
        'foundation', '--apply', '--control='.$control, '--compiled='.$compiled['directory'],
    ], ['CLOUD_BIN' => $cloud, 'FAKE_CLOUD_LOG' => $log]);
    $process->mustRun();
    $commands = file_get_contents($log);
    $state = file_get_contents($control);

    expect($commands)
        ->toContain('application:create --name=x-PayOut --repository=example/x-payout')
        ->toContain('database-cluster:create')
        ->toContain('cache:create')
        ->toContain('instance:create env-compiled')
        ->and($state)
        ->toContain('DEPLOY_CLOUD_APPLICATION_ID=app-compiled')
        ->toContain('DEPLOY_CLOUD_ENVIRONMENT_ID=env-compiled')
        ->toContain('DEPLOY_CLOUD_DATABASE_ID=database-compiled')
        ->toContain('DEPLOY_CLOUD_CACHE_ID=cache-compiled')
        ->toContain('DEPLOY_CLOUD_INSTANCE_ID=instance-compiled');
});

it('deploys the compiled release ref and bounds monitoring', function (): void {
    $compiled = compiledParityProfile();
    $control = compiledParityControl([
        'DEPLOY_CONFIRM_PRODUCTION' => 'YES',
        'DEPLOY_CLOUD_APPLICATION_ID' => 'app-test',
        'DEPLOY_CLOUD_ENVIRONMENT_ID' => 'env-test',
        'DEPLOY_MONITOR_ATTEMPTS' => '2',
        'DEPLOY_MONITOR_INTERVAL_SECONDS' => '0',
    ]);
    $log = tempnam(sys_get_temp_dir(), 'x-payout-parity-cloud-log-');
    $cloud = compiledParityExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
printf '%s\n' "$*" >>"${FAKE_CLOUD_LOG}"
case "${1:-}" in
    environment:update) printf '%s\n' '{}' ;;
    deploy) printf '%s\n' '{"deployment_id":"deployment-compiled"}' ;;
    deploy:monitor) sleep 30 ;;
    deployment:get) printf '%s\n' '{"id":"deployment-compiled","status":"deployment.succeeded","commitHash":"exact-compiled-ref"}' ;;
    *) exit 1 ;;
esac
BASH);

    $process = compiledParityProcess([
        'deploy', '--apply', '--control='.$control, '--compiled='.$compiled['directory'],
    ], ['CLOUD_BIN' => $cloud, 'FAKE_CLOUD_LOG' => $log]);
    $process->setTimeout(10);
    $process->mustRun();

    expect(file_get_contents($log))
        ->toContain('environment:update env-test --branch=v1.0.0')
        ->toContain('deploy app-test production')
        ->and($process->getOutput())->toContain('deployment.succeeded');
});

it('runs compiled pre-commission checks and stops commissioning without authority', function (): void {
    $compiled = compiledParityProfile(static function (array &$profile): void {
        $profile['commissioning']['opening']['allow_production'] = true;
    });
    $control = compiledParityControl([
        'DEPLOY_CONFIRM_PRODUCTION' => 'YES',
        'DEPLOY_CLOUD_ENVIRONMENT_ID' => 'env-test',
    ]);
    $log = tempnam(sys_get_temp_dir(), 'x-payout-parity-cloud-log-');
    $cloud = compiledParityExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
if [[ "${1:-}" == "environment-secret:list" ]]; then printf '%s\n' "${FAKE_ATTACHED_SECRETS}"; exit 0; fi
if [[ "${1:-}" == "command:run" ]]; then
    printf '%s\n' "$*" >>"${FAKE_CLOUD_LOG}"
    printf '%s\n' '{"status":"command.success","output":"{\"success\":true}\n","exitCode":0}'
    exit 0
fi
exit 1
BASH);

    $preCommission = compiledParityProcess([
        'pre-commission', '--control='.$control, '--compiled='.$compiled['directory'],
    ], [
        'CLOUD_BIN' => $cloud,
        'FAKE_CLOUD_LOG' => $log,
        'FAKE_ATTACHED_SECRETS' => $compiled['attached'],
    ]);
    $preCommission->mustRun();
    $commission = compiledParityProcess([
        'commission', '--apply', '--control='.$control, '--compiled='.$compiled['directory'],
    ], ['CLOUD_BIN' => $cloud, 'FAKE_CLOUD_LOG' => $log]);
    $commission->run();

    expect(file_get_contents($log))->toContain('doctor --pre-commission --strict --json')
        ->and($commission->isSuccessful())->toBeFalse()
        ->and($commission->getErrorOutput())->toContain('DEPLOY_CONFIRM_COMMISSIONING=YES')
        ->and(file_get_contents($log))->not->toContain('x-payout:bootstrap');
});

it('preserves operational skip and verified adoption in compiled mode', function (string $statusOutput, array $expected, array $unexpected): void {
    $compiled = compiledParityProfile(static function (array &$profile): void {
        $profile['commissioning']['opening']['allow_production'] = true;
    });
    $control = compiledParityControl([
        'DEPLOY_CONFIRM_PRODUCTION' => 'YES',
        'DEPLOY_CONFIRM_COMMISSIONING' => 'YES',
        'DEPLOY_CLOUD_ENVIRONMENT_ID' => 'env-test',
    ]);
    $log = tempnam(sys_get_temp_dir(), 'x-payout-parity-cloud-log-');
    $cloud = compiledParityExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
if [[ "${1:-}" == "environment-secret:list" ]]; then printf '%s\n' "${FAKE_ATTACHED_SECRETS}"; exit 0; fi
if [[ "${1:-}" == "command:run" ]]; then
    printf '%s\n' "$*" >>"${FAKE_CLOUD_LOG}"
    if [[ "$*" == *"commissioning:status"* ]]; then
        printf '%s\n' "${FAKE_STATUS_OUTPUT}"
    else
        printf '%s\n' '{"status":"command.success","output":"{\"success\":true}\n","exitCode":0}'
    fi
    exit 0
fi
exit 1
BASH);

    $process = compiledParityProcess([
        'commission', '--apply', '--control='.$control, '--compiled='.$compiled['directory'],
    ], [
        'CLOUD_BIN' => $cloud,
        'FAKE_CLOUD_LOG' => $log,
        'FAKE_ATTACHED_SECRETS' => $compiled['attached'],
        'FAKE_STATUS_OUTPUT' => $statusOutput,
    ]);
    $process->mustRun();
    $commands = file_get_contents($log);

    foreach ($expected as $command) {
        expect($commands)->toContain($command);
    }

    foreach ($unexpected as $command) {
        expect($commands)->not->toContain($command);
    }
})->with([
    'operational skip' => [
        '{"status":"command.success","output":"{\"operational\":true}\n","exitCode":0}',
        ['commissioning:status', 'doctor --strict'],
        ['x-payout:bootstrap', 'commissioning:adopt'],
    ],
    'verified adoption' => [
        '{"status":"command.success","output":"{\"operational\":false,\"reason\":\"installation_manifest_stale\"}\n","exitCode":1}',
        ['commissioning:status', 'doctor --pre-commission --strict', 'commissioning:adopt', 'doctor --strict'],
        ['x-payout:bootstrap'],
    ],
]);

it('collects strict doctor and balance evidence in compiled mode', function (): void {
    $compiled = compiledParityProfile();
    $control = compiledParityControl(['DEPLOY_CLOUD_ENVIRONMENT_ID' => 'env-test']);
    $log = tempnam(sys_get_temp_dir(), 'x-payout-parity-cloud-log-');
    $cloud = compiledParityExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
if [[ "${1:-}" == "command:run" ]]; then
    printf '%s\n' "$*" >>"${FAKE_CLOUD_LOG}"
    printf '%s\n' '{"status":"command.success","output":"{\"success\":true}\n","exitCode":0}'
    exit 0
fi
exit 1
BASH);

    $process = compiledParityProcess([
        'verify', '--control='.$control, '--compiled='.$compiled['directory'],
    ], ['CLOUD_BIN' => $cloud, 'FAKE_CLOUD_LOG' => $log]);
    $process->mustRun();
    $commands = file_get_contents($log);

    expect($commands)
        ->toContain('composer show 3neti/x-change --format=json')
        ->toContain('x-change:doctor --strict --json')
        ->toContain('x-change:continuity:balance-report --json --pretty');
});

it('reconciles compiled-domain DNS as a no-op and accepts public surfaces', function (): void {
    $compiled = compiledParityProfile();
    $snapshotDirectory = sys_get_temp_dir().'/x-payout-parity-dns-'.bin2hex(random_bytes(4));
    $control = compiledParityControl([
        'DEPLOY_CLOUD_DOMAIN_ID' => 'domain-test',
        'DEPLOY_DNS_ZONE' => 'example.com',
        'DEPLOY_DNS_AUTOMATION_ENABLED' => 'true',
        'DEPLOY_DOCTL_CONTEXT' => 'parity-dns',
        'DEPLOY_DNS_SNAPSHOT_DIRECTORY' => $snapshotDirectory,
    ]);
    $doctlLog = tempnam(sys_get_temp_dir(), 'x-payout-parity-doctl-log-');
    $cloud = compiledParityExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
if [[ "${1:-}" == "domain:get" ]]; then
    printf '%s\n' '{"dnsRecords":{"origin":{"type":"A","name":"payout.example.com","value":"203.0.113.10"}}}'
    exit 0
fi
exit 1
BASH);
    $doctl = compiledParityExecutable(<<<'BASH'
#!/usr/bin/env bash
printf '%s\n' "$*" >>"${FAKE_DOCTL_LOG}"
if [[ "$*" == *"compute domain records list"* ]]; then
    printf '%s\n' '[{"id":1,"type":"A","name":"payout","data":"203.0.113.10","ttl":3600}]'
    exit 0
fi
exit 1
BASH);
    $curl = compiledParityExecutable(<<<'BASH'
#!/usr/bin/env bash
output=''
url=''
while (($#)); do
    case "$1" in
        --output) shift; output="${1:-}" ;;
        https://*) url="$1" ;;
    esac
    shift || true
done
if [[ "${url}" == */x/auto-generate ]]; then printf 'Public issuance is unavailable.' >"${output}"; else printf 'Accepted.' >"${output}"; fi
BASH);

    $dns = compiledParityProcess([
        'domain-reconcile', '--control='.$control, '--compiled='.$compiled['directory'],
    ], [
        'CLOUD_BIN' => $cloud,
        'DOCTL_BIN' => $doctl,
        'FAKE_DOCTL_LOG' => $doctlLog,
    ]);
    $dns->mustRun();
    $acceptance = compiledParityProcess([
        'domain-acceptance', '--control='.$control, '--compiled='.$compiled['directory'],
    ], ['CURL_BIN' => $curl]);
    $acceptance->mustRun();

    expect($dns->getOutput())
        ->toContain('NOOP   A payout -> 203.0.113.10')
        ->toContain('No DigitalOcean mutation is required')
        ->and(file_get_contents($doctlLog))
        ->not->toContain('records create')
        ->not->toContain('records update')
        ->not->toContain('records delete')
        ->and($acceptance->getOutput())
        ->toContain('Accepted https://payout.example.com/')
        ->toContain('without creating a funding order');
});

it('creates and verifies the compiled custom domain without changing nameservers', function (): void {
    $compiled = compiledParityProfile();
    $control = compiledParityControl([
        'DEPLOY_CONFIRM_PRODUCTION' => 'YES',
        'DEPLOY_CONFIRM_DOMAIN_CUTOVER' => 'YES',
        'DEPLOY_CLOUD_ENVIRONMENT_ID' => 'env-test',
        'DEPLOY_DOMAIN_VERIFY_ATTEMPTS' => '1',
        'DEPLOY_DOMAIN_VERIFY_INTERVAL_SECONDS' => '0',
    ]);
    $log = tempnam(sys_get_temp_dir(), 'x-payout-parity-cloud-log-');
    $cloud = compiledParityExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
printf '%s\n' "$*" >>"${FAKE_CLOUD_LOG}"
case "${1:-}" in
    domain:create) printf '%s\n' '{"id":"domain-compiled","dnsRecords":{"origin":{"type":"A","name":"payout.example.com","value":"203.0.113.10"}}}' ;;
    domain:verify) printf '%s\n' '{"hostnameStatus":"verified","sslStatus":"verified","originStatus":"verified"}' ;;
    *) exit 1 ;;
esac
BASH);
    $curl = compiledParityExecutable("#!/usr/bin/env bash\nexit 0\n");

    $create = compiledParityProcess([
        'domain-create', '--apply', '--control='.$control, '--compiled='.$compiled['directory'],
    ], ['CLOUD_BIN' => $cloud, 'FAKE_CLOUD_LOG' => $log]);
    $create->mustRun();
    $verify = compiledParityProcess([
        'domain-verify', '--apply', '--control='.$control, '--compiled='.$compiled['directory'],
    ], ['CLOUD_BIN' => $cloud, 'CURL_BIN' => $curl, 'FAKE_CLOUD_LOG' => $log]);
    $verify->mustRun();

    expect(file_get_contents($log))
        ->toContain('domain:create env-test --name=payout.example.com')
        ->toContain('domain:verify domain-compiled')
        ->and(file_get_contents($control))
        ->toContain('DEPLOY_CLOUD_DOMAIN_ID=domain-compiled')
        ->and($create->getOutput())->toContain('Keep the DigitalOcean nameservers unchanged');
});

it('runs compiled continuous mode to its accountable pre-commission safe stop', function (): void {
    $compiled = compiledParityProfile();
    $control = compiledParityControl([
        'DEPLOY_CONFIRM_PRODUCTION' => 'YES',
        'DEPLOY_CONFIRM_COMMISSIONING' => 'NO',
        'DEPLOY_CLOUD_APPLICATION_ID' => 'app-test',
        'DEPLOY_CLOUD_ENVIRONMENT_ID' => 'env-test',
        'DEPLOY_CLOUD_INSTANCE_ID' => 'instance-test',
        'DEPLOY_CLOUD_DATABASE_CLUSTER_ID' => 'cluster-test',
        'DEPLOY_CLOUD_DATABASE_ID' => 'database-test',
        'DEPLOY_CLOUD_CACHE_ID' => 'cache-test',
        'DEPLOY_CLOUD_WORKER_PROCESS_ID' => 'worker-test',
        'DEPLOY_CLOUD_SECRET_IDS' => 'secret-test',
        'DEPLOY_DIGITALOCEAN_SPACE' => 'existing-space',
        'DEPLOY_MONITOR_ATTEMPTS' => '2',
        'DEPLOY_MONITOR_INTERVAL_SECONDS' => '0',
    ]);
    $log = tempnam(sys_get_temp_dir(), 'x-payout-parity-cloud-log-');
    $cloud = compiledParityExecutable(<<<'BASH'
#!/usr/bin/env bash
if [[ "${2:-}" == "-h" ]]; then exit 0; fi
printf '%s\n' "$*" >>"${FAKE_CLOUD_LOG}"
case "${1:-}" in
    database-cluster:get) printf '%s\n' '{"status":"available"}' ;;
    cache:get) printf '%s\n' '{"status":"available"}' ;;
    environment:update) printf '%s\n' '{}' ;;
    environment:get) printf '%s\n' '{"instances":["instance-test"]}' ;;
    instance:update) printf '%s\n' '{}' ;;
    environment:variables) ;;
    environment-secret:attach) printf '%s\n' '[]' ;;
    environment-secret:list) printf '%s\n' "${FAKE_ATTACHED_SECRETS}" ;;
    deploy) printf '%s\n' '{"deployment_id":"deployment-continuous"}' ;;
    deploy:monitor) sleep 30 ;;
    deployment:get) printf '%s\n' '{"id":"deployment-continuous","status":"deployment.succeeded"}' ;;
    command:run) printf '%s\n' '{"status":"command.success","output":"{\"success\":true}\n","exitCode":0}' ;;
    *) exit 1 ;;
esac
BASH);

    $process = compiledParityProcess([
        'continuous', '--apply', '--control='.$control, '--compiled='.$compiled['directory'],
    ], [
        'CLOUD_BIN' => $cloud,
        'FAKE_CLOUD_LOG' => $log,
        'FAKE_ATTACHED_SECRETS' => $compiled['attached'],
    ]);
    $process->setTimeout(30);
    $process->mustRun();
    $commands = file_get_contents($log);

    expect($process->getOutput())
        ->toContain('Continuous deployment reached the accountable commissioning checkpoint')
        ->and($commands)
        ->toContain('deploy app-test production')
        ->toContain('doctor --pre-commission --strict --json')
        ->not->toContain('x-payout:bootstrap')
        ->not->toContain('domain:create');
});
