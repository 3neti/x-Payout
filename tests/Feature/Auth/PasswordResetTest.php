<?php

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Mail\Events\MessageSending;
use Illuminate\Mail\Transport\ResendTransport;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;
use Laravel\Fortify\Features;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->skipUnlessFortifyHas(Features::resetPasswords());
});

test('forgot PIN screen can be rendered', function () {
    $this->get(route('password.request'))->assertOk();
});

test('PIN reset link can be requested', function () {
    Notification::fake();
    $user = User::factory()->create();

    $this->post(route('password.email'), ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class);
});

test('PIN can be reset with a valid token', function () {
    Notification::fake();
    $user = User::factory()->create();
    $this->post(route('password.email'), ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user) {
        $response = $this->post(route('password.update'), [
            'token' => $notification->token,
            'email' => $user->email,
            'password' => '537537',
            'password_confirmation' => '537537',
        ]);

        $response->assertSessionHasNoErrors()->assertRedirect(route('login'));
        expect(Hash::check('537537', $user->fresh()->password))->toBeTrue();

        return true;
    });
});

test('PIN reset rejects non-numeric credentials', function () {
    Notification::fake();
    $user = User::factory()->create();
    $this->post(route('password.email'), ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user) {
        $this->post(route('password.update'), [
            'token' => $notification->token,
            'email' => $user->email,
            'password' => 'new-password',
            'password_confirmation' => 'new-password',
        ])->assertSessionHasErrors('password');

        return true;
    });
});

test('PIN reset reaches the configured Resend mailer with the account email', function () {
    config([
        'mail.default' => 'resend',
        'services.resend.key' => 're_test_placeholder',
        'mail.from.address' => 'admin@disburse.cash',
        'mail.from.name' => 'X-Change',
    ]);
    $user = User::factory()->create();
    $messages = [];

    Event::listen(MessageSending::class, function (MessageSending $event) use (&$messages): false {
        $messages[] = $event->message;

        return false;
    });

    expect(Mail::mailer()->getSymfonyTransport())->toBeInstanceOf(ResendTransport::class);

    $this->post(route('password.email'), ['email' => $user->email])
        ->assertSessionHasNoErrors()
        ->assertSessionHas('status', __('passwords.sent'));

    expect($messages)->toHaveCount(1);
    expect($messages[0]->getFrom()[0]->getAddress())->toBe('admin@disburse.cash');
    expect($messages[0]->getFrom()[0]->getName())->toBe('X-Change');
    expect($messages[0]->getTo()[0]->getAddress())->toBe($user->email);
    expect($messages[0]->getHtmlBody())->toContain('/reset-password/');
});
