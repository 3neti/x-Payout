import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryAccountGrantPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryAccountGrantPageController.php:27
* @route '/x/cockpit/treasury-operations'
*/
const CockpitTreasuryAccountGrantPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitTreasuryAccountGrantPageController.url(options),
    method: 'get',
})

CockpitTreasuryAccountGrantPageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/treasury-operations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryAccountGrantPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryAccountGrantPageController.php:27
* @route '/x/cockpit/treasury-operations'
*/
CockpitTreasuryAccountGrantPageController.url = (options?: RouteQueryOptions) => {
    return CockpitTreasuryAccountGrantPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryAccountGrantPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryAccountGrantPageController.php:27
* @route '/x/cockpit/treasury-operations'
*/
CockpitTreasuryAccountGrantPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitTreasuryAccountGrantPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryAccountGrantPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryAccountGrantPageController.php:27
* @route '/x/cockpit/treasury-operations'
*/
CockpitTreasuryAccountGrantPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitTreasuryAccountGrantPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryAccountGrantPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryAccountGrantPageController.php:27
* @route '/x/cockpit/treasury-operations'
*/
const CockpitTreasuryAccountGrantPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitTreasuryAccountGrantPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryAccountGrantPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryAccountGrantPageController.php:27
* @route '/x/cockpit/treasury-operations'
*/
CockpitTreasuryAccountGrantPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitTreasuryAccountGrantPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryAccountGrantPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryAccountGrantPageController.php:27
* @route '/x/cockpit/treasury-operations'
*/
CockpitTreasuryAccountGrantPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitTreasuryAccountGrantPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitTreasuryAccountGrantPageController.form = CockpitTreasuryAccountGrantPageControllerForm

export default CockpitTreasuryAccountGrantPageController