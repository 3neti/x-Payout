<?php

declare(strict_types=1);

use Symfony\Component\Process\Process;

it('commissions the payout release against its locked published packages', function (): void {
    $process = new Process(
        [PHP_BINARY, 'artisan', 'x-deploy:report', '--json', '--no-interaction'],
        dirname(__DIR__, 2),
        [
            'XDEPLOY_COMPOSER_LOCK' => 'composer.local.lock',
            'XDEPLOY_REGISTRY_ENABLED' => 'false',
        ],
    );
    $process->mustRun();
    $report = json_decode($process->getOutput(), true, flags: JSON_THROW_ON_ERROR);
    $packages = collect($report['manifest']['packages'])->pluck('version', 'name');

    expect($report['manifest']['schema'])->toBe('x-deploy.manifest.v1')
        ->and($report['manifest']['composer_lock_hash'])->not->toBeEmpty()
        ->and($packages->get('3neti/x-change'))->toBe('v1.5.1')
        ->and($packages->get('3neti/x-deploy'))->toBe('v1.0.0')
        ->and($report['commissioning'])->toBe(['passed' => true, 'issues' => []]);
});
