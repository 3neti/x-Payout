import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDepositController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDepositController.php:15
* @route '/api/confirm-deposit'
*/
const ConfirmDepositController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ConfirmDepositController.url(options),
    method: 'post',
})

ConfirmDepositController.definition = {
    methods: ["post"],
    url: '/api/confirm-deposit',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDepositController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDepositController.php:15
* @route '/api/confirm-deposit'
*/
ConfirmDepositController.url = (options?: RouteQueryOptions) => {
    return ConfirmDepositController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDepositController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDepositController.php:15
* @route '/api/confirm-deposit'
*/
ConfirmDepositController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ConfirmDepositController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDepositController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDepositController.php:15
* @route '/api/confirm-deposit'
*/
const ConfirmDepositControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ConfirmDepositController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDepositController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDepositController.php:15
* @route '/api/confirm-deposit'
*/
ConfirmDepositControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ConfirmDepositController.url(options),
    method: 'post',
})

ConfirmDepositController.form = ConfirmDepositControllerForm

export default ConfirmDepositController