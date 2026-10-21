import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentAttemptController.php:22
* @route '/x/pay/{code}/attempts'
*/
const PaymentAttemptController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: PaymentAttemptController.url(args, options),
    method: 'post',
})

PaymentAttemptController.definition = {
    methods: ["post"],
    url: '/x/pay/{code}/attempts',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentAttemptController.php:22
* @route '/x/pay/{code}/attempts'
*/
PaymentAttemptController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return PaymentAttemptController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentAttemptController.php:22
* @route '/x/pay/{code}/attempts'
*/
PaymentAttemptController.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: PaymentAttemptController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentAttemptController.php:22
* @route '/x/pay/{code}/attempts'
*/
const PaymentAttemptControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: PaymentAttemptController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentAttemptController.php:22
* @route '/x/pay/{code}/attempts'
*/
PaymentAttemptControllerForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: PaymentAttemptController.url(args, options),
    method: 'post',
})

PaymentAttemptController.form = PaymentAttemptControllerForm

export default PaymentAttemptController