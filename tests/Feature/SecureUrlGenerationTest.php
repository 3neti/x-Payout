<?php

use App\Providers\AppServiceProvider;
use Illuminate\Support\Facades\Route;

it('generates secure redirects when the canonical application URL uses https', function (): void {
    config()->set('app.url', 'https://payout.example.test');

    (new AppServiceProvider(app()))->boot();

    Route::get('/secure-redirect-source', fn () => redirect()->route('home'));

    $response = $this->get('/secure-redirect-source');

    $response->assertRedirect();

    expect($response->headers->get('Location'))->toStartWith('https://');
});
