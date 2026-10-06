<?php

it('installs backend and frontend dependencies before running checks', function (): void {
    $workflow = file_get_contents(dirname(__DIR__, 2).'/.github/workflows/tests.yml');

    $composerInstall = strpos($workflow, 'composer install --no-interaction --prefer-dist --no-progress');
    $npmInstall = strpos($workflow, 'npm ci');
    $checks = strpos($workflow, 'composer ci:check');

    expect($composerInstall)->toBeInt()
        ->and($npmInstall)->toBeInt()
        ->and($checks)->toBeInt()
        ->and($composerInstall)->toBeLessThan($checks)
        ->and($npmInstall)->toBeLessThan($checks)
        ->and($workflow)->not->toContain('composer setup');
});

it('uses the accepted GitHub Action major versions in deployment', function (): void {
    $workflow = file_get_contents(dirname(__DIR__, 2).'/.github/workflows/deploy-x-payout.yml');

    expect($workflow)
        ->toContain('actions/checkout@v7')
        ->toContain('actions/upload-artifact@v7')
        ->toContain('actions/download-artifact@v8')
        ->not->toContain('actions/checkout@v6')
        ->not->toContain('actions/upload-artifact@v4')
        ->not->toContain('actions/download-artifact@v5');
});
