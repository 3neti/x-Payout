import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/analytics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAnalyticsPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAnalyticsPageController.php:16
* @route '/x/analytics'
*/
showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const analytics = {
    show: Object.assign(show, show),
}

export default analytics