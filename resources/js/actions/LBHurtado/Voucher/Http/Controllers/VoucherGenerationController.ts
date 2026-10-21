import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherGenerationController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherGenerationController.php:13
* @route '/vouchers/generate'
*/
const VoucherGenerationController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: VoucherGenerationController.url(options),
    method: 'post',
})

VoucherGenerationController.definition = {
    methods: ["post"],
    url: '/vouchers/generate',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherGenerationController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherGenerationController.php:13
* @route '/vouchers/generate'
*/
VoucherGenerationController.url = (options?: RouteQueryOptions) => {
    return VoucherGenerationController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherGenerationController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherGenerationController.php:13
* @route '/vouchers/generate'
*/
VoucherGenerationController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: VoucherGenerationController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherGenerationController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherGenerationController.php:13
* @route '/vouchers/generate'
*/
const VoucherGenerationControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: VoucherGenerationController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\Voucher\Http\Controllers\VoucherGenerationController::__invoke
* @see vendor/3neti/voucher/src/Http/Controllers/VoucherGenerationController.php:13
* @route '/vouchers/generate'
*/
VoucherGenerationControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: VoucherGenerationController.url(options),
    method: 'post',
})

VoucherGenerationController.form = VoucherGenerationControllerForm

export default VoucherGenerationController