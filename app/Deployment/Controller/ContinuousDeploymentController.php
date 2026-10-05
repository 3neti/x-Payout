<?php

namespace App\Deployment\Controller;

use App\Deployment\State\DeploymentStateStore;
use Throwable;

final readonly class ContinuousDeploymentController
{
    /** @var list<DeploymentPhase> */
    private const PHASES = [
        DeploymentPhase::Preflight,
        DeploymentPhase::Foundation,
        DeploymentPhase::Secrets,
        DeploymentPhase::Runtime,
        DeploymentPhase::Deploy,
        DeploymentPhase::PreCommission,
        DeploymentPhase::Commission,
        DeploymentPhase::Domain,
        DeploymentPhase::Verify,
    ];

    public function __construct(
        private DeploymentStateStore $states,
        private ContinuousDeploymentAdapter $adapter,
        private string $adapterName,
    ) {}

    /**
     * @param  array<string, mixed>  $compiled
     * @return array<string, mixed>
     */
    public function run(string $statePath, array $compiled, DeploymentAuthority $authority): array
    {
        $fingerprint = $compiled['profile_fingerprint'] ?? null;

        if (! is_string($fingerprint) || preg_match('/^[a-f0-9]{64}$/', $fingerprint) !== 1) {
            throw new ContinuousDeploymentException('Compiled profile fingerprint is invalid.');
        }

        $state = $this->states->load($statePath) ?? $this->states->initial($fingerprint, $this->adapterName);

        if ($state['profile_fingerprint'] !== $fingerprint || $state['adapter'] !== $this->adapterName) {
            throw new ContinuousDeploymentException('Deployment state does not belong to this compiled profile and adapter.');
        }

        foreach (self::PHASES as $phase) {
            if (($state['checkpoints'][$phase->value] ?? null) === 'complete'
                && ! in_array($phase, [DeploymentPhase::Preflight, DeploymentPhase::Verify], true)) {
                continue;
            }

            if (! $authority->allows($phase)) {
                $state['checkpoints'][$phase->value] = 'skipped';
                $state = $this->states->write($statePath, $state);

                if ($phase === DeploymentPhase::Commission) {
                    return $state;
                }

                continue;
            }

            $state['checkpoints'][$phase->value] = 'pending';
            $state = $this->states->write($statePath, $state);

            try {
                $patch = $this->adapter->execute($phase, $compiled, $state, $authority);
                $state = $this->mergePatch($state, $patch);
                $state['checkpoints'][$phase->value] = 'complete';
                $state = $this->states->write($statePath, $state);
            } catch (Throwable $exception) {
                $state['checkpoints'][$phase->value] = 'failed';
                $this->states->write($statePath, $state);

                throw new ContinuousDeploymentException(
                    "Deployment phase [{$phase->value}] failed safely.",
                    previous: $exception,
                );
            }
        }

        return $state;
    }

    /**
     * @param  array<string, mixed>  $state
     * @param  array<string, mixed>  $patch
     * @return array<string, mixed>
     */
    private function mergePatch(array $state, array $patch): array
    {
        $allowed = ['resources', 'managed_secret_ids', 'last_deployment_id'];
        $unsupported = array_values(array_diff(array_keys($patch), $allowed));

        if ($unsupported !== []) {
            throw new ContinuousDeploymentException('Adapter returned unsupported state keys: '.implode(', ', $unsupported).'.');
        }

        foreach (['resources', 'managed_secret_ids'] as $key) {
            if (isset($patch[$key])) {
                if (! is_array($patch[$key])) {
                    throw new ContinuousDeploymentException("Adapter state patch [{$key}] must be a mapping.");
                }

                $state[$key] = array_merge($state[$key], $patch[$key]);
            }
        }

        if (array_key_exists('last_deployment_id', $patch)) {
            $state['last_deployment_id'] = $patch['last_deployment_id'];
        }

        return $state;
    }
}
