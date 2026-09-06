<?php

declare(strict_types=1);

it('keeps public package pages outside the authenticated application shell', function (): void {
    $source = file_get_contents(resource_path('js/app.ts'));

    expect($source)
        ->toContain('function isPublicPackagePage')
        ->toContain("'x-change/claim/'")
        ->toContain("'x-change/provisioning/'")
        ->toContain("'x-change/onboarding/'")
        ->toContain("'form-flow/'")
        ->toContain("'x-rider/'")
        ->toContain('case isPublicPackagePage(name):')
        ->toContain('return null;');
});

