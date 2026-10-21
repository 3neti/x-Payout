import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutDraftController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutDraftController.php:15
* @route '/x/auto-generate/checkouts'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/auto-generate/checkouts',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutDraftController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutDraftController.php:15
* @route '/x/auto-generate/checkouts'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutDraftController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutDraftController.php:15
* @route '/x/auto-generate/checkouts'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutDraftController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutDraftController.php:15
* @route '/x/auto-generate/checkouts'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutDraftController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutDraftController.php:15
* @route '/x/auto-generate/checkouts'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutDraftController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutDraftController.php:28
* @route '/x/auto-generate/checkouts/draft'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/checkouts/draft',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutDraftController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutDraftController.php:28
* @route '/x/auto-generate/checkouts/draft'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutDraftController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutDraftController.php:28
* @route '/x/auto-generate/checkouts/draft'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutDraftController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutDraftController.php:28
* @route '/x/auto-generate/checkouts/draft'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutDraftController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutDraftController.php:28
* @route '/x/auto-generate/checkouts/draft'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutDraftController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutDraftController.php:28
* @route '/x/auto-generate/checkouts/draft'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutDraftController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutDraftController.php:28
* @route '/x/auto-generate/checkouts/draft'
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

const checkouts = {
    store: Object.assign(store, store),
    show: Object.assign(show, show),
}

export default checkouts