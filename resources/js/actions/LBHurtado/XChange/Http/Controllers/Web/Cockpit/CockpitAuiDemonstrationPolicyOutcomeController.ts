import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAuiDemonstrationPolicyOutcomeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAuiDemonstrationPolicyOutcomeController.php:18
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}/demonstration-policy-outcome'
*/
const CockpitAuiDemonstrationPolicyOutcomeController = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitAuiDemonstrationPolicyOutcomeController.url(args, options),
    method: 'post',
})

CockpitAuiDemonstrationPolicyOutcomeController.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}/demonstration-policy-outcome',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAuiDemonstrationPolicyOutcomeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAuiDemonstrationPolicyOutcomeController.php:18
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}/demonstration-policy-outcome'
*/
CockpitAuiDemonstrationPolicyOutcomeController.url = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CockpitAuiDemonstrationPolicyOutcomeController.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAuiDemonstrationPolicyOutcomeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAuiDemonstrationPolicyOutcomeController.php:18
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}/demonstration-policy-outcome'
*/
CockpitAuiDemonstrationPolicyOutcomeController.post = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitAuiDemonstrationPolicyOutcomeController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAuiDemonstrationPolicyOutcomeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAuiDemonstrationPolicyOutcomeController.php:18
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}/demonstration-policy-outcome'
*/
const CockpitAuiDemonstrationPolicyOutcomeControllerForm = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitAuiDemonstrationPolicyOutcomeController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAuiDemonstrationPolicyOutcomeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAuiDemonstrationPolicyOutcomeController.php:18
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}/demonstration-policy-outcome'
*/
CockpitAuiDemonstrationPolicyOutcomeControllerForm.post = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitAuiDemonstrationPolicyOutcomeController.url(args, options),
    method: 'post',
})

CockpitAuiDemonstrationPolicyOutcomeController.form = CockpitAuiDemonstrationPolicyOutcomeControllerForm

export default CockpitAuiDemonstrationPolicyOutcomeController