import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnrollmentOfferController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnrollmentOfferController.php:17
* @route '/x/cockpit/enrollments'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/enrollments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnrollmentOfferController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnrollmentOfferController.php:17
* @route '/x/cockpit/enrollments'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnrollmentOfferController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnrollmentOfferController.php:17
* @route '/x/cockpit/enrollments'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnrollmentOfferController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnrollmentOfferController.php:17
* @route '/x/cockpit/enrollments'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnrollmentOfferController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnrollmentOfferController.php:17
* @route '/x/cockpit/enrollments'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnrollmentOfferController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnrollmentOfferController.php:17
* @route '/x/cockpit/enrollments'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnrollmentOfferController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnrollmentOfferController.php:17
* @route '/x/cockpit/enrollments'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnrollmentOfferController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnrollmentOfferController.php:44
* @route '/x/cockpit/enrollments'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/enrollments',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnrollmentOfferController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnrollmentOfferController.php:44
* @route '/x/cockpit/enrollments'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnrollmentOfferController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnrollmentOfferController.php:44
* @route '/x/cockpit/enrollments'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnrollmentOfferController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnrollmentOfferController.php:44
* @route '/x/cockpit/enrollments'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnrollmentOfferController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnrollmentOfferController.php:44
* @route '/x/cockpit/enrollments'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const CockpitEnrollmentOfferController = { index, store }

export default CockpitEnrollmentOfferController