import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:51
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/approvals'
*/
export const store = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/approvals',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:51
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/approvals'
*/
store.url = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { partnerApiProductionMandate: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { partnerApiProductionMandate: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            partnerApiProductionMandate: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        partnerApiProductionMandate: typeof args.partnerApiProductionMandate === 'object'
        ? args.partnerApiProductionMandate.reference
        : args.partnerApiProductionMandate,
    }

    return store.definition.url
            .replace('{partnerApiProductionMandate}', parsedArgs.partnerApiProductionMandate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:51
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/approvals'
*/
store.post = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:51
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/approvals'
*/
const storeForm = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:51
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/approvals'
*/
storeForm.post = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const approvals = {
    store: Object.assign(store, store),
}

export default approvals