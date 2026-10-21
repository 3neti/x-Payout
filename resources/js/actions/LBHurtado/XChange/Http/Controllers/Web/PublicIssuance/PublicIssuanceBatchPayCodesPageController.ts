import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
const PublicIssuanceBatchPayCodesPageController = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicIssuanceBatchPayCodesPageController.url(args, options),
    method: 'get',
})

PublicIssuanceBatchPayCodesPageController.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/batches/{batch}/pay-codes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
PublicIssuanceBatchPayCodesPageController.url = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { batch: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { batch: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            batch: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        batch: typeof args.batch === 'object'
        ? args.batch.reference
        : args.batch,
    }

    return PublicIssuanceBatchPayCodesPageController.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
PublicIssuanceBatchPayCodesPageController.get = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicIssuanceBatchPayCodesPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
PublicIssuanceBatchPayCodesPageController.head = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PublicIssuanceBatchPayCodesPageController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
const PublicIssuanceBatchPayCodesPageControllerForm = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceBatchPayCodesPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
PublicIssuanceBatchPayCodesPageControllerForm.get = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceBatchPayCodesPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
PublicIssuanceBatchPayCodesPageControllerForm.head = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceBatchPayCodesPageController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PublicIssuanceBatchPayCodesPageController.form = PublicIssuanceBatchPayCodesPageControllerForm

export default PublicIssuanceBatchPayCodesPageController