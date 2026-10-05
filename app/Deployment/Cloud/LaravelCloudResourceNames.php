<?php

namespace App\Deployment\Cloud;

use Illuminate\Support\Str;

final class LaravelCloudResourceNames
{
    /**
     * @param  array<string, mixed>  $profile
     * @return list<string>
     */
    public static function foundationCandidates(array $profile): array
    {
        $identity = $profile['identity']['id'] ?? null;

        if (! is_string($identity) || trim($identity) === '') {
            throw new LaravelCloudAdapterException('The deployment profile identity is missing.');
        }

        return array_values(array_unique([
            self::foundation($profile),
            $identity.'-production',
        ]));
    }

    /** @param array<string, mixed> $profile */
    public static function foundation(array $profile): string
    {
        $identity = $profile['identity']['id'] ?? null;

        if (! is_string($identity) || trim($identity) === '') {
            throw new LaravelCloudAdapterException('The deployment profile identity is missing.');
        }

        return Str::lower($identity).'-production';
    }
}
