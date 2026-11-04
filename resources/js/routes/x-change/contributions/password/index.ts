import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\VerifyContributionPasswordController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/VerifyContributionPasswordController.php:15
* @route '/x/contributions/password'
*/
export const verify = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/x/contributions/password',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\VerifyContributionPasswordController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/VerifyContributionPasswordController.php:15
* @route '/x/contributions/password'
*/
verify.url = (options?: RouteQueryOptions) => {
    return verify.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\VerifyContributionPasswordController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/VerifyContributionPasswordController.php:15
* @route '/x/contributions/password'
*/
verify.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\VerifyContributionPasswordController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/VerifyContributionPasswordController.php:15
* @route '/x/contributions/password'
*/
const verifyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\VerifyContributionPasswordController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/VerifyContributionPasswordController.php:15
* @route '/x/contributions/password'
*/
verifyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(options),
    method: 'post',
})

verify.form = verifyForm

const password = {
    verify: Object.assign(verify, verify),
}

export default password