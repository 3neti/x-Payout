import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignApprovalDeliveryController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignApprovalDeliveryController.php:19
* @route '/x/cockpit/campaigns/{worksheet}/authorizations/{authorization}/deliveries/{channel}'
*/
export const store = (args: { worksheet: string | number, authorization: string | number, channel: string | number } | [worksheet: string | number, authorization: string | number, channel: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/{worksheet}/authorizations/{authorization}/deliveries/{channel}',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignApprovalDeliveryController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignApprovalDeliveryController.php:19
* @route '/x/cockpit/campaigns/{worksheet}/authorizations/{authorization}/deliveries/{channel}'
*/
store.url = (args: { worksheet: string | number, authorization: string | number, channel: string | number } | [worksheet: string | number, authorization: string | number, channel: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            worksheet: args[0],
            authorization: args[1],
            channel: args[2],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        worksheet: args.worksheet,
        authorization: args.authorization,
        channel: args.channel,
    }

    return store.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace('{authorization}', parsedArgs.authorization.toString())
            .replace('{channel}', parsedArgs.channel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignApprovalDeliveryController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignApprovalDeliveryController.php:19
* @route '/x/cockpit/campaigns/{worksheet}/authorizations/{authorization}/deliveries/{channel}'
*/
store.post = (args: { worksheet: string | number, authorization: string | number, channel: string | number } | [worksheet: string | number, authorization: string | number, channel: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignApprovalDeliveryController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignApprovalDeliveryController.php:19
* @route '/x/cockpit/campaigns/{worksheet}/authorizations/{authorization}/deliveries/{channel}'
*/
const storeForm = (args: { worksheet: string | number, authorization: string | number, channel: string | number } | [worksheet: string | number, authorization: string | number, channel: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignApprovalDeliveryController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignApprovalDeliveryController.php:19
* @route '/x/cockpit/campaigns/{worksheet}/authorizations/{authorization}/deliveries/{channel}'
*/
storeForm.post = (args: { worksheet: string | number, authorization: string | number, channel: string | number } | [worksheet: string | number, authorization: string | number, channel: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const CockpitCampaignApprovalDeliveryController = { store }

export default CockpitCampaignApprovalDeliveryController