<?php

namespace App\Deployment\Verification;

use App\Deployment\Cloud\LaravelCloudClient;
use App\Deployment\Controller\ContinuousDeploymentAdapter;
use App\Deployment\Controller\ContinuousDeploymentException;
use App\Deployment\Controller\DeploymentAuthority;
use App\Deployment\Controller\DeploymentPhase;
use App\Deployment\Evidence\DeploymentEvidenceJournal;
use App\Deployment\State\DeploymentStateStore;
use App\Deployment\State\ResourceDiscovery;

final readonly class LaravelCloudPreCommissionVerifier
{
    /** @var list<string> */
    private const REQUIRED_RESOURCES = [
        'application_id',
        'environment_id',
        'instance_id',
        'database_cluster_id',
        'database_id',
        'cache_id',
        'worker_process_id',
    ];

    public function __construct(
        private ResourceDiscovery $discovery,
        private ContinuousDeploymentAdapter $adapter,
        private LaravelCloudClient $cloud,
        private DeploymentEvidenceJournal $evidence,
        private DeploymentStateStore $states,
        private string $adapterName = 'laravel-cloud',
    ) {}

    /**
     * @param  array<string, mixed>  $compiled
     * @return array<string, mixed>
     */
    public function verify(array $compiled): array
    {
        $fingerprint = $compiled['profile_fingerprint'] ?? null;
        $profile = $compiled['profile'] ?? null;

        if (! is_string($fingerprint)
            || preg_match('/^[a-f0-9]{64}$/', $fingerprint) !== 1
            || ! is_array($profile)) {
            throw new ContinuousDeploymentException('Verified compiled profile metadata is invalid.');
        }

        $discovered = $this->discovery->discover($profile);
        $missingResources = array_values(array_intersect(
            self::REQUIRED_RESOURCES,
            $discovered['missing'],
        ));

        if ($missingResources !== []) {
            throw new ContinuousDeploymentException(
                'Portable pre-commission verification is missing resources: '.implode(', ', $missingResources).'.',
            );
        }

        $requiredSecretNames = array_values(array_unique(array_merge(
            $compiled['required_secrets'] ?? [],
            $compiled['commissioning_required_secrets'] ?? [],
        )));
        $missingSecretNames = array_values(array_diff(
            $requiredSecretNames,
            array_keys($discovered['managed_secret_ids']),
        ));

        if ($missingSecretNames !== []) {
            sort($missingSecretNames, SORT_STRING);

            throw new ContinuousDeploymentException(
                'Portable pre-commission verification is missing managed secrets: '
                .implode(', ', $missingSecretNames).'.',
            );
        }

        $state = $this->states->initial($fingerprint, $this->adapterName);
        $state['resources'] = $discovered['resources'];
        $state['managed_secret_ids'] = $discovered['managed_secret_ids'];
        $authority = new DeploymentAuthority;

        $this->adapter->execute(DeploymentPhase::Preflight, $compiled, $state, $authority);
        $state['checkpoints']['preflight'] = 'complete';

        $deployment = $this->exactDeployment($compiled, $state);
        $state['last_deployment_id'] = $deployment['id'];
        $state['checkpoints']['deploy'] = 'complete';
        $this->evidence->record('deployment', [
            'deployment_id' => $deployment['id'],
            'release_ref' => $profile['release']['ref'],
            'cloud_source_branch' => $profile['release']['cloud_source_branch'],
            'commit' => $deployment['commit'],
            'disposition' => 'verified_existing',
            'status' => 'succeeded',
        ]);

        $this->adapter->execute(DeploymentPhase::PreCommission, $compiled, $state, $authority);
        $state['checkpoints']['pre-commission'] = 'complete';

        return $state;
    }

    /**
     * @param  array<string, mixed>  $compiled
     * @param  array<string, mixed>  $state
     * @return array{id: string, commit: string}
     */
    private function exactDeployment(array $compiled, array $state): array
    {
        $releaseEvidence = null;

        foreach ($this->evidence->all()['preflight']['results'] ?? [] as $result) {
            if (($result['id'] ?? null) === 'release.source'
                && ($result['status'] ?? null) === 'ready') {
                $releaseEvidence = $result['evidence'] ?? null;
                break;
            }
        }

        $commit = is_array($releaseEvidence) ? ($releaseEvidence['commit'] ?? null) : null;
        $branch = $compiled['profile']['release']['cloud_source_branch'] ?? null;
        $environmentId = $state['resources']['environment_id'] ?? null;

        if (! is_string($commit)
            || preg_match('/^[a-f0-9]{40}$/', $commit) !== 1
            || ! is_string($branch)
            || $branch === ''
            || ! is_string($environmentId)
            || $environmentId === '') {
            throw new ContinuousDeploymentException('Exact release evidence is incomplete.');
        }

        $deployments = $this->cloud->json('deployment:list', [$environmentId]);
        $matches = array_values(array_filter(
            array_is_list($deployments) ? $deployments : [],
            static fn (array $deployment): bool => ($deployment['status'] ?? null) === 'deployment.succeeded'
                && ($deployment['branchName'] ?? null) === $branch
                && ($deployment['commitHash'] ?? null) === $commit,
        ));

        if (count($matches) !== 1) {
            throw new ContinuousDeploymentException(
                $matches === []
                    ? 'The exact successful deployment was not found.'
                    : 'Exact successful deployment verification is ambiguous.',
            );
        }

        $identifier = $matches[0]['id'] ?? null;

        if (! is_string($identifier) || $identifier === '') {
            throw new ContinuousDeploymentException('The exact successful deployment has no identity.');
        }

        return ['id' => $identifier, 'commit' => $commit];
    }
}
