import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadShowController.php:18
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
const CockpitInstanceKeepsakeDownloadShowController = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitInstanceKeepsakeDownloadShowController.url(args, options),
    method: 'get',
})

CockpitInstanceKeepsakeDownloadShowController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/instance-keepsakes/{reference}/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadShowController.php:18
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
CockpitInstanceKeepsakeDownloadShowController.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reference: args }
    }

    if (Array.isArray(args)) {
        args = {
            reference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reference: args.reference,
    }

    return CockpitInstanceKeepsakeDownloadShowController.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadShowController.php:18
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
CockpitInstanceKeepsakeDownloadShowController.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitInstanceKeepsakeDownloadShowController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadShowController.php:18
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
CockpitInstanceKeepsakeDownloadShowController.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitInstanceKeepsakeDownloadShowController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadShowController.php:18
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
const CockpitInstanceKeepsakeDownloadShowControllerForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitInstanceKeepsakeDownloadShowController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadShowController.php:18
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
CockpitInstanceKeepsakeDownloadShowControllerForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitInstanceKeepsakeDownloadShowController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadShowController.php:18
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
CockpitInstanceKeepsakeDownloadShowControllerForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitInstanceKeepsakeDownloadShowController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitInstanceKeepsakeDownloadShowController.form = CockpitInstanceKeepsakeDownloadShowControllerForm

export default CockpitInstanceKeepsakeDownloadShowController