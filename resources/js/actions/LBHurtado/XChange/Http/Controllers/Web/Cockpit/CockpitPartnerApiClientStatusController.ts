import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientStatusController::suspend
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientStatusController.php:17
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/suspensions'
*/
export const suspend = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: suspend.url(args, options),
    method: 'post',
})

suspend.definition = {
    methods: ["post"],
    url: '/x/cockpit/api-partners/clients/{partnerApiClient}/suspensions',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientStatusController::suspend
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientStatusController.php:17
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/suspensions'
*/
suspend.url = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return suspend.definition.url
            .replace('{partnerApiClient}', parsedArgs.partnerApiClient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientStatusController::suspend
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientStatusController.php:17
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/suspensions'
*/
suspend.post = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: suspend.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientStatusController::suspend
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientStatusController.php:17
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/suspensions'
*/
const suspendForm = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: suspend.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientStatusController::suspend
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientStatusController.php:17
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/suspensions'
*/
suspendForm.post = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: suspend.url(args, options),
    method: 'post',
})

suspend.form = suspendForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientStatusController::revoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientStatusController.php:28
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/revocations'
*/
export const revoke = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: revoke.url(args, options),
    method: 'post',
})

revoke.definition = {
    methods: ["post"],
    url: '/x/cockpit/api-partners/clients/{partnerApiClient}/revocations',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientStatusController::revoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientStatusController.php:28
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/revocations'
*/
revoke.url = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return revoke.definition.url
            .replace('{partnerApiClient}', parsedArgs.partnerApiClient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientStatusController::revoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientStatusController.php:28
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/revocations'
*/
revoke.post = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: revoke.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientStatusController::revoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientStatusController.php:28
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/revocations'
*/
const revokeForm = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: revoke.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPartnerApiClientStatusController::revoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPartnerApiClientStatusController.php:28
* @route '/x/cockpit/api-partners/clients/{partnerApiClient}/revocations'
*/
revokeForm.post = (args: { partnerApiClient: string | number | { id: string | number } } | [partnerApiClient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: revoke.url(args, options),
    method: 'post',
})

revoke.form = revokeForm

const CockpitPartnerApiClientStatusController = { suspend, revoke }

export default CockpitPartnerApiClientStatusController