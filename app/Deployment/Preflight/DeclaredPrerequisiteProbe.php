<?php

namespace App\Deployment\Preflight;

final readonly class DeclaredPrerequisiteProbe implements PrerequisiteProbe
{
    /** @param list<string> $availableSecretNames */
    public function __construct(
        private string $transport,
        private array $availableSecretNames = [],
    ) {}

    public function inspect(array $check): array
    {
        if (($check['transport'] ?? null) !== $this->transport) {
            return [
                'status' => 'not_applicable',
                'reason' => 'This declaration adapter does not own the prerequisite.',
                'remediation' => 'Route the check to its declared transport adapter.',
            ];
        }

        $references = array_values(array_filter(
            $check['references'] ?? [],
            static fn (mixed $reference): bool => is_string($reference) && $reference !== '',
        ));

        if ($references === []) {
            return [
                'status' => 'blocked',
                'reason' => 'The prerequisite has no declared references.',
                'remediation' => 'Declare the required configuration and credential references in instance.yaml.',
            ];
        }

        if ($this->transport === 'secret-custody') {
            $missing = array_values(array_diff($references, $this->availableSecretNames));

            if ($missing !== []) {
                return [
                    'status' => 'blocked',
                    'reason' => 'One or more required managed-secret names are unavailable for reconciliation.',
                    'remediation' => 'Provide the one-time secrets file or attach the named secrets before applying.',
                ];
            }
        }

        return [
            'status' => 'ready',
            'reason' => 'The prerequisite declaration is complete; mutation remains governed by its phase adapter.',
            'remediation' => 'None.',
            'evidence' => [
                'adapter' => 'declared-'.$this->transport,
                'capabilities' => array_values($check['capabilities'] ?? []),
            ],
        ];
    }
}
