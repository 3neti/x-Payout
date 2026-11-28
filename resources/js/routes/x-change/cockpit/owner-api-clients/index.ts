import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:23
* @route '/x/cockpit/api-clients'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/api-clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:23
* @route '/x/cockpit/api-clients'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:23
* @route '/x/cockpit/api-clients'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:23
* @route '/x/cockpit/api-clients'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:23
* @route '/x/cockpit/api-clients'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:23
* @route '/x/cockpit/api-clients'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:23
* @route '/x/cockpit/api-clients'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:47
* @route '/x/cockpit/api-clients'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/api-clients',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:47
* @route '/x/cockpit/api-clients'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:47
* @route '/x/cockpit/api-clients'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:47
* @route '/x/cockpit/api-clients'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:47
* @route '/x/cockpit/api-clients'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::suspend
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:76
* @route '/x/cockpit/api-clients/{client}/suspend'
*/
export const suspend = (args: { client: string | number | { id: string | number } } | [client: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: suspend.url(args, options),
    method: 'post',
})

suspend.definition = {
    methods: ["post"],
    url: '/x/cockpit/api-clients/{client}/suspend',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::suspend
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:76
* @route '/x/cockpit/api-clients/{client}/suspend'
*/
suspend.url = (args: { client: string | number | { id: string | number } } | [client: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { client: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            client: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        client: typeof args.client === 'object'
        ? args.client.id
        : args.client,
    }

    return suspend.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::suspend
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:76
* @route '/x/cockpit/api-clients/{client}/suspend'
*/
suspend.post = (args: { client: string | number | { id: string | number } } | [client: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: suspend.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::suspend
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:76
* @route '/x/cockpit/api-clients/{client}/suspend'
*/
const suspendForm = (args: { client: string | number | { id: string | number } } | [client: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: suspend.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::suspend
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:76
* @route '/x/cockpit/api-clients/{client}/suspend'
*/
suspendForm.post = (args: { client: string | number | { id: string | number } } | [client: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: suspend.url(args, options),
    method: 'post',
})

suspend.form = suspendForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::revoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:84
* @route '/x/cockpit/api-clients/{client}/revoke'
*/
export const revoke = (args: { client: string | number | { id: string | number } } | [client: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: revoke.url(args, options),
    method: 'post',
})

revoke.definition = {
    methods: ["post"],
    url: '/x/cockpit/api-clients/{client}/revoke',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::revoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:84
* @route '/x/cockpit/api-clients/{client}/revoke'
*/
revoke.url = (args: { client: string | number | { id: string | number } } | [client: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { client: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            client: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        client: typeof args.client === 'object'
        ? args.client.id
        : args.client,
    }

    return revoke.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::revoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:84
* @route '/x/cockpit/api-clients/{client}/revoke'
*/
revoke.post = (args: { client: string | number | { id: string | number } } | [client: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: revoke.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::revoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:84
* @route '/x/cockpit/api-clients/{client}/revoke'
*/
const revokeForm = (args: { client: string | number | { id: string | number } } | [client: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: revoke.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\OwnerPartnerApiClientController::revoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/OwnerPartnerApiClientController.php:84
* @route '/x/cockpit/api-clients/{client}/revoke'
*/
revokeForm.post = (args: { client: string | number | { id: string | number } } | [client: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: revoke.url(args, options),
    method: 'post',
})

revoke.form = revokeForm

const ownerApiClients = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    suspend: Object.assign(suspend, suspend),
    revoke: Object.assign(revoke, revoke),
}

export default ownerApiClients