import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import publicIssuance from './public-issuance'
/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:79
* @route '/.well-known/x-change-mcp'
*/
export const discovery = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discovery.url(options),
    method: 'get',
})

discovery.definition = {
    methods: ["get","head"],
    url: '/.well-known/x-change-mcp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:79
* @route '/.well-known/x-change-mcp'
*/
discovery.url = (options?: RouteQueryOptions) => {
    return discovery.definition.url + queryParams(options)
}

/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:79
* @route '/.well-known/x-change-mcp'
*/
discovery.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discovery.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:79
* @route '/.well-known/x-change-mcp'
*/
discovery.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: discovery.url(options),
    method: 'head',
})

/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:79
* @route '/.well-known/x-change-mcp'
*/
const discoveryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: discovery.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:79
* @route '/.well-known/x-change-mcp'
*/
discoveryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: discovery.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/x-mcp/src/XMcpServiceProvider.php:79
* @route '/.well-known/x-change-mcp'
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

const xMcp = {
    discovery: Object.assign(discovery, discovery),
    publicIssuance: Object.assign(publicIssuance, publicIssuance),
}

export default xMcp