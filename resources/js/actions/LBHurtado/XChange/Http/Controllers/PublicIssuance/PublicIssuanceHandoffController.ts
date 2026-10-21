import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceHandoffController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceHandoffController.php:14
* @route '/api/x/v1/public-issuance/handoff'
*/
const PublicIssuanceHandoffController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: PublicIssuanceHandoffController.url(options),
    method: 'post',
})

PublicIssuanceHandoffController.definition = {
    methods: ["post"],
    url: '/api/x/v1/public-issuance/handoff',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceHandoffController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceHandoffController.php:14
* @route '/api/x/v1/public-issuance/handoff'
*/
PublicIssuanceHandoffController.url = (options?: RouteQueryOptions) => {
    return PublicIssuanceHandoffController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceHandoffController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceHandoffController.php:14
* @route '/api/x/v1/public-issuance/handoff'
*/
PublicIssuanceHandoffController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: PublicIssuanceHandoffController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceHandoffController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceHandoffController.php:14
* @route '/api/x/v1/public-issuance/handoff'
*/
const PublicIssuanceHandoffControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: PublicIssuanceHandoffController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceHandoffController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceHandoffController.php:14
* @route '/api/x/v1/public-issuance/handoff'
*/
PublicIssuanceHandoffControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: PublicIssuanceHandoffController.url(options),
    method: 'post',
})

PublicIssuanceHandoffController.form = PublicIssuanceHandoffControllerForm

export default PublicIssuanceHandoffController