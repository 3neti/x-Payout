import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryReconciliationRunExecutionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryReconciliationRunExecutionController.php:16
* @route '/x/cockpit/treasury-operations/reconciliation-runs/{treasuryReconciliationRun}/executions'
*/
export const store = (args: { treasuryReconciliationRun: string | number | { id: string | number } } | [treasuryReconciliationRun: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/treasury-operations/reconciliation-runs/{treasuryReconciliationRun}/executions',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryReconciliationRunExecutionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryReconciliationRunExecutionController.php:16
* @route '/x/cockpit/treasury-operations/reconciliation-runs/{treasuryReconciliationRun}/executions'
*/
store.url = (args: { treasuryReconciliationRun: string | number | { id: string | number } } | [treasuryReconciliationRun: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { treasuryReconciliationRun: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { treasuryReconciliationRun: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            treasuryReconciliationRun: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        treasuryReconciliationRun: typeof args.treasuryReconciliationRun === 'object'
        ? args.treasuryReconciliationRun.id
        : args.treasuryReconciliationRun,
    }

    return store.definition.url
            .replace('{treasuryReconciliationRun}', parsedArgs.treasuryReconciliationRun.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryReconciliationRunExecutionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryReconciliationRunExecutionController.php:16
* @route '/x/cockpit/treasury-operations/reconciliation-runs/{treasuryReconciliationRun}/executions'
*/
store.post = (args: { treasuryReconciliationRun: string | number | { id: string | number } } | [treasuryReconciliationRun: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryReconciliationRunExecutionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryReconciliationRunExecutionController.php:16
* @route '/x/cockpit/treasury-operations/reconciliation-runs/{treasuryReconciliationRun}/executions'
*/
const storeForm = (args: { treasuryReconciliationRun: string | number | { id: string | number } } | [treasuryReconciliationRun: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryReconciliationRunExecutionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryReconciliationRunExecutionController.php:16
* @route '/x/cockpit/treasury-operations/reconciliation-runs/{treasuryReconciliationRun}/executions'
*/
storeForm.post = (args: { treasuryReconciliationRun: string | number | { id: string | number } } | [treasuryReconciliationRun: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const executions = {
    store: Object.assign(store, store),
}

export default executions