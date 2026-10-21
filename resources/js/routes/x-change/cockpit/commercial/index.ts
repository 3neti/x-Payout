import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import offerings from './offerings'
import partners from './partners'
import partner_revisions from './partner_revisions'
import partner_destination_revisions from './partner_destination_revisions'
import provider_cost_batches from './provider_cost_batches'
import commission_payout_batches from './commission_payout_batches'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/commercial',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitCommercialOfferingPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitCommercialOfferingPageController.php:20
* @route '/x/cockpit/commercial'
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

const commercial = {
    index: Object.assign(index, index),
    offerings: Object.assign(offerings, offerings),
    partners: Object.assign(partners, partners),
    partner_revisions: Object.assign(partner_revisions, partner_revisions),
    partner_destination_revisions: Object.assign(partner_destination_revisions, partner_destination_revisions),
    provider_cost_batches: Object.assign(provider_cost_batches, provider_cost_batches),
    commission_payout_batches: Object.assign(commission_payout_batches, commission_payout_batches),
}

export default commercial