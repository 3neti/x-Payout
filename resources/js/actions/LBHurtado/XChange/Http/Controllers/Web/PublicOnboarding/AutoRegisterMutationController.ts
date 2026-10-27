import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:22
* @route '/x/auto-register/start'
*/
export const start = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/x/auto-register/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:22
* @route '/x/auto-register/start'
*/
start.url = (options?: RouteQueryOptions) => {
    return start.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:22
* @route '/x/auto-register/start'
*/
start.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:22
* @route '/x/auto-register/start'
*/
const startForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:22
* @route '/x/auto-register/start'
*/
startForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(options),
    method: 'post',
})

start.form = startForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:41
* @route '/x/auto-register/{registration}'
*/
export const status = (args: { registration: string | number | { reference: string | number } } | [registration: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

status.definition = {
    methods: ["get","head"],
    url: '/x/auto-register/{registration}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:41
* @route '/x/auto-register/{registration}'
*/
status.url = (args: { registration: string | number | { reference: string | number } } | [registration: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { registration: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { registration: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            registration: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        registration: typeof args.registration === 'object'
        ? args.registration.reference
        : args.registration,
    }

    return status.definition.url
            .replace('{registration}', parsedArgs.registration.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:41
* @route '/x/auto-register/{registration}'
*/
status.get = (args: { registration: string | number | { reference: string | number } } | [registration: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:41
* @route '/x/auto-register/{registration}'
*/
status.head = (args: { registration: string | number | { reference: string | number } } | [registration: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:41
* @route '/x/auto-register/{registration}'
*/
const statusForm = (args: { registration: string | number | { reference: string | number } } | [registration: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:41
* @route '/x/auto-register/{registration}'
*/
statusForm.get = (args: { registration: string | number | { reference: string | number } } | [registration: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:41
* @route '/x/auto-register/{registration}'
*/
statusForm.head = (args: { registration: string | number | { reference: string | number } } | [registration: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

status.form = statusForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::complete
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:62
* @route '/x/auto-register/{registration}/complete'
*/
export const complete = (args: { registration: string | number | { reference: string | number } } | [registration: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/x/auto-register/{registration}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::complete
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:62
* @route '/x/auto-register/{registration}/complete'
*/
complete.url = (args: { registration: string | number | { reference: string | number } } | [registration: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { registration: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { registration: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            registration: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        registration: typeof args.registration === 'object'
        ? args.registration.reference
        : args.registration,
    }

    return complete.definition.url
            .replace('{registration}', parsedArgs.registration.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::complete
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:62
* @route '/x/auto-register/{registration}/complete'
*/
complete.post = (args: { registration: string | number | { reference: string | number } } | [registration: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::complete
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:62
* @route '/x/auto-register/{registration}/complete'
*/
const completeForm = (args: { registration: string | number | { reference: string | number } } | [registration: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterMutationController::complete
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterMutationController.php:62
* @route '/x/auto-register/{registration}/complete'
*/
completeForm.post = (args: { registration: string | number | { reference: string | number } } | [registration: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

complete.form = completeForm

const AutoRegisterMutationController = { start, status, complete }

export default AutoRegisterMutationController