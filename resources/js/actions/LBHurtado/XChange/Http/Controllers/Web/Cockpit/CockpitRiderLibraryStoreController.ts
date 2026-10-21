import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryStoreController.php:15
* @route '/x/cockpit/rider-library'
*/
const CockpitRiderLibraryStoreController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitRiderLibraryStoreController.url(options),
    method: 'post',
})

CockpitRiderLibraryStoreController.definition = {
    methods: ["post"],
    url: '/x/cockpit/rider-library',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryStoreController.php:15
* @route '/x/cockpit/rider-library'
*/
CockpitRiderLibraryStoreController.url = (options?: RouteQueryOptions) => {
    return CockpitRiderLibraryStoreController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryStoreController.php:15
* @route '/x/cockpit/rider-library'
*/
CockpitRiderLibraryStoreController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitRiderLibraryStoreController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryStoreController.php:15
* @route '/x/cockpit/rider-library'
*/
const CockpitRiderLibraryStoreControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitRiderLibraryStoreController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryStoreController.php:15
* @route '/x/cockpit/rider-library'
*/
CockpitRiderLibraryStoreControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitRiderLibraryStoreController.url(options),
    method: 'post',
})

CockpitRiderLibraryStoreController.form = CockpitRiderLibraryStoreControllerForm

export default CockpitRiderLibraryStoreController