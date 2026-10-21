import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
export const css = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: css.url(options),
    method: 'get',
})

css.definition = {
    methods: ["get","head"],
    url: '/x/commissioning/assets/commissioning.css',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
css.url = (options?: RouteQueryOptions) => {
    return css.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
css.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: css.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
css.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: css.url(options),
    method: 'head',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
const cssForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: css.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
cssForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: css.url(options),
    method: 'get',
})

/**
* @see \LBHurtado\XChange\Http\Controllers\Web\Commissioning\CommissioningStylesheetController::__invoke
* @see vendor/3neti/x-change/src/Http/Controllers/Web/Commissioning/CommissioningStylesheetController.php:11
* @route '/x/commissioning/assets/commissioning.css'
*/
cssForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: css.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

css.form = cssForm

const assets = {
    css: Object.assign(css, css),
}

export default assets