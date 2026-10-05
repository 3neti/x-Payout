<?php

namespace App\Deployment\Support;

interface CommandExecutor
{
    /** @param list<string> $command */
    public function run(array $command, ?string $input = null): CommandResult;
}
