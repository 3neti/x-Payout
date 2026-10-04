<?php

namespace App\Deployment\Preflight;

final class PreflightCatalog
{
    /**
     * @param  array<string, mixed>  $profile
     * @return array<string, mixed>
     */
    public function build(array $profile, string $profileFingerprint): array
    {
        $checks = [
            $this->check(
                id: 'release.source',
                transport: 'source-control',
                description: 'The exact immutable release is available to the deployment platform.',
                references: ['release.repository', 'release.ref'],
            ),
            $this->check(
                id: 'public.dns',
                transport: 'dns',
                description: 'The canonical hostname exists under authorized DNS custody and can accept the deployment target.',
                references: ['public.canonical_url'],
            ),
            $this->check(
                id: 'storage.evidence',
                transport: 'object-storage',
                description: 'Private evidence and keepsake storage accepts non-financial write, read, list, and delete probes.',
                references: array_values(array_unique(array_merge(
                    ['storage.evidence.driver'],
                    array_keys($profile['storage']['evidence']['runtime'] ?? []),
                    array_values($profile['storage']['evidence']['secrets'] ?? []),
                ))),
            ),
            $this->check(
                id: 'secrets.deployment',
                transport: 'secret-custody',
                description: 'Every deployment secret reference is present in managed secret custody.',
                references: $profile['deployment_required_secrets'] ?? [],
            ),
        ];

        foreach ($profile['providers']['connections'] as $connection) {
            $prefix = 'providers.'.$connection['name'];
            $providerReferences = array_values(array_unique(array_merge(
                array_keys($connection['runtime'] ?? []),
                array_values($connection['secrets'] ?? []),
            )));

            $checks[] = $this->check(
                id: $prefix.'.identity',
                transport: 'provider',
                description: 'The provider identity and configured source account resolve without moving money.',
                references: $providerReferences,
                capabilities: ['identity', 'account'],
            );
            $checks[] = $this->check(
                id: $prefix.'.capabilities',
                transport: 'provider',
                description: 'The provider exposes every capability required by the portable instance profile.',
                references: ['providers.connections.'.$connection['name'].'.capabilities'],
                capabilities: $connection['capabilities'],
            );
        }

        $runtime = $profile['runtime'] ?? [];
        $secretReferences = array_values($profile['secret_refs'] ?? []);

        if (($profile['features']['sms_feedback'] ?? false) === true) {
            $checks[] = $this->integrationCheck(
                'integrations.sms',
                'sms',
                'SMS credentials can perform an approved non-financial readiness probe.',
                ['ENGAGESPARK_API_KEY', 'ENGAGESPARK_ORGANIZATION_ID'],
                $secretReferences,
            );
        }

        if (($runtime['XCHANGE_MOBILE_VERIFICATION_ENABLED'] ?? false) === true) {
            $checks[] = $this->integrationCheck(
                'integrations.otp',
                'otp',
                'The configured OTP service is reachable and authorized for verification delivery.',
                ['TXTCMDR_API_TOKEN'],
                $secretReferences,
            );
        }

        if (in_array('HYPERVERGE_APP_ID', $secretReferences, true)
            || in_array('HYPERVERGE_APP_KEY', $secretReferences, true)) {
            $checks[] = $this->integrationCheck(
                'integrations.kyc',
                'kyc',
                'The configured KYC application and workflow exist and are available.',
                ['HYPERVERGE_APP_ID', 'HYPERVERGE_APP_KEY'],
                $secretReferences,
            );
        }

        if (($runtime['LOCATION_HANDLER_MAP_PROVIDER'] ?? null) === 'mapbox') {
            $checks[] = $this->integrationCheck(
                'integrations.maps',
                'maps',
                'The configured map provider token can access the required map service.',
                ['MAPBOX_TOKEN'],
                $secretReferences,
            );
        }

        if (in_array('OPENCAGE_API_KEY', $secretReferences, true)) {
            $checks[] = $this->integrationCheck(
                'integrations.geocoding',
                'geocoding',
                'The configured geocoding credential can access the required service.',
                ['OPENCAGE_API_KEY'],
                $secretReferences,
            );
        }

        if (($profile['features']['partner_api'] ?? false) === true) {
            $checks[] = $this->check(
                id: 'partner-api.passport',
                transport: 'oauth',
                description: 'Passport signing keys and the pinned Partner MCP contract are ready before exposure.',
                references: [
                    'PASSPORT_PRIVATE_KEY',
                    'PASSPORT_PUBLIC_KEY',
                    'XMCP_EXPECTED_PARTNER_CONTRACT_VERSION',
                    'XMCP_EXPECTED_PARTNER_CONTRACT_SHA256',
                ],
                capabilities: ['oauth2', 'contract-pinning'],
            );
        }

        $checks[] = $this->check(
            id: 'commissioning.authority',
            transport: 'operator-approval',
            description: 'Opening capitalization, cutover evidence, and commissioning contacts are complete and explicitly authorized.',
            references: array_values(array_unique(array_merge(
                [
                    'commissioning.opening.policy',
                    'commissioning.opening.connection',
                    'commissioning.opening.cutover_at',
                    'commissioning.opening.cutover_transaction_id',
                ],
                $profile['commissioning_required_secrets'] ?? [],
            ))),
        );

        usort($checks, fn (array $left, array $right): int => $left['id'] <=> $right['id']);

        return [
            'schema' => 'x-payout.preflight-plan.v1',
            'profile_fingerprint' => $profileFingerprint,
            'policy' => [
                'mutation_allowed_only_when' => 'all_required_checks_ready',
                'allowed_statuses' => ['pending', 'ready', 'not_applicable', 'needs_attention', 'blocked'],
                'blocking_statuses' => ['pending', 'needs_attention', 'blocked'],
            ],
            'checks' => $checks,
        ];
    }

    /**
     * @param  list<string>  $references
     * @param  list<string>  $capabilities
     * @return array<string, mixed>
     */
    private function check(
        string $id,
        string $transport,
        string $description,
        array $references,
        array $capabilities = [],
    ): array {
        sort($references, SORT_STRING);
        sort($capabilities, SORT_STRING);

        return [
            'id' => $id,
            'stage' => 'pre_mutation',
            'required' => true,
            'status' => 'pending',
            'transport' => $transport,
            'description' => $description,
            'references' => array_values(array_unique($references)),
            'capabilities' => array_values(array_unique($capabilities)),
            'failure_policy' => 'block_before_mutation',
        ];
    }

    /**
     * @param  list<string>  $requiredReferences
     * @param  list<string>  $availableReferences
     * @return array<string, mixed>
     */
    private function integrationCheck(
        string $id,
        string $transport,
        string $description,
        array $requiredReferences,
        array $availableReferences,
    ): array {
        $missingReferences = array_values(array_diff($requiredReferences, $availableReferences));

        if ($missingReferences !== []) {
            throw new \InvalidArgumentException(
                'Preflight integration ['.$id.'] is missing secret references: '.implode(', ', $missingReferences).'.',
            );
        }

        return $this->check($id, $transport, $description, $requiredReferences);
    }
}
