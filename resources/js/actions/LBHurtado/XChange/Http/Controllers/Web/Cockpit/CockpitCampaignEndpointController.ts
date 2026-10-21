import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::provisionPaymentQr
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:158
* @route '/x/cockpit/campaigns/endpoints/{campaign}/payment-qr'
*/
export const provisionPaymentQr = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: provisionPaymentQr.url(args, options),
    method: 'post',
})

provisionPaymentQr.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/endpoints/{campaign}/payment-qr',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::provisionPaymentQr
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:158
* @route '/x/cockpit/campaigns/endpoints/{campaign}/payment-qr'
*/
provisionPaymentQr.url = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return provisionPaymentQr.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::provisionPaymentQr
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:158
* @route '/x/cockpit/campaigns/endpoints/{campaign}/payment-qr'
*/
provisionPaymentQr.post = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: provisionPaymentQr.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::provisionPaymentQr
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:158
* @route '/x/cockpit/campaigns/endpoints/{campaign}/payment-qr'
*/
const provisionPaymentQrForm = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: provisionPaymentQr.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::provisionPaymentQr
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:158
* @route '/x/cockpit/campaigns/endpoints/{campaign}/payment-qr'
*/
provisionPaymentQrForm.post = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: provisionPaymentQr.url(args, options),
    method: 'post',
})

provisionPaymentQr.form = provisionPaymentQrForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::updatePaymentMonitoring
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:108
* @route '/x/cockpit/campaigns/endpoints/{campaign}/payment-monitoring'
*/
export const updatePaymentMonitoring = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatePaymentMonitoring.url(args, options),
    method: 'patch',
})

updatePaymentMonitoring.definition = {
    methods: ["patch"],
    url: '/x/cockpit/campaigns/endpoints/{campaign}/payment-monitoring',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::updatePaymentMonitoring
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:108
* @route '/x/cockpit/campaigns/endpoints/{campaign}/payment-monitoring'
*/
updatePaymentMonitoring.url = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updatePaymentMonitoring.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::updatePaymentMonitoring
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:108
* @route '/x/cockpit/campaigns/endpoints/{campaign}/payment-monitoring'
*/
updatePaymentMonitoring.patch = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatePaymentMonitoring.url(args, options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::updatePaymentMonitoring
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:108
* @route '/x/cockpit/campaigns/endpoints/{campaign}/payment-monitoring'
*/
const updatePaymentMonitoringForm = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatePaymentMonitoring.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::updatePaymentMonitoring
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:108
* @route '/x/cockpit/campaigns/endpoints/{campaign}/payment-monitoring'
*/
updatePaymentMonitoringForm.patch = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatePaymentMonitoring.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatePaymentMonitoring.form = updatePaymentMonitoringForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::updateTemplate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:198
* @route '/x/cockpit/campaigns/endpoints/{campaign}/template'
*/
export const updateTemplate = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateTemplate.url(args, options),
    method: 'patch',
})

updateTemplate.definition = {
    methods: ["patch"],
    url: '/x/cockpit/campaigns/endpoints/{campaign}/template',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::updateTemplate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:198
* @route '/x/cockpit/campaigns/endpoints/{campaign}/template'
*/
updateTemplate.url = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updateTemplate.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::updateTemplate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:198
* @route '/x/cockpit/campaigns/endpoints/{campaign}/template'
*/
updateTemplate.patch = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateTemplate.url(args, options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::updateTemplate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:198
* @route '/x/cockpit/campaigns/endpoints/{campaign}/template'
*/
const updateTemplateForm = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateTemplate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignEndpointController::updateTemplate
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignEndpointController.php:198
* @route '/x/cockpit/campaigns/endpoints/{campaign}/template'
*/
updateTemplateForm.patch = (args: { campaign: string | number } | [campaign: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateTemplate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateTemplate.form = updateTemplateForm

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

const CockpitCampaignEndpointController = { store, provisionPaymentQr, updatePaymentMonitoring, updateTemplate, pause, resume }

export default CockpitCampaignEndpointController