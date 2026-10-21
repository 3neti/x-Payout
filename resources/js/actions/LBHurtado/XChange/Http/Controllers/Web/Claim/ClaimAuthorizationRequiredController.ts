import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
const ClaimAuthorizationRequiredController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimAuthorizationRequiredController.url(args, options),
    method: 'get',
})

ClaimAuthorizationRequiredController.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/authorization-required',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
ClaimAuthorizationRequiredController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { code: args }
    }

    if (Array.isArray(args)) {
        args = {
            code: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
    }

    return ClaimAuthorizationRequiredController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
ClaimAuthorizationRequiredController.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimAuthorizationRequiredController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
ClaimAuthorizationRequiredController.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClaimAuthorizationRequiredController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
const ClaimAuthorizationRequiredControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimAuthorizationRequiredController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
ClaimAuthorizationRequiredControllerForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimAuthorizationRequiredController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
ClaimAuthorizationRequiredControllerForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimAuthorizationRequiredController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ClaimAuthorizationRequiredController.form = ClaimAuthorizationRequiredControllerForm

export default ClaimAuthorizationRequiredController