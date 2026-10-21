import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
export const artifact = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: artifact.url(args, options),
    method: 'get',
})

artifact.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/share-card/{sha256}.png',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
artifact.url = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions) => {
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

    return artifact.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{sha256}', parsedArgs.sha256.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
artifact.get = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: artifact.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
artifact.head = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: artifact.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
const artifactForm = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: artifact.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
artifactForm.get = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: artifact.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimShareCardController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimShareCardController.php:16
* @route '/x/claim/{code}/share-card/{sha256}.png'
*/
artifactForm.head = (args: { code: string | number, sha256: string | number } | [code: string | number, sha256: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: artifact.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

artifact.form = artifactForm
