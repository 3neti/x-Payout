import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
const ShowOnboardingController = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ShowOnboardingController.url(args, options),
    method: 'get',
})

ShowOnboardingController.definition = {
    methods: ["get","head"],
    url: '/api/onboarding/{reference}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
ShowOnboardingController.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ShowOnboardingController.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
ShowOnboardingController.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ShowOnboardingController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
ShowOnboardingController.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ShowOnboardingController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
const ShowOnboardingControllerForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ShowOnboardingController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
ShowOnboardingControllerForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ShowOnboardingController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
ShowOnboardingControllerForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ShowOnboardingController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ShowOnboardingController.form = ShowOnboardingControllerForm

export default ShowOnboardingController