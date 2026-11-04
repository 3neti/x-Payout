import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitIssuerInvoiceDraftController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitIssuerInvoiceDraftController.php:15
* @route '/x/cockpit/quick-generate/invoice-drafts'
*/
const CockpitIssuerInvoiceDraftController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitIssuerInvoiceDraftController.url(options),
    method: 'post',
})

CockpitIssuerInvoiceDraftController.definition = {
    methods: ["post"],
    url: '/x/cockpit/quick-generate/invoice-drafts',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitIssuerInvoiceDraftController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitIssuerInvoiceDraftController.php:15
* @route '/x/cockpit/quick-generate/invoice-drafts'
*/
CockpitIssuerInvoiceDraftController.url = (options?: RouteQueryOptions) => {
    return CockpitIssuerInvoiceDraftController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitIssuerInvoiceDraftController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitIssuerInvoiceDraftController.php:15
* @route '/x/cockpit/quick-generate/invoice-drafts'
*/
CockpitIssuerInvoiceDraftController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitIssuerInvoiceDraftController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitIssuerInvoiceDraftController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitIssuerInvoiceDraftController.php:15
* @route '/x/cockpit/quick-generate/invoice-drafts'
*/
const CockpitIssuerInvoiceDraftControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitIssuerInvoiceDraftController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitIssuerInvoiceDraftController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitIssuerInvoiceDraftController.php:15
* @route '/x/cockpit/quick-generate/invoice-drafts'
*/
CockpitIssuerInvoiceDraftControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitIssuerInvoiceDraftController.url(options),
    method: 'post',
})

CockpitIssuerInvoiceDraftController.form = CockpitIssuerInvoiceDraftControllerForm

export default CockpitIssuerInvoiceDraftController