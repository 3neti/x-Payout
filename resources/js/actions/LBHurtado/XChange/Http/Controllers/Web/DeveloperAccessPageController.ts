import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::legacy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:14
* @route '/docs/api'
*/
export const legacy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: legacy.url(options),
    method: 'get',
})

legacy.definition = {
    methods: ["get","head"],
    url: '/docs/api',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::legacy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:14
* @route '/docs/api'
*/
legacy.url = (options?: RouteQueryOptions) => {
    return legacy.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::legacy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:14
* @route '/docs/api'
*/
legacy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: legacy.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::legacy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:14
* @route '/docs/api'
*/
legacy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: legacy.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::legacy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:14
* @route '/docs/api'
*/
const legacyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: legacy.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::legacy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:14
* @route '/docs/api'
*/
legacyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: legacy.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::legacy
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:14
* @route '/docs/api'
*/
legacyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: legacy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

legacy.form = legacyForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:19
* @route '/x/developers'
*/
const DeveloperAccessPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DeveloperAccessPageController.url(options),
    method: 'get',
})

DeveloperAccessPageController.definition = {
    methods: ["get","head"],
    url: '/x/developers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:19
* @route '/x/developers'
*/
DeveloperAccessPageController.url = (options?: RouteQueryOptions) => {
    return DeveloperAccessPageController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:19
* @route '/x/developers'
*/
DeveloperAccessPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DeveloperAccessPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:19
* @route '/x/developers'
*/
DeveloperAccessPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: DeveloperAccessPageController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:19
* @route '/x/developers'
*/
const DeveloperAccessPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DeveloperAccessPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:19
* @route '/x/developers'
*/
DeveloperAccessPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DeveloperAccessPageController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:19
* @route '/x/developers'
*/
DeveloperAccessPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DeveloperAccessPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

DeveloperAccessPageController.form = DeveloperAccessPageControllerForm

DeveloperAccessPageController.legacy = legacy

export default DeveloperAccessPageController