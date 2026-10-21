import InspectPayCodeXRayController from './InspectPayCodeXRayController'
import EstimatePayCodeController from './EstimatePayCodeController'
import GeneratePayCodeController from './GeneratePayCodeController'

const PayCode = {
    InspectPayCodeXRayController: Object.assign(InspectPayCodeXRayController, InspectPayCodeXRayController),
    EstimatePayCodeController: Object.assign(EstimatePayCodeController, EstimatePayCodeController),
    GeneratePayCodeController: Object.assign(GeneratePayCodeController, GeneratePayCodeController),
}

export default PayCode