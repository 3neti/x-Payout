import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
const CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6 = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6.url(args, options),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/claim-previews/{claimPreviewArtifact}/frames/{step}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6.url = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            claimPreviewArtifact: args[0],
            step: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        claimPreviewArtifact: typeof args.claimPreviewArtifact === 'object'
        ? args.claimPreviewArtifact.reference
        : args.claimPreviewArtifact,
        step: args.step,
    }

    return CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6.definition.url
            .replace('{claimPreviewArtifact}', parsedArgs.claimPreviewArtifact.toString())
            .replace('{step}', parsedArgs.step.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
const CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6Form = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6Form.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6Form.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6.form = CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
const CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647 = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647.url(args, options),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647.url = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            claimPreviewArtifact: args[0],
            step: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        claimPreviewArtifact: typeof args.claimPreviewArtifact === 'object'
        ? args.claimPreviewArtifact.reference
        : args.claimPreviewArtifact,
        step: args.step,
    }

    return CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647.definition.url
            .replace('{claimPreviewArtifact}', parsedArgs.claimPreviewArtifact.toString())
            .replace('{step}', parsedArgs.step.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
const CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647Form = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647Form.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647Form.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647.form = CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::CockpitQuickGenerateClaimPreviewFrameController, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `CockpitQuickGenerateClaimPreviewFrameController['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const CockpitQuickGenerateClaimPreviewFrameController = {
    '/x/auto-generate/claim-previews/{claimPreviewArtifact}/frames/{step}': CockpitQuickGenerateClaimPreviewFrameController4097a60b4d9e958fc4b9140b5f5d32b6,
    '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}': CockpitQuickGenerateClaimPreviewFrameControlleraa0aee6683905eaaf7378f91ea875647,
}

export default CockpitQuickGenerateClaimPreviewFrameController