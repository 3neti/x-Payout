import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateFundingPreflightController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateFundingPreflightController.php:19
* @route '/x/cockpit/quick-generate/funding-preflight'
*/
const CockpitQuickGenerateFundingPreflightController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitQuickGenerateFundingPreflightController.url(options),
    method: 'post',
})

CockpitQuickGenerateFundingPreflightController.definition = {
    methods: ["post"],
    url: '/x/cockpit/quick-generate/funding-preflight',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateFundingPreflightController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateFundingPreflightController.php:19
* @route '/x/cockpit/quick-generate/funding-preflight'
*/
CockpitQuickGenerateFundingPreflightController.url = (options?: RouteQueryOptions) => {
    return CockpitQuickGenerateFundingPreflightController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateFundingPreflightController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateFundingPreflightController.php:19
* @route '/x/cockpit/quick-generate/funding-preflight'
*/
CockpitQuickGenerateFundingPreflightController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitQuickGenerateFundingPreflightController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateFundingPreflightController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateFundingPreflightController.php:19
* @route '/x/cockpit/quick-generate/funding-preflight'
*/
const CockpitQuickGenerateFundingPreflightControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitQuickGenerateFundingPreflightController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateFundingPreflightController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateFundingPreflightController.php:19
* @route '/x/cockpit/quick-generate/funding-preflight'
*/
CockpitQuickGenerateFundingPreflightControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitQuickGenerateFundingPreflightController.url(options),
    method: 'post',
})

CockpitQuickGenerateFundingPreflightController.form = CockpitQuickGenerateFundingPreflightControllerForm

export default CockpitQuickGenerateFundingPreflightController