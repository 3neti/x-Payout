import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEngineeringPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEngineeringPreviewController.php:22
* @route '/x/cockpit/pay-codes/{code}/engineering-preview'
*/
const CockpitPayCodeEngineeringPreviewController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitPayCodeEngineeringPreviewController.url(args, options),
    method: 'get',
})

CockpitPayCodeEngineeringPreviewController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/pay-codes/{code}/engineering-preview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEngineeringPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEngineeringPreviewController.php:22
* @route '/x/cockpit/pay-codes/{code}/engineering-preview'
*/
CockpitPayCodeEngineeringPreviewController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CockpitPayCodeEngineeringPreviewController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEngineeringPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEngineeringPreviewController.php:22
* @route '/x/cockpit/pay-codes/{code}/engineering-preview'
*/
CockpitPayCodeEngineeringPreviewController.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitPayCodeEngineeringPreviewController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEngineeringPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEngineeringPreviewController.php:22
* @route '/x/cockpit/pay-codes/{code}/engineering-preview'
*/
CockpitPayCodeEngineeringPreviewController.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitPayCodeEngineeringPreviewController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEngineeringPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEngineeringPreviewController.php:22
* @route '/x/cockpit/pay-codes/{code}/engineering-preview'
*/
const CockpitPayCodeEngineeringPreviewControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPayCodeEngineeringPreviewController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEngineeringPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEngineeringPreviewController.php:22
* @route '/x/cockpit/pay-codes/{code}/engineering-preview'
*/
CockpitPayCodeEngineeringPreviewControllerForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPayCodeEngineeringPreviewController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEngineeringPreviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEngineeringPreviewController.php:22
* @route '/x/cockpit/pay-codes/{code}/engineering-preview'
*/
CockpitPayCodeEngineeringPreviewControllerForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPayCodeEngineeringPreviewController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitPayCodeEngineeringPreviewController.form = CockpitPayCodeEngineeringPreviewControllerForm

export default CockpitPayCodeEngineeringPreviewController