import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:74
* @route '/x/cockpit/funding/standing-addresses/netbank/history-checks'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/standing-addresses/netbank/history-checks',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:74
* @route '/x/cockpit/funding/standing-addresses/netbank/history-checks'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:74
* @route '/x/cockpit/funding/standing-addresses/netbank/history-checks'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:74
* @route '/x/cockpit/funding/standing-addresses/netbank/history-checks'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:74
* @route '/x/cockpit/funding/standing-addresses/netbank/history-checks'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const historyChecks = {
    store: Object.assign(store, store),
}

export default historyChecks