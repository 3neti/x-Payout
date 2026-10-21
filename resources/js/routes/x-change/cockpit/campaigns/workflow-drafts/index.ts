import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorkflowDraftController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorkflowDraftController.php:23
* @route '/x/cockpit/campaigns/workflow-drafts'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/workflow-drafts',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorkflowDraftController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorkflowDraftController.php:23
* @route '/x/cockpit/campaigns/workflow-drafts'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorkflowDraftController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorkflowDraftController.php:23
* @route '/x/cockpit/campaigns/workflow-drafts'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorkflowDraftController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorkflowDraftController.php:23
* @route '/x/cockpit/campaigns/workflow-drafts'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorkflowDraftController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorkflowDraftController.php:23
* @route '/x/cockpit/campaigns/workflow-drafts'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorkflowDraftController::publish
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorkflowDraftController.php:16
* @route '/x/cockpit/campaigns/workflow-drafts/{draft}/publish'
*/
export const publish = (args: { draft: string | number } | [draft: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: publish.url(args, options),
    method: 'post',
})

publish.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns/workflow-drafts/{draft}/publish',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorkflowDraftController::publish
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorkflowDraftController.php:16
* @route '/x/cockpit/campaigns/workflow-drafts/{draft}/publish'
*/
publish.url = (args: { draft: string | number } | [draft: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { draft: args }
    }

    if (Array.isArray(args)) {
        args = {
            draft: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        draft: args.draft,
    }

    return publish.definition.url
            .replace('{draft}', parsedArgs.draft.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorkflowDraftController::publish
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorkflowDraftController.php:16
* @route '/x/cockpit/campaigns/workflow-drafts/{draft}/publish'
*/
publish.post = (args: { draft: string | number } | [draft: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: publish.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorkflowDraftController::publish
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorkflowDraftController.php:16
* @route '/x/cockpit/campaigns/workflow-drafts/{draft}/publish'
*/
const publishForm = (args: { draft: string | number } | [draft: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: publish.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorkflowDraftController::publish
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorkflowDraftController.php:16
* @route '/x/cockpit/campaigns/workflow-drafts/{draft}/publish'
*/
publishForm.post = (args: { draft: string | number } | [draft: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: publish.url(args, options),
    method: 'post',
})

publish.form = publishForm

const workflowDrafts = {
    store: Object.assign(store, store),
    publish: Object.assign(publish, publish),
}

export default workflowDrafts