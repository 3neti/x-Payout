<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

#[Signature('x-payout:bootstrap {--manifest=commissioning/default.yaml : YAML manifest path, URL, or x-change:// URI} {--commissioning-preview-token= : Exact token emitted by x-change:commission:preview} {--force : Force database migrations when bootstrapping in production} {--skip-build : Skip npm install and npm run build} {--skip-verify : Skip final environment and route-list verification}')]
#[Description('Bootstrap a fresh x-PayOut application from a commissioning manifest.')]
class BootstrapXPayout extends Command
{
    public function handle(): int
    {
        $manifest = $this->option('manifest');
        $previewToken = $this->option('commissioning-preview-token');

        if (! is_string($manifest) || ($previewToken !== null && ! is_string($previewToken))) {
            $this->error('Bootstrap options must be strings.');

            return self::FAILURE;
        }

        return $this->call('x-change:bootstrap', [
            '--manifest' => $manifest,
            '--commissioning-preview-token' => $previewToken ?? '',
            '--force' => (bool) $this->option('force'),
            '--skip-build' => (bool) $this->option('skip-build'),
            '--skip-verify' => (bool) $this->option('skip-verify'),
        ]);
    }
}
