<?php

namespace App\Deployment\Preflight;

use App\Deployment\Support\CommandExecutor;

final readonly class SourceReleasePrerequisiteProbe implements PrerequisiteProbe
{
    public function __construct(
        private CommandExecutor $commands,
        private string $repository,
        private string $ref,
        private string $binary = 'git',
    ) {}

    public function inspect(array $check): array
    {
        $result = $this->commands->run([
            $this->binary,
            'ls-remote',
            '--exit-code',
            '--refs',
            $this->repository,
            'refs/tags/'.$this->ref,
        ]);

        if (! $result->successful() || trim($result->output) === '') {
            return $this->blocked('The immutable release tag could not be resolved.');
        }

        $hash = strtok(trim($result->output), "\t ");

        return [
            'status' => 'ready',
            'reason' => 'The immutable source release is available.',
            'remediation' => 'None.',
            'evidence' => ['ref' => $this->ref, 'commit' => is_string($hash) ? $hash : null],
        ];
    }

    private function blocked(string $reason): array
    {
        return ['status' => 'blocked', 'reason' => $reason, 'remediation' => 'Publish or correct the exact release before deployment.'];
    }
}
