import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
*/
const CockpitCommercialOfferingPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitCommercialOfferingPageController.url(options),
    method: 'get',
})

CockpitCommercialOfferingPageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/commercial',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
*/
CockpitCommercialOfferingPageController.url = (options?: RouteQueryOptions) => {
    return CockpitCommercialOfferingPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
*/
CockpitCommercialOfferingPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitCommercialOfferingPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
*/
CockpitCommercialOfferingPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitCommercialOfferingPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
*/
const CockpitCommercialOfferingPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitCommercialOfferingPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
*/
CockpitCommercialOfferingPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitCommercialOfferingPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
*/
CockpitCommercialOfferingPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitCommercialOfferingPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitCommercialOfferingPageController.form = CockpitCommercialOfferingPageControllerForm

export default CockpitCommercialOfferingPageController