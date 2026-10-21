import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
export const show = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/provisioning/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
show.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return show.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
show.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
show.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
const showForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
showForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
showForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationAcceptanceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationAcceptanceController.php:18
* @route '/x/provisioning/{token}'
*/
export const accept = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: accept.url(args, options),
    method: 'post',
})

accept.definition = {
    methods: ["post"],
    url: '/x/provisioning/{token}',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationAcceptanceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationAcceptanceController.php:18
* @route '/x/provisioning/{token}'
*/
accept.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return accept.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationAcceptanceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationAcceptanceController.php:18
* @route '/x/provisioning/{token}'
*/
accept.post = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: accept.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationAcceptanceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationAcceptanceController.php:18
* @route '/x/provisioning/{token}'
*/
const acceptForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: accept.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationAcceptanceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationAcceptanceController.php:18
* @route '/x/provisioning/{token}'
*/
acceptForm.post = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: accept.url(args, options),
    method: 'post',
})

accept.form = acceptForm

const claim = {
    show: Object.assign(show, show),
    accept: Object.assign(accept, accept),
}

export default claim