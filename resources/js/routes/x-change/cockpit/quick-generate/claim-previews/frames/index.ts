import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
export const show = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
show.url = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{claimPreviewArtifact}', parsedArgs.claimPreviewArtifact.toString())
            .replace('{step}', parsedArgs.step.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
show.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
show.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
const showForm = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
showForm.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewFrameController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewFrameController.php:15
* @route '/x/cockpit/quick-generate/claim-previews/{claimPreviewArtifact}/frames/{step}'
*/
showForm.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const frames = {
    show: Object.assign(show, show),
}

export default frames