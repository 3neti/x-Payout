<?php

declare(strict_types=1);

function deploymentDocumentationPath(string $path): string
{
    return dirname(__DIR__, 3).'/'.ltrim($path, '/');
}

it('documents the release-owned two-input deployment contract and authority gates', function (): void {
    $contents = (string) file_get_contents(deploymentDocumentationPath('DEPLOY.md'));

    expect($contents)
        ->toContain(
            'bin/x-payout-deploy',
            'ops/deployment/instances/payout.disburse.cash.yaml',
            '/Users/rli/.config/x-payout/payout.disburse.cash.secrets.env',
            'bin/x-payout-profile validate',
            'bin/x-payout-profile compile',
            'bin/x-payout-profile verify',
            'bin/x-payout-deploy continuous',
            'bin/x-payout-deploy precommission',
            '--adapter=laravel-cloud',
            '--apply',
            '--commission',
            '--activate-domain',
            '--rotate-secrets=PASSPORT_PRIVATE_KEY,PASSPORT_PUBLIC_KEY',
            'composer create-project 3neti/x-payout',
            'composer x-payout:bootstrap',
            'mutation-free rerun',
        );
});

it('documents every credential name from the canonical owner input template', function (): void {
    $contents = (string) file_get_contents(deploymentDocumentationPath('DEPLOY.md'));
    $template = (string) file_get_contents(deploymentDocumentationPath(
        'ops/deployment/examples/secrets.env.example',
    ));
    $secretNames = collect(preg_split('/\R/', $template) ?: [])
        ->map(static fn (string $line): string => trim($line))
        ->filter(static fn (string $line): bool => preg_match('/^[A-Z][A-Z0-9_]*=/', $line) === 1)
        ->map(static fn (string $line): string => (string) strstr($line, '=', true))
        ->values();

    expect($secretNames)->not->toBeEmpty();

    foreach ($secretNames as $secretName) {
        expect($contents)->toContain($secretName.'=');
    }
});

it('keeps the runbook free of private key material and Cloud secret identifiers', function (): void {
    $contents = (string) file_get_contents(deploymentDocumentationPath('DEPLOY.md'));

    expect($contents)
        ->not->toContain('-----BEGIN')
        ->not->toContain('scrt-')
        ->not->toMatch('/[A-Za-z0-9+\/_=-]{120,}/');
});
