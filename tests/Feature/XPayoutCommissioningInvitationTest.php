<?php

use LBHurtado\Voucher\Models\Voucher;
use LBHurtado\XChange\Services\Commissioning\CommissioningManifestRepository;

it('declares the billable commercial principal in the cleanroom manifest', function (): void {
    $manifest = app(CommissioningManifestRepository::class)
        ->load(base_path('commissioning/default.yaml'));

    expect(data_get($manifest, 'bootstrap.environment.defaults'))
        ->toMatchArray([
            'XCHANGE_COMMERCIAL_BILLING_MODE' => 'billable',
            'XCHANGE_COMMERCIAL_PRINCIPAL_REFERENCE' => 'commercial-primary',
            'XCHANGE_COMMERCIAL_PRINCIPAL_LEGAL_NAME' => '3neti R&D OPC',
            'XCHANGE_COMMERCIAL_PRINCIPAL_AUTHORIZATION_REFERENCE' => 'commissioning:x-payout:commercial-principal:v1',
            'XCHANGE_COMMERCIAL_REVENUE_ACCOUNT_SLUG' => 'commercial-revenue',
        ]);
});

it('mints maker and checker onboarding invitation pay codes idempotently', function (): void {
    config()->set('app.key', 'base64:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=');
    config()->set('x-change.payout.system_user_column', 'email');
    config()->set('x-change.payout.system_user_id', 'system@example.test');
    config()->set('x-change.payout.system_wallet_slug', 'platform');

    $manifest = xPayoutZeroFundedCommissioningManifest();

    $this->artisan('x-payout:commission', ['--manifest' => $manifest])
        ->expectsOutputToContain('x-PayOut commissioning invitation Pay Codes are ready.')
        ->assertSuccessful();

    $this->artisan('x-payout:commission', ['--manifest' => $manifest])->assertSuccessful();

    $vouchers = Voucher::query()->get();
    $roles = $vouchers
        ->map(fn (Voucher $voucher): mixed => data_get(
            $voucher->metadata,
            'instructions.metadata.custom.x_payout_commissioning.role',
        ))
        ->filter()
        ->sort()
        ->values();

    expect($vouchers)->toHaveCount(2)
        ->and($roles->all())->toBe(['checker', 'maker'])
        ->and($vouchers->every(fn (Voucher $voucher): bool => $voucher->redeemed_at === null))->toBeTrue()
        ->and($vouchers->every(fn (Voucher $voucher): bool => data_get($voucher->metadata, 'instructions.onboarding') === true))->toBeTrue()
        ->and($vouchers->every(fn (Voucher $voucher): bool => data_get($voucher->metadata, 'instructions.metadata.flow_type') === 'disbursable'))->toBeTrue()
        ->and($vouchers->every(fn (Voucher $voucher): bool => data_get($voucher->metadata, 'instructions.execution.driver') === 'onboarding_account_provisioning'))->toBeTrue();

    $vouchers->each(function (Voucher $voucher): void {
        expect(route('x-change.claim.show', ['code' => $voucher->code]))
            ->toContain('/x/claim/'.(string) $voucher->code);
    });
});

function xPayoutZeroFundedCommissioningManifest(): string
{
    $path = storage_path('framework/testing/x-payout-commissioning-'.str()->uuid().'.yaml');

    if (! is_dir(dirname($path))) {
        mkdir(dirname($path), 0755, true);
    }

    file_put_contents($path, implode("\n", [
        'extends: x-change://commissioning/manifests/x-payout.default.yaml',
        'onboarding:',
        '  invitation_amount: 0',
        '  currency: PHP',
        '',
    ]));

    return $path;
}
