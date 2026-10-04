<?php

use App\Deployment\Preflight\PreflightCatalog;
use App\Deployment\Profiles\InstanceProfileCompiler;

function preflightExamplePath(): string
{
    return dirname(__DIR__, 4).'/ops/deployment/examples/instance.yaml';
}

it('builds a deterministic value-free pre-mutation catalog', function (): void {
    $profile = (new InstanceProfileCompiler)->validate(preflightExamplePath());
    $fingerprint = str_repeat('a', 64);
    $catalog = (new PreflightCatalog)->build($profile, $fingerprint);
    $checkIds = array_column($catalog['checks'], 'id');

    expect($catalog['schema'])->toBe('x-payout.preflight-plan.v1')
        ->and($catalog['profile_fingerprint'])->toBe($fingerprint)
        ->and($catalog['policy']['mutation_allowed_only_when'])->toBe('all_required_checks_ready')
        ->and($checkIds)->toContain(
            'release.source',
            'public.dns',
            'storage.evidence',
            'providers.primary-payout.identity',
            'providers.primary-payout.capabilities',
            'integrations.sms',
            'commissioning.authority',
        )
        ->not->toContain('integrations.otp', 'integrations.kyc', 'partner-api.passport')
        ->and(array_unique(array_column($catalog['checks'], 'status')))->toBe(['pending'])
        ->and(array_unique(array_column($catalog['checks'], 'failure_policy')))->toBe(['block_before_mutation'])
        ->and(json_encode($catalog, JSON_THROW_ON_ERROR))->not->toContain('private-test-value');
});

it('includes enabled integrations without including their values', function (): void {
    $profile = (new InstanceProfileCompiler)->validate(preflightExamplePath());
    $profile['features']['partner_api'] = true;
    $profile['runtime']['XCHANGE_MOBILE_VERIFICATION_ENABLED'] = true;
    $profile['runtime']['LOCATION_HANDLER_MAP_PROVIDER'] = 'mapbox';
    $profile['secret_refs'] = array_merge($profile['secret_refs'], [
        'txtcmdr_api_token' => 'TXTCMDR_API_TOKEN',
        'hyperverge_app_id' => 'HYPERVERGE_APP_ID',
        'hyperverge_app_key' => 'HYPERVERGE_APP_KEY',
        'mapbox_token' => 'MAPBOX_TOKEN',
        'opencage_api_key' => 'OPENCAGE_API_KEY',
    ]);
    $catalog = (new PreflightCatalog)->build($profile, str_repeat('b', 64));
    $checks = collect($catalog['checks'])->keyBy('id');

    expect($checks->keys()->all())->toContain(
        'integrations.sms',
        'integrations.otp',
        'integrations.kyc',
        'integrations.maps',
        'integrations.geocoding',
        'partner-api.passport',
    )->and($checks['integrations.otp']['references'])->toBe(['TXTCMDR_API_TOKEN'])
        ->and($checks['providers.primary-payout.identity']['capabilities'])->toBe(['account', 'identity']);
});
