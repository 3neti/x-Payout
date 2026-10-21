import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientConnectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientConnectionController.php:15
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/checks'
*/
const CockpitPartnerApiClientConnectionController = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPartnerApiClientConnectionController.url(args, options),
    method: 'post',
})

CockpitPartnerApiClientConnectionController.definition = {
    methods: ["post"],
    url: '/x/cockpit/api-partners/clients/{partnerApiClient}/checks',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientConnectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientConnectionController.php:15
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/checks'
*/
CockpitPartnerApiClientConnectionController.url = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { partnerApiClient: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { partnerApiClient: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            partnerApiClient: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        partnerApiClient: typeof args.partnerApiClient === 'object'
        ? args.partnerApiClient.id
        : args.partnerApiClient,
    }

    return CockpitPartnerApiClientConnectionController.definition.url
            .replace('{partnerApiClient}', parsedArgs.partnerApiClient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientConnectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientConnectionController.php:15
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/checks'
*/
CockpitPartnerApiClientConnectionController.post = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPartnerApiClientConnectionController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientConnectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientConnectionController.php:15
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/checks'
*/
const CockpitPartnerApiClientConnectionControllerForm = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPartnerApiClientConnectionController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientConnectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientConnectionController.php:15
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/checks'
*/
CockpitPartnerApiClientConnectionControllerForm.post = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPartnerApiClientConnectionController.url(args, options),
    method: 'post',
})

CockpitPartnerApiClientConnectionController.form = CockpitPartnerApiClientConnectionControllerForm

export default CockpitPartnerApiClientConnectionController