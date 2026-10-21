import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
export const index = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
index.url = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            code: args[0],
            attempt: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
        attempt: typeof args.attempt === 'object'
        ? args.attempt.reference
        : args.attempt,
    }

    return index.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{attempt}', parsedArgs.attempt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
index.get = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
index.head = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
const indexForm = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
indexForm.get = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
indexForm.head = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const paymentTransactions = {
    index: Object.assign(index, index),
}

export default paymentTransactions