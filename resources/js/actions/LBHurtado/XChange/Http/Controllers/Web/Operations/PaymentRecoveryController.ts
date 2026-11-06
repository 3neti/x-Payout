import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:29
* @route '/x/operations/recovery'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/operations/recovery',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:29
* @route '/x/operations/recovery'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:29
* @route '/x/operations/recovery'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:29
* @route '/x/operations/recovery'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:29
* @route '/x/operations/recovery'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:29
* @route '/x/operations/recovery'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:29
* @route '/x/operations/recovery'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:217
* @route '/x/operations/recovery/payouts/{payout}/retry'
*/
export const retry = (args: { payout: string | number } | [payout: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry.url(args, options),
    method: 'post',
})

retry.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/payouts/{payout}/retry',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:217
* @route '/x/operations/recovery/payouts/{payout}/retry'
*/
retry.url = (args: { payout: string | number } | [payout: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payout: args }
    }

    if (Array.isArray(args)) {
        args = {
            payout: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payout: args.payout,
    }

    return retry.definition.url
            .replace('{payout}', parsedArgs.payout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:217
* @route '/x/operations/recovery/payouts/{payout}/retry'
*/
retry.post = (args: { payout: string | number } | [payout: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:217
* @route '/x/operations/recovery/payouts/{payout}/retry'
*/
const retryForm = (args: { payout: string | number } | [payout: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:217
* @route '/x/operations/recovery/payouts/{payout}/retry'
*/
retryForm.post = (args: { payout: string | number } | [payout: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

retry.form = retryForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::reviewReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:199
* @route '/x/operations/recovery/reports/{reference}/review'
*/
export const reviewReport = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reviewReport.url(args, options),
    method: 'post',
})

reviewReport.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/reports/{reference}/review',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::reviewReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:199
* @route '/x/operations/recovery/reports/{reference}/review'
*/
reviewReport.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return reviewReport.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::reviewReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:199
* @route '/x/operations/recovery/reports/{reference}/review'
*/
reviewReport.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reviewReport.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::reviewReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:199
* @route '/x/operations/recovery/reports/{reference}/review'
*/
const reviewReportForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reviewReport.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::reviewReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:199
* @route '/x/operations/recovery/reports/{reference}/review'
*/
reviewReportForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reviewReport.url(args, options),
    method: 'post',
})

reviewReport.form = reviewReportForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::markAccounted
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:177
* @route '/x/operations/recovery/payments/{review}/accounted'
*/
export const markAccounted = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAccounted.url(args, options),
    method: 'post',
})

markAccounted.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/payments/{review}/accounted',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::markAccounted
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:177
* @route '/x/operations/recovery/payments/{review}/accounted'
*/
markAccounted.url = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { review: args }
    }

    if (Array.isArray(args)) {
        args = {
            review: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        review: args.review,
    }

    return markAccounted.definition.url
            .replace('{review}', parsedArgs.review.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::markAccounted
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:177
* @route '/x/operations/recovery/payments/{review}/accounted'
*/
markAccounted.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAccounted.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::markAccounted
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:177
* @route '/x/operations/recovery/payments/{review}/accounted'
*/
const markAccountedForm = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAccounted.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::markAccounted
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:177
* @route '/x/operations/recovery/payments/{review}/accounted'
*/
markAccountedForm.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAccounted.url(args, options),
    method: 'post',
})

markAccounted.form = markAccountedForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::creditExcess
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:114
* @route '/x/operations/recovery/payments/{review}/credit-excess'
*/
export const creditExcess = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: creditExcess.url(args, options),
    method: 'post',
})

creditExcess.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/payments/{review}/credit-excess',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::creditExcess
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:114
* @route '/x/operations/recovery/payments/{review}/credit-excess'
*/
creditExcess.url = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { review: args }
    }

    if (Array.isArray(args)) {
        args = {
            review: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        review: args.review,
    }

    return creditExcess.definition.url
            .replace('{review}', parsedArgs.review.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::creditExcess
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:114
* @route '/x/operations/recovery/payments/{review}/credit-excess'
*/
creditExcess.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: creditExcess.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::creditExcess
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:114
* @route '/x/operations/recovery/payments/{review}/credit-excess'
*/
const creditExcessForm = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: creditExcess.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::creditExcess
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:114
* @route '/x/operations/recovery/payments/{review}/credit-excess'
*/
creditExcessForm.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: creditExcess.url(args, options),
    method: 'post',
})

creditExcess.form = creditExcessForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::applyPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:131
* @route '/x/operations/recovery/payments/{review}/apply'
*/
export const applyPayment = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: applyPayment.url(args, options),
    method: 'post',
})

applyPayment.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/payments/{review}/apply',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::applyPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:131
* @route '/x/operations/recovery/payments/{review}/apply'
*/
applyPayment.url = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { review: args }
    }

    if (Array.isArray(args)) {
        args = {
            review: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        review: args.review,
    }

    return applyPayment.definition.url
            .replace('{review}', parsedArgs.review.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::applyPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:131
* @route '/x/operations/recovery/payments/{review}/apply'
*/
applyPayment.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: applyPayment.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::applyPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:131
* @route '/x/operations/recovery/payments/{review}/apply'
*/
const applyPaymentForm = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: applyPayment.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::applyPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:131
* @route '/x/operations/recovery/payments/{review}/apply'
*/
applyPaymentForm.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: applyPayment.url(args, options),
    method: 'post',
})

applyPayment.form = applyPaymentForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::splitPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:148
* @route '/x/operations/recovery/payments/{review}/split'
*/
export const splitPayment = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: splitPayment.url(args, options),
    method: 'post',
})

splitPayment.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/payments/{review}/split',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::splitPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:148
* @route '/x/operations/recovery/payments/{review}/split'
*/
splitPayment.url = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { review: args }
    }

    if (Array.isArray(args)) {
        args = {
            review: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        review: args.review,
    }

    return splitPayment.definition.url
            .replace('{review}', parsedArgs.review.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::splitPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:148
* @route '/x/operations/recovery/payments/{review}/split'
*/
splitPayment.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: splitPayment.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::splitPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:148
* @route '/x/operations/recovery/payments/{review}/split'
*/
const splitPaymentForm = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: splitPayment.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::splitPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:148
* @route '/x/operations/recovery/payments/{review}/split'
*/
splitPaymentForm.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: splitPayment.url(args, options),
    method: 'post',
})

splitPayment.form = splitPaymentForm

const PaymentRecoveryController = { index, retry, reviewReport, markAccounted, creditExcess, applyPayment, splitPayment }

export default PaymentRecoveryController