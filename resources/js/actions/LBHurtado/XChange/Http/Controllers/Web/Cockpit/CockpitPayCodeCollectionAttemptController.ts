import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeCollectionAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeCollectionAttemptController.php:28
* @route '/x/cockpit/pay-codes/{code}/collection-attempts'
*/
const CockpitPayCodeCollectionAttemptController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPayCodeCollectionAttemptController.url(args, options),
    method: 'post',
})

CockpitPayCodeCollectionAttemptController.definition = {
    methods: ["post"],
    url: '/x/cockpit/pay-codes/{code}/collection-attempts',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeCollectionAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeCollectionAttemptController.php:28
* @route '/x/cockpit/pay-codes/{code}/collection-attempts'
*/
CockpitPayCodeCollectionAttemptController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CockpitPayCodeCollectionAttemptController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeCollectionAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeCollectionAttemptController.php:28
* @route '/x/cockpit/pay-codes/{code}/collection-attempts'
*/
CockpitPayCodeCollectionAttemptController.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPayCodeCollectionAttemptController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeCollectionAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeCollectionAttemptController.php:28
* @route '/x/cockpit/pay-codes/{code}/collection-attempts'
*/
const CockpitPayCodeCollectionAttemptControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodeCollectionAttemptController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeCollectionAttemptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeCollectionAttemptController.php:28
* @route '/x/cockpit/pay-codes/{code}/collection-attempts'
*/
CockpitPayCodeCollectionAttemptControllerForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodeCollectionAttemptController.url(args, options),
    method: 'post',
})

CockpitPayCodeCollectionAttemptController.form = CockpitPayCodeCollectionAttemptControllerForm

export default CockpitPayCodeCollectionAttemptController