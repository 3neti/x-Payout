<?php

namespace App\Deployment\Preflight;

use App\Deployment\Support\CommandExecutor;

final readonly class HttpsIntegrationPrerequisiteProbe implements PrerequisiteProbe
{
    /** @param array<string, string> $endpoints */
    public function __construct(
        private CommandExecutor $commands,
        private array $endpoints,
        private string $binary = 'curl',
    ) {}

    public function inspect(array $check): array
    {
        $transport = $check['transport'] ?? null;
        $endpoint = is_string($transport) ? ($this->endpoints[$transport] ?? null) : null;

        if (! is_string($endpoint) || ! str_starts_with($endpoint, 'https://')) {
            return [
                'status' => 'blocked',
                'reason' => 'No HTTPS readiness endpoint is configured for this integration.',
                'remediation' => 'Declare a non-billable health or discovery endpoint for this integration.',
            ];
        }

        $result = $this->commands->run([
            $this->binary, '--head', '--fail', '--silent', '--show-error', '--max-time', '10', $endpoint,
        ]);

        return $result->successful()
            ? [
                'status' => 'ready',
                'reason' => 'The integration HTTPS surface is reachable without a billable operation.',
                'remediation' => 'None.',
                'evidence' => ['transport' => $transport, 'host' => parse_url($endpoint, PHP_URL_HOST)],
            ]
            : [
                'status' => 'blocked',
                'reason' => 'The integration HTTPS surface is not reachable.',
                'remediation' => 'Correct the integration endpoint or network authority before deployment.',
            ];
    }
}
