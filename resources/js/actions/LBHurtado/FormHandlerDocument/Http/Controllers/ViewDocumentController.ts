import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
const ViewDocumentController = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewDocumentController.url(args, options),
    method: 'get',
})

ViewDocumentController.definition = {
    methods: ["get","head"],
    url: '/form-flow/documents/{reference}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
ViewDocumentController.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewDocumentController.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
ViewDocumentController.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewDocumentController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
ViewDocumentController.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewDocumentController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
const ViewDocumentControllerForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewDocumentController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
ViewDocumentControllerForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewDocumentController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\FormHandlerDocument\Http\Controllers\ViewDocumentController::__invoke
* @see vendor/3neti/form-handler-document/src/Http/Controllers/ViewDocumentController.php:16
* @route '/form-flow/documents/{reference}'
*/
ViewDocumentControllerForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewDocumentController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewDocumentController.form = ViewDocumentControllerForm

export default ViewDocumentController