<?php

use App\Models\User;
use App\Providers\AppServiceProvider;
use Illuminate\Support\Facades\Gate;

it('grants collection only to an approved staff account', function (): void {
    $approved = User::factory()->create();
    $other = User::factory()->create();
    config()->set('stored_value_collection.operator_user_ids', [$approved->getKey()]);

    $method = new ReflectionMethod(AppServiceProvider::class, 'configureStoredValueCollectors');
    $method->invoke(new AppServiceProvider(app()));

    expect(Gate::forUser($approved)->allows('x-change.stored-value.collect'))->toBeTrue()
        ->and(Gate::forUser($other)->allows('x-change.stored-value.collect'))->toBeFalse();
});

it('does not commission collection without an operator allowlist', function (): void {
    config()->set('stored_value_collection.operator_user_ids', []);

    $method = new ReflectionMethod(AppServiceProvider::class, 'configureStoredValueCollectors');
    $method->invoke(new AppServiceProvider(app()));

    expect(Gate::forUser(User::factory()->create())->allows('x-change.stored-value.collect'))->toBeFalse();
});
