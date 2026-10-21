import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryController::request
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryController.php:21
* @route '/x/auto-generate/batches/{batch}/recover'
*/
export const request = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: request.url(args, options),
    method: 'post',
})

request.definition = {
    methods: ["post"],
    url: '/x/auto-generate/batches/{batch}/recover',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryController::request
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryController.php:21
* @route '/x/auto-generate/batches/{batch}/recover'
*/
request.url = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { batch: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { batch: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            batch: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        batch: typeof args.batch === 'object'
        ? args.batch.reference
        : args.batch,
    }

    return request.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryController::request
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryController.php:21
* @route '/x/auto-generate/batches/{batch}/recover'
*/
request.post = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: request.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryController::request
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryController.php:21
* @route '/x/auto-generate/batches/{batch}/recover'
*/
const requestForm = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: request.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryController::request
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryController.php:21
* @route '/x/auto-generate/batches/{batch}/recover'
*/
requestForm.post = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: request.url(args, options),
    method: 'post',
})

request.form = requestForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryController.php:59
* @route '/x/auto-generate/batches/{batch}/recover/verify'
*/
export const verify = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/x/auto-generate/batches/{batch}/recover/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryController.php:59
* @route '/x/auto-generate/batches/{batch}/recover/verify'
*/
verify.url = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { batch: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { batch: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            batch: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        batch: typeof args.batch === 'object'
        ? args.batch.reference
        : args.batch,
    }

    return verify.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryController.php:59
* @route '/x/auto-generate/batches/{batch}/recover/verify'
*/
verify.post = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryController.php:59
* @route '/x/auto-generate/batches/{batch}/recover/verify'
*/
const verifyForm = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryController.php:59
* @route '/x/auto-generate/batches/{batch}/recover/verify'
*/
verifyForm.post = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(args, options),
    method: 'post',
})

verify.form = verifyForm

const PublicIssuanceBatchRecoveryController = { request, verify }

export default PublicIssuanceBatchRecoveryController