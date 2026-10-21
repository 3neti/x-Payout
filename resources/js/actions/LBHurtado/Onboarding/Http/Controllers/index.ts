import StartOnboardingController from './StartOnboardingController'
import ShowOnboardingController from './ShowOnboardingController'
import CompleteOnboardingController from './CompleteOnboardingController'
import CancelOnboardingController from './CancelOnboardingController'
import Web from './Web'

const Controllers = {
    StartOnboardingController: Object.assign(StartOnboardingController, StartOnboardingController),
    ShowOnboardingController: Object.assign(ShowOnboardingController, ShowOnboardingController),
    CompleteOnboardingController: Object.assign(CompleteOnboardingController, CompleteOnboardingController),
    CancelOnboardingController: Object.assign(CancelOnboardingController, CancelOnboardingController),
    Web: Object.assign(Web, Web),
}

export default Controllers