<?php

namespace App\Deployment\Evidence;

use DateTimeImmutable;
use DateTimeInterface;
use DateTimeZone;
use JsonException;
use RuntimeException;

final class SanitizedEvidenceWriter
{
    /**
     * @param  array<string, mixed>  $compiled
     * @param  array<string, mixed>  $state
     * @param  array<string, string>  $secretValues
     * @param  array<string, mixed>  $phaseEvidence
     * @return array<string, mixed>
     */
    public function write(
        string $path,
        array $compiled,
        array $state,
        string $status,
        array $secretValues = [],
        array $phaseEvidence = [],
    ): array {
        $profile = $compiled['profile'] ?? [];
        $phaseEvidence = $this->mergeExistingPhaseEvidence(
            $path,
            (string) ($compiled['profile_fingerprint'] ?? ''),
            $phaseEvidence,
        );
        $secretNames = array_values(array_unique(array_merge(
            $compiled['required_secrets'] ?? [],
            $compiled['commissioning_required_secrets'] ?? [],
        )));
        sort($secretNames, SORT_STRING);

        $evidence = [
            'schema' => 'x-payout.deployment-evidence.v1',
            'profile_fingerprint' => $compiled['profile_fingerprint'] ?? null,
            'adapter' => $state['adapter'] ?? null,
            'status' => $status,
            'release' => [
                'repository' => $profile['release']['repository'] ?? null,
                'ref' => $profile['release']['ref'] ?? null,
            ],
            'canonical_host' => parse_url((string) ($profile['public']['canonical_url'] ?? ''), PHP_URL_HOST),
            'resources' => $state['resources'] ?? [],
            'managed_secret_names' => $secretNames,
            'last_deployment_id' => $state['last_deployment_id'] ?? null,
            'checkpoints' => $state['checkpoints'] ?? [],
            'phase_evidence' => $phaseEvidence,
            'generated_at' => (new DateTimeImmutable('now', new DateTimeZone('UTC')))
                ->format(DateTimeInterface::ATOM),
        ];

        try {
            $encoded = json_encode($evidence, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR)."\n";
        } catch (JsonException $exception) {
            throw new RuntimeException('Deployment evidence could not be encoded.', previous: $exception);
        }

        $this->assertSanitized($encoded, $secretValues);
        $directory = dirname($path);

        if (! is_dir($directory) && ! mkdir($directory, 0700, true) && ! is_dir($directory)) {
            throw new RuntimeException("Deployment evidence directory [{$directory}] could not be created.");
        }

        $temporary = tempnam($directory, '.x-payout-evidence-');

        if ($temporary === false || file_put_contents($temporary, $encoded, LOCK_EX) === false) {
            throw new RuntimeException('Deployment evidence could not be written.');
        }

        chmod($temporary, 0600);

        if (! rename($temporary, $path)) {
            @unlink($temporary);

            throw new RuntimeException("Deployment evidence [{$path}] could not be finalized.");
        }

        chmod($path, 0600);

        return $evidence;
    }

    /**
     * @param  array<string, mixed>  $phaseEvidence
     * @return array<string, mixed>
     */
    private function mergeExistingPhaseEvidence(
        string $path,
        string $profileFingerprint,
        array $phaseEvidence,
    ): array {
        if (! is_file($path) || ! is_readable($path)) {
            return $phaseEvidence;
        }

        try {
            $existing = json_decode((string) file_get_contents($path), true, flags: JSON_THROW_ON_ERROR);
        } catch (JsonException) {
            return $phaseEvidence;
        }

        if (! is_array($existing)
            || ($existing['profile_fingerprint'] ?? null) !== $profileFingerprint
            || ! is_array($existing['phase_evidence'] ?? null)) {
            return $phaseEvidence;
        }

        return array_merge($existing['phase_evidence'], $phaseEvidence);
    }

    /** @param array<string, string> $secretValues */
    private function assertSanitized(string $encoded, array $secretValues): void
    {
        foreach ($secretValues as $value) {
            if ($value !== '' && str_contains($encoded, $value)) {
                throw new RuntimeException('Deployment evidence contains a secret value.');
            }
        }
    }
}
