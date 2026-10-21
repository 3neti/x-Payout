import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\LinkPaynamicsWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/LinkPaynamicsWalletController.php:14
* @route '/x/provider-wallets/paynamics'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/provider-wallets/paynamics',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\LinkPaynamicsWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/LinkPaynamicsWalletController.php:14
* @route '/x/provider-wallets/paynamics'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\LinkPaynamicsWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/LinkPaynamicsWalletController.php:14
* @route '/x/provider-wallets/paynamics'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\LinkPaynamicsWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/LinkPaynamicsWalletController.php:14
* @route '/x/provider-wallets/paynamics'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\LinkPaynamicsWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/LinkPaynamicsWalletController.php:14
* @route '/x/provider-wallets/paynamics'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const paynamics = {
    store: Object.assign(store, store),
}

export default paynamics