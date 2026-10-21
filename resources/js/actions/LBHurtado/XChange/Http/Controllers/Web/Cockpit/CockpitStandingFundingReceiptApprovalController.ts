import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitStandingFundingReceiptApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitStandingFundingReceiptApprovalController.php:17
* @route '/x/cockpit/funding/standing-addresses/netbank/receipts/{receipt}/approve'
*/
const CockpitStandingFundingReceiptApprovalController = (args: { receipt: string | number | { reference: string | number } } | [receipt: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitStandingFundingReceiptApprovalController.url(args, options),
    method: 'post',
})

CockpitStandingFundingReceiptApprovalController.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/standing-addresses/netbank/receipts/{receipt}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitStandingFundingReceiptApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitStandingFundingReceiptApprovalController.php:17
* @route '/x/cockpit/funding/standing-addresses/netbank/receipts/{receipt}/approve'
*/
CockpitStandingFundingReceiptApprovalController.url = (args: { receipt: string | number | { reference: string | number } } | [receipt: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { receipt: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { receipt: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            receipt: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        receipt: typeof args.receipt === 'object'
        ? args.receipt.reference
        : args.receipt,
    }

    return CockpitStandingFundingReceiptApprovalController.definition.url
            .replace('{receipt}', parsedArgs.receipt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitStandingFundingReceiptApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitStandingFundingReceiptApprovalController.php:17
* @route '/x/cockpit/funding/standing-addresses/netbank/receipts/{receipt}/approve'
*/
CockpitStandingFundingReceiptApprovalController.post = (args: { receipt: string | number | { reference: string | number } } | [receipt: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitStandingFundingReceiptApprovalController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitStandingFundingReceiptApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitStandingFundingReceiptApprovalController.php:17
* @route '/x/cockpit/funding/standing-addresses/netbank/receipts/{receipt}/approve'
*/
const CockpitStandingFundingReceiptApprovalControllerForm = (args: { receipt: string | number | { reference: string | number } } | [receipt: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitStandingFundingReceiptApprovalController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitStandingFundingReceiptApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitStandingFundingReceiptApprovalController.php:17
* @route '/x/cockpit/funding/standing-addresses/netbank/receipts/{receipt}/approve'
*/
CockpitStandingFundingReceiptApprovalControllerForm.post = (args: { receipt: string | number | { reference: string | number } } | [receipt: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitStandingFundingReceiptApprovalController.url(args, options),
    method: 'post',
})

CockpitStandingFundingReceiptApprovalController.form = CockpitStandingFundingReceiptApprovalControllerForm

export default CockpitStandingFundingReceiptApprovalController