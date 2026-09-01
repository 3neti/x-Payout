<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;
use LBHurtado\Voucher\Contracts\GeneratesVouchers;
use LBHurtado\Voucher\Data\VoucherInstructionsData;
use LBHurtado\Voucher\Enums\VoucherType;
use LBHurtado\Voucher\Models\Voucher;
use LBHurtado\XChange\Services\OnboardingVoucherInstructionPolicy;

#[Signature('x-payout:commission {--json : Output machine-readable commissioning Pay Codes}')]
#[Description('Idempotently mint x-PayOut maker and checker onboarding invitation Pay Codes.')]
class CommissionXPayout extends Command
{
    public function handle(GeneratesVouchers $vouchers, OnboardingVoucherInstructionPolicy $onboardingPolicy): int
    {
        $issuer = $this->systemPrincipal();
        Auth::setUser($issuer);

        $issued = collect($this->roles())
            ->map(fn (array $role): array => $this->ensureInvitation($role, $issuer, $vouchers, $onboardingPolicy))
            ->values()
            ->all();

        if ((bool) $this->option('json')) {
            $this->line(json_encode([
                'schema' => 'x-payout.commissioning-invitations.v1',
                'count' => count($issued),
                'invitations' => $issued,
            ], JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES));
        } else {
            $this->info('x-PayOut commissioning invitation Pay Codes are ready.');
            $this->table(
                ['Role', 'Pay Code', 'Claim URL', 'Status'],
                collect($issued)->map(fn (array $invitation): array => [
                    $invitation['role'],
                    $invitation['code'],
                    $invitation['claim_url'],
                    $invitation['created'] ? 'created' : 'existing',
                ])->all(),
            );
        }

        return self::SUCCESS;
    }

    /** @return list<array{role: string, label: string, profile: string, prefix: string}> */
    private function roles(): array
    {
        return [
            [
                'role' => 'maker',
                'label' => 'x-PayOut Maker',
                'profile' => 'x-payout-maker',
                'prefix' => 'MAKE',
            ],
            [
                'role' => 'checker',
                'label' => 'x-PayOut Checker',
                'profile' => 'x-payout-checker',
                'prefix' => 'CHKR',
            ],
        ];
    }

    /** @param array{role: string, label: string, profile: string, prefix: string} $role */
    private function ensureInvitation(
        array $role,
        User $issuer,
        GeneratesVouchers $vouchers,
        OnboardingVoucherInstructionPolicy $onboardingPolicy,
    ): array {
        $existing = Voucher::query()
            ->get()
            ->first(fn (Voucher $voucher): bool => data_get(
                $voucher->metadata,
                'instructions.metadata.custom.x_payout_commissioning.role',
            ) === $role['role']);

        if ($existing instanceof Voucher) {
            return $this->invitationPayload($role['role'], (string) $existing->code, false);
        }

        $input = $onboardingPolicy->normalize([
            'cash' => [
                'amount' => 0,
                'currency' => 'PHP',
                'validation' => ['country' => 'PH'],
            ],
            'inputs' => ['fields' => []],
            'feedback' => [],
            'rider' => ['message' => $role['label'].' onboarding invitation'],
            'count' => 1,
            'prefix' => $role['prefix'],
            'mask' => '****',
            'voucher_type' => VoucherType::REDEEMABLE->value,
            'onboarding' => true,
            'claim' => [
                'outcomes' => [['key' => 'provider_disbursement']],
                'selection' => 'server',
                'consumption' => 'one_of',
                'default_outcome' => 'provider_disbursement',
                'onboarding' => [
                    'mode' => 'required',
                    'profile' => $role['profile'],
                ],
                'claimant' => ['mode' => 'unbound'],
                'profile' => 'voucher.claim.v1',
            ],
            'metadata' => [
                'flow_type' => 'commissioning_invitation',
                'issuer_id' => (string) $issuer->getKey(),
                'custom' => [
                    'x_payout_commissioning' => [
                        'role' => $role['role'],
                        'label' => $role['label'],
                        'profile' => $role['profile'],
                    ],
                ],
            ],
        ]);

        $voucher = $vouchers->handle(VoucherInstructionsData::from($input))->first();

        if (! $voucher instanceof Voucher) {
            $this->error('Unable to mint '.$role['label'].' invitation Pay Code.');

            return [
                'role' => $role['role'],
                'code' => null,
                'claim_url' => null,
                'created' => false,
            ];
        }

        return $this->invitationPayload($role['role'], (string) $voucher->code, true);
    }

    /** @return array{role: string, code: string|null, claim_url: string|null, created: bool} */
    private function invitationPayload(string $role, ?string $code, bool $created): array
    {
        return [
            'role' => $role,
            'code' => $code,
            'claim_url' => $code === null ? null : route('x-change.claim.show', ['code' => $code]),
            'created' => $created,
        ];
    }

    private function systemPrincipal(): User
    {
        $column = (string) config('x-change.payout.system_user_column', 'email');
        $identifier = (string) config('x-change.payout.system_user_id');

        return User::query()->where($column, $identifier)->firstOrFail();
    }
}
