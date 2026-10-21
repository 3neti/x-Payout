import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingDestinationController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingDestinationController.php:14
* @route '/x/cockpit/accounts/providers/{provider}/funding-destination'
*/
const CockpitFundingDestinationController = (args: { provider: string | number } | [provider: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: CockpitFundingDestinationController.url(args, options),
    method: 'patch',
})

CockpitFundingDestinationController.definition = {
    methods: ["patch"],
    url: '/x/cockpit/accounts/providers/{provider}/funding-destination',
} satisfies RouteDefinition<["patch"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingDestinationController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingDestinationController.php:14
* @route '/x/cockpit/accounts/providers/{provider}/funding-destination'
*/
CockpitFundingDestinationController.url = (args: { provider: string | number } | [provider: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { provider: args }
    }

    if (Array.isArray(args)) {
        args = {
            provider: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        provider: args.provider,
    }

    return CockpitFundingDestinationController.definition.url
            .replace('{provider}', parsedArgs.provider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingDestinationController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingDestinationController.php:14
* @route '/x/cockpit/accounts/providers/{provider}/funding-destination'
*/
CockpitFundingDestinationController.patch = (args: { provider: string | number } | [provider: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: CockpitFundingDestinationController.url(args, options),
    method: 'patch',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingDestinationController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingDestinationController.php:14
* @route '/x/cockpit/accounts/providers/{provider}/funding-destination'
*/
const CockpitFundingDestinationControllerForm = (args: { provider: string | number } | [provider: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingDestinationController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitFundingDestinationController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitFundingDestinationController.php:14
* @route '/x/cockpit/accounts/providers/{provider}/funding-destination'
*/
CockpitFundingDestinationControllerForm.patch = (args: { provider: string | number } | [provider: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitFundingDestinationController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

CockpitFundingDestinationController.form = CockpitFundingDestinationControllerForm

export default CockpitFundingDestinationController