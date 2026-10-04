<?php

use App\Deployment\Legacy\LegacySettingClassificationException;
use App\Deployment\Legacy\LegacySettingClassifier;

function legacyDeploymentPath(string $path): string
{
    return dirname(__DIR__, 4).'/'.ltrim($path, '/');
}

it('assigns every setting in both legacy worksheet shapes to one final owner', function (): void {
    $classifier = new LegacySettingClassifier;
    $contract = legacyDeploymentPath('ops/deployment/contracts/legacy-setting-classification.json');

    $control = $classifier->classifyFile(
        'deployment_control',
        legacyDeploymentPath('deployment.production.example'),
        $contract,
    );
    $secrets = $classifier->classifyFile(
        'secret_reentry',
        legacyDeploymentPath('deployment.production.secrets.example'),
        $contract,
    );

    expect($control)->not->toBeEmpty()
        ->and($control['DEPLOY_CLOUD_APPLICATION_ID'])->toBe([
            'category' => 'generated_state',
            'destination' => 'generated_platform_state',
        ])
        ->and($control['DEPLOY_CONFIRM_COMMISSIONING'])->toBe([
            'category' => 'operator_authority',
            'destination' => 'current_command_or_protected_environment',
        ])
        ->and($control['NETBANK_SOURCE_ACCOUNT_NUMBER'])->toBe([
            'category' => 'provider_driver',
            'destination' => 'instance.yaml:providers',
        ])
        ->and($control['APP_URL'])->toBe([
            'category' => 'portable_profile',
            'destination' => 'instance.yaml',
        ]);

    expect($secrets)->not->toBeEmpty()
        ->and($secrets['NETBANK_CLIENT_SECRET'])->toBe([
            'category' => 'private_secret',
            'destination' => 'secrets.env',
        ])
        ->and($secrets['PASSPORT_PRIVATE_KEY'])->toBe([
            'category' => 'private_secret',
            'destination' => 'secrets.env',
        ]);
});

it('rejects a setting without a final owner', function (): void {
    $classifier = new LegacySettingClassifier;
    $contract = json_decode(
        (string) file_get_contents(legacyDeploymentPath('ops/deployment/contracts/legacy-setting-classification.json')),
        true,
        flags: JSON_THROW_ON_ERROR,
    );

    expect(fn () => $classifier->classify('deployment_control', ['UNCLASSIFIED_SETTING'], $contract))
        ->toThrow(LegacySettingClassificationException::class, 'has no final owner');
});

it('migrates settings found only in the current ignored worksheet shapes', function (): void {
    $classifier = new LegacySettingClassifier;
    $contract = json_decode(
        (string) file_get_contents(legacyDeploymentPath('ops/deployment/contracts/legacy-setting-classification.json')),
        true,
        flags: JSON_THROW_ON_ERROR,
    );
    $providerSettings = [
        'NETBANK_BALANCE_ENDPOINT',
        'NETBANK_CLIENT_ALIAS',
        'NETBANK_DISBURSEMENT_ENDPOINT',
        'NETBANK_FUNDING_BALANCE_ENDPOINT',
        'NETBANK_FUNDING_CORPORATE_ACCOUNT_NUMBER',
        'NETBANK_FUNDING_STANDING_HMAC_KEY_ID',
        'NETBANK_FUNDING_VCA_ALIAS',
        'NETBANK_QR_ENDPOINT',
        'NETBANK_SENDER_CUSTOMER_ID',
        'NETBANK_SOURCE_ACCOUNT_NUMBER',
        'NETBANK_STATUS_ENDPOINT',
        'NETBANK_TOKEN_ENDPOINT',
    ];

    $control = $classifier->classify('deployment_control', $providerSettings, $contract);
    $secretReentry = $classifier->classify(
        'secret_reentry',
        [...$providerSettings, 'XCHANGE_INSTANCE_KEEPSAKE_PUBLIC_KEY'],
        $contract,
    );

    expect(array_unique(array_column($control, 'destination')))->toBe(['instance.yaml:providers'])
        ->and(array_unique(array_column(array_intersect_key($secretReentry, array_flip($providerSettings)), 'destination')))
        ->toBe(['instance.yaml:providers'])
        ->and($secretReentry['XCHANGE_INSTANCE_KEEPSAKE_PUBLIC_KEY']['destination'])
        ->toBe('instance.yaml');
});

it('rejects a setting with multiple final owners', function (): void {
    $classifier = new LegacySettingClassifier;
    $contract = json_decode(
        (string) file_get_contents(legacyDeploymentPath('ops/deployment/contracts/legacy-setting-classification.json')),
        true,
        flags: JSON_THROW_ON_ERROR,
    );
    $contract['categories']['duplicate'] = [
        'destination' => 'incorrect_destination',
        'sources' => ['deployment_control'],
        'patterns' => ['^APP_'],
    ];

    expect(fn () => $classifier->classify('deployment_control', ['APP_URL'], $contract))
        ->toThrow(LegacySettingClassificationException::class, 'has multiple final owners');
});

it('rejects duplicate keys in one worksheet', function (): void {
    $path = tempnam(sys_get_temp_dir(), 'x-payout-legacy-');
    file_put_contents($path, "APP_URL=https://first.example\nAPP_URL=https://second.example\n");

    expect(fn () => (new LegacySettingClassifier)->readKeys($path))
        ->toThrow(LegacySettingClassificationException::class, 'duplicate keys');

    unlink($path);
});
