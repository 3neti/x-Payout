import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTerminalStateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTerminalStateController.php:21
* @route '/x/cockpit/pay-codes/{code}/terminal-actions'
*/
const CockpitPayCodeTerminalStateController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPayCodeTerminalStateController.url(args, options),
    method: 'post',
})

CockpitPayCodeTerminalStateController.definition = {
    methods: ["post"],
    url: '/x/cockpit/pay-codes/{code}/terminal-actions',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTerminalStateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTerminalStateController.php:21
* @route '/x/cockpit/pay-codes/{code}/terminal-actions'
*/
CockpitPayCodeTerminalStateController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return CockpitPayCodeTerminalStateController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTerminalStateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTerminalStateController.php:21
* @route '/x/cockpit/pay-codes/{code}/terminal-actions'
*/
CockpitPayCodeTerminalStateController.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitPayCodeTerminalStateController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTerminalStateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTerminalStateController.php:21
* @route '/x/cockpit/pay-codes/{code}/terminal-actions'
*/
const CockpitPayCodeTerminalStateControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodeTerminalStateController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitPayCodeTerminalStateController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitPayCodeTerminalStateController.php:21
* @route '/x/cockpit/pay-codes/{code}/terminal-actions'
*/
CockpitPayCodeTerminalStateControllerForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitPayCodeTerminalStateController.url(args, options),
    method: 'post',
})

CockpitPayCodeTerminalStateController.form = CockpitPayCodeTerminalStateControllerForm

export default CockpitPayCodeTerminalStateController