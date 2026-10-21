import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeExplorerPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeExplorerPageController.php:22
* @route '/x/cockpit/pay-codes'
*/
const CockpitPayCodeExplorerPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitPayCodeExplorerPageController.url(options),
    method: 'get',
})

CockpitPayCodeExplorerPageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/pay-codes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeExplorerPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeExplorerPageController.php:22
* @route '/x/cockpit/pay-codes'
*/
CockpitPayCodeExplorerPageController.url = (options?: RouteQueryOptions) => {
    return CockpitPayCodeExplorerPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeExplorerPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeExplorerPageController.php:22
* @route '/x/cockpit/pay-codes'
*/
CockpitPayCodeExplorerPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitPayCodeExplorerPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeExplorerPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeExplorerPageController.php:22
* @route '/x/cockpit/pay-codes'
*/
CockpitPayCodeExplorerPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitPayCodeExplorerPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeExplorerPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeExplorerPageController.php:22
* @route '/x/cockpit/pay-codes'
*/
const CockpitPayCodeExplorerPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPayCodeExplorerPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeExplorerPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeExplorerPageController.php:22
* @route '/x/cockpit/pay-codes'
*/
CockpitPayCodeExplorerPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPayCodeExplorerPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeExplorerPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeExplorerPageController.php:22
* @route '/x/cockpit/pay-codes'
*/
CockpitPayCodeExplorerPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPayCodeExplorerPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitPayCodeExplorerPageController.form = CockpitPayCodeExplorerPageControllerForm

export default CockpitPayCodeExplorerPageController