import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
const DemonstrationPolicySummaryController = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DemonstrationPolicySummaryController.url(args, options),
    method: 'get',
})

DemonstrationPolicySummaryController.definition = {
    methods: ["get","head"],
    url: '/x/demo/policies/{outcome}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
DemonstrationPolicySummaryController.url = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return DemonstrationPolicySummaryController.definition.url
            .replace('{outcome}', parsedArgs.outcome.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
DemonstrationPolicySummaryController.get = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DemonstrationPolicySummaryController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
DemonstrationPolicySummaryController.head = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: DemonstrationPolicySummaryController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
const DemonstrationPolicySummaryControllerForm = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DemonstrationPolicySummaryController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
DemonstrationPolicySummaryControllerForm.get = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DemonstrationPolicySummaryController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\DemonstrationPolicySummaryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/DemonstrationPolicySummaryController.php:15
* @route '/x/demo/policies/{outcome}'
*/
DemonstrationPolicySummaryControllerForm.head = (args: { outcome: string | number | { reference: string | number } } | [outcome: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DemonstrationPolicySummaryController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

DemonstrationPolicySummaryController.form = DemonstrationPolicySummaryControllerForm

export default DemonstrationPolicySummaryController