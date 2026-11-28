import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\StoreDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/StoreDocumentController.php:16
* @route '/form-flow/{flowId}/documents/{key}'
*/
const StoreDocumentController = (args: { flowId: string | number, key: string | number } | [flowId: string | number, key: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StoreDocumentController.url(args, options),
    method: 'post',
})

StoreDocumentController.definition = {
    methods: ["post"],
    url: '/form-flow/{flowId}/documents/{key}',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\StoreDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/StoreDocumentController.php:16
* @route '/form-flow/{flowId}/documents/{key}'
*/
StoreDocumentController.url = (args: { flowId: string | number, key: string | number } | [flowId: string | number, key: string | number ], options?: RouteQueryOptions) => {
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

    return StoreDocumentController.definition.url
            .replace('{flowId}', parsedArgs.flowId.toString())
            .replace('{key}', parsedArgs.key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\StoreDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/StoreDocumentController.php:16
* @route '/form-flow/{flowId}/documents/{key}'
*/
StoreDocumentController.post = (args: { flowId: string | number, key: string | number } | [flowId: string | number, key: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StoreDocumentController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\StoreDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/StoreDocumentController.php:16
* @route '/form-flow/{flowId}/documents/{key}'
*/
const StoreDocumentControllerForm = (args: { flowId: string | number, key: string | number } | [flowId: string | number, key: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: StoreDocumentController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\StoreDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/StoreDocumentController.php:16
* @route '/form-flow/{flowId}/documents/{key}'
*/
StoreDocumentControllerForm.post = (args: { flowId: string | number, key: string | number } | [flowId: string | number, key: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: StoreDocumentController.url(args, options),
    method: 'post',
})

StoreDocumentController.form = StoreDocumentControllerForm

export default StoreDocumentController