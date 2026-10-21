import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalOtpController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalOtpController.php:30
* @route '/x/claim/{code}/approval/otp'
*/
const ClaimApprovalOtpController = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ClaimApprovalOtpController.url(args, options),
    method: 'post',
})

ClaimApprovalOtpController.definition = {
    methods: ["post"],
    url: '/x/claim/{code}/approval/otp',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalOtpController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalOtpController.php:30
* @route '/x/claim/{code}/approval/otp'
*/
ClaimApprovalOtpController.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ClaimApprovalOtpController.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalOtpController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalOtpController.php:30
* @route '/x/claim/{code}/approval/otp'
*/
ClaimApprovalOtpController.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ClaimApprovalOtpController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalOtpController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalOtpController.php:30
* @route '/x/claim/{code}/approval/otp'
*/
const ClaimApprovalOtpControllerForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ClaimApprovalOtpController.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalOtpController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalOtpController.php:30
* @route '/x/claim/{code}/approval/otp'
*/
ClaimApprovalOtpControllerForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ClaimApprovalOtpController.url(args, options),
    method: 'post',
})

ClaimApprovalOtpController.form = ClaimApprovalOtpControllerForm

export default ClaimApprovalOtpController