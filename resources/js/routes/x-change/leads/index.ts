import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import start864adb from './start'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
export const start = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start.url(args, options),
    method: 'get',
})

start.definition = {
    methods: ["get","head"],
    url: '/x/o/{merchant_slug}/{endpoint_slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
start.url = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions) => {
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

    return start.definition.url
            .replace('{merchant_slug}', parsedArgs.merchant_slug.toString())
            .replace('{endpoint_slug}', parsedArgs.endpoint_slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
start.get = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
start.head = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: start.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
const startForm = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
startForm.get = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
startForm.head = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

start.form = startForm

const leads = {
    start: Object.assign(start, start864adb),
}

export default leads