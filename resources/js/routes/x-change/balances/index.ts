import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import reusable from './reusable'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/balances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\BalancePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/BalancePageController.php:18
* @route '/x/balances'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const balances = {
    index: Object.assign(index, index),
    reusable: Object.assign(reusable, reusable),
}

export default balances