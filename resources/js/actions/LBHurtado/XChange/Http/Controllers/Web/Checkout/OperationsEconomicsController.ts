import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/operations/economics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:28
* @route '/x/operations/economics'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::report
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:47
* @route '/x/operations/economics/report/{report}'
*/
export const report = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: report.url(args, options),
    method: 'get',
})

report.definition = {
    methods: ["get","head"],
    url: '/x/operations/economics/report/{report}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::report
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:47
* @route '/x/operations/economics/report/{report}'
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
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:47
* @route '/x/operations/economics/report/{report}'
*/
report.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: report.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::report
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:47
* @route '/x/operations/economics/report/{report}'
*/
report.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: report.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::report
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:47
* @route '/x/operations/economics/report/{report}'
*/
const reportForm = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: report.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::report
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:47
* @route '/x/operations/economics/report/{report}'
*/
reportForm.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: report.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::report
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:47
* @route '/x/operations/economics/report/{report}'
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

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
export const cockpit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cockpit.url(options),
    method: 'get',
})

cockpit.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/operations-economics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
cockpit.url = (options?: RouteQueryOptions) => {
    return cockpit.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
cockpit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cockpit.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
cockpit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cockpit.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
const cockpitForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cockpit.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
cockpitForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cockpit.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:40
* @route '/x/cockpit/operations-economics'
*/
cockpitForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cockpit.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

cockpit.form = cockpitForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpitReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
export const cockpitReport = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cockpitReport.url(args, options),
    method: 'get',
})

cockpitReport.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/operations-economics/report/{report}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpitReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
cockpitReport.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return cockpitReport.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpitReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
cockpitReport.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cockpitReport.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpitReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
cockpitReport.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cockpitReport.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpitReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
const cockpitReportForm = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cockpitReport.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpitReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
cockpitReportForm.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cockpitReport.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsEconomicsController::cockpitReport
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsEconomicsController.php:63
* @route '/x/cockpit/operations-economics/report/{report}'
*/
cockpitReportForm.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cockpitReport.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

cockpitReport.form = cockpitReportForm

const OperationsEconomicsController = { show, report, cockpit, cockpitReport }

export default OperationsEconomicsController