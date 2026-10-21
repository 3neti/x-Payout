import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
import approvals from './approvals'
import submissions from './submissions'
import reconciliations from './reconciliations'
import retries from './retries'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerCommissionPayoutBatchController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerCommissionPayoutBatchController.php:18
* @route '/x/cockpit/commercial/commission-payout-batches'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/commercial/commission-payout-batches',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerCommissionPayoutBatchController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerCommissionPayoutBatchController.php:18
* @route '/x/cockpit/commercial/commission-payout-batches'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerCommissionPayoutBatchController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerCommissionPayoutBatchController.php:18
* @route '/x/cockpit/commercial/commission-payout-batches'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerCommissionPayoutBatchController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerCommissionPayoutBatchController.php:18
* @route '/x/cockpit/commercial/commission-payout-batches'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerCommissionPayoutBatchController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerCommissionPayoutBatchController.php:18
* @route '/x/cockpit/commercial/commission-payout-batches'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const commission_payout_batches = {
    store: Object.assign(store, store),
    approvals: Object.assign(approvals, approvals),
    submissions: Object.assign(submissions, submissions),
    reconciliations: Object.assign(reconciliations, reconciliations),
    retries: Object.assign(retries, retries),
}

export default commission_payout_batches