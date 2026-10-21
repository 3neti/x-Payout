import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\InitialPinSetupController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/InitialPinSetupController.php:23
* @route '/x/onboarding/pin'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/onboarding/pin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\InitialPinSetupController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/InitialPinSetupController.php:23
* @route '/x/onboarding/pin'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\InitialPinSetupController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/InitialPinSetupController.php:23
* @route '/x/onboarding/pin'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\InitialPinSetupController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/InitialPinSetupController.php:23
* @route '/x/onboarding/pin'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\InitialPinSetupController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/InitialPinSetupController.php:23
* @route '/x/onboarding/pin'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\InitialPinSetupController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/InitialPinSetupController.php:23
* @route '/x/onboarding/pin'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\InitialPinSetupController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/InitialPinSetupController.php:23
* @route '/x/onboarding/pin'
*/
showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\InitialPinSetupController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/InitialPinSetupController.php:42
* @route '/x/onboarding/pin'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: store.url(options),
    method: 'put',
})

store.definition = {
    methods: ["put"],
    url: '/x/onboarding/pin',
} satisfies RouteDefinition<["put"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\InitialPinSetupController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/InitialPinSetupController.php:42
* @route '/x/onboarding/pin'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\InitialPinSetupController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/InitialPinSetupController.php:42
* @route '/x/onboarding/pin'
*/
store.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: store.url(options),
    method: 'put',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\InitialPinSetupController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/InitialPinSetupController.php:42
* @route '/x/onboarding/pin'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\InitialPinSetupController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/InitialPinSetupController.php:42
* @route '/x/onboarding/pin'
*/
storeForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

store.form = storeForm

const pin = {
    show: Object.assign(show, show),
    store: Object.assign(store, store),
}

export default pin