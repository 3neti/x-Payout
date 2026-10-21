import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import kyc from './kyc'
import location from './location'
import otpChallenge from './otp-challenge'
/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::start
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:40
* @route '/form-flow/start'
*/
export const start = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/form-flow/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::start
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:40
* @route '/form-flow/start'
*/
start.url = (options?: RouteQueryOptions) => {
    return start.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::start
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:40
* @route '/form-flow/start'
*/
start.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::start
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:40
* @route '/form-flow/start'
*/
const startForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::start
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:40
* @route '/form-flow/start'
*/
startForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(options),
    method: 'post',
})

start.form = startForm

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::show
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:82
* @route '/form-flow/{flow_id}'
*/
export const show = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/form-flow/{flow_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::show
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:82
* @route '/form-flow/{flow_id}'
*/
show.url = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{flow_id}', parsedArgs.flow_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::show
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:82
* @route '/form-flow/{flow_id}'
*/
show.get = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::show
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:82
* @route '/form-flow/{flow_id}'
*/
show.head = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::show
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:82
* @route '/form-flow/{flow_id}'
*/
const showForm = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::show
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:82
* @route '/form-flow/{flow_id}'
*/
showForm.get = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::show
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:82
* @route '/form-flow/{flow_id}'
*/
showForm.head = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::updateStep
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:200
* @route '/form-flow/{flow_id}/step/{step}'
*/
export const updateStep = (args: { flow_id: string | number, step: string | number } | [flow_id: string | number, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStep.url(args, options),
    method: 'post',
})

updateStep.definition = {
    methods: ["post"],
    url: '/form-flow/{flow_id}/step/{step}',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::updateStep
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:200
* @route '/form-flow/{flow_id}/step/{step}'
*/
updateStep.url = (args: { flow_id: string | number, step: string | number } | [flow_id: string | number, step: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            flow_id: args[0],
            step: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        flow_id: args.flow_id,
        step: args.step,
    }

    return updateStep.definition.url
            .replace('{flow_id}', parsedArgs.flow_id.toString())
            .replace('{step}', parsedArgs.step.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::updateStep
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:200
* @route '/form-flow/{flow_id}/step/{step}'
*/
updateStep.post = (args: { flow_id: string | number, step: string | number } | [flow_id: string | number, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStep.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::updateStep
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:200
* @route '/form-flow/{flow_id}/step/{step}'
*/
const updateStepForm = (args: { flow_id: string | number, step: string | number } | [flow_id: string | number, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStep.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::updateStep
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:200
* @route '/form-flow/{flow_id}/step/{step}'
*/
updateStepForm.post = (args: { flow_id: string | number, step: string | number } | [flow_id: string | number, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStep.url(args, options),
    method: 'post',
})

updateStep.form = updateStepForm

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::complete
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:281
* @route '/form-flow/{flow_id}/complete'
*/
export const complete = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/form-flow/{flow_id}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::complete
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:281
* @route '/form-flow/{flow_id}/complete'
*/
complete.url = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return complete.definition.url
            .replace('{flow_id}', parsedArgs.flow_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::complete
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:281
* @route '/form-flow/{flow_id}/complete'
*/
complete.post = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::complete
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:281
* @route '/form-flow/{flow_id}/complete'
*/
const completeForm = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::complete
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:281
* @route '/form-flow/{flow_id}/complete'
*/
completeForm.post = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

complete.form = completeForm

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::cancel
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:316
* @route '/form-flow/{flow_id}/cancel'
*/
export const cancel = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/form-flow/{flow_id}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::cancel
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:316
* @route '/form-flow/{flow_id}/cancel'
*/
cancel.url = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return cancel.definition.url
            .replace('{flow_id}', parsedArgs.flow_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::cancel
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:316
* @route '/form-flow/{flow_id}/cancel'
*/
cancel.post = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::cancel
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:316
* @route '/form-flow/{flow_id}/cancel'
*/
const cancelForm = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::cancel
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:316
* @route '/form-flow/{flow_id}/cancel'
*/
cancelForm.post = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

cancel.form = cancelForm

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::destroy
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:351
* @route '/form-flow/{flow_id}'
*/
export const destroy = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/form-flow/{flow_id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::destroy
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:351
* @route '/form-flow/{flow_id}'
*/
destroy.url = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{flow_id}', parsedArgs.flow_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::destroy
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:351
* @route '/form-flow/{flow_id}'
*/
destroy.delete = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::destroy
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:351
* @route '/form-flow/{flow_id}'
*/
const destroyForm = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\FormFlowManager\Http\Controllers\FormFlowController::destroy
* @see vendor/3neti/form-flow/src/Http/Controllers/FormFlowController.php:351
* @route '/form-flow/{flow_id}'
*/
destroyForm.delete = (args: { flow_id: string | number } | [flow_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const formFlow = {
    start: Object.assign(start, start),
    show: Object.assign(show, show),
    updateStep: Object.assign(updateStep, updateStep),
    complete: Object.assign(complete, complete),
    cancel: Object.assign(cancel, cancel),
    destroy: Object.assign(destroy, destroy),
    kyc: Object.assign(kyc, kyc),
    location: Object.assign(location, location),
    otpChallenge: Object.assign(otpChallenge, otpChallenge),
}

export default formFlow