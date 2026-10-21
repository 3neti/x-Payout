import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountPageController.php:28
* @route '/x/cockpit/accounts'
*/
const CockpitAccountPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitAccountPageController.url(options),
    method: 'get',
})

CockpitAccountPageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/accounts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountPageController.php:28
* @route '/x/cockpit/accounts'
*/
CockpitAccountPageController.url = (options?: RouteQueryOptions) => {
    return CockpitAccountPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountPageController.php:28
* @route '/x/cockpit/accounts'
*/
CockpitAccountPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitAccountPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountPageController.php:28
* @route '/x/cockpit/accounts'
*/
CockpitAccountPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitAccountPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountPageController.php:28
* @route '/x/cockpit/accounts'
*/
const CockpitAccountPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitAccountPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountPageController.php:28
* @route '/x/cockpit/accounts'
*/
CockpitAccountPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitAccountPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountPageController.php:28
* @route '/x/cockpit/accounts'
*/
CockpitAccountPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitAccountPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitAccountPageController.form = CockpitAccountPageControllerForm

export default CockpitAccountPageController