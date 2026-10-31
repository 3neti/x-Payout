import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:31
* @route '/x/claim/{code}'
*/
const ClaimPageController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimPageController.url(args, options),
    method: 'get',
})

ClaimPageController.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:31
* @route '/x/claim/{code}'
*/
ClaimPageController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ClaimPageController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:31
* @route '/x/claim/{code}'
*/
ClaimPageController.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:31
* @route '/x/claim/{code}'
*/
ClaimPageController.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClaimPageController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:31
* @route '/x/claim/{code}'
*/
const ClaimPageControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:31
* @route '/x/claim/{code}'
*/
ClaimPageControllerForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:31
* @route '/x/claim/{code}'
*/
ClaimPageControllerForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimPageController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ClaimPageController.form = ClaimPageControllerForm

export default ClaimPageController