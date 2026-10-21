import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerApprovalController.php:18
* @route '/x/cockpit/commercial/partner-revisions/{partnerRevision}/approvals'
*/
export const store = (args: { partnerRevision: string | number | { id: string | number } } | [partnerRevision: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/commercial/partner-revisions/{partnerRevision}/approvals',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerApprovalController.php:18
* @route '/x/cockpit/commercial/partner-revisions/{partnerRevision}/approvals'
*/
store.url = (args: { partnerRevision: string | number | { id: string | number } } | [partnerRevision: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { partnerRevision: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { partnerRevision: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            partnerRevision: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        partnerRevision: typeof args.partnerRevision === 'object'
        ? args.partnerRevision.id
        : args.partnerRevision,
    }

    return store.definition.url
            .replace('{partnerRevision}', parsedArgs.partnerRevision.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerApprovalController.php:18
* @route '/x/cockpit/commercial/partner-revisions/{partnerRevision}/approvals'
*/
store.post = (args: { partnerRevision: string | number | { id: string | number } } | [partnerRevision: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerApprovalController.php:18
* @route '/x/cockpit/commercial/partner-revisions/{partnerRevision}/approvals'
*/
const storeForm = (args: { partnerRevision: string | number | { id: string | number } } | [partnerRevision: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerApprovalController.php:18
* @route '/x/cockpit/commercial/partner-revisions/{partnerRevision}/approvals'
*/
storeForm.post = (args: { partnerRevision: string | number | { id: string | number } } | [partnerRevision: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const approvals = {
    store: Object.assign(store, store),
}

export default approvals