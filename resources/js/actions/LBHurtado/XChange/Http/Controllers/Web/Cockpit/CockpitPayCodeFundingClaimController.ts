import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeFundingClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeFundingClaimController.php:17
* @route '/x/cockpit/funding/pay-code-claims'
*/
const CockpitPayCodeFundingClaimController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPayCodeFundingClaimController.url(options),
    method: 'post',
})

CockpitPayCodeFundingClaimController.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/pay-code-claims',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeFundingClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeFundingClaimController.php:17
* @route '/x/cockpit/funding/pay-code-claims'
*/
CockpitPayCodeFundingClaimController.url = (options?: RouteQueryOptions) => {
    return CockpitPayCodeFundingClaimController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeFundingClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeFundingClaimController.php:17
* @route '/x/cockpit/funding/pay-code-claims'
*/
CockpitPayCodeFundingClaimController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPayCodeFundingClaimController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeFundingClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeFundingClaimController.php:17
* @route '/x/cockpit/funding/pay-code-claims'
*/
const CockpitPayCodeFundingClaimControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodeFundingClaimController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeFundingClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeFundingClaimController.php:17
* @route '/x/cockpit/funding/pay-code-claims'
*/
CockpitPayCodeFundingClaimControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodeFundingClaimController.url(options),
    method: 'post',
})

CockpitPayCodeFundingClaimController.form = CockpitPayCodeFundingClaimControllerForm

export default CockpitPayCodeFundingClaimController