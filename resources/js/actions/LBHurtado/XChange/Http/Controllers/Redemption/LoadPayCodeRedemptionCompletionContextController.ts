import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\LoadPayCodeRedemptionCompletionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/LoadPayCodeRedemptionCompletionContextController.php:17
* @route '/api/x/v1/pay-codes/{code}/claim/complete'
*/
const LoadPayCodeRedemptionCompletionContextController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LoadPayCodeRedemptionCompletionContextController.url(args, options),
    method: 'post',
})

LoadPayCodeRedemptionCompletionContextController.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes/{code}/claim/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\LoadPayCodeRedemptionCompletionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/LoadPayCodeRedemptionCompletionContextController.php:17
* @route '/api/x/v1/pay-codes/{code}/claim/complete'
*/
LoadPayCodeRedemptionCompletionContextController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return LoadPayCodeRedemptionCompletionContextController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\LoadPayCodeRedemptionCompletionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/LoadPayCodeRedemptionCompletionContextController.php:17
* @route '/api/x/v1/pay-codes/{code}/claim/complete'
*/
LoadPayCodeRedemptionCompletionContextController.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LoadPayCodeRedemptionCompletionContextController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\LoadPayCodeRedemptionCompletionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/LoadPayCodeRedemptionCompletionContextController.php:17
* @route '/api/x/v1/pay-codes/{code}/claim/complete'
*/
const LoadPayCodeRedemptionCompletionContextControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LoadPayCodeRedemptionCompletionContextController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\LoadPayCodeRedemptionCompletionContextController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/LoadPayCodeRedemptionCompletionContextController.php:17
* @route '/api/x/v1/pay-codes/{code}/claim/complete'
*/
LoadPayCodeRedemptionCompletionContextControllerForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LoadPayCodeRedemptionCompletionContextController.url(args, options),
    method: 'post',
})

LoadPayCodeRedemptionCompletionContextController.form = LoadPayCodeRedemptionCompletionContextControllerForm

export default LoadPayCodeRedemptionCompletionContextController