import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
import runs from './runs'
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

const leadScenarioRunner = {
    show: Object.assign(show, show),
    store: Object.assign(store, store),
    runs: Object.assign(runs, runs),
}

export default leadScenarioRunner