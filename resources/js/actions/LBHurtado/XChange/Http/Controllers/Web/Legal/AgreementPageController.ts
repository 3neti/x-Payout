import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
const AgreementPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AgreementPageController.url(options),
    method: 'get',
})

AgreementPageController.definition = {
    methods: ["get","head"],
    url: '/x/legal/eula',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
AgreementPageController.url = (options?: RouteQueryOptions) => {
    return AgreementPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
AgreementPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AgreementPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
AgreementPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AgreementPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
const AgreementPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AgreementPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
AgreementPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AgreementPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
AgreementPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AgreementPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

AgreementPageController.form = AgreementPageControllerForm

export default AgreementPageController