import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
*/
const CockpitReserveIssuanceIndexController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitReserveIssuanceIndexController.url(options),
    method: 'get',
})

CockpitReserveIssuanceIndexController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/quick-generate/reserve-issuances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
*/
CockpitReserveIssuanceIndexController.url = (options?: RouteQueryOptions) => {
    return CockpitReserveIssuanceIndexController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
*/
CockpitReserveIssuanceIndexController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitReserveIssuanceIndexController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
*/
CockpitReserveIssuanceIndexController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitReserveIssuanceIndexController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
*/
const CockpitReserveIssuanceIndexControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitReserveIssuanceIndexController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
*/
CockpitReserveIssuanceIndexControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitReserveIssuanceIndexController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
*/
CockpitReserveIssuanceIndexControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitReserveIssuanceIndexController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitReserveIssuanceIndexController.form = CockpitReserveIssuanceIndexControllerForm

export default CockpitReserveIssuanceIndexController