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
        ->expectsOutputToContain('node_modules/.bin/vp:')
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
