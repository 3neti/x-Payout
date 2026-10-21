import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetExportController.php:20
* @route '/x/cockpit/campaigns/{worksheet}/exports/pay-codes.csv'
*/
const CockpitCampaignWorksheetExportController = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitCampaignWorksheetExportController.url(args, options),
    method: 'get',
})

CockpitCampaignWorksheetExportController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/campaigns/{worksheet}/exports/pay-codes.csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetExportController.php:20
* @route '/x/cockpit/campaigns/{worksheet}/exports/pay-codes.csv'
*/
CockpitCampaignWorksheetExportController.url = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CockpitCampaignWorksheetExportController.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetExportController.php:20
* @route '/x/cockpit/campaigns/{worksheet}/exports/pay-codes.csv'
*/
CockpitCampaignWorksheetExportController.get = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitCampaignWorksheetExportController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetExportController.php:20
* @route '/x/cockpit/campaigns/{worksheet}/exports/pay-codes.csv'
*/
CockpitCampaignWorksheetExportController.head = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitCampaignWorksheetExportController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetExportController.php:20
* @route '/x/cockpit/campaigns/{worksheet}/exports/pay-codes.csv'
*/
const CockpitCampaignWorksheetExportControllerForm = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitCampaignWorksheetExportController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetExportController.php:20
* @route '/x/cockpit/campaigns/{worksheet}/exports/pay-codes.csv'
*/
CockpitCampaignWorksheetExportControllerForm.get = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitCampaignWorksheetExportController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetExportController.php:20
* @route '/x/cockpit/campaigns/{worksheet}/exports/pay-codes.csv'
*/
CockpitCampaignWorksheetExportControllerForm.head = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitCampaignWorksheetExportController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitCampaignWorksheetExportController.form = CockpitCampaignWorksheetExportControllerForm

export default CockpitCampaignWorksheetExportController