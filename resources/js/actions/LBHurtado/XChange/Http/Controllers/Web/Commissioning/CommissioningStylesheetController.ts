import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
const CommissioningStylesheetController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CommissioningStylesheetController.url(options),
    method: 'get',
})

CommissioningStylesheetController.definition = {
    methods: ["get","head"],
    url: '/x/commissioning/assets/commissioning.css',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
CommissioningStylesheetController.url = (options?: RouteQueryOptions) => {
    return CommissioningStylesheetController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
CommissioningStylesheetController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CommissioningStylesheetController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
CommissioningStylesheetController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CommissioningStylesheetController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
const CommissioningStylesheetControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CommissioningStylesheetController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
CommissioningStylesheetControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CommissioningStylesheetController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
CommissioningStylesheetControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CommissioningStylesheetController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CommissioningStylesheetController.form = CommissioningStylesheetControllerForm

export default CommissioningStylesheetController