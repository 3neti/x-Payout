import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\GenerateController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/GenerateController.php:14
* @route '/api/generate-qrcode'
*/
const GenerateController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: GenerateController.url(options),
    method: 'post',
})

GenerateController.definition = {
    methods: ["post"],
    url: '/api/generate-qrcode',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\GenerateController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/GenerateController.php:14
* @route '/api/generate-qrcode'
*/
GenerateController.url = (options?: RouteQueryOptions) => {
    return GenerateController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\GenerateController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/GenerateController.php:14
* @route '/api/generate-qrcode'
*/
GenerateController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: GenerateController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\GenerateController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/GenerateController.php:14
* @route '/api/generate-qrcode'
*/
const GenerateControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: GenerateController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\GenerateController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/GenerateController.php:14
* @route '/api/generate-qrcode'
*/
GenerateControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: GenerateController.url(options),
    method: 'post',
})

GenerateController.form = GenerateControllerForm

export default GenerateController