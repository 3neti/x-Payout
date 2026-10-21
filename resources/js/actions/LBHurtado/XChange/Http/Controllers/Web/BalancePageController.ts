import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
const BalancePageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BalancePageController.url(options),
    method: 'get',
})

BalancePageController.definition = {
    methods: ["get","head"],
    url: '/x/balances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
BalancePageController.url = (options?: RouteQueryOptions) => {
    return BalancePageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
BalancePageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BalancePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
BalancePageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: BalancePageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
const BalancePageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BalancePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
BalancePageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BalancePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
BalancePageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BalancePageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

BalancePageController.form = BalancePageControllerForm

export default BalancePageController