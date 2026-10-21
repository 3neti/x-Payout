import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \LBHurtado\HyperVerge\Http\Controllers\WebhookController::__invoke
* @see vendor/3neti/hyperverge/src/Http/Controllers/WebhookController.php:11
* @route '/hyperverge/webhook'
*/
export const webhook = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(options),
    method: 'post',
})

webhook.definition = {
    methods: ["post"],
    url: '/hyperverge/webhook',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\HyperVerge\Http\Controllers\WebhookController::__invoke
* @see vendor/3neti/hyperverge/src/Http/Controllers/WebhookController.php:11
* @route '/hyperverge/webhook'
*/
webhook.url = (options?: RouteQueryOptions) => {
    return webhook.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\HyperVerge\Http\Controllers\WebhookController::__invoke
* @see vendor/3neti/hyperverge/src/Http/Controllers/WebhookController.php:11
* @route '/hyperverge/webhook'
*/
webhook.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\HyperVerge\Http\Controllers\WebhookController::__invoke
* @see vendor/3neti/hyperverge/src/Http/Controllers/WebhookController.php:11
* @route '/hyperverge/webhook'
*/
const webhookForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: webhook.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\HyperVerge\Http\Controllers\WebhookController::__invoke
* @see vendor/3neti/hyperverge/src/Http/Controllers/WebhookController.php:11
* @route '/hyperverge/webhook'
*/
webhookForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: webhook.url(options),
    method: 'post',
})

webhook.form = webhookForm

const hyperverge = {
    webhook: Object.assign(webhook, webhook),
}

export default hyperverge