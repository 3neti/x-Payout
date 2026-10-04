<?php

namespace App\Deployment\Preflight;

interface PrerequisiteProbe
{
    /**
     * @param  array<string, mixed>  $check
     * @return array{status: string, reason: string, remediation: string, evidence?: array<string, mixed>}
     */
    public function inspect(array $check): array;
}
