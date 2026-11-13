import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
const CockpitFundingRequestEvidenceController = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitFundingRequestEvidenceController.url(args, options),
    method: 'get',
})

CockpitFundingRequestEvidenceController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
CockpitFundingRequestEvidenceController.url = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            fundingRequest: args[0],
            attachment: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        fundingRequest: typeof args.fundingRequest === 'object'
        ? args.fundingRequest.reference
        : args.fundingRequest,
        attachment: typeof args.attachment === 'object'
        ? args.attachment.id
        : args.attachment,
    }

    return CockpitFundingRequestEvidenceController.definition.url
            .replace('{fundingRequest}', parsedArgs.fundingRequest.toString())
            .replace('{attachment}', parsedArgs.attachment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
CockpitFundingRequestEvidenceController.get = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitFundingRequestEvidenceController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
CockpitFundingRequestEvidenceController.head = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitFundingRequestEvidenceController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
const CockpitFundingRequestEvidenceControllerForm = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitFundingRequestEvidenceController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
CockpitFundingRequestEvidenceControllerForm.get = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitFundingRequestEvidenceController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
CockpitFundingRequestEvidenceControllerForm.head = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitFundingRequestEvidenceController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitFundingRequestEvidenceController.form = CockpitFundingRequestEvidenceControllerForm

export default CockpitFundingRequestEvidenceController