import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\InspectPayCodeXRayController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/InspectPayCodeXRayController.php:21
* @route '/api/x/v1/pay-codes/x-ray'
*/
const InspectPayCodeXRayController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: InspectPayCodeXRayController.url(options),
    method: 'post',
})

InspectPayCodeXRayController.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes/x-ray',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\InspectPayCodeXRayController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/InspectPayCodeXRayController.php:21
* @route '/api/x/v1/pay-codes/x-ray'
*/
InspectPayCodeXRayController.url = (options?: RouteQueryOptions) => {
    return InspectPayCodeXRayController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\InspectPayCodeXRayController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/InspectPayCodeXRayController.php:21
* @route '/api/x/v1/pay-codes/x-ray'
*/
InspectPayCodeXRayController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: InspectPayCodeXRayController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\InspectPayCodeXRayController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/InspectPayCodeXRayController.php:21
* @route '/api/x/v1/pay-codes/x-ray'
*/
const InspectPayCodeXRayControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: InspectPayCodeXRayController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\InspectPayCodeXRayController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/InspectPayCodeXRayController.php:21
* @route '/api/x/v1/pay-codes/x-ray'
*/
InspectPayCodeXRayControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: InspectPayCodeXRayController.url(options),
    method: 'post',
})

InspectPayCodeXRayController.form = InspectPayCodeXRayControllerForm

export default InspectPayCodeXRayController