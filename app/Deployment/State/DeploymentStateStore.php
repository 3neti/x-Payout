<?php

namespace App\Deployment\State;

use DateTimeImmutable;
use DateTimeInterface;
use DateTimeZone;
use JsonException;
use Throwable;

final class DeploymentStateStore
{
    private const SCHEMA = 'x-payout.deployment-state.v1';

    private const RESOURCE_KEYS = [
        'application_id',
        'environment_id',
        'instance_id',
        'database_cluster_id',
        'database_id',
        'cache_id',
        'worker_process_id',
        'domain_id',
    ];

    private const CHECKPOINT_STATUSES = [
        'pending',
        'complete',
        'skipped',
        'failed',
    ];

    /** @return array<string, mixed> */
    public function initial(string $profileFingerprint, string $adapter): array
    {
        return [
            'schema' => self::SCHEMA,
            'profile_fingerprint' => $profileFingerprint,
            'adapter' => $adapter,
            'resources' => [],
            'managed_secret_ids' => [],
            'last_deployment_id' => null,
            'checkpoints' => [],
            'updated_at' => null,
        ];
    }

    /** @return array<string, mixed>|null */
    public function load(string $path): ?array
    {
        if (! file_exists($path)) {
            return null;
        }

        if (! is_file($path) || ! is_readable($path)) {
            throw new DeploymentStateException("Deployment state [{$path}] is not readable.");
        }

        try {
            $state = json_decode((string) file_get_contents($path), true, flags: JSON_THROW_ON_ERROR);
        } catch (JsonException $exception) {
            throw new DeploymentStateException('Deployment state is not valid JSON.', previous: $exception);
        }

        if (! is_array($state)) {
            throw new DeploymentStateException('Deployment state must be a JSON object.');
        }

        $this->validate($state);

        return $state;
    }

    /**
     * @param  array<string, mixed>  $state
     * @return array<string, mixed>
     */
    public function write(string $path, array $state, ?DateTimeInterface $updatedAt = null): array
    {
        $state['updated_at'] = ($updatedAt ?? new DateTimeImmutable('now', new DateTimeZone('UTC')))
            ->setTimezone(new DateTimeZone('UTC'))
            ->format(DateTimeInterface::ATOM);
        $this->validate($state);

        $directory = dirname($path);

        if (! is_dir($directory) && ! mkdir($directory, 0700, true) && ! is_dir($directory)) {
            throw new DeploymentStateException("Deployment state directory [{$directory}] could not be created.");
        }

        chmod($directory, 0700);
        $temporary = tempnam($directory, '.x-payout-state-');

        if ($temporary === false) {
            throw new DeploymentStateException('Deployment state temporary file could not be created.');
        }

        try {
            $encoded = json_encode($state, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR)."\n";

            if (file_put_contents($temporary, $encoded, LOCK_EX) === false) {
                throw new DeploymentStateException('Deployment state temporary file could not be written.');
            }

            chmod($temporary, 0600);

            if (! rename($temporary, $path)) {
                throw new DeploymentStateException("Deployment state [{$path}] could not be replaced atomically.");
            }

            chmod($path, 0600);
        } catch (Throwable $exception) {
            if (file_exists($temporary)) {
                unlink($temporary);
            }

            if ($exception instanceof DeploymentStateException) {
                throw $exception;
            }

            throw new DeploymentStateException('Deployment state could not be encoded.', previous: $exception);
        }

        return $state;
    }

    /** @param array<string, mixed> $state */
    public function validate(array $state): void
    {
        $allowedKeys = [
            'schema',
            'profile_fingerprint',
            'adapter',
            'resources',
            'managed_secret_ids',
            'last_deployment_id',
            'checkpoints',
            'updated_at',
        ];
        $unknownKeys = array_values(array_diff(array_keys($state), $allowedKeys));

        if ($unknownKeys !== []) {
            throw new DeploymentStateException('Deployment state contains unsupported keys: '.implode(', ', $unknownKeys).'.');
        }

        if (($state['schema'] ?? null) !== self::SCHEMA) {
            throw new DeploymentStateException('Deployment state schema is invalid.');
        }

        if (! is_string($state['profile_fingerprint'] ?? null)
            || preg_match('/^[a-f0-9]{64}$/', $state['profile_fingerprint']) !== 1) {
            throw new DeploymentStateException('Deployment state profile fingerprint must be a lowercase SHA-256 digest.');
        }

        if (! is_string($state['adapter'] ?? null)
            || preg_match('/^[a-z][a-z0-9-]*$/', $state['adapter']) !== 1) {
            throw new DeploymentStateException('Deployment state adapter is invalid.');
        }

        $resources = $state['resources'] ?? null;

        if (! is_array($resources) || ($resources !== [] && array_is_list($resources))) {
            throw new DeploymentStateException('Deployment state resources must be an object.');
        }

        $unknownResources = array_values(array_diff(array_keys($resources), self::RESOURCE_KEYS));

        if ($unknownResources !== []) {
            throw new DeploymentStateException('Deployment state contains unsupported resources: '.implode(', ', $unknownResources).'.');
        }

        foreach ($resources as $key => $value) {
            if (! is_string($value) || trim($value) === '') {
                throw new DeploymentStateException("Deployment resource [{$key}] must be a non-empty identifier.");
            }
        }

        $managedSecretIds = $state['managed_secret_ids'] ?? null;

        if (! is_array($managedSecretIds) || ($managedSecretIds !== [] && array_is_list($managedSecretIds))) {
            throw new DeploymentStateException('Deployment state managed secret IDs must be an object.');
        }

        foreach ($managedSecretIds as $name => $identifier) {
            if (! is_string($name)
                || preg_match('/^[A-Z][A-Z0-9_]*$/', $name) !== 1
                || ! is_string($identifier)
                || trim($identifier) === '') {
                throw new DeploymentStateException('Deployment state contains an invalid managed secret identity.');
            }
        }

        $lastDeploymentId = $state['last_deployment_id'] ?? null;

        if ($lastDeploymentId !== null && (! is_string($lastDeploymentId) || trim($lastDeploymentId) === '')) {
            throw new DeploymentStateException('Deployment state last deployment ID must be null or a non-empty identifier.');
        }

        $checkpoints = $state['checkpoints'] ?? null;

        if (! is_array($checkpoints) || ($checkpoints !== [] && array_is_list($checkpoints))) {
            throw new DeploymentStateException('Deployment state checkpoints must be an object.');
        }

        foreach ($checkpoints as $phase => $status) {
            if (! is_string($phase)
                || preg_match('/^[a-z][a-z0-9-]*$/', $phase) !== 1
                || ! is_string($status)
                || ! in_array($status, self::CHECKPOINT_STATUSES, true)) {
                throw new DeploymentStateException('Deployment state contains an invalid checkpoint.');
            }
        }

        $updatedAt = $state['updated_at'] ?? null;

        if ($updatedAt !== null && (! is_string($updatedAt) || DateTimeImmutable::createFromFormat(DateTimeInterface::ATOM, $updatedAt) === false)) {
            throw new DeploymentStateException('Deployment state updated timestamp is invalid.');
        }
    }
}
