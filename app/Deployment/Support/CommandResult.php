<?php

namespace App\Deployment\Support;

final readonly class CommandResult
{
    public function __construct(
        public int $exitCode,
        public string $output,
        public string $errorOutput,
    ) {}

    public function successful(): bool
    {
        return $this->exitCode === 0;
    }
}
