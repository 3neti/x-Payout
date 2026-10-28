import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
const ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.url(options),
    method: 'get',
})

ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.definition = {
    methods: ["get","head"],
    url: '/x/claim',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.url = (options?: RouteQueryOptions) => {
    return ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
const ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.form = ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
const ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.url(options),
    method: 'post',
})

ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.definition = {
    methods: ["post"],
    url: '/x/claim',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.url = (options?: RouteQueryOptions) => {
    return ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
const ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim'
*/
ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.url(options),
    method: 'post',
})

ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90.form = ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim/{code}/flows'
*/
const ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8 = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8.url(args, options),
    method: 'post',
})

ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8.definition = {
    methods: ["post"],
    url: '/x/claim/{code}/flows',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim/{code}/flows'
*/
ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim/{code}/flows'
*/
ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim/{code}/flows'
*/
const ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8Form = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimStartController.php:58
* @route '/x/claim/{code}/flows'
*/
ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8Form.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8.url(args, options),
    method: 'post',
})

ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8.form = ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimStartController::ClaimStartController, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `ClaimStartController['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const ClaimStartController = {
    '/x/claim': ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90,
    '/x/claim': ClaimStartControllerb9fccb311e8eee9fe946e584ae3d2d90,
    '/x/claim/{code}/flows': ClaimStartControllere6d5e4fd27b34b40de04dd297c90d0c8,
}

export default ClaimStartController