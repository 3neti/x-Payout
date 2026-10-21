import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
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

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::history
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:74
* @route '/x/cockpit/funding/standing-addresses/netbank/history-checks'
*/
export const history = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: history.url(options),
    method: 'post',
})

history.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/standing-addresses/netbank/history-checks',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::history
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:74
* @route '/x/cockpit/funding/standing-addresses/netbank/history-checks'
*/
history.url = (options?: RouteQueryOptions) => {
    return history.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::history
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:74
* @route '/x/cockpit/funding/standing-addresses/netbank/history-checks'
*/
history.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: history.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::history
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:74
* @route '/x/cockpit/funding/standing-addresses/netbank/history-checks'
*/
const historyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: history.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitNetbankStandingFundingAddressController::history
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitNetbankStandingFundingAddressController.php:74
* @route '/x/cockpit/funding/standing-addresses/netbank/history-checks'
*/
historyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: history.url(options),
    method: 'post',
})

history.form = historyForm

const CockpitNetbankStandingFundingAddressController = { store, history }

export default CockpitNetbankStandingFundingAddressController