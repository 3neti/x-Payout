import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSubmitController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSubmitController.php:44
* @route '/x/claim/{code}/submit'
*/
const ClaimSubmitController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ClaimSubmitController.url(args, options),
    method: 'post',
})

ClaimSubmitController.definition = {
    methods: ["post"],
    url: '/x/claim/{code}/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSubmitController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSubmitController.php:44
* @route '/x/claim/{code}/submit'
*/
ClaimSubmitController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ClaimSubmitController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSubmitController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSubmitController.php:44
* @route '/x/claim/{code}/submit'
*/
ClaimSubmitController.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ClaimSubmitController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSubmitController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSubmitController.php:44
* @route '/x/claim/{code}/submit'
*/
const ClaimSubmitControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ClaimSubmitController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSubmitController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSubmitController.php:44
* @route '/x/claim/{code}/submit'
*/
ClaimSubmitControllerForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ClaimSubmitController.url(args, options),
    method: 'post',
})

ClaimSubmitController.form = ClaimSubmitControllerForm

export default ClaimSubmitController