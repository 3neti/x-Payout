import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryForgetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryForgetController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}'
*/
const CockpitRiderLibraryForgetController = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: CockpitRiderLibraryForgetController.url(args, options),
    method: 'delete',
})

CockpitRiderLibraryForgetController.definition = {
    methods: ["delete"],
    url: '/x/cockpit/rider-library/{riderLibraryEntry}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryForgetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryForgetController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}'
*/
CockpitRiderLibraryForgetController.url = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { riderLibraryEntry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { riderLibraryEntry: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            riderLibraryEntry: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        riderLibraryEntry: typeof args.riderLibraryEntry === 'object'
        ? args.riderLibraryEntry.reference
        : args.riderLibraryEntry,
    }

    return CockpitRiderLibraryForgetController.definition.url
            .replace('{riderLibraryEntry}', parsedArgs.riderLibraryEntry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryForgetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryForgetController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}'
*/
CockpitRiderLibraryForgetController.delete = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: CockpitRiderLibraryForgetController.url(args, options),
    method: 'delete',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryForgetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryForgetController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}'
*/
const CockpitRiderLibraryForgetControllerForm = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitRiderLibraryForgetController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryForgetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryForgetController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}'
*/
CockpitRiderLibraryForgetControllerForm.delete = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitRiderLibraryForgetController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

CockpitRiderLibraryForgetController.form = CockpitRiderLibraryForgetControllerForm

export default CockpitRiderLibraryForgetController