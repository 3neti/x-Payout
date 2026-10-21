import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderArtworkPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderArtworkPreviewController.php:14
* @route '/x/cockpit/quick-generate/artwork-previews'
*/
const CockpitRiderArtworkPreviewController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitRiderArtworkPreviewController.url(options),
    method: 'post',
})

CockpitRiderArtworkPreviewController.definition = {
    methods: ["post"],
    url: '/x/cockpit/quick-generate/artwork-previews',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderArtworkPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderArtworkPreviewController.php:14
* @route '/x/cockpit/quick-generate/artwork-previews'
*/
CockpitRiderArtworkPreviewController.url = (options?: RouteQueryOptions) => {
    return CockpitRiderArtworkPreviewController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderArtworkPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderArtworkPreviewController.php:14
* @route '/x/cockpit/quick-generate/artwork-previews'
*/
CockpitRiderArtworkPreviewController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitRiderArtworkPreviewController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderArtworkPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderArtworkPreviewController.php:14
* @route '/x/cockpit/quick-generate/artwork-previews'
*/
const CockpitRiderArtworkPreviewControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitRiderArtworkPreviewController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderArtworkPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderArtworkPreviewController.php:14
* @route '/x/cockpit/quick-generate/artwork-previews'
*/
CockpitRiderArtworkPreviewControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitRiderArtworkPreviewController.url(options),
    method: 'post',
})

CockpitRiderArtworkPreviewController.form = CockpitRiderArtworkPreviewControllerForm

export default CockpitRiderArtworkPreviewController