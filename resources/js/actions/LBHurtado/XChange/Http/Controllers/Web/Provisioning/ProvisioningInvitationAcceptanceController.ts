import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationAcceptanceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationAcceptanceController.php:18
* @route '/x/provisioning/{token}'
*/
const ProvisioningInvitationAcceptanceController = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ProvisioningInvitationAcceptanceController.url(args, options),
    method: 'post',
})

ProvisioningInvitationAcceptanceController.definition = {
    methods: ["post"],
    url: '/x/provisioning/{token}',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationAcceptanceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationAcceptanceController.php:18
* @route '/x/provisioning/{token}'
*/
ProvisioningInvitationAcceptanceController.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ProvisioningInvitationAcceptanceController.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationAcceptanceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationAcceptanceController.php:18
* @route '/x/provisioning/{token}'
*/
ProvisioningInvitationAcceptanceController.post = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ProvisioningInvitationAcceptanceController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationAcceptanceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationAcceptanceController.php:18
* @route '/x/provisioning/{token}'
*/
const ProvisioningInvitationAcceptanceControllerForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ProvisioningInvitationAcceptanceController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Provisioning\ProvisioningInvitationAcceptanceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Provisioning/ProvisioningInvitationAcceptanceController.php:18
* @route '/x/provisioning/{token}'
*/
ProvisioningInvitationAcceptanceControllerForm.post = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ProvisioningInvitationAcceptanceController.url(args, options),
    method: 'post',
})

ProvisioningInvitationAcceptanceController.form = ProvisioningInvitationAcceptanceControllerForm

export default ProvisioningInvitationAcceptanceController