import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
const ClaimSuccessPageController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimSuccessPageController.url(args, options),
    method: 'get',
})

ClaimSuccessPageController.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/success',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
ClaimSuccessPageController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ClaimSuccessPageController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
ClaimSuccessPageController.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimSuccessPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
ClaimSuccessPageController.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClaimSuccessPageController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
const ClaimSuccessPageControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimSuccessPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
ClaimSuccessPageControllerForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimSuccessPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
ClaimSuccessPageControllerForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimSuccessPageController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ClaimSuccessPageController.form = ClaimSuccessPageControllerForm

export default ClaimSuccessPageController