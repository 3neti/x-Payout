import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
*/
const DashboardPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DashboardPageController.url(options),
    method: 'get',
})

DashboardPageController.definition = {
    methods: ["get","head"],
    url: '/x/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
*/
DashboardPageController.url = (options?: RouteQueryOptions) => {
    return DashboardPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
*/
DashboardPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DashboardPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
*/
DashboardPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: DashboardPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
*/
const DashboardPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
*/
DashboardPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
*/
DashboardPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DashboardPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

DashboardPageController.form = DashboardPageControllerForm

export default DashboardPageController