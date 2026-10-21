import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
*/
const PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f.url(options),
    method: 'get',
})

PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f.definition = {
    methods: ["get","head"],
    url: '/.well-known/x-change-service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
*/
PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f.url = (options?: RouteQueryOptions) => {
    return PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
*/
PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
*/
PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
*/
const PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
*/
PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/.well-known/x-change-service'
*/
PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f.form = PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43fForm
/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
const PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82.url(options),
    method: 'get',
})

PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82.definition = {
    methods: ["get","head"],
    url: '/api/x/v1/public-issuance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82.url = (options?: RouteQueryOptions) => {
    return PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
const PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceDiscoveryController.php:13
* @route '/api/x/v1/public-issuance'
*/
PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82.form = PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceDiscoveryController::PublicIssuanceDiscoveryController, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `PublicIssuanceDiscoveryController['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const PublicIssuanceDiscoveryController = {
    '/.well-known/x-change-service': PublicIssuanceDiscoveryController8e9b82d69a82f43aefa6de7b408af43f,
    '/api/x/v1/public-issuance': PublicIssuanceDiscoveryControllere1e137f8712fdcf05819e6a430d07d82,
}

export default PublicIssuanceDiscoveryController