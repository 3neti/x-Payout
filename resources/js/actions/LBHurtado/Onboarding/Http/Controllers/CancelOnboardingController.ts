import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\Onboarding\Http\Controllers\CancelOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CancelOnboardingController.php:11
* @route '/api/onboarding/{reference}/cancel'
*/
const CancelOnboardingController = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CancelOnboardingController.url(args, options),
    method: 'post',
})

CancelOnboardingController.definition = {
    methods: ["post"],
    url: '/api/onboarding/{reference}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CancelOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CancelOnboardingController.php:11
* @route '/api/onboarding/{reference}/cancel'
*/
CancelOnboardingController.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reference: args }
    }

    if (Array.isArray(args)) {
        args = {
            reference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reference: args.reference,
    }

    return CancelOnboardingController.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CancelOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CancelOnboardingController.php:11
* @route '/api/onboarding/{reference}/cancel'
*/
CancelOnboardingController.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CancelOnboardingController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CancelOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CancelOnboardingController.php:11
* @route '/api/onboarding/{reference}/cancel'
*/
const CancelOnboardingControllerForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CancelOnboardingController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CancelOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CancelOnboardingController.php:11
* @route '/api/onboarding/{reference}/cancel'
*/
CancelOnboardingControllerForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CancelOnboardingController.url(args, options),
    method: 'post',
})

CancelOnboardingController.form = CancelOnboardingControllerForm

export default CancelOnboardingController