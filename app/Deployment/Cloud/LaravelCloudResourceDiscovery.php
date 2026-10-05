<?php

namespace App\Deployment\Cloud;

use App\Deployment\State\ResourceDiscovery;

final readonly class LaravelCloudResourceDiscovery implements ResourceDiscovery
{
    public function __construct(private LaravelCloudClient $cloud) {}

    /**
     * @param  array<string, mixed>  $profile
     * @return array{resources: array<string, string>, managed_secret_ids: array<string, string>, missing: list<string>}
     */
    public function discover(array $profile): array
    {
        $resources = [];
        $missing = [];
        $application = $this->unique(
            $this->cloud->json('application:list'),
            fn (array $item): bool => strcasecmp((string) ($item['name'] ?? ''), (string) $profile['identity']['display_name']) === 0
                && strcasecmp((string) ($item['repositoryFullName'] ?? ''), (string) $profile['release']['repository']) === 0,
            'application',
        );

        if ($application === null) {
            return $this->missingFoundation();
        }

        $resources['application_id'] = $this->id($application, 'application');
        $environmentName = (string) ($profile['runtime']['APP_ENV'] ?? 'production');
        $environment = $this->unique(
            $this->cloud->json('environment:list', [$resources['application_id']]),
            fn (array $item): bool => strcasecmp((string) ($item['name'] ?? ''), $environmentName) === 0,
            'environment',
        );

        if ($environment === null) {
            return $this->result($resources, [], [
                'environment_id', 'instance_id', 'database_cluster_id', 'database_id',
                'cache_id', 'worker_process_id', 'domain_id',
            ]);
        }

        $resources['environment_id'] = $this->id($environment, 'environment');
        $instance = $this->unique(
            $this->cloud->json('instance:list', [$resources['environment_id']]),
            fn (array $item): bool => ($item['isDefault'] ?? false) === true
                || (
                    ($item['type'] ?? null) === 'app'
                    && strcasecmp((string) ($item['name'] ?? ''), 'App') === 0
                ),
            'default instance',
        );

        if ($instance === null) {
            $missing[] = 'instance_id';
        } else {
            $resources['instance_id'] = $this->id($instance, 'instance');
        }

        $foundationNames = LaravelCloudResourceNames::foundationCandidates($profile);
        $databaseId = $environment['databaseSchemaId'] ?? null;

        if (is_string($databaseId) && $databaseId !== '') {
            $resources['database_id'] = $databaseId;
            $databaseCluster = $this->unique(
                $this->cloud->json('database-cluster:list'),
                fn (array $item): bool => $this->containsSchema($item, $databaseId),
                'database cluster',
            );

            if ($databaseCluster === null) {
                $missing[] = 'database_cluster_id';
            } else {
                $resources['database_cluster_id'] = $this->id($databaseCluster, 'database cluster');
            }
        } else {
            $databaseCluster = $this->unique(
                $this->cloud->json('database-cluster:list'),
                fn (array $item): bool => in_array($item['name'] ?? null, $foundationNames, true),
                'detached database cluster',
            );

            if ($databaseCluster === null) {
                $missing[] = 'database_id';
                $missing[] = 'database_cluster_id';
            } else {
                $resources['database_cluster_id'] = $this->id($databaseCluster, 'database cluster');
                $database = $this->unique(
                    is_array($databaseCluster['schemas'] ?? null) ? $databaseCluster['schemas'] : [],
                    fn (array $item): bool => ($item['name'] ?? null) === 'x_payout',
                    'detached database schema',
                );

                if ($database === null) {
                    $missing[] = 'database_id';
                } else {
                    $resources['database_id'] = $this->id($database, 'database');
                }
            }
        }

        $cacheId = $environment['cacheId'] ?? null;

        if (is_string($cacheId) && $cacheId !== '') {
            $cache = $this->unique(
                $this->cloud->json('cache:list'),
                fn (array $item): bool => ($item['id'] ?? null) === $cacheId,
                'cache',
            );

            if ($cache === null) {
                $missing[] = 'cache_id';
            } else {
                $resources['cache_id'] = $this->id($cache, 'cache');
            }
        } else {
            $cache = $this->unique(
                $this->cloud->json('cache:list'),
                fn (array $item): bool => in_array($item['name'] ?? null, $foundationNames, true),
                'detached cache',
            );

            if ($cache === null) {
                $missing[] = 'cache_id';
            } else {
                $resources['cache_id'] = $this->id($cache, 'cache');
            }
        }

        if (isset($resources['instance_id'])) {
            $worker = $this->unique(
                $this->cloud->json('background-process:list', [$resources['instance_id']]),
                fn (array $item): bool => str_contains((string) ($item['command'] ?? ''), 'queue:work'),
                'queue worker',
            );

            if ($worker === null) {
                $missing[] = 'worker_process_id';
            } else {
                $resources['worker_process_id'] = $this->id($worker, 'queue worker');
            }
        } else {
            $missing[] = 'worker_process_id';
        }

        $host = parse_url((string) $profile['public']['canonical_url'], PHP_URL_HOST);
        $domain = $this->unique(
            $this->cloud->json('domain:list', [$resources['environment_id']]),
            fn (array $item): bool => is_string($host)
                && strcasecmp((string) ($item['name'] ?? ''), $host) === 0,
            'domain',
        );

        if ($domain === null) {
            $missing[] = 'domain_id';
        } else {
            $resources['domain_id'] = $this->id($domain, 'domain');
        }

        $managedSecretIds = [];
        $secrets = $this->cloud->json('environment-secret:list', [$resources['environment_id']]);

        foreach ($secrets as $secret) {
            if (! is_array($secret) || ! is_string($secret['key'] ?? null) || ! is_string($secret['id'] ?? null)) {
                continue;
            }

            if (isset($managedSecretIds[$secret['key']])) {
                throw new LaravelCloudAdapterException(
                    "Laravel Cloud environment has multiple attached secrets named [{$secret['key']}].",
                );
            }

            $managedSecretIds[$secret['key']] = $secret['id'];
        }

        return $this->result($resources, $managedSecretIds, $missing);
    }

    /** @return array{resources: array<string, string>, managed_secret_ids: array<string, string>, missing: list<string>} */
    private function missingFoundation(): array
    {
        return $this->result([], [], [
            'application_id', 'environment_id', 'instance_id', 'database_cluster_id',
            'database_id', 'cache_id', 'worker_process_id', 'domain_id',
        ]);
    }

    /**
     * @param  array<string, string>  $resources
     * @param  array<string, string>  $managedSecretIds
     * @param  list<string>  $missing
     * @return array{resources: array<string, string>, managed_secret_ids: array<string, string>, missing: list<string>}
     */
    private function result(array $resources, array $managedSecretIds, array $missing): array
    {
        ksort($resources, SORT_STRING);
        ksort($managedSecretIds, SORT_STRING);
        $missing = array_values(array_unique($missing));
        sort($missing, SORT_STRING);

        return [
            'resources' => $resources,
            'managed_secret_ids' => $managedSecretIds,
            'missing' => $missing,
        ];
    }

    /**
     * @param  array<string, mixed>|list<array<string, mixed>>  $items
     * @param  callable(array<string, mixed>): bool  $matches
     * @return array<string, mixed>|null
     */
    private function unique(array $items, callable $matches, string $resource): ?array
    {
        $matched = array_values(array_filter(
            $items,
            fn (mixed $item): bool => is_array($item) && $matches($item),
        ));

        if (count($matched) > 1) {
            throw new LaravelCloudAdapterException("Laravel Cloud {$resource} discovery is ambiguous.");
        }

        return $matched[0] ?? null;
    }

    /** @param array<string, mixed> $resource */
    private function id(array $resource, string $label): string
    {
        $id = $resource['id'] ?? null;

        if (! is_string($id) || $id === '') {
            throw new LaravelCloudAdapterException("Laravel Cloud {$label} is missing its identity.");
        }

        return $id;
    }

    /** @param array<string, mixed> $cluster */
    private function containsSchema(array $cluster, string $databaseId): bool
    {
        foreach ($cluster['schemas'] ?? [] as $schema) {
            if (is_array($schema) && ($schema['id'] ?? null) === $databaseId) {
                return true;
            }
        }

        return false;
    }
}
