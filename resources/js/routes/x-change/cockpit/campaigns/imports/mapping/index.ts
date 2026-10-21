import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:110
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/mapping'
*/
export const update = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/x/cockpit/campaigns/{worksheet}/imports/{import}/mapping',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:110
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/mapping'
*/
update.url = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace('{import}', parsedArgs.import.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:110
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/mapping'
*/
update.patch = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:110
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/mapping'
*/
const updateForm = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetImportController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetImportController.php:110
* @route '/x/cockpit/campaigns/{worksheet}/imports/{import}/mapping'
*/
updateForm.patch = (args: { worksheet: string | number, import: string | number } | [worksheet: string | number, importParam: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const mapping = {
    update: Object.assign(update, update),
}

export default mapping