import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
*/
export const discovery = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discovery.url(options),
    method: 'get',
})

discovery.definition = {
    methods: ["get","head"],
    url: '/.well-known/x-change-service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
*/
discovery.url = (options?: RouteQueryOptions) => {
    return discovery.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
*/
discovery.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discovery.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
*/
discovery.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: discovery.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
*/
const discoveryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: discovery.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
*/
discoveryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: discovery.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
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

const publicIssuance = {
    discovery: Object.assign(discovery, discovery),
}

export default publicIssuance