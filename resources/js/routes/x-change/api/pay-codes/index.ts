import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\InspectPayCodeXRayController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/InspectPayCodeXRayController.php:21
* @route '/api/x/v1/pay-codes/x-ray'
*/
export const xRay = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: xRay.url(options),
    method: 'post',
})

xRay.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes/x-ray',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\InspectPayCodeXRayController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/InspectPayCodeXRayController.php:21
* @route '/api/x/v1/pay-codes/x-ray'
*/
xRay.url = (options?: RouteQueryOptions) => {
    return xRay.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\InspectPayCodeXRayController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/InspectPayCodeXRayController.php:21
* @route '/api/x/v1/pay-codes/x-ray'
*/
xRay.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: xRay.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\InspectPayCodeXRayController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/InspectPayCodeXRayController.php:21
* @route '/api/x/v1/pay-codes/x-ray'
*/
const xRayForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: xRay.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\InspectPayCodeXRayController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/InspectPayCodeXRayController.php:21
* @route '/api/x/v1/pay-codes/x-ray'
*/
xRayForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: xRay.url(options),
    method: 'post',
})

xRay.form = xRayForm

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\EstimatePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/EstimatePayCodeController.php:17
* @route '/api/x/v1/pay-codes/estimate'
*/
export const estimate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: estimate.url(options),
    method: 'post',
})

estimate.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes/estimate',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\EstimatePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/EstimatePayCodeController.php:17
* @route '/api/x/v1/pay-codes/estimate'
*/
estimate.url = (options?: RouteQueryOptions) => {
    return estimate.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\EstimatePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/EstimatePayCodeController.php:17
* @route '/api/x/v1/pay-codes/estimate'
*/
estimate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: estimate.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\EstimatePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/EstimatePayCodeController.php:17
* @route '/api/x/v1/pay-codes/estimate'
*/
const estimateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: estimate.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\EstimatePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/EstimatePayCodeController.php:17
* @route '/api/x/v1/pay-codes/estimate'
*/
estimateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: estimate.url(options),
    method: 'post',
})

estimate.form = estimateForm

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\GeneratePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/GeneratePayCodeController.php:18
* @route '/api/x/v1/pay-codes'
*/
export const generate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate.url(options),
    method: 'post',
})

generate.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\GeneratePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/GeneratePayCodeController.php:18
* @route '/api/x/v1/pay-codes'
*/
generate.url = (options?: RouteQueryOptions) => {
    return generate.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\GeneratePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/GeneratePayCodeController.php:18
* @route '/api/x/v1/pay-codes'
*/
generate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\GeneratePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/GeneratePayCodeController.php:18
* @route '/api/x/v1/pay-codes'
*/
const generateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generate.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\GeneratePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/GeneratePayCodeController.php:18
* @route '/api/x/v1/pay-codes'
*/
generateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generate.url(options),
    method: 'post',
})

generate.form = generateForm

const payCodes = {
    xRay: Object.assign(xRay, xRay),
    estimate: Object.assign(estimate, estimate),
    generate: Object.assign(generate, generate),
}

export default payCodes