import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionContextController.php:15
* @route '/x/contributions/context'
*/
const ContributionContextController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ContributionContextController.url(options),
    method: 'post',
})

ContributionContextController.definition = {
    methods: ["post"],
    url: '/x/contributions/context',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionContextController.php:15
* @route '/x/contributions/context'
*/
ContributionContextController.url = (options?: RouteQueryOptions) => {
    return ContributionContextController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionContextController.php:15
* @route '/x/contributions/context'
*/
ContributionContextController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ContributionContextController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionContextController.php:15
* @route '/x/contributions/context'
*/
const ContributionContextControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ContributionContextController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionContextController.php:15
* @route '/x/contributions/context'
*/
ContributionContextControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ContributionContextController.url(options),
    method: 'post',
})

ContributionContextController.form = ContributionContextControllerForm

export default ContributionContextController