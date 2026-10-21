import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryStoreController.php:15
* @route '/x/cockpit/rider-library'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/rider-library',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryStoreController.php:15
* @route '/x/cockpit/rider-library'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryStoreController.php:15
* @route '/x/cockpit/rider-library'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryStoreController.php:15
* @route '/x/cockpit/rider-library'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryStoreController.php:15
* @route '/x/cockpit/rider-library'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryPinController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryPinController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}/pin'
*/
export const pin = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: pin.url(args, options),
    method: 'patch',
})

pin.definition = {
    methods: ["patch"],
    url: '/x/cockpit/rider-library/{riderLibraryEntry}/pin',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryPinController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryPinController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}/pin'
*/
pin.url = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return pin.definition.url
            .replace('{riderLibraryEntry}', parsedArgs.riderLibraryEntry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryPinController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryPinController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}/pin'
*/
pin.patch = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: pin.url(args, options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryPinController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryPinController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}/pin'
*/
const pinForm = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: pin.url(args, {
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
pinForm.patch = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: pin.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

pin.form = pinForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryForgetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryForgetController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}'
*/
export const forget = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forget.url(args, options),
    method: 'delete',
})

forget.definition = {
    methods: ["delete"],
    url: '/x/cockpit/rider-library/{riderLibraryEntry}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryForgetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryForgetController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}'
*/
forget.url = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return forget.definition.url
            .replace('{riderLibraryEntry}', parsedArgs.riderLibraryEntry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryForgetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryForgetController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}'
*/
forget.delete = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forget.url(args, options),
    method: 'delete',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitRiderLibraryForgetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitRiderLibraryForgetController.php:16
* @route '/x/cockpit/rider-library/{riderLibraryEntry}'
*/
const forgetForm = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forget.url(args, {
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
forgetForm.delete = (args: { riderLibraryEntry: string | number | { reference: string | number } } | [riderLibraryEntry: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forget.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

forget.form = forgetForm

const riderLibrary = {
    store: Object.assign(store, store),
    pin: Object.assign(pin, pin),
    forget: Object.assign(forget, forget),
}

export default riderLibrary