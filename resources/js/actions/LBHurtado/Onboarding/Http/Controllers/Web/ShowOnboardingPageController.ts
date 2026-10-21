import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\ShowOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/ShowOnboardingPageController.php:13
* @route '/onboarding/{reference}'
*/
const ShowOnboardingPageController = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ShowOnboardingPageController.url(args, options),
    method: 'get',
})

ShowOnboardingPageController.definition = {
    methods: ["get","head"],
    url: '/onboarding/{reference}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\ShowOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/ShowOnboardingPageController.php:13
* @route '/onboarding/{reference}'
*/
ShowOnboardingPageController.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ShowOnboardingPageController.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\ShowOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/ShowOnboardingPageController.php:13
* @route '/onboarding/{reference}'
*/
ShowOnboardingPageController.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ShowOnboardingPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\ShowOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/ShowOnboardingPageController.php:13
* @route '/onboarding/{reference}'
*/
ShowOnboardingPageController.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ShowOnboardingPageController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\ShowOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/ShowOnboardingPageController.php:13
* @route '/onboarding/{reference}'
*/
const ShowOnboardingPageControllerForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ShowOnboardingPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\ShowOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/ShowOnboardingPageController.php:13
* @route '/onboarding/{reference}'
*/
ShowOnboardingPageControllerForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ShowOnboardingPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\Web\ShowOnboardingPageController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/Web/ShowOnboardingPageController.php:13
* @route '/onboarding/{reference}'
*/
ShowOnboardingPageControllerForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ShowOnboardingPageController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ShowOnboardingPageController.form = ShowOnboardingPageControllerForm

export default ShowOnboardingPageController