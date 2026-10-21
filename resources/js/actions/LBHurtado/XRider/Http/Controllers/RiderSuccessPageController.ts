import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
const RiderSuccessPageController = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RiderSuccessPageController.url(args, options),
    method: 'get',
})

RiderSuccessPageController.definition = {
    methods: ["get","head"],
    url: '/x-rider/{reference}/success',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
RiderSuccessPageController.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return RiderSuccessPageController.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
RiderSuccessPageController.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RiderSuccessPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
RiderSuccessPageController.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RiderSuccessPageController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
const RiderSuccessPageControllerForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RiderSuccessPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
RiderSuccessPageControllerForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RiderSuccessPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XRider\Http\Controllers\RiderSuccessPageController::__invoke
* @see vendor/3neti/x-rider/src/Http/Controllers/RiderSuccessPageController.php:20
* @route '/x-rider/{reference}/success'
*/
RiderSuccessPageControllerForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RiderSuccessPageController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RiderSuccessPageController.form = RiderSuccessPageControllerForm

export default RiderSuccessPageController