<?php

namespace App\Deployment\Controller;

final readonly class DeploymentAuthority
{
    public function __construct(
        public bool $apply = false,
        public bool $commission = false,
        public bool $activateDomain = false,
        public bool $rotateSecrets = false,
    ) {}

    public function allows(DeploymentPhase $phase): bool
    {
        return match ($phase) {
            DeploymentPhase::Preflight, DeploymentPhase::PreCommission, DeploymentPhase::Verify => true,
            DeploymentPhase::Commission => $this->apply && $this->commission,
            DeploymentPhase::Domain => $this->apply && $this->activateDomain,
            default => $this->apply,
        };
    }
}
