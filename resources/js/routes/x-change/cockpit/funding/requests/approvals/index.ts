import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestApprovalController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/approvals'
*/
export const store = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/requests/{fundingRequest}/approvals',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestApprovalController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/approvals'
*/
store.url = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fundingRequest: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { fundingRequest: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            fundingRequest: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        fundingRequest: typeof args.fundingRequest === 'object'
        ? args.fundingRequest.reference
        : args.fundingRequest,
    }

    return store.definition.url
            .replace('{fundingRequest}', parsedArgs.fundingRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestApprovalController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/approvals'
*/
store.post = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestApprovalController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/approvals'
*/
const storeForm = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestApprovalController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestApprovalController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/approvals'
*/
storeForm.post = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const approvals = {
    store: Object.assign(store, store),
}

export default approvals