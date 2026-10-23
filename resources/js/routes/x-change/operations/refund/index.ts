import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::open
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/operations/{checkout}/refund'
*/
export const open = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: open.url(args, options),
    method: 'post',
})

open.definition = {
    methods: ["post"],
    url: '/x/operations/{checkout}/refund',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::open
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/operations/{checkout}/refund'
*/
open.url = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return open.definition.url
            .replace('{checkout}', parsedArgs.checkout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::open
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/operations/{checkout}/refund'
*/
open.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: open.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::open
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/operations/{checkout}/refund'
*/
const openForm = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: open.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::open
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:101
* @route '/x/operations/{checkout}/refund'
*/
openForm.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: open.url(args, options),
    method: 'post',
})

open.form = openForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::record
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/operations/{checkout}/refund/record'
*/
export const record = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: record.url(args, options),
    method: 'post',
})

record.definition = {
    methods: ["post"],
    url: '/x/operations/{checkout}/refund/record',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::record
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/operations/{checkout}/refund/record'
*/
record.url = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return record.definition.url
            .replace('{checkout}', parsedArgs.checkout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::record
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/operations/{checkout}/refund/record'
*/
record.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: record.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::record
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/operations/{checkout}/refund/record'
*/
const recordForm = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: record.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::record
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:142
* @route '/x/operations/{checkout}/refund/record'
*/
recordForm.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: record.url(args, options),
    method: 'post',
})

record.form = recordForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcile
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/operations/{checkout}/refund/reconcile'
*/
export const reconcile = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reconcile.url(args, options),
    method: 'post',
})

reconcile.definition = {
    methods: ["post"],
    url: '/x/operations/{checkout}/refund/reconcile',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcile
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/operations/{checkout}/refund/reconcile'
*/
reconcile.url = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return reconcile.definition.url
            .replace('{checkout}', parsedArgs.checkout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcile
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/operations/{checkout}/refund/reconcile'
*/
reconcile.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reconcile.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcile
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/operations/{checkout}/refund/reconcile'
*/
const reconcileForm = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reconcile.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\CheckoutConsoleController::reconcile
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/CheckoutConsoleController.php:175
* @route '/x/operations/{checkout}/refund/reconcile'
*/
reconcileForm.post = (args: { checkout: string | number | { reference: string | number } } | [checkout: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reconcile.url(args, options),
    method: 'post',
})

reconcile.form = reconcileForm

const refund = {
    open: Object.assign(open, open),
    record: Object.assign(record, record),
    reconcile: Object.assign(reconcile, reconcile),
}

export default refund