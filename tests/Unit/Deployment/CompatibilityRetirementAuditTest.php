<?php

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

it('records the authorized implementation pending exact release acceptance', function (): void {
    $audit = compatibilityRetirementAudit();

    expect($audit['schema'])->toBe('x-payout.compatibility-retirement-audit.v1')
        ->and($audit['decision'])->toBe('retirement_implementation_complete_pending_release_acceptance')
        ->and($audit['accepted_release'])->toBe([
            'x_payout' => 'v1.0.0-beta.73',
            'commit' => 'e073e616da65036fbf94e4bb7ee7eea8521088d0',
            'deployment' => 'depl-a2ea2d61-0acc-40c8-8cd7-06c09efa48c6',
        ])
        ->and($audit['active_production_dependencies'])->toBe([])
        ->and($audit['required_before_private_input_removal'])->toHaveCount(1);
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

    sort($matches);

    expect(array_values(array_unique($matches)))->toBe([]);
});

it('removes every classified compatibility artifact while preserving evidence', function (): void {
    $audit = compatibilityRetirementAudit();

    foreach ($audit['retired_tracked_artifacts'] as $path) {
        expect(compatibilityRetirementPath($path))->not->toBeFile();
    }

    foreach ($audit['historical_evidence_to_preserve'] as $path) {
        expect(compatibilityRetirementPath($path))->toBeFile();
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

it('retains the portable compiler and deployment controller coverage', function (): void {
    expect(compatibilityRetirementPath('tests/Unit/InstanceProfileCompilerTest.php'))->toBeFile()
        ->and(compatibilityRetirementPath('tests/Unit/Deployment/ContinuousEntryPointParityTest.php'))->toBeFile()
        ->and(compatibilityRetirementPath('tests/Unit/Deployment/Verification/PortablePreCommissionEntryPointTest.php'))->toBeFile();
});
