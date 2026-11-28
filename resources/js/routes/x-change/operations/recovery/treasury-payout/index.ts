import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:96
* @route '/x/operations/recovery/treasury-payouts/{outbox}/review'
*/
export const review = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: review.url(args, options),
    method: 'post',
})

review.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/treasury-payouts/{outbox}/review',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:96
* @route '/x/operations/recovery/treasury-payouts/{outbox}/review'
*/
review.url = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outbox: args }
    }

    if (Array.isArray(args)) {
        args = {
            outbox: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outbox: args.outbox,
    }

    return review.definition.url
            .replace('{outbox}', parsedArgs.outbox.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:96
* @route '/x/operations/recovery/treasury-payouts/{outbox}/review'
*/
review.post = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: review.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:96
* @route '/x/operations/recovery/treasury-payouts/{outbox}/review'
*/
const reviewForm = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: review.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:96
* @route '/x/operations/recovery/treasury-payouts/{outbox}/review'
*/
reviewForm.post = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: review.url(args, options),
    method: 'post',
})

review.form = reviewForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::investigate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:86
* @route '/x/operations/recovery/treasury-payouts/{outbox}/investigate'
*/
export const investigate = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: investigate.url(args, options),
    method: 'post',
})

investigate.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/treasury-payouts/{outbox}/investigate',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::investigate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:86
* @route '/x/operations/recovery/treasury-payouts/{outbox}/investigate'
*/
investigate.url = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outbox: args }
    }

    if (Array.isArray(args)) {
        args = {
            outbox: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outbox: args.outbox,
    }

    return investigate.definition.url
            .replace('{outbox}', parsedArgs.outbox.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::investigate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:86
* @route '/x/operations/recovery/treasury-payouts/{outbox}/investigate'
*/
investigate.post = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: investigate.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::investigate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:86
* @route '/x/operations/recovery/treasury-payouts/{outbox}/investigate'
*/
const investigateForm = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: investigate.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::investigate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:86
* @route '/x/operations/recovery/treasury-payouts/{outbox}/investigate'
*/
investigateForm.post = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: investigate.url(args, options),
    method: 'post',
})

investigate.form = investigateForm

const treasuryPayout = {
    review: Object.assign(review, review),
    investigate: Object.assign(investigate, investigate),
}

export default treasuryPayout