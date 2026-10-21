import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTemplateStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTemplateStoreController.php:15
* @route '/x/cockpit/pay-code-templates'
*/
const CockpitPayCodeTemplateStoreController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPayCodeTemplateStoreController.url(options),
    method: 'post',
})

CockpitPayCodeTemplateStoreController.definition = {
    methods: ["post"],
    url: '/x/cockpit/pay-code-templates',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTemplateStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTemplateStoreController.php:15
* @route '/x/cockpit/pay-code-templates'
*/
CockpitPayCodeTemplateStoreController.url = (options?: RouteQueryOptions) => {
    return CockpitPayCodeTemplateStoreController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTemplateStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTemplateStoreController.php:15
* @route '/x/cockpit/pay-code-templates'
*/
CockpitPayCodeTemplateStoreController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPayCodeTemplateStoreController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTemplateStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTemplateStoreController.php:15
* @route '/x/cockpit/pay-code-templates'
*/
const CockpitPayCodeTemplateStoreControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodeTemplateStoreController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTemplateStoreController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTemplateStoreController.php:15
* @route '/x/cockpit/pay-code-templates'
*/
CockpitPayCodeTemplateStoreControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodeTemplateStoreController.url(options),
    method: 'post',
})

CockpitPayCodeTemplateStoreController.form = CockpitPayCodeTemplateStoreControllerForm

export default CockpitPayCodeTemplateStoreController