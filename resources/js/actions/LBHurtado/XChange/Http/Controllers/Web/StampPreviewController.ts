import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampPreviewController.php:23
* @route '/x/stamps/preview'
*/
const StampPreviewController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StampPreviewController.url(options),
    method: 'post',
})

StampPreviewController.definition = {
    methods: ["post"],
    url: '/x/stamps/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampPreviewController.php:23
* @route '/x/stamps/preview'
*/
StampPreviewController.url = (options?: RouteQueryOptions) => {
    return StampPreviewController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampPreviewController.php:23
* @route '/x/stamps/preview'
*/
StampPreviewController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StampPreviewController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampPreviewController.php:23
* @route '/x/stamps/preview'
*/
const StampPreviewControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: StampPreviewController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StampPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StampPreviewController.php:23
* @route '/x/stamps/preview'
*/
StampPreviewControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: StampPreviewController.url(options),
    method: 'post',
})

StampPreviewController.form = StampPreviewControllerForm

export default StampPreviewController