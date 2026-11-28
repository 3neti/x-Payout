import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/operations/recovery/partner-reservations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:38
* @route '/x/operations/recovery/partner-reservations'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::release
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:76
* @route '/x/operations/recovery/partner-reservations/{reservation}/release'
*/
export const release = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: release.url(args, options),
    method: 'post',
})

release.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/partner-reservations/{reservation}/release',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::release
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:76
* @route '/x/operations/recovery/partner-reservations/{reservation}/release'
*/
release.url = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return release.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::release
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:76
* @route '/x/operations/recovery/partner-reservations/{reservation}/release'
*/
release.post = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: release.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::release
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:76
* @route '/x/operations/recovery/partner-reservations/{reservation}/release'
*/
const releaseForm = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: release.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::release
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:76
* @route '/x/operations/recovery/partner-reservations/{reservation}/release'
*/
releaseForm.post = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: release.url(args, options),
    method: 'post',
})

release.form = releaseForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:56
* @route '/x/operations/recovery/partner-reservations/{reservation}/verify'
*/
export const verify = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/x/operations/recovery/partner-reservations/{reservation}/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:56
* @route '/x/operations/recovery/partner-reservations/{reservation}/verify'
*/
verify.url = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return verify.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:56
* @route '/x/operations/recovery/partner-reservations/{reservation}/verify'
*/
verify.post = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:56
* @route '/x/operations/recovery/partner-reservations/{reservation}/verify'
*/
const verifyForm = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Operations\PaymentRecoveryController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Operations/PaymentRecoveryController.php:56
* @route '/x/operations/recovery/partner-reservations/{reservation}/verify'
*/
verifyForm.post = (args: { reservation: string | number } | [reservation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(args, options),
    method: 'post',
})

verify.form = verifyForm

const partnerReservation = {
    index: Object.assign(index, index),
    release: Object.assign(release, release),
    verify: Object.assign(verify, verify),
}

export default partnerReservation