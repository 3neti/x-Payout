import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
*/
const show9e78c2ca97790a0a1fe2a9ead47315ae = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show9e78c2ca97790a0a1fe2a9ead47315ae.url(options),
    method: 'get',
})

show9e78c2ca97790a0a1fe2a9ead47315ae.definition = {
    methods: ["get","head"],
    url: '/x/operations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
*/
show9e78c2ca97790a0a1fe2a9ead47315ae.url = (options?: RouteQueryOptions) => {
    return show9e78c2ca97790a0a1fe2a9ead47315ae.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
*/
show9e78c2ca97790a0a1fe2a9ead47315ae.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show9e78c2ca97790a0a1fe2a9ead47315ae.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
*/
show9e78c2ca97790a0a1fe2a9ead47315ae.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show9e78c2ca97790a0a1fe2a9ead47315ae.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
*/
const show9e78c2ca97790a0a1fe2a9ead47315aeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show9e78c2ca97790a0a1fe2a9ead47315ae.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
*/
show9e78c2ca97790a0a1fe2a9ead47315aeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show9e78c2ca97790a0a1fe2a9ead47315ae.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
*/
show9e78c2ca97790a0a1fe2a9ead47315aeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show9e78c2ca97790a0a1fe2a9ead47315ae.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show9e78c2ca97790a0a1fe2a9ead47315ae.form = show9e78c2ca97790a0a1fe2a9ead47315aeForm
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
const show8d4849e1927601dcd3eb717bb149a53b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show8d4849e1927601dcd3eb717bb149a53b.url(options),
    method: 'get',
})

show8d4849e1927601dcd3eb717bb149a53b.definition = {
    methods: ["get","head"],
    url: '/x/checkout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
show8d4849e1927601dcd3eb717bb149a53b.url = (options?: RouteQueryOptions) => {
    return show8d4849e1927601dcd3eb717bb149a53b.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
show8d4849e1927601dcd3eb717bb149a53b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show8d4849e1927601dcd3eb717bb149a53b.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
show8d4849e1927601dcd3eb717bb149a53b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show8d4849e1927601dcd3eb717bb149a53b.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
const show8d4849e1927601dcd3eb717bb149a53bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8d4849e1927601dcd3eb717bb149a53b.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
show8d4849e1927601dcd3eb717bb149a53bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8d4849e1927601dcd3eb717bb149a53b.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
show8d4849e1927601dcd3eb717bb149a53bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8d4849e1927601dcd3eb717bb149a53b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show8d4849e1927601dcd3eb717bb149a53b.form = show8d4849e1927601dcd3eb717bb149a53bForm

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `show['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const show = {
    '/x/operations': show9e78c2ca97790a0a1fe2a9ead47315ae,
    '/x/checkout': show8d4849e1927601dcd3eb717bb149a53b,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/operations/unlock'
*/
const unlock8cf930f73258ea0ce143a95801169bff = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unlock8cf930f73258ea0ce143a95801169bff.url(options),
    method: 'post',
})

unlock8cf930f73258ea0ce143a95801169bff.definition = {
    methods: ["post"],
    url: '/x/operations/unlock',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/operations/unlock'
*/
unlock8cf930f73258ea0ce143a95801169bff.url = (options?: RouteQueryOptions) => {
    return unlock8cf930f73258ea0ce143a95801169bff.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/operations/unlock'
*/
unlock8cf930f73258ea0ce143a95801169bff.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unlock8cf930f73258ea0ce143a95801169bff.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/operations/unlock'
*/
const unlock8cf930f73258ea0ce143a95801169bffForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unlock8cf930f73258ea0ce143a95801169bff.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/operations/unlock'
*/
unlock8cf930f73258ea0ce143a95801169bffForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unlock8cf930f73258ea0ce143a95801169bff.url(options),
    method: 'post',
})

unlock8cf930f73258ea0ce143a95801169bff.form = unlock8cf930f73258ea0ce143a95801169bffForm
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/checkout/unlock'
*/
const unlock1fe79d30c06293506003b0dae9d3b1c8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unlock1fe79d30c06293506003b0dae9d3b1c8.url(options),
    method: 'post',
})

unlock1fe79d30c06293506003b0dae9d3b1c8.definition = {
    methods: ["post"],
    url: '/x/checkout/unlock',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/checkout/unlock'
*/
unlock1fe79d30c06293506003b0dae9d3b1c8.url = (options?: RouteQueryOptions) => {
    return unlock1fe79d30c06293506003b0dae9d3b1c8.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/checkout/unlock'
*/
unlock1fe79d30c06293506003b0dae9d3b1c8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unlock1fe79d30c06293506003b0dae9d3b1c8.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/checkout/unlock'
*/
const unlock1fe79d30c06293506003b0dae9d3b1c8Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unlock1fe79d30c06293506003b0dae9d3b1c8.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/checkout/unlock'
*/
unlock1fe79d30c06293506003b0dae9d3b1c8Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unlock1fe79d30c06293506003b0dae9d3b1c8.url(options),
    method: 'post',
})

unlock1fe79d30c06293506003b0dae9d3b1c8.form = unlock1fe79d30c06293506003b0dae9d3b1c8Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `unlock['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const unlock = {
    '/x/operations/unlock': unlock8cf930f73258ea0ce143a95801169bff,
    '/x/checkout/unlock': unlock1fe79d30c06293506003b0dae9d3b1c8,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/operations/lock'
*/
const lockae7bab6c7427f6d3747ddaa785d3cfb2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockae7bab6c7427f6d3747ddaa785d3cfb2.url(options),
    method: 'post',
})

lockae7bab6c7427f6d3747ddaa785d3cfb2.definition = {
    methods: ["post"],
    url: '/x/operations/lock',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/operations/lock'
*/
lockae7bab6c7427f6d3747ddaa785d3cfb2.url = (options?: RouteQueryOptions) => {
    return lockae7bab6c7427f6d3747ddaa785d3cfb2.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/operations/lock'
*/
lockae7bab6c7427f6d3747ddaa785d3cfb2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockae7bab6c7427f6d3747ddaa785d3cfb2.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/operations/lock'
*/
const lockae7bab6c7427f6d3747ddaa785d3cfb2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockae7bab6c7427f6d3747ddaa785d3cfb2.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/operations/lock'
*/
lockae7bab6c7427f6d3747ddaa785d3cfb2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockae7bab6c7427f6d3747ddaa785d3cfb2.url(options),
    method: 'post',
})

lockae7bab6c7427f6d3747ddaa785d3cfb2.form = lockae7bab6c7427f6d3747ddaa785d3cfb2Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/checkout/lock'
*/
const lock56ba41fa16fb66b14d113a0bb9cba9fd = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lock56ba41fa16fb66b14d113a0bb9cba9fd.url(options),
    method: 'post',
})

lock56ba41fa16fb66b14d113a0bb9cba9fd.definition = {
    methods: ["post"],
    url: '/x/checkout/lock',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/checkout/lock'
*/
lock56ba41fa16fb66b14d113a0bb9cba9fd.url = (options?: RouteQueryOptions) => {
    return lock56ba41fa16fb66b14d113a0bb9cba9fd.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/checkout/lock'
*/
lock56ba41fa16fb66b14d113a0bb9cba9fd.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lock56ba41fa16fb66b14d113a0bb9cba9fd.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/checkout/lock'
*/
const lock56ba41fa16fb66b14d113a0bb9cba9fdForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lock56ba41fa16fb66b14d113a0bb9cba9fd.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/checkout/lock'
*/
lock56ba41fa16fb66b14d113a0bb9cba9fdForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lock56ba41fa16fb66b14d113a0bb9cba9fd.url(options),
    method: 'post',
})

lock56ba41fa16fb66b14d113a0bb9cba9fd.form = lock56ba41fa16fb66b14d113a0bb9cba9fdForm

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `lock['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const lock = {
    '/x/operations/lock': lockae7bab6c7427f6d3747ddaa785d3cfb2,
    '/x/checkout/lock': lock56ba41fa16fb66b14d113a0bb9cba9fd,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/operations/view/{token}'
*/
const viewer4d6ef4e18b3a8ac7541e0b86838cfc62 = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewer4d6ef4e18b3a8ac7541e0b86838cfc62.url(args, options),
    method: 'get',
})

viewer4d6ef4e18b3a8ac7541e0b86838cfc62.definition = {
    methods: ["get","head"],
    url: '/x/operations/view/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/operations/view/{token}'
*/
viewer4d6ef4e18b3a8ac7541e0b86838cfc62.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return viewer4d6ef4e18b3a8ac7541e0b86838cfc62.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/operations/view/{token}'
*/
viewer4d6ef4e18b3a8ac7541e0b86838cfc62.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewer4d6ef4e18b3a8ac7541e0b86838cfc62.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/operations/view/{token}'
*/
viewer4d6ef4e18b3a8ac7541e0b86838cfc62.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: viewer4d6ef4e18b3a8ac7541e0b86838cfc62.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/operations/view/{token}'
*/
const viewer4d6ef4e18b3a8ac7541e0b86838cfc62Form = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewer4d6ef4e18b3a8ac7541e0b86838cfc62.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/operations/view/{token}'
*/
viewer4d6ef4e18b3a8ac7541e0b86838cfc62Form.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewer4d6ef4e18b3a8ac7541e0b86838cfc62.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/operations/view/{token}'
*/
viewer4d6ef4e18b3a8ac7541e0b86838cfc62Form.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewer4d6ef4e18b3a8ac7541e0b86838cfc62.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

viewer4d6ef4e18b3a8ac7541e0b86838cfc62.form = viewer4d6ef4e18b3a8ac7541e0b86838cfc62Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
const viewer1c1dd6d5463ac84f1828857461fe31e2 = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewer1c1dd6d5463ac84f1828857461fe31e2.url(args, options),
    method: 'get',
})

viewer1c1dd6d5463ac84f1828857461fe31e2.definition = {
    methods: ["get","head"],
    url: '/x/checkout/view/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
viewer1c1dd6d5463ac84f1828857461fe31e2.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return viewer1c1dd6d5463ac84f1828857461fe31e2.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
viewer1c1dd6d5463ac84f1828857461fe31e2.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewer1c1dd6d5463ac84f1828857461fe31e2.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
viewer1c1dd6d5463ac84f1828857461fe31e2.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: viewer1c1dd6d5463ac84f1828857461fe31e2.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
const viewer1c1dd6d5463ac84f1828857461fe31e2Form = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewer1c1dd6d5463ac84f1828857461fe31e2.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
viewer1c1dd6d5463ac84f1828857461fe31e2Form.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewer1c1dd6d5463ac84f1828857461fe31e2.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
viewer1c1dd6d5463ac84f1828857461fe31e2Form.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewer1c1dd6d5463ac84f1828857461fe31e2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

viewer1c1dd6d5463ac84f1828857461fe31e2.form = viewer1c1dd6d5463ac84f1828857461fe31e2Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `viewer['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const viewer = {
    '/x/operations/view/{token}': viewer4d6ef4e18b3a8ac7541e0b86838cfc62,
    '/x/checkout/view/{token}': viewer1c1dd6d5463ac84f1828857461fe31e2,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/operations/{checkout}/retry'
*/
const retry4f7b669a9a3b6667d9810b9b949f9c67 = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry4f7b669a9a3b6667d9810b9b949f9c67.url(args, options),
    method: 'post',
})

retry4f7b669a9a3b6667d9810b9b949f9c67.definition = {
    methods: ["post"],
    url: '/x/operations/{checkout}/retry',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/operations/{checkout}/retry'
*/
retry4f7b669a9a3b6667d9810b9b949f9c67.url = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { checkout: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { checkout: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            checkout: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        checkout: typeof args.checkout === 'object'
        ? args.checkout.reference
        : args.checkout,
    }

    return retry4f7b669a9a3b6667d9810b9b949f9c67.definition.url
            .replace('{checkout}', parsedArgs.checkout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/operations/{checkout}/retry'
*/
retry4f7b669a9a3b6667d9810b9b949f9c67.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry4f7b669a9a3b6667d9810b9b949f9c67.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/operations/{checkout}/retry'
*/
const retry4f7b669a9a3b6667d9810b9b949f9c67Form = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry4f7b669a9a3b6667d9810b9b949f9c67.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/operations/{checkout}/retry'
*/
retry4f7b669a9a3b6667d9810b9b949f9c67Form.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry4f7b669a9a3b6667d9810b9b949f9c67.url(args, options),
    method: 'post',
})

retry4f7b669a9a3b6667d9810b9b949f9c67.form = retry4f7b669a9a3b6667d9810b9b949f9c67Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/checkout/{checkout}/retry'
*/
const retry5812a563e7710a5eca249d742885b25e = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry5812a563e7710a5eca249d742885b25e.url(args, options),
    method: 'post',
})

retry5812a563e7710a5eca249d742885b25e.definition = {
    methods: ["post"],
    url: '/x/checkout/{checkout}/retry',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/checkout/{checkout}/retry'
*/
retry5812a563e7710a5eca249d742885b25e.url = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { checkout: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { checkout: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            checkout: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        checkout: typeof args.checkout === 'object'
        ? args.checkout.reference
        : args.checkout,
    }

    return retry5812a563e7710a5eca249d742885b25e.definition.url
            .replace('{checkout}', parsedArgs.checkout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/checkout/{checkout}/retry'
*/
retry5812a563e7710a5eca249d742885b25e.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry5812a563e7710a5eca249d742885b25e.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/checkout/{checkout}/retry'
*/
const retry5812a563e7710a5eca249d742885b25eForm = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry5812a563e7710a5eca249d742885b25e.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/checkout/{checkout}/retry'
*/
retry5812a563e7710a5eca249d742885b25eForm.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry5812a563e7710a5eca249d742885b25e.url(args, options),
    method: 'post',
})

retry5812a563e7710a5eca249d742885b25e.form = retry5812a563e7710a5eca249d742885b25eForm

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `retry['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const retry = {
    '/x/operations/{checkout}/retry': retry4f7b669a9a3b6667d9810b9b949f9c67,
    '/x/checkout/{checkout}/retry': retry5812a563e7710a5eca249d742885b25e,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::openRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/operations/{checkout}/refund'
*/
const openRefund987b1703f7f7acc57d41c95719a97fb7 = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: openRefund987b1703f7f7acc57d41c95719a97fb7.url(args, options),
    method: 'post',
})

openRefund987b1703f7f7acc57d41c95719a97fb7.definition = {
    methods: ["post"],
    url: '/x/operations/{checkout}/refund',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::openRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/operations/{checkout}/refund'
*/
openRefund987b1703f7f7acc57d41c95719a97fb7.url = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { checkout: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { checkout: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            checkout: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        checkout: typeof args.checkout === 'object'
        ? args.checkout.reference
        : args.checkout,
    }

    return openRefund987b1703f7f7acc57d41c95719a97fb7.definition.url
            .replace('{checkout}', parsedArgs.checkout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::openRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/operations/{checkout}/refund'
*/
openRefund987b1703f7f7acc57d41c95719a97fb7.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: openRefund987b1703f7f7acc57d41c95719a97fb7.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::openRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/operations/{checkout}/refund'
*/
const openRefund987b1703f7f7acc57d41c95719a97fb7Form = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: openRefund987b1703f7f7acc57d41c95719a97fb7.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::openRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/operations/{checkout}/refund'
*/
openRefund987b1703f7f7acc57d41c95719a97fb7Form.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: openRefund987b1703f7f7acc57d41c95719a97fb7.url(args, options),
    method: 'post',
})

openRefund987b1703f7f7acc57d41c95719a97fb7.form = openRefund987b1703f7f7acc57d41c95719a97fb7Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::openRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/checkout/{checkout}/refund'
*/
const openRefundfacf08d77e5f0daf7bee60ace140aa7e = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: openRefundfacf08d77e5f0daf7bee60ace140aa7e.url(args, options),
    method: 'post',
})

openRefundfacf08d77e5f0daf7bee60ace140aa7e.definition = {
    methods: ["post"],
    url: '/x/checkout/{checkout}/refund',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::openRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/checkout/{checkout}/refund'
*/
openRefundfacf08d77e5f0daf7bee60ace140aa7e.url = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { checkout: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { checkout: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            checkout: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        checkout: typeof args.checkout === 'object'
        ? args.checkout.reference
        : args.checkout,
    }

    return openRefundfacf08d77e5f0daf7bee60ace140aa7e.definition.url
            .replace('{checkout}', parsedArgs.checkout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::openRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/checkout/{checkout}/refund'
*/
openRefundfacf08d77e5f0daf7bee60ace140aa7e.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: openRefundfacf08d77e5f0daf7bee60ace140aa7e.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::openRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/checkout/{checkout}/refund'
*/
const openRefundfacf08d77e5f0daf7bee60ace140aa7eForm = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: openRefundfacf08d77e5f0daf7bee60ace140aa7e.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::openRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/checkout/{checkout}/refund'
*/
openRefundfacf08d77e5f0daf7bee60ace140aa7eForm.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: openRefundfacf08d77e5f0daf7bee60ace140aa7e.url(args, options),
    method: 'post',
})

openRefundfacf08d77e5f0daf7bee60ace140aa7e.form = openRefundfacf08d77e5f0daf7bee60ace140aa7eForm

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::openRefund, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `openRefund['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const openRefund = {
    '/x/operations/{checkout}/refund': openRefund987b1703f7f7acc57d41c95719a97fb7,
    '/x/checkout/{checkout}/refund': openRefundfacf08d77e5f0daf7bee60ace140aa7e,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::recordRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/operations/{checkout}/refund/record'
*/
const recordRefundf67f3024a880f4eb7c824ff9401a7f1b = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: recordRefundf67f3024a880f4eb7c824ff9401a7f1b.url(args, options),
    method: 'post',
})

recordRefundf67f3024a880f4eb7c824ff9401a7f1b.definition = {
    methods: ["post"],
    url: '/x/operations/{checkout}/refund/record',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::recordRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/operations/{checkout}/refund/record'
*/
recordRefundf67f3024a880f4eb7c824ff9401a7f1b.url = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { checkout: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { checkout: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            checkout: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        checkout: typeof args.checkout === 'object'
        ? args.checkout.reference
        : args.checkout,
    }

    return recordRefundf67f3024a880f4eb7c824ff9401a7f1b.definition.url
            .replace('{checkout}', parsedArgs.checkout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::recordRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/operations/{checkout}/refund/record'
*/
recordRefundf67f3024a880f4eb7c824ff9401a7f1b.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: recordRefundf67f3024a880f4eb7c824ff9401a7f1b.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::recordRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/operations/{checkout}/refund/record'
*/
const recordRefundf67f3024a880f4eb7c824ff9401a7f1bForm = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: recordRefundf67f3024a880f4eb7c824ff9401a7f1b.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::recordRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/operations/{checkout}/refund/record'
*/
recordRefundf67f3024a880f4eb7c824ff9401a7f1bForm.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: recordRefundf67f3024a880f4eb7c824ff9401a7f1b.url(args, options),
    method: 'post',
})

recordRefundf67f3024a880f4eb7c824ff9401a7f1b.form = recordRefundf67f3024a880f4eb7c824ff9401a7f1bForm
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::recordRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/checkout/{checkout}/refund/record'
*/
const recordRefundcbb9f1f3ef875a17037ffa016dce0738 = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: recordRefundcbb9f1f3ef875a17037ffa016dce0738.url(args, options),
    method: 'post',
})

recordRefundcbb9f1f3ef875a17037ffa016dce0738.definition = {
    methods: ["post"],
    url: '/x/checkout/{checkout}/refund/record',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::recordRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/checkout/{checkout}/refund/record'
*/
recordRefundcbb9f1f3ef875a17037ffa016dce0738.url = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { checkout: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { checkout: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            checkout: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        checkout: typeof args.checkout === 'object'
        ? args.checkout.reference
        : args.checkout,
    }

    return recordRefundcbb9f1f3ef875a17037ffa016dce0738.definition.url
            .replace('{checkout}', parsedArgs.checkout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::recordRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/checkout/{checkout}/refund/record'
*/
recordRefundcbb9f1f3ef875a17037ffa016dce0738.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: recordRefundcbb9f1f3ef875a17037ffa016dce0738.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::recordRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/checkout/{checkout}/refund/record'
*/
const recordRefundcbb9f1f3ef875a17037ffa016dce0738Form = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: recordRefundcbb9f1f3ef875a17037ffa016dce0738.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::recordRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/checkout/{checkout}/refund/record'
*/
recordRefundcbb9f1f3ef875a17037ffa016dce0738Form.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: recordRefundcbb9f1f3ef875a17037ffa016dce0738.url(args, options),
    method: 'post',
})

recordRefundcbb9f1f3ef875a17037ffa016dce0738.form = recordRefundcbb9f1f3ef875a17037ffa016dce0738Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::recordRefund, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `recordRefund['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const recordRefund = {
    '/x/operations/{checkout}/refund/record': recordRefundf67f3024a880f4eb7c824ff9401a7f1b,
    '/x/checkout/{checkout}/refund/record': recordRefundcbb9f1f3ef875a17037ffa016dce0738,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcileRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/operations/{checkout}/refund/reconcile'
*/
const reconcileRefundf277a7371ce9a3af023e69d795b7341d = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reconcileRefundf277a7371ce9a3af023e69d795b7341d.url(args, options),
    method: 'post',
})

reconcileRefundf277a7371ce9a3af023e69d795b7341d.definition = {
    methods: ["post"],
    url: '/x/operations/{checkout}/refund/reconcile',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcileRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/operations/{checkout}/refund/reconcile'
*/
reconcileRefundf277a7371ce9a3af023e69d795b7341d.url = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { checkout: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { checkout: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            checkout: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        checkout: typeof args.checkout === 'object'
        ? args.checkout.reference
        : args.checkout,
    }

    return reconcileRefundf277a7371ce9a3af023e69d795b7341d.definition.url
            .replace('{checkout}', parsedArgs.checkout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcileRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/operations/{checkout}/refund/reconcile'
*/
reconcileRefundf277a7371ce9a3af023e69d795b7341d.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reconcileRefundf277a7371ce9a3af023e69d795b7341d.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcileRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/operations/{checkout}/refund/reconcile'
*/
const reconcileRefundf277a7371ce9a3af023e69d795b7341dForm = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reconcileRefundf277a7371ce9a3af023e69d795b7341d.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcileRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/operations/{checkout}/refund/reconcile'
*/
reconcileRefundf277a7371ce9a3af023e69d795b7341dForm.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reconcileRefundf277a7371ce9a3af023e69d795b7341d.url(args, options),
    method: 'post',
})

reconcileRefundf277a7371ce9a3af023e69d795b7341d.form = reconcileRefundf277a7371ce9a3af023e69d795b7341dForm
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcileRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/checkout/{checkout}/refund/reconcile'
*/
const reconcileRefundbb3b927934a7ba726f94caa018a99006 = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reconcileRefundbb3b927934a7ba726f94caa018a99006.url(args, options),
    method: 'post',
})

reconcileRefundbb3b927934a7ba726f94caa018a99006.definition = {
    methods: ["post"],
    url: '/x/checkout/{checkout}/refund/reconcile',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcileRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/checkout/{checkout}/refund/reconcile'
*/
reconcileRefundbb3b927934a7ba726f94caa018a99006.url = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { checkout: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { checkout: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            checkout: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        checkout: typeof args.checkout === 'object'
        ? args.checkout.reference
        : args.checkout,
    }

    return reconcileRefundbb3b927934a7ba726f94caa018a99006.definition.url
            .replace('{checkout}', parsedArgs.checkout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcileRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/checkout/{checkout}/refund/reconcile'
*/
reconcileRefundbb3b927934a7ba726f94caa018a99006.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reconcileRefundbb3b927934a7ba726f94caa018a99006.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcileRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/checkout/{checkout}/refund/reconcile'
*/
const reconcileRefundbb3b927934a7ba726f94caa018a99006Form = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reconcileRefundbb3b927934a7ba726f94caa018a99006.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcileRefund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/checkout/{checkout}/refund/reconcile'
*/
reconcileRefundbb3b927934a7ba726f94caa018a99006Form.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reconcileRefundbb3b927934a7ba726f94caa018a99006.url(args, options),
    method: 'post',
})

reconcileRefundbb3b927934a7ba726f94caa018a99006.form = reconcileRefundbb3b927934a7ba726f94caa018a99006Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcileRefund, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `reconcileRefund['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const reconcileRefund = {
    '/x/operations/{checkout}/refund/reconcile': reconcileRefundf277a7371ce9a3af023e69d795b7341d,
    '/x/checkout/{checkout}/refund/reconcile': reconcileRefundbb3b927934a7ba726f94caa018a99006,
}

const CheckoutConsoleController = { show, unlock, lock, viewer, retry, openRefund, recordRefund, reconcileRefund }

export default CheckoutConsoleController