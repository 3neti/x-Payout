<?php

declare(strict_types=1);

it('uses the package-owned shell boundaries for public and cockpit pages', function (): void {
    $source = file_get_contents(resource_path('js/app.ts'));

    expect($source)
        ->toContain("import AppSidebarLayoutCockpit from '@/layouts/app/AppSidebarLayoutCockpit.vue';")
        ->toContain("case name.startsWith('x-change/claim/'):")
        ->toContain("case name.startsWith('x-change/public/'):")
        ->toContain("case name.startsWith('form-flow/'):")
        ->toContain('return null;')
        ->toContain("case name.startsWith('x-change/cockpit/'):")
        ->toContain('return AppSidebarLayoutCockpit;')
        ->not->toContain('function isPublicPackagePage');
});
