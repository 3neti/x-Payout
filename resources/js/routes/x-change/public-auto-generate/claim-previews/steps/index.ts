import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
export const show = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
show.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
show.head = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
const showForm = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
*/
showForm.get = (args: { claimPreviewArtifact: string | number | { reference: string | number }, step: string | number } | [claimPreviewArtifact: string | number | { reference: string | number }, step: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateClaimPreviewStepController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateClaimPreviewStepController.php:18
* @route '/x/auto-generate/claim-previews/{claimPreviewArtifact}/steps/{step}'
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

const steps = {
    show: Object.assign(show, show),
}

export default steps