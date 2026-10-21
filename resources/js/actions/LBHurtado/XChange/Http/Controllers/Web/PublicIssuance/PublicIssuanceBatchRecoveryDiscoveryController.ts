import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::request
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:31
* @route '/x/auto-generate/batches/recovery/discover'
*/
export const request = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: request.url(options),
    method: 'post',
})

request.definition = {
    methods: ["post"],
    url: '/x/auto-generate/batches/recovery/discover',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::request
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:31
* @route '/x/auto-generate/batches/recovery/discover'
*/
request.url = (options?: RouteQueryOptions) => {
    return request.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::request
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:31
* @route '/x/auto-generate/batches/recovery/discover'
*/
request.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: request.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::request
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:31
* @route '/x/auto-generate/batches/recovery/discover'
*/
const requestForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: request.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::request
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:31
* @route '/x/auto-generate/batches/recovery/discover'
*/
requestForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: request.url(options),
    method: 'post',
})

request.form = requestForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:105
* @route '/x/auto-generate/batches/recovery/discover/verify'
*/
export const verify = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/x/auto-generate/batches/recovery/discover/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:105
* @route '/x/auto-generate/batches/recovery/discover/verify'
*/
verify.url = (options?: RouteQueryOptions) => {
    return verify.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:105
* @route '/x/auto-generate/batches/recovery/discover/verify'
*/
verify.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:105
* @route '/x/auto-generate/batches/recovery/discover/verify'
*/
const verifyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:105
* @route '/x/auto-generate/batches/recovery/discover/verify'
*/
verifyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(options),
    method: 'post',
})

verify.form = verifyForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::select
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:172
* @route '/x/auto-generate/batches/recovery/discover/select'
*/
export const select = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: select.url(options),
    method: 'post',
})

select.definition = {
    methods: ["post"],
    url: '/x/auto-generate/batches/recovery/discover/select',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::select
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:172
* @route '/x/auto-generate/batches/recovery/discover/select'
*/
select.url = (options?: RouteQueryOptions) => {
    return select.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::select
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:172
* @route '/x/auto-generate/batches/recovery/discover/select'
*/
select.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: select.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::select
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:172
* @route '/x/auto-generate/batches/recovery/discover/select'
*/
const selectForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: select.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchRecoveryDiscoveryController::select
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchRecoveryDiscoveryController.php:172
* @route '/x/auto-generate/batches/recovery/discover/select'
*/
selectForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: select.url(options),
    method: 'post',
})

select.form = selectForm

const PublicIssuanceBatchRecoveryDiscoveryController = { request, verify, select }

export default PublicIssuanceBatchRecoveryDiscoveryController