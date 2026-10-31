import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import claimPreviews from './claim-previews'
import batches from './batches'
import checkouts from './checkouts'
import issuances from './issuances'
import fundingOrders from './funding-orders'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateInterpretController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateInterpretController.php:16
* @route '/x/auto-generate/interpret'
*/
export const interpret = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: interpret.url(options),
    method: 'post',
})

interpret.definition = {
    methods: ["post"],
    url: '/x/auto-generate/interpret',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateInterpretController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateInterpretController.php:16
* @route '/x/auto-generate/interpret'
*/
interpret.url = (options?: RouteQueryOptions) => {
    return interpret.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateInterpretController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateInterpretController.php:16
* @route '/x/auto-generate/interpret'
*/
interpret.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: interpret.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateInterpretController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateInterpretController.php:16
* @route '/x/auto-generate/interpret'
*/
const interpretForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: interpret.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateInterpretController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateInterpretController.php:16
* @route '/x/auto-generate/interpret'
*/
interpretForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: interpret.url(options),
    method: 'post',
})

interpret.form = interpretForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:39
* @route '/x/auto-generate'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:39
* @route '/x/auto-generate'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:39
* @route '/x/auto-generate'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:39
* @route '/x/auto-generate'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:39
* @route '/x/auto-generate'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:39
* @route '/x/auto-generate'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicAutoGeneratePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicAutoGeneratePageController.php:39
* @route '/x/auto-generate'
*/
showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateMutationRouteShellController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateMutationRouteShellController.php:57
* @route '/x/auto-generate'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/auto-generate',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateMutationRouteShellController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateMutationRouteShellController.php:57
* @route '/x/auto-generate'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateMutationRouteShellController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateMutationRouteShellController.php:57
* @route '/x/auto-generate'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateMutationRouteShellController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateMutationRouteShellController.php:57
* @route '/x/auto-generate'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitQuickGenerateMutationRouteShellController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitQuickGenerateMutationRouteShellController.php:57
* @route '/x/auto-generate'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
export const recover = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recover.url(args, options),
    method: 'get',
})

recover.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/recover/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
recover.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return recover.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
recover.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recover.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
recover.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recover.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
const recoverForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: recover.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
recoverForm.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: recover.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceRecoveryController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceRecoveryController.php:17
* @route '/x/auto-generate/recover/{order}'
*/
recoverForm.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: recover.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

recover.form = recoverForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
export const receipt = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: receipt.url(args, options),
    method: 'get',
})

receipt.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/receipts/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
receipt.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return receipt.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
receipt.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: receipt.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
receipt.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: receipt.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
const receiptForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: receipt.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
receiptForm.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: receipt.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuanceReceiptController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuanceReceiptController.php:20
* @route '/x/auto-generate/receipts/{order}'
*/
receiptForm.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: receipt.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

receipt.form = receiptForm

const publicAutoGenerate = {
    claimPreviews: Object.assign(claimPreviews, claimPreviews),
    batches: Object.assign(batches, batches),
    interpret: Object.assign(interpret, interpret),
    show: Object.assign(show, show),
    store: Object.assign(store, store),
    checkouts: Object.assign(checkouts, checkouts),
    recover: Object.assign(recover, recover),
    receipt: Object.assign(receipt, receipt),
    issuances: Object.assign(issuances, issuances),
    fundingOrders: Object.assign(fundingOrders, fundingOrders),
}

export default publicAutoGenerate