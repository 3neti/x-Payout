import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/operations/stored-value-collections'
*/
const page9a82a6103ec67aa630bd6abdc3c993b8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page9a82a6103ec67aa630bd6abdc3c993b8.url(options),
    method: 'get',
})

page9a82a6103ec67aa630bd6abdc3c993b8.definition = {
    methods: ["get","head"],
    url: '/x/operations/stored-value-collections',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/operations/stored-value-collections'
*/
page9a82a6103ec67aa630bd6abdc3c993b8.url = (options?: RouteQueryOptions) => {
    return page9a82a6103ec67aa630bd6abdc3c993b8.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/operations/stored-value-collections'
*/
page9a82a6103ec67aa630bd6abdc3c993b8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page9a82a6103ec67aa630bd6abdc3c993b8.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/operations/stored-value-collections'
*/
page9a82a6103ec67aa630bd6abdc3c993b8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: page9a82a6103ec67aa630bd6abdc3c993b8.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/operations/stored-value-collections'
*/
const page9a82a6103ec67aa630bd6abdc3c993b8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page9a82a6103ec67aa630bd6abdc3c993b8.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/operations/stored-value-collections'
*/
page9a82a6103ec67aa630bd6abdc3c993b8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page9a82a6103ec67aa630bd6abdc3c993b8.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/operations/stored-value-collections'
*/
page9a82a6103ec67aa630bd6abdc3c993b8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page9a82a6103ec67aa630bd6abdc3c993b8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

page9a82a6103ec67aa630bd6abdc3c993b8.form = page9a82a6103ec67aa630bd6abdc3c993b8Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
*/
const page49fad87093e887d8c433c9be72e4c686 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page49fad87093e887d8c433c9be72e4c686.url(options),
    method: 'get',
})

page49fad87093e887d8c433c9be72e4c686.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/stored-value-collections',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
*/
page49fad87093e887d8c433c9be72e4c686.url = (options?: RouteQueryOptions) => {
    return page49fad87093e887d8c433c9be72e4c686.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
*/
page49fad87093e887d8c433c9be72e4c686.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page49fad87093e887d8c433c9be72e4c686.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
*/
page49fad87093e887d8c433c9be72e4c686.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: page49fad87093e887d8c433c9be72e4c686.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
*/
const page49fad87093e887d8c433c9be72e4c686Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page49fad87093e887d8c433c9be72e4c686.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
*/
page49fad87093e887d8c433c9be72e4c686Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page49fad87093e887d8c433c9be72e4c686.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
*/
page49fad87093e887d8c433c9be72e4c686Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page49fad87093e887d8c433c9be72e4c686.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

page49fad87093e887d8c433c9be72e4c686.form = page49fad87093e887d8c433c9be72e4c686Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::page, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `page['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const page = {
    '/x/operations/stored-value-collections': page9a82a6103ec67aa630bd6abdc3c993b8,
    '/x/cockpit/stored-value-collections': page49fad87093e887d8c433c9be72e4c686,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/operations/stored-value-collections'
*/
const start9a82a6103ec67aa630bd6abdc3c993b8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start9a82a6103ec67aa630bd6abdc3c993b8.url(options),
    method: 'post',
})

start9a82a6103ec67aa630bd6abdc3c993b8.definition = {
    methods: ["post"],
    url: '/x/operations/stored-value-collections',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/operations/stored-value-collections'
*/
start9a82a6103ec67aa630bd6abdc3c993b8.url = (options?: RouteQueryOptions) => {
    return start9a82a6103ec67aa630bd6abdc3c993b8.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/operations/stored-value-collections'
*/
start9a82a6103ec67aa630bd6abdc3c993b8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start9a82a6103ec67aa630bd6abdc3c993b8.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/operations/stored-value-collections'
*/
const start9a82a6103ec67aa630bd6abdc3c993b8Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start9a82a6103ec67aa630bd6abdc3c993b8.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/operations/stored-value-collections'
*/
start9a82a6103ec67aa630bd6abdc3c993b8Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start9a82a6103ec67aa630bd6abdc3c993b8.url(options),
    method: 'post',
})

start9a82a6103ec67aa630bd6abdc3c993b8.form = start9a82a6103ec67aa630bd6abdc3c993b8Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/cockpit/stored-value-collections'
*/
const start49fad87093e887d8c433c9be72e4c686 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start49fad87093e887d8c433c9be72e4c686.url(options),
    method: 'post',
})

start49fad87093e887d8c433c9be72e4c686.definition = {
    methods: ["post"],
    url: '/x/cockpit/stored-value-collections',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/cockpit/stored-value-collections'
*/
start49fad87093e887d8c433c9be72e4c686.url = (options?: RouteQueryOptions) => {
    return start49fad87093e887d8c433c9be72e4c686.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/cockpit/stored-value-collections'
*/
start49fad87093e887d8c433c9be72e4c686.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start49fad87093e887d8c433c9be72e4c686.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/cockpit/stored-value-collections'
*/
const start49fad87093e887d8c433c9be72e4c686Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start49fad87093e887d8c433c9be72e4c686.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::start
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/cockpit/stored-value-collections'
*/
start49fad87093e887d8c433c9be72e4c686Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start49fad87093e887d8c433c9be72e4c686.url(options),
    method: 'post',
})

start49fad87093e887d8c433c9be72e4c686.form = start49fad87093e887d8c433c9be72e4c686Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::start, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `start['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const start = {
    '/x/operations/stored-value-collections': start9a82a6103ec67aa630bd6abdc3c993b8,
    '/x/cockpit/stored-value-collections': start49fad87093e887d8c433c9be72e4c686,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/operations/stored-value-collections/{reference}'
*/
const status7e0646b8163bcf65d316ca8038ff80b1 = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status7e0646b8163bcf65d316ca8038ff80b1.url(args, options),
    method: 'get',
})

status7e0646b8163bcf65d316ca8038ff80b1.definition = {
    methods: ["get","head"],
    url: '/x/operations/stored-value-collections/{reference}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/operations/stored-value-collections/{reference}'
*/
status7e0646b8163bcf65d316ca8038ff80b1.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reference: args }
    }

    if (Array.isArray(args)) {
        args = {
            reference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reference: args.reference,
    }

    return status7e0646b8163bcf65d316ca8038ff80b1.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/operations/stored-value-collections/{reference}'
*/
status7e0646b8163bcf65d316ca8038ff80b1.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status7e0646b8163bcf65d316ca8038ff80b1.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/operations/stored-value-collections/{reference}'
*/
status7e0646b8163bcf65d316ca8038ff80b1.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status7e0646b8163bcf65d316ca8038ff80b1.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/operations/stored-value-collections/{reference}'
*/
const status7e0646b8163bcf65d316ca8038ff80b1Form = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status7e0646b8163bcf65d316ca8038ff80b1.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/operations/stored-value-collections/{reference}'
*/
status7e0646b8163bcf65d316ca8038ff80b1Form.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status7e0646b8163bcf65d316ca8038ff80b1.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/operations/stored-value-collections/{reference}'
*/
status7e0646b8163bcf65d316ca8038ff80b1Form.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status7e0646b8163bcf65d316ca8038ff80b1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

status7e0646b8163bcf65d316ca8038ff80b1.form = status7e0646b8163bcf65d316ca8038ff80b1Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
const statusa5cb2d200047c86b57fc292d661025ee = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statusa5cb2d200047c86b57fc292d661025ee.url(args, options),
    method: 'get',
})

statusa5cb2d200047c86b57fc292d661025ee.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/stored-value-collections/{reference}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
statusa5cb2d200047c86b57fc292d661025ee.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reference: args }
    }

    if (Array.isArray(args)) {
        args = {
            reference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reference: args.reference,
    }

    return statusa5cb2d200047c86b57fc292d661025ee.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
statusa5cb2d200047c86b57fc292d661025ee.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statusa5cb2d200047c86b57fc292d661025ee.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
statusa5cb2d200047c86b57fc292d661025ee.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: statusa5cb2d200047c86b57fc292d661025ee.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
const statusa5cb2d200047c86b57fc292d661025eeForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: statusa5cb2d200047c86b57fc292d661025ee.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
statusa5cb2d200047c86b57fc292d661025eeForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: statusa5cb2d200047c86b57fc292d661025ee.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
statusa5cb2d200047c86b57fc292d661025eeForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: statusa5cb2d200047c86b57fc292d661025ee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

statusa5cb2d200047c86b57fc292d661025ee.form = statusa5cb2d200047c86b57fc292d661025eeForm

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::status, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `status['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const status = {
    '/x/operations/stored-value-collections/{reference}': status7e0646b8163bcf65d316ca8038ff80b1,
    '/x/cockpit/stored-value-collections/{reference}': statusa5cb2d200047c86b57fc292d661025ee,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/operations/stored-value-collections/{reference}/verification'
*/
const verify6da1233e45b0ad37d18fafa186bc86a0 = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify6da1233e45b0ad37d18fafa186bc86a0.url(args, options),
    method: 'post',
})

verify6da1233e45b0ad37d18fafa186bc86a0.definition = {
    methods: ["post"],
    url: '/x/operations/stored-value-collections/{reference}/verification',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/operations/stored-value-collections/{reference}/verification'
*/
verify6da1233e45b0ad37d18fafa186bc86a0.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reference: args }
    }

    if (Array.isArray(args)) {
        args = {
            reference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reference: args.reference,
    }

    return verify6da1233e45b0ad37d18fafa186bc86a0.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/operations/stored-value-collections/{reference}/verification'
*/
verify6da1233e45b0ad37d18fafa186bc86a0.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify6da1233e45b0ad37d18fafa186bc86a0.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/operations/stored-value-collections/{reference}/verification'
*/
const verify6da1233e45b0ad37d18fafa186bc86a0Form = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify6da1233e45b0ad37d18fafa186bc86a0.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/operations/stored-value-collections/{reference}/verification'
*/
verify6da1233e45b0ad37d18fafa186bc86a0Form.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify6da1233e45b0ad37d18fafa186bc86a0.url(args, options),
    method: 'post',
})

verify6da1233e45b0ad37d18fafa186bc86a0.form = verify6da1233e45b0ad37d18fafa186bc86a0Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/cockpit/stored-value-collections/{reference}/verification'
*/
const verify436bd1d1315a9501ea8e3662c0737c1f = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify436bd1d1315a9501ea8e3662c0737c1f.url(args, options),
    method: 'post',
})

verify436bd1d1315a9501ea8e3662c0737c1f.definition = {
    methods: ["post"],
    url: '/x/cockpit/stored-value-collections/{reference}/verification',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/cockpit/stored-value-collections/{reference}/verification'
*/
verify436bd1d1315a9501ea8e3662c0737c1f.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reference: args }
    }

    if (Array.isArray(args)) {
        args = {
            reference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reference: args.reference,
    }

    return verify436bd1d1315a9501ea8e3662c0737c1f.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/cockpit/stored-value-collections/{reference}/verification'
*/
verify436bd1d1315a9501ea8e3662c0737c1f.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify436bd1d1315a9501ea8e3662c0737c1f.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/cockpit/stored-value-collections/{reference}/verification'
*/
const verify436bd1d1315a9501ea8e3662c0737c1fForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify436bd1d1315a9501ea8e3662c0737c1f.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/cockpit/stored-value-collections/{reference}/verification'
*/
verify436bd1d1315a9501ea8e3662c0737c1fForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify436bd1d1315a9501ea8e3662c0737c1f.url(args, options),
    method: 'post',
})

verify436bd1d1315a9501ea8e3662c0737c1f.form = verify436bd1d1315a9501ea8e3662c0737c1fForm

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `verify['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const verify = {
    '/x/operations/stored-value-collections/{reference}/verification': verify6da1233e45b0ad37d18fafa186bc86a0,
    '/x/cockpit/stored-value-collections/{reference}/verification': verify436bd1d1315a9501ea8e3662c0737c1f,
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/operations/stored-value-collections/{reference}/commit'
*/
const commitf2a9c1cc6a7a4c9009bbb5470c9c9e16 = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: commitf2a9c1cc6a7a4c9009bbb5470c9c9e16.url(args, options),
    method: 'post',
})

commitf2a9c1cc6a7a4c9009bbb5470c9c9e16.definition = {
    methods: ["post"],
    url: '/x/operations/stored-value-collections/{reference}/commit',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/operations/stored-value-collections/{reference}/commit'
*/
commitf2a9c1cc6a7a4c9009bbb5470c9c9e16.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reference: args }
    }

    if (Array.isArray(args)) {
        args = {
            reference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reference: args.reference,
    }

    return commitf2a9c1cc6a7a4c9009bbb5470c9c9e16.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/operations/stored-value-collections/{reference}/commit'
*/
commitf2a9c1cc6a7a4c9009bbb5470c9c9e16.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: commitf2a9c1cc6a7a4c9009bbb5470c9c9e16.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/operations/stored-value-collections/{reference}/commit'
*/
const commitf2a9c1cc6a7a4c9009bbb5470c9c9e16Form = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: commitf2a9c1cc6a7a4c9009bbb5470c9c9e16.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/operations/stored-value-collections/{reference}/commit'
*/
commitf2a9c1cc6a7a4c9009bbb5470c9c9e16Form.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: commitf2a9c1cc6a7a4c9009bbb5470c9c9e16.url(args, options),
    method: 'post',
})

commitf2a9c1cc6a7a4c9009bbb5470c9c9e16.form = commitf2a9c1cc6a7a4c9009bbb5470c9c9e16Form
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/cockpit/stored-value-collections/{reference}/commit'
*/
const commit074f141e02dc326c5af71be2abae08e5 = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: commit074f141e02dc326c5af71be2abae08e5.url(args, options),
    method: 'post',
})

commit074f141e02dc326c5af71be2abae08e5.definition = {
    methods: ["post"],
    url: '/x/cockpit/stored-value-collections/{reference}/commit',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/cockpit/stored-value-collections/{reference}/commit'
*/
commit074f141e02dc326c5af71be2abae08e5.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reference: args }
    }

    if (Array.isArray(args)) {
        args = {
            reference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reference: args.reference,
    }

    return commit074f141e02dc326c5af71be2abae08e5.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/cockpit/stored-value-collections/{reference}/commit'
*/
commit074f141e02dc326c5af71be2abae08e5.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: commit074f141e02dc326c5af71be2abae08e5.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/cockpit/stored-value-collections/{reference}/commit'
*/
const commit074f141e02dc326c5af71be2abae08e5Form = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: commit074f141e02dc326c5af71be2abae08e5.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/cockpit/stored-value-collections/{reference}/commit'
*/
commit074f141e02dc326c5af71be2abae08e5Form.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: commit074f141e02dc326c5af71be2abae08e5.url(args, options),
    method: 'post',
})

commit074f141e02dc326c5af71be2abae08e5.form = commit074f141e02dc326c5af71be2abae08e5Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `commit['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const commit = {
    '/x/operations/stored-value-collections/{reference}/commit': commitf2a9c1cc6a7a4c9009bbb5470c9c9e16,
    '/x/cockpit/stored-value-collections/{reference}/commit': commit074f141e02dc326c5af71be2abae08e5,
}

const StoredValueCollectionController = { page, start, status, verify, commit }

export default StoredValueCollectionController