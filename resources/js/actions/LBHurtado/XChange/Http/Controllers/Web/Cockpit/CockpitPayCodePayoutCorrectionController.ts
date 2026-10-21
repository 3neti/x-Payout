import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePayoutCorrectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePayoutCorrectionController.php:22
* @route '/x/cockpit/pay-codes/{code}/payout-corrections'
*/
const CockpitPayCodePayoutCorrectionController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPayCodePayoutCorrectionController.url(args, options),
    method: 'post',
})

CockpitPayCodePayoutCorrectionController.definition = {
    methods: ["post"],
    url: '/x/cockpit/pay-codes/{code}/payout-corrections',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePayoutCorrectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePayoutCorrectionController.php:22
* @route '/x/cockpit/pay-codes/{code}/payout-corrections'
*/
CockpitPayCodePayoutCorrectionController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CockpitPayCodePayoutCorrectionController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePayoutCorrectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePayoutCorrectionController.php:22
* @route '/x/cockpit/pay-codes/{code}/payout-corrections'
*/
CockpitPayCodePayoutCorrectionController.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPayCodePayoutCorrectionController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePayoutCorrectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePayoutCorrectionController.php:22
* @route '/x/cockpit/pay-codes/{code}/payout-corrections'
*/
const CockpitPayCodePayoutCorrectionControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodePayoutCorrectionController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePayoutCorrectionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePayoutCorrectionController.php:22
* @route '/x/cockpit/pay-codes/{code}/payout-corrections'
*/
CockpitPayCodePayoutCorrectionControllerForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodePayoutCorrectionController.url(args, options),
    method: 'post',
})

CockpitPayCodePayoutCorrectionController.form = CockpitPayCodePayoutCorrectionControllerForm

export default CockpitPayCodePayoutCorrectionController