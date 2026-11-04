import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitContributionInvitationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitContributionInvitationController.php:22
* @route '/x/cockpit/pay-codes/{code}/contribution-invitations'
*/
export const store = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/pay-codes/{code}/contribution-invitations',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitContributionInvitationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitContributionInvitationController.php:22
* @route '/x/cockpit/pay-codes/{code}/contribution-invitations'
*/
store.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { code: args }
    }

    if (Array.isArray(args)) {
        args = {
            code: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
    }

    return store.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitContributionInvitationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitContributionInvitationController.php:22
* @route '/x/cockpit/pay-codes/{code}/contribution-invitations'
*/
store.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitContributionInvitationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitContributionInvitationController.php:22
* @route '/x/cockpit/pay-codes/{code}/contribution-invitations'
*/
const storeForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitContributionInvitationController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitContributionInvitationController.php:22
* @route '/x/cockpit/pay-codes/{code}/contribution-invitations'
*/
storeForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitContributionInvitationController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitContributionInvitationController.php:41
* @route '/x/cockpit/pay-codes/{code}/contribution-invitations/{invitation}'
*/
export const destroy = (args: { code: string | number, invitation: string | number } | [code: string | number, invitation: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/x/cockpit/pay-codes/{code}/contribution-invitations/{invitation}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitContributionInvitationController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitContributionInvitationController.php:41
* @route '/x/cockpit/pay-codes/{code}/contribution-invitations/{invitation}'
*/
destroy.url = (args: { code: string | number, invitation: string | number } | [code: string | number, invitation: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            code: args[0],
            invitation: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
        invitation: args.invitation,
    }

    return destroy.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{invitation}', parsedArgs.invitation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitContributionInvitationController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitContributionInvitationController.php:41
* @route '/x/cockpit/pay-codes/{code}/contribution-invitations/{invitation}'
*/
destroy.delete = (args: { code: string | number, invitation: string | number } | [code: string | number, invitation: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitContributionInvitationController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitContributionInvitationController.php:41
* @route '/x/cockpit/pay-codes/{code}/contribution-invitations/{invitation}'
*/
const destroyForm = (args: { code: string | number, invitation: string | number } | [code: string | number, invitation: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitContributionInvitationController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitContributionInvitationController.php:41
* @route '/x/cockpit/pay-codes/{code}/contribution-invitations/{invitation}'
*/
destroyForm.delete = (args: { code: string | number, invitation: string | number } | [code: string | number, invitation: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const contributionInvitations = {
    store: Object.assign(store, store),
    destroy: Object.assign(destroy, destroy),
}

export default contributionInvitations