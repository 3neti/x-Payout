import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import operationsEconomics4f7082 from './operations-economics'
import commercial from './commercial'
import apiPartners from './api-partners'
import provisioning from './provisioning'
import treasury from './treasury'
import campaigns from './campaigns'
import accounts from './accounts'
import funding from './funding'
import quickGenerate8c35c6 from './quick-generate'
import displaySessions from './display-sessions'
import instanceKeepsakes from './instance-keepsakes'
import payCodeTemplates from './pay-code-templates'
import riderLibrary from './rider-library'
import diagnostics from './diagnostics'
import payCodes from './pay-codes'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:20
* @route '/x/cockpit'
*/
export const entry = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: entry.url(options),
    method: 'get',
})

entry.definition = {
    methods: ["get","head"],
    url: '/x/cockpit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:20
* @route '/x/cockpit'
*/
entry.url = (options?: RouteQueryOptions) => {
    return entry.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:20
* @route '/x/cockpit'
*/
entry.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: entry.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:20
* @route '/x/cockpit'
*/
entry.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: entry.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:20
* @route '/x/cockpit'
*/
const entryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: entry.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:20
* @route '/x/cockpit'
*/
entryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: entry.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEntryPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEntryPageController.php:20
* @route '/x/cockpit'
*/
entryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: entry.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

entry.form = entryForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/overview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDashboardPageController.php:18
* @route '/x/cockpit/overview'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::operationsEconomics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
export const operationsEconomics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operationsEconomics.url(options),
    method: 'get',
})

operationsEconomics.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/operations-economics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::operationsEconomics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
operationsEconomics.url = (options?: RouteQueryOptions) => {
    return operationsEconomics.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::operationsEconomics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
operationsEconomics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operationsEconomics.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::operationsEconomics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
operationsEconomics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: operationsEconomics.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::operationsEconomics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
const operationsEconomicsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: operationsEconomics.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::operationsEconomics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
operationsEconomicsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: operationsEconomics.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::operationsEconomics
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
operationsEconomicsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: operationsEconomics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

operationsEconomics.form = operationsEconomicsForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
export const documentation = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: documentation.url(options),
    method: 'get',
})

documentation.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/documentation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
documentation.url = (options?: RouteQueryOptions) => {
    return documentation.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
documentation.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: documentation.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
documentation.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: documentation.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
const documentationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: documentation.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
documentationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: documentation.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDocumentationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDocumentationPageController.php:18
* @route '/x/cockpit/documentation'
*/
documentationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: documentation.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

documentation.form = documentationForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
export const quickGenerate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: quickGenerate.url(options),
    method: 'get',
})

quickGenerate.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/quick-generate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
quickGenerate.url = (options?: RouteQueryOptions) => {
    return quickGenerate.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
quickGenerate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: quickGenerate.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
quickGenerate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: quickGenerate.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
const quickGenerateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: quickGenerate.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
quickGenerateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: quickGenerate.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGeneratePageController.php:43
* @route '/x/cockpit/quick-generate'
*/
quickGenerateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: quickGenerate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

quickGenerate.form = quickGenerateForm

const cockpit = {
    entry: Object.assign(entry, entry),
    dashboard: Object.assign(dashboard, dashboard),
    operationsEconomics: Object.assign(operationsEconomics, operationsEconomics4f7082),
    documentation: Object.assign(documentation, documentation),
    commercial: Object.assign(commercial, commercial),
    apiPartners: Object.assign(apiPartners, apiPartners),
    provisioning: Object.assign(provisioning, provisioning),
    treasury: Object.assign(treasury, treasury),
    campaigns: Object.assign(campaigns, campaigns),
    accounts: Object.assign(accounts, accounts),
    funding: Object.assign(funding, funding),
    quickGenerate: Object.assign(quickGenerate, quickGenerate8c35c6),
    displaySessions: Object.assign(displaySessions, displaySessions),
    instanceKeepsakes: Object.assign(instanceKeepsakes, instanceKeepsakes),
    payCodeTemplates: Object.assign(payCodeTemplates, payCodeTemplates),
    riderLibrary: Object.assign(riderLibrary, riderLibrary),
    diagnostics: Object.assign(diagnostics, diagnostics),
    payCodes: Object.assign(payCodes, payCodes),
}

export default cockpit