<?php

use App\Deployment\Profiles\InstanceProfileCompiler;
use Symfony\Component\Process\Process;

function portablePreCommissionExecutable(string $contents): string
{
    $path = tempnam(sys_get_temp_dir(), 'x-payout-precommission-bin-');
    file_put_contents($path, $contents);
    chmod($path, 0755);

    return $path;
}

it('verifies compiled artifacts through read-only transports and writes sanitized evidence', function (): void {
    $root = dirname(__DIR__, 4);
    $directory = sys_get_temp_dir().'/x-payout-precommission-'.bin2hex(random_bytes(4));
    mkdir($directory, 0700, true);
    $compiledDirectory = $directory.'/compiled';
    $profilePath = $root.'/ops/deployment/examples/instance.yaml';
    (new InstanceProfileCompiler)->compile($profilePath, null, $compiledDirectory);
    $compiled = json_decode(
        (string) file_get_contents($compiledDirectory.'/compiled-instance.json'),
        true,
        flags: JSON_THROW_ON_ERROR,
    );
    $required = json_decode(
        (string) file_get_contents($compiledDirectory.'/required-secrets.json'),
        true,
        flags: JSON_THROW_ON_ERROR,
    );
    $secretNames = array_values(array_unique(array_merge(
        $required['required'],
        $required['commissioning_required'],
    )));
    $attachedSecrets = array_map(
        static fn (string $name): array => ['id' => 'secret-'.strtolower($name), 'key' => $name],
        $secretNames,
    );
    $commit = str_repeat('b', 40);
    $cloudLog = $directory.'/cloud.log';
    $evidencePath = $directory.'/evidence.json';
    $git = portablePreCommissionExecutable(<<<BASH
#!/usr/bin/env bash
printf '%s\trefs/tags/v1.0.0\n' {$commit}
printf '%s\trefs/tags/v1.0.0^{}\n' {$commit}
printf '%s\trefs/heads/release/v1.0.0\n' {$commit}
BASH);
    $success = portablePreCommissionExecutable("#!/usr/bin/env bash\nexit 0\n");
    $fail = portablePreCommissionExecutable("#!/usr/bin/env bash\nexit 91\n");
    $cloud = portablePreCommissionExecutable(<<<'BASH'
#!/usr/bin/env bash
set -euo pipefail
operation="${1:-}"
shift || true
printf '%s %s\n' "$operation" "$*" >>"${FAKE_CLOUD_LOG}"
case "$operation" in
  application:list) printf '%s\n' '[{"id":"app-one","name":"Example PayOut","repositoryFullName":"example/x-payout"}]' ;;
  environment:list) printf '%s\n' '[{"id":"env-one","name":"production","databaseSchemaId":"database-one","cacheId":"cache-one"}]' ;;
  instance:list) printf '%s\n' '[{"id":"instance-one","isDefault":true}]' ;;
  database-cluster:list) printf '%s\n' '[{"id":"cluster-one","schemas":[{"id":"database-one"}]}]' ;;
  cache:list) printf '%s\n' '[{"id":"cache-one"}]' ;;
  background-process:list) printf '%s\n' '[{"id":"worker-one","command":"php artisan queue:work"}]' ;;
  domain:list) printf '%s\n' '[{"id":"domain-one","name":"payout.example.com"}]' ;;
  environment-secret:list) printf '%s\n' "${FAKE_ATTACHED_SECRETS}" ;;
  deployment:list) printf '%s\n' "${FAKE_DEPLOYMENTS}" ;;
  command:run) printf '%s\n' '{"command_id":"command-one","status":"command.running"}' ;;
  command:get) printf '%s\n' '{"status":"command.success","exitCode":0,"output":"{\"success\":true,\"passed\":27,\"failed\":0}"}' ;;
  *) printf 'unexpected mutating or unknown Cloud operation: %s\n' "$operation" >&2; exit 92 ;;
esac
BASH);
    $environment = [
        'CLOUD_BIN' => $cloud,
        'GIT_BIN' => $git,
        'DOCTL_BIN' => $fail,
        'AWS_BIN' => $fail,
        'CURL_BIN' => $success,
        'FAKE_CLOUD_LOG' => $cloudLog,
        'FAKE_ATTACHED_SECRETS' => json_encode($attachedSecrets, JSON_THROW_ON_ERROR),
        'FAKE_DEPLOYMENTS' => json_encode([[
            'id' => 'deployment-one',
            'status' => 'deployment.succeeded',
            'commitHash' => $commit,
            'branchName' => 'release/v1.0.0',
        ]], JSON_THROW_ON_ERROR),
    ];
    $process = new Process([
        PHP_BINARY,
        $root.'/bin/x-payout-deploy',
        'precommission',
        '--compiled='.$compiledDirectory,
        '--evidence='.$evidencePath,
        '--adapter=laravel-cloud',
    ], $root, $environment);
    $process->setTimeout(30);
    $process->mustRun();

    $cloudOperations = (string) file_get_contents($cloudLog);
    $evidence = json_decode(
        (string) file_get_contents($evidencePath),
        true,
        flags: JSON_THROW_ON_ERROR,
    );

    expect($process->getOutput())->toContain('Portable pre-commission verification complete.')
        ->and($cloudOperations)
        ->toContain('deployment:list env-one', 'x-change:doctor --pre-commission --strict --json')
        ->not->toContain(
            'application:create',
            'environment:update',
            'environment:variables',
            'secret:create',
            'secret:update',
            'environment-secret:attach',
            'deploy ',
            'domain:create',
            'domain:verify',
            'commission:preview',
            'x-payout:bootstrap',
        )
        ->and($evidence['status'])->toBe('precommission_ready')
        ->and($evidence['profile_fingerprint'])->toBe($compiled['profile_fingerprint'])
        ->and($evidence['last_deployment_id'])->toBe('deployment-one')
        ->and($evidence['checkpoints'])->toBe([
            'preflight' => 'complete',
            'deploy' => 'complete',
            'pre-commission' => 'complete',
        ])->and($evidence['phase_evidence'])->toHaveKeys([
            'preflight',
            'deployment',
            'pre_commission',
        ])
        ->and(fileperms($evidencePath) & 0777)->toBe(0600);
});

it('rejects mutation authority and generated-state options', function (string $argument, string $message): void {
    $root = dirname(__DIR__, 4);
    $process = new Process([
        PHP_BINARY,
        $root.'/bin/x-payout-deploy',
        'precommission',
        '--compiled=/tmp/not-read-because-the-command-fails-first',
        '--adapter=laravel-cloud',
        $argument,
    ], $root);
    $process->run();

    expect($process->isSuccessful())->toBeFalse()
        ->and($process->getErrorOutput())->toContain($message);
})->with([
    'apply authority' => ['--apply', 'does not accept mutation authority flags'],
    'generated state' => ['--state=/tmp/forbidden-state.json', 'does not support options: state'],
]);
