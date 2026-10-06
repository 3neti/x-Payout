<?php

namespace App\Providers;

use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configurePaymentNotifications();
        $this->configureDefaults();
    }

    /**
     * Configure the deployment-managed partner payment-event receiver.
     */
    protected function configurePaymentNotifications(): void
    {
        $partnerReference = config('payment_notifications.partner_reference');
        $receiverUrl = config('payment_notifications.receiver_url');
        $signingSecret = config('payment_notifications.signing_secret');

        if (! is_string($partnerReference) || $partnerReference === ''
            || ! is_string($receiverUrl) || $receiverUrl === ''
            || ! is_string($signingSecret) || strlen($signingSecret) < 32) {
            return;
        }

        $receiverHost = parse_url($receiverUrl, PHP_URL_HOST);

        if (! is_string($receiverHost) || $receiverHost === '') {
            return;
        }

        config()->set('x-change.partner_api.payment_events.receivers', array_replace(
            (array) config('x-change.partner_api.payment_events.receivers', []),
            [$partnerReference => ['url' => $receiverUrl, 'secret' => $signingSecret]],
        ));
        config()->set('x-change.partner_api.payment_events.allowed_hosts', array_values(array_unique([
            ...(array) config('x-change.partner_api.payment_events.allowed_hosts', []),
            strtolower($receiverHost),
        ])));
    }

    /**
     * Configure default behaviors for production-ready applications.
     */
    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        if (parse_url((string) config('app.url'), PHP_URL_SCHEME) === 'https') {
            URL::forceHttps();
        }

        Password::defaults(fn (): ?Password => app()->isProduction()
            ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
            : null,
        );
    }
}
