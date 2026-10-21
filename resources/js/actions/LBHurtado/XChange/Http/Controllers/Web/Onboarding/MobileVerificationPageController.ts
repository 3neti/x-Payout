import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
const MobileVerificationPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MobileVerificationPageController.url(options),
    method: 'get',
})

MobileVerificationPageController.definition = {
    methods: ["get","head"],
    url: '/x/onboarding/mobile/verify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
MobileVerificationPageController.url = (options?: RouteQueryOptions) => {
    return MobileVerificationPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
MobileVerificationPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MobileVerificationPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
MobileVerificationPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: MobileVerificationPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
const MobileVerificationPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MobileVerificationPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
MobileVerificationPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MobileVerificationPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
MobileVerificationPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MobileVerificationPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

MobileVerificationPageController.form = MobileVerificationPageControllerForm

export default MobileVerificationPageController