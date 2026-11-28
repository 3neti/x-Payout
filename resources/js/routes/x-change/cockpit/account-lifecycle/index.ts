import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountLifecycleController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountLifecycleController.php:19
* @route '/x/cockpit/account-lifecycle'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/account-lifecycle',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountLifecycleController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountLifecycleController.php:19
* @route '/x/cockpit/account-lifecycle'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountLifecycleController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountLifecycleController.php:19
* @route '/x/cockpit/account-lifecycle'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountLifecycleController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountLifecycleController.php:19
* @route '/x/cockpit/account-lifecycle'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountLifecycleController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountLifecycleController.php:19
* @route '/x/cockpit/account-lifecycle'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountLifecycleController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountLifecycleController.php:19
* @route '/x/cockpit/account-lifecycle'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountLifecycleController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountLifecycleController.php:19
* @route '/x/cockpit/account-lifecycle'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountLifecycleController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountLifecycleController.php:42
* @route '/x/cockpit/account-lifecycle/{accountId}'
*/
export const update = (args: { accountId: string | number } | [accountId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/x/cockpit/account-lifecycle/{accountId}',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountLifecycleController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountLifecycleController.php:42
* @route '/x/cockpit/account-lifecycle/{accountId}'
*/
update.url = (args: { accountId: string | number } | [accountId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { accountId: args }
    }

    if (Array.isArray(args)) {
        args = {
            accountId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        accountId: args.accountId,
    }

    return update.definition.url
            .replace('{accountId}', parsedArgs.accountId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountLifecycleController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountLifecycleController.php:42
* @route '/x/cockpit/account-lifecycle/{accountId}'
*/
update.post = (args: { accountId: string | number } | [accountId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountLifecycleController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountLifecycleController.php:42
* @route '/x/cockpit/account-lifecycle/{accountId}'
*/
const updateForm = (args: { accountId: string | number } | [accountId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitAccountLifecycleController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitAccountLifecycleController.php:42
* @route '/x/cockpit/account-lifecycle/{accountId}'
*/
updateForm.post = (args: { accountId: string | number } | [accountId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

update.form = updateForm

const accountLifecycle = {
    index: Object.assign(index, index),
    update: Object.assign(update, update),
}

export default accountLifecycle