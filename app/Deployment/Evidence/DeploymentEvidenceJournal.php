<?php

namespace App\Deployment\Evidence;

use InvalidArgumentException;

final class DeploymentEvidenceJournal
{
    /** @var array<string, mixed> */
    private array $entries = [];

    /** @param array<string, mixed> $evidence */
    public function record(string $section, array $evidence): void
    {
        if (! in_array($section, [
            'preflight', 'secrets', 'runtime', 'deployment', 'pre_commission',
            'commissioning', 'domain', 'strict_doctor', 'mcp_doctor',
        ], true)) {
            throw new InvalidArgumentException("Unsupported deployment evidence section [{$section}].");
        }

        $this->entries[$section] = $evidence;
    }

    /** @return array<string, mixed> */
    public function all(): array
    {
        return $this->entries;
    }
}
