import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/operations/pricing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:30
* @route '/x/operations/pricing'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:51
* @route '/x/operations/pricing/template'
*/
export const template = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

template.definition = {
    methods: ["get","head"],
    url: '/x/operations/pricing/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:51
* @route '/x/operations/pricing/template'
*/
template.url = (options?: RouteQueryOptions) => {
    return template.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:51
* @route '/x/operations/pricing/template'
*/
template.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:51
* @route '/x/operations/pricing/template'
*/
template.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: template.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:51
* @route '/x/operations/pricing/template'
*/
const templateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:51
* @route '/x/operations/pricing/template'
*/
templateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:51
* @route '/x/operations/pricing/template'
*/
templateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

template.form = templateForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:89
* @route '/x/operations/pricing'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/x/operations/pricing',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:89
* @route '/x/operations/pricing'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:89
* @route '/x/operations/pricing'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:89
* @route '/x/operations/pricing'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Checkout\OperationsPricingController::update
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Checkout/OperationsPricingController.php:89
* @route '/x/operations/pricing'
*/
updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

update.form = updateForm

const OperationsPricingController = { show, template, update }

export default OperationsPricingController