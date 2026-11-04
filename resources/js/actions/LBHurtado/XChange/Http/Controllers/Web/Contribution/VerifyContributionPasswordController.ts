import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\VerifyContributionPasswordController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/VerifyContributionPasswordController.php:15
* @route '/x/contributions/password'
*/
const VerifyContributionPasswordController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: VerifyContributionPasswordController.url(options),
    method: 'post',
})

VerifyContributionPasswordController.definition = {
    methods: ["post"],
    url: '/x/contributions/password',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\VerifyContributionPasswordController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/VerifyContributionPasswordController.php:15
* @route '/x/contributions/password'
*/
VerifyContributionPasswordController.url = (options?: RouteQueryOptions) => {
    return VerifyContributionPasswordController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\VerifyContributionPasswordController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/VerifyContributionPasswordController.php:15
* @route '/x/contributions/password'
*/
VerifyContributionPasswordController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: VerifyContributionPasswordController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\VerifyContributionPasswordController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/VerifyContributionPasswordController.php:15
* @route '/x/contributions/password'
*/
const VerifyContributionPasswordControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: VerifyContributionPasswordController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\VerifyContributionPasswordController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/VerifyContributionPasswordController.php:15
* @route '/x/contributions/password'
*/
VerifyContributionPasswordControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: VerifyContributionPasswordController.url(options),
    method: 'post',
})

VerifyContributionPasswordController.form = VerifyContributionPasswordControllerForm

export default VerifyContributionPasswordController