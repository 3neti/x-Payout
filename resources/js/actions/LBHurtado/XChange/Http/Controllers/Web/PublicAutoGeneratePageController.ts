import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:38
* @route '/x/auto-generate'
*/
const PublicAutoGeneratePageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicAutoGeneratePageController.url(options),
    method: 'get',
})

PublicAutoGeneratePageController.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:38
* @route '/x/auto-generate'
*/
PublicAutoGeneratePageController.url = (options?: RouteQueryOptions) => {
    return PublicAutoGeneratePageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:38
* @route '/x/auto-generate'
*/
PublicAutoGeneratePageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicAutoGeneratePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:38
* @route '/x/auto-generate'
*/
PublicAutoGeneratePageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PublicAutoGeneratePageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:38
* @route '/x/auto-generate'
*/
const PublicAutoGeneratePageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicAutoGeneratePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:38
* @route '/x/auto-generate'
*/
PublicAutoGeneratePageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicAutoGeneratePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:38
* @route '/x/auto-generate'
*/
PublicAutoGeneratePageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PublicAutoGeneratePageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PublicAutoGeneratePageController.form = PublicAutoGeneratePageControllerForm

export default PublicAutoGeneratePageController