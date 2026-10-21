import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalOtpController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalOtpController.php:30
* @route '/x/claim/{code}/approval/otp'
*/
export const otp = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: otp.url(args, options),
    method: 'post',
})

otp.definition = {
    methods: ["post"],
    url: '/x/claim/{code}/approval/otp',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalOtpController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalOtpController.php:30
* @route '/x/claim/{code}/approval/otp'
*/
otp.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return otp.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalOtpController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalOtpController.php:30
* @route '/x/claim/{code}/approval/otp'
*/
otp.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: otp.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalOtpController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalOtpController.php:30
* @route '/x/claim/{code}/approval/otp'
*/
const otpForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: otp.url(args, options),
    method: 'post',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Claim\ClaimApprovalOtpController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Claim/ClaimApprovalOtpController.php:30
* @route '/x/claim/{code}/approval/otp'
*/
otpForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: otp.url(args, options),
    method: 'post',
})

otp.form = otpForm

const approval = {
    otp: Object.assign(otp, otp),
}

export default approval