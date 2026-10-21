import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryInstitutionFundClassificationApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryInstitutionFundClassificationApprovalController.php:16
* @route '/x/cockpit/treasury-operations/institution-funds/{classification}/approvals'
*/
export const store = (args: { classification: string | number | { id: string | number } } | [classification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/treasury-operations/institution-funds/{classification}/approvals',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryInstitutionFundClassificationApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryInstitutionFundClassificationApprovalController.php:16
* @route '/x/cockpit/treasury-operations/institution-funds/{classification}/approvals'
*/
store.url = (args: { classification: string | number | { id: string | number } } | [classification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classification: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { classification: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            classification: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classification: typeof args.classification === 'object'
        ? args.classification.id
        : args.classification,
    }

    return store.definition.url
            .replace('{classification}', parsedArgs.classification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryInstitutionFundClassificationApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryInstitutionFundClassificationApprovalController.php:16
* @route '/x/cockpit/treasury-operations/institution-funds/{classification}/approvals'
*/
store.post = (args: { classification: string | number | { id: string | number } } | [classification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryInstitutionFundClassificationApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryInstitutionFundClassificationApprovalController.php:16
* @route '/x/cockpit/treasury-operations/institution-funds/{classification}/approvals'
*/
const storeForm = (args: { classification: string | number | { id: string | number } } | [classification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitTreasuryInstitutionFundClassificationApprovalController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitTreasuryInstitutionFundClassificationApprovalController.php:16
* @route '/x/cockpit/treasury-operations/institution-funds/{classification}/approvals'
*/
storeForm.post = (args: { classification: string | number | { id: string | number } } | [classification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const approvals = {
    store: Object.assign(store, store),
}

export default approvals