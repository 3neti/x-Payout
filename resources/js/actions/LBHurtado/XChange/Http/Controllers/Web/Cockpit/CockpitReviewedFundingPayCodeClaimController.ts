import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReviewedFundingPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReviewedFundingPayCodeClaimController.php:17
* @route '/x/cockpit/funding/requests/{fundingRequest}/pay-code-claims'
*/
const CockpitReviewedFundingPayCodeClaimController = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitReviewedFundingPayCodeClaimController.url(args, options),
    method: 'post',
})

CockpitReviewedFundingPayCodeClaimController.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/requests/{fundingRequest}/pay-code-claims',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReviewedFundingPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReviewedFundingPayCodeClaimController.php:17
* @route '/x/cockpit/funding/requests/{fundingRequest}/pay-code-claims'
*/
CockpitReviewedFundingPayCodeClaimController.url = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return CockpitReviewedFundingPayCodeClaimController.definition.url
            .replace('{fundingRequest}', parsedArgs.fundingRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReviewedFundingPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReviewedFundingPayCodeClaimController.php:17
* @route '/x/cockpit/funding/requests/{fundingRequest}/pay-code-claims'
*/
CockpitReviewedFundingPayCodeClaimController.post = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitReviewedFundingPayCodeClaimController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReviewedFundingPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReviewedFundingPayCodeClaimController.php:17
* @route '/x/cockpit/funding/requests/{fundingRequest}/pay-code-claims'
*/
const CockpitReviewedFundingPayCodeClaimControllerForm = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitReviewedFundingPayCodeClaimController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReviewedFundingPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReviewedFundingPayCodeClaimController.php:17
* @route '/x/cockpit/funding/requests/{fundingRequest}/pay-code-claims'
*/
CockpitReviewedFundingPayCodeClaimControllerForm.post = (args: { fundingRequest: string | number | { reference: string | number } } | [fundingRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitReviewedFundingPayCodeClaimController.url(args, options),
    method: 'post',
})

CockpitReviewedFundingPayCodeClaimController.form = CockpitReviewedFundingPayCodeClaimControllerForm

export default CockpitReviewedFundingPayCodeClaimController