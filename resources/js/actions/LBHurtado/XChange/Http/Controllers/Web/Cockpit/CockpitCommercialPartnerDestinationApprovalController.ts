import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerDestinationApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerDestinationApprovalController.php:18
* @route '/x/cockpit/commercial/partner-destination-revisions/{destinationRevision}/approvals'
*/
export const store = (args: { destinationRevision: string | number | { id: string | number } } | [destinationRevision: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/commercial/partner-destination-revisions/{destinationRevision}/approvals',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerDestinationApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerDestinationApprovalController.php:18
* @route '/x/cockpit/commercial/partner-destination-revisions/{destinationRevision}/approvals'
*/
store.url = (args: { destinationRevision: string | number | { id: string | number } } | [destinationRevision: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { destinationRevision: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { destinationRevision: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            destinationRevision: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        destinationRevision: typeof args.destinationRevision === 'object'
        ? args.destinationRevision.id
        : args.destinationRevision,
    }

    return store.definition.url
            .replace('{destinationRevision}', parsedArgs.destinationRevision.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerDestinationApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerDestinationApprovalController.php:18
* @route '/x/cockpit/commercial/partner-destination-revisions/{destinationRevision}/approvals'
*/
store.post = (args: { destinationRevision: string | number | { id: string | number } } | [destinationRevision: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerDestinationApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerDestinationApprovalController.php:18
* @route '/x/cockpit/commercial/partner-destination-revisions/{destinationRevision}/approvals'
*/
const storeForm = (args: { destinationRevision: string | number | { id: string | number } } | [destinationRevision: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerDestinationApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerDestinationApprovalController.php:18
* @route '/x/cockpit/commercial/partner-destination-revisions/{destinationRevision}/approvals'
*/
storeForm.post = (args: { destinationRevision: string | number | { id: string | number } } | [destinationRevision: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const CockpitCommercialPartnerDestinationApprovalController = { store }

export default CockpitCommercialPartnerDestinationApprovalController