import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
const OperationalReadinessController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: OperationalReadinessController.url(options),
    method: 'get',
})

OperationalReadinessController.definition = {
    methods: ["get","head"],
    url: '/x/ready',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
OperationalReadinessController.url = (options?: RouteQueryOptions) => {
    return OperationalReadinessController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
OperationalReadinessController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: OperationalReadinessController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
OperationalReadinessController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: OperationalReadinessController.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
const OperationalReadinessControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: OperationalReadinessController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
OperationalReadinessControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: OperationalReadinessController.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\OperationalReadinessController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/OperationalReadinessController.php:16
* @route '/x/ready'
*/
OperationalReadinessControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: OperationalReadinessController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

OperationalReadinessController.form = OperationalReadinessControllerForm

export default OperationalReadinessController