import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import fundingOrders from './funding-orders'
import claimPreviews from './claim-previews'
import artworkPreviews from './artwork-previews'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateInterpretController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateInterpretController.php:16
* @route '/x/cockpit/quick-generate/interpret'
*/
export const interpret = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: interpret.url(options),
    method: 'post',
})

interpret.definition = {
    methods: ["post"],
    url: '/x/cockpit/quick-generate/interpret',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateInterpretController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateInterpretController.php:16
* @route '/x/cockpit/quick-generate/interpret'
*/
interpret.url = (options?: RouteQueryOptions) => {
    return interpret.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateInterpretController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateInterpretController.php:16
* @route '/x/cockpit/quick-generate/interpret'
*/
interpret.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: interpret.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateInterpretController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateInterpretController.php:16
* @route '/x/cockpit/quick-generate/interpret'
*/
const interpretForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: interpret.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateInterpretController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateInterpretController.php:16
* @route '/x/cockpit/quick-generate/interpret'
*/
interpretForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: interpret.url(options),
    method: 'post',
})

interpret.form = interpretForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateFundingPreflightController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateFundingPreflightController.php:19
* @route '/x/cockpit/quick-generate/funding-preflight'
*/
export const fundingPreflight = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: fundingPreflight.url(options),
    method: 'post',
})

fundingPreflight.definition = {
    methods: ["post"],
    url: '/x/cockpit/quick-generate/funding-preflight',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateFundingPreflightController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateFundingPreflightController.php:19
* @route '/x/cockpit/quick-generate/funding-preflight'
*/
fundingPreflight.url = (options?: RouteQueryOptions) => {
    return fundingPreflight.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateFundingPreflightController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateFundingPreflightController.php:19
* @route '/x/cockpit/quick-generate/funding-preflight'
*/
fundingPreflight.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: fundingPreflight.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateFundingPreflightController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateFundingPreflightController.php:19
* @route '/x/cockpit/quick-generate/funding-preflight'
*/
const fundingPreflightForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: fundingPreflight.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateFundingPreflightController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateFundingPreflightController.php:19
* @route '/x/cockpit/quick-generate/funding-preflight'
*/
fundingPreflightForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: fundingPreflight.url(options),
    method: 'post',
})

fundingPreflight.form = fundingPreflightForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateMutationRouteShellController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateMutationRouteShellController.php:55
* @route '/x/cockpit/quick-generate'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/quick-generate',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateMutationRouteShellController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateMutationRouteShellController.php:55
* @route '/x/cockpit/quick-generate'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateMutationRouteShellController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateMutationRouteShellController.php:55
* @route '/x/cockpit/quick-generate'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateMutationRouteShellController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateMutationRouteShellController.php:55
* @route '/x/cockpit/quick-generate'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateMutationRouteShellController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateMutationRouteShellController.php:55
* @route '/x/cockpit/quick-generate'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const quickGenerate = {
    interpret: Object.assign(interpret, interpret),
    fundingPreflight: Object.assign(fundingPreflight, fundingPreflight),
    store: Object.assign(store, store),
    fundingOrders: Object.assign(fundingOrders, fundingOrders),
    claimPreviews: Object.assign(claimPreviews, claimPreviews),
    artworkPreviews: Object.assign(artworkPreviews, artworkPreviews),
}

export default quickGenerate