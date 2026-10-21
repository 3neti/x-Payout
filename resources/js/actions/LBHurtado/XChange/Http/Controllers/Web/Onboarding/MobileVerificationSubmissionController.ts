import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationSubmissionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationSubmissionController.php:19
* @route '/x/onboarding/mobile/verify'
*/
const MobileVerificationSubmissionController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: MobileVerificationSubmissionController.url(options),
    method: 'post',
})

MobileVerificationSubmissionController.definition = {
    methods: ["post"],
    url: '/x/onboarding/mobile/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationSubmissionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationSubmissionController.php:19
* @route '/x/onboarding/mobile/verify'
*/
MobileVerificationSubmissionController.url = (options?: RouteQueryOptions) => {
    return MobileVerificationSubmissionController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationSubmissionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationSubmissionController.php:19
* @route '/x/onboarding/mobile/verify'
*/
MobileVerificationSubmissionController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: MobileVerificationSubmissionController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationSubmissionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationSubmissionController.php:19
* @route '/x/onboarding/mobile/verify'
*/
const MobileVerificationSubmissionControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: MobileVerificationSubmissionController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationSubmissionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationSubmissionController.php:19
* @route '/x/onboarding/mobile/verify'
*/
MobileVerificationSubmissionControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: MobileVerificationSubmissionController.url(options),
    method: 'post',
})

MobileVerificationSubmissionController.form = MobileVerificationSubmissionControllerForm

export default MobileVerificationSubmissionController