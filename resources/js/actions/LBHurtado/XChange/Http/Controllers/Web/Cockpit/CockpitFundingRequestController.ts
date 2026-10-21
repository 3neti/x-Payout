import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestController.php:23
* @route '/x/cockpit/funding/requests'
*/
const CockpitFundingRequestController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingRequestController.url(options),
    method: 'post',
})

CockpitFundingRequestController.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/requests',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestController.php:23
* @route '/x/cockpit/funding/requests'
*/
CockpitFundingRequestController.url = (options?: RouteQueryOptions) => {
    return CockpitFundingRequestController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestController.php:23
* @route '/x/cockpit/funding/requests'
*/
CockpitFundingRequestController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingRequestController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestController.php:23
* @route '/x/cockpit/funding/requests'
*/
const CockpitFundingRequestControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingRequestController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestController.php:23
* @route '/x/cockpit/funding/requests'
*/
CockpitFundingRequestControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingRequestController.url(options),
    method: 'post',
})

CockpitFundingRequestController.form = CockpitFundingRequestControllerForm

export default CockpitFundingRequestController