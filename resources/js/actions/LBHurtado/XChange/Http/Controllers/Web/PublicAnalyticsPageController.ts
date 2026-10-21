import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
const PublicAnalyticsPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicAnalyticsPageController.url(options),
    method: 'get',
})

PublicAnalyticsPageController.definition = {
    methods: ["get","head"],
    url: '/x/analytics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
PublicAnalyticsPageController.url = (options?: RouteQueryOptions) => {
    return PublicAnalyticsPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
PublicAnalyticsPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicAnalyticsPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
PublicAnalyticsPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PublicAnalyticsPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
const PublicAnalyticsPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicAnalyticsPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
PublicAnalyticsPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicAnalyticsPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
PublicAnalyticsPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicAnalyticsPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PublicAnalyticsPageController.form = PublicAnalyticsPageControllerForm

export default PublicAnalyticsPageController