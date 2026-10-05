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
printf '%s\trefs/heads/release/v1.0.0\n' 0123456789abcdef0123456789abcdef01234567
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
  environment:list)
    if [[ -f "$state/attached" ]]; then
      printf '%s\n' '[{"id":"env-one","name":"production","databaseSchemaId":"database-one","cacheId":"cache-one"}]'
    else
      printf '%s\n' '[{"id":"env-one","name":"production","databaseSchemaId":null,"cacheId":null}]'
    fi
    ;;
  instance:list)
    [[ -f "$state/instance" ]] && printf '%s\n' '[{"id":"instance-one","isDefault":true}]' || printf '%s\n' '[]'
    ;;
  database-cluster:list)
    [[ -f "$state/database" ]] && printf '%s\n' '[{"id":"cluster-one","name":"example-payments-host-production","schemas":[{"id":"database-one","name":"x_payout"}]}]' || printf '%s\n' '[]'
    ;;
  cache:list)
    [[ -f "$state/cache" ]] && printf '%s\n' '[{"id":"cache-one","name":"example-payments-host-production"}]' || printf '%s\n' '[]'
    ;;
  background-process:list)
    [[ -f "$state/worker" ]] && printf '%s\n' '[{"id":"worker-one","command":"php artisan queue:work"}]' || printf '%s\n' '[]'
    ;;
  domain:list)
    [[ -f "$state/domain" ]] && printf '%s\n' '[{"id":"domain-one","name":"payout.example.com"}]' || printf '%s\n' '[]'
    ;;
  deployment:list)
    if [[ -f "$state/deployed" ]]; then
      printf '%s\n' '[{"id":"deployment-one","status":"deployment.succeeded","commitHash":"0123456789abcdef0123456789abcdef01234567","branchName":"release/v1.0.0"}]'
    else
      printf '%s\n' '[]'
    fi
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
  environment:update)
    if [[ "$*" == *"--database-id="* ]]; then
      if [[ ! -f "$state/foundation-failed" ]]; then
        touch "$state/foundation-failed"
        printf '%s\n' 'injected attachment failure' >&2
        exit 1
      fi
      touch "$state/attached"
    fi
    printf '%s\n' '{}'
    ;;
  instance:update|environment-secret:attach) printf '%s\n' '{}' ;;
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
  deployment:get) printf '%s\n' '{"id":"deployment-one","status":"deployment.succeeded","commitHash":"0123456789abcdef0123456789abcdef01234567","branchName":"release/v1.0.0"}' ;;
  command:run)
    printf '%s' "$*" >"$state/last-command"
    printf '%s\n' '{"command_id":"command-one","status":"command.running"}'
    ;;
  command:get)
    remote_command="$(cat "$state/last-command")"
    if [[ "$remote_command" == *"commissioning:status"* ]]; then
      if [[ -f "$state/commissioned" ]]; then
        printf '%s\n' '{"status":"command.success","exitCode":0,"output":"{\"operational\":true}"}'
      else
        printf '%s\n' '{"status":"command.failed","exitCode":1,"output":"{\"operational\":false,\"reason\":\"installation_incomplete\"}"}'
      fi
    elif [[ "$remote_command" == *"commission:preview"* ]]; then
      printf '%s\n' '{"status":"command.success","exitCode":0,"output":"{\"schema\":\"x-change.commissioning-preview.v1\",\"ready\":true,\"mutation\":false,\"preview_token\":\"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\",\"facts\":{\"provider_balance_minor\":450693,\"invitation_reserve_minor\":20000,\"remaining_reserve_minor\":430693}}"}'
    else
      [[ "$remote_command" == *"x-payout:bootstrap"* ]] && touch "$state/commissioned"
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

    $failed = new Process($arguments, $root, $environment);
    $failed->setTimeout(30);
    $failed->run();
    $failedLog = (string) file_get_contents($cloudLog);
    $failedState = json_decode((string) file_get_contents($statePath), true, flags: JSON_THROW_ON_ERROR);

    expect($failed->isSuccessful())->toBeFalse()
        ->and($failedState['checkpoints']['preflight'])->toBe('complete')
        ->and($failedState['checkpoints']['foundation'])->toBe('failed')
        ->and($failedState['resources'])->toBe([])
        ->and($failedLog)->toContain('database-cluster:create --name=example-payments-host-production')
        ->and($failedLog)->toContain('cache:create --name=example-payments-host-production');

    $first = new Process($arguments, $root, $environment);
    $first->setTimeout(30);
    $first->mustRun();
    $completedLog = (string) file_get_contents($cloudLog);
    $firstLog = substr($completedLog, strlen($failedLog));
    $firstEvidence = file_get_contents($evidencePath);
    $firstEvidencePayload = json_decode($firstEvidence, true, flags: JSON_THROW_ON_ERROR);
    $state = json_decode((string) file_get_contents($statePath), true, flags: JSON_THROW_ON_ERROR);

    expect($first->getOutput())->toContain('Continuous deployment complete')
        ->and($firstLog)->toContain('environment:update env-one --database-id=database-one --cache-id=cache-one')
        ->and($firstLog)->toContain('environment:update env-one --branch=release/v1.0.0')
        ->and($firstLog)->toContain('deployment:get deployment-one')
        ->and($firstLog)->not->toContain('deploy:monitor')
        ->and($firstLog)->toContain('x-change:commission:preview')
        ->and($firstLog)->toContain('--commissioning-preview-token=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        ->and($firstLog)->not->toContain(
            'application:create',
            'database-cluster:create',
            'database:create',
            'cache:create',
        )
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
            'commissioning_manifest', 'commissioning_preview', 'commissioning',
            'domain', 'strict_doctor', 'mcp_doctor',
        ])
        ->and($firstEvidencePayload['phase_evidence']['runtime']['changed_keys'])->not->toBeEmpty();

    expect($firstEvidencePayload['phase_evidence']['preflight']['results'])
        ->toContainEqual([
            'id' => 'release.source',
            'status' => 'ready',
            'reason' => 'The Laravel Cloud source branch resolves to the immutable source release.',
            'remediation' => 'None.',
            'evidence' => [
                'ref' => 'v1.0.0',
                'branch' => 'release/v1.0.0',
                'commit' => '0123456789abcdef0123456789abcdef01234567',
            ],
        ]);

    $interruptedState = $state;
    $interruptedState['checkpoints']['deploy'] = 'failed';
    $interruptedState['last_deployment_id'] = null;
    file_put_contents($statePath, json_encode(
        $interruptedState,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR,
    )."\n");
    $beforeRecoveryLog = (string) file_get_contents($cloudLog);
    $recovery = new Process($arguments, $root, $environment);
    $recovery->setTimeout(30);
    $recovery->mustRun();
    $recoveryLog = substr((string) file_get_contents($cloudLog), strlen($beforeRecoveryLog));
    $recoveredState = json_decode((string) file_get_contents($statePath), true, flags: JSON_THROW_ON_ERROR);

    expect($recoveryLog)
        ->toContain('deployment:list env-one')
        ->not->toContain('deploy app-one production')
        ->and($recoveredState['checkpoints']['deploy'])->toBe('complete')
        ->and($recoveredState['last_deployment_id'])->toBe('deployment-one');

    $second = new Process($arguments, $root, $environment);
    $second->setTimeout(30);
    $second->mustRun();
    $secondLog = substr((string) file_get_contents($cloudLog), strlen($completedLog));
    $secondEvidence = json_decode((string) file_get_contents($evidencePath), true, flags: JSON_THROW_ON_ERROR);

    expect($secondLog)
        ->toContain('application:list', 'command:run')
        ->not->toContain(
            'application:create',
            'database-cluster:create',
            'database:create',
            'cache:create',
            'instance:create',
            'environment:update',
            'environment:variables',
            'background-process:create',
            'deploy ',
            'domain:create',
        )->and($secondEvidence['phase_evidence'])->toHaveKeys([
            'deployment', 'commissioning_manifest', 'commissioning_preview',
            'commissioning', 'domain', 'strict_doctor', 'mcp_doctor',
        ]);
});
