import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\SharedInvoiceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/SharedInvoiceController.php:15
* @route '/x/pay/{code}/invoice/{attachment}'
*/
export const show = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/pay/{code}/invoice/{attachment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\SharedInvoiceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/SharedInvoiceController.php:15
* @route '/x/pay/{code}/invoice/{attachment}'
*/
show.url = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            code: args[0],
            attachment: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
        attachment: args.attachment,
    }

    return show.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{attachment}', parsedArgs.attachment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\SharedInvoiceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/SharedInvoiceController.php:15
* @route '/x/pay/{code}/invoice/{attachment}'
*/
show.get = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\SharedInvoiceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/SharedInvoiceController.php:15
* @route '/x/pay/{code}/invoice/{attachment}'
*/
show.head = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\SharedInvoiceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/SharedInvoiceController.php:15
* @route '/x/pay/{code}/invoice/{attachment}'
*/
const showForm = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\SharedInvoiceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/SharedInvoiceController.php:15
* @route '/x/pay/{code}/invoice/{attachment}'
*/
showForm.get = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\SharedInvoiceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/SharedInvoiceController.php:15
* @route '/x/pay/{code}/invoice/{attachment}'
*/
showForm.head = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const invoice = {
    show: Object.assign(show, show),
}

export default invoice