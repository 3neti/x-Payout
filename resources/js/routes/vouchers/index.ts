import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherGenerationController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherGenerationController.php:13
* @route '/vouchers/generate'
*/
export const generate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate.url(options),
    method: 'post',
})

generate.definition = {
    methods: ["post"],
    url: '/vouchers/generate',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherGenerationController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherGenerationController.php:13
* @route '/vouchers/generate'
*/
generate.url = (options?: RouteQueryOptions) => {
    return generate.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherGenerationController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherGenerationController.php:13
* @route '/vouchers/generate'
*/
generate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherGenerationController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherGenerationController.php:13
* @route '/vouchers/generate'
*/
const generateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generate.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherGenerationController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherGenerationController.php:13
* @route '/vouchers/generate'
*/
generateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generate.url(options),
    method: 'post',
})

generate.form = generateForm

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
export const data = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: data.url(args, options),
    method: 'get',
})

data.definition = {
    methods: ["get","head"],
    url: '/vouchers/data/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
data.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return data.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
data.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: data.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
data.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: data.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
const dataForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: data.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
dataForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: data.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherDataController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherDataController.php:10
* @route '/vouchers/data/{code}'
*/
dataForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: data.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

data.form = dataForm

const vouchers = {
    generate: Object.assign(generate, generate),
    data: Object.assign(data, data),
}

export default vouchers