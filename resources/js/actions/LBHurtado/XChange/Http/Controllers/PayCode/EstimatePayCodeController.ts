import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\EstimatePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/EstimatePayCodeController.php:17
* @route '/api/x/v1/pay-codes/estimate'
*/
const EstimatePayCodeController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: EstimatePayCodeController.url(options),
    method: 'post',
})

EstimatePayCodeController.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes/estimate',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\EstimatePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/EstimatePayCodeController.php:17
* @route '/api/x/v1/pay-codes/estimate'
*/
EstimatePayCodeController.url = (options?: RouteQueryOptions) => {
    return EstimatePayCodeController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\EstimatePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/EstimatePayCodeController.php:17
* @route '/api/x/v1/pay-codes/estimate'
*/
EstimatePayCodeController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: EstimatePayCodeController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\EstimatePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/EstimatePayCodeController.php:17
* @route '/api/x/v1/pay-codes/estimate'
*/
const EstimatePayCodeControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: EstimatePayCodeController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\EstimatePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/EstimatePayCodeController.php:17
* @route '/api/x/v1/pay-codes/estimate'
*/
EstimatePayCodeControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: EstimatePayCodeController.url(options),
    method: 'post',
})

EstimatePayCodeController.form = EstimatePayCodeControllerForm

export default EstimatePayCodeController