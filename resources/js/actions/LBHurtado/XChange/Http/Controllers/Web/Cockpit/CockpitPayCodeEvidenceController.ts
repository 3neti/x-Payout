import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEvidenceController.php:33
* @route '/x/cockpit/pay-codes/{code}/evidence/{source}/{evidence}'
*/
const CockpitPayCodeEvidenceController = (args: { code: string | number, source: string | number, evidence: string | number } | [code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitPayCodeEvidenceController.url(args, options),
    method: 'get',
})

CockpitPayCodeEvidenceController.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/pay-codes/{code}/evidence/{source}/{evidence}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEvidenceController.php:33
* @route '/x/cockpit/pay-codes/{code}/evidence/{source}/{evidence}'
*/
CockpitPayCodeEvidenceController.url = (args: { code: string | number, source: string | number, evidence: string | number } | [code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            code: args[0],
            source: args[1],
            evidence: args[2],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
        source: args.source,
        evidence: args.evidence,
    }

    return CockpitPayCodeEvidenceController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{source}', parsedArgs.source.toString())
            .replace('{evidence}', parsedArgs.evidence.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEvidenceController.php:33
* @route '/x/cockpit/pay-codes/{code}/evidence/{source}/{evidence}'
*/
CockpitPayCodeEvidenceController.get = (args: { code: string | number, source: string | number, evidence: string | number } | [code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CockpitPayCodeEvidenceController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEvidenceController.php:33
* @route '/x/cockpit/pay-codes/{code}/evidence/{source}/{evidence}'
*/
CockpitPayCodeEvidenceController.head = (args: { code: string | number, source: string | number, evidence: string | number } | [code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CockpitPayCodeEvidenceController.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEvidenceController.php:33
* @route '/x/cockpit/pay-codes/{code}/evidence/{source}/{evidence}'
*/
const CockpitPayCodeEvidenceControllerForm = (args: { code: string | number, source: string | number, evidence: string | number } | [code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPayCodeEvidenceController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEvidenceController.php:33
* @route '/x/cockpit/pay-codes/{code}/evidence/{source}/{evidence}'
*/
CockpitPayCodeEvidenceControllerForm.get = (args: { code: string | number, source: string | number, evidence: string | number } | [code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPayCodeEvidenceController.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeEvidenceController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeEvidenceController.php:33
* @route '/x/cockpit/pay-codes/{code}/evidence/{source}/{evidence}'
*/
CockpitPayCodeEvidenceControllerForm.head = (args: { code: string | number, source: string | number, evidence: string | number } | [code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CockpitPayCodeEvidenceController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CockpitPayCodeEvidenceController.form = CockpitPayCodeEvidenceControllerForm

export default CockpitPayCodeEvidenceController