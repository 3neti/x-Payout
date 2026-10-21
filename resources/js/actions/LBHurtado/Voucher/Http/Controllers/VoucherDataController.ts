import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
const VoucherDataController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: VoucherDataController.url(args, options),
    method: 'get',
})

VoucherDataController.definition = {
    methods: ["get","head"],
    url: '/vouchers/data/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
VoucherDataController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { code: args }
    }

    if (Array.isArray(args)) {
        args = {
            code: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
    }

    return VoucherDataController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
VoucherDataController.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: VoucherDataController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
VoucherDataController.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: VoucherDataController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
const VoucherDataControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VoucherDataController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
VoucherDataControllerForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VoucherDataController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
VoucherDataControllerForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: VoucherDataController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

VoucherDataController.form = VoucherDataControllerForm

export default VoucherDataController