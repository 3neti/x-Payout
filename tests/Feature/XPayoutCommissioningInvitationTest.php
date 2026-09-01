<?php

use LBHurtado\Voucher\Models\Voucher;

it('mints maker and checker onboarding invitation pay codes idempotently', function (): void {
    $this->artisan('x-change:system-principal:provision', [
        '--commit' => true,
        '--confirm-system-principal' => true,
        '--name' => 'x-PayOut System',
    ])->assertSuccessful();

    $this->artisan('x-payout:commission')
        ->expectsOutputToContain('x-PayOut commissioning invitation Pay Codes are ready.')
        ->assertSuccessful();

    $this->artisan('x-payout:commission')->assertSuccessful();

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
        ->and($vouchers->every(fn (Voucher $voucher): bool => data_get($voucher->metadata, 'instructions.execution.driver') === 'onboarding_account_provisioning'))->toBeTrue();
});
