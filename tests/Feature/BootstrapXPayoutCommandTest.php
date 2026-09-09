<?php

use App\Console\Commands\BootstrapXPayout;

it('exposes and forwards the production force bootstrap option', function (): void {
    $source = file_get_contents((new ReflectionClass(BootstrapXPayout::class))->getFileName());

    expect($source)
        ->toContain('{--force : Force database migrations when bootstrapping in production}')
        ->toContain("'--force' => (bool) \$this->option('force')");
});
