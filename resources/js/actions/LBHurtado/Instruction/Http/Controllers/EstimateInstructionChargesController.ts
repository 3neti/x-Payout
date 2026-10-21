import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \LBHurtado\Instruction\Http\Controllers\EstimateInstructionChargesController::__invoke
* @see vendor/3neti/instruction/src/Http/Controllers/EstimateInstructionChargesController.php:14
* @route '/api/instruction/v1/estimate'
*/
const EstimateInstructionChargesController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: EstimateInstructionChargesController.url(options),
    method: 'post',
})

EstimateInstructionChargesController.definition = {
    methods: ["post"],
    url: '/api/instruction/v1/estimate',
} satisfies RouteDefinition<["post"]>

/**
* @see \LBHurtado\Instruction\Http\Controllers\EstimateInstructionChargesController::__invoke
* @see vendor/3neti/instruction/src/Http/Controllers/EstimateInstructionChargesController.php:14
* @route '/api/instruction/v1/estimate'
*/
EstimateInstructionChargesController.url = (options?: RouteQueryOptions) => {
    return EstimateInstructionChargesController.definition.url + queryParams(options)
}

/**
* @see \LBHurtado\Instruction\Http\Controllers\EstimateInstructionChargesController::__invoke
* @see vendor/3neti/instruction/src/Http/Controllers/EstimateInstructionChargesController.php:14
* @route '/api/instruction/v1/estimate'
*/
EstimateInstructionChargesController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: EstimateInstructionChargesController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\Instruction\Http\Controllers\EstimateInstructionChargesController::__invoke
* @see vendor/3neti/instruction/src/Http/Controllers/EstimateInstructionChargesController.php:14
* @route '/api/instruction/v1/estimate'
*/
const EstimateInstructionChargesControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: EstimateInstructionChargesController.url(options),
    method: 'post',
})

/**
* @see \LBHurtado\Instruction\Http\Controllers\EstimateInstructionChargesController::__invoke
* @see vendor/3neti/instruction/src/Http/Controllers/EstimateInstructionChargesController.php:14
* @route '/api/instruction/v1/estimate'
*/
EstimateInstructionChargesControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: EstimateInstructionChargesController.url(options),
    method: 'post',
})

EstimateInstructionChargesController.form = EstimateInstructionChargesControllerForm

export default EstimateInstructionChargesController