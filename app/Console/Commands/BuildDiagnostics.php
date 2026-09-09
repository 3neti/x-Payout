<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Composer\InstalledVersions;
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use OutOfBoundsException;
use Symfony\Component\Process\Process;

#[Signature('x-payout:build-diagnostics {--skip-wayfinder : Print safe environment diagnostics without running Wayfinder}')]
#[Description('Print safe x-PayOut build diagnostics and run Wayfinder before the frontend build.')]
class BuildDiagnostics extends Command
{
    public function handle(): int
    {
        $this->components->info('x-PayOut build diagnostics');

        $this->report('PHP', PHP_VERSION);
        $this->report('Node', $this->version(['node', '--version']));
        $this->report('npm', $this->version(['npm', '--version']));
        $this->report('APP_ENV', app()->environment());
        $this->report('APP_KEY', filled((string) config('app.key')) ? 'present' : 'missing');
        $this->report('XCHANGE_DEPLOYMENT_PROFILE', (string) config('x-change.deployment.profile', 'missing'));
        $this->report('3neti/x-change', $this->packageVersion('3neti/x-change'));
        $this->report('vendor/bin', is_dir(base_path('vendor/bin')) ? 'present' : 'missing');
        $this->report('node_modules/.bin/vp', is_file(base_path('node_modules/.bin/vp')) ? 'present' : 'missing');

        if ((bool) $this->option('skip-wayfinder')) {
            return self::SUCCESS;
        }

        return $this->runWayfinder();
    }

    /**
     * @param  list<string>  $command
     */
    private function version(array $command): string
    {
        $process = new Process($command, base_path());
        $process->run();

        if (! $process->isSuccessful()) {
            return 'unavailable';
        }

        return trim($process->getOutput()) ?: 'unavailable';
    }

    private function packageVersion(string $package): string
    {
        try {
            return InstalledVersions::getPrettyVersion($package) ?? 'unknown';
        } catch (OutOfBoundsException) {
            return 'not installed';
        }
    }

    private function report(string $label, string $value): void
    {
        $this->line($label.': '.$value);
    }

    private function runWayfinder(): int
    {
        $successful = false;

        $this->components->task('php artisan wayfinder:generate --with-form -vvv', function () use (&$successful): void {
            $process = new Process([
                PHP_BINARY,
                'artisan',
                'wayfinder:generate',
                '--with-form',
                '-vvv',
            ], base_path());
            $process->setTimeout(null);
            $process->run(function (string $_type, string $buffer): void {
                $this->output->write($buffer);
            });

            $successful = $process->isSuccessful();
        });

        return $successful ? self::SUCCESS : self::FAILURE;
    }
}
