<?php

namespace App\Deployment\Cloud;

use App\Deployment\Secrets\ManagedSecretTransport;

final readonly class LaravelCloudManagedSecretTransport implements ManagedSecretTransport
{
    public function __construct(private LaravelCloudClient $cloud) {}

    public function attached(string $environmentId): array
    {
        $payload = $this->cloud->json('environment-secret:list', [$environmentId]);
        $attached = [];

        foreach ($payload as $secret) {
            if (! is_array($secret)) {
                continue;
            }

            $name = $secret['key'] ?? null;
            $id = $secret['id'] ?? null;

            if (is_string($name) && $name !== '' && is_string($id) && $id !== '') {
                $attached[$name][] = $id;
            }
        }

        ksort($attached, SORT_STRING);

        return $attached;
    }

    public function create(string $name, string $value): string
    {
        $payload = $this->cloud->json('secret:create', ["--name={$name}"], $value);

        return $this->requiredId($payload, 'create');
    }

    public function rotate(string $secretId, string $value): void
    {
        $payload = $this->cloud->json('secret:update', [$secretId, '--force'], $value);
        $this->requiredId($payload, 'rotate');
    }

    public function attach(string $environmentId, string $secretId): void
    {
        $this->cloud->json('environment-secret:attach', [$environmentId, $secretId]);
    }

    /** @param array<string, mixed>|list<array<string, mixed>> $payload */
    private function requiredId(array $payload, string $operation): string
    {
        $id = $payload['id'] ?? null;

        if (! is_string($id) || $id === '') {
            throw new LaravelCloudAdapterException("Laravel Cloud secret {$operation} did not return an identity.");
        }

        return $id;
    }
}
