<?php

namespace App\Deployment\Preflight;

final readonly class CompositePrerequisiteProbe implements PrerequisiteProbe
{
    /** @param array<string, PrerequisiteProbe> $probes */
    public function __construct(private array $probes) {}

    public function inspect(array $check): array
    {
        $transport = $check['transport'] ?? null;

        if (! is_string($transport) || ! isset($this->probes[$transport])) {
            throw new PreflightException('No prerequisite adapter is registered for transport ['.(string) $transport.'].');
        }

        return $this->probes[$transport]->inspect($check);
    }
}
