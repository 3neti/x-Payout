import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XCommerce\Http\Controllers\CommercialEstimateController::__invoke
* @see vendor/3neti/x-commerce/src/Http/Controllers/CommercialEstimateController.php:15
* @route '/api/x/v1/quotes'
*/
export const estimate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: estimate.url(options),
    method: 'post',
})

estimate.definition = {
    methods: ["post"],
    url: '/api/x/v1/quotes',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XCommerce\Http\Controllers\CommercialEstimateController::__invoke
* @see vendor/3neti/x-commerce/src/Http/Controllers/CommercialEstimateController.php:15
* @route '/api/x/v1/quotes'
*/
estimate.url = (options?: RouteQueryOptions) => {
    return estimate.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XCommerce\Http\Controllers\CommercialEstimateController::__invoke
* @see vendor/3neti/x-commerce/src/Http/Controllers/CommercialEstimateController.php:15
* @route '/api/x/v1/quotes'
*/
estimate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: estimate.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XCommerce\Http\Controllers\CommercialEstimateController::__invoke
* @see vendor/3neti/x-commerce/src/Http/Controllers/CommercialEstimateController.php:15
* @route '/api/x/v1/quotes'
*/
const estimateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: estimate.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XCommerce\Http\Controllers\CommercialEstimateController::__invoke
* @see vendor/3neti/x-commerce/src/Http/Controllers/CommercialEstimateController.php:15
* @route '/api/x/v1/quotes'
*/
estimateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: estimate.url(options),
    method: 'post',
})

estimate.form = estimateForm

const quotes = {
    estimate: Object.assign(estimate, estimate),
}

export default quotes