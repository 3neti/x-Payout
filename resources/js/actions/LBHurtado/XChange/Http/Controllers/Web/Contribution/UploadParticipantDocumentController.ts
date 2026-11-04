import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadParticipantDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadParticipantDocumentController.php:21
* @route '/x/pay/{code}/documents'
*/
const UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548fe = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548fe.url(args, options),
    method: 'post',
})

UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548fe.definition = {
    methods: ["post"],
    url: '/x/pay/{code}/documents',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadParticipantDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadParticipantDocumentController.php:21
* @route '/x/pay/{code}/documents'
*/
UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548fe.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548fe.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadParticipantDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadParticipantDocumentController.php:21
* @route '/x/pay/{code}/documents'
*/
UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548fe.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548fe.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadParticipantDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadParticipantDocumentController.php:21
* @route '/x/pay/{code}/documents'
*/
const UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548feForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548fe.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadParticipantDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadParticipantDocumentController.php:21
* @route '/x/pay/{code}/documents'
*/
UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548feForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548fe.url(args, options),
    method: 'post',
})

UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548fe.form = UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548feForm
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadParticipantDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadParticipantDocumentController.php:21
* @route '/x/claim/{code}/documents'
*/
const UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3f = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3f.url(args, options),
    method: 'post',
})

UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3f.definition = {
    methods: ["post"],
    url: '/x/claim/{code}/documents',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadParticipantDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadParticipantDocumentController.php:21
* @route '/x/claim/{code}/documents'
*/
UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3f.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3f.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadParticipantDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadParticipantDocumentController.php:21
* @route '/x/claim/{code}/documents'
*/
UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3f.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3f.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadParticipantDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadParticipantDocumentController.php:21
* @route '/x/claim/{code}/documents'
*/
const UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3fForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3f.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadParticipantDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadParticipantDocumentController.php:21
* @route '/x/claim/{code}/documents'
*/
UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3fForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3f.url(args, options),
    method: 'post',
})

UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3f.form = UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3fForm

/**
* Multiple routes resolve to \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadParticipantDocumentController::UploadParticipantDocumentController, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `UploadParticipantDocumentController['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const UploadParticipantDocumentController = {
    '/x/pay/{code}/documents': UploadParticipantDocumentControllerbadc5eba20968a2dd00b52097d3548fe,
    '/x/claim/{code}/documents': UploadParticipantDocumentControllerfecfeef1e3736d71b204869d5586cd3f,
}

export default UploadParticipantDocumentController