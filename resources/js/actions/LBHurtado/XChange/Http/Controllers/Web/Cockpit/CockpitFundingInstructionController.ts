import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
const CockpitFundingInstructionController = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitFundingInstructionController.url(args, options),
    method: 'get',
})

CockpitFundingInstructionController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/funding/intents/{intent}/instructions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
CockpitFundingInstructionController.url = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return CockpitFundingInstructionController.definition.url
            .replace('{intent}', parsedArgs.intent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
CockpitFundingInstructionController.get = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitFundingInstructionController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
CockpitFundingInstructionController.head = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitFundingInstructionController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
const CockpitFundingInstructionControllerForm = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitFundingInstructionController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
CockpitFundingInstructionControllerForm.get = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitFundingInstructionController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
CockpitFundingInstructionControllerForm.head = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitFundingInstructionController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitFundingInstructionController.form = CockpitFundingInstructionControllerForm

export default CockpitFundingInstructionController