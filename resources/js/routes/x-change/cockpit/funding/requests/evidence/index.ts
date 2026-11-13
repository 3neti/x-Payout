import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
export const show = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
show.url = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{fundingRequest}', parsedArgs.fundingRequest.toString())
            .replace('{attachment}', parsedArgs.attachment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
show.get = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
show.head = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
const showForm = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
showForm.get = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestEvidenceController.php:16
* @route '/x/cockpit/funding/requests/{fundingRequest}/evidence/{attachment}'
*/
showForm.head = (args: { fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } } | [fundingRequest: string | number | { reference: string | number }, attachment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const evidence = {
    show: Object.assign(show, show),
}

export default evidence