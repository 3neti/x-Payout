import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientConnectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientConnectionController.php:15
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/checks'
*/
export const store = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/api-partners/clients/{partnerApiClient}/checks',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientConnectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientConnectionController.php:15
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/checks'
*/
store.url = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{partnerApiClient}', parsedArgs.partnerApiClient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientConnectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientConnectionController.php:15
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/checks'
*/
store.post = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientConnectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientConnectionController.php:15
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/checks'
*/
const storeForm = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientConnectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientConnectionController.php:15
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/checks'
*/
storeForm.post = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const checks = {
    store: Object.assign(store, store),
}

export default checks