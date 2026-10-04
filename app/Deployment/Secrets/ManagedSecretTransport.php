<?php

namespace App\Deployment\Secrets;

interface ManagedSecretTransport
{
    /** @return array<string, list<string>> Secret name to attached managed-secret IDs. */
    public function attached(string $environmentId): array;

    public function create(string $name, string $value): string;

    public function rotate(string $secretId, string $value): void;

    public function attach(string $environmentId, string $secretId): void;
}
