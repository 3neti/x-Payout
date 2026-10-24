import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:32
* @route '/x/cockpit/campaigns/intakes'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/intakes',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:32
* @route '/x/cockpit/campaigns/intakes'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:32
* @route '/x/cockpit/campaigns/intakes'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:32
* @route '/x/cockpit/campaigns/intakes'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:32
* @route '/x/cockpit/campaigns/intakes'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:84
* @route '/x/cockpit/campaigns/intakes/{intake}'
*/
export const update = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/x/cockpit/campaigns/intakes/{intake}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:84
* @route '/x/cockpit/campaigns/intakes/{intake}'
*/
update.url = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { intake: args }
    }

    if (Array.isArray(args)) {
        args = {
            intake: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        intake: args.intake,
    }

    return update.definition.url
            .replace('{intake}', parsedArgs.intake.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:84
* @route '/x/cockpit/campaigns/intakes/{intake}'
*/
update.patch = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:84
* @route '/x/cockpit/campaigns/intakes/{intake}'
*/
const updateForm = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:84
* @route '/x/cockpit/campaigns/intakes/{intake}'
*/
updateForm.patch = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::convert
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:132
* @route '/x/cockpit/campaigns/intakes/{intake}/conversion'
*/
export const convert = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: convert.url(args, options),
    method: 'post',
})

convert.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/intakes/{intake}/conversion',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::convert
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:132
* @route '/x/cockpit/campaigns/intakes/{intake}/conversion'
*/
convert.url = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { intake: args }
    }

    if (Array.isArray(args)) {
        args = {
            intake: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        intake: args.intake,
    }

    return convert.definition.url
            .replace('{intake}', parsedArgs.intake.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::convert
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:132
* @route '/x/cockpit/campaigns/intakes/{intake}/conversion'
*/
convert.post = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: convert.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::convert
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:132
* @route '/x/cockpit/campaigns/intakes/{intake}/conversion'
*/
const convertForm = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: convert.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::convert
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:132
* @route '/x/cockpit/campaigns/intakes/{intake}/conversion'
*/
convertForm.post = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: convert.url(args, options),
    method: 'post',
})

convert.form = convertForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:178
* @route '/x/cockpit/campaigns/intakes/{intake}'
*/
export const destroy = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/x/cockpit/campaigns/intakes/{intake}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:178
* @route '/x/cockpit/campaigns/intakes/{intake}'
*/
destroy.url = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { intake: args }
    }

    if (Array.isArray(args)) {
        args = {
            intake: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        intake: args.intake,
    }

    return destroy.definition.url
            .replace('{intake}', parsedArgs.intake.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:178
* @route '/x/cockpit/campaigns/intakes/{intake}'
*/
destroy.delete = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:178
* @route '/x/cockpit/campaigns/intakes/{intake}'
*/
const destroyForm = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetIntakeController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetIntakeController.php:178
* @route '/x/cockpit/campaigns/intakes/{intake}'
*/
destroyForm.delete = (args: { intake: string | number } | [intake: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const intakes = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    convert: Object.assign(convert, convert),
    destroy: Object.assign(destroy, destroy),
}

export default intakes