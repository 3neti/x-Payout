import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
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
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
const partnerApicb95c360a3439efe3f7e083c2306274b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: partnerApicb95c360a3439efe3f7e083c2306274b.url(options),
    method: 'get',
})

partnerApicb95c360a3439efe3f7e083c2306274b.definition = {
    methods: ["get","head"],
    url: '/.well-known/x-change-partner-api',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
partnerApicb95c360a3439efe3f7e083c2306274b.url = (options?: RouteQueryOptions) => {
    return partnerApicb95c360a3439efe3f7e083c2306274b.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
partnerApicb95c360a3439efe3f7e083c2306274b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: partnerApicb95c360a3439efe3f7e083c2306274b.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
partnerApicb95c360a3439efe3f7e083c2306274b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: partnerApicb95c360a3439efe3f7e083c2306274b.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
const partnerApicb95c360a3439efe3f7e083c2306274bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: partnerApicb95c360a3439efe3f7e083c2306274b.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
partnerApicb95c360a3439efe3f7e083c2306274bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: partnerApicb95c360a3439efe3f7e083c2306274b.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/.well-known/x-change-partner-api'
*/
partnerApicb95c360a3439efe3f7e083c2306274bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: partnerApicb95c360a3439efe3f7e083c2306274b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

partnerApicb95c360a3439efe3f7e083c2306274b.form = partnerApicb95c360a3439efe3f7e083c2306274bForm
/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
const partnerApic7d7f0ce75f73f008ef3b8b3784e6f72 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: partnerApic7d7f0ce75f73f008ef3b8b3784e6f72.url(options),
    method: 'get',
})

partnerApic7d7f0ce75f73f008ef3b8b3784e6f72.definition = {
    methods: ["get","head"],
    url: '/api/partner',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
partnerApic7d7f0ce75f73f008ef3b8b3784e6f72.url = (options?: RouteQueryOptions) => {
    return partnerApic7d7f0ce75f73f008ef3b8b3784e6f72.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
partnerApic7d7f0ce75f73f008ef3b8b3784e6f72.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: partnerApic7d7f0ce75f73f008ef3b8b3784e6f72.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
partnerApic7d7f0ce75f73f008ef3b8b3784e6f72.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: partnerApic7d7f0ce75f73f008ef3b8b3784e6f72.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
const partnerApic7d7f0ce75f73f008ef3b8b3784e6f72Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: partnerApic7d7f0ce75f73f008ef3b8b3784e6f72.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
partnerApic7d7f0ce75f73f008ef3b8b3784e6f72Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: partnerApic7d7f0ce75f73f008ef3b8b3784e6f72.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiDiscoveryController.php:35
* @route '/api/partner'
*/
partnerApic7d7f0ce75f73f008ef3b8b3784e6f72Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: partnerApic7d7f0ce75f73f008ef3b8b3784e6f72.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

partnerApic7d7f0ce75f73f008ef3b8b3784e6f72.form = partnerApic7d7f0ce75f73f008ef3b8b3784e6f72Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiDiscoveryController::partnerApi, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `partnerApi['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const partnerApi = {
    '/.well-known/x-change-partner-api': partnerApicb95c360a3439efe3f7e083c2306274b,
    '/api/partner': partnerApic7d7f0ce75f73f008ef3b8b3784e6f72,
}

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

const ShowPartnerApiDiscoveryController = { authorizationServer, protectedResource, partnerApi, llms }

export default ShowPartnerApiDiscoveryController