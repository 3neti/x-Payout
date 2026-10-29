import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import start864adb from './start'
import flows from './flows'
import approvalDf7719 from './approval'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
export const shareCard = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shareCard.url(args, options),
    method: 'get',
})

shareCard.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/share-card.png',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
shareCard.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return shareCard.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
shareCard.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shareCard.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
shareCard.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: shareCard.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
const shareCardForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shareCard.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
shareCardForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shareCard.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
shareCardForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shareCard.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

shareCard.form = shareCardForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
export const start = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start.url(options),
    method: 'get',
})

start.definition = {
    methods: ["get","head"],
    url: '/x/claim',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
start.url = (options?: RouteQueryOptions) => {
    return start.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
start.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
start.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: start.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
const startForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
startForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
startForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

start.form = startForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:29
* @route '/x/claim/{code}'
*/
export const show = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:29
* @route '/x/claim/{code}'
*/
show.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:29
* @route '/x/claim/{code}'
*/
show.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:29
* @route '/x/claim/{code}'
*/
show.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:29
* @route '/x/claim/{code}'
*/
const showForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:29
* @route '/x/claim/{code}'
*/
showForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimPageController.php:29
* @route '/x/claim/{code}'
*/
showForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
export const authorizationRequired = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: authorizationRequired.url(args, options),
    method: 'get',
})

authorizationRequired.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/authorization-required',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
authorizationRequired.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return authorizationRequired.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
authorizationRequired.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: authorizationRequired.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
authorizationRequired.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: authorizationRequired.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
const authorizationRequiredForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: authorizationRequired.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
authorizationRequiredForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: authorizationRequired.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimAuthorizationRequiredController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimAuthorizationRequiredController.php:21
* @route '/x/claim/{code}/authorization-required'
*/
authorizationRequiredForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: authorizationRequired.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

authorizationRequired.form = authorizationRequiredForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
export const experience = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: experience.url(args, options),
    method: 'get',
})

experience.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/experience',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
experience.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return experience.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
experience.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: experience.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
experience.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: experience.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
const experienceForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: experience.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
experienceForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: experience.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
experienceForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: experience.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

experience.form = experienceForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimCompleteController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimCompleteController.php:14
* @route '/x/claim/{code}/complete'
*/
export const complete = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/x/claim/{code}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimCompleteController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimCompleteController.php:14
* @route '/x/claim/{code}/complete'
*/
complete.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return complete.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimCompleteController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimCompleteController.php:14
* @route '/x/claim/{code}/complete'
*/
complete.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimCompleteController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimCompleteController.php:14
* @route '/x/claim/{code}/complete'
*/
const completeForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimCompleteController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimCompleteController.php:14
* @route '/x/claim/{code}/complete'
*/
completeForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

complete.form = completeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSubmitController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSubmitController.php:44
* @route '/x/claim/{code}/submit'
*/
export const submit = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/x/claim/{code}/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSubmitController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSubmitController.php:44
* @route '/x/claim/{code}/submit'
*/
submit.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return submit.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSubmitController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSubmitController.php:44
* @route '/x/claim/{code}/submit'
*/
submit.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSubmitController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSubmitController.php:44
* @route '/x/claim/{code}/submit'
*/
const submitForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSubmitController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSubmitController.php:44
* @route '/x/claim/{code}/submit'
*/
submitForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

submit.form = submitForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
export const success = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: success.url(args, options),
    method: 'get',
})

success.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/success',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
success.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return success.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
success.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: success.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
success.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: success.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
const successForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: success.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
successForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: success.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimSuccessPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimSuccessPageController.php:34
* @route '/x/claim/{code}/success'
*/
successForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: success.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

success.form = successForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:20
* @route '/x/claim/{code}/redirect'
*/
export const redirect = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(args, options),
    method: 'get',
})

redirect.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/redirect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:20
* @route '/x/claim/{code}/redirect'
*/
redirect.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return redirect.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:20
* @route '/x/claim/{code}/redirect'
*/
redirect.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:20
* @route '/x/claim/{code}/redirect'
*/
redirect.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirect.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:20
* @route '/x/claim/{code}/redirect'
*/
const redirectForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:20
* @route '/x/claim/{code}/redirect'
*/
redirectForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimRedirectController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimRedirectController.php:20
* @route '/x/claim/{code}/redirect'
*/
redirectForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

redirect.form = redirectForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
export const approval = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: approval.url(args, options),
    method: 'get',
})

approval.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/approval',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
approval.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return approval.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
approval.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: approval.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
approval.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: approval.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
const approvalForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: approval.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
approvalForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: approval.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
approvalForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: approval.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

approval.form = approvalForm

const claim = {
    shareCard: Object.assign(shareCard, shareCard),
    start: Object.assign(start, start864adb),
    show: Object.assign(show, show),
    authorizationRequired: Object.assign(authorizationRequired, authorizationRequired),
    experience: Object.assign(experience, experience),
    flows: Object.assign(flows, flows),
    complete: Object.assign(complete, complete),
    submit: Object.assign(submit, submit),
    success: Object.assign(success, success),
    redirect: Object.assign(redirect, redirect),
    approval: Object.assign(approval, approvalDf7719),
}

export default claim