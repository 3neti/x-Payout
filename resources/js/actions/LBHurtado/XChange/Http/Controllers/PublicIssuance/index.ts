import PublicIssuanceDiscoveryController from './PublicIssuanceDiscoveryController'
import PublicIssuanceEstimateController from './PublicIssuanceEstimateController'
import PublicIssuanceHandoffController from './PublicIssuanceHandoffController'

const PublicIssuance = {
    PublicIssuanceDiscoveryController: Object.assign(PublicIssuanceDiscoveryController, PublicIssuanceDiscoveryController),
    PublicIssuanceEstimateController: Object.assign(PublicIssuanceEstimateController, PublicIssuanceEstimateController),
    PublicIssuanceHandoffController: Object.assign(PublicIssuanceHandoffController, PublicIssuanceHandoffController),
}

export default PublicIssuance