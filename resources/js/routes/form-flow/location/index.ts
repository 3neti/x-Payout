import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \LBHurtado\FormHandlerLocation\Http\Controllers\LocationEvidenceController::__invoke
* @see vendor/3neti/form-handler-location/src/Http/Controllers/LocationEvidenceController.php:21
* @route '/form-flow/{flowId}/location/evidence'
*/
export const evidence = (args: { flowId: string | number } | [flowId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: evidence.url(args, options),
    method: 'post',
})

evidence.definition = {
    methods: ["post"],
    url: '/form-flow/{flowId}/location/evidence',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\FormHandlerLocation\Http\Controllers\LocationEvidenceController::__invoke
* @see vendor/3neti/form-handler-location/src/Http/Controllers/LocationEvidenceController.php:21
* @route '/form-flow/{flowId}/location/evidence'
*/
evidence.url = (args: { flowId: string | number } | [flowId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { flowId: args }
    }

    if (Array.isArray(args)) {
        args = {
            flowId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        flowId: args.flowId,
    }

    return evidence.definition.url
            .replace('{flowId}', parsedArgs.flowId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormHandlerLocation\Http\Controllers\LocationEvidenceController::__invoke
* @see vendor/3neti/form-handler-location/src/Http/Controllers/LocationEvidenceController.php:21
* @route '/form-flow/{flowId}/location/evidence'
*/
evidence.post = (args: { flowId: string | number } | [flowId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: evidence.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerLocation\Http\Controllers\LocationEvidenceController::__invoke
* @see vendor/3neti/form-handler-location/src/Http/Controllers/LocationEvidenceController.php:21
* @route '/form-flow/{flowId}/location/evidence'
*/
const evidenceForm = (args: { flowId: string | number } | [flowId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: evidence.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerLocation\Http\Controllers\LocationEvidenceController::__invoke
* @see vendor/3neti/form-handler-location/src/Http/Controllers/LocationEvidenceController.php:21
* @route '/form-flow/{flowId}/location/evidence'
*/
evidenceForm.post = (args: { flowId: string | number } | [flowId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: evidence.url(args, options),
    method: 'post',
})

evidence.form = evidenceForm

const location = {
    evidence: Object.assign(evidence, evidence),
}

export default location