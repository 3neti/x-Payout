import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AcceptAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AcceptAgreementController.php:18
* @route '/x/legal/eula/accept'
*/
const AcceptAgreementController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AcceptAgreementController.url(options),
    method: 'post',
})

AcceptAgreementController.definition = {
    methods: ["post"],
    url: '/x/legal/eula/accept',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AcceptAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AcceptAgreementController.php:18
* @route '/x/legal/eula/accept'
*/
AcceptAgreementController.url = (options?: RouteQueryOptions) => {
    return AcceptAgreementController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AcceptAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AcceptAgreementController.php:18
* @route '/x/legal/eula/accept'
*/
AcceptAgreementController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AcceptAgreementController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AcceptAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AcceptAgreementController.php:18
* @route '/x/legal/eula/accept'
*/
const AcceptAgreementControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: AcceptAgreementController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AcceptAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AcceptAgreementController.php:18
* @route '/x/legal/eula/accept'
*/
AcceptAgreementControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: AcceptAgreementController.url(options),
    method: 'post',
})

AcceptAgreementController.form = AcceptAgreementControllerForm

export default AcceptAgreementController