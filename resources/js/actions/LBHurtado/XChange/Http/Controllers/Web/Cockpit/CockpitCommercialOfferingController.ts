import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingController.php:26
* @route '/x/cockpit/commercial/offerings'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/commercial/offerings',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingController.php:26
* @route '/x/cockpit/commercial/offerings'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingController.php:26
* @route '/x/cockpit/commercial/offerings'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingController.php:26
* @route '/x/cockpit/commercial/offerings'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingController.php:26
* @route '/x/cockpit/commercial/offerings'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const CockpitCommercialOfferingController = { store }

export default CockpitCommercialOfferingController