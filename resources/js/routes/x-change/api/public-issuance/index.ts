import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
export const discovery = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discovery.url(options),
    method: 'get',
})

discovery.definition = {
    methods: ["get","head"],
    url: '/api/x/v1/public-issuance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
discovery.url = (options?: RouteQueryOptions) => {
    return discovery.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
discovery.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discovery.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
discovery.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: discovery.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
const discoveryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: discovery.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
discoveryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: discovery.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
discoveryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: discovery.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

discovery.form = discoveryForm

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceEstimateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceEstimateController.php:14
* @route '/api/x/v1/public-issuance/estimate'
*/
export const estimate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: estimate.url(options),
    method: 'post',
})

estimate.definition = {
    methods: ["post"],
    url: '/api/x/v1/public-issuance/estimate',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceEstimateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceEstimateController.php:14
* @route '/api/x/v1/public-issuance/estimate'
*/
estimate.url = (options?: RouteQueryOptions) => {
    return estimate.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceEstimateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceEstimateController.php:14
* @route '/api/x/v1/public-issuance/estimate'
*/
estimate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: estimate.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceEstimateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceEstimateController.php:14
* @route '/api/x/v1/public-issuance/estimate'
*/
const estimateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: estimate.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceEstimateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceEstimateController.php:14
* @route '/api/x/v1/public-issuance/estimate'
*/
estimateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: estimate.url(options),
    method: 'post',
})

estimate.form = estimateForm

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceHandoffController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceHandoffController.php:14
* @route '/api/x/v1/public-issuance/handoff'
*/
export const handoff = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handoff.url(options),
    method: 'post',
})

handoff.definition = {
    methods: ["post"],
    url: '/api/x/v1/public-issuance/handoff',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceHandoffController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceHandoffController.php:14
* @route '/api/x/v1/public-issuance/handoff'
*/
handoff.url = (options?: RouteQueryOptions) => {
    return handoff.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceHandoffController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceHandoffController.php:14
* @route '/api/x/v1/public-issuance/handoff'
*/
handoff.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handoff.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceHandoffController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceHandoffController.php:14
* @route '/api/x/v1/public-issuance/handoff'
*/
const handoffForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handoff.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceHandoffController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceHandoffController.php:14
* @route '/api/x/v1/public-issuance/handoff'
*/
handoffForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handoff.url(options),
    method: 'post',
})

handoff.form = handoffForm

const publicIssuance = {
    discovery: Object.assign(discovery, discovery),
    estimate: Object.assign(estimate, estimate),
    handoff: Object.assign(handoff, handoff),
}

export default publicIssuance