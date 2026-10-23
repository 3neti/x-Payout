import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import refund from './refund'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/checkout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/checkout'
*/
showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/checkout/unlock'
*/
export const unlock = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unlock.url(options),
    method: 'post',
})

unlock.definition = {
    methods: ["post"],
    url: '/x/checkout/unlock',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/checkout/unlock'
*/
unlock.url = (options?: RouteQueryOptions) => {
    return unlock.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/checkout/unlock'
*/
unlock.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unlock.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/checkout/unlock'
*/
const unlockForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unlock.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:59
* @route '/x/checkout/unlock'
*/
unlockForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unlock.url(options),
    method: 'post',
})

unlock.form = unlockForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/checkout/lock'
*/
export const lock = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lock.url(options),
    method: 'post',
})

lock.definition = {
    methods: ["post"],
    url: '/x/checkout/lock',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/checkout/lock'
*/
lock.url = (options?: RouteQueryOptions) => {
    return lock.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/checkout/lock'
*/
lock.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lock.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/checkout/lock'
*/
const lockForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lock.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:71
* @route '/x/checkout/lock'
*/
lockForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lock.url(options),
    method: 'post',
})

lock.form = lockForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
export const viewer = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewer.url(args, options),
    method: 'get',
})

viewer.definition = {
    methods: ["get","head"],
    url: '/x/checkout/view/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
viewer.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return viewer.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
viewer.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewer.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
viewer.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: viewer.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
const viewerForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewer.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
viewerForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewer.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:42
* @route '/x/checkout/view/{token}'
*/
viewerForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewer.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

viewer.form = viewerForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/checkout/{checkout}/retry'
*/
export const retry = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry.url(args, options),
    method: 'post',
})

retry.definition = {
    methods: ["post"],
    url: '/x/checkout/{checkout}/retry',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/checkout/{checkout}/retry'
*/
retry.url = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return retry.definition.url
            .replace('{checkout}', parsedArgs.checkout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/checkout/{checkout}/retry'
*/
retry.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/checkout/{checkout}/retry'
*/
const retryForm = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:84
* @route '/x/checkout/{checkout}/retry'
*/
retryForm.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

retry.form = retryForm

const checkout = {
    show: Object.assign(show, show),
    unlock: Object.assign(unlock, unlock),
    lock: Object.assign(lock, lock),
    viewer: Object.assign(viewer, viewer),
    retry: Object.assign(retry, retry),
    refund: Object.assign(refund, refund),
}

export default checkout