<?php

namespace App\Deployment\Preflight;

use App\Deployment\Support\CommandExecutor;

final readonly class ObjectStoragePrerequisiteProbe implements PrerequisiteProbe
{
    public function __construct(
        private CommandExecutor $commands,
        private string $bucket,
        private string $endpoint,
        private string $binary = 'aws',
    ) {}

    public function inspect(array $check): array
    {
        $result = $this->commands->run([
            $this->binary,
            's3api',
            'head-bucket',
            '--bucket',
            $this->bucket,
            '--endpoint-url',
            $this->endpoint,
        ]);

        return $result->successful()
            ? [
                'status' => 'ready',
                'reason' => 'The private object-storage bucket is reachable with current read authority.',
                'remediation' => 'None.',
                'evidence' => ['bucket' => $this->bucket, 'endpoint_host' => parse_url($this->endpoint, PHP_URL_HOST)],
            ]
            : [
                'status' => 'blocked',
                'reason' => 'The private object-storage bucket could not be read.',
                'remediation' => 'Correct the bucket, endpoint, region, or managed storage credential before deployment.',
            ];
    }
}
