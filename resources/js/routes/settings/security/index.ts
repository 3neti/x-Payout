import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\SecurityController::confirm
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security/confirm'
*/
export const confirm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

confirm.definition = {
    methods: ["get","head"],
    url: '/settings/security/confirm',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\SecurityController::confirm
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security/confirm'
*/
confirm.url = (options?: RouteQueryOptions) => {
    return confirm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\SecurityController::confirm
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security/confirm'
*/
confirm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\SecurityController::confirm
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security/confirm'
*/
confirm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirm.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\SecurityController::confirm
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security/confirm'
*/
const confirmForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirm.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\SecurityController::confirm
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security/confirm'
*/
confirmForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirm.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\SecurityController::confirm
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security/confirm'
*/
confirmForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirm.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirm.form = confirmForm

const security = {
    confirm: Object.assign(confirm, confirm),
}

export default security