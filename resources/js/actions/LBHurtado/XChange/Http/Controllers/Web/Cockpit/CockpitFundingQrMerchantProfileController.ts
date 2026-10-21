import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingQrMerchantProfileController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingQrMerchantProfileController.php:14
* @route '/x/cockpit/accounts/funding-qr-merchant-profile'
*/
const CockpitFundingQrMerchantProfileController = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: CockpitFundingQrMerchantProfileController.url(options),
    method: 'patch',
})

CockpitFundingQrMerchantProfileController.definition = {
    methods: ["patch"],
    url: '/x/cockpit/accounts/funding-qr-merchant-profile',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingQrMerchantProfileController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingQrMerchantProfileController.php:14
* @route '/x/cockpit/accounts/funding-qr-merchant-profile'
*/
CockpitFundingQrMerchantProfileController.url = (options?: RouteQueryOptions) => {
    return CockpitFundingQrMerchantProfileController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingQrMerchantProfileController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingQrMerchantProfileController.php:14
* @route '/x/cockpit/accounts/funding-qr-merchant-profile'
*/
CockpitFundingQrMerchantProfileController.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: CockpitFundingQrMerchantProfileController.url(options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingQrMerchantProfileController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingQrMerchantProfileController.php:14
* @route '/x/cockpit/accounts/funding-qr-merchant-profile'
*/
const CockpitFundingQrMerchantProfileControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingQrMerchantProfileController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingQrMerchantProfileController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingQrMerchantProfileController.php:14
* @route '/x/cockpit/accounts/funding-qr-merchant-profile'
*/
CockpitFundingQrMerchantProfileControllerForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingQrMerchantProfileController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

CockpitFundingQrMerchantProfileController.form = CockpitFundingQrMerchantProfileControllerForm

export default CockpitFundingQrMerchantProfileController