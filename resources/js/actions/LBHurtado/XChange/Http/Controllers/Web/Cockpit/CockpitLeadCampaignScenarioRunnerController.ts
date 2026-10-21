import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:26
* @route '/x/cockpit/campaigns/lead-scenario-runner'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/campaigns/lead-scenario-runner',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:26
* @route '/x/cockpit/campaigns/lead-scenario-runner'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:26
* @route '/x/cockpit/campaigns/lead-scenario-runner'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:26
* @route '/x/cockpit/campaigns/lead-scenario-runner'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:26
* @route '/x/cockpit/campaigns/lead-scenario-runner'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:26
* @route '/x/cockpit/campaigns/lead-scenario-runner'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:26
* @route '/x/cockpit/campaigns/lead-scenario-runner'
*/
showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:37
* @route '/x/cockpit/campaigns/lead-scenario-runner'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/lead-scenario-runner',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:37
* @route '/x/cockpit/campaigns/lead-scenario-runner'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:37
* @route '/x/cockpit/campaigns/lead-scenario-runner'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:37
* @route '/x/cockpit/campaigns/lead-scenario-runner'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:37
* @route '/x/cockpit/campaigns/lead-scenario-runner'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::run
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
export const run = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: run.url(args, options),
    method: 'get',
})

run.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::run
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
run.url = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return run.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::run
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
run.get = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: run.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::run
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
run.head = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: run.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::run
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
const runForm = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: run.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::run
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
runForm.get = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: run.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitLeadCampaignScenarioRunnerController::run
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitLeadCampaignScenarioRunnerController.php:68
* @route '/x/cockpit/campaigns/lead-scenario-runner/runs/{campaign}'
*/
runForm.head = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: run.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

run.form = runForm

const CockpitLeadCampaignScenarioRunnerController = { show, store, run }

export default CockpitLeadCampaignScenarioRunnerController