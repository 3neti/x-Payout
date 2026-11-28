import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitIssuanceDiagnosticController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitIssuanceDiagnosticController.php:15
* @route '/x/cockpit/quick-generate/diagnostics'
*/
const CockpitIssuanceDiagnosticController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitIssuanceDiagnosticController.url(options),
    method: 'post',
})

CockpitIssuanceDiagnosticController.definition = {
    methods: ["post"],
    url: '/x/cockpit/quick-generate/diagnostics',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitIssuanceDiagnosticController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitIssuanceDiagnosticController.php:15
* @route '/x/cockpit/quick-generate/diagnostics'
*/
CockpitIssuanceDiagnosticController.url = (options?: RouteQueryOptions) => {
    return CockpitIssuanceDiagnosticController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitIssuanceDiagnosticController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitIssuanceDiagnosticController.php:15
* @route '/x/cockpit/quick-generate/diagnostics'
*/
CockpitIssuanceDiagnosticController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitIssuanceDiagnosticController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitIssuanceDiagnosticController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitIssuanceDiagnosticController.php:15
* @route '/x/cockpit/quick-generate/diagnostics'
*/
const CockpitIssuanceDiagnosticControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitIssuanceDiagnosticController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitIssuanceDiagnosticController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitIssuanceDiagnosticController.php:15
* @route '/x/cockpit/quick-generate/diagnostics'
*/
CockpitIssuanceDiagnosticControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitIssuanceDiagnosticController.url(options),
    method: 'post',
})

CockpitIssuanceDiagnosticController.form = CockpitIssuanceDiagnosticControllerForm

export default CockpitIssuanceDiagnosticController