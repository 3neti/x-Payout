import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutFundingMethodController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutFundingMethodController.php:18
* @route '/x/auto-generate/funding-orders/{order}/funding-method'
*/
const PublicCheckoutFundingMethodController = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: PublicCheckoutFundingMethodController.url(args, options),
    method: 'post',
})

PublicCheckoutFundingMethodController.definition = {
    methods: ["post"],
    url: '/x/auto-generate/funding-orders/{order}/funding-method',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutFundingMethodController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutFundingMethodController.php:18
* @route '/x/auto-generate/funding-orders/{order}/funding-method'
*/
PublicCheckoutFundingMethodController.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { order: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.reference
        : args.order,
    }

    return PublicCheckoutFundingMethodController.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutFundingMethodController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutFundingMethodController.php:18
* @route '/x/auto-generate/funding-orders/{order}/funding-method'
*/
PublicCheckoutFundingMethodController.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: PublicCheckoutFundingMethodController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutFundingMethodController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutFundingMethodController.php:18
* @route '/x/auto-generate/funding-orders/{order}/funding-method'
*/
const PublicCheckoutFundingMethodControllerForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: PublicCheckoutFundingMethodController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutFundingMethodController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutFundingMethodController.php:18
* @route '/x/auto-generate/funding-orders/{order}/funding-method'
*/
PublicCheckoutFundingMethodControllerForm.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: PublicCheckoutFundingMethodController.url(args, options),
    method: 'post',
})

PublicCheckoutFundingMethodController.form = PublicCheckoutFundingMethodControllerForm

export default PublicCheckoutFundingMethodController