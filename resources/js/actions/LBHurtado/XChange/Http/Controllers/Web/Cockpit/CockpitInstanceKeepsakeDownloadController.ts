import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadController.php:20
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
const CockpitInstanceKeepsakeDownloadController = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitInstanceKeepsakeDownloadController.url(args, options),
    method: 'post',
})

CockpitInstanceKeepsakeDownloadController.definition = {
    methods: ["post"],
    url: '/x/cockpit/instance-keepsakes/{reference}/download',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadController.php:20
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
CockpitInstanceKeepsakeDownloadController.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CockpitInstanceKeepsakeDownloadController.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadController.php:20
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
CockpitInstanceKeepsakeDownloadController.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitInstanceKeepsakeDownloadController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadController.php:20
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
const CockpitInstanceKeepsakeDownloadControllerForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitInstanceKeepsakeDownloadController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadController.php:20
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
CockpitInstanceKeepsakeDownloadControllerForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitInstanceKeepsakeDownloadController.url(args, options),
    method: 'post',
})

CockpitInstanceKeepsakeDownloadController.form = CockpitInstanceKeepsakeDownloadControllerForm

export default CockpitInstanceKeepsakeDownloadController