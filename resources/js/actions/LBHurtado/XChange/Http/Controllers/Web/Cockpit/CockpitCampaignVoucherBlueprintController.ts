import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignVoucherBlueprintController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignVoucherBlueprintController.php:21
* @route '/x/cockpit/campaigns/{worksheet}/voucher-blueprint'
*/
const CockpitCampaignVoucherBlueprintController = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: CockpitCampaignVoucherBlueprintController.url(args, options),
    method: 'put',
})

CockpitCampaignVoucherBlueprintController.definition = {
    methods: ["put"],
    url: '/x/cockpit/campaigns/{worksheet}/voucher-blueprint',
} satisfies RouteDefinition<["put"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignVoucherBlueprintController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignVoucherBlueprintController.php:21
* @route '/x/cockpit/campaigns/{worksheet}/voucher-blueprint'
*/
CockpitCampaignVoucherBlueprintController.url = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CockpitCampaignVoucherBlueprintController.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignVoucherBlueprintController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignVoucherBlueprintController.php:21
* @route '/x/cockpit/campaigns/{worksheet}/voucher-blueprint'
*/
CockpitCampaignVoucherBlueprintController.put = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: CockpitCampaignVoucherBlueprintController.url(args, options),
    method: 'put',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignVoucherBlueprintController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignVoucherBlueprintController.php:21
* @route '/x/cockpit/campaigns/{worksheet}/voucher-blueprint'
*/
const CockpitCampaignVoucherBlueprintControllerForm = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitCampaignVoucherBlueprintController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignVoucherBlueprintController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignVoucherBlueprintController.php:21
* @route '/x/cockpit/campaigns/{worksheet}/voucher-blueprint'
*/
CockpitCampaignVoucherBlueprintControllerForm.put = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitCampaignVoucherBlueprintController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

CockpitCampaignVoucherBlueprintController.form = CockpitCampaignVoucherBlueprintControllerForm

export default CockpitCampaignVoucherBlueprintController