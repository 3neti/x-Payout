import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\CompleteOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/CompleteOnboardingPageController.php:12
* @route '/onboarding/{reference}/complete'
*/
const CompleteOnboardingPageController = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CompleteOnboardingPageController.url(args, options),
    method: 'post',
})

CompleteOnboardingPageController.definition = {
    methods: ["post"],
    url: '/onboarding/{reference}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\CompleteOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/CompleteOnboardingPageController.php:12
* @route '/onboarding/{reference}/complete'
*/
CompleteOnboardingPageController.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CompleteOnboardingPageController.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\CompleteOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/CompleteOnboardingPageController.php:12
* @route '/onboarding/{reference}/complete'
*/
CompleteOnboardingPageController.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CompleteOnboardingPageController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\CompleteOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/CompleteOnboardingPageController.php:12
* @route '/onboarding/{reference}/complete'
*/
const CompleteOnboardingPageControllerForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CompleteOnboardingPageController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\CompleteOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/CompleteOnboardingPageController.php:12
* @route '/onboarding/{reference}/complete'
*/
CompleteOnboardingPageControllerForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CompleteOnboardingPageController.url(args, options),
    method: 'post',
})

CompleteOnboardingPageController.form = CompleteOnboardingPageControllerForm

export default CompleteOnboardingPageController