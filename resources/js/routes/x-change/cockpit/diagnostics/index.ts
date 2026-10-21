import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
export const runtimeProfile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: runtimeProfile.url(options),
    method: 'get',
})

runtimeProfile.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/diagnostics/runtime-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
runtimeProfile.url = (options?: RouteQueryOptions) => {
    return runtimeProfile.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
runtimeProfile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: runtimeProfile.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
runtimeProfile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: runtimeProfile.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
const runtimeProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runtimeProfile.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
runtimeProfileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runtimeProfile.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRuntimeProfilePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRuntimeProfilePageController.php:23
* @route '/x/cockpit/diagnostics/runtime-profile'
*/
runtimeProfileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runtimeProfile.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

runtimeProfile.form = runtimeProfileForm

const diagnostics = {
    runtimeProfile: Object.assign(runtimeProfile, runtimeProfile),
}

export default diagnostics