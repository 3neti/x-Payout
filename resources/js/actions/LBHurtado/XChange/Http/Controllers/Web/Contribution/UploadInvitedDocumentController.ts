import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadInvitedDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadInvitedDocumentController.php:16
* @route '/x/contributions/documents'
*/
const UploadInvitedDocumentController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UploadInvitedDocumentController.url(options),
    method: 'post',
})

UploadInvitedDocumentController.definition = {
    methods: ["post"],
    url: '/x/contributions/documents',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadInvitedDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadInvitedDocumentController.php:16
* @route '/x/contributions/documents'
*/
UploadInvitedDocumentController.url = (options?: RouteQueryOptions) => {
    return UploadInvitedDocumentController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadInvitedDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadInvitedDocumentController.php:16
* @route '/x/contributions/documents'
*/
UploadInvitedDocumentController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UploadInvitedDocumentController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadInvitedDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadInvitedDocumentController.php:16
* @route '/x/contributions/documents'
*/
const UploadInvitedDocumentControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UploadInvitedDocumentController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\UploadInvitedDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/UploadInvitedDocumentController.php:16
* @route '/x/contributions/documents'
*/
UploadInvitedDocumentControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UploadInvitedDocumentController.url(options),
    method: 'post',
})

UploadInvitedDocumentController.form = UploadInvitedDocumentControllerForm

export default UploadInvitedDocumentController