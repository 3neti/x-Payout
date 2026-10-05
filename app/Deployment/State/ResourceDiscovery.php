<?php

namespace App\Deployment\State;

interface ResourceDiscovery
{
    /**
     * @param  array<string, mixed>  $profile
     * @return array{resources: array<string, string>, managed_secret_ids: array<string, string>, missing: list<string>}
     */
    public function discover(array $profile): array;
}
