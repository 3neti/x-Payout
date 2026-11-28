import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitBankAccountController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitBankAccountController.php:20
* @route '/x/cockpit/accounts/bank-accounts'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/accounts/bank-accounts',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitBankAccountController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitBankAccountController.php:20
* @route '/x/cockpit/accounts/bank-accounts'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitBankAccountController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitBankAccountController.php:20
* @route '/x/cockpit/accounts/bank-accounts'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitBankAccountController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitBankAccountController.php:20
* @route '/x/cockpit/accounts/bank-accounts'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitBankAccountController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitBankAccountController.php:20
* @route '/x/cockpit/accounts/bank-accounts'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitBankAccountController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitBankAccountController.php:39
* @route '/x/cockpit/accounts/bank-accounts/{assignment}'
*/
export const update = (args: { assignment: string | number } | [assignment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/x/cockpit/accounts/bank-accounts/{assignment}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitBankAccountController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitBankAccountController.php:39
* @route '/x/cockpit/accounts/bank-accounts/{assignment}'
*/
update.url = (args: { assignment: string | number } | [assignment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assignment: args }
    }

    if (Array.isArray(args)) {
        args = {
            assignment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        assignment: args.assignment,
    }

    return update.definition.url
            .replace('{assignment}', parsedArgs.assignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitBankAccountController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitBankAccountController.php:39
* @route '/x/cockpit/accounts/bank-accounts/{assignment}'
*/
update.patch = (args: { assignment: string | number } | [assignment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitBankAccountController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitBankAccountController.php:39
* @route '/x/cockpit/accounts/bank-accounts/{assignment}'
*/
const updateForm = (args: { assignment: string | number } | [assignment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitBankAccountController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitBankAccountController.php:39
* @route '/x/cockpit/accounts/bank-accounts/{assignment}'
*/
updateForm.patch = (args: { assignment: string | number } | [assignment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const CockpitBankAccountController = { store, update }

export default CockpitBankAccountController