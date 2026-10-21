import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
const CockpitRuntimeProfilePageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitRuntimeProfilePageController.url(options),
    method: 'get',
})

CockpitRuntimeProfilePageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/diagnostics/runtime-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
CockpitRuntimeProfilePageController.url = (options?: RouteQueryOptions) => {
    return CockpitRuntimeProfilePageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
CockpitRuntimeProfilePageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitRuntimeProfilePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
CockpitRuntimeProfilePageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitRuntimeProfilePageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
const CockpitRuntimeProfilePageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitRuntimeProfilePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
CockpitRuntimeProfilePageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitRuntimeProfilePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
CockpitRuntimeProfilePageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitRuntimeProfilePageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitRuntimeProfilePageController.form = CockpitRuntimeProfilePageControllerForm

export default CockpitRuntimeProfilePageController