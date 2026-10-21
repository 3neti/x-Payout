import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiPageController.php:22
* @route '/x/cockpit/api-partners'
*/
const CockpitPartnerApiPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitPartnerApiPageController.url(options),
    method: 'get',
})

CockpitPartnerApiPageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/api-partners',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiPageController.php:22
* @route '/x/cockpit/api-partners'
*/
CockpitPartnerApiPageController.url = (options?: RouteQueryOptions) => {
    return CockpitPartnerApiPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiPageController.php:22
* @route '/x/cockpit/api-partners'
*/
CockpitPartnerApiPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitPartnerApiPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiPageController.php:22
* @route '/x/cockpit/api-partners'
*/
CockpitPartnerApiPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitPartnerApiPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiPageController.php:22
* @route '/x/cockpit/api-partners'
*/
const CockpitPartnerApiPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPartnerApiPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiPageController.php:22
* @route '/x/cockpit/api-partners'
*/
CockpitPartnerApiPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPartnerApiPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiPageController.php:22
* @route '/x/cockpit/api-partners'
*/
CockpitPartnerApiPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPartnerApiPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitPartnerApiPageController.form = CockpitPartnerApiPageControllerForm

export default CockpitPartnerApiPageController