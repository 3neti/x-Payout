import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\FormHandlerLocation\Http\Controllers\LocationEvidenceController::__invoke
* @see vendor/3neti/form-handler-location/src/Http/Controllers/LocationEvidenceController.php:21
* @route '/form-flow/{flowId}/location/evidence'
*/
const LocationEvidenceController = (args: { flowId: string | number } | [flowId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LocationEvidenceController.url(args, options),
    method: 'post',
})

LocationEvidenceController.definition = {
    methods: ["post"],
    url: '/form-flow/{flowId}/location/evidence',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\FormHandlerLocation\Http\Controllers\LocationEvidenceController::__invoke
* @see vendor/3neti/form-handler-location/src/Http/Controllers/LocationEvidenceController.php:21
* @route '/form-flow/{flowId}/location/evidence'
*/
LocationEvidenceController.url = (args: { flowId: string | number } | [flowId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return LocationEvidenceController.definition.url
            .replace('{flowId}', parsedArgs.flowId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormHandlerLocation\Http\Controllers\LocationEvidenceController::__invoke
* @see vendor/3neti/form-handler-location/src/Http/Controllers/LocationEvidenceController.php:21
* @route '/form-flow/{flowId}/location/evidence'
*/
LocationEvidenceController.post = (args: { flowId: string | number } | [flowId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LocationEvidenceController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerLocation\Http\Controllers\LocationEvidenceController::__invoke
* @see vendor/3neti/form-handler-location/src/Http/Controllers/LocationEvidenceController.php:21
* @route '/form-flow/{flowId}/location/evidence'
*/
const LocationEvidenceControllerForm = (args: { flowId: string | number } | [flowId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LocationEvidenceController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerLocation\Http\Controllers\LocationEvidenceController::__invoke
* @see vendor/3neti/form-handler-location/src/Http/Controllers/LocationEvidenceController.php:21
* @route '/form-flow/{flowId}/location/evidence'
*/
LocationEvidenceControllerForm.post = (args: { flowId: string | number } | [flowId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LocationEvidenceController.url(args, options),
    method: 'post',
})

LocationEvidenceController.form = LocationEvidenceControllerForm

export default LocationEvidenceController