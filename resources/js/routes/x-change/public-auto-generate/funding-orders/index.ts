import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
export const show = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/funding-orders/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
show.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
show.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
show.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
const showForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
showForm.get = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:30
* @route '/x/auto-generate/funding-orders/{order}'
*/
showForm.head = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutFundingMethodController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutFundingMethodController.php:18
* @route '/x/auto-generate/funding-orders/{order}/funding-method'
*/
export const fundingMethod = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: fundingMethod.url(args, options),
    method: 'post',
})

fundingMethod.definition = {
    methods: ["post"],
    url: '/x/auto-generate/funding-orders/{order}/funding-method',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutFundingMethodController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutFundingMethodController.php:18
* @route '/x/auto-generate/funding-orders/{order}/funding-method'
*/
fundingMethod.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return fundingMethod.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutFundingMethodController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutFundingMethodController.php:18
* @route '/x/auto-generate/funding-orders/{order}/funding-method'
*/
fundingMethod.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: fundingMethod.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutFundingMethodController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutFundingMethodController.php:18
* @route '/x/auto-generate/funding-orders/{order}/funding-method'
*/
const fundingMethodForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: fundingMethod.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicCheckoutFundingMethodController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicCheckoutFundingMethodController.php:18
* @route '/x/auto-generate/funding-orders/{order}/funding-method'
*/
fundingMethodForm.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: fundingMethod.url(args, options),
    method: 'post',
})

fundingMethod.form = fundingMethodForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/auto-generate/funding-orders/{order}/acknowledge'
*/
export const acknowledge = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: acknowledge.url(args, options),
    method: 'post',
})

acknowledge.definition = {
    methods: ["post"],
    url: '/x/auto-generate/funding-orders/{order}/acknowledge',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/auto-generate/funding-orders/{order}/acknowledge'
*/
acknowledge.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return acknowledge.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/auto-generate/funding-orders/{order}/acknowledge'
*/
acknowledge.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: acknowledge.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/auto-generate/funding-orders/{order}/acknowledge'
*/
const acknowledgeForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: acknowledge.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::acknowledge
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:40
* @route '/x/auto-generate/funding-orders/{order}/acknowledge'
*/
acknowledgeForm.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: acknowledge.url(args, options),
    method: 'post',
})

acknowledge.form = acknowledgeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verification
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/auto-generate/funding-orders/{order}/verification'
*/
export const verification = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verification.url(args, options),
    method: 'post',
})

verification.definition = {
    methods: ["post"],
    url: '/x/auto-generate/funding-orders/{order}/verification',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verification
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/auto-generate/funding-orders/{order}/verification'
*/
verification.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return verification.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verification
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/auto-generate/funding-orders/{order}/verification'
*/
verification.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verification.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verification
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/auto-generate/funding-orders/{order}/verification'
*/
const verificationForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verification.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::verification
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:76
* @route '/x/auto-generate/funding-orders/{order}/verification'
*/
verificationForm.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verification.url(args, options),
    method: 'post',
})

verification.form = verificationForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/auto-generate/funding-orders/{order}/retry-issuance'
*/
export const retryIssuance = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retryIssuance.url(args, options),
    method: 'post',
})

retryIssuance.definition = {
    methods: ["post"],
    url: '/x/auto-generate/funding-orders/{order}/retry-issuance',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/auto-generate/funding-orders/{order}/retry-issuance'
*/
retryIssuance.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return retryIssuance.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/auto-generate/funding-orders/{order}/retry-issuance'
*/
retryIssuance.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: retryIssuance.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/auto-generate/funding-orders/{order}/retry-issuance'
*/
const retryIssuanceForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retryIssuance.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::retryIssuance
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:130
* @route '/x/auto-generate/funding-orders/{order}/retry-issuance'
*/
retryIssuanceForm.post = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: retryIssuance.url(args, options),
    method: 'post',
})

retryIssuance.form = retryIssuanceForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/auto-generate/funding-orders/{order}'
*/
export const cancel = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: cancel.url(args, options),
    method: 'delete',
})

cancel.definition = {
    methods: ["delete"],
    url: '/x/auto-generate/funding-orders/{order}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/auto-generate/funding-orders/{order}'
*/
cancel.url = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
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

    return cancel.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/auto-generate/funding-orders/{order}'
*/
cancel.delete = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: cancel.url(args, options),
    method: 'delete',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/auto-generate/funding-orders/{order}'
*/
const cancelForm = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitOnDemandIssuanceFundingOrderController::cancel
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitOnDemandIssuanceFundingOrderController.php:149
* @route '/x/auto-generate/funding-orders/{order}'
*/
cancelForm.delete = (args: { order: string | number | { reference: string | number } } | [order: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

cancel.form = cancelForm

const fundingOrders = {
    show: Object.assign(show, show),
    fundingMethod: Object.assign(fundingMethod, fundingMethod),
    acknowledge: Object.assign(acknowledge, acknowledge),
    verification: Object.assign(verification, verification),
    retryIssuance: Object.assign(retryIssuance, retryIssuance),
    cancel: Object.assign(cancel, cancel),
}

export default fundingOrders