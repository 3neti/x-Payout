import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDepositController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDepositController.php:15
* @route '/api/confirm-deposit'
*/
export const confirmDeposit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirmDeposit.url(options),
    method: 'post',
})

confirmDeposit.definition = {
    methods: ["post"],
    url: '/api/confirm-deposit',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDepositController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDepositController.php:15
* @route '/api/confirm-deposit'
*/
confirmDeposit.url = (options?: RouteQueryOptions) => {
    return confirmDeposit.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDepositController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDepositController.php:15
* @route '/api/confirm-deposit'
*/
confirmDeposit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirmDeposit.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDepositController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDepositController.php:15
* @route '/api/confirm-deposit'
*/
const confirmDepositForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirmDeposit.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDepositController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDepositController.php:15
* @route '/api/confirm-deposit'
*/
confirmDepositForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirmDeposit.url(options),
    method: 'post',
})

confirmDeposit.form = confirmDepositForm

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDisbursementController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDisbursementController.php:14
* @route '/api/confirm-disbursement'
*/
export const confirmDisbursement = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirmDisbursement.url(options),
    method: 'post',
})

confirmDisbursement.definition = {
    methods: ["post"],
    url: '/api/confirm-disbursement',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDisbursementController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDisbursementController.php:14
* @route '/api/confirm-disbursement'
*/
confirmDisbursement.url = (options?: RouteQueryOptions) => {
    return confirmDisbursement.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDisbursementController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDisbursementController.php:14
* @route '/api/confirm-disbursement'
*/
confirmDisbursement.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirmDisbursement.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDisbursementController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDisbursementController.php:14
* @route '/api/confirm-disbursement'
*/
const confirmDisbursementForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirmDisbursement.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\ConfirmDisbursementController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/ConfirmDisbursementController.php:14
* @route '/api/confirm-disbursement'
*/
confirmDisbursementForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirmDisbursement.url(options),
    method: 'post',
})

confirmDisbursement.form = confirmDisbursementForm

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\GenerateController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/GenerateController.php:14
* @route '/api/generate-qrcode'
*/
export const generateQrcode = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generateQrcode.url(options),
    method: 'post',
})

generateQrcode.definition = {
    methods: ["post"],
    url: '/api/generate-qrcode',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\GenerateController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/GenerateController.php:14
* @route '/api/generate-qrcode'
*/
generateQrcode.url = (options?: RouteQueryOptions) => {
    return generateQrcode.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\GenerateController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/GenerateController.php:14
* @route '/api/generate-qrcode'
*/
generateQrcode.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generateQrcode.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\GenerateController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/GenerateController.php:14
* @route '/api/generate-qrcode'
*/
const generateQrcodeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generateQrcode.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\GenerateController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/GenerateController.php:14
* @route '/api/generate-qrcode'
*/
generateQrcodeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generateQrcode.url(options),
    method: 'post',
})

generateQrcode.form = generateQrcodeForm

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\DisburseController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/DisburseController.php:15
* @route '/api/disburse-funds'
*/
export const disburseFunds = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: disburseFunds.url(options),
    method: 'post',
})

disburseFunds.definition = {
    methods: ["post"],
    url: '/api/disburse-funds',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\DisburseController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/DisburseController.php:15
* @route '/api/disburse-funds'
*/
disburseFunds.url = (options?: RouteQueryOptions) => {
    return disburseFunds.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\DisburseController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/DisburseController.php:15
* @route '/api/disburse-funds'
*/
disburseFunds.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: disburseFunds.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\DisburseController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/DisburseController.php:15
* @route '/api/disburse-funds'
*/
const disburseFundsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: disburseFunds.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\PaymentGateway\Http\Controllers\DisburseController::__invoke
* @see vendor/3neti/emi-netbank/src/Http/Controllers/DisburseController.php:15
* @route '/api/disburse-funds'
*/
disburseFundsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: disburseFunds.url(options),
    method: 'post',
})

disburseFunds.form = disburseFundsForm

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm
