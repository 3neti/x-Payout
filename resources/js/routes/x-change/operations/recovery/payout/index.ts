import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:324
* @route '/x/operations/recovery/payouts/{payout}/retry'
*/
export const retry = (args: { payout: string | number } | [payout: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry.url(args, options),
    method: 'post',
})

retry.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/payouts/{payout}/retry',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:324
* @route '/x/operations/recovery/payouts/{payout}/retry'
*/
retry.url = (args: { payout: string | number } | [payout: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payout: args }
    }

    if (Array.isArray(args)) {
        args = {
            payout: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payout: args.payout,
    }

    return retry.definition.url
            .replace('{payout}', parsedArgs.payout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:324
* @route '/x/operations/recovery/payouts/{payout}/retry'
*/
retry.post = (args: { payout: string | number } | [payout: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:324
* @route '/x/operations/recovery/payouts/{payout}/retry'
*/
const retryForm = (args: { payout: string | number } | [payout: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:324
* @route '/x/operations/recovery/payouts/{payout}/retry'
*/
retryForm.post = (args: { payout: string | number } | [payout: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

retry.form = retryForm

const payout = {
    retry: Object.assign(retry, retry),
}

export default payout