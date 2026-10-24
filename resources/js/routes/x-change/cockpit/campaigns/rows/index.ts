import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:178
* @route '/x/cockpit/campaigns/{worksheet}/rows'
*/
export const store = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/{worksheet}/rows',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:178
* @route '/x/cockpit/campaigns/{worksheet}/rows'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:178
* @route '/x/cockpit/campaigns/{worksheet}/rows'
*/
store.post = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:178
* @route '/x/cockpit/campaigns/{worksheet}/rows'
*/
const storeForm = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:178
* @route '/x/cockpit/campaigns/{worksheet}/rows'
*/
storeForm.post = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const rows = {
    store: Object.assign(store, store),
}

export default rows