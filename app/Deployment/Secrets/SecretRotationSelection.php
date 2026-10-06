<?php

namespace App\Deployment\Secrets;

final readonly class SecretRotationSelection
{
    /**
     * @param  list<string>  $names
     */
    private function __construct(
        private bool $all,
        private array $names,
    ) {}

    public static function fromInput(?string $namedSecrets, bool $rotateAll): ?self
    {
        if ($namedSecrets !== null && $rotateAll) {
            throw new SecretReconciliationException(
                'Use either bare --rotate-secrets or --rotate-secrets=NAME,..., not both.',
            );
        }

        if ($namedSecrets === null) {
            return $rotateAll ? new self(true, []) : null;
        }

        $names = array_map('trim', explode(',', $namedSecrets));

        if (in_array('', $names, true)) {
            throw new SecretReconciliationException(
                'Named secret rotation requires a comma-delimited list of secret names.',
            );
        }

        foreach ($names as $name) {
            if (preg_match('/^[A-Z][A-Z0-9_]*$/', $name) !== 1) {
                throw new SecretReconciliationException(
                    'Named secret rotation contains an invalid secret name.',
                );
            }
        }

        if (count($names) !== count(array_unique($names))) {
            throw new SecretReconciliationException(
                'Named secret rotation contains a duplicate secret name.',
            );
        }

        sort($names, SORT_STRING);

        return new self(false, $names);
    }

    /**
     * @param  list<string>  $requiredNames
     * @return list<string>
     */
    public function resolve(array $requiredNames): array
    {
        $requiredNames = array_values(array_unique($requiredNames));
        sort($requiredNames, SORT_STRING);

        if ($this->all) {
            return $requiredNames;
        }

        $unknownNames = array_values(array_diff($this->names, $requiredNames));

        if ($unknownNames !== []) {
            throw new SecretReconciliationException(
                'Rotation requested for unused secrets: '.implode(', ', $unknownNames).'.',
            );
        }

        return $this->names;
    }
}
