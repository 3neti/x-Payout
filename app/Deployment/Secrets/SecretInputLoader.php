<?php

namespace App\Deployment\Secrets;

final class SecretInputLoader
{
    /**
     * @param  list<string>  $requiredNames
     * @return array<string, string>
     */
    public function load(string $path, array $requiredNames): array
    {
        if (! is_file($path) || ! is_readable($path)) {
            throw new SecretReconciliationException("Secrets file [{$path}] is not readable.");
        }

        $permissions = fileperms($path);

        if ($permissions !== false && ($permissions & 0077) !== 0) {
            throw new SecretReconciliationException('Secrets file must have permissions 0600 or stricter.');
        }

        $lines = file($path, FILE_IGNORE_NEW_LINES);

        if ($lines === false) {
            throw new SecretReconciliationException('Secrets file could not be read.');
        }

        $values = [];

        foreach ($lines as $lineNumber => $line) {
            $trimmed = trim($line);

            if ($trimmed === '' || str_starts_with($trimmed, '#')) {
                continue;
            }

            if (preg_match('/^([A-Z][A-Z0-9_]*)=(.*)$/', $line, $matches) !== 1) {
                throw new SecretReconciliationException('Secrets file line '.($lineNumber + 1).' is invalid.');
            }

            $name = $matches[1];

            if (array_key_exists($name, $values)) {
                throw new SecretReconciliationException("Secret [{$name}] is duplicated.");
            }

            if (trim($matches[2]) === '') {
                throw new SecretReconciliationException("Secret [{$name}] is empty.");
            }

            $values[$name] = $matches[2];
        }

        sort($requiredNames, SORT_STRING);
        $providedNames = array_keys($values);
        sort($providedNames, SORT_STRING);
        $unknown = array_values(array_diff($providedNames, $requiredNames));
        $missing = array_values(array_diff($requiredNames, $providedNames));

        if ($unknown !== []) {
            throw new SecretReconciliationException('Secrets file contains unused entries: '.implode(', ', $unknown).'.');
        }

        if ($missing !== []) {
            throw new SecretReconciliationException('Secrets file is missing required entries: '.implode(', ', $missing).'.');
        }

        ksort($values, SORT_STRING);

        return $values;
    }
}
