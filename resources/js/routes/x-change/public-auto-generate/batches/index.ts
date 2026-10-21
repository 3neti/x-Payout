import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
import recovery from './recovery'
import payCodes7a504b from './pay-codes'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::preview
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:45
* @route '/x/auto-generate/batches/preview'
*/
export const preview = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

preview.definition = {
    methods: ["post"],
    url: '/x/auto-generate/batches/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::preview
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:45
* @route '/x/auto-generate/batches/preview'
*/
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::preview
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:45
* @route '/x/auto-generate/batches/preview'
*/
preview.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::preview
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:45
* @route '/x/auto-generate/batches/preview'
*/
const previewForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::preview
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:45
* @route '/x/auto-generate/batches/preview'
*/
previewForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

preview.form = previewForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:77
* @route '/x/auto-generate/batches'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/auto-generate/batches',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:77
* @route '/x/auto-generate/batches'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:77
* @route '/x/auto-generate/batches'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:77
* @route '/x/auto-generate/batches'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::store
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:77
* @route '/x/auto-generate/batches'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
export const payCodes = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payCodes.url(args, options),
    method: 'get',
})

payCodes.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/batches/{batch}/pay-codes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
payCodes.url = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { batch: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { batch: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            batch: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        batch: typeof args.batch === 'object'
        ? args.batch.reference
        : args.batch,
    }

    return payCodes.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
payCodes.get = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payCodes.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
payCodes.head = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: payCodes.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
const payCodesForm = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payCodes.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
payCodesForm.get = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payCodes.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodesPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodesPageController.php:16
* @route '/x/auto-generate/batches/{batch}/pay-codes'
*/
payCodesForm.head = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payCodes.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

payCodes.form = payCodesForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:34
* @route '/x/auto-generate/batches/template'
*/
export const template = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

template.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/batches/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:34
* @route '/x/auto-generate/batches/template'
*/
template.url = (options?: RouteQueryOptions) => {
    return template.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:34
* @route '/x/auto-generate/batches/template'
*/
template.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:34
* @route '/x/auto-generate/batches/template'
*/
template.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: template.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:34
* @route '/x/auto-generate/batches/template'
*/
const templateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:34
* @route '/x/auto-generate/batches/template'
*/
templateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::template
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:34
* @route '/x/auto-generate/batches/template'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:185
* @route '/x/auto-generate/batches/{batch}'
*/
export const show = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/batches/{batch}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:185
* @route '/x/auto-generate/batches/{batch}'
*/
show.url = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { batch: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { batch: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            batch: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        batch: typeof args.batch === 'object'
        ? args.batch.reference
        : args.batch,
    }

    return show.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:185
* @route '/x/auto-generate/batches/{batch}'
*/
show.get = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:185
* @route '/x/auto-generate/batches/{batch}'
*/
show.head = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:185
* @route '/x/auto-generate/batches/{batch}'
*/
const showForm = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:185
* @route '/x/auto-generate/batches/{batch}'
*/
showForm.get = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::show
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:185
* @route '/x/auto-generate/batches/{batch}'
*/
showForm.head = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::fund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:282
* @route '/x/auto-generate/batches/{batch}/fund'
*/
export const fund = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: fund.url(args, options),
    method: 'post',
})

fund.definition = {
    methods: ["post"],
    url: '/x/auto-generate/batches/{batch}/fund',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::fund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:282
* @route '/x/auto-generate/batches/{batch}/fund'
*/
fund.url = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { batch: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { batch: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            batch: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        batch: typeof args.batch === 'object'
        ? args.batch.reference
        : args.batch,
    }

    return fund.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::fund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:282
* @route '/x/auto-generate/batches/{batch}/fund'
*/
fund.post = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: fund.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::fund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:282
* @route '/x/auto-generate/batches/{batch}/fund'
*/
const fundForm = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: fund.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::fund
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:282
* @route '/x/auto-generate/batches/{batch}/fund'
*/
fundForm.post = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: fund.url(args, options),
    method: 'post',
})

fund.form = fundForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::download
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:298
* @route '/x/auto-generate/batches/{batch}/download'
*/
export const download = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/batches/{batch}/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::download
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:298
* @route '/x/auto-generate/batches/{batch}/download'
*/
download.url = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { batch: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'reference' in args) {
        args = { batch: args.reference }
    }

    if (Array.isArray(args)) {
        args = {
            batch: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        batch: typeof args.batch === 'object'
        ? args.batch.reference
        : args.batch,
    }

    return download.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::download
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:298
* @route '/x/auto-generate/batches/{batch}/download'
*/
download.get = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::download
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:298
* @route '/x/auto-generate/batches/{batch}/download'
*/
download.head = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::download
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:298
* @route '/x/auto-generate/batches/{batch}/download'
*/
const downloadForm = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::download
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:298
* @route '/x/auto-generate/batches/{batch}/download'
*/
downloadForm.get = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchController::download
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchController.php:298
* @route '/x/auto-generate/batches/{batch}/download'
*/
downloadForm.head = (args: { batch: string | number | { reference: string | number } } | [batch: string | number | { reference: string | number } ] | string | number | { reference: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

download.form = downloadForm

const batches = {
    recovery: Object.assign(recovery, recovery),
    preview: Object.assign(preview, preview),
    store: Object.assign(store, store),
    payCodes: Object.assign(payCodes, payCodes7a504b),
    template: Object.assign(template, template),
    show: Object.assign(show, show),
    fund: Object.assign(fund, fund),
    download: Object.assign(download, download),
}

export default batches