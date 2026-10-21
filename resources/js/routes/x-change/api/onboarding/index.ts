import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OnboardIssuerController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OnboardIssuerController.php:16
* @route '/api/x/v1/onboarding/issuers'
*/
export const issuers = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: issuers.url(options),
    method: 'post',
})

issuers.definition = {
    methods: ["post"],
    url: '/api/x/v1/onboarding/issuers',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OnboardIssuerController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OnboardIssuerController.php:16
* @route '/api/x/v1/onboarding/issuers'
*/
issuers.url = (options?: RouteQueryOptions) => {
    return issuers.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OnboardIssuerController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OnboardIssuerController.php:16
* @route '/api/x/v1/onboarding/issuers'
*/
issuers.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: issuers.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OnboardIssuerController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OnboardIssuerController.php:16
* @route '/api/x/v1/onboarding/issuers'
*/
const issuersForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: issuers.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OnboardIssuerController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OnboardIssuerController.php:16
* @route '/api/x/v1/onboarding/issuers'
*/
issuersForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: issuers.url(options),
    method: 'post',
})

issuers.form = issuersForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OpenIssuerWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OpenIssuerWalletController.php:16
* @route '/api/x/v1/onboarding/wallets'
*/
export const wallets = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: wallets.url(options),
    method: 'post',
})

wallets.definition = {
    methods: ["post"],
    url: '/api/x/v1/onboarding/wallets',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OpenIssuerWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OpenIssuerWalletController.php:16
* @route '/api/x/v1/onboarding/wallets'
*/
wallets.url = (options?: RouteQueryOptions) => {
    return wallets.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OpenIssuerWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OpenIssuerWalletController.php:16
* @route '/api/x/v1/onboarding/wallets'
*/
wallets.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: wallets.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OpenIssuerWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OpenIssuerWalletController.php:16
* @route '/api/x/v1/onboarding/wallets'
*/
const walletsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: wallets.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OpenIssuerWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OpenIssuerWalletController.php:16
* @route '/api/x/v1/onboarding/wallets'
*/
walletsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: wallets.url(options),
    method: 'post',
})

wallets.form = walletsForm

const onboarding = {
    issuers: Object.assign(issuers, issuers),
    wallets: Object.assign(wallets, wallets),
}

export default onboarding