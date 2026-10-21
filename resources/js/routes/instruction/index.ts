import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \LBHurtado\Instruction\Http\Controllers\EstimateInstructionChargesController::__invoke
* @see vendor/3neti/instruction/src/Http/Controllers/EstimateInstructionChargesController.php:14
* @route '/api/instruction/v1/estimate'
*/
export const estimate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: estimate.url(options),
    method: 'post',
})

estimate.definition = {
    methods: ["post"],
    url: '/api/instruction/v1/estimate',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\Instruction\Http\Controllers\EstimateInstructionChargesController::__invoke
* @see vendor/3neti/instruction/src/Http/Controllers/EstimateInstructionChargesController.php:14
* @route '/api/instruction/v1/estimate'
*/
estimate.url = (options?: RouteQueryOptions) => {
    return estimate.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\Instruction\Http\Controllers\EstimateInstructionChargesController::__invoke
* @see vendor/3neti/instruction/src/Http/Controllers/EstimateInstructionChargesController.php:14
* @route '/api/instruction/v1/estimate'
*/
estimate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: estimate.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\Instruction\Http\Controllers\EstimateInstructionChargesController::__invoke
* @see vendor/3neti/instruction/src/Http/Controllers/EstimateInstructionChargesController.php:14
* @route '/api/instruction/v1/estimate'
*/
const estimateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: estimate.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\Instruction\Http\Controllers\EstimateInstructionChargesController::__invoke
* @see vendor/3neti/instruction/src/Http/Controllers/EstimateInstructionChargesController.php:14
* @route '/api/instruction/v1/estimate'
*/
estimateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: estimate.url(options),
    method: 'post',
})

estimate.form = estimateForm

const instruction = {
    estimate: Object.assign(estimate, estimate),
}

export default instruction