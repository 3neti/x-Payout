import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
const ShowPartnerApiOpenApiController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ShowPartnerApiOpenApiController.url(options),
    method: 'get',
})

ShowPartnerApiOpenApiController.definition = {
    methods: ["get","head"],
    url: '/api/partner/openapi.json',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
ShowPartnerApiOpenApiController.url = (options?: RouteQueryOptions) => {
    return ShowPartnerApiOpenApiController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
ShowPartnerApiOpenApiController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ShowPartnerApiOpenApiController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
ShowPartnerApiOpenApiController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ShowPartnerApiOpenApiController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
const ShowPartnerApiOpenApiControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ShowPartnerApiOpenApiController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
ShowPartnerApiOpenApiControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ShowPartnerApiOpenApiController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PartnerApi\ShowPartnerApiOpenApiController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PartnerApi/ShowPartnerApiOpenApiController.php:13
* @route '/api/partner/openapi.json'
*/
ShowPartnerApiOpenApiControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ShowPartnerApiOpenApiController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ShowPartnerApiOpenApiController.form = ShowPartnerApiOpenApiControllerForm

export default ShowPartnerApiOpenApiController