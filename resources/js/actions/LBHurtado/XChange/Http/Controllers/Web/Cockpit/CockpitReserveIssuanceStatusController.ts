import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
const CockpitReserveIssuanceStatusController = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitReserveIssuanceStatusController.url(args, options),
    method: 'get',
})

CockpitReserveIssuanceStatusController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/quick-generate/reserve-issuances/{reference}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
CockpitReserveIssuanceStatusController.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CockpitReserveIssuanceStatusController.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
CockpitReserveIssuanceStatusController.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitReserveIssuanceStatusController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
CockpitReserveIssuanceStatusController.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitReserveIssuanceStatusController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
const CockpitReserveIssuanceStatusControllerForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitReserveIssuanceStatusController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
CockpitReserveIssuanceStatusControllerForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitReserveIssuanceStatusController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
CockpitReserveIssuanceStatusControllerForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitReserveIssuanceStatusController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitReserveIssuanceStatusController.form = CockpitReserveIssuanceStatusControllerForm

export default CockpitReserveIssuanceStatusController