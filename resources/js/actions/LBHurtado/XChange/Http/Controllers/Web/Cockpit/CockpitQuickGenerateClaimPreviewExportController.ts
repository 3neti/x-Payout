import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
const CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7 = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7.url(args, options),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/claim-previews/{claimPreviewArtifact}/exports/{format}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7.url = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            claimPreviewArtifact: args[0],
            format: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        claimPreviewArtifact: typeof args.claimPreviewArtifact === 'object'
        ? args.claimPreviewArtifact.reference
        : args.claimPreviewArtifact,
        format: args.format,
    }

    return CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7.definition.url
            .replace('{claimPreviewArtifact}', parsedArgs.claimPreviewArtifact.toString())
            .replace('{format}', parsedArgs.format.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
const CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7Form = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7Form.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7Form.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7.form = CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
const CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6 = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6.url(args, options),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/exports/{format}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6.url = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            claimPreviewArtifact: args[0],
            format: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        claimPreviewArtifact: typeof args.claimPreviewArtifact === 'object'
        ? args.claimPreviewArtifact.reference
        : args.claimPreviewArtifact,
        format: args.format,
    }

    return CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6.definition.url
            .replace('{claimPreviewArtifact}', parsedArgs.claimPreviewArtifact.toString())
            .replace('{format}', parsedArgs.format.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
const CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6Form = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6Form.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewExportController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/exports/{format}'
*/
CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6Form.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, format: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, format: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6.form = CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewExportController::CockpitQuickGenerateClaimPreviewExportController, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `CockpitQuickGenerateClaimPreviewExportController['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const CockpitQuickGenerateClaimPreviewExportController = {
    '/x/auto-generate/claim-previews/{claimPreviewArtifact}/exports/{format}': CockpitQuickGenerateClaimPreviewExportController6ffe80f7e90c8c3197780818372dd7d7,
    '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/exports/{format}': CockpitQuickGenerateClaimPreviewExportControllerab8f149f7b06ce67bc9c7393079a07b6,
}

export default CockpitQuickGenerateClaimPreviewExportController