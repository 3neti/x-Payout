import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:102
* @route '/.well-known/x-change-public-mcp'
*/
export const discovery = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discovery.url(options),
    method: 'get',
})

discovery.definition = {
    methods: ["get","head"],
    url: '/.well-known/x-change-public-mcp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:102
* @route '/.well-known/x-change-public-mcp'
*/
discovery.url = (options?: RouteQueryOptions) => {
    return discovery.definition.url + queryParams(options)
}

/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:102
* @route '/.well-known/x-change-public-mcp'
*/
discovery.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discovery.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:102
* @route '/.well-known/x-change-public-mcp'
*/
discovery.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: discovery.url(options),
    method: 'head',
})

/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:102
* @route '/.well-known/x-change-public-mcp'
*/
const discoveryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: discovery.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:102
* @route '/.well-known/x-change-public-mcp'
*/
discoveryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: discovery.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:102
* @route '/.well-known/x-change-public-mcp'
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