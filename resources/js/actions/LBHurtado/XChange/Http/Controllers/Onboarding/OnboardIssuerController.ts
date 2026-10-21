import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OnboardIssuerController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OnboardIssuerController.php:16
* @route '/api/x/v1/onboarding/issuers'
*/
const OnboardIssuerController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: OnboardIssuerController.url(options),
    method: 'post',
})

OnboardIssuerController.definition = {
    methods: ["post"],
    url: '/api/x/v1/onboarding/issuers',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OnboardIssuerController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OnboardIssuerController.php:16
* @route '/api/x/v1/onboarding/issuers'
*/
OnboardIssuerController.url = (options?: RouteQueryOptions) => {
    return OnboardIssuerController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OnboardIssuerController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OnboardIssuerController.php:16
* @route '/api/x/v1/onboarding/issuers'
*/
OnboardIssuerController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: OnboardIssuerController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OnboardIssuerController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OnboardIssuerController.php:16
* @route '/api/x/v1/onboarding/issuers'
*/
const OnboardIssuerControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: OnboardIssuerController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Onboarding\OnboardIssuerController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Onboarding/OnboardIssuerController.php:16
* @route '/api/x/v1/onboarding/issuers'
*/
OnboardIssuerControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: OnboardIssuerController.url(options),
    method: 'post',
})

OnboardIssuerController.form = OnboardIssuerControllerForm

export default OnboardIssuerController