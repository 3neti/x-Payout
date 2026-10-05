<?php

namespace App\Deployment\Controller;

use App\Deployment\Profiles\InstanceProfileCompiler;
use JsonException;

final readonly class CompiledArtifactLoader
{
    public function __construct(private InstanceProfileCompiler $compiler = new InstanceProfileCompiler) {}

    /** @return array<string, mixed> */
    public function load(string $directory): array
    {
        $verified = $this->compiler->verifyCompiledArtifacts($directory);
        $path = rtrim($directory, '/').'/compiled-instance.json';

        try {
            $compiled = json_decode((string) file_get_contents($path), true, flags: JSON_THROW_ON_ERROR);
        } catch (JsonException $exception) {
            throw new ContinuousDeploymentException('Compiled instance artifact is invalid.', previous: $exception);
        }

        if (! is_array($compiled)
            || ($compiled['profile_fingerprint'] ?? null) !== $verified['fingerprint']
            || ! is_array($compiled['profile'] ?? null)
            || ! is_array($compiled['runtime'] ?? null)) {
            throw new ContinuousDeploymentException('Compiled instance artifact is incomplete.');
        }

        return $compiled;
    }
}
