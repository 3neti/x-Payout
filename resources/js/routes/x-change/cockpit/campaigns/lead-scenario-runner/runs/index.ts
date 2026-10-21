import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
import demonstrationPolicyOutcome from './demonstration-policy-outcome'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
export const show = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
show.url = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { campaign: args }
    }

    if (Array.isArray(args)) {
        args = {
            campaign: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        campaign: args.campaign,
    }

    return show.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
show.get = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
show.head = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
const showForm = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
showForm.get = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
showForm.head = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const runs = {
    show: Object.assign(show, show),
    demonstrationPolicyOutcome: Object.assign(demonstrationPolicyOutcome, demonstrationPolicyOutcome),
}

export default runs