import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::stage
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:34
* @route '/x/cockpit/campaigns/{worksheet}/imports'
*/
export const stage = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stage.url(args, options),
    method: 'post',
})

stage.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/{worksheet}/imports',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::stage
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:34
* @route '/x/cockpit/campaigns/{worksheet}/imports'
*/
stage.url = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return stage.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::stage
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:34
* @route '/x/cockpit/campaigns/{worksheet}/imports'
*/
stage.post = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stage.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::stage
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:34
* @route '/x/cockpit/campaigns/{worksheet}/imports'
*/
const stageForm = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: stage.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::stage
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:34
* @route '/x/cockpit/campaigns/{worksheet}/imports'
*/
stageForm.post = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: stage.url(args, options),
    method: 'post',
})

stage.form = stageForm

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
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::updateMapping
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:110
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/mapping'
*/
export const updateMapping = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateMapping.url(args, options),
    method: 'patch',
})

updateMapping.definition = {
    methods: ["patch"],
    url: '/x/cockpit/campaigns/{worksheet}/imports/{import}/mapping',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::updateMapping
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:110
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/mapping'
*/
updateMapping.url = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions) => {
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

    return updateMapping.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace('{import}', parsedArgs.import.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::updateMapping
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:110
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/mapping'
*/
updateMapping.patch = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateMapping.url(args, options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::updateMapping
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:110
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/mapping'
*/
const updateMappingForm = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateMapping.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::updateMapping
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:110
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/mapping'
*/
updateMappingForm.patch = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateMapping.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateMapping.form = updateMappingForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::discard
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:208
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}'
*/
export const discard = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: discard.url(args, options),
    method: 'delete',
})

discard.definition = {
    methods: ["delete"],
    url: '/x/cockpit/campaigns/{worksheet}/imports/{import}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::discard
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:208
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}'
*/
discard.url = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions) => {
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

    return discard.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace('{import}', parsedArgs.import.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::discard
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:208
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}'
*/
discard.delete = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: discard.url(args, options),
    method: 'delete',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::discard
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:208
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}'
*/
const discardForm = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: discard.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::discard
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:208
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}'
*/
discardForm.delete = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: discard.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

discard.form = discardForm

const CockpitCampaignWorksheetImportController = { stage, apply, updateMapping, discard }

export default CockpitCampaignWorksheetImportController