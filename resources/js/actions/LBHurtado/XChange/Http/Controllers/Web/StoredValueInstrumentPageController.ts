import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
const StoredValueInstrumentPageController = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StoredValueInstrumentPageController.url(args, options),
    method: 'get',
})

StoredValueInstrumentPageController.definition = {
    methods: ["get","head"],
    url: '/x/balances/reusable/{instrument}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
StoredValueInstrumentPageController.url = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { instrument: args }
    }

    if (Array.isArray(args)) {
        args = {
            instrument: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        instrument: args.instrument,
    }

    return StoredValueInstrumentPageController.definition.url
            .replace('{instrument}', parsedArgs.instrument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
StoredValueInstrumentPageController.get = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StoredValueInstrumentPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
StoredValueInstrumentPageController.head = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: StoredValueInstrumentPageController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
const StoredValueInstrumentPageControllerForm = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StoredValueInstrumentPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
StoredValueInstrumentPageControllerForm.get = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StoredValueInstrumentPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
StoredValueInstrumentPageControllerForm.head = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StoredValueInstrumentPageController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

StoredValueInstrumentPageController.form = StoredValueInstrumentPageControllerForm

export default StoredValueInstrumentPageController