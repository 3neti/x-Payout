import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
const ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b.url(args, options),
    method: 'get',
})

ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/share-card/{sha256}.png',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b.url = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            code: args[0],
            sha256: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
        sha256: args.sha256,
    }

    return ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{sha256}', parsedArgs.sha256.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b.get = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b.head = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
const ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37bForm = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37bForm.get = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37bForm.head = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b.form = ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37bForm
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
const ClaimShareCardController5b23871d970405c4fd1348ed42263e55 = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimShareCardController5b23871d970405c4fd1348ed42263e55.url(args, options),
    method: 'get',
})

ClaimShareCardController5b23871d970405c4fd1348ed42263e55.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/share-card.png',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
ClaimShareCardController5b23871d970405c4fd1348ed42263e55.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ClaimShareCardController5b23871d970405c4fd1348ed42263e55.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
ClaimShareCardController5b23871d970405c4fd1348ed42263e55.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimShareCardController5b23871d970405c4fd1348ed42263e55.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
ClaimShareCardController5b23871d970405c4fd1348ed42263e55.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClaimShareCardController5b23871d970405c4fd1348ed42263e55.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
const ClaimShareCardController5b23871d970405c4fd1348ed42263e55Form = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimShareCardController5b23871d970405c4fd1348ed42263e55.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
ClaimShareCardController5b23871d970405c4fd1348ed42263e55Form.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimShareCardController5b23871d970405c4fd1348ed42263e55.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card.png'
*/
ClaimShareCardController5b23871d970405c4fd1348ed42263e55Form.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimShareCardController5b23871d970405c4fd1348ed42263e55.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ClaimShareCardController5b23871d970405c4fd1348ed42263e55.form = ClaimShareCardController5b23871d970405c4fd1348ed42263e55Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::ClaimShareCardController, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `ClaimShareCardController['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const ClaimShareCardController = {
    '/x/claim/{code}/share-card/{sha256}.png': ClaimShareCardController04fb0ac5f18fbf38ab9d7edcc81ed37b,
    '/x/claim/{code}/share-card.png': ClaimShareCardController5b23871d970405c4fd1348ed42263e55,
}

export default ClaimShareCardController