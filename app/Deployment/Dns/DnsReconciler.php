<?php

namespace App\Deployment\Dns;

interface DnsReconciler
{
    /**
     * @param  array<string, mixed>|list<mixed>  $records
     * @return array{changed: bool, actions: list<array{action: string, type: string, name: string}>}
     */
    public function reconcile(string $host, array $records): array;
}
