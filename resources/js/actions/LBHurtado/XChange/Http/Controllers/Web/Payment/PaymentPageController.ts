import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:31
* @route '/x/pay/{code}'
*/
const PaymentPageController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PaymentPageController.url(args, options),
    method: 'get',
})

PaymentPageController.definition = {
    methods: ["get","head"],
    url: '/x/pay/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:31
* @route '/x/pay/{code}'
*/
PaymentPageController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return PaymentPageController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:31
* @route '/x/pay/{code}'
*/
PaymentPageController.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PaymentPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:31
* @route '/x/pay/{code}'
*/
PaymentPageController.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PaymentPageController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:31
* @route '/x/pay/{code}'
*/
const PaymentPageControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:31
* @route '/x/pay/{code}'
*/
PaymentPageControllerForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:31
* @route '/x/pay/{code}'
*/
PaymentPageControllerForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentPageController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PaymentPageController.form = PaymentPageControllerForm

export default PaymentPageController