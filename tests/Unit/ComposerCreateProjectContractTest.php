<?php

it('creates the local environment and SQLite database during create-project', function (): void {
    $composer = json_decode(
        file_get_contents(dirname(__DIR__, 2).'/composer.json'),
        true,
        512,
        JSON_THROW_ON_ERROR,
    );

    $scripts = data_get($composer, 'scripts.post-root-package-install');

    expect($scripts)->toBe([
        '@php -r "file_exists(\'.env\') || copy(\'.env.example\', \'.env\');"',
        '@php -r "file_exists(\'database/database.sqlite\') || touch(\'database/database.sqlite\');"',
    ]);

    $projectPath = sys_get_temp_dir().'/x-payout-create-project-'.bin2hex(random_bytes(8));

    mkdir($projectPath.'/database', 0755, true);
    file_put_contents($projectPath.'/.env.example', "APP_NAME=x-PayOut\n");

    try {
        foreach ($scripts as $script) {
            $payload = substr($script, strlen('@php -r "'), -1);
            $payload = stripcslashes($payload);

            $previousDirectory = getcwd();
            chdir($projectPath);

            try {
                eval($payload);
            } finally {
                chdir($previousDirectory);
            }
        }

        expect($projectPath.'/.env')->toBeFile()
            ->and(file_get_contents($projectPath.'/.env'))->toBe("APP_NAME=x-PayOut\n")
            ->and($projectPath.'/database/database.sqlite')->toBeFile()
            ->and(filesize($projectPath.'/database/database.sqlite'))->toBe(0);

        file_put_contents($projectPath.'/.env', "APP_NAME=Preserved\n");
        file_put_contents($projectPath.'/database/database.sqlite', 'preserved');

        foreach ($scripts as $script) {
            $payload = substr($script, strlen('@php -r "'), -1);
            $payload = stripcslashes($payload);

            $previousDirectory = getcwd();
            chdir($projectPath);

            try {
                eval($payload);
            } finally {
                chdir($previousDirectory);
            }
        }

        expect(file_get_contents($projectPath.'/.env'))->toBe("APP_NAME=Preserved\n")
            ->and(file_get_contents($projectPath.'/database/database.sqlite'))->toBe('preserved');
    } finally {
        @unlink($projectPath.'/.env');
        @unlink($projectPath.'/.env.example');
        @unlink($projectPath.'/database/database.sqlite');
        @rmdir($projectPath.'/database');
        @rmdir($projectPath);
    }
});
