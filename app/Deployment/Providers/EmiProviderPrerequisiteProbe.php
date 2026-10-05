<?php

namespace App\Deployment\Providers;

use App\Deployment\Preflight\PrerequisiteProbe;
use LBHurtado\EmiCore\Contracts\ProviderLivePreflightProbe;
use LBHurtado\EmiCore\Data\Providers\ProviderLivePreflightRequestData;

final readonly class EmiProviderPrerequisiteProbe implements PrerequisiteProbe
{
    /**
     * @param  array<string, mixed>  $profile
     * @param  iterable<ProviderLivePreflightProbe>  $probes
     */
    public function __construct(
        private array $profile,
        private iterable $probes,
    ) {}

    public function inspect(array $check): array
    {
        $id = $check['id'] ?? null;

        if (! is_string($id) || preg_match('/^providers\.([a-zA-Z0-9_-]+)\.(identity|capabilities)$/', $id, $matches) !== 1) {
            return [
                'status' => 'not_applicable',
                'reason' => 'This provider adapter does not own the requested prerequisite.',
                'remediation' => 'Route the prerequisite to its declared transport adapter.',
            ];
        }

        $connection = $this->connection($matches[1]);

        if ($connection === null) {
            return $this->blocked('The declared provider connection is unavailable.');
        }

        if ($matches[2] === 'capabilities') {
            return [
                'status' => 'ready',
                'reason' => 'The installed provider driver declares the required capability contract.',
                'remediation' => 'None.',
                'evidence' => [
                    'driver' => $connection['driver'],
                    'capabilities' => $connection['capabilities'],
                ],
            ];
        }

        $probe = $this->probe((string) $connection['driver']);

        if ($probe === null) {
            return $this->blocked('No installed live-readiness probe owns the declared provider driver.');
        }

        $accountNumber = $connection['runtime']['NETBANK_SOURCE_ACCOUNT_NUMBER']
            ?? $connection['runtime']['NETBANK_FUNDING_CORPORATE_ACCOUNT_NUMBER']
            ?? null;

        if (! is_string($accountNumber) || trim($accountNumber) === '') {
            return $this->blocked('The provider source account is not declared.');
        }

        $result = $probe->checkLiveReadiness(new ProviderLivePreflightRequestData(
            provider: (string) $connection['driver'],
            connectionReference: (string) $connection['name'],
            settlementResourceReference: $accountNumber,
            currency: (string) $connection['currency'],
        ));

        if (! $result->ready) {
            return [
                'status' => 'blocked',
                'reason' => 'The provider rejected the read-only live-readiness probe ['.($result->failureCode?->value ?? 'unknown').'].',
                'remediation' => 'Correct the provider identity, source account, credentials, endpoint, or capability before deployment.',
                'evidence' => [
                    'driver' => $connection['driver'],
                    'identity' => $connection['name'],
                    'fingerprint' => hash('sha256', $accountNumber),
                ],
            ];
        }

        return [
            'status' => 'ready',
            'reason' => 'The provider identity and source account passed a read-only live-readiness probe.',
            'remediation' => 'None.',
            'evidence' => [
                'driver' => $connection['driver'],
                'identity' => $connection['name'],
                'fingerprint' => hash('sha256', $accountNumber),
            ],
        ];
    }

    /** @return array<string, mixed>|null */
    private function connection(string $name): ?array
    {
        foreach ($this->profile['providers']['connections'] ?? [] as $connection) {
            if (is_array($connection) && ($connection['name'] ?? null) === $name) {
                return $connection;
            }
        }

        return null;
    }

    private function probe(string $driver): ?ProviderLivePreflightProbe
    {
        foreach ($this->probes as $probe) {
            if ($probe->providerCode() === $driver) {
                return $probe;
            }
        }

        return null;
    }

    /** @return array{status: string, reason: string, remediation: string} */
    private function blocked(string $reason): array
    {
        return [
            'status' => 'blocked',
            'reason' => $reason,
            'remediation' => 'Correct the provider configuration before applying the deployment.',
        ];
    }
}
