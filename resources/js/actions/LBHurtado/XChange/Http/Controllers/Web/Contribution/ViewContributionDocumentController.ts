import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ViewContributionDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ViewContributionDocumentController.php:18
* @route '/x/contributions/documents/{attachment}'
*/
const ViewContributionDocumentController = (args: { attachment: string | number } | [attachment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ViewContributionDocumentController.url(args, options),
    method: 'post',
})

ViewContributionDocumentController.definition = {
    methods: ["post"],
    url: '/x/contributions/documents/{attachment}',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ViewContributionDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ViewContributionDocumentController.php:18
* @route '/x/contributions/documents/{attachment}'
*/
ViewContributionDocumentController.url = (args: { attachment: string | number } | [attachment: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewContributionDocumentController.definition.url
            .replace('{attachment}', parsedArgs.attachment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ViewContributionDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ViewContributionDocumentController.php:18
* @route '/x/contributions/documents/{attachment}'
*/
ViewContributionDocumentController.post = (args: { attachment: string | number } | [attachment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ViewContributionDocumentController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ViewContributionDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ViewContributionDocumentController.php:18
* @route '/x/contributions/documents/{attachment}'
*/
const ViewContributionDocumentControllerForm = (args: { attachment: string | number } | [attachment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ViewContributionDocumentController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Contribution\ViewContributionDocumentController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Contribution/ViewContributionDocumentController.php:18
* @route '/x/contributions/documents/{attachment}'
*/
ViewContributionDocumentControllerForm.post = (args: { attachment: string | number } | [attachment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ViewContributionDocumentController.url(args, options),
    method: 'post',
})

ViewContributionDocumentController.form = ViewContributionDocumentControllerForm

export default ViewContributionDocumentController