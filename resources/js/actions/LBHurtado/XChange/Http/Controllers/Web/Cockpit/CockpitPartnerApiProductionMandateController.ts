import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:23
* @route '/x/cockpit/api-partners/production-mandates'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/api-partners/production-mandates',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:23
* @route '/x/cockpit/api-partners/production-mandates'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:23
* @route '/x/cockpit/api-partners/production-mandates'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:23
* @route '/x/cockpit/api-partners/production-mandates'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:23
* @route '/x/cockpit/api-partners/production-mandates'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::approve
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:51
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/approvals'
*/
export const approve = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/approvals',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::approve
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:51
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/approvals'
*/
approve.url = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return approve.definition.url
            .replace('{partnerApiProductionMandate}', parsedArgs.partnerApiProductionMandate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::approve
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:51
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/approvals'
*/
approve.post = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::approve
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:51
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/approvals'
*/
const approveForm = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::approve
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:51
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/approvals'
*/
approveForm.post = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

approve.form = approveForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::activate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:58
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/activations'
*/
export const activate = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: activate.url(args, options),
    method: 'post',
})

activate.definition = {
    methods: ["post"],
    url: '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/activations',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::activate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:58
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/activations'
*/
activate.url = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return activate.definition.url
            .replace('{partnerApiProductionMandate}', parsedArgs.partnerApiProductionMandate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::activate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:58
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/activations'
*/
activate.post = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: activate.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::activate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:58
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/activations'
*/
const activateForm = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: activate.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiProductionMandateController::activate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiProductionMandateController.php:58
* @route '/x/cockpit/api-partners/production-mandates/{partnerApiProductionMandate}/activations'
*/
activateForm.post = (args: { partnerApiProductionMandate: string | number | { reference: string | number } } | [partnerApiProductionMandate: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: activate.url(args, options),
    method: 'post',
})

activate.form = activateForm

const CockpitPartnerApiProductionMandateController = { store, approve, activate }

export default CockpitPartnerApiProductionMandateController