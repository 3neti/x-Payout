import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/onboarding/mobile/verify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationPageController.php:22
* @route '/x/onboarding/mobile/verify'
*/
showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationChallengeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationChallengeController.php:19
* @route '/x/onboarding/mobile/challenge'
*/
export const challenge = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: challenge.url(options),
    method: 'post',
})

challenge.definition = {
    methods: ["post"],
    url: '/x/onboarding/mobile/challenge',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationChallengeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationChallengeController.php:19
* @route '/x/onboarding/mobile/challenge'
*/
challenge.url = (options?: RouteQueryOptions) => {
    return challenge.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationChallengeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationChallengeController.php:19
* @route '/x/onboarding/mobile/challenge'
*/
challenge.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: challenge.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationChallengeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationChallengeController.php:19
* @route '/x/onboarding/mobile/challenge'
*/
const challengeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: challenge.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationChallengeController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationChallengeController.php:19
* @route '/x/onboarding/mobile/challenge'
*/
challengeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: challenge.url(options),
    method: 'post',
})

challenge.form = challengeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationSubmissionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationSubmissionController.php:19
* @route '/x/onboarding/mobile/verify'
*/
export const verify = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/x/onboarding/mobile/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationSubmissionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationSubmissionController.php:19
* @route '/x/onboarding/mobile/verify'
*/
verify.url = (options?: RouteQueryOptions) => {
    return verify.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationSubmissionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationSubmissionController.php:19
* @route '/x/onboarding/mobile/verify'
*/
verify.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationSubmissionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationSubmissionController.php:19
* @route '/x/onboarding/mobile/verify'
*/
const verifyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Onboarding\MobileVerificationSubmissionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Onboarding/MobileVerificationSubmissionController.php:19
* @route '/x/onboarding/mobile/verify'
*/
verifyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(options),
    method: 'post',
})

verify.form = verifyForm

const mobileVerification = {
    show: Object.assign(show, show),
    challenge: Object.assign(challenge, challenge),
    verify: Object.assign(verify, verify),
}

export default mobileVerification