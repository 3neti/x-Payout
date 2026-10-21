import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \LBHurtado\Onboarding\Http\Controllers\StartOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/StartOnboardingController.php:11
* @route '/api/onboarding/start'
*/
const StartOnboardingController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StartOnboardingController.url(options),
    method: 'post',
})

StartOnboardingController.definition = {
    methods: ["post"],
    url: '/api/onboarding/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\Onboarding\Http\Controllers\StartOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/StartOnboardingController.php:11
* @route '/api/onboarding/start'
*/
StartOnboardingController.url = (options?: RouteQueryOptions) => {
    return StartOnboardingController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\Onboarding\Http\Controllers\StartOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/StartOnboardingController.php:11
* @route '/api/onboarding/start'
*/
StartOnboardingController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StartOnboardingController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\StartOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/StartOnboardingController.php:11
* @route '/api/onboarding/start'
*/
const StartOnboardingControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: StartOnboardingController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\StartOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/StartOnboardingController.php:11
* @route '/api/onboarding/start'
*/
StartOnboardingControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: StartOnboardingController.url(options),
    method: 'post',
})

StartOnboardingController.form = StartOnboardingControllerForm

export default StartOnboardingController