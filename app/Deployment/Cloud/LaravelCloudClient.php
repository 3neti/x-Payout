<?php

namespace App\Deployment\Cloud;

use App\Deployment\Support\CommandExecutor;
use JsonException;

final readonly class LaravelCloudClient
{
    public function __construct(
        private CommandExecutor $commands,
        private string $binary = 'cloud',
    ) {}

    /**
     * @param  list<string>  $arguments
     * @return array<string, mixed>|list<array<string, mixed>>
     */
    public function json(string $operation, array $arguments = [], ?string $input = null): array
    {
        $result = $this->commands->run([
            $this->binary,
            $operation,
            ...$arguments,
            '--json',
            '-n',
        ], $input);

        if (! $result->successful()) {
            throw new LaravelCloudAdapterException("Laravel Cloud operation [{$operation}] failed.");
        }

        try {
            $decoded = json_decode($result->output, true, flags: JSON_THROW_ON_ERROR);
        } catch (JsonException $exception) {
            throw new LaravelCloudAdapterException(
                "Laravel Cloud operation [{$operation}] returned invalid JSON.",
                previous: $exception,
            );
        }

        if (! is_array($decoded)) {
            throw new LaravelCloudAdapterException("Laravel Cloud operation [{$operation}] returned an invalid payload.");
        }

        return is_array($decoded['data'] ?? null) ? $decoded['data'] : $decoded;
    }
}
