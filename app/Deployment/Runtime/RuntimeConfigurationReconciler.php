<?php

namespace App\Deployment\Runtime;

final readonly class RuntimeConfigurationReconciler
{
    public function __construct(private RuntimeConfigurationTransport $transport) {}

    /**
     * @param  array<string, scalar>  $desired
     * @return array{changed: list<string>, unchanged: list<string>}
     */
    public function reconcile(string $environmentId, array $desired, bool $apply): array
    {
        $current = $this->transport->current($environmentId);
        $changed = [];
        $unchanged = [];
        ksort($desired, SORT_STRING);

        foreach ($desired as $key => $value) {
            $normalized = $this->normalize($value);

            if (($current[$key] ?? null) === $normalized) {
                $unchanged[] = $key;

                continue;
            }

            $changed[] = $key;

            if ($apply) {
                $this->transport->set($environmentId, $key, $normalized);
            }
        }

        return ['changed' => $changed, 'unchanged' => $unchanged];
    }

    private function normalize(string|int|float|bool $value): string
    {
        return match (true) {
            is_bool($value) => $value ? 'true' : 'false',
            default => (string) $value,
        };
    }
}
