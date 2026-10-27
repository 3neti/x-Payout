import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitVoucherDetailPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitVoucherDetailPageController.php:27
* @route '/x/cockpit/pay-codes/{code}'
*/
const CockpitVoucherDetailPageController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitVoucherDetailPageController.url(args, options),
    method: 'get',
})

CockpitVoucherDetailPageController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/pay-codes/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitVoucherDetailPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitVoucherDetailPageController.php:27
* @route '/x/cockpit/pay-codes/{code}'
*/
CockpitVoucherDetailPageController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CockpitVoucherDetailPageController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitVoucherDetailPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitVoucherDetailPageController.php:27
* @route '/x/cockpit/pay-codes/{code}'
*/
CockpitVoucherDetailPageController.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitVoucherDetailPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitVoucherDetailPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitVoucherDetailPageController.php:27
* @route '/x/cockpit/pay-codes/{code}'
*/
CockpitVoucherDetailPageController.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitVoucherDetailPageController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitVoucherDetailPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitVoucherDetailPageController.php:27
* @route '/x/cockpit/pay-codes/{code}'
*/
const CockpitVoucherDetailPageControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitVoucherDetailPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitVoucherDetailPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitVoucherDetailPageController.php:27
* @route '/x/cockpit/pay-codes/{code}'
*/
CockpitVoucherDetailPageControllerForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitVoucherDetailPageController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitVoucherDetailPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitVoucherDetailPageController.php:27
* @route '/x/cockpit/pay-codes/{code}'
*/
CockpitVoucherDetailPageControllerForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitVoucherDetailPageController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitVoucherDetailPageController.form = CockpitVoucherDetailPageControllerForm

export default CockpitVoucherDetailPageController