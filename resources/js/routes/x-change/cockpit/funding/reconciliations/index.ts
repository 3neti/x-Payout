import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationApprovalController.php:18
* @route '/x/cockpit/funding/reconciliations/{reconciliationRequest}/approve'
*/
export const approve = (args: { reconciliationRequest: string | number | { reference: string | number } } | [reconciliationRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/reconciliations/{reconciliationRequest}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationApprovalController.php:18
* @route '/x/cockpit/funding/reconciliations/{reconciliationRequest}/approve'
*/
approve.url = (args: { reconciliationRequest: string | number | { reference: string | number } } | [reconciliationRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reconciliationRequest: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { reconciliationRequest: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            reconciliationRequest: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reconciliationRequest: typeof args.reconciliationRequest === 'object'
        ? args.reconciliationRequest.reference
        : args.reconciliationRequest,
    }

    return approve.definition.url
            .replace('{reconciliationRequest}', parsedArgs.reconciliationRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationApprovalController.php:18
* @route '/x/cockpit/funding/reconciliations/{reconciliationRequest}/approve'
*/
approve.post = (args: { reconciliationRequest: string | number | { reference: string | number } } | [reconciliationRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationApprovalController.php:18
* @route '/x/cockpit/funding/reconciliations/{reconciliationRequest}/approve'
*/
const approveForm = (args: { reconciliationRequest: string | number | { reference: string | number } } | [reconciliationRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationApprovalController.php:18
* @route '/x/cockpit/funding/reconciliations/{reconciliationRequest}/approve'
*/
approveForm.post = (args: { reconciliationRequest: string | number | { reference: string | number } } | [reconciliationRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

approve.form = approveForm

const reconciliations = {
    approve: Object.assign(approve, approve),
}

export default reconciliations