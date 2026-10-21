import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
const PayCodeCreatePageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PayCodeCreatePageController.url(options),
    method: 'get',
})

PayCodeCreatePageController.definition = {
    methods: ["get","head"],
    url: '/x/pay-codes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
PayCodeCreatePageController.url = (options?: RouteQueryOptions) => {
    return PayCodeCreatePageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
PayCodeCreatePageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PayCodeCreatePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
PayCodeCreatePageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PayCodeCreatePageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
const PayCodeCreatePageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PayCodeCreatePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
PayCodeCreatePageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PayCodeCreatePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
PayCodeCreatePageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PayCodeCreatePageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PayCodeCreatePageController.form = PayCodeCreatePageControllerForm

export default PayCodeCreatePageController