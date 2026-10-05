<?php

namespace App\Deployment\Cloud;

use App\Deployment\Runtime\RuntimeConfigurationTransport;
use App\Deployment\Support\CommandExecutor;

final readonly class LaravelCloudRuntimeConfiguration implements RuntimeConfigurationTransport
{
    public function __construct(
        private LaravelCloudClient $cloud,
        private CommandExecutor $commands,
        private string $binary = 'cloud',
    ) {}

    public function current(string $environmentId): array
    {
        $payload = $this->cloud->json('environment:get', [$environmentId]);
        $variables = $payload['environmentVariables'] ?? $payload['variables'] ?? [];
        $current = [];

        if (! is_array($variables)) {
            throw new LaravelCloudAdapterException('Laravel Cloud environment variables payload is invalid.');
        }

        if (! array_is_list($variables)) {
            foreach ($variables as $key => $value) {
                if (is_string($key) && is_scalar($value)) {
                    $current[$key] = (string) $value;
                }
            }

            return $current;
        }

        foreach ($variables as $variable) {
            if (! is_array($variable)) {
                continue;
            }

            $key = $variable['key'] ?? $variable['name'] ?? null;
            $value = $variable['value'] ?? null;

            if (is_string($key) && is_scalar($value)) {
                $current[$key] = (string) $value;
            }
        }

        return $current;
    }

    public function set(string $environmentId, string $key, string $value): void
    {
        if (preg_match('/^[A-Z][A-Z0-9_]*$/', $key) !== 1) {
            throw new LaravelCloudAdapterException('Refusing to set an invalid runtime variable key.');
        }

        $result = $this->commands->run([
            $this->binary,
            'environment:variables',
            $environmentId,
            '--action=set',
            '--key='.$key,
            '--value='.$value,
            '--force',
            '-n',
        ]);

        if (! $result->successful()) {
            throw new LaravelCloudAdapterException("Laravel Cloud runtime variable [{$key}] could not be updated.");
        }
    }
}
