import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningPageController.php:23
* @route '/x/cockpit/provisioning'
*/
const CockpitProvisioningPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitProvisioningPageController.url(options),
    method: 'get',
})

CockpitProvisioningPageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/provisioning',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningPageController.php:23
* @route '/x/cockpit/provisioning'
*/
CockpitProvisioningPageController.url = (options?: RouteQueryOptions) => {
    return CockpitProvisioningPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningPageController.php:23
* @route '/x/cockpit/provisioning'
*/
CockpitProvisioningPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitProvisioningPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningPageController.php:23
* @route '/x/cockpit/provisioning'
*/
CockpitProvisioningPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitProvisioningPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningPageController.php:23
* @route '/x/cockpit/provisioning'
*/
const CockpitProvisioningPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitProvisioningPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningPageController.php:23
* @route '/x/cockpit/provisioning'
*/
CockpitProvisioningPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitProvisioningPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningPageController.php:23
* @route '/x/cockpit/provisioning'
*/
CockpitProvisioningPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitProvisioningPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitProvisioningPageController.form = CockpitProvisioningPageControllerForm

export default CockpitProvisioningPageController