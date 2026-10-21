import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
import historyChecks from './history-checks'
import receipts from './receipts'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:19
* @route '/x/cockpit/funding/standing-addresses/netbank'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/standing-addresses/netbank',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:19
* @route '/x/cockpit/funding/standing-addresses/netbank'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:19
* @route '/x/cockpit/funding/standing-addresses/netbank'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:19
* @route '/x/cockpit/funding/standing-addresses/netbank'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:19
* @route '/x/cockpit/funding/standing-addresses/netbank'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const netbank = {
    store: Object.assign(store, store),
    historyChecks: Object.assign(historyChecks, historyChecks),
    receipts: Object.assign(receipts, receipts),
}

export default netbank