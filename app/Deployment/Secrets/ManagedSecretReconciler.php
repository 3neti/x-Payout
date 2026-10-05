<?php

namespace App\Deployment\Secrets;

final class ManagedSecretReconciler
{
    public function __construct(private readonly ManagedSecretTransport $transport) {}

    /**
     * @param  list<string>  $requiredNames
     * @param  array<string, string>  $values
     * @param  array<string, string>  $knownIds
     * @param  list<string>  $rotateNames
     * @return array{ready: bool, managed_secret_ids: array<string, string>, actions: list<array{name: string, action: string}>}
     */
    public function reconcile(
        string $environmentId,
        array $requiredNames,
        array $values,
        array $knownIds = [],
        bool $checkOnly = false,
        array $rotateNames = [],
    ): array {
        $requiredNames = array_values(array_unique($requiredNames));
        sort($requiredNames, SORT_STRING);
        $rotateNames = array_values(array_unique($rotateNames));
        $unknownRotations = array_values(array_diff($rotateNames, $requiredNames));

        if ($unknownRotations !== []) {
            throw new SecretReconciliationException('Rotation requested for unused secrets: '.implode(', ', $unknownRotations).'.');
        }

        foreach ($requiredNames as $name) {
            if (preg_match('/^[A-Z][A-Z0-9_]*$/', $name) !== 1) {
                throw new SecretReconciliationException('Required secret inventory contains an invalid name.');
            }
        }

        $attached = $this->transport->attached($environmentId);
        $available = $this->transport->available();
        $resolvedIds = [];
        $actions = [];
        $ready = true;

        foreach ($requiredNames as $name) {
            $attachedIds = $attached[$name] ?? [];

            if (count($attachedIds) > 1) {
                throw new SecretReconciliationException("Managed secret [{$name}] has multiple attached identities.");
            }

            $attachedId = $attachedIds[0] ?? null;
            $knownId = $knownIds[$name] ?? null;
            $availableIds = $available[$name] ?? [];

            if ($knownId !== null && $attachedId !== null && ! hash_equals($knownId, $attachedId)) {
                throw new SecretReconciliationException("Managed secret identity conflict for [{$name}].");
            }

            if ($knownId !== null && ! in_array($knownId, $availableIds, true)) {
                throw new SecretReconciliationException("Recorded managed secret [{$name}] no longer exists.");
            }

            if ($attachedId !== null && ! in_array($name, $rotateNames, true)) {
                $resolvedIds[$name] = $attachedId;
                $actions[] = ['name' => $name, 'action' => 'unchanged'];

                continue;
            }

            if ($attachedId === null && $knownId !== null && ! in_array($name, $rotateNames, true)) {
                $this->transport->attach($environmentId, $knownId);
                $resolvedIds[$name] = $knownId;
                $actions[] = ['name' => $name, 'action' => 'attached_existing'];

                continue;
            }

            if ($attachedId === null && count($availableIds) === 1 && ! in_array($name, $rotateNames, true)) {
                $this->transport->attach($environmentId, $availableIds[0]);
                $resolvedIds[$name] = $availableIds[0];
                $actions[] = ['name' => $name, 'action' => 'attached_existing'];

                continue;
            }

            if ($attachedId === null && count($availableIds) > 1 && ! isset($values[$name])) {
                throw new SecretReconciliationException(
                    "Managed secret [{$name}] is ambiguous across the organization and needs an exact value or recorded identity.",
                );
            }

            if ($checkOnly) {
                $ready = false;
                $actions[] = [
                    'name' => $name,
                    'action' => $attachedId === null ? 'create_and_attach_required' : 'rotation_required',
                ];

                if ($attachedId !== null) {
                    $resolvedIds[$name] = $attachedId;
                }

                continue;
            }

            $value = $values[$name] ?? null;

            if (! is_string($value) || trim($value) === '') {
                throw new SecretReconciliationException("Secret value [{$name}] is required only for creation or rotation.");
            }

            if ($attachedId !== null) {
                $this->transport->rotate($attachedId, $value);
                $resolvedIds[$name] = $attachedId;
                $actions[] = ['name' => $name, 'action' => 'rotated'];

                continue;
            }

            $secretId = $this->transport->create($name, $value);
            $this->transport->attach($environmentId, $secretId);
            $resolvedIds[$name] = $secretId;
            $actions[] = ['name' => $name, 'action' => 'created_and_attached'];
        }

        ksort($resolvedIds, SORT_STRING);

        return [
            'ready' => $ready,
            'managed_secret_ids' => $resolvedIds,
            'actions' => $actions,
        ];
    }
}
