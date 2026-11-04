import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPaymentRecoveryReportsController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPaymentRecoveryReportsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-recovery-reports'
*/
export const index = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/pay-codes/{code}/payment-recovery-reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPaymentRecoveryReportsController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPaymentRecoveryReportsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-recovery-reports'
*/
index.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPaymentRecoveryReportsController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPaymentRecoveryReportsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-recovery-reports'
*/
index.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPaymentRecoveryReportsController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPaymentRecoveryReportsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-recovery-reports'
*/
index.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPaymentRecoveryReportsController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPaymentRecoveryReportsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-recovery-reports'
*/
const indexForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPaymentRecoveryReportsController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPaymentRecoveryReportsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-recovery-reports'
*/
indexForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPaymentRecoveryReportsController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPaymentRecoveryReportsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-recovery-reports'
*/
indexForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPaymentRecoveryReportsController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPaymentRecoveryReportsController.php:36
* @route '/x/cockpit/pay-codes/{code}/payment-recovery-reports/{reference}/review'
*/
export const review = (args: { code: string | number, reference: string | number } | [code: string | number, reference: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: review.url(args, options),
    method: 'post',
})

review.definition = {
    methods: ["post"],
    url: '/x/cockpit/pay-codes/{code}/payment-recovery-reports/{reference}/review',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPaymentRecoveryReportsController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPaymentRecoveryReportsController.php:36
* @route '/x/cockpit/pay-codes/{code}/payment-recovery-reports/{reference}/review'
*/
review.url = (args: { code: string | number, reference: string | number } | [code: string | number, reference: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            code: args[0],
            reference: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
        reference: args.reference,
    }

    return review.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPaymentRecoveryReportsController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPaymentRecoveryReportsController.php:36
* @route '/x/cockpit/pay-codes/{code}/payment-recovery-reports/{reference}/review'
*/
review.post = (args: { code: string | number, reference: string | number } | [code: string | number, reference: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: review.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPaymentRecoveryReportsController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPaymentRecoveryReportsController.php:36
* @route '/x/cockpit/pay-codes/{code}/payment-recovery-reports/{reference}/review'
*/
const reviewForm = (args: { code: string | number, reference: string | number } | [code: string | number, reference: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: review.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPaymentRecoveryReportsController::review
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPaymentRecoveryReportsController.php:36
* @route '/x/cockpit/pay-codes/{code}/payment-recovery-reports/{reference}/review'
*/
reviewForm.post = (args: { code: string | number, reference: string | number } | [code: string | number, reference: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: review.url(args, options),
    method: 'post',
})

review.form = reviewForm

const paymentRecoveryReports = {
    index: Object.assign(index, index),
    review: Object.assign(review, review),
}

export default paymentRecoveryReports