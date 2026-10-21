import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import web from './web'
/**
* @see \LBHurtado\Onboarding\Http\Controllers\StartOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/StartOnboardingController.php:11
* @route '/api/onboarding/start'
*/
export const start = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/api/onboarding/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\Onboarding\Http\Controllers\StartOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/StartOnboardingController.php:11
* @route '/api/onboarding/start'
*/
start.url = (options?: RouteQueryOptions) => {
    return start.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\Onboarding\Http\Controllers\StartOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/StartOnboardingController.php:11
* @route '/api/onboarding/start'
*/
start.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\StartOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/StartOnboardingController.php:11
* @route '/api/onboarding/start'
*/
const startForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\StartOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/StartOnboardingController.php:11
* @route '/api/onboarding/start'
*/
startForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(options),
    method: 'post',
})

start.form = startForm

/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
export const show = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/onboarding/{reference}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
show.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
show.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
show.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
const showForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
showForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\ShowOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/ShowOnboardingController.php:10
* @route '/api/onboarding/{reference}'
*/
showForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CompleteOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CompleteOnboardingController.php:11
* @route '/api/onboarding/{reference}/complete'
*/
export const complete = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/api/onboarding/{reference}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CompleteOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CompleteOnboardingController.php:11
* @route '/api/onboarding/{reference}/complete'
*/
complete.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return complete.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CompleteOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CompleteOnboardingController.php:11
* @route '/api/onboarding/{reference}/complete'
*/
complete.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CompleteOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CompleteOnboardingController.php:11
* @route '/api/onboarding/{reference}/complete'
*/
const completeForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CompleteOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CompleteOnboardingController.php:11
* @route '/api/onboarding/{reference}/complete'
*/
completeForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

complete.form = completeForm

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CancelOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CancelOnboardingController.php:11
* @route '/api/onboarding/{reference}/cancel'
*/
export const cancel = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/api/onboarding/{reference}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CancelOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CancelOnboardingController.php:11
* @route '/api/onboarding/{reference}/cancel'
*/
cancel.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return cancel.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CancelOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CancelOnboardingController.php:11
* @route '/api/onboarding/{reference}/cancel'
*/
cancel.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CancelOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CancelOnboardingController.php:11
* @route '/api/onboarding/{reference}/cancel'
*/
const cancelForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\Onboarding\Http\Controllers\CancelOnboardingController::__invoke
* @see vendor/3neti/onboarding/src/Http/Controllers/CancelOnboardingController.php:11
* @route '/api/onboarding/{reference}/cancel'
*/
cancelForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

cancel.form = cancelForm

const onboarding = {
    start: Object.assign(start, start),
    show: Object.assign(show, show),
    complete: Object.assign(complete, complete),
    cancel: Object.assign(cancel, cancel),
    web: Object.assign(web, web),
}

export default onboarding