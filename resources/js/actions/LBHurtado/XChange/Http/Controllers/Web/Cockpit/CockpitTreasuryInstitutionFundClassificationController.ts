import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryInstitutionFundClassificationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryInstitutionFundClassificationController.php:15
* @route '/x/cockpit/treasury-operations/institution-funds'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/treasury-operations/institution-funds',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryInstitutionFundClassificationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryInstitutionFundClassificationController.php:15
* @route '/x/cockpit/treasury-operations/institution-funds'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryInstitutionFundClassificationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryInstitutionFundClassificationController.php:15
* @route '/x/cockpit/treasury-operations/institution-funds'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryInstitutionFundClassificationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryInstitutionFundClassificationController.php:15
* @route '/x/cockpit/treasury-operations/institution-funds'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryInstitutionFundClassificationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryInstitutionFundClassificationController.php:15
* @route '/x/cockpit/treasury-operations/institution-funds'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const CockpitTreasuryInstitutionFundClassificationController = { store }

export default CockpitTreasuryInstitutionFundClassificationController