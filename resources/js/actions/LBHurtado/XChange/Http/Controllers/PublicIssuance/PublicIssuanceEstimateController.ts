import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceEstimateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceEstimateController.php:14
* @route '/api/x/v1/public-issuance/estimate'
*/
const PublicIssuanceEstimateController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: PublicIssuanceEstimateController.url(options),
    method: 'post',
})

PublicIssuanceEstimateController.definition = {
    methods: ["post"],
    url: '/api/x/v1/public-issuance/estimate',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceEstimateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceEstimateController.php:14
* @route '/api/x/v1/public-issuance/estimate'
*/
PublicIssuanceEstimateController.url = (options?: RouteQueryOptions) => {
    return PublicIssuanceEstimateController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceEstimateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceEstimateController.php:14
* @route '/api/x/v1/public-issuance/estimate'
*/
PublicIssuanceEstimateController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: PublicIssuanceEstimateController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceEstimateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceEstimateController.php:14
* @route '/api/x/v1/public-issuance/estimate'
*/
const PublicIssuanceEstimateControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: PublicIssuanceEstimateController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\PublicIssuance\PublicIssuanceEstimateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/PublicIssuance/PublicIssuanceEstimateController.php:14
* @route '/api/x/v1/public-issuance/estimate'
*/
PublicIssuanceEstimateControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: PublicIssuanceEstimateController.url(options),
    method: 'post',
})

PublicIssuanceEstimateController.form = PublicIssuanceEstimateControllerForm

export default PublicIssuanceEstimateController