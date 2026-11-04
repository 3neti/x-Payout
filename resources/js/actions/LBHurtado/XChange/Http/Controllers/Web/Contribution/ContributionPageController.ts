import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
*/
const ContributionPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ContributionPageController.url(options),
    method: 'get',
})

ContributionPageController.definition = {
    methods: ["get","head"],
    url: '/x/contribute',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
*/
ContributionPageController.url = (options?: RouteQueryOptions) => {
    return ContributionPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
*/
ContributionPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ContributionPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
*/
ContributionPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ContributionPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
*/
const ContributionPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ContributionPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
*/
ContributionPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ContributionPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
*/
ContributionPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ContributionPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ContributionPageController.form = ContributionPageControllerForm

export default ContributionPageController