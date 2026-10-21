import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
export const show = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/demo/policies/{outcome}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
show.url = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outcome: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { outcome: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            outcome: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outcome: typeof args.outcome === 'object'
        ? args.outcome.reference
        : args.outcome,
    }

    return show.definition.url
            .replace('{outcome}', parsedArgs.outcome.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
show.get = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
show.head = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
const showForm = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
showForm.get = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
showForm.head = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const demoPolicy = {
    show: Object.assign(show, show),
}

export default demoPolicy