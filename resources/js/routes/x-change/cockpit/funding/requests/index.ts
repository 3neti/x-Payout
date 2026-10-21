import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
import transferChecks from './transfer-checks'
import evidence from './evidence'
import reviews from './reviews'
import approvals from './approvals'
import payCodeClaims from './pay-code-claims'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestController.php:23
* @route '/x/cockpit/funding/requests'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/funding/requests',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestController.php:23
* @route '/x/cockpit/funding/requests'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestController.php:23
* @route '/x/cockpit/funding/requests'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestController.php:23
* @route '/x/cockpit/funding/requests'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingRequestController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingRequestController.php:23
* @route '/x/cockpit/funding/requests'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const requests = {
    store: Object.assign(store, store),
    transferChecks: Object.assign(transferChecks, transferChecks),
    evidence: Object.assign(evidence, evidence),
    reviews: Object.assign(reviews, reviews),
    approvals: Object.assign(approvals, approvals),
    payCodeClaims: Object.assign(payCodeClaims, payCodeClaims),
}

export default requests