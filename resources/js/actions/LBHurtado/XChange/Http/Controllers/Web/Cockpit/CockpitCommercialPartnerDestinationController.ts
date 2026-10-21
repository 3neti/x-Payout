import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerDestinationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerDestinationController.php:19
* @route '/x/cockpit/commercial/partners/{partner}/destinations'
*/
export const store = (args: { partner: string | number | { id: string | number } } | [partner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/commercial/partners/{partner}/destinations',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerDestinationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerDestinationController.php:19
* @route '/x/cockpit/commercial/partners/{partner}/destinations'
*/
store.url = (args: { partner: string | number | { id: string | number } } | [partner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { partner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { partner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            partner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        partner: typeof args.partner === 'object'
        ? args.partner.id
        : args.partner,
    }

    return store.definition.url
            .replace('{partner}', parsedArgs.partner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerDestinationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerDestinationController.php:19
* @route '/x/cockpit/commercial/partners/{partner}/destinations'
*/
store.post = (args: { partner: string | number | { id: string | number } } | [partner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerDestinationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerDestinationController.php:19
* @route '/x/cockpit/commercial/partners/{partner}/destinations'
*/
const storeForm = (args: { partner: string | number | { id: string | number } } | [partner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialPartnerDestinationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialPartnerDestinationController.php:19
* @route '/x/cockpit/commercial/partners/{partner}/destinations'
*/
storeForm.post = (args: { partner: string | number | { id: string | number } } | [partner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const CockpitCommercialPartnerDestinationController = { store }

export default CockpitCommercialPartnerDestinationController