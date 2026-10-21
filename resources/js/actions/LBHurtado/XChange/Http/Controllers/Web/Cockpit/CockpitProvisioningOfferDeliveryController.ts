import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningOfferDeliveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningOfferDeliveryController.php:16
* @route '/x/cockpit/provisioning/offers/{provisioningOffer}/deliveries'
*/
const CockpitProvisioningOfferDeliveryController = (args: { provisioningOffer: string | number | { reference: string | number } } | [provisioningOffer: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitProvisioningOfferDeliveryController.url(args, options),
    method: 'post',
})

CockpitProvisioningOfferDeliveryController.definition = {
    methods: ["post"],
    url: '/x/cockpit/provisioning/offers/{provisioningOffer}/deliveries',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningOfferDeliveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningOfferDeliveryController.php:16
* @route '/x/cockpit/provisioning/offers/{provisioningOffer}/deliveries'
*/
CockpitProvisioningOfferDeliveryController.url = (args: { provisioningOffer: string | number | { reference: string | number } } | [provisioningOffer: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return CockpitProvisioningOfferDeliveryController.definition.url
            .replace('{provisioningOffer}', parsedArgs.provisioningOffer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningOfferDeliveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningOfferDeliveryController.php:16
* @route '/x/cockpit/provisioning/offers/{provisioningOffer}/deliveries'
*/
CockpitProvisioningOfferDeliveryController.post = (args: { provisioningOffer: string | number | { reference: string | number } } | [provisioningOffer: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitProvisioningOfferDeliveryController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningOfferDeliveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningOfferDeliveryController.php:16
* @route '/x/cockpit/provisioning/offers/{provisioningOffer}/deliveries'
*/
const CockpitProvisioningOfferDeliveryControllerForm = (args: { provisioningOffer: string | number | { reference: string | number } } | [provisioningOffer: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitProvisioningOfferDeliveryController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningOfferDeliveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningOfferDeliveryController.php:16
* @route '/x/cockpit/provisioning/offers/{provisioningOffer}/deliveries'
*/
CockpitProvisioningOfferDeliveryControllerForm.post = (args: { provisioningOffer: string | number | { reference: string | number } } | [provisioningOffer: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitProvisioningOfferDeliveryController.url(args, options),
    method: 'post',
})

CockpitProvisioningOfferDeliveryController.form = CockpitProvisioningOfferDeliveryControllerForm

export default CockpitProvisioningOfferDeliveryController