import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
const ProvisioningInvitationPageController = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ProvisioningInvitationPageController.url(args, options),
    method: 'get',
})

ProvisioningInvitationPageController.definition = {
    methods: ["get","head"],
    url: '/x/provisioning/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
ProvisioningInvitationPageController.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ProvisioningInvitationPageController.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
ProvisioningInvitationPageController.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ProvisioningInvitationPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
ProvisioningInvitationPageController.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ProvisioningInvitationPageController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
const ProvisioningInvitationPageControllerForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ProvisioningInvitationPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
ProvisioningInvitationPageControllerForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ProvisioningInvitationPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationPageController.php:18
* @route '/x/provisioning/{token}'
*/
ProvisioningInvitationPageControllerForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ProvisioningInvitationPageController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ProvisioningInvitationPageController.form = ProvisioningInvitationPageControllerForm

export default ProvisioningInvitationPageController