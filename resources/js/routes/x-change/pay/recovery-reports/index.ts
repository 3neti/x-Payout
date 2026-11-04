import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentRecoveryReportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentRecoveryReportController.php:17
* @route '/x/pay/{code}/recovery-reports'
*/
export const store = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/pay/{code}/recovery-reports',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentRecoveryReportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentRecoveryReportController.php:17
* @route '/x/pay/{code}/recovery-reports'
*/
store.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentRecoveryReportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentRecoveryReportController.php:17
* @route '/x/pay/{code}/recovery-reports'
*/
store.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentRecoveryReportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentRecoveryReportController.php:17
* @route '/x/pay/{code}/recovery-reports'
*/
const storeForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Payment\PaymentRecoveryReportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Payment/PaymentRecoveryReportController.php:17
* @route '/x/pay/{code}/recovery-reports'
*/
storeForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const recoveryReports = {
    store: Object.assign(store, store),
}

export default recoveryReports