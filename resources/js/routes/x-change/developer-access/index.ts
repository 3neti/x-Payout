import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
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
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/developers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:19
* @route '/x/developers'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:19
* @route '/x/developers'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:19
* @route '/x/developers'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:19
* @route '/x/developers'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:19
* @route '/x/developers'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\DeveloperAccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/DeveloperAccessPageController.php:19
* @route '/x/developers'
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

const developerAccess = {
    legacy: Object.assign(legacy, legacy),
    show: Object.assign(show, show),
}

export default developerAccess