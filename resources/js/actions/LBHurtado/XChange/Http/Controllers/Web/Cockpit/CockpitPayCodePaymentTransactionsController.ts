import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
const CockpitPayCodePaymentTransactionsController = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitPayCodePaymentTransactionsController.url(args, options),
    method: 'get',
})

CockpitPayCodePaymentTransactionsController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
CockpitPayCodePaymentTransactionsController.url = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions) => {
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

    return CockpitPayCodePaymentTransactionsController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{attempt}', parsedArgs.attempt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
CockpitPayCodePaymentTransactionsController.get = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitPayCodePaymentTransactionsController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
CockpitPayCodePaymentTransactionsController.head = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitPayCodePaymentTransactionsController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
const CockpitPayCodePaymentTransactionsControllerForm = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPayCodePaymentTransactionsController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
CockpitPayCodePaymentTransactionsControllerForm.get = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPayCodePaymentTransactionsController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodePaymentTransactionsController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodePaymentTransactionsController.php:19
* @route '/x/cockpit/pay-codes/{code}/payment-attempts/{attempt}/transactions'
*/
CockpitPayCodePaymentTransactionsControllerForm.head = (args: { code: string | number, attempt: string | number | { reference: string | number } } | [code: string | number, attempt: string | number | { reference: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPayCodePaymentTransactionsController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitPayCodePaymentTransactionsController.form = CockpitPayCodePaymentTransactionsControllerForm

export default CockpitPayCodePaymentTransactionsController