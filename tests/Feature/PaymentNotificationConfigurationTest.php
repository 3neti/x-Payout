<?php

use App\Providers\AppServiceProvider;

it('adds one deployment-managed receiver without overriding package defaults', function (): void {
    config()->set('x-change.partner_api.payment_events', [
        'enabled' => false,
        'connection' => 'database',
        'queue' => 'partner-payments',
        'lock_store' => 'database',
        'receivers' => [
            'existing.partner' => [
                'url' => 'https://existing.example.test/payment-events',
                'secret' => str_repeat('x', 32),
            ],
        ],
        'allowed_hosts' => ['existing.example.test'],
    ]);
    config()->set('payment_notifications', [
        'partner_reference' => 'bpls.partner',
        'receiver_url' => 'https://bpls.example.test/integrations/x-change/payment-events',
        'signing_secret' => str_repeat('fixture-only-', 3),
    ]);

    $method = new ReflectionMethod(AppServiceProvider::class, 'configurePaymentNotifications');
    $method->invoke(new AppServiceProvider(app()));

    $settings = config('x-change.partner_api.payment_events');

    expect($settings['enabled'])->toBeFalse()
        ->and($settings['connection'])->toBe('database')
        ->and($settings['queue'])->toBe('partner-payments')
        ->and($settings['lock_store'])->toBe('database')
        ->and($settings['receivers']['bpls.partner']['url'])
        ->toBe('https://bpls.example.test/integrations/x-change/payment-events')
        ->and($settings['receivers'])->toHaveKey('existing.partner')
        ->and($settings['allowed_hosts'])
        ->toBe(['existing.example.test', 'bpls.example.test']);
});

it('fails closed when the receiver configuration is incomplete', function (array $configuration): void {
    config()->set('x-change.partner_api.payment_events.receivers', []);
    config()->set('x-change.partner_api.payment_events.allowed_hosts', []);
    config()->set('payment_notifications', $configuration);

    $method = new ReflectionMethod(AppServiceProvider::class, 'configurePaymentNotifications');
    $method->invoke(new AppServiceProvider(app()));

    expect(config('x-change.partner_api.payment_events.receivers'))->toBe([])
        ->and(config('x-change.partner_api.payment_events.allowed_hosts'))->toBe([]);
})->with([
    'missing partner reference' => [[
        'partner_reference' => null,
        'receiver_url' => 'https://bpls.example.test/events',
        'signing_secret' => str_repeat('x', 32),
    ]],
    'missing receiver URL' => [[
        'partner_reference' => 'bpls.partner',
        'receiver_url' => null,
        'signing_secret' => str_repeat('x', 32),
    ]],
    'invalid receiver URL' => [[
        'partner_reference' => 'bpls.partner',
        'receiver_url' => 'not-a-url',
        'signing_secret' => str_repeat('x', 32),
    ]],
    'short signing secret' => [[
        'partner_reference' => 'bpls.partner',
        'receiver_url' => 'https://bpls.example.test/events',
        'signing_secret' => 'too-short',
    ]],
]);

it('declares the durable worker queue and deployment-managed settings', function (): void {
    $manifest = file_get_contents(base_path('x-change.deployment.yaml'));
    $continuousAdapter = file_get_contents(app_path('Deployment/Cloud/LaravelCloudContinuousDeploymentAdapter.php'));

    expect($manifest)
        ->toContain('- XCHANGE_PARTNER_PAYMENT_EVENTS_ENABLED')
        ->toContain('- XCHANGE_BPLS_EVENT_PARTNER_REFERENCE')
        ->toContain('- XCHANGE_BPLS_EVENT_RECEIVER_URL')
        ->toContain('- XCHANGE_PAYMENT_EVENTS_SECRET')
        ->toContain('- partner-payments')
        ->and($continuousAdapter)
        ->toContain("'queue' => 'partner-payments,x-change-funding,x-change-feedback,default'");
});
