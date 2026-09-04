<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use LBHurtado\XChange\Services\Commissioning\CommissioningManifestCommissioner;
use Throwable;

#[Signature('x-payout:commission {--manifest=commissioning/default.yaml : YAML manifest path, URL, or x-change:// URI} {--json : Output machine-readable commissioning Pay Codes}')]
#[Description('Idempotently mint x-PayOut maker and checker onboarding invitation Pay Codes.')]
class CommissionXPayout extends Command
{
    public function handle(CommissioningManifestCommissioner $commissioner): int
    {
        try {
            $result = $commissioner->commission((string) $this->option('manifest'));
        } catch (Throwable $exception) {
            if ((bool) $this->option('json')) {
                $this->line((string) json_encode([
                    'schema' => 'x-payout.commissioning-invitations.v1',
                    'success' => false,
                    'message' => $exception->getMessage(),
                ], JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES));
            } else {
                $this->error($exception->getMessage());
            }

            return self::FAILURE;
        }

        if ((bool) $this->option('json')) {
            $this->line((string) json_encode($result, JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES));
        } else {
            $this->info('x-PayOut commissioning invitation Pay Codes are ready.');
            $this->table(
                ['Role', 'Pay Code', 'Claim URL', 'Status'],
                collect($result['invitations'])->map(fn (array $invitation): array => [
                    $invitation['role'],
                    $invitation['code'],
                    $invitation['claim_url'],
                    $invitation['created'] ? 'created' : 'existing',
                ])->all(),
            );
        }

        return self::SUCCESS;
    }
}
