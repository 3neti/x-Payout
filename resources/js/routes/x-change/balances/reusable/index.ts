import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
export const show = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/balances/reusable/{instrument}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
show.url = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{instrument}', parsedArgs.instrument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
show.get = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
show.head = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
const showForm = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
showForm.get = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueInstrumentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueInstrumentPageController.php:16
* @route '/x/balances/reusable/{instrument}'
*/
showForm.head = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const reusable = {
    show: Object.assign(show, show),
}

export default reusable