import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
const ClaimExperienceController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimExperienceController.url(args, options),
    method: 'get',
})

ClaimExperienceController.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/experience',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
ClaimExperienceController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ClaimExperienceController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
ClaimExperienceController.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimExperienceController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
ClaimExperienceController.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClaimExperienceController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
const ClaimExperienceControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimExperienceController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
ClaimExperienceControllerForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimExperienceController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimExperienceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimExperienceController.php:15
* @route '/x/claim/{code}/experience'
*/
ClaimExperienceControllerForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimExperienceController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ClaimExperienceController.form = ClaimExperienceControllerForm

export default ClaimExperienceController