import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::authorizationServer
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:14
* @route '/.well-known/oauth-authorization-server'
*/
export const authorizationServer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: authorizationServer.url(options),
    method: 'get',
})

authorizationServer.definition = {
    methods: ["get","head"],
    url: '/.well-known/oauth-authorization-server',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::authorizationServer
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:14
* @route '/.well-known/oauth-authorization-server'
*/
authorizationServer.url = (options?: RouteQueryOptions) => {
    return authorizationServer.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::authorizationServer
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:14
* @route '/.well-known/oauth-authorization-server'
*/
authorizationServer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: authorizationServer.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::authorizationServer
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:14
* @route '/.well-known/oauth-authorization-server'
*/
authorizationServer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: authorizationServer.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::authorizationServer
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:14
* @route '/.well-known/oauth-authorization-server'
*/
const authorizationServerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: authorizationServer.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::authorizationServer
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:14
* @route '/.well-known/oauth-authorization-server'
*/
authorizationServerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: authorizationServer.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::authorizationServer
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:14
* @route '/.well-known/oauth-authorization-server'
*/
authorizationServerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: authorizationServer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

authorizationServer.form = authorizationServerForm

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::protectedResource
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:25
* @route '/.well-known/oauth-protected-resource'
*/
export const protectedResource = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: protectedResource.url(options),
    method: 'get',
})

protectedResource.definition = {
    methods: ["get","head"],
    url: '/.well-known/oauth-protected-resource',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::protectedResource
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:25
* @route '/.well-known/oauth-protected-resource'
*/
protectedResource.url = (options?: RouteQueryOptions) => {
    return protectedResource.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::protectedResource
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:25
* @route '/.well-known/oauth-protected-resource'
*/
protectedResource.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: protectedResource.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::protectedResource
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:25
* @route '/.well-known/oauth-protected-resource'
*/
protectedResource.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: protectedResource.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::protectedResource
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:25
* @route '/.well-known/oauth-protected-resource'
*/
const protectedResourceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: protectedResource.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::protectedResource
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:25
* @route '/.well-known/oauth-protected-resource'
*/
protectedResourceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: protectedResource.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::protectedResource
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:25
* @route '/.well-known/oauth-protected-resource'
*/
protectedResourceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: protectedResource.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

protectedResource.form = protectedResourceForm

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/.well-known/x-change-partner-api',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::alias
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
export const alias = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: alias.url(options),
    method: 'get',
})

alias.definition = {
    methods: ["get","head"],
    url: '/api/partner',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::alias
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
alias.url = (options?: RouteQueryOptions) => {
    return alias.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::alias
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
alias.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: alias.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::alias
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
alias.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: alias.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::alias
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
const aliasForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: alias.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::alias
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
aliasForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: alias.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::alias
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
aliasForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: alias.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

alias.form = aliasForm

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
export const openapi = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: openapi.url(options),
    method: 'get',
})

openapi.definition = {
    methods: ["get","head"],
    url: '/api/partner/openapi.json',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
openapi.url = (options?: RouteQueryOptions) => {
    return openapi.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
openapi.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: openapi.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
openapi.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: openapi.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
const openapiForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: openapi.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
openapiForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: openapi.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
openapiForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: openapi.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

openapi.form = openapiForm

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::llms
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:75
* @route '/llms.txt'
*/
export const llms = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: llms.url(options),
    method: 'get',
})

llms.definition = {
    methods: ["get","head"],
    url: '/llms.txt',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::llms
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:75
* @route '/llms.txt'
*/
llms.url = (options?: RouteQueryOptions) => {
    return llms.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::llms
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:75
* @route '/llms.txt'
*/
llms.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: llms.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::llms
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:75
* @route '/llms.txt'
*/
llms.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: llms.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::llms
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:75
* @route '/llms.txt'
*/
const llmsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: llms.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::llms
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:75
* @route '/llms.txt'
*/
llmsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: llms.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::llms
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:75
* @route '/llms.txt'
*/
llmsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: llms.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

llms.form = llmsForm

const discovery = {
    authorizationServer: Object.assign(authorizationServer, authorizationServer),
    protectedResource: Object.assign(protectedResource, protectedResource),
    index: Object.assign(index, index),
    alias: Object.assign(alias, alias),
    openapi: Object.assign(openapi, openapi),
    llms: Object.assign(llms, llms),
}

export default discovery