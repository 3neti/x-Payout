import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
*/
const CockpitFundingPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitFundingPageController.url(options),
    method: 'get',
})

CockpitFundingPageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/funding',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
*/
CockpitFundingPageController.url = (options?: RouteQueryOptions) => {
    return CockpitFundingPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
*/
CockpitFundingPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitFundingPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
*/
CockpitFundingPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitFundingPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
*/
const CockpitFundingPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitFundingPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
*/
CockpitFundingPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitFundingPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
*/
CockpitFundingPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitFundingPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitFundingPageController.form = CockpitFundingPageControllerForm

export default CockpitFundingPageController