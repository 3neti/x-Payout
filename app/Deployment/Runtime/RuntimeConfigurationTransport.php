<?php

namespace App\Deployment\Runtime;

interface RuntimeConfigurationTransport
{
    /** @return array<string, string> */
    public function current(string $environmentId): array;

    public function set(string $environmentId, string $key, string $value): void;
}
