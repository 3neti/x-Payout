import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OpenIssuerWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OpenIssuerWalletController.php:16
* @route '/api/x/v1/onboarding/wallets'
*/
const OpenIssuerWalletController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: OpenIssuerWalletController.url(options),
    method: 'post',
})

OpenIssuerWalletController.definition = {
    methods: ["post"],
    url: '/api/x/v1/onboarding/wallets',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OpenIssuerWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OpenIssuerWalletController.php:16
* @route '/api/x/v1/onboarding/wallets'
*/
OpenIssuerWalletController.url = (options?: RouteQueryOptions) => {
    return OpenIssuerWalletController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OpenIssuerWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OpenIssuerWalletController.php:16
* @route '/api/x/v1/onboarding/wallets'
*/
OpenIssuerWalletController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: OpenIssuerWalletController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OpenIssuerWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OpenIssuerWalletController.php:16
* @route '/api/x/v1/onboarding/wallets'
*/
const OpenIssuerWalletControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: OpenIssuerWalletController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OpenIssuerWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OpenIssuerWalletController.php:16
* @route '/api/x/v1/onboarding/wallets'
*/
OpenIssuerWalletControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: OpenIssuerWalletController.url(options),
    method: 'post',
})

OpenIssuerWalletController.form = OpenIssuerWalletControllerForm

export default OpenIssuerWalletController