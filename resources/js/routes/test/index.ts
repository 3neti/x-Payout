import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import location from './location'
/**
* @see vendor/3neti/form-handler-otp/routes/test.php:9
* @route '/test/otp-handler'
*/
export const otpHandler = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: otpHandler.url(options),
    method: 'get',
})

otpHandler.definition = {
    methods: ["get","head"],
    url: '/test/otp-handler',
} satisfies RouteDefinition<["get","head"]>

/**
* @see vendor/3neti/form-handler-otp/routes/test.php:9
* @route '/test/otp-handler'
*/
otpHandler.url = (options?: RouteQueryOptions) => {
    return otpHandler.definition.url + queryParams(options)
}

/**
* @see vendor/3neti/form-handler-otp/routes/test.php:9
* @route '/test/otp-handler'
*/
otpHandler.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: otpHandler.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/form-handler-otp/routes/test.php:9
* @route '/test/otp-handler'
*/
otpHandler.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: otpHandler.url(options),
    method: 'head',
})

/**
* @see vendor/3neti/form-handler-otp/routes/test.php:9
* @route '/test/otp-handler'
*/
const otpHandlerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: otpHandler.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/form-handler-otp/routes/test.php:9
* @route '/test/otp-handler'
*/
otpHandlerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: otpHandler.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/form-handler-otp/routes/test.php:9
* @route '/test/otp-handler'
*/
otpHandlerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: otpHandler.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

otpHandler.form = otpHandlerForm

const test = {
    location: Object.assign(location, location),
    otpHandler: Object.assign(otpHandler, otpHandler),
}

export default test