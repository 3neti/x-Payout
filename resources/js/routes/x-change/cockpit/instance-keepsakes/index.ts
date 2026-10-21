import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadController.php:20
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
export const download = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: download.url(args, options),
    method: 'post',
})

download.definition = {
    methods: ["post"],
    url: '/x/cockpit/instance-keepsakes/{reference}/download',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadController.php:20
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
download.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return download.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadController.php:20
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
download.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: download.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadController.php:20
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
const downloadForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: download.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitInstanceKeepsakeDownloadController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitInstanceKeepsakeDownloadController.php:20
* @route '/x/cockpit/instance-keepsakes/{reference}/download'
*/
downloadForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: download.url(args, options),
    method: 'post',
})

download.form = downloadForm

const instanceKeepsakes = {
    download: Object.assign(download, download),
}

export default instanceKeepsakes