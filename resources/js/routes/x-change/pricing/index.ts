import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/pricing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
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

const pricing = {
    show: Object.assign(show, show),
}

export default pricing