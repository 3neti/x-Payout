import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
import paymentQr from './payment-qr'
import paymentMonitoring from './payment-monitoring'
import template from './template'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:34
* @route '/x/cockpit/campaigns/endpoints'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/endpoints',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:34
* @route '/x/cockpit/campaigns/endpoints'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:34
* @route '/x/cockpit/campaigns/endpoints'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:34
* @route '/x/cockpit/campaigns/endpoints'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:34
* @route '/x/cockpit/campaigns/endpoints'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::pause
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:75
* @route '/x/cockpit/campaigns/endpoints/{campaign}/pause'
*/
export const pause = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: pause.url(args, options),
    method: 'patch',
})

pause.definition = {
    methods: ["patch"],
    url: '/x/cockpit/campaigns/endpoints/{campaign}/pause',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::pause
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:75
* @route '/x/cockpit/campaigns/endpoints/{campaign}/pause'
*/
pause.url = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return pause.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::pause
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:75
* @route '/x/cockpit/campaigns/endpoints/{campaign}/pause'
*/
pause.patch = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: pause.url(args, options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::pause
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:75
* @route '/x/cockpit/campaigns/endpoints/{campaign}/pause'
*/
const pauseForm = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: pause.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::pause
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:75
* @route '/x/cockpit/campaigns/endpoints/{campaign}/pause'
*/
pauseForm.patch = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: pause.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

pause.form = pauseForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::resume
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:189
* @route '/x/cockpit/campaigns/endpoints/{campaign}/resume'
*/
export const resume = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: resume.url(args, options),
    method: 'patch',
})

resume.definition = {
    methods: ["patch"],
    url: '/x/cockpit/campaigns/endpoints/{campaign}/resume',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::resume
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:189
* @route '/x/cockpit/campaigns/endpoints/{campaign}/resume'
*/
resume.url = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return resume.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::resume
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:189
* @route '/x/cockpit/campaigns/endpoints/{campaign}/resume'
*/
resume.patch = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: resume.url(args, options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::resume
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:189
* @route '/x/cockpit/campaigns/endpoints/{campaign}/resume'
*/
const resumeForm = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resume.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::resume
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:189
* @route '/x/cockpit/campaigns/endpoints/{campaign}/resume'
*/
resumeForm.patch = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resume.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

resume.form = resumeForm

const endpoints = {
    store: Object.assign(store, store),
    paymentQr: Object.assign(paymentQr, paymentQr),
    paymentMonitoring: Object.assign(paymentMonitoring, paymentMonitoring),
    template: Object.assign(template, template),
    pause: Object.assign(pause, pause),
    resume: Object.assign(resume, resume),
}

export default endpoints