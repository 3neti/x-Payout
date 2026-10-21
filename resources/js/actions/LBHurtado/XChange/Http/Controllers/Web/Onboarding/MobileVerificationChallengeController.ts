import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationChallengeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationChallengeController.php:19
* @route '/x/onboarding/mobile/challenge'
*/
const MobileVerificationChallengeController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: MobileVerificationChallengeController.url(options),
    method: 'post',
})

MobileVerificationChallengeController.definition = {
    methods: ["post"],
    url: '/x/onboarding/mobile/challenge',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationChallengeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationChallengeController.php:19
* @route '/x/onboarding/mobile/challenge'
*/
MobileVerificationChallengeController.url = (options?: RouteQueryOptions) => {
    return MobileVerificationChallengeController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationChallengeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationChallengeController.php:19
* @route '/x/onboarding/mobile/challenge'
*/
MobileVerificationChallengeController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: MobileVerificationChallengeController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationChallengeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationChallengeController.php:19
* @route '/x/onboarding/mobile/challenge'
*/
const MobileVerificationChallengeControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: MobileVerificationChallengeController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationChallengeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationChallengeController.php:19
* @route '/x/onboarding/mobile/challenge'
*/
MobileVerificationChallengeControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: MobileVerificationChallengeController.url(options),
    method: 'post',
})

MobileVerificationChallengeController.form = MobileVerificationChallengeControllerForm

export default MobileVerificationChallengeController