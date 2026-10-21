import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQrPhFundingSimulationController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQrPhFundingSimulationController.php:19
* @route '/x/cockpit/funding/scenarios/qrph'
*/
const CockpitQrPhFundingSimulationController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitQrPhFundingSimulationController.url(options),
    method: 'post',
})

CockpitQrPhFundingSimulationController.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/scenarios/qrph',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQrPhFundingSimulationController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQrPhFundingSimulationController.php:19
* @route '/x/cockpit/funding/scenarios/qrph'
*/
CockpitQrPhFundingSimulationController.url = (options?: RouteQueryOptions) => {
    return CockpitQrPhFundingSimulationController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQrPhFundingSimulationController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQrPhFundingSimulationController.php:19
* @route '/x/cockpit/funding/scenarios/qrph'
*/
CockpitQrPhFundingSimulationController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitQrPhFundingSimulationController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQrPhFundingSimulationController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQrPhFundingSimulationController.php:19
* @route '/x/cockpit/funding/scenarios/qrph'
*/
const CockpitQrPhFundingSimulationControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitQrPhFundingSimulationController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQrPhFundingSimulationController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQrPhFundingSimulationController.php:19
* @route '/x/cockpit/funding/scenarios/qrph'
*/
CockpitQrPhFundingSimulationControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitQrPhFundingSimulationController.url(options),
    method: 'post',
})

CockpitQrPhFundingSimulationController.form = CockpitQrPhFundingSimulationControllerForm

export default CockpitQrPhFundingSimulationController