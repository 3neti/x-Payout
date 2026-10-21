import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import checklist17a891 from './checklist'
import assets from './assets'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
export const status = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(options),
    method: 'get',
})

status.definition = {
    methods: ["get","head"],
    url: '/x/commissioning',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
status.url = (options?: RouteQueryOptions) => {
    return status.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
status.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
status.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
const statusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
statusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStatusController.php:15
* @route '/x/commissioning'
*/
statusForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

status.form = statusForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::checklist
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
export const checklist = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checklist.url(options),
    method: 'get',
})

checklist.definition = {
    methods: ["get","head"],
    url: '/x/commissioning/checklist',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::checklist
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
checklist.url = (options?: RouteQueryOptions) => {
    return checklist.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::checklist
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
checklist.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checklist.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::checklist
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
checklist.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: checklist.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::checklist
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
const checklistForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checklist.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::checklist
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
checklistForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checklist.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::checklist
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
checklistForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checklist.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

checklist.form = checklistForm

const commissioning = {
    status: Object.assign(status, status),
    checklist: Object.assign(checklist, checklist17a891),
    assets: Object.assign(assets, assets),
}

export default commissioning