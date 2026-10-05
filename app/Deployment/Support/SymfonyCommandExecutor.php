<?php

namespace App\Deployment\Support;

use Symfony\Component\Process\Process;

final readonly class SymfonyCommandExecutor implements CommandExecutor
{
    public function __construct(private float $timeoutSeconds = 60.0) {}

    public function run(array $command, ?string $input = null): CommandResult
    {
        $process = new Process($command);
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
