import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingIntentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingIntentController.php:21
* @route '/x/cockpit/funding/intents'
*/
const CockpitFundingIntentController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingIntentController.url(options),
    method: 'post',
})

CockpitFundingIntentController.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/intents',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingIntentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingIntentController.php:21
* @route '/x/cockpit/funding/intents'
*/
CockpitFundingIntentController.url = (options?: RouteQueryOptions) => {
    return CockpitFundingIntentController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingIntentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingIntentController.php:21
* @route '/x/cockpit/funding/intents'
*/
CockpitFundingIntentController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingIntentController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingIntentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingIntentController.php:21
* @route '/x/cockpit/funding/intents'
*/
const CockpitFundingIntentControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingIntentController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingIntentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingIntentController.php:21
* @route '/x/cockpit/funding/intents'
*/
CockpitFundingIntentControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingIntentController.url(options),
    method: 'post',
})

CockpitFundingIntentController.form = CockpitFundingIntentControllerForm

export default CockpitFundingIntentController