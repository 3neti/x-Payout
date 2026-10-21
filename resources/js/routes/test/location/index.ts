import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see vendor/3neti/form-handler-location/routes/test.php:25
* @route '/test/location/start'
*/
export const start = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start.url(options),
    method: 'get',
})

start.definition = {
    methods: ["get","head"],
    url: '/test/location/start',
} satisfies RouteDefinition<["get","head"]>

/**
* @see vendor/3neti/form-handler-location/routes/test.php:25
* @route '/test/location/start'
*/
start.url = (options?: RouteQueryOptions) => {
    return start.definition.url + queryParams(options)
}

/**
* @see vendor/3neti/form-handler-location/routes/test.php:25
* @route '/test/location/start'
*/
start.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/form-handler-location/routes/test.php:25
* @route '/test/location/start'
*/
start.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: start.url(options),
    method: 'head',
})

/**
* @see vendor/3neti/form-handler-location/routes/test.php:25
* @route '/test/location/start'
*/
const startForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/form-handler-location/routes/test.php:25
* @route '/test/location/start'
*/
startForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/form-handler-location/routes/test.php:25
* @route '/test/location/start'
*/
startForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

start.form = startForm

/**
* @see vendor/3neti/form-handler-location/routes/test.php:61
* @route '/test/location/callback'
*/
export const callback = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: callback.url(options),
    method: 'post',
})

callback.definition = {
    methods: ["post"],
    url: '/test/location/callback',
} satisfies RouteDefinition<["post"]>

/**
* @see vendor/3neti/form-handler-location/routes/test.php:61
* @route '/test/location/callback'
*/
callback.url = (options?: RouteQueryOptions) => {
    return callback.definition.url + queryParams(options)
}

/**
* @see vendor/3neti/form-handler-location/routes/test.php:61
* @route '/test/location/callback'
*/
callback.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: callback.url(options),
    method: 'post',
})

/**
* @see vendor/3neti/form-handler-location/routes/test.php:61
* @route '/test/location/callback'
*/
const callbackForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: callback.url(options),
    method: 'post',
})

/**
* @see vendor/3neti/form-handler-location/routes/test.php:61
* @route '/test/location/callback'
*/
callbackForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: callback.url(options),
    method: 'post',
})

callback.form = callbackForm

/**
* @see vendor/3neti/form-handler-location/routes/test.php:75
* @route '/test/location/cancelled'
*/
export const cancelled = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancelled.url(options),
    method: 'post',
})

cancelled.definition = {
    methods: ["post"],
    url: '/test/location/cancelled',
} satisfies RouteDefinition<["post"]>

/**
* @see vendor/3neti/form-handler-location/routes/test.php:75
* @route '/test/location/cancelled'
*/
cancelled.url = (options?: RouteQueryOptions) => {
    return cancelled.definition.url + queryParams(options)
}

/**
* @see vendor/3neti/form-handler-location/routes/test.php:75
* @route '/test/location/cancelled'
*/
cancelled.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancelled.url(options),
    method: 'post',
})

/**
* @see vendor/3neti/form-handler-location/routes/test.php:75
* @route '/test/location/cancelled'
*/
const cancelledForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancelled.url(options),
    method: 'post',
})

/**
* @see vendor/3neti/form-handler-location/routes/test.php:75
* @route '/test/location/cancelled'
*/
cancelledForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancelled.url(options),
    method: 'post',
})

cancelled.form = cancelledForm

/**
* @see vendor/3neti/form-handler-location/routes/test.php:88
* @route '/test/location'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/test/location',
} satisfies RouteDefinition<["get","head"]>

/**
* @see vendor/3neti/form-handler-location/routes/test.php:88
* @route '/test/location'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see vendor/3neti/form-handler-location/routes/test.php:88
* @route '/test/location'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/form-handler-location/routes/test.php:88
* @route '/test/location'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see vendor/3neti/form-handler-location/routes/test.php:88
* @route '/test/location'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/form-handler-location/routes/test.php:88
* @route '/test/location'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see vendor/3neti/form-handler-location/routes/test.php:88
* @route '/test/location'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const location = {
    start: Object.assign(start, start),
    callback: Object.assign(callback, callback),
    cancelled: Object.assign(cancelled, cancelled),
    index: Object.assign(index, index),
}

export default location