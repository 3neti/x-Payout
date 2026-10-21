import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPayCodeScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPayCodeScenarioRunnerController.php:31
* @route '/x/cockpit/campaigns/commercial-pay-code-scenario-runner'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/campaigns/commercial-pay-code-scenario-runner',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPayCodeScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPayCodeScenarioRunnerController.php:31
* @route '/x/cockpit/campaigns/commercial-pay-code-scenario-runner'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPayCodeScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPayCodeScenarioRunnerController.php:31
* @route '/x/cockpit/campaigns/commercial-pay-code-scenario-runner'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPayCodeScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPayCodeScenarioRunnerController.php:31
* @route '/x/cockpit/campaigns/commercial-pay-code-scenario-runner'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPayCodeScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPayCodeScenarioRunnerController.php:31
* @route '/x/cockpit/campaigns/commercial-pay-code-scenario-runner'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPayCodeScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPayCodeScenarioRunnerController.php:31
* @route '/x/cockpit/campaigns/commercial-pay-code-scenario-runner'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPayCodeScenarioRunnerController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPayCodeScenarioRunnerController.php:31
* @route '/x/cockpit/campaigns/commercial-pay-code-scenario-runner'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPayCodeScenarioRunnerController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPayCodeScenarioRunnerController.php:50
* @route '/x/cockpit/campaigns/commercial-pay-code-scenario-runner'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/commercial-pay-code-scenario-runner',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPayCodeScenarioRunnerController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPayCodeScenarioRunnerController.php:50
* @route '/x/cockpit/campaigns/commercial-pay-code-scenario-runner'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPayCodeScenarioRunnerController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPayCodeScenarioRunnerController.php:50
* @route '/x/cockpit/campaigns/commercial-pay-code-scenario-runner'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPayCodeScenarioRunnerController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPayCodeScenarioRunnerController.php:50
* @route '/x/cockpit/campaigns/commercial-pay-code-scenario-runner'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPayCodeScenarioRunnerController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPayCodeScenarioRunnerController.php:50
* @route '/x/cockpit/campaigns/commercial-pay-code-scenario-runner'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const commercialPayCodeScenarioRunner = {
    show: Object.assign(show, show),
    store: Object.assign(store, store),
}

export default commercialPayCodeScenarioRunner