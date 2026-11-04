import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import password from './password'
import documents from './documents'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/contribute',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionPageController.php:14
* @route '/x/contribute'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionContextController.php:15
* @route '/x/contributions/context'
*/
export const context = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: context.url(options),
    method: 'post',
})

context.definition = {
    methods: ["post"],
    url: '/x/contributions/context',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionContextController.php:15
* @route '/x/contributions/context'
*/
context.url = (options?: RouteQueryOptions) => {
    return context.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionContextController.php:15
* @route '/x/contributions/context'
*/
context.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: context.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionContextController.php:15
* @route '/x/contributions/context'
*/
const contextForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: context.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ContributionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ContributionContextController.php:15
* @route '/x/contributions/context'
*/
contextForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: context.url(options),
    method: 'post',
})

context.form = contextForm

const contributions = {
    show: Object.assign(show, show),
    context: Object.assign(context, context),
    password: Object.assign(password, password),
    documents: Object.assign(documents, documents),
}

export default contributions