import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/stored-value-collections',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::index
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:29
* @route '/x/cockpit/stored-value-collections'
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

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/cockpit/stored-value-collections'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/cockpit/stored-value-collections',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/cockpit/stored-value-collections'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/cockpit/stored-value-collections'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/cockpit/stored-value-collections'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:78
* @route '/x/cockpit/stored-value-collections'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
export const show = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/cockpit/stored-value-collections/{reference}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
show.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
show.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
show.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
const showForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
showForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:135
* @route '/x/cockpit/stored-value-collections/{reference}'
*/
showForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/cockpit/stored-value-collections/{reference}/verification'
*/
export const verify = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/x/cockpit/stored-value-collections/{reference}/verification',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/cockpit/stored-value-collections/{reference}/verification'
*/
verify.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return verify.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/cockpit/stored-value-collections/{reference}/verification'
*/
verify.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/cockpit/stored-value-collections/{reference}/verification'
*/
const verifyForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::verify
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:107
* @route '/x/cockpit/stored-value-collections/{reference}/verification'
*/
verifyForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(args, options),
    method: 'post',
})

verify.form = verifyForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/cockpit/stored-value-collections/{reference}/commit'
*/
export const commit = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: commit.url(args, options),
    method: 'post',
})

commit.definition = {
    methods: ["post"],
    url: '/x/cockpit/stored-value-collections/{reference}/commit',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/cockpit/stored-value-collections/{reference}/commit'
*/
commit.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return commit.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/cockpit/stored-value-collections/{reference}/commit'
*/
commit.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: commit.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/cockpit/stored-value-collections/{reference}/commit'
*/
const commitForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: commit.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\StoredValueCollectionController::commit
* @see vendor/3neti/x-change/src/Http/Controllers/Web/StoredValueCollectionController.php:122
* @route '/x/cockpit/stored-value-collections/{reference}/commit'
*/
commitForm.post = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: commit.url(args, options),
    method: 'post',
})

commit.form = commitForm

const storedValueCollections = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    verify: Object.assign(verify, verify),
    commit: Object.assign(commit, commit),
}

export default storedValueCollections