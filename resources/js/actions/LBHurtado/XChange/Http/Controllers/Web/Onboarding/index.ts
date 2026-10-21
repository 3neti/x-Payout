import InitialPinSetupController from './InitialPinSetupController'
import MobileVerificationPageController from './MobileVerificationPageController'
import MobileVerificationChallengeController from './MobileVerificationChallengeController'
import MobileVerificationSubmissionController from './MobileVerificationSubmissionController'

const Onboarding = {
    InitialPinSetupController: Object.assign(InitialPinSetupController, InitialPinSetupController),
    MobileVerificationPageController: Object.assign(MobileVerificationPageController, MobileVerificationPageController),
    MobileVerificationChallengeController: Object.assign(MobileVerificationChallengeController, MobileVerificationChallengeController),
    MobileVerificationSubmissionController: Object.assign(MobileVerificationSubmissionController, MobileVerificationSubmissionController),
}

export default Onboarding