import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
const ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc.url(args, options),
    method: 'get',
})

ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc.definition = {
    methods: ["get","head"],
    url: '/x/pay-codes/{code}/approval',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
const ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0ccForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0ccForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/pay-codes/{code}/approval'
*/
ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0ccForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc.form = ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0ccForm
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
const ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587 = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587.url(args, options),
    method: 'get',
})

ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587.definition = {
    methods: ["get","head"],
    url: '/x/claim/{code}/approval',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587.url(args, options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
const ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587Form = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587Form.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587.url(args, options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalPageController.php:21
* @route '/x/claim/{code}/approval'
*/
ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587Form.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587.form = ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587Form

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalPageController::ClaimApprovalPageController, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `ClaimApprovalPageController['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const ClaimApprovalPageController = {
    '/x/pay-codes/{code}/approval': ClaimApprovalPageController119dcbc5340b64ca9f7f90ec357cb0cc,
    '/x/claim/{code}/approval': ClaimApprovalPageController1f1d18150702596a529b2e6fb00ea587,
}

export default ClaimApprovalPageController