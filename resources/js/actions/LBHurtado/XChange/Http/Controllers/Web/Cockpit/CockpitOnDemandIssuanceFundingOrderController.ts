import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
const show48d5046c60e4fa106860b4a5ea8cb53a = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show48d5046c60e4fa106860b4a5ea8cb53a.url(args, options),
    method: 'get',
})

show48d5046c60e4fa106860b4a5ea8cb53a.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/funding-orders/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
show48d5046c60e4fa106860b4a5ea8cb53a.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { order: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.reference
        : args.order,
    }

    return show48d5046c60e4fa106860b4a5ea8cb53a.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
show48d5046c60e4fa106860b4a5ea8cb53a.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show48d5046c60e4fa106860b4a5ea8cb53a.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
show48d5046c60e4fa106860b4a5ea8cb53a.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show48d5046c60e4fa106860b4a5ea8cb53a.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
const show48d5046c60e4fa106860b4a5ea8cb53aForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show48d5046c60e4fa106860b4a5ea8cb53a.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
show48d5046c60e4fa106860b4a5ea8cb53aForm.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show48d5046c60e4fa106860b4a5ea8cb53a.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
show48d5046c60e4fa106860b4a5ea8cb53aForm.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show48d5046c60e4fa106860b4a5ea8cb53a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show48d5046c60e4fa106860b4a5ea8cb53a.form = show48d5046c60e4fa106860b4a5ea8cb53aForm
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/cockpit/quick-generate/funding-orders/{order}'
*/
const show3c01ce014878ec161391c56f75fd1b8c = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3c01ce014878ec161391c56f75fd1b8c.url(args, options),
    method: 'get',
})

show3c01ce014878ec161391c56f75fd1b8c.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/quick-generate/funding-orders/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/cockpit/quick-generate/funding-orders/{order}'
*/
show3c01ce014878ec161391c56f75fd1b8c.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { order: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.reference
        : args.order,
    }

    return show3c01ce014878ec161391c56f75fd1b8c.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/cockpit/quick-generate/funding-orders/{order}'
*/
show3c01ce014878ec161391c56f75fd1b8c.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3c01ce014878ec161391c56f75fd1b8c.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/cockpit/quick-generate/funding-orders/{order}'
*/
show3c01ce014878ec161391c56f75fd1b8c.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show3c01ce014878ec161391c56f75fd1b8c.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/cockpit/quick-generate/funding-orders/{order}'
*/
const show3c01ce014878ec161391c56f75fd1b8cForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3c01ce014878ec161391c56f75fd1b8c.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/cockpit/quick-generate/funding-orders/{order}'
*/
show3c01ce014878ec161391c56f75fd1b8cForm.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3c01ce014878ec161391c56f75fd1b8c.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/cockpit/quick-generate/funding-orders/{order}'
*/
show3c01ce014878ec161391c56f75fd1b8cForm.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3c01ce014878ec161391c56f75fd1b8c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show3c01ce014878ec161391c56f75fd1b8c.form = show3c01ce014878ec161391c56f75fd1b8cForm

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `show['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const show = {
    '/x/auto-generate/funding-orders/{order}': show48d5046c60e4fa106860b4a5ea8cb53a,
    '/x/cockpit/quick-generate/funding-orders/{order}': show3c01ce014878ec161391c56f75fd1b8c,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/auto-generate/funding-orders/{order}/acknowledge'
*/
const acknowledge7bfa4e6ac09de92326b101aa4c436cba = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: acknowledge7bfa4e6ac09de92326b101aa4c436cba.url(args, options),
    method: 'post',
})

acknowledge7bfa4e6ac09de92326b101aa4c436cba.definition = {
    methods: ["post"],
    url: '/x/auto-generate/funding-orders/{order}/acknowledge',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/auto-generate/funding-orders/{order}/acknowledge'
*/
acknowledge7bfa4e6ac09de92326b101aa4c436cba.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { order: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.reference
        : args.order,
    }

    return acknowledge7bfa4e6ac09de92326b101aa4c436cba.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/auto-generate/funding-orders/{order}/acknowledge'
*/
acknowledge7bfa4e6ac09de92326b101aa4c436cba.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: acknowledge7bfa4e6ac09de92326b101aa4c436cba.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/auto-generate/funding-orders/{order}/acknowledge'
*/
const acknowledge7bfa4e6ac09de92326b101aa4c436cbaForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: acknowledge7bfa4e6ac09de92326b101aa4c436cba.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/auto-generate/funding-orders/{order}/acknowledge'
*/
acknowledge7bfa4e6ac09de92326b101aa4c436cbaForm.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: acknowledge7bfa4e6ac09de92326b101aa4c436cba.url(args, options),
    method: 'post',
})

acknowledge7bfa4e6ac09de92326b101aa4c436cba.form = acknowledge7bfa4e6ac09de92326b101aa4c436cbaForm
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/cockpit/quick-generate/funding-orders/{order}/acknowledge'
*/
const acknowledgea4f6b11afdc0d4dd7af69ee599918db9 = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: acknowledgea4f6b11afdc0d4dd7af69ee599918db9.url(args, options),
    method: 'post',
})

acknowledgea4f6b11afdc0d4dd7af69ee599918db9.definition = {
    methods: ["post"],
    url: '/x/cockpit/quick-generate/funding-orders/{order}/acknowledge',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/cockpit/quick-generate/funding-orders/{order}/acknowledge'
*/
acknowledgea4f6b11afdc0d4dd7af69ee599918db9.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { order: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.reference
        : args.order,
    }

    return acknowledgea4f6b11afdc0d4dd7af69ee599918db9.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/cockpit/quick-generate/funding-orders/{order}/acknowledge'
*/
acknowledgea4f6b11afdc0d4dd7af69ee599918db9.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: acknowledgea4f6b11afdc0d4dd7af69ee599918db9.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/cockpit/quick-generate/funding-orders/{order}/acknowledge'
*/
const acknowledgea4f6b11afdc0d4dd7af69ee599918db9Form = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: acknowledgea4f6b11afdc0d4dd7af69ee599918db9.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/cockpit/quick-generate/funding-orders/{order}/acknowledge'
*/
acknowledgea4f6b11afdc0d4dd7af69ee599918db9Form.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: acknowledgea4f6b11afdc0d4dd7af69ee599918db9.url(args, options),
    method: 'post',
})

acknowledgea4f6b11afdc0d4dd7af69ee599918db9.form = acknowledgea4f6b11afdc0d4dd7af69ee599918db9Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `acknowledge['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const acknowledge = {
    '/x/auto-generate/funding-orders/{order}/acknowledge': acknowledge7bfa4e6ac09de92326b101aa4c436cba,
    '/x/cockpit/quick-generate/funding-orders/{order}/acknowledge': acknowledgea4f6b11afdc0d4dd7af69ee599918db9,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verifyAutomatically
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/auto-generate/funding-orders/{order}/verification'
*/
const verifyAutomatically581e859aa532a6cc049f8a95c27a00bd = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyAutomatically581e859aa532a6cc049f8a95c27a00bd.url(args, options),
    method: 'post',
})

verifyAutomatically581e859aa532a6cc049f8a95c27a00bd.definition = {
    methods: ["post"],
    url: '/x/auto-generate/funding-orders/{order}/verification',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verifyAutomatically
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/auto-generate/funding-orders/{order}/verification'
*/
verifyAutomatically581e859aa532a6cc049f8a95c27a00bd.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { order: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.reference
        : args.order,
    }

    return verifyAutomatically581e859aa532a6cc049f8a95c27a00bd.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verifyAutomatically
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/auto-generate/funding-orders/{order}/verification'
*/
verifyAutomatically581e859aa532a6cc049f8a95c27a00bd.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyAutomatically581e859aa532a6cc049f8a95c27a00bd.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verifyAutomatically
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/auto-generate/funding-orders/{order}/verification'
*/
const verifyAutomatically581e859aa532a6cc049f8a95c27a00bdForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyAutomatically581e859aa532a6cc049f8a95c27a00bd.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verifyAutomatically
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/auto-generate/funding-orders/{order}/verification'
*/
verifyAutomatically581e859aa532a6cc049f8a95c27a00bdForm.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyAutomatically581e859aa532a6cc049f8a95c27a00bd.url(args, options),
    method: 'post',
})

verifyAutomatically581e859aa532a6cc049f8a95c27a00bd.form = verifyAutomatically581e859aa532a6cc049f8a95c27a00bdForm
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verifyAutomatically
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/cockpit/quick-generate/funding-orders/{order}/verification'
*/
const verifyAutomatically7177cb8729c397e2e52890d04c28672a = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyAutomatically7177cb8729c397e2e52890d04c28672a.url(args, options),
    method: 'post',
})

verifyAutomatically7177cb8729c397e2e52890d04c28672a.definition = {
    methods: ["post"],
    url: '/x/cockpit/quick-generate/funding-orders/{order}/verification',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verifyAutomatically
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/cockpit/quick-generate/funding-orders/{order}/verification'
*/
verifyAutomatically7177cb8729c397e2e52890d04c28672a.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { order: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.reference
        : args.order,
    }

    return verifyAutomatically7177cb8729c397e2e52890d04c28672a.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verifyAutomatically
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/cockpit/quick-generate/funding-orders/{order}/verification'
*/
verifyAutomatically7177cb8729c397e2e52890d04c28672a.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyAutomatically7177cb8729c397e2e52890d04c28672a.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verifyAutomatically
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/cockpit/quick-generate/funding-orders/{order}/verification'
*/
const verifyAutomatically7177cb8729c397e2e52890d04c28672aForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyAutomatically7177cb8729c397e2e52890d04c28672a.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verifyAutomatically
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/cockpit/quick-generate/funding-orders/{order}/verification'
*/
verifyAutomatically7177cb8729c397e2e52890d04c28672aForm.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyAutomatically7177cb8729c397e2e52890d04c28672a.url(args, options),
    method: 'post',
})

verifyAutomatically7177cb8729c397e2e52890d04c28672a.form = verifyAutomatically7177cb8729c397e2e52890d04c28672aForm

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verifyAutomatically, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `verifyAutomatically['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const verifyAutomatically = {
    '/x/auto-generate/funding-orders/{order}/verification': verifyAutomatically581e859aa532a6cc049f8a95c27a00bd,
    '/x/cockpit/quick-generate/funding-orders/{order}/verification': verifyAutomatically7177cb8729c397e2e52890d04c28672a,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/auto-generate/funding-orders/{order}/retry-issuance'
*/
const retryIssuance2927d4f153608c0b128beefe547706e3 = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retryIssuance2927d4f153608c0b128beefe547706e3.url(args, options),
    method: 'post',
})

retryIssuance2927d4f153608c0b128beefe547706e3.definition = {
    methods: ["post"],
    url: '/x/auto-generate/funding-orders/{order}/retry-issuance',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/auto-generate/funding-orders/{order}/retry-issuance'
*/
retryIssuance2927d4f153608c0b128beefe547706e3.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { order: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.reference
        : args.order,
    }

    return retryIssuance2927d4f153608c0b128beefe547706e3.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/auto-generate/funding-orders/{order}/retry-issuance'
*/
retryIssuance2927d4f153608c0b128beefe547706e3.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retryIssuance2927d4f153608c0b128beefe547706e3.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/auto-generate/funding-orders/{order}/retry-issuance'
*/
const retryIssuance2927d4f153608c0b128beefe547706e3Form = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retryIssuance2927d4f153608c0b128beefe547706e3.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/auto-generate/funding-orders/{order}/retry-issuance'
*/
retryIssuance2927d4f153608c0b128beefe547706e3Form.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retryIssuance2927d4f153608c0b128beefe547706e3.url(args, options),
    method: 'post',
})

retryIssuance2927d4f153608c0b128beefe547706e3.form = retryIssuance2927d4f153608c0b128beefe547706e3Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/cockpit/quick-generate/funding-orders/{order}/retry-issuance'
*/
const retryIssuance624fdd7886df2e50cff8ba142a1b58f7 = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retryIssuance624fdd7886df2e50cff8ba142a1b58f7.url(args, options),
    method: 'post',
})

retryIssuance624fdd7886df2e50cff8ba142a1b58f7.definition = {
    methods: ["post"],
    url: '/x/cockpit/quick-generate/funding-orders/{order}/retry-issuance',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/cockpit/quick-generate/funding-orders/{order}/retry-issuance'
*/
retryIssuance624fdd7886df2e50cff8ba142a1b58f7.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { order: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.reference
        : args.order,
    }

    return retryIssuance624fdd7886df2e50cff8ba142a1b58f7.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/cockpit/quick-generate/funding-orders/{order}/retry-issuance'
*/
retryIssuance624fdd7886df2e50cff8ba142a1b58f7.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retryIssuance624fdd7886df2e50cff8ba142a1b58f7.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/cockpit/quick-generate/funding-orders/{order}/retry-issuance'
*/
const retryIssuance624fdd7886df2e50cff8ba142a1b58f7Form = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retryIssuance624fdd7886df2e50cff8ba142a1b58f7.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/cockpit/quick-generate/funding-orders/{order}/retry-issuance'
*/
retryIssuance624fdd7886df2e50cff8ba142a1b58f7Form.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retryIssuance624fdd7886df2e50cff8ba142a1b58f7.url(args, options),
    method: 'post',
})

retryIssuance624fdd7886df2e50cff8ba142a1b58f7.form = retryIssuance624fdd7886df2e50cff8ba142a1b58f7Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `retryIssuance['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const retryIssuance = {
    '/x/auto-generate/funding-orders/{order}/retry-issuance': retryIssuance2927d4f153608c0b128beefe547706e3,
    '/x/cockpit/quick-generate/funding-orders/{order}/retry-issuance': retryIssuance624fdd7886df2e50cff8ba142a1b58f7,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/auto-generate/funding-orders/{order}'
*/
const cancel48d5046c60e4fa106860b4a5ea8cb53a = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: cancel48d5046c60e4fa106860b4a5ea8cb53a.url(args, options),
    method: 'delete',
})

cancel48d5046c60e4fa106860b4a5ea8cb53a.definition = {
    methods: ["delete"],
    url: '/x/auto-generate/funding-orders/{order}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/auto-generate/funding-orders/{order}'
*/
cancel48d5046c60e4fa106860b4a5ea8cb53a.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { order: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.reference
        : args.order,
    }

    return cancel48d5046c60e4fa106860b4a5ea8cb53a.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/auto-generate/funding-orders/{order}'
*/
cancel48d5046c60e4fa106860b4a5ea8cb53a.delete = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: cancel48d5046c60e4fa106860b4a5ea8cb53a.url(args, options),
    method: 'delete',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/auto-generate/funding-orders/{order}'
*/
const cancel48d5046c60e4fa106860b4a5ea8cb53aForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel48d5046c60e4fa106860b4a5ea8cb53a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/auto-generate/funding-orders/{order}'
*/
cancel48d5046c60e4fa106860b4a5ea8cb53aForm.delete = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel48d5046c60e4fa106860b4a5ea8cb53a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

cancel48d5046c60e4fa106860b4a5ea8cb53a.form = cancel48d5046c60e4fa106860b4a5ea8cb53aForm
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/cockpit/quick-generate/funding-orders/{order}'
*/
const cancel3c01ce014878ec161391c56f75fd1b8c = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: cancel3c01ce014878ec161391c56f75fd1b8c.url(args, options),
    method: 'delete',
})

cancel3c01ce014878ec161391c56f75fd1b8c.definition = {
    methods: ["delete"],
    url: '/x/cockpit/quick-generate/funding-orders/{order}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/cockpit/quick-generate/funding-orders/{order}'
*/
cancel3c01ce014878ec161391c56f75fd1b8c.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { order: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.reference
        : args.order,
    }

    return cancel3c01ce014878ec161391c56f75fd1b8c.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/cockpit/quick-generate/funding-orders/{order}'
*/
cancel3c01ce014878ec161391c56f75fd1b8c.delete = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: cancel3c01ce014878ec161391c56f75fd1b8c.url(args, options),
    method: 'delete',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/cockpit/quick-generate/funding-orders/{order}'
*/
const cancel3c01ce014878ec161391c56f75fd1b8cForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel3c01ce014878ec161391c56f75fd1b8c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/cockpit/quick-generate/funding-orders/{order}'
*/
cancel3c01ce014878ec161391c56f75fd1b8cForm.delete = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel3c01ce014878ec161391c56f75fd1b8c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

cancel3c01ce014878ec161391c56f75fd1b8c.form = cancel3c01ce014878ec161391c56f75fd1b8cForm

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `cancel['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const cancel = {
    '/x/auto-generate/funding-orders/{order}': cancel48d5046c60e4fa106860b4a5ea8cb53a,
    '/x/cockpit/quick-generate/funding-orders/{order}': cancel3c01ce014878ec161391c56f75fd1b8c,
}

const CockpitOnDemandIssuanceFundingOrderController = { show, acknowledge, verifyAutomatically, retryIssuance, cancel }

export default CockpitOnDemandIssuanceFundingOrderController