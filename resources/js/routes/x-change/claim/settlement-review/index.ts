import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSettlementReviewController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSettlementReviewController.php:20
* @route '/x/claim/{code}/settlement-review'
*/
export const show = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/settlement-review',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSettlementReviewController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSettlementReviewController.php:20
* @route '/x/claim/{code}/settlement-review'
*/
show.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { code: args }
    }

    if (Array.isArray(args)) {
        args = {
            code: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
    }

    return show.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSettlementReviewController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSettlementReviewController.php:20
* @route '/x/claim/{code}/settlement-review'
*/
show.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSettlementReviewController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSettlementReviewController.php:20
* @route '/x/claim/{code}/settlement-review'
*/
show.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSettlementReviewController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSettlementReviewController.php:20
* @route '/x/claim/{code}/settlement-review'
*/
const showForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSettlementReviewController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSettlementReviewController.php:20
* @route '/x/claim/{code}/settlement-review'
*/
showForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSettlementReviewController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSettlementReviewController.php:20
* @route '/x/claim/{code}/settlement-review'
*/
showForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSettlementReviewController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSettlementReviewController.php:40
* @route '/x/claim/{code}/settlement-review'
*/
export const store = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/claim/{code}/settlement-review',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSettlementReviewController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSettlementReviewController.php:40
* @route '/x/claim/{code}/settlement-review'
*/
store.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { code: args }
    }

    if (Array.isArray(args)) {
        args = {
            code: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
    }

    return store.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSettlementReviewController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSettlementReviewController.php:40
* @route '/x/claim/{code}/settlement-review'
*/
store.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSettlementReviewController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSettlementReviewController.php:40
* @route '/x/claim/{code}/settlement-review'
*/
const storeForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSettlementReviewController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSettlementReviewController.php:40
* @route '/x/claim/{code}/settlement-review'
*/
storeForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const settlementReview = {
    show: Object.assign(show, show),
    store: Object.assign(store, store),
}

export default settlementReview