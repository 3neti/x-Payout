import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\FormHandlerOtp\Http\Controllers\OtpChallengeController::store
* @see vendor/3neti/form-handler-otp/src/Http/Controllers/OtpChallengeController.php:15
* @route '/form-flow/{flowId}/step/{step}/otp-challenge'
*/
export const store = (args: { flowId: string | number, step: string | number } | [flowId: string | number, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/form-flow/{flowId}/step/{step}/otp-challenge',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\FormHandlerOtp\Http\Controllers\OtpChallengeController::store
* @see vendor/3neti/form-handler-otp/src/Http/Controllers/OtpChallengeController.php:15
* @route '/form-flow/{flowId}/step/{step}/otp-challenge'
*/
store.url = (args: { flowId: string | number, step: string | number } | [flowId: string | number, step: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            flowId: args[0],
            step: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        flowId: args.flowId,
        step: args.step,
    }

    return store.definition.url
            .replace('{flowId}', parsedArgs.flowId.toString())
            .replace('{step}', parsedArgs.step.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormHandlerOtp\Http\Controllers\OtpChallengeController::store
* @see vendor/3neti/form-handler-otp/src/Http/Controllers/OtpChallengeController.php:15
* @route '/form-flow/{flowId}/step/{step}/otp-challenge'
*/
store.post = (args: { flowId: string | number, step: string | number } | [flowId: string | number, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerOtp\Http\Controllers\OtpChallengeController::store
* @see vendor/3neti/form-handler-otp/src/Http/Controllers/OtpChallengeController.php:15
* @route '/form-flow/{flowId}/step/{step}/otp-challenge'
*/
const storeForm = (args: { flowId: string | number, step: string | number } | [flowId: string | number, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerOtp\Http\Controllers\OtpChallengeController::store
* @see vendor/3neti/form-handler-otp/src/Http/Controllers/OtpChallengeController.php:15
* @route '/form-flow/{flowId}/step/{step}/otp-challenge'
*/
storeForm.post = (args: { flowId: string | number, step: string | number } | [flowId: string | number, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\FormHandlerOtp\Http\Controllers\OtpChallengeController::resend
* @see vendor/3neti/form-handler-otp/src/Http/Controllers/OtpChallengeController.php:30
* @route '/form-flow/{flowId}/step/{step}/otp-challenge/resend'
*/
export const resend = (args: { flowId: string | number, step: string | number } | [flowId: string | number, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resend.url(args, options),
    method: 'post',
})

resend.definition = {
    methods: ["post"],
    url: '/form-flow/{flowId}/step/{step}/otp-challenge/resend',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\FormHandlerOtp\Http\Controllers\OtpChallengeController::resend
* @see vendor/3neti/form-handler-otp/src/Http/Controllers/OtpChallengeController.php:30
* @route '/form-flow/{flowId}/step/{step}/otp-challenge/resend'
*/
resend.url = (args: { flowId: string | number, step: string | number } | [flowId: string | number, step: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            flowId: args[0],
            step: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        flowId: args.flowId,
        step: args.step,
    }

    return resend.definition.url
            .replace('{flowId}', parsedArgs.flowId.toString())
            .replace('{step}', parsedArgs.step.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormHandlerOtp\Http\Controllers\OtpChallengeController::resend
* @see vendor/3neti/form-handler-otp/src/Http/Controllers/OtpChallengeController.php:30
* @route '/form-flow/{flowId}/step/{step}/otp-challenge/resend'
*/
resend.post = (args: { flowId: string | number, step: string | number } | [flowId: string | number, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resend.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerOtp\Http\Controllers\OtpChallengeController::resend
* @see vendor/3neti/form-handler-otp/src/Http/Controllers/OtpChallengeController.php:30
* @route '/form-flow/{flowId}/step/{step}/otp-challenge/resend'
*/
const resendForm = (args: { flowId: string | number, step: string | number } | [flowId: string | number, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resend.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerOtp\Http\Controllers\OtpChallengeController::resend
* @see vendor/3neti/form-handler-otp/src/Http/Controllers/OtpChallengeController.php:30
* @route '/form-flow/{flowId}/step/{step}/otp-challenge/resend'
*/
resendForm.post = (args: { flowId: string | number, step: string | number } | [flowId: string | number, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resend.url(args, options),
    method: 'post',
})

resend.form = resendForm

const OtpChallengeController = { store, resend }

export default OtpChallengeController