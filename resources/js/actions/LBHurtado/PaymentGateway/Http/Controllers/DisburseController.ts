import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\DisburseController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/DisburseController.php:15
* @route '/api/disburse-funds'
*/
const DisburseController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: DisburseController.url(options),
    method: 'post',
})

DisburseController.definition = {
    methods: ["post"],
    url: '/api/disburse-funds',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\DisburseController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/DisburseController.php:15
* @route '/api/disburse-funds'
*/
DisburseController.url = (options?: RouteQueryOptions) => {
    return DisburseController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\DisburseController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/DisburseController.php:15
* @route '/api/disburse-funds'
*/
DisburseController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: DisburseController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\DisburseController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/DisburseController.php:15
* @route '/api/disburse-funds'
*/
const DisburseControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: DisburseController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\DisburseController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/DisburseController.php:15
* @route '/api/disburse-funds'
*/
DisburseControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: DisburseController.url(options),
    method: 'post',
})

DisburseController.form = DisburseControllerForm

export default DisburseController