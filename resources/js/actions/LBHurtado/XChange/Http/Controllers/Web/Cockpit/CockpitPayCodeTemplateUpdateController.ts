import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTemplateUpdateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTemplateUpdateController.php:16
* @route '/x/cockpit/pay-code-templates/{template}'
*/
const CockpitPayCodeTemplateUpdateController = (args: { template: string | number | { reference: string | number } } | [template: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: CockpitPayCodeTemplateUpdateController.url(args, options),
    method: 'patch',
})

CockpitPayCodeTemplateUpdateController.definition = {
    methods: ["patch"],
    url: '/x/cockpit/pay-code-templates/{template}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTemplateUpdateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTemplateUpdateController.php:16
* @route '/x/cockpit/pay-code-templates/{template}'
*/
CockpitPayCodeTemplateUpdateController.url = (args: { template: string | number | { reference: string | number } } | [template: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { template: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { template: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            template: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        template: typeof args.template === 'object'
        ? args.template.reference
        : args.template,
    }

    return CockpitPayCodeTemplateUpdateController.definition.url
            .replace('{template}', parsedArgs.template.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTemplateUpdateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTemplateUpdateController.php:16
* @route '/x/cockpit/pay-code-templates/{template}'
*/
CockpitPayCodeTemplateUpdateController.patch = (args: { template: string | number | { reference: string | number } } | [template: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: CockpitPayCodeTemplateUpdateController.url(args, options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTemplateUpdateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTemplateUpdateController.php:16
* @route '/x/cockpit/pay-code-templates/{template}'
*/
const CockpitPayCodeTemplateUpdateControllerForm = (args: { template: string | number | { reference: string | number } } | [template: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodeTemplateUpdateController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTemplateUpdateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTemplateUpdateController.php:16
* @route '/x/cockpit/pay-code-templates/{template}'
*/
CockpitPayCodeTemplateUpdateControllerForm.patch = (args: { template: string | number | { reference: string | number } } | [template: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodeTemplateUpdateController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

CockpitPayCodeTemplateUpdateController.form = CockpitPayCodeTemplateUpdateControllerForm

export default CockpitPayCodeTemplateUpdateController