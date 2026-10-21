import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
import claim from './claim'
/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\RedeemPayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/RedeemPayCodeController.php:19
* @route '/api/x/v1/pay-codes/{code}/redeem'
*/
export const redeem = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: redeem.url(args, options),
    method: 'post',
})

redeem.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes/{code}/redeem',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\RedeemPayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/RedeemPayCodeController.php:19
* @route '/api/x/v1/pay-codes/{code}/redeem'
*/
redeem.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return redeem.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\RedeemPayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/RedeemPayCodeController.php:19
* @route '/api/x/v1/pay-codes/{code}/redeem'
*/
redeem.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: redeem.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\RedeemPayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/RedeemPayCodeController.php:19
* @route '/api/x/v1/pay-codes/{code}/redeem'
*/
const redeemForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: redeem.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\RedeemPayCodeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/RedeemPayCodeController.php:19
* @route '/api/x/v1/pay-codes/{code}/redeem'
*/
redeemForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: redeem.url(args, options),
    method: 'post',
})

redeem.form = redeemForm

const payCodes = {
    claim: Object.assign(claim, claim),
    redeem: Object.assign(redeem, redeem),
}

export default payCodes