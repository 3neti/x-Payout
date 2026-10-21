import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDistributionWorkspacePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDistributionWorkspacePageController.php:17
* @route '/x/cockpit/pay-codes/{code}/distribution'
*/
const CockpitDistributionWorkspacePageController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitDistributionWorkspacePageController.url(args, options),
    method: 'get',
})

CockpitDistributionWorkspacePageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/pay-codes/{code}/distribution',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDistributionWorkspacePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDistributionWorkspacePageController.php:17
* @route '/x/cockpit/pay-codes/{code}/distribution'
*/
CockpitDistributionWorkspacePageController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CockpitDistributionWorkspacePageController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDistributionWorkspacePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDistributionWorkspacePageController.php:17
* @route '/x/cockpit/pay-codes/{code}/distribution'
*/
CockpitDistributionWorkspacePageController.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitDistributionWorkspacePageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDistributionWorkspacePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDistributionWorkspacePageController.php:17
* @route '/x/cockpit/pay-codes/{code}/distribution'
*/
CockpitDistributionWorkspacePageController.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitDistributionWorkspacePageController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDistributionWorkspacePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDistributionWorkspacePageController.php:17
* @route '/x/cockpit/pay-codes/{code}/distribution'
*/
const CockpitDistributionWorkspacePageControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitDistributionWorkspacePageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDistributionWorkspacePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDistributionWorkspacePageController.php:17
* @route '/x/cockpit/pay-codes/{code}/distribution'
*/
CockpitDistributionWorkspacePageControllerForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitDistributionWorkspacePageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitDistributionWorkspacePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitDistributionWorkspacePageController.php:17
* @route '/x/cockpit/pay-codes/{code}/distribution'
*/
CockpitDistributionWorkspacePageControllerForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitDistributionWorkspacePageController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitDistributionWorkspacePageController.form = CockpitDistributionWorkspacePageControllerForm

export default CockpitDistributionWorkspacePageController