import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:22
* @route '/x/cockpit'
*/
const CockpitEntryPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitEntryPageController.url(options),
    method: 'get',
})

CockpitEntryPageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:22
* @route '/x/cockpit'
*/
CockpitEntryPageController.url = (options?: RouteQueryOptions) => {
    return CockpitEntryPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:22
* @route '/x/cockpit'
*/
CockpitEntryPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitEntryPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:22
* @route '/x/cockpit'
*/
CockpitEntryPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitEntryPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:22
* @route '/x/cockpit'
*/
const CockpitEntryPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitEntryPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:22
* @route '/x/cockpit'
*/
CockpitEntryPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitEntryPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:22
* @route '/x/cockpit'
*/
CockpitEntryPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitEntryPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitEntryPageController.form = CockpitEntryPageControllerForm

export default CockpitEntryPageController