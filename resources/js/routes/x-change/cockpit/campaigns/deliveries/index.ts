import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
import retries from './retries'
import resends from './resends'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetDeliveryController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetDeliveryController.php:18
* @route '/x/cockpit/campaigns/{worksheet}/deliveries/{channel}'
*/
export const store = (args: { worksheet: string | number, channel: string | number } | [worksheet: string | number, channel: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/{worksheet}/deliveries/{channel}',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetDeliveryController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetDeliveryController.php:18
* @route '/x/cockpit/campaigns/{worksheet}/deliveries/{channel}'
*/
store.url = (args: { worksheet: string | number, channel: string | number } | [worksheet: string | number, channel: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            worksheet: args[0],
            channel: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        worksheet: args.worksheet,
        channel: args.channel,
    }

    return store.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace('{channel}', parsedArgs.channel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetDeliveryController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetDeliveryController.php:18
* @route '/x/cockpit/campaigns/{worksheet}/deliveries/{channel}'
*/
store.post = (args: { worksheet: string | number, channel: string | number } | [worksheet: string | number, channel: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetDeliveryController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetDeliveryController.php:18
* @route '/x/cockpit/campaigns/{worksheet}/deliveries/{channel}'
*/
const storeForm = (args: { worksheet: string | number, channel: string | number } | [worksheet: string | number, channel: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetDeliveryController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetDeliveryController.php:18
* @route '/x/cockpit/campaigns/{worksheet}/deliveries/{channel}'
*/
storeForm.post = (args: { worksheet: string | number, channel: string | number } | [worksheet: string | number, channel: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const deliveries = {
    store: Object.assign(store, store),
    retries: Object.assign(retries, retries),
    resends: Object.assign(resends, resends),
}

export default deliveries