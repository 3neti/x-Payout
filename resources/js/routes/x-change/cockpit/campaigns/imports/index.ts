import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
import mapping from './mapping'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:34
* @route '/x/cockpit/campaigns/{worksheet}/imports'
*/
export const store = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/{worksheet}/imports',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:34
* @route '/x/cockpit/campaigns/{worksheet}/imports'
*/
store.url = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { worksheet: args }
    }

    if (Array.isArray(args)) {
        args = {
            worksheet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        worksheet: args.worksheet,
    }

    return store.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:34
* @route '/x/cockpit/campaigns/{worksheet}/imports'
*/
store.post = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:34
* @route '/x/cockpit/campaigns/{worksheet}/imports'
*/
const storeForm = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:34
* @route '/x/cockpit/campaigns/{worksheet}/imports'
*/
storeForm.post = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::apply
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:176
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/apply'
*/
export const apply = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apply.url(args, options),
    method: 'post',
})

apply.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/{worksheet}/imports/{import}/apply',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::apply
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:176
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/apply'
*/
apply.url = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            worksheet: args[0],
            import: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        worksheet: args.worksheet,
        import: args.import,
    }

    return apply.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace('{import}', parsedArgs.import.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::apply
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:176
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/apply'
*/
apply.post = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apply.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::apply
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:176
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/apply'
*/
const applyForm = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: apply.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::apply
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:176
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/apply'
*/
applyForm.post = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: apply.url(args, options),
    method: 'post',
})

apply.form = applyForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:208
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}'
*/
export const destroy = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/x/cockpit/campaigns/{worksheet}/imports/{import}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:208
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}'
*/
destroy.url = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            worksheet: args[0],
            import: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        worksheet: args.worksheet,
        import: args.import,
    }

    return destroy.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace('{import}', parsedArgs.import.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:208
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}'
*/
destroy.delete = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:208
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}'
*/
const destroyForm = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:208
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}'
*/
destroyForm.delete = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const imports = {
    store: Object.assign(store, store),
    apply: Object.assign(apply, apply),
    mapping: Object.assign(mapping, mapping),
    destroy: Object.assign(destroy, destroy),
}

export default imports