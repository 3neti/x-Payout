import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingLiquidityRefreshController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingLiquidityRefreshController.php:19
* @route '/x/cockpit/funding/liquidity-refreshes'
*/
const CockpitFundingLiquidityRefreshController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingLiquidityRefreshController.url(options),
    method: 'post',
})

CockpitFundingLiquidityRefreshController.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/liquidity-refreshes',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingLiquidityRefreshController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingLiquidityRefreshController.php:19
* @route '/x/cockpit/funding/liquidity-refreshes'
*/
CockpitFundingLiquidityRefreshController.url = (options?: RouteQueryOptions) => {
    return CockpitFundingLiquidityRefreshController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingLiquidityRefreshController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingLiquidityRefreshController.php:19
* @route '/x/cockpit/funding/liquidity-refreshes'
*/
CockpitFundingLiquidityRefreshController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingLiquidityRefreshController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingLiquidityRefreshController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingLiquidityRefreshController.php:19
* @route '/x/cockpit/funding/liquidity-refreshes'
*/
const CockpitFundingLiquidityRefreshControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingLiquidityRefreshController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingLiquidityRefreshController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingLiquidityRefreshController.php:19
* @route '/x/cockpit/funding/liquidity-refreshes'
*/
CockpitFundingLiquidityRefreshControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingLiquidityRefreshController.url(options),
    method: 'post',
})

CockpitFundingLiquidityRefreshController.form = CockpitFundingLiquidityRefreshControllerForm

export default CockpitFundingLiquidityRefreshController