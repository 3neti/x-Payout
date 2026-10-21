import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
*/
const PayCodeIndexPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PayCodeIndexPageController.url(options),
    method: 'get',
})

PayCodeIndexPageController.definition = {
    methods: ["get","head"],
    url: '/x/pay-codes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
*/
PayCodeIndexPageController.url = (options?: RouteQueryOptions) => {
    return PayCodeIndexPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
*/
PayCodeIndexPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PayCodeIndexPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
*/
PayCodeIndexPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PayCodeIndexPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
*/
const PayCodeIndexPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PayCodeIndexPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
*/
PayCodeIndexPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PayCodeIndexPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
*/
PayCodeIndexPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PayCodeIndexPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PayCodeIndexPageController.form = PayCodeIndexPageControllerForm

export default PayCodeIndexPageController