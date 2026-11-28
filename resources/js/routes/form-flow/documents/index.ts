import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\StoreDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/StoreDocumentController.php:16
* @route '/form-flow/{flowId}/documents/{key}'
*/
export const store = (args: { flowId: string | number, key: string | number } | [flowId: string | number, key: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/form-flow/{flowId}/documents/{key}',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\StoreDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/StoreDocumentController.php:16
* @route '/form-flow/{flowId}/documents/{key}'
*/
store.url = (args: { flowId: string | number, key: string | number } | [flowId: string | number, key: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            flowId: args[0],
            key: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        flowId: args.flowId,
        key: args.key,
    }

    return store.definition.url
            .replace('{flowId}', parsedArgs.flowId.toString())
            .replace('{key}', parsedArgs.key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\StoreDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/StoreDocumentController.php:16
* @route '/form-flow/{flowId}/documents/{key}'
*/
store.post = (args: { flowId: string | number, key: string | number } | [flowId: string | number, key: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\StoreDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/StoreDocumentController.php:16
* @route '/form-flow/{flowId}/documents/{key}'
*/
const storeForm = (args: { flowId: string | number, key: string | number } | [flowId: string | number, key: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\StoreDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/StoreDocumentController.php:16
* @route '/form-flow/{flowId}/documents/{key}'
*/
storeForm.post = (args: { flowId: string | number, key: string | number } | [flowId: string | number, key: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
export const show = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/form-flow/documents/{reference}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
show.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reference: args }
    }

    if (Array.isArray(args)) {
        args = {
            reference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reference: args.reference,
    }

    return show.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
show.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
show.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
const showForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
showForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
showForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const documents = {
    store: Object.assign(store, store),
    show: Object.assign(show, show),
}

export default documents