<?php

namespace App\Deployment\Dns;

use App\Deployment\Support\CommandExecutor;
use JsonException;

final readonly class DigitalOceanDnsReconciler implements DnsReconciler
{
    public function __construct(
        private CommandExecutor $commands,
        private string $zone,
        private string $binary = 'doctl',
        private ?string $context = null,
        private int $ttl = 3600,
    ) {}

    public function reconcile(string $host, array $records): array
    {
        $relativeHost = $this->relativeName($host);
        $desired = $this->desiredRecords($records, $relativeHost);

        if ($desired === []) {
            throw new DnsReconciliationException('Laravel Cloud returned no allowlisted DNS records.');
        }

        $current = $this->currentRecords($relativeHost);
        $actions = [];

        foreach ($desired as $wanted) {
            $candidates = array_values(array_filter(
                $current,
                static fn (array $record): bool => $record['type'] === $wanted['type']
                    && $record['name'] === $wanted['name'],
            ));
            $exact = array_values(array_filter(
                $candidates,
                static fn (array $record): bool => $record['data'] === $wanted['data'],
            ));

            if ($exact !== []) {
                $actions[] = $this->action('noop', $wanted);

                continue;
            }

            if (count($candidates) > 1) {
                throw new DnsReconciliationException(
                    "DigitalOcean DNS has ambiguous {$wanted['type']} {$wanted['name']} records.",
                );
            }

            if ($candidates === []) {
                $this->run([
                    'compute', 'domain', 'records', 'create', $this->zone,
                    '--record-type='.$wanted['type'],
                    '--record-name='.$wanted['name'],
                    '--record-data='.$wanted['data'],
                    '--record-ttl='.(string) $wanted['ttl'],
                ]);
                $actions[] = $this->action('create', $wanted);

                continue;
            }

            $this->run([
                'compute', 'domain', 'records', 'update', $this->zone,
                '--record-id='.$candidates[0]['id'],
                '--record-type='.$wanted['type'],
                '--record-name='.$wanted['name'],
                '--record-data='.$wanted['data'],
                '--record-ttl='.(string) $wanted['ttl'],
            ]);
            $actions[] = $this->action('update', $wanted);
        }

        $this->assertDesiredState($desired, $this->currentRecords($relativeHost));

        return [
            'changed' => array_any($actions, static fn (array $action): bool => $action['action'] !== 'noop'),
            'actions' => $actions,
        ];
    }

    /**
     * @param  array<string, mixed>|list<mixed>  $records
     * @return list<array{type: string, name: string, data: string, ttl: int}>
     */
    private function desiredRecords(array $records, string $relativeHost): array
    {
        $desired = [];
        $this->collectDesiredRecords($records, $relativeHost, $desired);

        return array_values(array_reduce(
            $desired,
            static function (array $unique, array $record): array {
                $unique[implode('|', [$record['type'], $record['name'], $record['data']])] = $record;

                return $unique;
            },
            [],
        ));
    }

    /**
     * @param  array<string, mixed>|list<mixed>  $node
     * @param  list<array{type: string, name: string, data: string, ttl: int}>  $desired
     */
    private function collectDesiredRecords(array $node, string $relativeHost, array &$desired): void
    {
        $type = strtoupper((string) ($node['type'] ?? ''));
        $name = $node['name'] ?? null;
        $data = $node['value'] ?? $node['data'] ?? null;

        if ($type !== '' && is_string($name) && $name !== '' && is_scalar($data) && (string) $data !== '') {
            $record = [
                'type' => $type,
                'name' => $this->relativeName($name),
                'data' => $type === 'CNAME' ? rtrim((string) $data, '.') : (string) $data,
                'ttl' => $this->ttl,
            ];
            $this->assertAllowlisted($record, $relativeHost);
            $desired[] = $record;
        }

        foreach ($node as $child) {
            if (is_array($child)) {
                $this->collectDesiredRecords($child, $relativeHost, $desired);
            }
        }
    }

    /** @return list<array{id: string, type: string, name: string, data: string}> */
    private function currentRecords(string $relativeHost): array
    {
        $result = $this->commands->run($this->command([
            'compute', 'domain', 'records', 'list', $this->zone, '--output', 'json',
        ]));

        if (! $result->successful()) {
            throw new DnsReconciliationException('DigitalOcean DNS records could not be read.');
        }

        try {
            $payload = json_decode($result->output, true, flags: JSON_THROW_ON_ERROR);
        } catch (JsonException $exception) {
            throw new DnsReconciliationException('DigitalOcean DNS returned invalid JSON.', previous: $exception);
        }

        if (! is_array($payload)) {
            throw new DnsReconciliationException('DigitalOcean DNS returned an invalid record collection.');
        }

        $allowlistedNames = [
            $relativeHost,
            'www.'.$relativeHost,
            '_acme-challenge.'.$relativeHost,
            '_cf-custom-hostname.'.$relativeHost,
        ];
        $records = [];

        foreach ($payload as $record) {
            if (! is_array($record) || ! in_array($record['name'] ?? null, $allowlistedNames, true)) {
                continue;
            }

            $id = $record['id'] ?? null;
            $type = $record['type'] ?? null;
            $name = $record['name'];
            $data = $record['data'] ?? null;

            if ((is_string($id) || is_int($id)) && is_string($type) && is_string($data)) {
                $records[] = [
                    'id' => (string) $id,
                    'type' => strtoupper($type),
                    'name' => $name,
                    'data' => strtoupper($type) === 'CNAME' ? rtrim($data, '.') : $data,
                ];
            }
        }

        return $records;
    }

    /** @param array{type: string, name: string, data: string, ttl: int} $record */
    private function assertAllowlisted(array $record, string $relativeHost): void
    {
        $allowed = [
            'A:'.$relativeHost,
            'CNAME:'.$relativeHost,
            'A:www.'.$relativeHost,
            'CNAME:www.'.$relativeHost,
            'CNAME:_acme-challenge.'.$relativeHost,
            'TXT:_cf-custom-hostname.'.$relativeHost,
        ];

        if (! in_array($record['type'].':'.$record['name'], $allowed, true)) {
            throw new DnsReconciliationException(
                "Laravel Cloud requested DNS outside the x-PayOut allowlist: {$record['type']} {$record['name']}.",
            );
        }
    }

    /**
     * @param  list<array{type: string, name: string, data: string, ttl: int}>  $desired
     * @param  list<array{id: string, type: string, name: string, data: string}>  $current
     */
    private function assertDesiredState(array $desired, array $current): void
    {
        foreach ($desired as $wanted) {
            $matches = array_filter(
                $current,
                static fn (array $record): bool => $record['type'] === $wanted['type']
                    && $record['name'] === $wanted['name']
                    && $record['data'] === $wanted['data'],
            );

            if ($matches === []) {
                throw new DnsReconciliationException('DigitalOcean DNS did not converge to the requested state.');
            }
        }
    }

    /** @param list<string> $arguments */
    private function run(array $arguments): void
    {
        $result = $this->commands->run($this->command($arguments));

        if (! $result->successful()) {
            throw new DnsReconciliationException('DigitalOcean DNS mutation failed.');
        }
    }

    /**
     * @param  list<string>  $arguments
     * @return list<string>
     */
    private function command(array $arguments): array
    {
        $command = [$this->binary, ...$arguments];

        if ($this->context !== null && $this->context !== '') {
            $command[] = '--context';
            $command[] = $this->context;
        }

        return $command;
    }

    private function relativeName(string $name): string
    {
        $name = rtrim(strtolower($name), '.');
        $zone = strtolower($this->zone);

        if ($name === $zone) {
            return '@';
        }

        if (str_ends_with($name, '.'.$zone)) {
            return substr($name, 0, -(strlen($zone) + 1));
        }

        if ($name === '@' || ! str_contains($name, '.')) {
            return $name;
        }

        throw new DnsReconciliationException("DNS name [{$name}] is outside zone [{$this->zone}].");
    }

    /**
     * @param  array{type: string, name: string, data: string, ttl: int}  $record
     * @return array{action: string, type: string, name: string}
     */
    private function action(string $action, array $record): array
    {
        return ['action' => $action, 'type' => $record['type'], 'name' => $record['name']];
    }
}
