import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterPageController.php:15
* @route '/x/auto-register'
*/
const AutoRegisterPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AutoRegisterPageController.url(options),
    method: 'get',
})

AutoRegisterPageController.definition = {
    methods: ["get","head"],
    url: '/x/auto-register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterPageController.php:15
* @route '/x/auto-register'
*/
AutoRegisterPageController.url = (options?: RouteQueryOptions) => {
    return AutoRegisterPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterPageController.php:15
* @route '/x/auto-register'
*/
AutoRegisterPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AutoRegisterPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterPageController.php:15
* @route '/x/auto-register'
*/
AutoRegisterPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AutoRegisterPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterPageController.php:15
* @route '/x/auto-register'
*/
const AutoRegisterPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AutoRegisterPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterPageController.php:15
* @route '/x/auto-register'
*/
AutoRegisterPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AutoRegisterPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicOnboarding\AutoRegisterPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicOnboarding/AutoRegisterPageController.php:15
* @route '/x/auto-register'
*/
AutoRegisterPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AutoRegisterPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

AutoRegisterPageController.form = AutoRegisterPageControllerForm

export default AutoRegisterPageController