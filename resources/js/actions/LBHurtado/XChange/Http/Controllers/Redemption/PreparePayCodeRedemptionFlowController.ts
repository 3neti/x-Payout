import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\PreparePayCodeRedemptionFlowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/PreparePayCodeRedemptionFlowController.php:16
* @route '/api/x/v1/pay-codes/{code}/claim/start'
*/
const PreparePayCodeRedemptionFlowController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: PreparePayCodeRedemptionFlowController.url(args, options),
    method: 'post',
})

PreparePayCodeRedemptionFlowController.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes/{code}/claim/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\PreparePayCodeRedemptionFlowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/PreparePayCodeRedemptionFlowController.php:16
* @route '/api/x/v1/pay-codes/{code}/claim/start'
*/
PreparePayCodeRedemptionFlowController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return PreparePayCodeRedemptionFlowController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\PreparePayCodeRedemptionFlowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/PreparePayCodeRedemptionFlowController.php:16
* @route '/api/x/v1/pay-codes/{code}/claim/start'
*/
PreparePayCodeRedemptionFlowController.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: PreparePayCodeRedemptionFlowController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\PreparePayCodeRedemptionFlowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/PreparePayCodeRedemptionFlowController.php:16
* @route '/api/x/v1/pay-codes/{code}/claim/start'
*/
const PreparePayCodeRedemptionFlowControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: PreparePayCodeRedemptionFlowController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\PreparePayCodeRedemptionFlowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/PreparePayCodeRedemptionFlowController.php:16
* @route '/api/x/v1/pay-codes/{code}/claim/start'
*/
PreparePayCodeRedemptionFlowControllerForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: PreparePayCodeRedemptionFlowController.url(args, options),
    method: 'post',
})

PreparePayCodeRedemptionFlowController.form = PreparePayCodeRedemptionFlowControllerForm

export default PreparePayCodeRedemptionFlowController