import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestTransferCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestTransferCheckController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/transfer-checks'
*/
const CockpitFundingRequestTransferCheckController = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingRequestTransferCheckController.url(args, options),
    method: 'post',
})

CockpitFundingRequestTransferCheckController.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/requests/{fundingRequest}/transfer-checks',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestTransferCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestTransferCheckController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/transfer-checks'
*/
CockpitFundingRequestTransferCheckController.url = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return CockpitFundingRequestTransferCheckController.definition.url
            .replace('{fundingRequest}', parsedArgs.fundingRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestTransferCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestTransferCheckController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/transfer-checks'
*/
CockpitFundingRequestTransferCheckController.post = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingRequestTransferCheckController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestTransferCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestTransferCheckController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/transfer-checks'
*/
const CockpitFundingRequestTransferCheckControllerForm = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingRequestTransferCheckController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestTransferCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestTransferCheckController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/transfer-checks'
*/
CockpitFundingRequestTransferCheckControllerForm.post = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingRequestTransferCheckController.url(args, options),
    method: 'post',
})

CockpitFundingRequestTransferCheckController.form = CockpitFundingRequestTransferCheckControllerForm

export default CockpitFundingRequestTransferCheckController