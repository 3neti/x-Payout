import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeStampController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeStampController.php:28
* @route '/x/cockpit/pay-codes/{code}/stamp/{size}/{sha256}.png'
*/
export const show = (args: { code: string | number, size: string | number, sha256: string | number } | [code: string | number, size: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/pay-codes/{code}/stamp/{size}/{sha256}.png',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeStampController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeStampController.php:28
* @route '/x/cockpit/pay-codes/{code}/stamp/{size}/{sha256}.png'
*/
show.url = (args: { code: string | number, size: string | number, sha256: string | number } | [code: string | number, size: string | number, sha256: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            code: args[0],
            size: args[1],
            sha256: args[2],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
        size: args.size,
        sha256: args.sha256,
    }

    return show.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{size}', parsedArgs.size.toString())
            .replace('{sha256}', parsedArgs.sha256.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeStampController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeStampController.php:28
* @route '/x/cockpit/pay-codes/{code}/stamp/{size}/{sha256}.png'
*/
show.get = (args: { code: string | number, size: string | number, sha256: string | number } | [code: string | number, size: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeStampController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeStampController.php:28
* @route '/x/cockpit/pay-codes/{code}/stamp/{size}/{sha256}.png'
*/
show.head = (args: { code: string | number, size: string | number, sha256: string | number } | [code: string | number, size: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeStampController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeStampController.php:28
* @route '/x/cockpit/pay-codes/{code}/stamp/{size}/{sha256}.png'
*/
const showForm = (args: { code: string | number, size: string | number, sha256: string | number } | [code: string | number, size: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeStampController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeStampController.php:28
* @route '/x/cockpit/pay-codes/{code}/stamp/{size}/{sha256}.png'
*/
showForm.get = (args: { code: string | number, size: string | number, sha256: string | number } | [code: string | number, size: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeStampController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeStampController.php:28
* @route '/x/cockpit/pay-codes/{code}/stamp/{size}/{sha256}.png'
*/
showForm.head = (args: { code: string | number, size: string | number, sha256: string | number } | [code: string | number, size: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const stamp = {
    show: Object.assign(show, show),
}

export default stamp