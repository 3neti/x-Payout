import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitStandingFundingReceiptApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitStandingFundingReceiptApprovalController.php:17
* @route '/x/cockpit/funding/standing-addresses/netbank/receipts/{receipt}/approve'
*/
export const approve = (args: { receipt: string | number | { reference: string | number } } | [receipt: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/standing-addresses/netbank/receipts/{receipt}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitStandingFundingReceiptApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitStandingFundingReceiptApprovalController.php:17
* @route '/x/cockpit/funding/standing-addresses/netbank/receipts/{receipt}/approve'
*/
approve.url = (args: { receipt: string | number | { reference: string | number } } | [receipt: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return approve.definition.url
            .replace('{receipt}', parsedArgs.receipt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitStandingFundingReceiptApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitStandingFundingReceiptApprovalController.php:17
* @route '/x/cockpit/funding/standing-addresses/netbank/receipts/{receipt}/approve'
*/
approve.post = (args: { receipt: string | number | { reference: string | number } } | [receipt: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitStandingFundingReceiptApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitStandingFundingReceiptApprovalController.php:17
* @route '/x/cockpit/funding/standing-addresses/netbank/receipts/{receipt}/approve'
*/
const approveForm = (args: { receipt: string | number | { reference: string | number } } | [receipt: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitStandingFundingReceiptApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitStandingFundingReceiptApprovalController.php:17
* @route '/x/cockpit/funding/standing-addresses/netbank/receipts/{receipt}/approve'
*/
approveForm.post = (args: { receipt: string | number | { reference: string | number } } | [receipt: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

approve.form = approveForm

const receipts = {
    approve: Object.assign(approve, approve),
}

export default receipts