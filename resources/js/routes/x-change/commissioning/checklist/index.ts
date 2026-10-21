import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
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

const checklist = {
    unlock: Object.assign(unlock, unlock),
}

export default checklist