import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\RedeemPayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/RedeemPayCodeController.php:19
* @route '/api/x/v1/pay-codes/{code}/redeem'
*/
const RedeemPayCodeController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedeemPayCodeController.url(args, options),
    method: 'post',
})

RedeemPayCodeController.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes/{code}/redeem',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\RedeemPayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/RedeemPayCodeController.php:19
* @route '/api/x/v1/pay-codes/{code}/redeem'
*/
RedeemPayCodeController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return RedeemPayCodeController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\RedeemPayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/RedeemPayCodeController.php:19
* @route '/api/x/v1/pay-codes/{code}/redeem'
*/
RedeemPayCodeController.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedeemPayCodeController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\RedeemPayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/RedeemPayCodeController.php:19
* @route '/api/x/v1/pay-codes/{code}/redeem'
*/
const RedeemPayCodeControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedeemPayCodeController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\RedeemPayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/RedeemPayCodeController.php:19
* @route '/api/x/v1/pay-codes/{code}/redeem'
*/
RedeemPayCodeControllerForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedeemPayCodeController.url(args, options),
    method: 'post',
})

RedeemPayCodeController.form = RedeemPayCodeControllerForm

export default RedeemPayCodeController