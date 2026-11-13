import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:306
* @route '/x/operations/recovery/reports/{reference}/review'
*/
export const review = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: review.url(args, options),
    method: 'post',
})

review.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/reports/{reference}/review',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:306
* @route '/x/operations/recovery/reports/{reference}/review'
*/
review.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return review.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:306
* @route '/x/operations/recovery/reports/{reference}/review'
*/
review.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: review.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:306
* @route '/x/operations/recovery/reports/{reference}/review'
*/
const reviewForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: review.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:306
* @route '/x/operations/recovery/reports/{reference}/review'
*/
reviewForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: review.url(args, options),
    method: 'post',
})

review.form = reviewForm

const report = {
    review: Object.assign(review, review),
}

export default report