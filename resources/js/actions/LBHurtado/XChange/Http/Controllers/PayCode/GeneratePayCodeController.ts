import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\GeneratePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/GeneratePayCodeController.php:18
* @route '/api/x/v1/pay-codes'
*/
const GeneratePayCodeController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: GeneratePayCodeController.url(options),
    method: 'post',
})

GeneratePayCodeController.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\GeneratePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/GeneratePayCodeController.php:18
* @route '/api/x/v1/pay-codes'
*/
GeneratePayCodeController.url = (options?: RouteQueryOptions) => {
    return GeneratePayCodeController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\GeneratePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/GeneratePayCodeController.php:18
* @route '/api/x/v1/pay-codes'
*/
GeneratePayCodeController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: GeneratePayCodeController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\GeneratePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/GeneratePayCodeController.php:18
* @route '/api/x/v1/pay-codes'
*/
const GeneratePayCodeControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: GeneratePayCodeController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PayCode\GeneratePayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PayCode/GeneratePayCodeController.php:18
* @route '/api/x/v1/pay-codes'
*/
GeneratePayCodeControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: GeneratePayCodeController.url(options),
    method: 'post',
})

GeneratePayCodeController.form = GeneratePayCodeControllerForm

export default GeneratePayCodeController