import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/quick-generate/reserve-issuances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceIndexController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceIndexController.php:16
* @route '/x/cockpit/quick-generate/reserve-issuances'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceRecoveryController.php:18
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}/recover'
*/
export const recover = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: recover.url(args, options),
    method: 'post',
})

recover.definition = {
    methods: ["post"],
    url: '/x/cockpit/quick-generate/reserve-issuances/{reference}/recover',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceRecoveryController.php:18
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}/recover'
*/
recover.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return recover.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceRecoveryController.php:18
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}/recover'
*/
recover.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: recover.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceRecoveryController.php:18
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}/recover'
*/
const recoverForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: recover.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceRecoveryController.php:18
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}/recover'
*/
recoverForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: recover.url(args, options),
    method: 'post',
})

recover.form = recoverForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
export const show = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/quick-generate/reserve-issuances/{reference}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
show.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
show.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
show.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
const showForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
showForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceStatusController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceStatusController.php:15
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}'
*/
showForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const reserveIssuances = {
    index: Object.assign(index, index),
    recover: Object.assign(recover, recover),
    show: Object.assign(show, show),
}

export default reserveIssuances