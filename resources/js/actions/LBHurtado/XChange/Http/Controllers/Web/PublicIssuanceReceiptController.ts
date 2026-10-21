import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
const PublicIssuanceReceiptController = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicIssuanceReceiptController.url(args, options),
    method: 'get',
})

PublicIssuanceReceiptController.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/receipts/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
PublicIssuanceReceiptController.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return PublicIssuanceReceiptController.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
PublicIssuanceReceiptController.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicIssuanceReceiptController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
PublicIssuanceReceiptController.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PublicIssuanceReceiptController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
const PublicIssuanceReceiptControllerForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceReceiptController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
PublicIssuanceReceiptControllerForm.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceReceiptController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
PublicIssuanceReceiptControllerForm.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceReceiptController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PublicIssuanceReceiptController.form = PublicIssuanceReceiptControllerForm

export default PublicIssuanceReceiptController