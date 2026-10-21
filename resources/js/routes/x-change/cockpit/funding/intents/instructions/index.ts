import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
export const show = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/funding/intents/{intent}/instructions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
show.url = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{intent}', parsedArgs.intent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
show.get = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
show.head = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
const showForm = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
showForm.get = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingInstructionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingInstructionController.php:18
* @route '/x/cockpit/funding/intents/{intent}/instructions'
*/
showForm.head = (args: { intent: string | number | { reference: string | number } } | [intent: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const instructions = {
    show: Object.assign(show, show),
}

export default instructions