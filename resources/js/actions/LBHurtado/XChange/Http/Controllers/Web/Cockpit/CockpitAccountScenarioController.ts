import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountScenarioController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountScenarioController.php:19
* @route '/x/cockpit/accounts/scenarios/funding-destinations'
*/
const CockpitAccountScenarioController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitAccountScenarioController.url(options),
    method: 'post',
})

CockpitAccountScenarioController.definition = {
    methods: ["post"],
    url: '/x/cockpit/accounts/scenarios/funding-destinations',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountScenarioController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountScenarioController.php:19
* @route '/x/cockpit/accounts/scenarios/funding-destinations'
*/
CockpitAccountScenarioController.url = (options?: RouteQueryOptions) => {
    return CockpitAccountScenarioController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountScenarioController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountScenarioController.php:19
* @route '/x/cockpit/accounts/scenarios/funding-destinations'
*/
CockpitAccountScenarioController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitAccountScenarioController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountScenarioController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountScenarioController.php:19
* @route '/x/cockpit/accounts/scenarios/funding-destinations'
*/
const CockpitAccountScenarioControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitAccountScenarioController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountScenarioController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountScenarioController.php:19
* @route '/x/cockpit/accounts/scenarios/funding-destinations'
*/
CockpitAccountScenarioControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitAccountScenarioController.url(options),
    method: 'post',
})

CockpitAccountScenarioController.form = CockpitAccountScenarioControllerForm

export default CockpitAccountScenarioController