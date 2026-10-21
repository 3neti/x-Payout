import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
const RiderRedirectController = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RiderRedirectController.url(args, options),
    method: 'get',
})

RiderRedirectController.definition = {
    methods: ["get","head"],
    url: '/x-rider/{reference}/redirect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
RiderRedirectController.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return RiderRedirectController.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
RiderRedirectController.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RiderRedirectController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
RiderRedirectController.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RiderRedirectController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
const RiderRedirectControllerForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RiderRedirectController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
RiderRedirectControllerForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RiderRedirectController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderRedirectController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderRedirectController.php:21
* @route '/x-rider/{reference}/redirect'
*/
RiderRedirectControllerForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RiderRedirectController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RiderRedirectController.form = RiderRedirectControllerForm

export default RiderRedirectController