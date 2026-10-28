import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
export const submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/x/claim',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
submit.url = (options?: RouteQueryOptions) => {
    return submit.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
const submitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
submitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

submit.form = submitForm

const start = {
    submit: Object.assign(submit, submit),
}

export default start