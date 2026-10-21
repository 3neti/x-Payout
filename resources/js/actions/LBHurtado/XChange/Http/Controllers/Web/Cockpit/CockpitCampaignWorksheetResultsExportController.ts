import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetResultsExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetResultsExportController.php:14
* @route '/x/cockpit/campaigns/{worksheet}/exports/results.csv'
*/
const CockpitCampaignWorksheetResultsExportController = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitCampaignWorksheetResultsExportController.url(args, options),
    method: 'get',
})

CockpitCampaignWorksheetResultsExportController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/campaigns/{worksheet}/exports/results.csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetResultsExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetResultsExportController.php:14
* @route '/x/cockpit/campaigns/{worksheet}/exports/results.csv'
*/
CockpitCampaignWorksheetResultsExportController.url = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CockpitCampaignWorksheetResultsExportController.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetResultsExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetResultsExportController.php:14
* @route '/x/cockpit/campaigns/{worksheet}/exports/results.csv'
*/
CockpitCampaignWorksheetResultsExportController.get = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitCampaignWorksheetResultsExportController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetResultsExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetResultsExportController.php:14
* @route '/x/cockpit/campaigns/{worksheet}/exports/results.csv'
*/
CockpitCampaignWorksheetResultsExportController.head = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitCampaignWorksheetResultsExportController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetResultsExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetResultsExportController.php:14
* @route '/x/cockpit/campaigns/{worksheet}/exports/results.csv'
*/
const CockpitCampaignWorksheetResultsExportControllerForm = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitCampaignWorksheetResultsExportController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetResultsExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetResultsExportController.php:14
* @route '/x/cockpit/campaigns/{worksheet}/exports/results.csv'
*/
CockpitCampaignWorksheetResultsExportControllerForm.get = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitCampaignWorksheetResultsExportController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetResultsExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetResultsExportController.php:14
* @route '/x/cockpit/campaigns/{worksheet}/exports/results.csv'
*/
CockpitCampaignWorksheetResultsExportControllerForm.head = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitCampaignWorksheetResultsExportController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitCampaignWorksheetResultsExportController.form = CockpitCampaignWorksheetResultsExportControllerForm

export default CockpitCampaignWorksheetResultsExportController