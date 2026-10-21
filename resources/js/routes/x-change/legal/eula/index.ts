import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/legal/eula',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AgreementPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AgreementPageController.php:13
* @route '/x/legal/eula'
*/
showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AcceptAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AcceptAgreementController.php:18
* @route '/x/legal/eula/accept'
*/
export const accept = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: accept.url(options),
    method: 'post',
})

accept.definition = {
    methods: ["post"],
    url: '/x/legal/eula/accept',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AcceptAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AcceptAgreementController.php:18
* @route '/x/legal/eula/accept'
*/
accept.url = (options?: RouteQueryOptions) => {
    return accept.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AcceptAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AcceptAgreementController.php:18
* @route '/x/legal/eula/accept'
*/
accept.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: accept.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AcceptAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AcceptAgreementController.php:18
* @route '/x/legal/eula/accept'
*/
const acceptForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: accept.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\AcceptAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/AcceptAgreementController.php:18
* @route '/x/legal/eula/accept'
*/
acceptForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: accept.url(options),
    method: 'post',
})

accept.form = acceptForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\DeclineAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/DeclineAgreementController.php:14
* @route '/x/legal/eula/decline'
*/
export const decline = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: decline.url(options),
    method: 'post',
})

decline.definition = {
    methods: ["post"],
    url: '/x/legal/eula/decline',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\DeclineAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/DeclineAgreementController.php:14
* @route '/x/legal/eula/decline'
*/
decline.url = (options?: RouteQueryOptions) => {
    return decline.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\DeclineAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/DeclineAgreementController.php:14
* @route '/x/legal/eula/decline'
*/
decline.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: decline.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\DeclineAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/DeclineAgreementController.php:14
* @route '/x/legal/eula/decline'
*/
const declineForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: decline.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Legal\DeclineAgreementController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Legal/DeclineAgreementController.php:14
* @route '/x/legal/eula/decline'
*/
declineForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: decline.url(options),
    method: 'post',
})

decline.form = declineForm

const eula = {
    show: Object.assign(show, show),
    accept: Object.assign(accept, accept),
    decline: Object.assign(decline, decline),
}

export default eula