import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationRequestController.php:20
* @route '/x/cockpit/funding/suspense/{case}/reconciliation-requests'
*/
const CockpitFundingReconciliationRequestController = (args: { case: string | number | { reference: string | number } } | [caseParam: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingReconciliationRequestController.url(args, options),
    method: 'post',
})

CockpitFundingReconciliationRequestController.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/suspense/{case}/reconciliation-requests',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationRequestController.php:20
* @route '/x/cockpit/funding/suspense/{case}/reconciliation-requests'
*/
CockpitFundingReconciliationRequestController.url = (args: { case: string | number | { reference: string | number } } | [caseParam: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return CockpitFundingReconciliationRequestController.definition.url
            .replace('{case}', parsedArgs.case.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationRequestController.php:20
* @route '/x/cockpit/funding/suspense/{case}/reconciliation-requests'
*/
CockpitFundingReconciliationRequestController.post = (args: { case: string | number | { reference: string | number } } | [caseParam: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingReconciliationRequestController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationRequestController.php:20
* @route '/x/cockpit/funding/suspense/{case}/reconciliation-requests'
*/
const CockpitFundingReconciliationRequestControllerForm = (args: { case: string | number | { reference: string | number } } | [caseParam: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingReconciliationRequestController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingReconciliationRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingReconciliationRequestController.php:20
* @route '/x/cockpit/funding/suspense/{case}/reconciliation-requests'
*/
CockpitFundingReconciliationRequestControllerForm.post = (args: { case: string | number | { reference: string | number } } | [caseParam: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingReconciliationRequestController.url(args, options),
    method: 'post',
})

CockpitFundingReconciliationRequestController.form = CockpitFundingReconciliationRequestControllerForm

export default CockpitFundingReconciliationRequestController