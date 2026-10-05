<?php

use App\Deployment\Preflight\PassportContractPrerequisiteProbe;

function passportContractCheck(): array
{
    return [
        'id' => 'partner-api.passport',
        'transport' => 'oauth',
        'capabilities' => ['contract-pinning', 'oauth2'],
        'references' => [
            'PASSPORT_PRIVATE_KEY',
            'PASSPORT_PUBLIC_KEY',
            'XMCP_EXPECTED_PARTNER_CONTRACT_SHA256',
            'XMCP_EXPECTED_PARTNER_CONTRACT_VERSION',
        ],
    ];
}

it('validates declared Passport custody and contract pinning before deployment', function (): void {
    $probe = new PassportContractPrerequisiteProbe([
        'XMCP_EXPECTED_PARTNER_CONTRACT_VERSION' => '1.4.0',
        'XMCP_EXPECTED_PARTNER_CONTRACT_SHA256' => str_repeat('a', 64),
    ], [
        'PASSPORT_PRIVATE_KEY',
        'PASSPORT_PUBLIC_KEY',
    ]);

    expect($probe->inspect(passportContractCheck()))->toMatchArray([
        'status' => 'ready',
        'evidence' => [
            'adapter' => 'declared-passport-contract',
            'contract_version' => '1.4.0',
            'contract_hash' => str_repeat('a', 64),
            'capabilities' => ['contract-pinning', 'oauth2'],
        ],
    ]);
});

it('fails closed when Passport custody or contract pinning is incomplete', function (array $runtime, array $secrets): void {
    $probe = new PassportContractPrerequisiteProbe($runtime, $secrets);

    expect($probe->inspect(passportContractCheck()))->toMatchArray([
        'status' => 'blocked',
        'reason' => 'Passport signing custody or the pinned Partner MCP contract is incomplete.',
    ]);
})->with([
    'missing signing key' => [
        [
            'XMCP_EXPECTED_PARTNER_CONTRACT_VERSION' => '1.4.0',
            'XMCP_EXPECTED_PARTNER_CONTRACT_SHA256' => str_repeat('a', 64),
        ],
        ['PASSPORT_PUBLIC_KEY'],
    ],
    'invalid contract hash' => [
        [
            'XMCP_EXPECTED_PARTNER_CONTRACT_VERSION' => '1.4.0',
            'XMCP_EXPECTED_PARTNER_CONTRACT_SHA256' => 'not-a-hash',
        ],
        ['PASSPORT_PRIVATE_KEY', 'PASSPORT_PUBLIC_KEY'],
    ],
]);
