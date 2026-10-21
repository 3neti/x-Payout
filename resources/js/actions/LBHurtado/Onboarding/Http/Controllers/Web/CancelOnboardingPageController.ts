import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\CancelOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/CancelOnboardingPageController.php:12
* @route '/onboarding/{reference}/cancel'
*/
const CancelOnboardingPageController = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CancelOnboardingPageController.url(args, options),
    method: 'post',
})

CancelOnboardingPageController.definition = {
    methods: ["post"],
    url: '/onboarding/{reference}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\CancelOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/CancelOnboardingPageController.php:12
* @route '/onboarding/{reference}/cancel'
*/
CancelOnboardingPageController.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CancelOnboardingPageController.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\CancelOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/CancelOnboardingPageController.php:12
* @route '/onboarding/{reference}/cancel'
*/
CancelOnboardingPageController.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CancelOnboardingPageController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\CancelOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/CancelOnboardingPageController.php:12
* @route '/onboarding/{reference}/cancel'
*/
const CancelOnboardingPageControllerForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CancelOnboardingPageController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\CancelOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/CancelOnboardingPageController.php:12
* @route '/onboarding/{reference}/cancel'
*/
CancelOnboardingPageControllerForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CancelOnboardingPageController.url(args, options),
    method: 'post',
})

CancelOnboardingPageController.form = CancelOnboardingPageControllerForm

export default CancelOnboardingPageController