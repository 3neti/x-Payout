<?php

function secretRecoveryCustodyPath(string $path): string
{
    return dirname(__DIR__, 3).'/'.ltrim($path, '/');
}

function secretRecoveryCustodyAudit(): array
{
    return json_decode(
        (string) file_get_contents(secretRecoveryCustodyPath(
            'ops/deployment/contracts/secret-recovery-custody.json',
        )),
        true,
        flags: JSON_THROW_ON_ERROR,
    );
}

it('maps every production recovery secret identity to exactly one group', function (): void {
    preg_match_all(
        '/^([A-Z][A-Z0-9_]*)=/m',
        (string) file_get_contents(secretRecoveryCustodyPath('deployment.production.secrets.example')),
        $matches,
    );
    $mapped = array_merge(...array_column(secretRecoveryCustodyAudit()['groups'], 'secret_names'));
    $required = $matches[1];
    sort($mapped, SORT_STRING);
    sort($required, SORT_STRING);

    expect($mapped)->toHaveCount(count(array_unique($mapped)))
        ->and($mapped)->toHaveCount(secretRecoveryCustodyAudit()['required_secret_count'])
        ->and($mapped)->toBe($required);
});

it('requires an owner authority method and explicit disposition for every recovery group', function (): void {
    $audit = secretRecoveryCustodyAudit();

    expect($audit['values_inspected'])->toBeFalse()
        ->and($audit['runtime_custody'])->toMatchArray([
            'authority' => 'laravel-cloud-managed-secrets',
            'all_required_names_attached' => true,
            'plaintext_recoverable' => false,
        ]);

    foreach ($audit['groups'] as $group) {
        expect($group['owner_role'])->toBeString()->not->toBeEmpty()
            ->and($group['recovery_authority'])->toBeString()->not->toBeEmpty()
            ->and($group['recovery_method'])->toBeString()->not->toBeEmpty()
            ->and($group['status'])->toBeIn(['documented_recovery', 'blocked']);
    }
});

it('records verified Passport signing continuity without authorizing worksheet retirement', function (): void {
    $audit = secretRecoveryCustodyAudit();
    $blocked = array_values(array_filter(
        $audit['groups'],
        static fn (array $group): bool => $group['status'] === 'blocked',
    ));
    $passport = collect($audit['groups'])->firstWhere('id', 'passport-signing');

    expect($blocked)->toBe([])
        ->and($passport['secret_names'])->toBe(['PASSPORT_PRIVATE_KEY', 'PASSPORT_PUBLIC_KEY'])
        ->and($passport['continuity'])->toBe('verified_recovery_pair')
        ->and($passport['status'])->toBe('documented_recovery')
        ->and($audit['recovery_input'])->toMatchArray([
            'path' => 'ops/deployment/secrets.env',
            'authority' => 'owner-only-local-recovery-input',
            'mode' => '0600',
            'gitignored' => true,
            'required_secret_count' => 18,
            'passport_pair_verified' => true,
        ])
        ->and($audit['recovery_input']['passport_public_key_fingerprint_sha256'])
        ->toMatch('/^[a-f0-9]{64}$/')
        ->and($audit['blocking_findings'])->toBe([])
        ->and($audit['retirement_authorized'])->toBeFalse();
});

it('keeps the custody contract free of secret values and Cloud secret identifiers', function (): void {
    $contents = (string) file_get_contents(secretRecoveryCustodyPath(
        'ops/deployment/contracts/secret-recovery-custody.json',
    ));

    expect($contents)
        ->not->toContain('scrt-')
        ->not->toContain('-----BEGIN')
        ->not->toContain('base64:')
        ->not->toMatch('/[A-Za-z0-9+\/_=-]{80,}/');
});
