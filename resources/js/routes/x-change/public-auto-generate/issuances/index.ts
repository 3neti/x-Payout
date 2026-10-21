import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceVoucherActionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceVoucherActionController.php:15
* @route '/x/auto-generate/issuances/{order}/action'
*/
export const action = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: action.url(args, options),
    method: 'post',
})

action.definition = {
    methods: ["post"],
    url: '/x/auto-generate/issuances/{order}/action',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceVoucherActionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceVoucherActionController.php:15
* @route '/x/auto-generate/issuances/{order}/action'
*/
action.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { order: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.reference
        : args.order,
    }

    return action.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceVoucherActionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceVoucherActionController.php:15
* @route '/x/auto-generate/issuances/{order}/action'
*/
action.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: action.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceVoucherActionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceVoucherActionController.php:15
* @route '/x/auto-generate/issuances/{order}/action'
*/
const actionForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: action.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceVoucherActionController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceVoucherActionController.php:15
* @route '/x/auto-generate/issuances/{order}/action'
*/
actionForm.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: action.url(args, options),
    method: 'post',
})

action.form = actionForm

const issuances = {
    action: Object.assign(action, action),
}

export default issuances