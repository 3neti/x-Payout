import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
const CommissioningStatusController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CommissioningStatusController.url(options),
    method: 'get',
})

CommissioningStatusController.definition = {
    methods: ["get","head"],
    url: '/x/commissioning',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
CommissioningStatusController.url = (options?: RouteQueryOptions) => {
    return CommissioningStatusController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
CommissioningStatusController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CommissioningStatusController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
CommissioningStatusController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CommissioningStatusController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
const CommissioningStatusControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CommissioningStatusController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
CommissioningStatusControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CommissioningStatusController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
CommissioningStatusControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CommissioningStatusController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CommissioningStatusController.form = CommissioningStatusControllerForm

export default CommissioningStatusController