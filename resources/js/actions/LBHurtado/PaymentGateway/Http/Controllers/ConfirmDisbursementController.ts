import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDisbursementController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDisbursementController.php:14
* @route '/api/confirm-disbursement'
*/
const ConfirmDisbursementController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ConfirmDisbursementController.url(options),
    method: 'post',
})

ConfirmDisbursementController.definition = {
    methods: ["post"],
    url: '/api/confirm-disbursement',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDisbursementController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDisbursementController.php:14
* @route '/api/confirm-disbursement'
*/
ConfirmDisbursementController.url = (options?: RouteQueryOptions) => {
    return ConfirmDisbursementController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDisbursementController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDisbursementController.php:14
* @route '/api/confirm-disbursement'
*/
ConfirmDisbursementController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ConfirmDisbursementController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDisbursementController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDisbursementController.php:14
* @route '/api/confirm-disbursement'
*/
const ConfirmDisbursementControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ConfirmDisbursementController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDisbursementController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDisbursementController.php:14
* @route '/api/confirm-disbursement'
*/
ConfirmDisbursementControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ConfirmDisbursementController.url(options),
    method: 'post',
})

ConfirmDisbursementController.form = ConfirmDisbursementControllerForm

export default ConfirmDisbursementController