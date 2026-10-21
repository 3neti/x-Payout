import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
export const success = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: success.url(args, options),
    method: 'get',
})

success.definition = {
    methods: ["get","head"],
    url: '/x-rider/{reference}/success',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
success.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return success.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
success.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: success.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
success.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: success.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
const successForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: success.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
successForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: success.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
successForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: success.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

success.form = successForm

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
export const redirect = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(args, options),
    method: 'get',
})

redirect.definition = {
    methods: ["get","head"],
    url: '/x-rider/{reference}/redirect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
redirect.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return redirect.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
redirect.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
redirect.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirect.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
const redirectForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
redirectForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
redirectForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

redirect.form = redirectForm

const xRider = {
    success: Object.assign(success, success),
    redirect: Object.assign(redirect, redirect),
}

export default xRider