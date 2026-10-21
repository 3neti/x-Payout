import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see vendor/3neti/emi-paynamics/routes/constellation.php:6
* @route '/webhooks/constellation'
*/
export const webhook = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(options),
    method: 'post',
})

webhook.definition = {
    methods: ["post"],
    url: '/webhooks/constellation',
} satisfies RouteDefinition<["post"]>

/**
* @see vendor/3neti/emi-paynamics/routes/constellation.php:6
* @route '/webhooks/constellation'
*/
webhook.url = (options?: RouteQueryOptions) => {
    return webhook.definition.url + queryParams(options)
}

/**
* @see vendor/3neti/emi-paynamics/routes/constellation.php:6
* @route '/webhooks/constellation'
*/
webhook.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(options),
    method: 'post',
})

/**
* @see vendor/3neti/emi-paynamics/routes/constellation.php:6
* @route '/webhooks/constellation'
*/
const webhookForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: webhook.url(options),
    method: 'post',
})

/**
* @see vendor/3neti/emi-paynamics/routes/constellation.php:6
* @route '/webhooks/constellation'
*/
webhookForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: webhook.url(options),
    method: 'post',
})

webhook.form = webhookForm

const constellation = {
    webhook: Object.assign(webhook, webhook),
}

export default constellation