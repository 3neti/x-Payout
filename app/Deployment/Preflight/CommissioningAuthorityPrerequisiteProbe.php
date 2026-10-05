<?php

namespace App\Deployment\Preflight;

use App\Deployment\Controller\DeploymentAuthority;

final readonly class CommissioningAuthorityPrerequisiteProbe implements PrerequisiteProbe
{
    /** @param array<string, mixed> $opening */
    public function __construct(
        private array $opening,
        private DeploymentAuthority $authority,
    ) {}

    public function inspect(array $check): array
    {
        $complete = is_string($this->opening['cutover_at'] ?? null)
            && trim($this->opening['cutover_at']) !== ''
            && is_string($this->opening['cutover_transaction_id'] ?? null)
            && trim($this->opening['cutover_transaction_id']) !== '';

        if (! $complete) {
            return [
                'status' => 'blocked',
                'reason' => 'Commissioning cutover evidence is absent.',
                'remediation' => 'Supply the cutover timestamp and provider transaction watermark before deployment.',
            ];
        }

        return [
            'status' => 'ready',
            'reason' => 'Commissioning cutover evidence is present; execution authority remains a separate current-run control.',
            'remediation' => 'None.',
            'evidence' => [
                'connection' => $this->opening['connection'] ?? null,
                'authorized_for_this_run' => $this->authority->commission,
            ],
        ];
    }
}
