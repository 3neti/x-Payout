<?php

namespace App\Deployment\Dns;

use App\Deployment\Preflight\PrerequisiteProbe;
use App\Deployment\Support\CommandExecutor;
use JsonException;

final readonly class DigitalOceanDnsPrerequisiteProbe implements PrerequisiteProbe
{
    public function __construct(
        private CommandExecutor $commands,
        private string $zone,
        private string $binary = 'doctl',
        private ?string $context = null,
    ) {}

    public function inspect(array $check): array
    {
        if (($check['id'] ?? null) !== 'public.dns') {
            return [
                'status' => 'not_applicable',
                'reason' => 'This DNS adapter does not own the requested prerequisite.',
                'remediation' => 'Route the prerequisite to its declared transport adapter.',
            ];
        }

        if (preg_match('/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i', $this->zone) !== 1) {
            return $this->blocked('The configured DigitalOcean DNS zone is invalid.');
        }

        $command = [$this->binary, 'compute', 'domain', 'get', $this->zone, '--output', 'json'];

        if ($this->context !== null && $this->context !== '') {
            $command[] = '--context';
            $command[] = $this->context;
        }

        $result = $this->commands->run($command);

        if (! $result->successful()) {
            return $this->blocked('The DigitalOcean DNS zone could not be read with the configured CLI authority.');
        }

        try {
            $payload = json_decode($result->output, true, flags: JSON_THROW_ON_ERROR);
        } catch (JsonException) {
            return $this->blocked('The DigitalOcean DNS adapter returned an invalid response.');
        }

        $domain = is_array($payload) && array_is_list($payload) ? ($payload[0] ?? null) : $payload;

        if (! is_array($domain) || strcasecmp((string) ($domain['domain'] ?? $domain['name'] ?? ''), $this->zone) !== 0) {
            return $this->blocked('The configured DigitalOcean DNS zone was not found.');
        }

        return [
            'status' => 'ready',
            'reason' => 'The authoritative DigitalOcean DNS zone is readable.',
            'remediation' => 'None.',
            'evidence' => [
                'authority' => 'digitalocean',
                'zone' => $this->zone,
            ],
        ];
    }

    /** @return array{status: string, reason: string, remediation: string} */
    private function blocked(string $reason): array
    {
        return [
            'status' => 'blocked',
            'reason' => $reason,
            'remediation' => 'Correct the DNS zone or CLI authority before applying the deployment.',
        ];
    }
}
