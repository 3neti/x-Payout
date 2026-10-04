<?php

use Symfony\Component\Yaml\Yaml;

function deploymentWorkflowPath(): string
{
    return dirname(__DIR__, 2).'/.github/workflows/deploy-x-payout.yml';
}

it('defines reusable and manually dispatched portable deployment entry points', function (): void {
    $workflow = Yaml::parseFile(deploymentWorkflowPath());

    expect($workflow['on'])->toHaveKeys(['workflow_call', 'workflow_dispatch'])
        ->and($workflow['permissions'])->toBe(['contents' => 'read'])
        ->and($workflow['concurrency']['cancel-in-progress'])->toBeFalse()
        ->and($workflow['jobs'])->toHaveKeys(['compile', 'deploy_to_checkpoint', 'commission']);
});

it('uses distinct protected environments and an explicit commissioning request', function (): void {
    $workflow = file_get_contents(deploymentWorkflowPath());

    expect($workflow)
        ->toContain('default: x-payout-production-deployment')
        ->toContain('default: x-payout-production-commissioning')
        ->toContain('if: ${{ inputs.execute_deployment && inputs.authorize_commissioning }}')
        ->toContain('name: ${{ inputs.commissioning_environment }}')
        ->toContain('DEPLOY_CONFIRM_COMMISSIONING=NO')
        ->toContain('DEPLOY_CONFIRM_COMMISSIONING=YES')
        ->toContain('DEPLOY_CONFIRM_DOMAIN_CUTOVER=NO')
        ->toContain('DEPLOY_CONFIRM_DNS_WRITE=NO');
});

it('compiles privately and uploads only sanitized build and evidence artifacts', function (): void {
    $workflow = file_get_contents(deploymentWorkflowPath());

    expect($workflow)
        ->toContain('chmod 0600 "${secrets_file}"')
        ->toContain('chmod 0600 "${private_instance_file}"')
        ->toContain("trap 'rm -f \"\${private_instance_file}\" \"\${secrets_file}\"' EXIT")
        ->toContain('PAYOUT_INSTANCE_YAML: ${{ secrets.PAYOUT_INSTANCE_YAML }}')
        ->toContain('bin/x-payout-profile verify --compiled=ops/deployment/build')
        ->toContain('workflow-compile-evidence.json')
        ->toContain('x-payout-deployment-evidence-')
        ->toContain('x-payout-commissioning-evidence-')
        ->not->toContain('x-payout-platform-state-')
        ->not->toContain('path: /tmp/secrets.env')
        ->not->toContain('path: /tmp/instance.yaml')
        ->not->toContain('path: /tmp/x-payout-platform.env')
        ->not->toContain('set -x')
        ->not->toContain('continue-on-error');
});

it('invokes the same compatibility controller at the safe checkpoint and protected ceremony', function (): void {
    $workflow = file_get_contents(deploymentWorkflowPath());

    expect(substr_count($workflow, 'scripts/deploy-production-cleanroom.sh'))->toBe(3)
        ->and($workflow)
        ->toContain('scripts/deploy-production-cleanroom.sh continuous')
        ->toContain('scripts/deploy-production-cleanroom.sh commission')
        ->toContain('scripts/deploy-production-cleanroom.sh verify')
        ->toContain('--compiled=ops/deployment/build')
        ->toContain('--control=/tmp/x-payout-platform.env');
});
