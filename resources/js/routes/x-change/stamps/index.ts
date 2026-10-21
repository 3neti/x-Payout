import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
export const renderingComparison = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: renderingComparison.url(options),
    method: 'get',
})

renderingComparison.definition = {
    methods: ["get","head"],
    url: '/x/stamps/rendering-comparison',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
renderingComparison.url = (options?: RouteQueryOptions) => {
    return renderingComparison.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
renderingComparison.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: renderingComparison.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
renderingComparison.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: renderingComparison.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
const renderingComparisonForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: renderingComparison.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
renderingComparisonForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: renderingComparison.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampRenderingComparisonController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampRenderingComparisonController.php:13
* @route '/x/stamps/rendering-comparison'
*/
renderingComparisonForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: renderingComparison.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

renderingComparison.form = renderingComparisonForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampPreviewController.php:23
* @route '/x/stamps/preview'
*/
export const preview = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

preview.definition = {
    methods: ["post"],
    url: '/x/stamps/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampPreviewController.php:23
* @route '/x/stamps/preview'
*/
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampPreviewController.php:23
* @route '/x/stamps/preview'
*/
preview.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampPreviewController.php:23
* @route '/x/stamps/preview'
*/
const previewForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampPreviewController.php:23
* @route '/x/stamps/preview'
*/
previewForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

preview.form = previewForm

const stamps = {
    renderingComparison: Object.assign(renderingComparison, renderingComparison),
    preview: Object.assign(preview, preview),
}

export default stamps