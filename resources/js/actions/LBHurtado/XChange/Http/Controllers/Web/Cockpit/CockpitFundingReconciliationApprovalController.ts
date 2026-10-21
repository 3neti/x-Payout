import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationApprovalController.php:18
* @route '/x/cockpit/funding/reconciliations/{reconciliationRequest}/approve'
*/
const CockpitFundingReconciliationApprovalController = (args: { reconciliationRequest: string | number | { reference: string | number } } | [reconciliationRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingReconciliationApprovalController.url(args, options),
    method: 'post',
})

CockpitFundingReconciliationApprovalController.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/reconciliations/{reconciliationRequest}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationApprovalController.php:18
* @route '/x/cockpit/funding/reconciliations/{reconciliationRequest}/approve'
*/
CockpitFundingReconciliationApprovalController.url = (args: { reconciliationRequest: string | number | { reference: string | number } } | [reconciliationRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return CockpitFundingReconciliationApprovalController.definition.url
            .replace('{reconciliationRequest}', parsedArgs.reconciliationRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationApprovalController.php:18
* @route '/x/cockpit/funding/reconciliations/{reconciliationRequest}/approve'
*/
CockpitFundingReconciliationApprovalController.post = (args: { reconciliationRequest: string | number | { reference: string | number } } | [reconciliationRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingReconciliationApprovalController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationApprovalController.php:18
* @route '/x/cockpit/funding/reconciliations/{reconciliationRequest}/approve'
*/
const CockpitFundingReconciliationApprovalControllerForm = (args: { reconciliationRequest: string | number | { reference: string | number } } | [reconciliationRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingReconciliationApprovalController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationApprovalController.php:18
* @route '/x/cockpit/funding/reconciliations/{reconciliationRequest}/approve'
*/
CockpitFundingReconciliationApprovalControllerForm.post = (args: { reconciliationRequest: string | number | { reference: string | number } } | [reconciliationRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingReconciliationApprovalController.url(args, options),
    method: 'post',
})

CockpitFundingReconciliationApprovalController.form = CockpitFundingReconciliationApprovalControllerForm

export default CockpitFundingReconciliationApprovalController