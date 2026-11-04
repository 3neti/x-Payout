import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadInvitedDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadInvitedDocumentController.php:16
* @route '/x/contributions/documents'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/x/contributions/documents',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadInvitedDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadInvitedDocumentController.php:16
* @route '/x/contributions/documents'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadInvitedDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadInvitedDocumentController.php:16
* @route '/x/contributions/documents'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadInvitedDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadInvitedDocumentController.php:16
* @route '/x/contributions/documents'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadInvitedDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadInvitedDocumentController.php:16
* @route '/x/contributions/documents'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ViewContributionDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ViewContributionDocumentController.php:18
* @route '/x/contributions/documents/{attachment}'
*/
export const show = (args: { attachment: string | number } | [attachment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: show.url(args, options),
    method: 'post',
})

show.definition = {
    methods: ["post"],
    url: '/x/contributions/documents/{attachment}',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ViewContributionDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ViewContributionDocumentController.php:18
* @route '/x/contributions/documents/{attachment}'
*/
show.url = (args: { attachment: string | number } | [attachment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attachment: args }
    }

    if (Array.isArray(args)) {
        args = {
            attachment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attachment: args.attachment,
    }

    return show.definition.url
            .replace('{attachment}', parsedArgs.attachment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ViewContributionDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ViewContributionDocumentController.php:18
* @route '/x/contributions/documents/{attachment}'
*/
show.post = (args: { attachment: string | number } | [attachment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: show.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ViewContributionDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ViewContributionDocumentController.php:18
* @route '/x/contributions/documents/{attachment}'
*/
const showForm = (args: { attachment: string | number } | [attachment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: show.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ViewContributionDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ViewContributionDocumentController.php:18
* @route '/x/contributions/documents/{attachment}'
*/
showForm.post = (args: { attachment: string | number } | [attachment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: show.url(args, options),
    method: 'post',
})

show.form = showForm

const documents = {
    store: Object.assign(store, store),
    show: Object.assign(show, show),
}

export default documents