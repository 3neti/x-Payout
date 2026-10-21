import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XCommerce\Http\Controllers\CommercialEstimateController::__invoke
* @see vendor/3neti/x-commerce/src/Http/Controllers/CommercialEstimateController.php:15
* @route '/api/x/v1/quotes'
*/
const CommercialEstimateController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CommercialEstimateController.url(options),
    method: 'post',
})

CommercialEstimateController.definition = {
    methods: ["post"],
    url: '/api/x/v1/quotes',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XCommerce\Http\Controllers\CommercialEstimateController::__invoke
* @see vendor/3neti/x-commerce/src/Http/Controllers/CommercialEstimateController.php:15
* @route '/api/x/v1/quotes'
*/
CommercialEstimateController.url = (options?: RouteQueryOptions) => {
    return CommercialEstimateController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XCommerce\Http\Controllers\CommercialEstimateController::__invoke
* @see vendor/3neti/x-commerce/src/Http/Controllers/CommercialEstimateController.php:15
* @route '/api/x/v1/quotes'
*/
CommercialEstimateController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CommercialEstimateController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XCommerce\Http\Controllers\CommercialEstimateController::__invoke
* @see vendor/3neti/x-commerce/src/Http/Controllers/CommercialEstimateController.php:15
* @route '/api/x/v1/quotes'
*/
const CommercialEstimateControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CommercialEstimateController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XCommerce\Http\Controllers\CommercialEstimateController::__invoke
* @see vendor/3neti/x-commerce/src/Http/Controllers/CommercialEstimateController.php:15
* @route '/api/x/v1/quotes'
*/
CommercialEstimateControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CommercialEstimateController.url(options),
    method: 'post',
})

CommercialEstimateController.form = CommercialEstimateControllerForm

export default CommercialEstimateController