import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\SubmitPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/SubmitPayCodeClaimController.php:19
* @route '/api/x/v1/pay-codes/{code}/claim/submit'
*/
const SubmitPayCodeClaimController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: SubmitPayCodeClaimController.url(args, options),
    method: 'post',
})

SubmitPayCodeClaimController.definition = {
    methods: ["post"],
    url: '/api/x/v1/pay-codes/{code}/claim/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\SubmitPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/SubmitPayCodeClaimController.php:19
* @route '/api/x/v1/pay-codes/{code}/claim/submit'
*/
SubmitPayCodeClaimController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return SubmitPayCodeClaimController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\SubmitPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/SubmitPayCodeClaimController.php:19
* @route '/api/x/v1/pay-codes/{code}/claim/submit'
*/
SubmitPayCodeClaimController.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: SubmitPayCodeClaimController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\SubmitPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/SubmitPayCodeClaimController.php:19
* @route '/api/x/v1/pay-codes/{code}/claim/submit'
*/
const SubmitPayCodeClaimControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: SubmitPayCodeClaimController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Redemption\SubmitPayCodeClaimController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Redemption/SubmitPayCodeClaimController.php:19
* @route '/api/x/v1/pay-codes/{code}/claim/submit'
*/
SubmitPayCodeClaimControllerForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: SubmitPayCodeClaimController.url(args, options),
    method: 'post',
})

SubmitPayCodeClaimController.form = SubmitPayCodeClaimControllerForm

export default SubmitPayCodeClaimController