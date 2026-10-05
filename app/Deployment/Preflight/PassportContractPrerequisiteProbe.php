<?php

namespace App\Deployment\Preflight;

final readonly class PassportContractPrerequisiteProbe implements PrerequisiteProbe
{
    private const SECRET_REFERENCES = [
        'PASSPORT_PRIVATE_KEY',
        'PASSPORT_PUBLIC_KEY',
    ];

    private const CONTRACT_REFERENCES = [
        'XMCP_EXPECTED_PARTNER_CONTRACT_SHA256',
        'XMCP_EXPECTED_PARTNER_CONTRACT_VERSION',
    ];

    /**
     * @param  array<string, mixed>  $runtime
     * @param  list<string>  $availableSecretNames
     */
    public function __construct(
        private array $runtime,
        private array $availableSecretNames,
    ) {}

    public function inspect(array $check): array
    {
        if (($check['transport'] ?? null) !== 'oauth') {
            return [
                'status' => 'not_applicable',
                'reason' => 'This Passport contract adapter does not own the prerequisite.',
                'remediation' => 'Route the check to its declared transport adapter.',
            ];
        }

        $references = array_values(array_filter(
            $check['references'] ?? [],
            static fn (mixed $reference): bool => is_string($reference) && $reference !== '',
        ));
        $missingReferences = array_values(array_diff(
            [...self::SECRET_REFERENCES, ...self::CONTRACT_REFERENCES],
            $references,
        ));
        $missingSecrets = array_values(array_diff(self::SECRET_REFERENCES, $this->availableSecretNames));
        $contractVersion = $this->runtime['XMCP_EXPECTED_PARTNER_CONTRACT_VERSION'] ?? null;
        $contractHash = $this->runtime['XMCP_EXPECTED_PARTNER_CONTRACT_SHA256'] ?? null;

        if ($missingReferences !== [] || $missingSecrets !== []
            || ! is_string($contractVersion) || trim($contractVersion) === ''
            || ! is_string($contractHash) || preg_match('/^[a-f0-9]{64}$/', $contractHash) !== 1) {
            return [
                'status' => 'blocked',
                'reason' => 'Passport signing custody or the pinned Partner MCP contract is incomplete.',
                'remediation' => 'Declare both Passport signing keys and a valid pinned Partner MCP contract version and SHA-256 hash.',
            ];
        }

        return [
            'status' => 'ready',
            'reason' => 'Passport signing custody and the pinned Partner MCP contract are declared for post-deployment verification.',
            'remediation' => 'None.',
            'evidence' => [
                'adapter' => 'declared-passport-contract',
                'contract_version' => $contractVersion,
                'contract_hash' => $contractHash,
                'capabilities' => array_values($check['capabilities'] ?? []),
            ],
        ];
    }
}
