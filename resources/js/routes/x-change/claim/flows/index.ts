import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:57
* @route '/x/claim/{code}/flows'
*/
export const store = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/claim/{code}/flows',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:57
* @route '/x/claim/{code}/flows'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:57
* @route '/x/claim/{code}/flows'
*/
store.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:57
* @route '/x/claim/{code}/flows'
*/
const storeForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:57
* @route '/x/claim/{code}/flows'
*/
storeForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const flows = {
    store: Object.assign(store, store),
}

export default flows