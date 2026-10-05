<?php

use App\Deployment\Evidence\SanitizedEvidenceWriter;

it('writes evidence matching the documented top-level schema without secret values', function (): void {
    $directory = sys_get_temp_dir().'/x-payout-evidence-'.bin2hex(random_bytes(4));
    $path = $directory.'/evidence.json';
    $secret = 'never-serialize-this-value';
    $compiled = [
        'profile_fingerprint' => str_repeat('a', 64),
        'required_secrets' => ['NETBANK_CLIENT_SECRET'],
        'commissioning_required_secrets' => [],
        'profile' => [
            'release' => ['repository' => '3neti/x-payout', 'ref' => 'v1.0.0'],
            'public' => ['canonical_url' => 'https://payout.example.com'],
        ],
    ];
    $state = [
        'adapter' => 'laravel-cloud',
        'resources' => ['application_id' => 'app-one'],
        'last_deployment_id' => 'deployment-one',
        'checkpoints' => ['preflight' => 'complete'],
    ];

    $evidence = (new SanitizedEvidenceWriter)->write(
        $path,
        $compiled,
        $state,
        'complete',
        ['NETBANK_CLIENT_SECRET' => $secret],
        ['preflight' => ['ready' => true]],
    );
    $schema = json_decode(
        (string) file_get_contents(dirname(__DIR__, 3).'/ops/deployment/schema/evidence.v1.schema.json'),
        true,
        flags: JSON_THROW_ON_ERROR,
    );

    expect(array_keys($evidence))->toBe($schema['required'])
        ->and((string) file_get_contents($path))->not->toContain($secret)
        ->and(fileperms($path) & 0777)->toBe(0600);
});

it('refuses to persist evidence containing a supplied secret value', function (): void {
    $directory = sys_get_temp_dir().'/x-payout-evidence-rejection-'.bin2hex(random_bytes(4));

    expect(fn () => (new SanitizedEvidenceWriter)->write(
        $directory.'/evidence.json',
        [
            'profile_fingerprint' => str_repeat('b', 64),
            'profile' => [
                'release' => ['repository' => '3neti/x-payout', 'ref' => 'v1.0.0'],
                'public' => ['canonical_url' => 'https://payout.example.com'],
            ],
        ],
        ['adapter' => 'laravel-cloud'],
        'failed',
        ['TOKEN' => 'secret-marker-for-rejection'],
        ['failure' => ['message' => 'secret-marker-for-rejection']],
    ))->toThrow(RuntimeException::class, 'Deployment evidence contains a secret value.');
});
