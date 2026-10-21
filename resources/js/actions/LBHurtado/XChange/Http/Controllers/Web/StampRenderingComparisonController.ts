import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
const StampRenderingComparisonController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StampRenderingComparisonController.url(options),
    method: 'get',
})

StampRenderingComparisonController.definition = {
    methods: ["get","head"],
    url: '/x/stamps/rendering-comparison',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
StampRenderingComparisonController.url = (options?: RouteQueryOptions) => {
    return StampRenderingComparisonController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
StampRenderingComparisonController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StampRenderingComparisonController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
StampRenderingComparisonController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: StampRenderingComparisonController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
const StampRenderingComparisonControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StampRenderingComparisonController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
StampRenderingComparisonControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StampRenderingComparisonController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
StampRenderingComparisonControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StampRenderingComparisonController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

StampRenderingComparisonController.form = StampRenderingComparisonControllerForm

export default StampRenderingComparisonController