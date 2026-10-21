import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
export const download = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/x/pay/{code}/attempts/{attempt}/qr',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
download.url = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions) => {
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

    return download.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{attempt}', parsedArgs.attempt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
download.get = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
download.head = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
const downloadForm = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
downloadForm.get = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentQrCodeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentQrCodeDownloadController.php:20
* @route '/x/pay/{code}/attempts/{attempt}/qr'
*/
downloadForm.head = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

download.form = downloadForm

const qr = {
    download: Object.assign(download, download),
}

export default qr