import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
import policyLifecycle from './policy-lifecycle'
import commercialPayCodeScenarioRunner from './commercial-pay-code-scenario-runner'
import publicAutoGenerateScenarioRunner from './public-auto-generate-scenario-runner'
import endpoints from './endpoints'
import workflowDrafts from './workflow-drafts'
import leadScenarioRunner from './lead-scenario-runner'
import intakes from './intakes'
import rows from './rows'
import voucherBlueprint from './voucher-blueprint'
import authorizations from './authorizations'
import fulfillments from './fulfillments'
import exports from './exports'
import deliveries from './deliveries'
import imports from './imports'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:68
* @route '/x/cockpit/campaigns'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/campaigns',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:68
* @route '/x/cockpit/campaigns'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:68
* @route '/x/cockpit/campaigns'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:68
* @route '/x/cockpit/campaigns'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:68
* @route '/x/cockpit/campaigns'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:68
* @route '/x/cockpit/campaigns'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:68
* @route '/x/cockpit/campaigns'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:91
* @route '/x/cockpit/campaigns'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/campaigns',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:91
* @route '/x/cockpit/campaigns'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:91
* @route '/x/cockpit/campaigns'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:91
* @route '/x/cockpit/campaigns'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:91
* @route '/x/cockpit/campaigns'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:115
* @route '/x/cockpit/campaigns/{worksheet}'
*/
export const show = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/campaigns/{worksheet}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:115
* @route '/x/cockpit/campaigns/{worksheet}'
*/
show.url = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { worksheet: args }
    }

    if (Array.isArray(args)) {
        args = {
            worksheet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        worksheet: args.worksheet,
    }

    return show.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:115
* @route '/x/cockpit/campaigns/{worksheet}'
*/
show.get = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:115
* @route '/x/cockpit/campaigns/{worksheet}'
*/
show.head = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:115
* @route '/x/cockpit/campaigns/{worksheet}'
*/
const showForm = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:115
* @route '/x/cockpit/campaigns/{worksheet}'
*/
showForm.get = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:115
* @route '/x/cockpit/campaigns/{worksheet}'
*/
showForm.head = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:149
* @route '/x/cockpit/campaigns/{worksheet}'
*/
export const destroy = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/x/cockpit/campaigns/{worksheet}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:149
* @route '/x/cockpit/campaigns/{worksheet}'
*/
destroy.url = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { worksheet: args }
    }

    if (Array.isArray(args)) {
        args = {
            worksheet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        worksheet: args.worksheet,
    }

    return destroy.definition.url
            .replace('{worksheet}', parsedArgs.worksheet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:149
* @route '/x/cockpit/campaigns/{worksheet}'
*/
destroy.delete = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:149
* @route '/x/cockpit/campaigns/{worksheet}'
*/
const destroyForm = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCampaignWorksheetController::destroy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCampaignWorksheetController.php:149
* @route '/x/cockpit/campaigns/{worksheet}'
*/
destroyForm.delete = (args: { worksheet: string | number } | [worksheet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const campaigns = {
    index: Object.assign(index, index),
    policyLifecycle: Object.assign(policyLifecycle, policyLifecycle),
    commercialPayCodeScenarioRunner: Object.assign(commercialPayCodeScenarioRunner, commercialPayCodeScenarioRunner),
    publicAutoGenerateScenarioRunner: Object.assign(publicAutoGenerateScenarioRunner, publicAutoGenerateScenarioRunner),
    store: Object.assign(store, store),
    endpoints: Object.assign(endpoints, endpoints),
    workflowDrafts: Object.assign(workflowDrafts, workflowDrafts),
    leadScenarioRunner: Object.assign(leadScenarioRunner, leadScenarioRunner),
    intakes: Object.assign(intakes, intakes),
    show: Object.assign(show, show),
    destroy: Object.assign(destroy, destroy),
    rows: Object.assign(rows, rows),
    voucherBlueprint: Object.assign(voucherBlueprint, voucherBlueprint),
    authorizations: Object.assign(authorizations, authorizations),
    fulfillments: Object.assign(fulfillments, fulfillments),
    exports: Object.assign(exports, exports),
    deliveries: Object.assign(deliveries, deliveries),
    imports: Object.assign(imports, imports),
}

export default campaigns