import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingVerificationCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingVerificationCheckController.php:19
* @route '/x/cockpit/funding/intents/{intent}/verification-checks'
*/
const CockpitFundingVerificationCheckController = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingVerificationCheckController.url(args, options),
    method: 'post',
})

CockpitFundingVerificationCheckController.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/intents/{intent}/verification-checks',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingVerificationCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingVerificationCheckController.php:19
* @route '/x/cockpit/funding/intents/{intent}/verification-checks'
*/
CockpitFundingVerificationCheckController.url = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { intent: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { intent: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            intent: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        intent: typeof args.intent === 'object'
        ? args.intent.reference
        : args.intent,
    }

    return CockpitFundingVerificationCheckController.definition.url
            .replace('{intent}', parsedArgs.intent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingVerificationCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingVerificationCheckController.php:19
* @route '/x/cockpit/funding/intents/{intent}/verification-checks'
*/
CockpitFundingVerificationCheckController.post = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitFundingVerificationCheckController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingVerificationCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingVerificationCheckController.php:19
* @route '/x/cockpit/funding/intents/{intent}/verification-checks'
*/
const CockpitFundingVerificationCheckControllerForm = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingVerificationCheckController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingVerificationCheckController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingVerificationCheckController.php:19
* @route '/x/cockpit/funding/intents/{intent}/verification-checks'
*/
CockpitFundingVerificationCheckControllerForm.post = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingVerificationCheckController.url(args, options),
    method: 'post',
})

CockpitFundingVerificationCheckController.form = CockpitFundingVerificationCheckControllerForm

export default CockpitFundingVerificationCheckController