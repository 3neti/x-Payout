<?php

namespace App\Deployment\State;

final readonly class ResourceStateReconciler
{
    public function __construct(
        private DeploymentStateStore $store,
        private ResourceDiscovery $discovery,
    ) {}

    /**
     * @param  array<string, mixed>  $profile
     * @return array{state: array<string, mixed>, changed: bool, missing: list<string>}
     */
    public function reconcile(
        string $path,
        string $profileFingerprint,
        string $adapter,
        array $profile,
    ): array {
        $existing = $this->store->load($path);

        if ($existing !== null && ($existing['profile_fingerprint'] !== $profileFingerprint
            || $existing['adapter'] !== $adapter)) {
            throw new DeploymentStateException('Deployment state does not belong to this profile and adapter.');
        }

        $discovered = $this->discovery->discover($profile);
        $state = $existing ?? $this->store->initial($profileFingerprint, $adapter);

        foreach (['resources', 'managed_secret_ids'] as $section) {
            foreach ($state[$section] as $name => $knownId) {
                $discoveredId = $discovered[$section][$name] ?? null;

                if ($discoveredId === null) {
                    throw new DeploymentStateException("Recorded {$section} identity [{$name}] was not rediscovered.");
                }

                if (! hash_equals($knownId, $discoveredId)) {
                    throw new DeploymentStateException("Rediscovered {$section} identity [{$name}] conflicts with state.");
                }
            }

            $state[$section] = $discovered[$section];
        }

        $changed = $existing === null
            || $existing['resources'] !== $state['resources']
            || $existing['managed_secret_ids'] !== $state['managed_secret_ids'];

        if ($changed) {
            $state = $this->store->write($path, $state);
        }

        return [
            'state' => $state,
            'changed' => $changed,
            'missing' => $discovered['missing'],
        ];
    }
}
