import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAuiDemonstrationPolicyOutcomeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAuiDemonstrationPolicyOutcomeController.php:18
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}/demonstration-policy-outcome'
*/
export const store = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}/demonstration-policy-outcome',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAuiDemonstrationPolicyOutcomeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAuiDemonstrationPolicyOutcomeController.php:18
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}/demonstration-policy-outcome'
*/
store.url = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAuiDemonstrationPolicyOutcomeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAuiDemonstrationPolicyOutcomeController.php:18
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}/demonstration-policy-outcome'
*/
store.post = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAuiDemonstrationPolicyOutcomeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAuiDemonstrationPolicyOutcomeController.php:18
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}/demonstration-policy-outcome'
*/
const storeForm = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAuiDemonstrationPolicyOutcomeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAuiDemonstrationPolicyOutcomeController.php:18
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}/demonstration-policy-outcome'
*/
storeForm.post = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const demonstrationPolicyOutcome = {
    store: Object.assign(store, store),
}

export default demonstrationPolicyOutcome