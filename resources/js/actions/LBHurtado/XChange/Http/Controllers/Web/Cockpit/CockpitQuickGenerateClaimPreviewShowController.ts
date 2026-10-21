import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}'
*/
const CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a.url(args, options),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/claim-previews/{claimPreviewArtifact}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}'
*/
CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a.url = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { claimPreviewArtifact: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { claimPreviewArtifact: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            claimPreviewArtifact: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        claimPreviewArtifact: typeof args.claimPreviewArtifact === 'object'
        ? args.claimPreviewArtifact.reference
        : args.claimPreviewArtifact,
    }

    return CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a.definition.url
            .replace('{claimPreviewArtifact}', parsedArgs.claimPreviewArtifact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}'
*/
CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a.get = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}'
*/
CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a.head = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}'
*/
const CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1aForm = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}'
*/
CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1aForm.get = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}'
*/
CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1aForm.head = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a.form = CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1aForm
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}'
*/
const CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791 = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791.url(args, options),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}'
*/
CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791.url = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { claimPreviewArtifact: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { claimPreviewArtifact: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            claimPreviewArtifact: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        claimPreviewArtifact: typeof args.claimPreviewArtifact === 'object'
        ? args.claimPreviewArtifact.reference
        : args.claimPreviewArtifact,
    }

    return CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791.definition.url
            .replace('{claimPreviewArtifact}', parsedArgs.claimPreviewArtifact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}'
*/
CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791.get = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}'
*/
CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791.head = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}'
*/
const CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791Form = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}'
*/
CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791Form.get = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewShowController.php:17
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}'
*/
CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791Form.head = (args: { claimPreviewArtifact: string | number | { reference: string | number } } | [claimPreviewArtifact: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791.form = CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewShowController::CockpitQuickGenerateClaimPreviewShowController, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `CockpitQuickGenerateClaimPreviewShowController['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const CockpitQuickGenerateClaimPreviewShowController = {
    '/x/auto-generate/claim-previews/{claimPreviewArtifact}': CockpitQuickGenerateClaimPreviewShowController3291a813622507aa4094617d64fc7d1a,
    '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}': CockpitQuickGenerateClaimPreviewShowController177c0df7d628c73f3842b7a02d9fb791,
}

export default CockpitQuickGenerateClaimPreviewShowController