import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import commissioning from './commissioning'
import publicIssuance from './public-issuance'
import claim from './claim'
import pricing from './pricing'
import analytics from './analytics'
import provisioning from './provisioning'
import operations from './operations'
import checkout from './checkout'
import publicAutoRegister from './public-auto-register'
import stamps from './stamps'
import publicAutoGenerate from './public-auto-generate'
import legal from './legal'
import onboarding from './onboarding'
import cockpit from './cockpit'
import payCodes from './pay-codes'
import balances from './balances'
import providerWallets from './provider-wallets'
import demoPolicy from './demo-policy'
import pay from './pay'
import leads from './leads'
import api from './api'
import partnerApi from './partner-api'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
export const operationalReadiness = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operationalReadiness.url(options),
    method: 'get',
})

operationalReadiness.definition = {
    methods: ["get","head"],
    url: '/x/ready',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
operationalReadiness.url = (options?: RouteQueryOptions) => {
    return operationalReadiness.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
operationalReadiness.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operationalReadiness.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
operationalReadiness.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: operationalReadiness.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
const operationalReadinessForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: operationalReadiness.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
operationalReadinessForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: operationalReadiness.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
operationalReadinessForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: operationalReadiness.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

operationalReadiness.form = operationalReadinessForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/x/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DashboardPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DashboardPageController.php:12
* @route '/x/dashboard'
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

const xChange = {
    commissioning: Object.assign(commissioning, commissioning),
    operationalReadiness: Object.assign(operationalReadiness, operationalReadiness),
    publicIssuance: Object.assign(publicIssuance, publicIssuance),
    claim: Object.assign(claim, claim),
    pricing: Object.assign(pricing, pricing),
    analytics: Object.assign(analytics, analytics),
    provisioning: Object.assign(provisioning, provisioning),
    operations: Object.assign(operations, operations),
    checkout: Object.assign(checkout, checkout),
    publicAutoRegister: Object.assign(publicAutoRegister, publicAutoRegister),
    stamps: Object.assign(stamps, stamps),
    publicAutoGenerate: Object.assign(publicAutoGenerate, publicAutoGenerate),
    legal: Object.assign(legal, legal),
    onboarding: Object.assign(onboarding, onboarding),
    dashboard: Object.assign(dashboard, dashboard),
    cockpit: Object.assign(cockpit, cockpit),
    payCodes: Object.assign(payCodes, payCodes),
    balances: Object.assign(balances, balances),
    providerWallets: Object.assign(providerWallets, providerWallets),
    demoPolicy: Object.assign(demoPolicy, demoPolicy),
    pay: Object.assign(pay, pay),
    leads: Object.assign(leads, leads),
    api: Object.assign(api, api),
    partnerApi: Object.assign(partnerApi, partnerApi),
}

export default xChange