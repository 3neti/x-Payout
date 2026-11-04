import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnvelopeDocumentReviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnvelopeDocumentReviewController.php:18
* @route '/x/cockpit/pay-codes/{code}/documents/{attachment}/review'
*/
const CockpitEnvelopeDocumentReviewController = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitEnvelopeDocumentReviewController.url(args, options),
    method: 'post',
})

CockpitEnvelopeDocumentReviewController.definition = {
    methods: ["post"],
    url: '/x/cockpit/pay-codes/{code}/documents/{attachment}/review',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnvelopeDocumentReviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnvelopeDocumentReviewController.php:18
* @route '/x/cockpit/pay-codes/{code}/documents/{attachment}/review'
*/
CockpitEnvelopeDocumentReviewController.url = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            code: args[0],
            attachment: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
        attachment: args.attachment,
    }

    return CockpitEnvelopeDocumentReviewController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{attachment}', parsedArgs.attachment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnvelopeDocumentReviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnvelopeDocumentReviewController.php:18
* @route '/x/cockpit/pay-codes/{code}/documents/{attachment}/review'
*/
CockpitEnvelopeDocumentReviewController.post = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CockpitEnvelopeDocumentReviewController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnvelopeDocumentReviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnvelopeDocumentReviewController.php:18
* @route '/x/cockpit/pay-codes/{code}/documents/{attachment}/review'
*/
const CockpitEnvelopeDocumentReviewControllerForm = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitEnvelopeDocumentReviewController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnvelopeDocumentReviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnvelopeDocumentReviewController.php:18
* @route '/x/cockpit/pay-codes/{code}/documents/{attachment}/review'
*/
CockpitEnvelopeDocumentReviewControllerForm.post = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: CockpitEnvelopeDocumentReviewController.url(args, options),
    method: 'post',
})

CockpitEnvelopeDocumentReviewController.form = CockpitEnvelopeDocumentReviewControllerForm

export default CockpitEnvelopeDocumentReviewController