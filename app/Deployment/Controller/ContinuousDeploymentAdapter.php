<?php

namespace App\Deployment\Controller;

interface ContinuousDeploymentAdapter
{
    /**
     * @param  array<string, mixed>  $compiled
     * @param  array<string, mixed>  $state
     * @return array<string, mixed>
     */
    public function execute(
        DeploymentPhase $phase,
        array $compiled,
        array $state,
        DeploymentAuthority $authority,
    ): array;
}
