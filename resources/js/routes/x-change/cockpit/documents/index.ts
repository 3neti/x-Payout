import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnvelopeDocumentReviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnvelopeDocumentReviewController.php:18
* @route '/x/cockpit/pay-codes/{code}/documents/{attachment}/review'
*/
export const review = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: review.url(args, options),
    method: 'post',
})

review.definition = {
    methods: ["post"],
    url: '/x/cockpit/pay-codes/{code}/documents/{attachment}/review',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnvelopeDocumentReviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnvelopeDocumentReviewController.php:18
* @route '/x/cockpit/pay-codes/{code}/documents/{attachment}/review'
*/
review.url = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions) => {
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

    return review.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace('{attachment}', parsedArgs.attachment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnvelopeDocumentReviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnvelopeDocumentReviewController.php:18
* @route '/x/cockpit/pay-codes/{code}/documents/{attachment}/review'
*/
review.post = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: review.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnvelopeDocumentReviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnvelopeDocumentReviewController.php:18
* @route '/x/cockpit/pay-codes/{code}/documents/{attachment}/review'
*/
const reviewForm = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: review.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Cockpit\CockpitEnvelopeDocumentReviewController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Cockpit/CockpitEnvelopeDocumentReviewController.php:18
* @route '/x/cockpit/pay-codes/{code}/documents/{attachment}/review'
*/
reviewForm.post = (args: { code: string | number, attachment: string | number } | [code: string | number, attachment: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: review.url(args, options),
    method: 'post',
})

review.form = reviewForm

const documents = {
    review: Object.assign(review, review),
}

export default documents