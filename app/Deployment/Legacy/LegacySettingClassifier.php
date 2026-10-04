<?php

namespace App\Deployment\Legacy;

use JsonException;

final class LegacySettingClassifier
{
    /**
     * @return array<string, array{category: string, destination: string}>
     */
    public function classifyFile(string $source, string $path, string $contractPath): array
    {
        return $this->classify($source, $this->readKeys($path), $this->readContract($contractPath));
    }

    /**
     * @param  list<string>  $keys
     * @param  array<string, mixed>  $contract
     * @return array<string, array{category: string, destination: string}>
     */
    public function classify(string $source, array $keys, array $contract): array
    {
        $sources = $contract['sources'] ?? null;
        $categories = $contract['categories'] ?? null;

        if (($contract['schema'] ?? null) !== 'x-payout.legacy-setting-classification.v2'
            || ! is_array($sources)
            || ! array_key_exists($source, $sources)
            || ! is_array($categories)) {
            throw new LegacySettingClassificationException('Legacy setting classification contract is invalid.');
        }

        $classified = [];

        foreach ($keys as $key) {
            $matches = [];

            foreach ($categories as $category => $definition) {
                if (! is_string($category) || ! is_array($definition)) {
                    throw new LegacySettingClassificationException('Legacy setting classification category is invalid.');
                }

                $categorySources = $definition['sources'] ?? null;
                $destination = $definition['destination'] ?? null;
                $patterns = $definition['patterns'] ?? null;

                if (! is_array($categorySources)
                    || ! is_string($destination)
                    || $destination === ''
                    || ! is_array($patterns)) {
                    throw new LegacySettingClassificationException("Legacy setting classification category [{$category}] is invalid.");
                }

                if (! in_array($source, $categorySources, true)) {
                    continue;
                }

                foreach ($patterns as $pattern) {
                    if (! is_string($pattern) || @preg_match('/'.$pattern.'/', '') === false) {
                        throw new LegacySettingClassificationException("Legacy setting classification pattern in [{$category}] is invalid.");
                    }

                    if (preg_match('/'.$pattern.'/', $key) === 1) {
                        $matches[$category] = $destination;
                        break;
                    }
                }
            }

            if ($matches === []) {
                throw new LegacySettingClassificationException("Legacy setting [{$key}] from [{$source}] has no final owner.");
            }

            if (count($matches) !== 1) {
                throw new LegacySettingClassificationException(
                    "Legacy setting [{$key}] from [{$source}] has multiple final owners: ".implode(', ', array_keys($matches)).'.',
                );
            }

            $category = array_key_first($matches);
            $classified[$key] = [
                'category' => $category,
                'destination' => $matches[$category],
            ];
        }

        ksort($classified, SORT_STRING);

        return $classified;
    }

    /** @return list<string> */
    public function readKeys(string $path): array
    {
        if (! is_file($path) || ! is_readable($path)) {
            throw new LegacySettingClassificationException("Legacy settings file [{$path}] is not readable.");
        }

        $contents = (string) file_get_contents($path);
        preg_match_all('/^([A-Z][A-Z0-9_]*)=/m', $contents, $matches);
        $keys = $matches[1];

        if ($keys === []) {
            throw new LegacySettingClassificationException("Legacy settings file [{$path}] contains no settings.");
        }

        $duplicates = array_keys(array_filter(array_count_values($keys), static fn (int $count): bool => $count > 1));

        if ($duplicates !== []) {
            throw new LegacySettingClassificationException(
                'Legacy settings file contains duplicate keys: '.implode(', ', $duplicates).'.',
            );
        }

        return array_values($keys);
    }

    /** @return array<string, mixed> */
    private function readContract(string $path): array
    {
        if (! is_file($path) || ! is_readable($path)) {
            throw new LegacySettingClassificationException("Legacy setting classification contract [{$path}] is not readable.");
        }

        try {
            $contract = json_decode((string) file_get_contents($path), true, flags: JSON_THROW_ON_ERROR);
        } catch (JsonException $exception) {
            throw new LegacySettingClassificationException(
                'Legacy setting classification contract is not valid JSON.',
                previous: $exception,
            );
        }

        if (! is_array($contract)) {
            throw new LegacySettingClassificationException('Legacy setting classification contract must be an object.');
        }

        return $contract;
    }
}
