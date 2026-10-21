import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningApprovalController.php:17
* @route '/x/cockpit/provisioning/requests/{provisioningRequest}/approvals'
*/
export const store = (args: { provisioningRequest: string | number | { reference: string | number } } | [provisioningRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/provisioning/requests/{provisioningRequest}/approvals',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningApprovalController.php:17
* @route '/x/cockpit/provisioning/requests/{provisioningRequest}/approvals'
*/
store.url = (args: { provisioningRequest: string | number | { reference: string | number } } | [provisioningRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { provisioningRequest: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { provisioningRequest: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            provisioningRequest: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        provisioningRequest: typeof args.provisioningRequest === 'object'
        ? args.provisioningRequest.reference
        : args.provisioningRequest,
    }

    return store.definition.url
            .replace('{provisioningRequest}', parsedArgs.provisioningRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningApprovalController.php:17
* @route '/x/cockpit/provisioning/requests/{provisioningRequest}/approvals'
*/
store.post = (args: { provisioningRequest: string | number | { reference: string | number } } | [provisioningRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningApprovalController.php:17
* @route '/x/cockpit/provisioning/requests/{provisioningRequest}/approvals'
*/
const storeForm = (args: { provisioningRequest: string | number | { reference: string | number } } | [provisioningRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitProvisioningApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitProvisioningApprovalController.php:17
* @route '/x/cockpit/provisioning/requests/{provisioningRequest}/approvals'
*/
storeForm.post = (args: { provisioningRequest: string | number | { reference: string | number } } | [provisioningRequest: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const CockpitProvisioningApprovalController = { store }

export default CockpitProvisioningApprovalController