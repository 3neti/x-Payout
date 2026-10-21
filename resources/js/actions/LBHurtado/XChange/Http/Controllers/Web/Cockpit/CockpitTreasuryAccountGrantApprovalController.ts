import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryAccountGrantApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryAccountGrantApprovalController.php:16
* @route '/x/cockpit/treasury-operations/account-grants/{treasuryAccountGrant}/approvals'
*/
export const store = (args: { treasuryAccountGrant: string | number | { id: string | number } } | [treasuryAccountGrant: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/treasury-operations/account-grants/{treasuryAccountGrant}/approvals',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryAccountGrantApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryAccountGrantApprovalController.php:16
* @route '/x/cockpit/treasury-operations/account-grants/{treasuryAccountGrant}/approvals'
*/
store.url = (args: { treasuryAccountGrant: string | number | { id: string | number } } | [treasuryAccountGrant: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { treasuryAccountGrant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { treasuryAccountGrant: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            treasuryAccountGrant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        treasuryAccountGrant: typeof args.treasuryAccountGrant === 'object'
        ? args.treasuryAccountGrant.id
        : args.treasuryAccountGrant,
    }

    return store.definition.url
            .replace('{treasuryAccountGrant}', parsedArgs.treasuryAccountGrant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryAccountGrantApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryAccountGrantApprovalController.php:16
* @route '/x/cockpit/treasury-operations/account-grants/{treasuryAccountGrant}/approvals'
*/
store.post = (args: { treasuryAccountGrant: string | number | { id: string | number } } | [treasuryAccountGrant: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryAccountGrantApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryAccountGrantApprovalController.php:16
* @route '/x/cockpit/treasury-operations/account-grants/{treasuryAccountGrant}/approvals'
*/
const storeForm = (args: { treasuryAccountGrant: string | number | { id: string | number } } | [treasuryAccountGrant: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryAccountGrantApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryAccountGrantApprovalController.php:16
* @route '/x/cockpit/treasury-operations/account-grants/{treasuryAccountGrant}/approvals'
*/
storeForm.post = (args: { treasuryAccountGrant: string | number | { id: string | number } } | [treasuryAccountGrant: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const CockpitTreasuryAccountGrantApprovalController = { store }

export default CockpitTreasuryAccountGrantApprovalController