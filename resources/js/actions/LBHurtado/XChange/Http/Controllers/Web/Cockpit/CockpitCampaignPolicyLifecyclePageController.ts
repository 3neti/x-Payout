import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignPolicyLifecyclePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignPolicyLifecyclePageController.php:20
* @route '/x/cockpit/campaigns/policy-lifecycle'
*/
const CockpitCampaignPolicyLifecyclePageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitCampaignPolicyLifecyclePageController.url(options),
    method: 'get',
})

CockpitCampaignPolicyLifecyclePageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/campaigns/policy-lifecycle',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignPolicyLifecyclePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignPolicyLifecyclePageController.php:20
* @route '/x/cockpit/campaigns/policy-lifecycle'
*/
CockpitCampaignPolicyLifecyclePageController.url = (options?: RouteQueryOptions) => {
    return CockpitCampaignPolicyLifecyclePageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignPolicyLifecyclePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignPolicyLifecyclePageController.php:20
* @route '/x/cockpit/campaigns/policy-lifecycle'
*/
CockpitCampaignPolicyLifecyclePageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitCampaignPolicyLifecyclePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignPolicyLifecyclePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignPolicyLifecyclePageController.php:20
* @route '/x/cockpit/campaigns/policy-lifecycle'
*/
CockpitCampaignPolicyLifecyclePageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitCampaignPolicyLifecyclePageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignPolicyLifecyclePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignPolicyLifecyclePageController.php:20
* @route '/x/cockpit/campaigns/policy-lifecycle'
*/
const CockpitCampaignPolicyLifecyclePageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitCampaignPolicyLifecyclePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignPolicyLifecyclePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignPolicyLifecyclePageController.php:20
* @route '/x/cockpit/campaigns/policy-lifecycle'
*/
CockpitCampaignPolicyLifecyclePageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitCampaignPolicyLifecyclePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignPolicyLifecyclePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignPolicyLifecyclePageController.php:20
* @route '/x/cockpit/campaigns/policy-lifecycle'
*/
CockpitCampaignPolicyLifecyclePageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitCampaignPolicyLifecyclePageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitCampaignPolicyLifecyclePageController.form = CockpitCampaignPolicyLifecyclePageControllerForm

export default CockpitCampaignPolicyLifecyclePageController