import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryPinController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryPinController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}/pin'
*/
const CockpitRiderLibraryPinController = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: CockpitRiderLibraryPinController.url(args, options),
    method: 'patch',
})

CockpitRiderLibraryPinController.definition = {
    methods: ["patch"],
    url: '/x/cockpit/rider-library/{riderLibraryEntry}/pin',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryPinController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryPinController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}/pin'
*/
CockpitRiderLibraryPinController.url = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return CockpitRiderLibraryPinController.definition.url
            .replace('{riderLibraryEntry}', parsedArgs.riderLibraryEntry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryPinController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryPinController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}/pin'
*/
CockpitRiderLibraryPinController.patch = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: CockpitRiderLibraryPinController.url(args, options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryPinController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryPinController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}/pin'
*/
const CockpitRiderLibraryPinControllerForm = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitRiderLibraryPinController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryPinController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryPinController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}/pin'
*/
CockpitRiderLibraryPinControllerForm.patch = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitRiderLibraryPinController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

CockpitRiderLibraryPinController.form = CockpitRiderLibraryPinControllerForm

export default CockpitRiderLibraryPinController