import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\LinkPaynamicsWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/LinkPaynamicsWalletController.php:14
* @route '/x/provider-wallets/paynamics'
*/
const LinkPaynamicsWalletController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LinkPaynamicsWalletController.url(options),
    method: 'post',
})

LinkPaynamicsWalletController.definition = {
    methods: ["post"],
    url: '/x/provider-wallets/paynamics',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\LinkPaynamicsWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/LinkPaynamicsWalletController.php:14
* @route '/x/provider-wallets/paynamics'
*/
LinkPaynamicsWalletController.url = (options?: RouteQueryOptions) => {
    return LinkPaynamicsWalletController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\LinkPaynamicsWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/LinkPaynamicsWalletController.php:14
* @route '/x/provider-wallets/paynamics'
*/
LinkPaynamicsWalletController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LinkPaynamicsWalletController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\LinkPaynamicsWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/LinkPaynamicsWalletController.php:14
* @route '/x/provider-wallets/paynamics'
*/
const LinkPaynamicsWalletControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LinkPaynamicsWalletController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\LinkPaynamicsWalletController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/LinkPaynamicsWalletController.php:14
* @route '/x/provider-wallets/paynamics'
*/
LinkPaynamicsWalletControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LinkPaynamicsWalletController.url(options),
    method: 'post',
})

LinkPaynamicsWalletController.form = LinkPaynamicsWalletControllerForm

export default LinkPaynamicsWalletController