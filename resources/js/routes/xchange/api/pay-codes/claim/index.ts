import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\PreparePayCodeRedemptionFlowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/PreparePayCodeRedemptionFlowController.php:16
* @route '/api/x/v1/pay-codes/{code}/claim/start'
*/
export const start = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes/{code}/claim/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\PreparePayCodeRedemptionFlowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/PreparePayCodeRedemptionFlowController.php:16
* @route '/api/x/v1/pay-codes/{code}/claim/start'
*/
start.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return start.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\PreparePayCodeRedemptionFlowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/PreparePayCodeRedemptionFlowController.php:16
* @route '/api/x/v1/pay-codes/{code}/claim/start'
*/
start.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\PreparePayCodeRedemptionFlowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/PreparePayCodeRedemptionFlowController.php:16
* @route '/api/x/v1/pay-codes/{code}/claim/start'
*/
const startForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\PreparePayCodeRedemptionFlowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/PreparePayCodeRedemptionFlowController.php:16
* @route '/api/x/v1/pay-codes/{code}/claim/start'
*/
startForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(args, options),
    method: 'post',
})

start.form = startForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\LoadPayCodeRedemptionCompletionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/LoadPayCodeRedemptionCompletionContextController.php:17
* @route '/api/x/v1/pay-codes/{code}/claim/complete'
*/
export const complete = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes/{code}/claim/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\LoadPayCodeRedemptionCompletionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/LoadPayCodeRedemptionCompletionContextController.php:17
* @route '/api/x/v1/pay-codes/{code}/claim/complete'
*/
complete.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return complete.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\LoadPayCodeRedemptionCompletionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/LoadPayCodeRedemptionCompletionContextController.php:17
* @route '/api/x/v1/pay-codes/{code}/claim/complete'
*/
complete.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\LoadPayCodeRedemptionCompletionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/LoadPayCodeRedemptionCompletionContextController.php:17
* @route '/api/x/v1/pay-codes/{code}/claim/complete'
*/
const completeForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\LoadPayCodeRedemptionCompletionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/LoadPayCodeRedemptionCompletionContextController.php:17
* @route '/api/x/v1/pay-codes/{code}/claim/complete'
*/
completeForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

complete.form = completeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\SubmitPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/SubmitPayCodeClaimController.php:19
* @route '/api/x/v1/pay-codes/{code}/claim/submit'
*/
export const submit = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes/{code}/claim/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\SubmitPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/SubmitPayCodeClaimController.php:19
* @route '/api/x/v1/pay-codes/{code}/claim/submit'
*/
submit.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return submit.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\SubmitPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/SubmitPayCodeClaimController.php:19
* @route '/api/x/v1/pay-codes/{code}/claim/submit'
*/
submit.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\SubmitPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/SubmitPayCodeClaimController.php:19
* @route '/api/x/v1/pay-codes/{code}/claim/submit'
*/
const submitForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\SubmitPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/SubmitPayCodeClaimController.php:19
* @route '/api/x/v1/pay-codes/{code}/claim/submit'
*/
submitForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

submit.form = submitForm

const claim = {
    start: Object.assign(start, start),
    complete: Object.assign(complete, complete),
    submit: Object.assign(submit, submit),
}

export default claim