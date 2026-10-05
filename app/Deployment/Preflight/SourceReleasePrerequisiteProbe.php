<?php

namespace App\Deployment\Preflight;

use App\Deployment\Support\CommandExecutor;

final readonly class SourceReleasePrerequisiteProbe implements PrerequisiteProbe
{
    public function __construct(
        private CommandExecutor $commands,
        private string $repository,
        private string $ref,
        private string $cloudSourceBranch,
        private string $binary = 'git',
    ) {}

    public function inspect(array $check): array
    {
        $result = $this->commands->run([
            $this->binary,
            'ls-remote',
            '--exit-code',
            $this->repository,
            'refs/tags/'.$this->ref,
            'refs/tags/'.$this->ref.'^{}',
            'refs/heads/'.$this->cloudSourceBranch,
        ]);

        if (! $result->successful() || trim($result->output) === '') {
            return $this->blocked('The immutable release tag could not be resolved.');
        }

        $references = $this->references($result->output);
        $tagHash = $references['refs/tags/'.$this->ref.'^{}']
            ?? $references['refs/tags/'.$this->ref]
            ?? null;
        $branchHash = $references['refs/heads/'.$this->cloudSourceBranch] ?? null;

        if (! is_string($tagHash)) {
            return $this->blocked('The immutable release tag did not resolve to a commit.');
        }

        if (! is_string($branchHash)) {
            return $this->blocked('The Laravel Cloud source branch could not be resolved.');
        }

        if (! hash_equals($tagHash, $branchHash)) {
            return $this->blocked('The Laravel Cloud source branch does not resolve to the immutable release commit.');
        }

        return [
            'status' => 'ready',
            'reason' => 'The Laravel Cloud source branch resolves to the immutable source release.',
            'remediation' => 'None.',
            'evidence' => [
                'ref' => $this->ref,
                'branch' => $this->cloudSourceBranch,
                'commit' => $tagHash,
            ],
        ];
    }

    /** @return array<string, string> */
    private function references(string $output): array
    {
        $references = [];

        foreach (preg_split('/\R/', trim($output)) ?: [] as $line) {
            $parts = preg_split('/\s+/', trim($line), 2);

            if (count($parts) === 2 && $parts[0] !== '' && $parts[1] !== '') {
                $references[$parts[1]] = $parts[0];
            }
        }

        return $references;
    }

    /** @return array{status: string, reason: string, remediation: string} */
    private function blocked(string $reason): array
    {
        return ['status' => 'blocked', 'reason' => $reason, 'remediation' => 'Publish or correct the exact release before deployment.'];
    }
}
