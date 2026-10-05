<?php

use App\Deployment\Profiles\InstanceProfileCompiler;
use Symfony\Component\Process\Process;

function entryPointExecutable(string $contents): string
{
    $path = tempnam(sys_get_temp_dir(), 'x-payout-entry-bin-');
    file_put_contents($path, $contents);
    chmod($path, 0755);

    return $path;
}

it('runs the real continuous entry point twice with fake CLIs and emits sanitized evidence', function (): void {
    $root = dirname(__DIR__, 3);
    $profilePath = $root.'/ops/deployment/examples/instance.yaml';
    $profile = (new InstanceProfileCompiler)->validate($profilePath);
    $directory = sys_get_temp_dir().'/x-payout-entry-parity-'.bin2hex(random_bytes(4));
    mkdir($directory, 0700, true);
    $secretsPath = $directory.'/secrets.env';
    $secretValue = 'never-serialize-entry-secret';
    file_put_contents($secretsPath, implode("\n", array_map(
        static fn (string $name): string => $name.'='.$secretValue.'-'.$name,
        $profile['required_secrets'],
    ))."\n");
    chmod($secretsPath, 0600);
    $statePath = $directory.'/state.json';
    $evidencePath = $directory.'/evidence.json';
    $cloudLog = $directory.'/cloud.log';
    $cloudState = $directory.'/cloud-state';
    mkdir($cloudState, 0700, true);
    $secretNames = implode(',', $profile['required_secrets']);

    $success = entryPointExecutable("#!/usr/bin/env bash\nexit 0\n");
    $git = entryPointExecutable(<<<'BASH'
#!/usr/bin/env bash
printf '%s\trefs/tags/v1.0.0\n' 0123456789abcdef0123456789abcdef01234567
BASH);
    $doctl = entryPointExecutable(<<<'BASH'
#!/usr/bin/env bash
set -euo pipefail
if [[ "$*" == *"compute domain get"* ]]; then
  printf '%s\n' '[{"domain":"example.com"}]'
elif [[ "$*" == *"compute domain records list"* ]]; then
  if [[ -f "${FAKE_DNS_STATE}" ]]; then
    printf '%s\n' '[{"id":1,"type":"A","name":"payout","data":"203.0.113.10","ttl":3600}]'
  else
    printf '%s\n' '[]'
  fi
elif [[ "$*" == *"compute domain records create"* ]]; then
  touch "${FAKE_DNS_STATE}"
  printf '%s\n' '{}'
else
  printf 'unsupported fake doctl operation: %s\n' "$*" >&2
  exit 1
fi
BASH);
    $cloud = entryPointExecutable(<<<'BASH'
#!/usr/bin/env bash
set -euo pipefail
op="${1:-}"
shift || true
printf '%s %s\n' "$op" "$*" >>"${FAKE_CLOUD_LOG}"
state="${FAKE_CLOUD_STATE}"
case "$op" in
  application:list)
    [[ -f "$state/app" ]] && printf '%s\n' '[{"id":"app-one","name":"Example PayOut","repositoryFullName":"example/x-payout"}]' || printf '%s\n' '[]'
    ;;
  application:create)
    touch "$state/app" "$state/env"
    printf '%s\n' '{"id":"app-one","defaultEnvironmentId":"env-one"}'
    ;;
  environment:list) printf '%s\n' '[{"id":"env-one","name":"production","databaseSchemaId":"database-one","cacheId":"cache-one"}]' ;;
  instance:list)
    [[ -f "$state/instance" ]] && printf '%s\n' '[{"id":"instance-one","isDefault":true}]' || printf '%s\n' '[]'
    ;;
  database-cluster:list)
    [[ -f "$state/database" ]] && printf '%s\n' '[{"id":"cluster-one","schemas":[{"id":"database-one"}]}]' || printf '%s\n' '[]'
    ;;
  cache:list)
    [[ -f "$state/cache" ]] && printf '%s\n' '[{"id":"cache-one"}]' || printf '%s\n' '[]'
    ;;
  background-process:list)
    [[ -f "$state/worker" ]] && printf '%s\n' '[{"id":"worker-one","command":"php artisan queue:work"}]' || printf '%s\n' '[]'
    ;;
  domain:list)
    [[ -f "$state/domain" ]] && printf '%s\n' '[{"id":"domain-one","name":"payout.example.com"}]' || printf '%s\n' '[]'
    ;;
  environment-secret:list|secret:list)
    first=true
    printf '['
    IFS=',' read -ra names <<<"${FAKE_SECRET_NAMES}"
    for name in "${names[@]}"; do
      $first || printf ','
      first=false
      printf '{"id":"secret-%s","key":"%s"}' "$name" "$name"
    done
    printf ']\n'
    ;;
  database-cluster:create) touch "$state/cluster"; printf '%s\n' '{"id":"cluster-one"}' ;;
  database-cluster:get) printf '%s\n' '{"id":"cluster-one","status":"available"}' ;;
  database:create) touch "$state/database"; printf '%s\n' '{"id":"database-one"}' ;;
  cache:create) touch "$state/cache"; printf '%s\n' '{"id":"cache-one"}' ;;
  cache:get) printf '%s\n' '{"id":"cache-one","status":"available"}' ;;
  environment:update|instance:update|environment-secret:attach) printf '%s\n' '{}' ;;
  instance:create) touch "$state/instance"; printf '%s\n' '{"id":"instance-one"}' ;;
  environment:get)
    if [[ "$*" == *"--show-sensitive"* ]]; then
      printf '%s\n' '{"environmentVariables":[]}'
    else
      printf '%s\n' '{"id":"env-one"}'
    fi
    ;;
  environment:variables) printf '%s\n' '{}' ;;
  background-process:create) touch "$state/worker"; printf '%s\n' '{"id":"worker-one"}' ;;
  deploy) touch "$state/deployed"; printf '%s\n' '{"deployment_id":"deployment-one"}' ;;
  deploy:monitor) printf '%s\n' 'deployment.succeeded' ;;
  command:run)
    if [[ "$*" == *"commissioning:status"* ]]; then
      if [[ -f "$state/commissioned" ]]; then
        printf '%s\n' '{"status":"command.success","exitCode":0,"output":"{\"operational\":true}"}'
      else
        printf '%s\n' '{"status":"command.failed","exitCode":1,"output":"{\"operational\":false,\"reason\":\"installation_incomplete\"}"}'
      fi
    else
      [[ "$*" == *"x-payout:bootstrap"* ]] && touch "$state/commissioned"
      printf '%s\n' '{"status":"command.success","exitCode":0,"output":"{\"success\":true}"}'
    fi
    ;;
  domain:create) touch "$state/domain"; printf '%s\n' '{"id":"domain-one","dnsRecords":[{"type":"A","name":"payout.example.com","value":"203.0.113.10"}]}' ;;
  domain:verify) printf '%s\n' '{"hostnameStatus":"verified","sslStatus":"verified","originStatus":"verified"}' ;;
  *) printf 'unsupported fake cloud operation: %s\n' "$op" >&2; exit 1 ;;
esac
BASH);
    $environment = [
        'CLOUD_BIN' => $cloud,
        'GIT_BIN' => $git,
        'DOCTL_BIN' => $doctl,
        'AWS_BIN' => $success,
        'CURL_BIN' => $success,
        'FAKE_CLOUD_LOG' => $cloudLog,
        'FAKE_CLOUD_STATE' => $cloudState,
        'FAKE_DNS_STATE' => $directory.'/dns-state',
        'FAKE_SECRET_NAMES' => $secretNames,
    ];
    $arguments = [
        PHP_BINARY,
        $root.'/bin/x-payout-deploy',
        'continuous',
        '--instance='.$profilePath,
        '--secrets='.$secretsPath,
        '--state='.$statePath,
        '--evidence='.$evidencePath,
        '--compiled='.$directory.'/compiled',
        '--adapter=laravel-cloud',
        '--apply',
        '--commission',
        '--activate-domain',
    ];

    $first = new Process($arguments, $root, $environment);
    $first->setTimeout(30);
    $first->mustRun();
    $firstLog = file_get_contents($cloudLog);
    $firstEvidence = file_get_contents($evidencePath);
    $firstEvidencePayload = json_decode($firstEvidence, true, flags: JSON_THROW_ON_ERROR);
    $state = json_decode((string) file_get_contents($statePath), true, flags: JSON_THROW_ON_ERROR);

    expect($first->getOutput())->toContain('Continuous deployment complete')
        ->and($firstLog)->toContain('database-cluster:create --name=example-payments-host-production')
        ->and($state['checkpoints'])->each->toBe('complete')
        ->and($state['resources'])->toMatchArray([
            'application_id' => 'app-one',
            'environment_id' => 'env-one',
            'database_cluster_id' => 'cluster-one',
            'database_id' => 'database-one',
            'cache_id' => 'cache-one',
            'instance_id' => 'instance-one',
            'worker_process_id' => 'worker-one',
            'domain_id' => 'domain-one',
        ])->and($firstEvidence)
        ->toContain('x-payout.deployment-evidence.v1', 'deployment-one')
        ->not->toContain($secretValue, 'NETBANK_CLIENT_SECRET":')
        ->and($firstEvidencePayload['phase_evidence'])->toHaveKeys([
            'preflight', 'secrets', 'runtime', 'deployment', 'pre_commission',
            'commissioning', 'domain', 'strict_doctor', 'mcp_doctor',
        ])
        ->and($firstEvidencePayload['phase_evidence']['runtime']['changed_keys'])->not->toBeEmpty();

    $second = new Process($arguments, $root, $environment);
    $second->setTimeout(30);
    $second->mustRun();
    $secondLog = substr((string) file_get_contents($cloudLog), strlen($firstLog));
    $secondEvidence = json_decode((string) file_get_contents($evidencePath), true, flags: JSON_THROW_ON_ERROR);

    expect($secondLog)
        ->toContain('application:list', 'command:run')
        ->not->toContain(
            'application:create',
            'database-cluster:create',
            'database:create',
            'cache:create',
            'instance:create',
            'environment:variables',
            'background-process:create',
            'deploy ',
            'domain:create',
        )->and($secondEvidence['phase_evidence'])->toHaveKeys([
            'deployment', 'commissioning', 'domain', 'strict_doctor', 'mcp_doctor',
        ]);
});
