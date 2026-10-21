import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/x/pay-codes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeIndexPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeIndexPageController.php:14
* @route '/x/pay-codes'
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
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/x/pay-codes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeCreatePageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeCreatePageController.php:17
* @route '/x/pay-codes/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
export const approval = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: approval.url(args, options),
    method: 'get',
})

approval.definition = {
    methods: ["get","head"],
    url: '/x/pay-codes/{code}/approval',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
approval.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { code: args }
    }

    if (Array.isArray(args)) {
        args = {
            code: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
    }

    return approval.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
approval.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: approval.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
approval.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: approval.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
const approvalForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: approval.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
approvalForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: approval.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
approvalForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: approval.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

approval.form = approvalForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
export const show = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/x/pay-codes/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
show.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { code: args }
    }

    if (Array.isArray(args)) {
        args = {
            code: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
    }

    return show.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
show.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
show.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
const showForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
showForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\PayCodeShowPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/PayCodeShowPageController.php:14
* @route '/x/pay-codes/{code}'
*/
showForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const payCodes = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    approval: Object.assign(approval, approval),
    show: Object.assign(show, show),
}

export default payCodes