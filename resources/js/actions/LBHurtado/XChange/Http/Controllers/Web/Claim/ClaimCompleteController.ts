import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimCompleteController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimCompleteController.php:14
* @route '/x/claim/{code}/complete'
*/
const ClaimCompleteController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ClaimCompleteController.url(args, options),
    method: 'post',
})

ClaimCompleteController.definition = {
    methods: ["post"],
    url: '/x/claim/{code}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimCompleteController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimCompleteController.php:14
* @route '/x/claim/{code}/complete'
*/
ClaimCompleteController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ClaimCompleteController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimCompleteController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimCompleteController.php:14
* @route '/x/claim/{code}/complete'
*/
ClaimCompleteController.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ClaimCompleteController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimCompleteController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimCompleteController.php:14
* @route '/x/claim/{code}/complete'
*/
const ClaimCompleteControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ClaimCompleteController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimCompleteController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimCompleteController.php:14
* @route '/x/claim/{code}/complete'
*/
ClaimCompleteControllerForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ClaimCompleteController.url(args, options),
    method: 'post',
})

ClaimCompleteController.form = ClaimCompleteControllerForm

export default ClaimCompleteController