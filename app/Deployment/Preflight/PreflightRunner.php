<?php

namespace App\Deployment\Preflight;

use DateTimeImmutable;
use DateTimeInterface;
use DateTimeZone;

final class PreflightRunner
{
    private const STATUSES = [
        'ready',
        'not_applicable',
        'needs_attention',
        'blocked',
    ];

    private const EVIDENCE_KEYS = [
        'adapter',
        'authority',
        'bucket',
        'capabilities',
        'contract_hash',
        'contract_version',
        'driver',
        'endpoint_host',
        'fingerprint',
        'identity',
        'name',
        'region',
        'release',
        'repository',
        'resource_id',
        'zone',
    ];

    public function __construct(private readonly PrerequisiteProbe $probe) {}

    /**
     * @param  array<string, mixed>  $plan
     * @return array<string, mixed>
     */
    public function run(array $plan, ?DateTimeInterface $checkedAt = null): array
    {
        if (($plan['schema'] ?? null) !== 'x-payout.preflight-plan.v1'
            || ! is_array($plan['checks'] ?? null)
            || ! is_string($plan['profile_fingerprint'] ?? null)) {
            throw new PreflightException('Preflight plan is invalid.');
        }

        $results = [];

        foreach ($plan['checks'] as $check) {
            if (! is_array($check) || ! is_string($check['id'] ?? null)) {
                throw new PreflightException('Preflight plan contains an invalid check.');
            }

            $inspection = $this->probe->inspect($check);
            $results[] = $this->normalizeResult($check['id'], $inspection);
        }

        $blocking = array_values(array_filter(
            $results,
            fn (array $result): bool => in_array($result['status'], ['needs_attention', 'blocked'], true),
        ));

        return [
            'schema' => 'x-payout.preflight-report.v1',
            'profile_fingerprint' => $plan['profile_fingerprint'],
            'checked_at' => ($checkedAt ?? new DateTimeImmutable('now', new DateTimeZone('UTC')))
                ->setTimezone(new DateTimeZone('UTC'))
                ->format(DateTimeInterface::ATOM),
            'ready' => $blocking === [],
            'summary' => [
                'total' => count($results),
                'ready' => count(array_filter($results, fn (array $result): bool => $result['status'] === 'ready')),
                'not_applicable' => count(array_filter($results, fn (array $result): bool => $result['status'] === 'not_applicable')),
                'needs_attention' => count(array_filter($results, fn (array $result): bool => $result['status'] === 'needs_attention')),
                'blocked' => count(array_filter($results, fn (array $result): bool => $result['status'] === 'blocked')),
            ],
            'results' => $results,
        ];
    }

    /** @param array<string, mixed> $report */
    public function assertReady(array $report): void
    {
        if (($report['schema'] ?? null) !== 'x-payout.preflight-report.v1'
            || ($report['ready'] ?? null) !== true) {
            $blockedIds = [];

            foreach ($report['results'] ?? [] as $result) {
                if (is_array($result)
                    && in_array($result['status'] ?? null, ['needs_attention', 'blocked'], true)) {
                    $blockedIds[] = (string) ($result['id'] ?? 'unknown');
                }
            }

            throw new PreflightException(
                'Preflight failed before mutation'.($blockedIds === [] ? '.' : ': '.implode(', ', $blockedIds).'.'),
            );
        }
    }

    /**
     * @param  array<string, mixed>  $inspection
     * @return array<string, mixed>
     */
    private function normalizeResult(string $id, array $inspection): array
    {
        $status = $inspection['status'] ?? null;
        $reason = $inspection['reason'] ?? null;
        $remediation = $inspection['remediation'] ?? null;
        $evidence = $inspection['evidence'] ?? [];

        if (! is_string($status) || ! in_array($status, self::STATUSES, true)) {
            throw new PreflightException("Preflight probe returned an invalid status for [{$id}].");
        }

        if (! is_string($reason) || trim($reason) === ''
            || ! is_string($remediation) || trim($remediation) === '') {
            throw new PreflightException("Preflight probe returned incomplete guidance for [{$id}].");
        }

        if (! is_array($evidence)) {
            throw new PreflightException("Preflight probe returned invalid evidence for [{$id}].");
        }

        $unknownEvidence = array_values(array_diff(array_keys($evidence), self::EVIDENCE_KEYS));

        if ($unknownEvidence !== []) {
            throw new PreflightException(
                "Preflight probe returned non-sanitized evidence for [{$id}]: ".implode(', ', $unknownEvidence).'.',
            );
        }

        return [
            'id' => $id,
            'status' => $status,
            'reason' => $reason,
            'remediation' => $remediation,
            'evidence' => $evidence,
        ];
    }
}
