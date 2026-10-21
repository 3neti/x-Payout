import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
const CockpitDocumentationPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitDocumentationPageController.url(options),
    method: 'get',
})

CockpitDocumentationPageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/documentation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
CockpitDocumentationPageController.url = (options?: RouteQueryOptions) => {
    return CockpitDocumentationPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
CockpitDocumentationPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitDocumentationPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
CockpitDocumentationPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitDocumentationPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
const CockpitDocumentationPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitDocumentationPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
CockpitDocumentationPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitDocumentationPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
CockpitDocumentationPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitDocumentationPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitDocumentationPageController.form = CockpitDocumentationPageControllerForm

export default CockpitDocumentationPageController