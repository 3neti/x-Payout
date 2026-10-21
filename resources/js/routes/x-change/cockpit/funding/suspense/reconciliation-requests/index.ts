import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationRequestController.php:20
* @route '/x/cockpit/funding/suspense/{case}/reconciliation-requests'
*/
export const store = (args: { case: string | number | { reference: string | number } } | [caseParam: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/suspense/{case}/reconciliation-requests',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationRequestController.php:20
* @route '/x/cockpit/funding/suspense/{case}/reconciliation-requests'
*/
store.url = (args: { case: string | number | { reference: string | number } } | [caseParam: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { case: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { case: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            case: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        case: typeof args.case === 'object'
        ? args.case.reference
        : args.case,
    }

    return store.definition.url
            .replace('{case}', parsedArgs.case.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationRequestController.php:20
* @route '/x/cockpit/funding/suspense/{case}/reconciliation-requests'
*/
store.post = (args: { case: string | number | { reference: string | number } } | [caseParam: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationRequestController.php:20
* @route '/x/cockpit/funding/suspense/{case}/reconciliation-requests'
*/
const storeForm = (args: { case: string | number | { reference: string | number } } | [caseParam: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationRequestController.php:20
* @route '/x/cockpit/funding/suspense/{case}/reconciliation-requests'
*/
storeForm.post = (args: { case: string | number | { reference: string | number } } | [caseParam: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const reconciliationRequests = {
    store: Object.assign(store, store),
}

export default reconciliationRequests