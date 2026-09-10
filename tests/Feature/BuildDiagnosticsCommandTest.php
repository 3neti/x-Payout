<?php

use App\Console\Commands\BuildDiagnostics;

it('prints safe build diagnostics without exposing secret values', function (): void {
    config()->set('app.key', 'base64:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=');
    config()->set('x-change.deployment.profile', 'netbank');

    $this->artisan('x-payout:build-diagnostics', [
        '--skip-wayfinder' => true,
    ])
        ->expectsOutputToContain('x-PayOut build diagnostics')
        ->expectsOutputToContain('PHP:')
        ->expectsOutputToContain('Node:')
        ->expectsOutputToContain('npm:')
        ->expectsOutputToContain('APP_ENV:')
        ->expectsOutputToContain('APP_KEY: present')
        ->expectsOutputToContain('XCHANGE_DEPLOYMENT_PROFILE: netbank')
        ->expectsOutputToContain('3neti/x-change:')
        ->expectsOutputToContain('vendor/bin:')
        ->expectsOutputToContain('node_modules/.bin/vite:')
        ->doesntExpectOutputToContain('base64:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=')
        ->assertSuccessful();
});

it('runs Wayfinder as the loud pre-build diagnostic gate', function (): void {
    $source = file_get_contents((new ReflectionClass(BuildDiagnostics::class))->getFileName());

    expect($source)
        ->toContain('wayfinder:generate')
        ->toContain('--with-form')
        ->toContain('-vvv')
        ->toContain('return $successful ? self::SUCCESS : self::FAILURE;');
});

it('pins the cloud frontend build runtime to the supported node line', function (): void {
    $package = json_decode(
        file_get_contents(base_path('package.json')),
        true,
        512,
        JSON_THROW_ON_ERROR,
    );

    expect(data_get($package, 'engines.node'))->toBe('22.x')
        ->and(data_get($package, 'engines.npm'))->toBe('10.x')
        ->and(trim(file_get_contents(base_path('.node-version'))))->toBe('22');
});

it('uses plain Vite for the production asset build path', function (): void {
    $package = json_decode(
        file_get_contents(base_path('package.json')),
        true,
        512,
        JSON_THROW_ON_ERROR,
    );
    $viteConfig = file_get_contents(base_path('vite.config.ts'));

    expect(data_get($package, 'scripts.build'))->toBe('vite build')
        ->and(data_get($package, 'scripts.build:ssr'))->toBe('vite build && vite build --ssr')
        ->and($viteConfig)->toContain("import { defineConfig } from 'vite';")
        ->not->toContain("import { defineConfig, lazyPlugins } from 'vite-plus';")
        ->not->toContain('lazyPlugins(() =>');
});

it('ships a production Vite manifest for Cloud deployments', function (): void {
    $manifestPath = base_path('public/build/manifest.json');

    expect($manifestPath)->toBeFile();

    $manifest = json_decode(
        file_get_contents($manifestPath),
        true,
        512,
        JSON_THROW_ON_ERROR,
    );

    expect($manifest)->toHaveKey('resources/js/app.ts')
        ->and($manifest)->toHaveKey('resources/css/app.css');
});
