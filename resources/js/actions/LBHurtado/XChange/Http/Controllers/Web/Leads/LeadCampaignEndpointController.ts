import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
export const show = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/o/{merchant_slug}/{endpoint_slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
show.url = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{merchant_slug}', parsedArgs.merchant_slug.toString())
            .replace('{endpoint_slug}', parsedArgs.endpoint_slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
show.get = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
show.head = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
const showForm = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
showForm.get = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:27
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
showForm.head = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:65
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
export const start = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/x/o/{merchant_slug}/{endpoint_slug}',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:65
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:65
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
start.post = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:65
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
const startForm = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Leads\LeadCampaignEndpointController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Leads/LeadCampaignEndpointController.php:65
* @route '/x/o/{merchant_slug}/{endpoint_slug}'
*/
startForm.post = (args: { merchant_slug: string | number, endpoint_slug: string | number } | [merchant_slug: string | number, endpoint_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(args, options),
    method: 'post',
})

start.form = startForm

const LeadCampaignEndpointController = { show, start }

export default LeadCampaignEndpointController