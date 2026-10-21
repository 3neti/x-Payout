import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:19
* @route '/x/claim/{code}/redirect'
*/
const ClaimRedirectController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimRedirectController.url(args, options),
    method: 'get',
})

ClaimRedirectController.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/redirect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:19
* @route '/x/claim/{code}/redirect'
*/
ClaimRedirectController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ClaimRedirectController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:19
* @route '/x/claim/{code}/redirect'
*/
ClaimRedirectController.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimRedirectController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:19
* @route '/x/claim/{code}/redirect'
*/
ClaimRedirectController.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClaimRedirectController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:19
* @route '/x/claim/{code}/redirect'
*/
const ClaimRedirectControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimRedirectController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:19
* @route '/x/claim/{code}/redirect'
*/
ClaimRedirectControllerForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimRedirectController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:19
* @route '/x/claim/{code}/redirect'
*/
ClaimRedirectControllerForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimRedirectController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ClaimRedirectController.form = ClaimRedirectControllerForm

export default ClaimRedirectController