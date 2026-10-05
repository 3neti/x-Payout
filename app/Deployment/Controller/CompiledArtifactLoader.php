<?php

namespace App\Deployment\Controller;

use App\Deployment\Profiles\InstanceProfileCompiler;
use JsonException;
use Symfony\Component\Yaml\Exception\ParseException;
use Symfony\Component\Yaml\Yaml;

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

        try {
            $requiredSecrets = json_decode(
                (string) file_get_contents(rtrim($directory, '/').'/required-secrets.json'),
                true,
                flags: JSON_THROW_ON_ERROR,
            );
            $preflightPlan = json_decode(
                (string) file_get_contents(rtrim($directory, '/').'/preflight-plan.json'),
                true,
                flags: JSON_THROW_ON_ERROR,
            );
            $commissioning = Yaml::parseFile(
                rtrim($directory, '/').'/commissioning.yaml',
                Yaml::PARSE_EXCEPTION_ON_INVALID_TYPE,
            );
        } catch (JsonException|ParseException $exception) {
            throw new ContinuousDeploymentException('Compiled supporting artifacts are invalid.', previous: $exception);
        }

        if (! is_array($requiredSecrets) || ! is_array($preflightPlan) || ! is_array($commissioning)) {
            throw new ContinuousDeploymentException('Compiled supporting artifacts are incomplete.');
        }

        $compiled['required_secrets'] = $requiredSecrets['required'] ?? [];
        $compiled['commissioning_required_secrets'] = $requiredSecrets['commissioning_required'] ?? [];
        $compiled['preflight_plan'] = $preflightPlan;
        $compiled['commissioning'] = $commissioning;

        return $compiled;
    }
}
