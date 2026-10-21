import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::submit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:65
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
export const submit = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/x/o/{merchant_slug}/{endpoint_slug}',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::submit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:65
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
submit.url = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            merchant_slug: args[0],
            endpoint_slug: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        merchant_slug: args.merchant_slug,
        endpoint_slug: args.endpoint_slug,
    }

    return submit.definition.url
            .replace('{merchant_slug}', parsedArgs.merchant_slug.toString())
            .replace('{endpoint_slug}', parsedArgs.endpoint_slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::submit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:65
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
submit.post = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::submit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:65
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
const submitForm = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::submit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:65
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
submitForm.post = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

submit.form = submitForm

const start = {
    submit: Object.assign(submit, submit),
}

export default start