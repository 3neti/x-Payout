import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:198
* @route '/x/cockpit/campaigns/endpoints/{campaign}/template'
*/
export const update = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/x/cockpit/campaigns/endpoints/{campaign}/template',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:198
* @route '/x/cockpit/campaigns/endpoints/{campaign}/template'
*/
update.url = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { campaign: args }
    }

    if (Array.isArray(args)) {
        args = {
            campaign: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        campaign: args.campaign,
    }

    return update.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:198
* @route '/x/cockpit/campaigns/endpoints/{campaign}/template'
*/
update.patch = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:198
* @route '/x/cockpit/campaigns/endpoints/{campaign}/template'
*/
const updateForm = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:198
* @route '/x/cockpit/campaigns/endpoints/{campaign}/template'
*/
updateForm.patch = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const template = {
    update: Object.assign(update, update),
}

export default template