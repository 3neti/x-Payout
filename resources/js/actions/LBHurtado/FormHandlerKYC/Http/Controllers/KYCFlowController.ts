import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::initiate
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:32
* @route '/form-flow/{flow_id}/kyc/initiate'
*/
export const initiate = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: initiate.url(args, options),
    method: 'post',
})

initiate.definition = {
    methods: ["post"],
    url: '/form-flow/{flow_id}/kyc/initiate',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::initiate
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:32
* @route '/form-flow/{flow_id}/kyc/initiate'
*/
initiate.url = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { flow_id: args }
    }

    if (Array.isArray(args)) {
        args = {
            flow_id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        flow_id: args.flow_id,
    }

    return initiate.definition.url
            .replace('{flow_id}', parsedArgs.flow_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::initiate
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:32
* @route '/form-flow/{flow_id}/kyc/initiate'
*/
initiate.post = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: initiate.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::initiate
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:32
* @route '/form-flow/{flow_id}/kyc/initiate'
*/
const initiateForm = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: initiate.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::initiate
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:32
* @route '/form-flow/{flow_id}/kyc/initiate'
*/
initiateForm.post = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: initiate.url(args, options),
    method: 'post',
})

initiate.form = initiateForm

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::retry
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:65
* @route '/form-flow/{flow_id}/kyc/retry'
*/
export const retry = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry.url(args, options),
    method: 'post',
})

retry.definition = {
    methods: ["post"],
    url: '/form-flow/{flow_id}/kyc/retry',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::retry
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:65
* @route '/form-flow/{flow_id}/kyc/retry'
*/
retry.url = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { flow_id: args }
    }

    if (Array.isArray(args)) {
        args = {
            flow_id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        flow_id: args.flow_id,
    }

    return retry.definition.url
            .replace('{flow_id}', parsedArgs.flow_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::retry
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:65
* @route '/form-flow/{flow_id}/kyc/retry'
*/
retry.post = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::retry
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:65
* @route '/form-flow/{flow_id}/kyc/retry'
*/
const retryForm = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::retry
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:65
* @route '/form-flow/{flow_id}/kyc/retry'
*/
retryForm.post = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retry.url(args, options),
    method: 'post',
})

retry.form = retryForm

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::status
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:178
* @route '/form-flow/{flow_id}/kyc/status'
*/
export const status = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

status.definition = {
    methods: ["get","head"],
    url: '/form-flow/{flow_id}/kyc/status',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::status
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:178
* @route '/form-flow/{flow_id}/kyc/status'
*/
status.url = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { flow_id: args }
    }

    if (Array.isArray(args)) {
        args = {
            flow_id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        flow_id: args.flow_id,
    }

    return status.definition.url
            .replace('{flow_id}', parsedArgs.flow_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::status
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:178
* @route '/form-flow/{flow_id}/kyc/status'
*/
status.get = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::status
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:178
* @route '/form-flow/{flow_id}/kyc/status'
*/
status.head = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::status
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:178
* @route '/form-flow/{flow_id}/kyc/status'
*/
const statusForm = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::status
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:178
* @route '/form-flow/{flow_id}/kyc/status'
*/
statusForm.get = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::status
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:178
* @route '/form-flow/{flow_id}/kyc/status'
*/
statusForm.head = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

status.form = statusForm

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::callback
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:93
* @route '/form-flow/kyc/callback'
*/
export const callback = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: callback.url(options),
    method: 'get',
})

callback.definition = {
    methods: ["get","head"],
    url: '/form-flow/kyc/callback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::callback
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:93
* @route '/form-flow/kyc/callback'
*/
callback.url = (options?: RouteQueryOptions) => {
    return callback.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::callback
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:93
* @route '/form-flow/kyc/callback'
*/
callback.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: callback.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::callback
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:93
* @route '/form-flow/kyc/callback'
*/
callback.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: callback.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::callback
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:93
* @route '/form-flow/kyc/callback'
*/
const callbackForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: callback.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::callback
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:93
* @route '/form-flow/kyc/callback'
*/
callbackForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: callback.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\FormHandlerKYC\Http\Controllers\KYCFlowController::callback
* @see vendor/3neti/form-handler-kyc/src/Http/Controllers/KYCFlowController.php:93
* @route '/form-flow/kyc/callback'
*/
callbackForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: callback.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

callback.form = callbackForm

const KYCFlowController = { initiate, retry, status, callback }

export default KYCFlowController