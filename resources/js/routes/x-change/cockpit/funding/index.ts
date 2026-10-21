import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import liquidityRefreshes from './liquidity-refreshes'
import requests from './requests'
import payCodeInspections from './pay-code-inspections'
import payCodeClaims from './pay-code-claims'
import intents from './intents'
import standingAddresses from './standing-addresses'
import scenarios from './scenarios'
import suspense from './suspense'
import reconciliations from './reconciliations'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/funding',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingPageController.php:46
* @route '/x/cockpit/funding'
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

const funding = {
    index: Object.assign(index, index),
    liquidityRefreshes: Object.assign(liquidityRefreshes, liquidityRefreshes),
    requests: Object.assign(requests, requests),
    payCodeInspections: Object.assign(payCodeInspections, payCodeInspections),
    payCodeClaims: Object.assign(payCodeClaims, payCodeClaims),
    intents: Object.assign(intents, intents),
    standingAddresses: Object.assign(standingAddresses, standingAddresses),
    scenarios: Object.assign(scenarios, scenarios),
    suspense: Object.assign(suspense, suspense),
    reconciliations: Object.assign(reconciliations, reconciliations),
}

export default funding