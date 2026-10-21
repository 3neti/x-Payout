import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\DeclineAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/DeclineAgreementController.php:14
* @route '/x/legal/eula/decline'
*/
const DeclineAgreementController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: DeclineAgreementController.url(options),
    method: 'post',
})

DeclineAgreementController.definition = {
    methods: ["post"],
    url: '/x/legal/eula/decline',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\DeclineAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/DeclineAgreementController.php:14
* @route '/x/legal/eula/decline'
*/
DeclineAgreementController.url = (options?: RouteQueryOptions) => {
    return DeclineAgreementController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\DeclineAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/DeclineAgreementController.php:14
* @route '/x/legal/eula/decline'
*/
DeclineAgreementController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: DeclineAgreementController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\DeclineAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/DeclineAgreementController.php:14
* @route '/x/legal/eula/decline'
*/
const DeclineAgreementControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: DeclineAgreementController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\DeclineAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/DeclineAgreementController.php:14
* @route '/x/legal/eula/decline'
*/
DeclineAgreementControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: DeclineAgreementController.url(options),
    method: 'post',
})

DeclineAgreementController.form = DeclineAgreementControllerForm

export default DeclineAgreementController