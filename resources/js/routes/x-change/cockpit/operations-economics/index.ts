import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::report
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
export const report = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: report.url(args, options),
    method: 'get',
})

report.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/operations-economics/report/{report}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::report
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
report.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { report: args }
    }

    if (Array.isArray(args)) {
        args = {
            report: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        report: args.report,
    }

    return report.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::report
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
report.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: report.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::report
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
report.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: report.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::report
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
const reportForm = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: report.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::report
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
reportForm.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: report.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::report
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
reportForm.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: report.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

report.form = reportForm

const operationsEconomics = {
    report: Object.assign(report, report),
}

export default operationsEconomics