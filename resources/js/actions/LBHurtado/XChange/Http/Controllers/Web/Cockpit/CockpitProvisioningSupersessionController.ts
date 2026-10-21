import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningSupersessionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningSupersessionController.php:17
* @route '/x/cockpit/provisioning/offers/{provisioningOffer}/supersessions'
*/
export const store = (args: { provisioningOffer: string | number | { reference: string | number } } | [provisioningOffer: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/provisioning/offers/{provisioningOffer}/supersessions',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningSupersessionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningSupersessionController.php:17
* @route '/x/cockpit/provisioning/offers/{provisioningOffer}/supersessions'
*/
store.url = (args: { provisioningOffer: string | number | { reference: string | number } } | [provisioningOffer: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { provisioningOffer: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { provisioningOffer: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            provisioningOffer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        provisioningOffer: typeof args.provisioningOffer === 'object'
        ? args.provisioningOffer.reference
        : args.provisioningOffer,
    }

    return store.definition.url
            .replace('{provisioningOffer}', parsedArgs.provisioningOffer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningSupersessionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningSupersessionController.php:17
* @route '/x/cockpit/provisioning/offers/{provisioningOffer}/supersessions'
*/
store.post = (args: { provisioningOffer: string | number | { reference: string | number } } | [provisioningOffer: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningSupersessionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningSupersessionController.php:17
* @route '/x/cockpit/provisioning/offers/{provisioningOffer}/supersessions'
*/
const storeForm = (args: { provisioningOffer: string | number | { reference: string | number } } | [provisioningOffer: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningSupersessionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningSupersessionController.php:17
* @route '/x/cockpit/provisioning/offers/{provisioningOffer}/supersessions'
*/
storeForm.post = (args: { provisioningOffer: string | number | { reference: string | number } } | [provisioningOffer: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const CockpitProvisioningSupersessionController = { store }

export default CockpitProvisioningSupersessionController