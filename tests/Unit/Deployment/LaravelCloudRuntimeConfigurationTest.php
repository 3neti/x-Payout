<?php

use App\Deployment\Cloud\LaravelCloudRuntimeConfiguration;
use App\Deployment\Support\CommandExecutor;
use App\Deployment\Support\CommandResult;

it('reads Cloud runtime values and writes one named value', function (): void {
    $commands = new class implements CommandExecutor
    {
        public array $calls = [];

        public function run(array $command, ?string $input = null): CommandResult
        {
            $this->calls[] = $command;

            if (($command[1] ?? null) === 'environment:get' && in_array('--show-sensitive', $command, true)) {
                return new CommandResult(0, json_encode([
                    'environmentVariables' => [
                        ['key' => 'APP_ENV', 'value' => 'production'],
                        ['key' => 'APP_DEBUG', 'value' => 'false'],
                    ],
                ], JSON_THROW_ON_ERROR), '');
            }

            return new CommandResult(0, '', '');
        }
    };
    $runtime = new LaravelCloudRuntimeConfiguration($commands);

    expect($runtime->current('env-one'))->toBe([
        'APP_ENV' => 'production',
        'APP_DEBUG' => 'false',
    ]);

    $runtime->set('env-one', 'APP_NAME', 'x-PayOut');

    expect($commands->calls[0])->toBe([
        'cloud', 'environment:get', 'env-one', '--json', '--show-sensitive', '-n',
    ])->and($commands->calls[1])->toBe([
        'cloud', 'environment:variables', 'env-one', '--action=set', '--key=APP_NAME',
        '--value=x-PayOut', '--force', '-n',
    ]);
});
