<?php

use App\Deployment\Preflight\PreflightException;
use App\Deployment\Preflight\PreflightRunner;
use App\Deployment\Preflight\PrerequisiteProbe;

function preflightPlanWith(string ...$ids): array
{
    return [
        'schema' => 'x-payout.preflight-plan.v1',
        'profile_fingerprint' => str_repeat('a', 64),
        'checks' => array_map(fn (string $id): array => ['id' => $id], $ids),
    ];
}

it('reports all ready checks without exposing transport internals', function (): void {
    $probe = new class implements PrerequisiteProbe
    {
        public function inspect(array $check): array
        {
            return [
                'status' => 'ready',
                'reason' => 'Verified by a read-only fake transport.',
                'remediation' => 'None.',
                'evidence' => ['resource_id' => 'fake-resource', 'capabilities' => ['read']],
            ];
        }
    };
    $runner = new PreflightRunner($probe);
    $report = $runner->run(
        preflightPlanWith('release.source', 'public.dns'),
        new DateTimeImmutable('2026-10-05T00:00:00+00:00'),
    );

    $runner->assertReady($report);

    expect($report['ready'])->toBeTrue()
        ->and($report['summary'])->toBe([
            'total' => 2,
            'ready' => 2,
            'not_applicable' => 0,
            'needs_attention' => 0,
            'blocked' => 0,
        ])->and($report['checked_at'])->toBe('2026-10-05T00:00:00+00:00');
});

it('fails closed before mutation when a fake dependency needs attention', function (): void {
    $mutations = 0;
    $probe = new class implements PrerequisiteProbe
    {
        public function inspect(array $check): array
        {
            return [
                'status' => $check['id'] === 'storage.evidence' ? 'needs_attention' : 'ready',
                'reason' => 'Fake prerequisite disposition.',
                'remediation' => 'Correct the fake prerequisite.',
            ];
        }
    };
    $runner = new PreflightRunner($probe);
    $report = $runner->run(preflightPlanWith('release.source', 'storage.evidence'));

    try {
        $runner->assertReady($report);
        $mutations++;
    } catch (PreflightException $exception) {
        expect($exception->getMessage())->toContain('storage.evidence');
    }

    expect($report['ready'])->toBeFalse()
        ->and($report['summary']['needs_attention'])->toBe(1)
        ->and($mutations)->toBe(0);
});

it('rejects evidence fields that could leak credentials or provider payloads', function (): void {
    $probe = new class implements PrerequisiteProbe
    {
        public function inspect(array $check): array
        {
            return [
                'status' => 'ready',
                'reason' => 'Unsafe fake response.',
                'remediation' => 'None.',
                'evidence' => ['access_token' => 'must-not-escape'],
            ];
        }
    };

    expect(fn () => (new PreflightRunner($probe))->run(preflightPlanWith('provider.identity')))
        ->toThrow(PreflightException::class, 'non-sanitized evidence');
});
