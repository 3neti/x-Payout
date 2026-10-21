import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
const CockpitQuickGeneratePageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGeneratePageController.url(options),
    method: 'get',
})

CockpitQuickGeneratePageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/quick-generate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
CockpitQuickGeneratePageController.url = (options?: RouteQueryOptions) => {
    return CockpitQuickGeneratePageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
CockpitQuickGeneratePageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGeneratePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
CockpitQuickGeneratePageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitQuickGeneratePageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
const CockpitQuickGeneratePageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGeneratePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
CockpitQuickGeneratePageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGeneratePageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
CockpitQuickGeneratePageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGeneratePageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitQuickGeneratePageController.form = CockpitQuickGeneratePageControllerForm

export default CockpitQuickGeneratePageController