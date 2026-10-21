import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import attempts from './attempts'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:29
* @route '/x/pay/{code}'
*/
export const show = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/pay/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:29
* @route '/x/pay/{code}'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:29
* @route '/x/pay/{code}'
*/
show.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:29
* @route '/x/pay/{code}'
*/
show.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:29
* @route '/x/pay/{code}'
*/
const showForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:29
* @route '/x/pay/{code}'
*/
showForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentPageController.php:29
* @route '/x/pay/{code}'
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

const pay = {
    show: Object.assign(show, show),
    attempts: Object.assign(attempts, attempts),
}

export default pay