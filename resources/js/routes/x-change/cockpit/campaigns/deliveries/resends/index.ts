import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetDeliveryResendController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetDeliveryResendController.php:19
* @route '/x/cockpit/campaigns/{worksheet}/deliveries/{attempt}/resends'
*/
export const store = (args: { worksheet: string | number, attempt: string | number } | [worksheet: string | number, attempt: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/{worksheet}/deliveries/{attempt}/resends',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetDeliveryResendController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetDeliveryResendController.php:19
* @route '/x/cockpit/campaigns/{worksheet}/deliveries/{attempt}/resends'
*/
store.url = (args: { worksheet: string | number, attempt: string | number } | [worksheet: string | number, attempt: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            worksheet: args[0],
            attempt: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        worksheet: args.worksheet,
        attempt: args.attempt,
    }

    return store.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace('{attempt}', parsedArgs.attempt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetDeliveryResendController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetDeliveryResendController.php:19
* @route '/x/cockpit/campaigns/{worksheet}/deliveries/{attempt}/resends'
*/
store.post = (args: { worksheet: string | number, attempt: string | number } | [worksheet: string | number, attempt: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetDeliveryResendController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetDeliveryResendController.php:19
* @route '/x/cockpit/campaigns/{worksheet}/deliveries/{attempt}/resends'
*/
const storeForm = (args: { worksheet: string | number, attempt: string | number } | [worksheet: string | number, attempt: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetDeliveryResendController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetDeliveryResendController.php:19
* @route '/x/cockpit/campaigns/{worksheet}/deliveries/{attempt}/resends'
*/
storeForm.post = (args: { worksheet: string | number, attempt: string | number } | [worksheet: string | number, attempt: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const resends = {
    store: Object.assign(store, store),
}

export default resends