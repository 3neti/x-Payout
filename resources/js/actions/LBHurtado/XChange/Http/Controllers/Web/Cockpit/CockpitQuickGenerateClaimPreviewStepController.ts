import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
const CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00 = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00.url(args, options),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00.url = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions) => {
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

    return CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00.definition.url
            .replace('{claimPreviewArtifact}', parsedArgs.claimPreviewArtifact.toString())
            .replace('{step}', parsedArgs.step.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
const CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00Form = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00Form.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00Form.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00.form = CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
const CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582 = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582.url(args, options),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/steps/{step}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582.url = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions) => {
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

    return CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582.definition.url
            .replace('{claimPreviewArtifact}', parsedArgs.claimPreviewArtifact.toString())
            .replace('{step}', parsedArgs.step.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
const CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582Form = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582Form.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582Form.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582.form = CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::CockpitQuickGenerateClaimPreviewStepController, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `CockpitQuickGenerateClaimPreviewStepController['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const CockpitQuickGenerateClaimPreviewStepController = {
    '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}': CockpitQuickGenerateClaimPreviewStepController0bd1ac51d7ea1bc9c75445c40f3fdd00,
    '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/steps/{step}': CockpitQuickGenerateClaimPreviewStepControllerced80bcf2bfc844e0e965671cffca582,
}

export default CockpitQuickGenerateClaimPreviewStepController