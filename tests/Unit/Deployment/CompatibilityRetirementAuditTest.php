<?php

use Symfony\Component\Process\Process;

function compatibilityRetirementPath(string $path): string
{
    return dirname(__DIR__, 3).'/'.ltrim($path, '/');
}

function compatibilityRetirementAudit(): array
{
    return json_decode(
        (string) file_get_contents(compatibilityRetirementPath(
            'ops/deployment/contracts/compatibility-retirement-audit.json',
        )),
        true,
        flags: JSON_THROW_ON_ERROR,
    );
}

it('records a fail-closed retirement decision with an exact accepted release', function (): void {
    $audit = compatibilityRetirementAudit();

    expect($audit['schema'])->toBe('x-payout.compatibility-retirement-audit.v1')
        ->and($audit['decision'])->toBe('deprecation_release_accepted_retirement_pending_recovery_custody')
        ->and($audit['accepted_release'])->toBe([
            'x_payout' => 'v1.0.0-beta.72',
            'commit' => '43d9c2cfd5cf2266c1d7bac44a4c470a7752f3ce',
            'deployment' => 'depl-a2ea0417-e779-4794-be60-1ccb93e4cda2',
        ])
        ->and($audit['completed_deprecation_steps'])->toHaveCount(8)
        ->and($audit['required_before_removal'])->toHaveCount(2);
});

it('classifies every executable or workflow dependency on the legacy worksheets', function (): void {
    $root = compatibilityRetirementPath('');
    $tokens = [
        'deployment.production.local',
        'deployment.production.secrets.local',
        'PAYOUT_PLATFORM_CONTROL_ENV',
        'deploy-production-cleanroom.sh',
        '--control=',
        'upsert_local_state',
    ];
    $matches = [];

    foreach (['bin', 'scripts', '.github/workflows'] as $directory) {
        $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator(
            $root.$directory,
            FilesystemIterator::SKIP_DOTS,
        ));

        foreach ($iterator as $file) {
            if (! $file->isFile()) {
                continue;
            }

            $contents = (string) file_get_contents($file->getPathname());

            if (array_any($tokens, static fn (string $token): bool => str_contains($contents, $token))) {
                $matches[] = ltrim(str_replace($root, '', $file->getPathname()), '/');
            }
        }
    }

    $classified = array_column(compatibilityRetirementAudit()['active_production_dependencies'], 'path');
    sort($matches);
    sort($classified);

    expect(array_values(array_unique($matches)))->toBe($classified);
});

it('keeps every retirement blocker explicit and points to its replacement', function (): void {
    $dependencies = compatibilityRetirementAudit()['active_production_dependencies'];

    expect($dependencies)->toHaveCount(1);

    foreach ($dependencies as $dependency) {
        expect(compatibilityRetirementPath($dependency['path']))->toBeFile()
            ->and($dependency['blocks_retirement'])->toBeTrue()
            ->and($dependency['replacement'])->toBeString()->not->toBeEmpty();
    }
});

it('keeps the portable controller independent of compatibility worksheets', function (): void {
    $controller = (string) file_get_contents(compatibilityRetirementPath('bin/x-payout-deploy'));

    expect($controller)
        ->not->toContain('deployment.production.local')
        ->not->toContain('deployment.production.secrets.local')
        ->not->toContain('PAYOUT_PLATFORM_CONTROL_ENV')
        ->not->toContain('deploy-production-cleanroom.sh')
        ->not->toContain('upsert_local_state');
});

it('fails closed before reading a worksheet without current-run rollback authority', function (): void {
    $process = new Process([
        'bash',
        compatibilityRetirementPath('scripts/deploy-production-cleanroom.sh'),
        'plan',
        '--render-only',
        '--control=/does/not/exist',
    ]);
    $process->run();

    expect($process->getExitCode())->toBe(77)
        ->and($process->getErrorOutput())
        ->toContain('rollback-only')
        ->toContain('--compatibility-rollback')
        ->toContain('bin/x-payout-deploy continuous')
        ->not->toContain('Missing /does/not/exist');
});

it('retains one explicitly authorized rollback path during the deprecation release', function (): void {
    $process = new Process([
        'bash',
        compatibilityRetirementPath('scripts/deploy-production-cleanroom.sh'),
        'plan',
        '--compatibility-rollback',
        '--render-only',
        '--control='.compatibilityRetirementPath('deployment.production.example'),
    ]);
    $process->mustRun();

    expect($process->getOutput())
        ->toContain('X-PAYOUT CLEANROOM DEPLOYMENT')
        ->toContain('Input mode:       legacy worksheet');
});
