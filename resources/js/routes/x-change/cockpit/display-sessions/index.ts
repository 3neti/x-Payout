import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:20
* @route '/x/cockpit/display-sessions'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/display-sessions',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:20
* @route '/x/cockpit/display-sessions'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:20
* @route '/x/cockpit/display-sessions'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:20
* @route '/x/cockpit/display-sessions'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:20
* @route '/x/cockpit/display-sessions'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:29
* @route '/x/cockpit/display-sessions/{displaySession}'
*/
export const show = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/display-sessions/{displaySession}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:29
* @route '/x/cockpit/display-sessions/{displaySession}'
*/
show.url = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { displaySession: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { displaySession: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            displaySession: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        displaySession: typeof args.displaySession === 'object'
        ? args.displaySession.reference
        : args.displaySession,
    }

    return show.definition.url
            .replace('{displaySession}', parsedArgs.displaySession.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:29
* @route '/x/cockpit/display-sessions/{displaySession}'
*/
show.get = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:29
* @route '/x/cockpit/display-sessions/{displaySession}'
*/
show.head = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:29
* @route '/x/cockpit/display-sessions/{displaySession}'
*/
const showForm = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:29
* @route '/x/cockpit/display-sessions/{displaySession}'
*/
showForm.get = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:29
* @route '/x/cockpit/display-sessions/{displaySession}'
*/
showForm.head = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::end
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:36
* @route '/x/cockpit/display-sessions/{displaySession}/end'
*/
export const end = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: end.url(args, options),
    method: 'post',
})

end.definition = {
    methods: ["post"],
    url: '/x/cockpit/display-sessions/{displaySession}/end',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::end
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:36
* @route '/x/cockpit/display-sessions/{displaySession}/end'
*/
end.url = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { displaySession: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { displaySession: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            displaySession: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        displaySession: typeof args.displaySession === 'object'
        ? args.displaySession.reference
        : args.displaySession,
    }

    return end.definition.url
            .replace('{displaySession}', parsedArgs.displaySession.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::end
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:36
* @route '/x/cockpit/display-sessions/{displaySession}/end'
*/
end.post = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: end.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::end
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:36
* @route '/x/cockpit/display-sessions/{displaySession}/end'
*/
const endForm = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: end.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::end
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:36
* @route '/x/cockpit/display-sessions/{displaySession}/end'
*/
endForm.post = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: end.url(args, options),
    method: 'post',
})

end.form = endForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::reset
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:44
* @route '/x/cockpit/display-sessions/{displaySession}/reset'
*/
export const reset = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(args, options),
    method: 'post',
})

reset.definition = {
    methods: ["post"],
    url: '/x/cockpit/display-sessions/{displaySession}/reset',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::reset
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:44
* @route '/x/cockpit/display-sessions/{displaySession}/reset'
*/
reset.url = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { displaySession: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { displaySession: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            displaySession: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        displaySession: typeof args.displaySession === 'object'
        ? args.displaySession.reference
        : args.displaySession,
    }

    return reset.definition.url
            .replace('{displaySession}', parsedArgs.displaySession.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::reset
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:44
* @route '/x/cockpit/display-sessions/{displaySession}/reset'
*/
reset.post = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::reset
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:44
* @route '/x/cockpit/display-sessions/{displaySession}/reset'
*/
const resetForm = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reset.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignDisplaySessionController::reset
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignDisplaySessionController.php:44
* @route '/x/cockpit/display-sessions/{displaySession}/reset'
*/
resetForm.post = (args: { displaySession: string | number | { reference: string | number } } | [displaySession: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reset.url(args, options),
    method: 'post',
})

reset.form = resetForm

const displaySessions = {
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    end: Object.assign(end, end),
    reset: Object.assign(reset, reset),
}

export default displaySessions