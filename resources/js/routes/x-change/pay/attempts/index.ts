import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
import qr from './qr'
import checks from './checks'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentAttemptController.php:23
* @route '/x/pay/{code}/attempts'
*/
export const store = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/pay/{code}/attempts',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentAttemptController.php:23
* @route '/x/pay/{code}/attempts'
*/
store.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { code: args }
    }

    if (Array.isArray(args)) {
        args = {
            code: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
    }

    return store.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentAttemptController.php:23
* @route '/x/pay/{code}/attempts'
*/
store.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentAttemptController.php:23
* @route '/x/pay/{code}/attempts'
*/
const storeForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentAttemptController.php:23
* @route '/x/pay/{code}/attempts'
*/
storeForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const attempts = {
    store: Object.assign(store, store),
    qr: Object.assign(qr, qr),
    checks: Object.assign(checks, checks),
}

export default attempts