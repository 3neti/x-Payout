import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceRecoveryController.php:18
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}/recover'
*/
const CockpitReserveIssuanceRecoveryController = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitReserveIssuanceRecoveryController.url(args, options),
    method: 'post',
})

CockpitReserveIssuanceRecoveryController.definition = {
    methods: ["post"],
    url: '/x/cockpit/quick-generate/reserve-issuances/{reference}/recover',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceRecoveryController.php:18
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}/recover'
*/
CockpitReserveIssuanceRecoveryController.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CockpitReserveIssuanceRecoveryController.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceRecoveryController.php:18
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}/recover'
*/
CockpitReserveIssuanceRecoveryController.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitReserveIssuanceRecoveryController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceRecoveryController.php:18
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}/recover'
*/
const CockpitReserveIssuanceRecoveryControllerForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitReserveIssuanceRecoveryController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitReserveIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitReserveIssuanceRecoveryController.php:18
* @route '/x/cockpit/quick-generate/reserve-issuances/{reference}/recover'
*/
CockpitReserveIssuanceRecoveryControllerForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitReserveIssuanceRecoveryController.url(args, options),
    method: 'post',
})

CockpitReserveIssuanceRecoveryController.form = CockpitReserveIssuanceRecoveryControllerForm

export default CockpitReserveIssuanceRecoveryController