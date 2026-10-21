import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import economicsE6a247 from './economics'
import pricingCf18cb from './pricing'
import refund from './refund'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/operations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:26
* @route '/x/operations'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::economics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
*/
export const economics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: economics.url(options),
    method: 'get',
})

economics.definition = {
    methods: ["get","head"],
    url: '/x/operations/economics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::economics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
*/
economics.url = (options?: RouteQueryOptions) => {
    return economics.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::economics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
*/
economics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: economics.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::economics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
*/
economics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: economics.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::economics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
*/
const economicsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: economics.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::economics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
*/
economicsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: economics.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::economics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
*/
economicsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: economics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

economics.form = economicsForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::pricing
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
*/
export const pricing = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pricing.url(options),
    method: 'get',
})

pricing.definition = {
    methods: ["get","head"],
    url: '/x/operations/pricing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::pricing
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
*/
pricing.url = (options?: RouteQueryOptions) => {
    return pricing.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::pricing
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
*/
pricing.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pricing.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::pricing
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
*/
pricing.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pricing.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::pricing
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
*/
const pricingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pricing.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::pricing
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
*/
pricingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pricing.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::pricing
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
*/
pricingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pricing.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pricing.form = pricingForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:58
* @route '/x/operations/unlock'
*/
export const unlock = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unlock.url(options),
    method: 'post',
})

unlock.definition = {
    methods: ["post"],
    url: '/x/operations/unlock',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:58
* @route '/x/operations/unlock'
*/
unlock.url = (options?: RouteQueryOptions) => {
    return unlock.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:58
* @route '/x/operations/unlock'
*/
unlock.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unlock.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:58
* @route '/x/operations/unlock'
*/
const unlockForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unlock.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:58
* @route '/x/operations/unlock'
*/
unlockForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unlock.url(options),
    method: 'post',
})

unlock.form = unlockForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:70
* @route '/x/operations/lock'
*/
export const lock = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lock.url(options),
    method: 'post',
})

lock.definition = {
    methods: ["post"],
    url: '/x/operations/lock',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:70
* @route '/x/operations/lock'
*/
lock.url = (options?: RouteQueryOptions) => {
    return lock.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:70
* @route '/x/operations/lock'
*/
lock.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lock.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:70
* @route '/x/operations/lock'
*/
const lockForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lock.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::lock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:70
* @route '/x/operations/lock'
*/
lockForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lock.url(options),
    method: 'post',
})

lock.form = lockForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:41
* @route '/x/operations/view/{token}'
*/
export const viewer = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewer.url(args, options),
    method: 'get',
})

viewer.definition = {
    methods: ["get","head"],
    url: '/x/operations/view/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:41
* @route '/x/operations/view/{token}'
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:41
* @route '/x/operations/view/{token}'
*/
viewer.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewer.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:41
* @route '/x/operations/view/{token}'
*/
viewer.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: viewer.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:41
* @route '/x/operations/view/{token}'
*/
const viewerForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewer.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:41
* @route '/x/operations/view/{token}'
*/
viewerForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewer.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::viewer
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:41
* @route '/x/operations/view/{token}'
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:82
* @route '/x/operations/{checkout}/retry'
*/
export const retry = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry.url(args, options),
    method: 'post',
})

retry.definition = {
    methods: ["post"],
    url: '/x/operations/{checkout}/retry',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:82
* @route '/x/operations/{checkout}/retry'
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:82
* @route '/x/operations/{checkout}/retry'
*/
retry.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:82
* @route '/x/operations/{checkout}/retry'
*/
const retryForm = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:82
* @route '/x/operations/{checkout}/retry'
*/
retryForm.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

retry.form = retryForm

const operations = {
    show: Object.assign(show, show),
    economics: Object.assign(economics, economicsE6a247),
    pricing: Object.assign(pricing, pricingCf18cb),
    unlock: Object.assign(unlock, unlock),
    lock: Object.assign(lock, lock),
    viewer: Object.assign(viewer, viewer),
    retry: Object.assign(retry, retry),
    refund: Object.assign(refund, refund),
}

export default operations