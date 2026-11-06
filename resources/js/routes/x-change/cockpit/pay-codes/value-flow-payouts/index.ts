import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:25
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts'
*/
export const index = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/pay-codes/{code}/value-flow-payouts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:25
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts'
*/
index.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:25
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts'
*/
index.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:25
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts'
*/
index.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:25
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts'
*/
const indexForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:25
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts'
*/
indexForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:25
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts'
*/
indexForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::check
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:73
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts/check'
*/
export const check = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: check.url(args, options),
    method: 'post',
})

check.definition = {
    methods: ["post"],
    url: '/x/cockpit/pay-codes/{code}/value-flow-payouts/check',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::check
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:73
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts/check'
*/
check.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return check.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::check
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:73
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts/check'
*/
check.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: check.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::check
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:73
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts/check'
*/
const checkForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: check.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::check
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:73
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts/check'
*/
checkForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: check.url(args, options),
    method: 'post',
})

check.form = checkForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:93
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts/{payout}/retry'
*/
export const retry = (args: { code: string | number, payout: string | number } | [code: string | number, payout: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry.url(args, options),
    method: 'post',
})

retry.definition = {
    methods: ["post"],
    url: '/x/cockpit/pay-codes/{code}/value-flow-payouts/{payout}/retry',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:93
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts/{payout}/retry'
*/
retry.url = (args: { code: string | number, payout: string | number } | [code: string | number, payout: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            code: args[0],
            payout: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
        payout: args.payout,
    }

    return retry.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{payout}', parsedArgs.payout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:93
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts/{payout}/retry'
*/
retry.post = (args: { code: string | number, payout: string | number } | [code: string | number, payout: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:93
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts/{payout}/retry'
*/
const retryForm = (args: { code: string | number, payout: string | number } | [code: string | number, payout: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitValueFlowPayoutRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitValueFlowPayoutRecoveryController.php:93
* @route '/x/cockpit/pay-codes/{code}/value-flow-payouts/{payout}/retry'
*/
retryForm.post = (args: { code: string | number, payout: string | number } | [code: string | number, payout: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

retry.form = retryForm

const valueFlowPayouts = {
    index: Object.assign(index, index),
    check: Object.assign(check, check),
    retry: Object.assign(retry, retry),
}

export default valueFlowPayouts