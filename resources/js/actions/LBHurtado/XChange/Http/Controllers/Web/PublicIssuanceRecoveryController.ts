import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
const PublicIssuanceRecoveryController = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicIssuanceRecoveryController.url(args, options),
    method: 'get',
})

PublicIssuanceRecoveryController.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/recover/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
PublicIssuanceRecoveryController.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { order: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.reference
        : args.order,
    }

    return PublicIssuanceRecoveryController.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
PublicIssuanceRecoveryController.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicIssuanceRecoveryController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
PublicIssuanceRecoveryController.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PublicIssuanceRecoveryController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
const PublicIssuanceRecoveryControllerForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceRecoveryController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
PublicIssuanceRecoveryControllerForm.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceRecoveryController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
PublicIssuanceRecoveryControllerForm.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceRecoveryController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PublicIssuanceRecoveryController.form = PublicIssuanceRecoveryControllerForm

export default PublicIssuanceRecoveryController