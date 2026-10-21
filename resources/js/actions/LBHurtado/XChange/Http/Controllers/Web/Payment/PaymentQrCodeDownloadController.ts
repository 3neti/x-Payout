import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
const PaymentQrCodeDownloadController = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PaymentQrCodeDownloadController.url(args, options),
    method: 'get',
})

PaymentQrCodeDownloadController.definition = {
    methods: ["get","head"],
    url: '/x/pay/{code}/attempts/{attempt}/qr',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
PaymentQrCodeDownloadController.url = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            code: args[0],
            attempt: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
        attempt: typeof args.attempt === 'object'
        ? args.attempt.reference
        : args.attempt,
    }

    return PaymentQrCodeDownloadController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{attempt}', parsedArgs.attempt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
PaymentQrCodeDownloadController.get = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PaymentQrCodeDownloadController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
PaymentQrCodeDownloadController.head = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PaymentQrCodeDownloadController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
const PaymentQrCodeDownloadControllerForm = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentQrCodeDownloadController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
PaymentQrCodeDownloadControllerForm.get = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentQrCodeDownloadController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
PaymentQrCodeDownloadControllerForm.head = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentQrCodeDownloadController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PaymentQrCodeDownloadController.form = PaymentQrCodeDownloadControllerForm

export default PaymentQrCodeDownloadController