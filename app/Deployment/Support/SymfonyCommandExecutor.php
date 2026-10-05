<?php

namespace App\Deployment\Support;

use Symfony\Component\Process\Process;

final readonly class SymfonyCommandExecutor implements CommandExecutor
{
    /** @param array<string, string> $environment */
    public function __construct(
        private float $timeoutSeconds = 60.0,
        private array $environment = [],
    ) {}

    public function run(array $command, ?string $input = null): CommandResult
    {
        $process = new Process($command, env: $this->environment);
        $process->setTimeout($this->timeoutSeconds);

        if ($input !== null) {
            $process->setInput($input);
        }

        $process->run();

        return new CommandResult(
            exitCode: $process->getExitCode() ?? 1,
            output: $process->getOutput(),
            errorOutput: $process->getErrorOutput(),
        );
    }
}
