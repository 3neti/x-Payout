import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/commissioning/checklist',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:37
* @route '/x/commissioning/checklist'
*/
showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:63
* @route '/x/commissioning/checklist'
*/
export const unlock = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unlock.url(options),
    method: 'post',
})

unlock.definition = {
    methods: ["post"],
    url: '/x/commissioning/checklist',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:63
* @route '/x/commissioning/checklist'
*/
unlock.url = (options?: RouteQueryOptions) => {
    return unlock.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:63
* @route '/x/commissioning/checklist'
*/
unlock.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unlock.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:63
* @route '/x/commissioning/checklist'
*/
const unlockForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unlock.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningChecklistController::unlock
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningChecklistController.php:63
* @route '/x/commissioning/checklist'
*/
unlockForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unlock.url(options),
    method: 'post',
})

unlock.form = unlockForm

const CommissioningChecklistController = { show, unlock }

export default CommissioningChecklistController