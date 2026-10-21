import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:38
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}'
*/
export const page = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(args, options),
    method: 'get',
})

page.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/batches/{batch}/pay-codes/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:38
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}'
*/
page.url = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            batch: args[0],
            code: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        batch: typeof args.batch === 'object'
        ? args.batch.reference
        : args.batch,
        code: args.code,
    }

    return page.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:38
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}'
*/
page.get = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:38
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}'
*/
page.head = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: page.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:38
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}'
*/
const pageForm = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:38
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}'
*/
pageForm.get = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::page
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:38
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}'
*/
pageForm.head = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

page.form = pageForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::data
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:56
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/data'
*/
export const data = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: data.url(args, options),
    method: 'get',
})

data.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/batches/{batch}/pay-codes/{code}/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::data
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:56
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/data'
*/
data.url = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            batch: args[0],
            code: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        batch: typeof args.batch === 'object'
        ? args.batch.reference
        : args.batch,
        code: args.code,
    }

    return data.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::data
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:56
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/data'
*/
data.get = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: data.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::data
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:56
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/data'
*/
data.head = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: data.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::data
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:56
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/data'
*/
const dataForm = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: data.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::data
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:56
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/data'
*/
dataForm.get = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: data.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::data
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:56
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/data'
*/
dataForm.head = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: data.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

data.form = dataForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::action
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:99
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/action'
*/
export const action = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: action.url(args, options),
    method: 'post',
})

action.definition = {
    methods: ["post"],
    url: '/x/auto-generate/batches/{batch}/pay-codes/{code}/action',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::action
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:99
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/action'
*/
action.url = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            batch: args[0],
            code: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        batch: typeof args.batch === 'object'
        ? args.batch.reference
        : args.batch,
        code: args.code,
    }

    return action.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::action
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:99
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/action'
*/
action.post = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: action.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::action
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:99
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/action'
*/
const actionForm = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: action.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::action
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:99
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/action'
*/
actionForm.post = (args: { batch: string | number | { reference: string | number }, code: string | number } | [batch: string | number | { reference: string | number }, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: action.url(args, options),
    method: 'post',
})

action.form = actionForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::evidence
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:124
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/evidence/{source}/{evidence}'
*/
export const evidence = (args: { batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number } | [batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: evidence.url(args, options),
    method: 'get',
})

evidence.definition = {
    methods: ["get","head"],
    url: '/x/auto-generate/batches/{batch}/pay-codes/{code}/evidence/{source}/{evidence}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::evidence
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:124
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/evidence/{source}/{evidence}'
*/
evidence.url = (args: { batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number } | [batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            batch: args[0],
            code: args[1],
            source: args[2],
            evidence: args[3],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        batch: typeof args.batch === 'object'
        ? args.batch.reference
        : args.batch,
        code: args.code,
        source: args.source,
        evidence: args.evidence,
    }

    return evidence.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace('{code}', parsedArgs.code.toString())
            .replace('{source}', parsedArgs.source.toString())
            .replace('{evidence}', parsedArgs.evidence.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::evidence
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:124
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/evidence/{source}/{evidence}'
*/
evidence.get = (args: { batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number } | [batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: evidence.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::evidence
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:124
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/evidence/{source}/{evidence}'
*/
evidence.head = (args: { batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number } | [batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: evidence.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::evidence
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:124
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/evidence/{source}/{evidence}'
*/
const evidenceForm = (args: { batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number } | [batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: evidence.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::evidence
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:124
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/evidence/{source}/{evidence}'
*/
evidenceForm.get = (args: { batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number } | [batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: evidence.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PublicIssuance\PublicIssuanceBatchPayCodeDetailController::evidence
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PublicIssuance/PublicIssuanceBatchPayCodeDetailController.php:124
* @route '/x/auto-generate/batches/{batch}/pay-codes/{code}/evidence/{source}/{evidence}'
*/
evidenceForm.head = (args: { batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number } | [batch: string | number | { reference: string | number }, code: string | number, source: string | number, evidence: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: evidence.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

evidence.form = evidenceForm

const PublicIssuanceBatchPayCodeDetailController = { page, data, action, evidence }

export default PublicIssuanceBatchPayCodeDetailController