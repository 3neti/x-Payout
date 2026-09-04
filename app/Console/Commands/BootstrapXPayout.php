<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

#[Signature('x-payout:bootstrap {--manifest=commissioning/default.yaml : YAML manifest path, URL, or x-change:// URI} {--skip-build : Skip npm install and npm run build} {--skip-verify : Skip final environment and route-list verification}')]
#[Description('Bootstrap a fresh x-PayOut application from a commissioning manifest.')]
class BootstrapXPayout extends Command
{
    public function handle(): int
    {
        return $this->call('x-change:bootstrap', [
            '--manifest' => (string) $this->option('manifest'),
            '--skip-build' => (bool) $this->option('skip-build'),
            '--skip-verify' => (bool) $this->option('skip-verify'),
        ]);
    }
}
