import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \LBHurtado\HyperVerge\Http\Controllers\WebhookController::__invoke
* @see vendor/3neti/hyperverge/src/Http/Controllers/WebhookController.php:11
* @route '/hyperverge/webhook'
*/
const WebhookController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: WebhookController.url(options),
    method: 'post',
})

WebhookController.definition = {
    methods: ["post"],
    url: '/hyperverge/webhook',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\HyperVerge\Http\Controllers\WebhookController::__invoke
* @see vendor/3neti/hyperverge/src/Http/Controllers/WebhookController.php:11
* @route '/hyperverge/webhook'
*/
WebhookController.url = (options?: RouteQueryOptions) => {
    return WebhookController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\HyperVerge\Http\Controllers\WebhookController::__invoke
* @see vendor/3neti/hyperverge/src/Http/Controllers/WebhookController.php:11
* @route '/hyperverge/webhook'
*/
WebhookController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: WebhookController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\HyperVerge\Http\Controllers\WebhookController::__invoke
* @see vendor/3neti/hyperverge/src/Http/Controllers/WebhookController.php:11
* @route '/hyperverge/webhook'
*/
const WebhookControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: WebhookController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\HyperVerge\Http\Controllers\WebhookController::__invoke
* @see vendor/3neti/hyperverge/src/Http/Controllers/WebhookController.php:11
* @route '/hyperverge/webhook'
*/
WebhookControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: WebhookController.url(options),
    method: 'post',
})

WebhookController.form = WebhookControllerForm

export default WebhookController