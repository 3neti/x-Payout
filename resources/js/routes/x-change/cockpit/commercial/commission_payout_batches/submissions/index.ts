import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerCommissionPayoutSubmissionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerCommissionPayoutSubmissionController.php:18
* @route '/x/cockpit/commercial/commission-payout-batches/{commissionPayoutBatch}/submissions'
*/
export const store = (args: { commissionPayoutBatch: string | number | { id: string | number } } | [commissionPayoutBatch: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/commercial/commission-payout-batches/{commissionPayoutBatch}/submissions',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerCommissionPayoutSubmissionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerCommissionPayoutSubmissionController.php:18
* @route '/x/cockpit/commercial/commission-payout-batches/{commissionPayoutBatch}/submissions'
*/
store.url = (args: { commissionPayoutBatch: string | number | { id: string | number } } | [commissionPayoutBatch: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { commissionPayoutBatch: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { commissionPayoutBatch: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            commissionPayoutBatch: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        commissionPayoutBatch: typeof args.commissionPayoutBatch === 'object'
        ? args.commissionPayoutBatch.id
        : args.commissionPayoutBatch,
    }

    return store.definition.url
            .replace('{commissionPayoutBatch}', parsedArgs.commissionPayoutBatch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerCommissionPayoutSubmissionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerCommissionPayoutSubmissionController.php:18
* @route '/x/cockpit/commercial/commission-payout-batches/{commissionPayoutBatch}/submissions'
*/
store.post = (args: { commissionPayoutBatch: string | number | { id: string | number } } | [commissionPayoutBatch: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerCommissionPayoutSubmissionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerCommissionPayoutSubmissionController.php:18
* @route '/x/cockpit/commercial/commission-payout-batches/{commissionPayoutBatch}/submissions'
*/
const storeForm = (args: { commissionPayoutBatch: string | number | { id: string | number } } | [commissionPayoutBatch: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerCommissionPayoutSubmissionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerCommissionPayoutSubmissionController.php:18
* @route '/x/cockpit/commercial/commission-payout-batches/{commissionPayoutBatch}/submissions'
*/
storeForm.post = (args: { commissionPayoutBatch: string | number | { id: string | number } } | [commissionPayoutBatch: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const submissions = {
    store: Object.assign(store, store),
}

export default submissions