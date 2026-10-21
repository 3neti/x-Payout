import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
const CockpitDashboardPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitDashboardPageController.url(options),
    method: 'get',
})

CockpitDashboardPageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/overview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
CockpitDashboardPageController.url = (options?: RouteQueryOptions) => {
    return CockpitDashboardPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
CockpitDashboardPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitDashboardPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
CockpitDashboardPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitDashboardPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
const CockpitDashboardPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitDashboardPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
CockpitDashboardPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitDashboardPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
CockpitDashboardPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitDashboardPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitDashboardPageController.form = CockpitDashboardPageControllerForm

export default CockpitDashboardPageController