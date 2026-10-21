import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\Onboarding\Http\Controllers\CompleteOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CompleteOnboardingController.php:11
* @route '/api/onboarding/{reference}/complete'
*/
const CompleteOnboardingController = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CompleteOnboardingController.url(args, options),
    method: 'post',
})

CompleteOnboardingController.definition = {
    methods: ["post"],
    url: '/api/onboarding/{reference}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CompleteOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CompleteOnboardingController.php:11
* @route '/api/onboarding/{reference}/complete'
*/
CompleteOnboardingController.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CompleteOnboardingController.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CompleteOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CompleteOnboardingController.php:11
* @route '/api/onboarding/{reference}/complete'
*/
CompleteOnboardingController.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CompleteOnboardingController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CompleteOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CompleteOnboardingController.php:11
* @route '/api/onboarding/{reference}/complete'
*/
const CompleteOnboardingControllerForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CompleteOnboardingController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CompleteOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CompleteOnboardingController.php:11
* @route '/api/onboarding/{reference}/complete'
*/
CompleteOnboardingControllerForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CompleteOnboardingController.url(args, options),
    method: 'post',
})

CompleteOnboardingController.form = CompleteOnboardingControllerForm

export default CompleteOnboardingController