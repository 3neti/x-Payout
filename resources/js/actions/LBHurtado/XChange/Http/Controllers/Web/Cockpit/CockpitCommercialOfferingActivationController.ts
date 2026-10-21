import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingActivationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingActivationController.php:20
* @route '/x/cockpit/commercial/offerings/{offering}/activations'
*/
export const store = (args: { offering: string | number | { id: string | number } } | [offering: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/commercial/offerings/{offering}/activations',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingActivationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingActivationController.php:20
* @route '/x/cockpit/commercial/offerings/{offering}/activations'
*/
store.url = (args: { offering: string | number | { id: string | number } } | [offering: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { offering: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { offering: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            offering: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        offering: typeof args.offering === 'object'
        ? args.offering.id
        : args.offering,
    }

    return store.definition.url
            .replace('{offering}', parsedArgs.offering.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingActivationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingActivationController.php:20
* @route '/x/cockpit/commercial/offerings/{offering}/activations'
*/
store.post = (args: { offering: string | number | { id: string | number } } | [offering: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingActivationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingActivationController.php:20
* @route '/x/cockpit/commercial/offerings/{offering}/activations'
*/
const storeForm = (args: { offering: string | number | { id: string | number } } | [offering: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingActivationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingActivationController.php:20
* @route '/x/cockpit/commercial/offerings/{offering}/activations'
*/
storeForm.post = (args: { offering: string | number | { id: string | number } } | [offering: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const CockpitCommercialOfferingActivationController = { store }

export default CockpitCommercialOfferingActivationController