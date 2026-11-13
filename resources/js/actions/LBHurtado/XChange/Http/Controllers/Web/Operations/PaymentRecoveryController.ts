import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:119
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:119
* @route '/x/operations/recovery'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:119
* @route '/x/operations/recovery'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:119
* @route '/x/operations/recovery'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:119
* @route '/x/operations/recovery'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:119
* @route '/x/operations/recovery'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:119
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::partnerReservations
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
*/
export const partnerReservations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: partnerReservations.url(options),
    method: 'get',
})

partnerReservations.definition = {
    methods: ["get","head"],
    url: '/x/operations/recovery/partner-reservations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::partnerReservations
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
*/
partnerReservations.url = (options?: RouteQueryOptions) => {
    return partnerReservations.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::partnerReservations
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
*/
partnerReservations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: partnerReservations.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::partnerReservations
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
*/
partnerReservations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: partnerReservations.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::partnerReservations
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
*/
const partnerReservationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: partnerReservations.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::partnerReservations
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
*/
partnerReservationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: partnerReservations.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::partnerReservations
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
*/
partnerReservationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: partnerReservations.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

partnerReservations.form = partnerReservationsForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::releasePartnerReservation
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:76
* @route '/x/operations/recovery/partner-reservations/{reservation}/release'
*/
export const releasePartnerReservation = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: releasePartnerReservation.url(args, options),
    method: 'post',
})

releasePartnerReservation.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/partner-reservations/{reservation}/release',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::releasePartnerReservation
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:76
* @route '/x/operations/recovery/partner-reservations/{reservation}/release'
*/
releasePartnerReservation.url = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reservation: args }
    }

    if (Array.isArray(args)) {
        args = {
            reservation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reservation: args.reservation,
    }

    return releasePartnerReservation.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::releasePartnerReservation
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:76
* @route '/x/operations/recovery/partner-reservations/{reservation}/release'
*/
releasePartnerReservation.post = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: releasePartnerReservation.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::releasePartnerReservation
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:76
* @route '/x/operations/recovery/partner-reservations/{reservation}/release'
*/
const releasePartnerReservationForm = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: releasePartnerReservation.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::releasePartnerReservation
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:76
* @route '/x/operations/recovery/partner-reservations/{reservation}/release'
*/
releasePartnerReservationForm.post = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: releasePartnerReservation.url(args, options),
    method: 'post',
})

releasePartnerReservation.form = releasePartnerReservationForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::verifyPartnerReservation
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:56
* @route '/x/operations/recovery/partner-reservations/{reservation}/verify'
*/
export const verifyPartnerReservation = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyPartnerReservation.url(args, options),
    method: 'post',
})

verifyPartnerReservation.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/partner-reservations/{reservation}/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::verifyPartnerReservation
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:56
* @route '/x/operations/recovery/partner-reservations/{reservation}/verify'
*/
verifyPartnerReservation.url = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reservation: args }
    }

    if (Array.isArray(args)) {
        args = {
            reservation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reservation: args.reservation,
    }

    return verifyPartnerReservation.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::verifyPartnerReservation
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:56
* @route '/x/operations/recovery/partner-reservations/{reservation}/verify'
*/
verifyPartnerReservation.post = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyPartnerReservation.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::verifyPartnerReservation
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:56
* @route '/x/operations/recovery/partner-reservations/{reservation}/verify'
*/
const verifyPartnerReservationForm = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyPartnerReservation.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::verifyPartnerReservation
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:56
* @route '/x/operations/recovery/partner-reservations/{reservation}/verify'
*/
verifyPartnerReservationForm.post = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyPartnerReservation.url(args, options),
    method: 'post',
})

verifyPartnerReservation.form = verifyPartnerReservationForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::reviewTreasuryPayout
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:96
* @route '/x/operations/recovery/treasury-payouts/{outbox}/review'
*/
export const reviewTreasuryPayout = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reviewTreasuryPayout.url(args, options),
    method: 'post',
})

reviewTreasuryPayout.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/treasury-payouts/{outbox}/review',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::reviewTreasuryPayout
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:96
* @route '/x/operations/recovery/treasury-payouts/{outbox}/review'
*/
reviewTreasuryPayout.url = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return reviewTreasuryPayout.definition.url
            .replace('{outbox}', parsedArgs.outbox.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::reviewTreasuryPayout
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:96
* @route '/x/operations/recovery/treasury-payouts/{outbox}/review'
*/
reviewTreasuryPayout.post = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reviewTreasuryPayout.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::reviewTreasuryPayout
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:96
* @route '/x/operations/recovery/treasury-payouts/{outbox}/review'
*/
const reviewTreasuryPayoutForm = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reviewTreasuryPayout.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::reviewTreasuryPayout
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:96
* @route '/x/operations/recovery/treasury-payouts/{outbox}/review'
*/
reviewTreasuryPayoutForm.post = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reviewTreasuryPayout.url(args, options),
    method: 'post',
})

reviewTreasuryPayout.form = reviewTreasuryPayoutForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::investigateTreasuryPayout
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:86
* @route '/x/operations/recovery/treasury-payouts/{outbox}/investigate'
*/
export const investigateTreasuryPayout = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: investigateTreasuryPayout.url(args, options),
    method: 'post',
})

investigateTreasuryPayout.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/treasury-payouts/{outbox}/investigate',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::investigateTreasuryPayout
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:86
* @route '/x/operations/recovery/treasury-payouts/{outbox}/investigate'
*/
investigateTreasuryPayout.url = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return investigateTreasuryPayout.definition.url
            .replace('{outbox}', parsedArgs.outbox.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::investigateTreasuryPayout
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:86
* @route '/x/operations/recovery/treasury-payouts/{outbox}/investigate'
*/
investigateTreasuryPayout.post = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: investigateTreasuryPayout.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::investigateTreasuryPayout
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:86
* @route '/x/operations/recovery/treasury-payouts/{outbox}/investigate'
*/
const investigateTreasuryPayoutForm = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: investigateTreasuryPayout.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::investigateTreasuryPayout
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:86
* @route '/x/operations/recovery/treasury-payouts/{outbox}/investigate'
*/
investigateTreasuryPayoutForm.post = (args: { outbox: string | number } | [outbox: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: investigateTreasuryPayout.url(args, options),
    method: 'post',
})

investigateTreasuryPayout.form = investigateTreasuryPayoutForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:324
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:324
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:324
* @route '/x/operations/recovery/payouts/{payout}/retry'
*/
retry.post = (args: { payout: string | number } | [payout: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:324
* @route '/x/operations/recovery/payouts/{payout}/retry'
*/
const retryForm = (args: { payout: string | number } | [payout: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::retry
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:324
* @route '/x/operations/recovery/payouts/{payout}/retry'
*/
retryForm.post = (args: { payout: string | number } | [payout: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

retry.form = retryForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::reviewReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:306
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:306
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:306
* @route '/x/operations/recovery/reports/{reference}/review'
*/
reviewReport.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reviewReport.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::reviewReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:306
* @route '/x/operations/recovery/reports/{reference}/review'
*/
const reviewReportForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reviewReport.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::reviewReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:306
* @route '/x/operations/recovery/reports/{reference}/review'
*/
reviewReportForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reviewReport.url(args, options),
    method: 'post',
})

reviewReport.form = reviewReportForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::markAccounted
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:284
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:284
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:284
* @route '/x/operations/recovery/payments/{review}/accounted'
*/
markAccounted.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAccounted.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::markAccounted
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:284
* @route '/x/operations/recovery/payments/{review}/accounted'
*/
const markAccountedForm = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAccounted.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::markAccounted
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:284
* @route '/x/operations/recovery/payments/{review}/accounted'
*/
markAccountedForm.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAccounted.url(args, options),
    method: 'post',
})

markAccounted.form = markAccountedForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::creditExcess
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:216
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:216
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:216
* @route '/x/operations/recovery/payments/{review}/credit-excess'
*/
creditExcess.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: creditExcess.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::creditExcess
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:216
* @route '/x/operations/recovery/payments/{review}/credit-excess'
*/
const creditExcessForm = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: creditExcess.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::creditExcess
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:216
* @route '/x/operations/recovery/payments/{review}/credit-excess'
*/
creditExcessForm.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: creditExcess.url(args, options),
    method: 'post',
})

creditExcess.form = creditExcessForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::applyPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:233
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:233
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:233
* @route '/x/operations/recovery/payments/{review}/apply'
*/
applyPayment.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: applyPayment.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::applyPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:233
* @route '/x/operations/recovery/payments/{review}/apply'
*/
const applyPaymentForm = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: applyPayment.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::applyPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:233
* @route '/x/operations/recovery/payments/{review}/apply'
*/
applyPaymentForm.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: applyPayment.url(args, options),
    method: 'post',
})

applyPayment.form = applyPaymentForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::splitPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:250
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:250
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:250
* @route '/x/operations/recovery/payments/{review}/split'
*/
splitPayment.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: splitPayment.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::splitPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:250
* @route '/x/operations/recovery/payments/{review}/split'
*/
const splitPaymentForm = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: splitPayment.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::splitPayment
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:250
* @route '/x/operations/recovery/payments/{review}/split'
*/
splitPaymentForm.post = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: splitPayment.url(args, options),
    method: 'post',
})

splitPayment.form = splitPaymentForm

const PaymentRecoveryController = { index, partnerReservations, releasePartnerReservation, verifyPartnerReservation, reviewTreasuryPayout, investigateTreasuryPayout, retry, reviewReport, markAccounted, creditExcess, applyPayment, splitPayment }

export default PaymentRecoveryController