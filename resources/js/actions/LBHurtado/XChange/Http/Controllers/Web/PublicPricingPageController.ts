import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
*/
const PublicPricingPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicPricingPageController.url(options),
    method: 'get',
})

PublicPricingPageController.definition = {
    methods: ["get","head"],
    url: '/x/pricing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
*/
PublicPricingPageController.url = (options?: RouteQueryOptions) => {
    return PublicPricingPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
*/
PublicPricingPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicPricingPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
*/
PublicPricingPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PublicPricingPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
*/
const PublicPricingPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicPricingPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
*/
PublicPricingPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicPricingPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicPricingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicPricingPageController.php:15
* @route '/x/pricing'
*/
PublicPricingPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicPricingPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PublicPricingPageController.form = PublicPricingPageControllerForm

export default PublicPricingPageController