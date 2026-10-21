import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
const PayCodeShowPageController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PayCodeShowPageController.url(args, options),
    method: 'get',
})

PayCodeShowPageController.definition = {
    methods: ["get","head"],
    url: '/x/pay-codes/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
PayCodeShowPageController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return PayCodeShowPageController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
PayCodeShowPageController.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PayCodeShowPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
PayCodeShowPageController.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PayCodeShowPageController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
const PayCodeShowPageControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PayCodeShowPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
PayCodeShowPageControllerForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PayCodeShowPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
PayCodeShowPageControllerForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PayCodeShowPageController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PayCodeShowPageController.form = PayCodeShowPageControllerForm

export default PayCodeShowPageController