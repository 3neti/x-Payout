import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeFundingInspectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeFundingInspectionController.php:18
* @route '/x/cockpit/funding/pay-code-inspections'
*/
const CockpitPayCodeFundingInspectionController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPayCodeFundingInspectionController.url(options),
    method: 'post',
})

CockpitPayCodeFundingInspectionController.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/pay-code-inspections',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeFundingInspectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeFundingInspectionController.php:18
* @route '/x/cockpit/funding/pay-code-inspections'
*/
CockpitPayCodeFundingInspectionController.url = (options?: RouteQueryOptions) => {
    return CockpitPayCodeFundingInspectionController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeFundingInspectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeFundingInspectionController.php:18
* @route '/x/cockpit/funding/pay-code-inspections'
*/
CockpitPayCodeFundingInspectionController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPayCodeFundingInspectionController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeFundingInspectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeFundingInspectionController.php:18
* @route '/x/cockpit/funding/pay-code-inspections'
*/
const CockpitPayCodeFundingInspectionControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodeFundingInspectionController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeFundingInspectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeFundingInspectionController.php:18
* @route '/x/cockpit/funding/pay-code-inspections'
*/
CockpitPayCodeFundingInspectionControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodeFundingInspectionController.url(options),
    method: 'post',
})

CockpitPayCodeFundingInspectionController.form = CockpitPayCodeFundingInspectionControllerForm

export default CockpitPayCodeFundingInspectionController