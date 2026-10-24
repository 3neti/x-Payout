import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\EnrollmentController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/EnrollmentController.php:19
* @route '/x/enroll/{reference}'
*/
export const show = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/enroll/{reference}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\EnrollmentController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/EnrollmentController.php:19
* @route '/x/enroll/{reference}'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\EnrollmentController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/EnrollmentController.php:19
* @route '/x/enroll/{reference}'
*/
show.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\EnrollmentController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/EnrollmentController.php:19
* @route '/x/enroll/{reference}'
*/
show.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\EnrollmentController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/EnrollmentController.php:19
* @route '/x/enroll/{reference}'
*/
const showForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\EnrollmentController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/EnrollmentController.php:19
* @route '/x/enroll/{reference}'
*/
showForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\EnrollmentController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/EnrollmentController.php:19
* @route '/x/enroll/{reference}'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\EnrollmentController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/EnrollmentController.php:34
* @route '/x/enroll/{reference}'
*/
export const store = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/enroll/{reference}',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\EnrollmentController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/EnrollmentController.php:34
* @route '/x/enroll/{reference}'
*/
store.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\EnrollmentController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/EnrollmentController.php:34
* @route '/x/enroll/{reference}'
*/
store.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\EnrollmentController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/EnrollmentController.php:34
* @route '/x/enroll/{reference}'
*/
const storeForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\EnrollmentController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/EnrollmentController.php:34
* @route '/x/enroll/{reference}'
*/
storeForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const EnrollmentController = { show, store }

export default EnrollmentController