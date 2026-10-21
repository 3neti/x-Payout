import PreparePayCodeRedemptionFlowController from './PreparePayCodeRedemptionFlowController'
import LoadPayCodeRedemptionCompletionContextController from './LoadPayCodeRedemptionCompletionContextController'
import SubmitPayCodeClaimController from './SubmitPayCodeClaimController'
import RedeemPayCodeController from './RedeemPayCodeController'

const Redemption = {
    PreparePayCodeRedemptionFlowController: Object.assign(PreparePayCodeRedemptionFlowController, PreparePayCodeRedemptionFlowController),
    LoadPayCodeRedemptionCompletionContextController: Object.assign(LoadPayCodeRedemptionCompletionContextController, LoadPayCodeRedemptionCompletionContextController),
    SubmitPayCodeClaimController: Object.assign(SubmitPayCodeClaimController, SubmitPayCodeClaimController),
    RedeemPayCodeController: Object.assign(RedeemPayCodeController, RedeemPayCodeController),
}

export default Redemption