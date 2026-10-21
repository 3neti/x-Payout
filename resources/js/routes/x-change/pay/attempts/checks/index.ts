import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentVerificationCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentVerificationCheckController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/checks'
*/
export const store = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/pay/{code}/attempts/{attempt}/checks',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentVerificationCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentVerificationCheckController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/checks'
*/
store.url = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            code: args[0],
            attempt: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
        attempt: typeof args.attempt === 'object'
        ? args.attempt.reference
        : args.attempt,
    }

    return store.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{attempt}', parsedArgs.attempt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentVerificationCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentVerificationCheckController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/checks'
*/
store.post = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentVerificationCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentVerificationCheckController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/checks'
*/
const storeForm = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentVerificationCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentVerificationCheckController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/checks'
*/
storeForm.post = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const checks = {
    store: Object.assign(store, store),
}

export default checks