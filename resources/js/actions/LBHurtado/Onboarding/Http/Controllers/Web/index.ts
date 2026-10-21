import ShowOnboardingPageController from './ShowOnboardingPageController'
import CompleteOnboardingPageController from './CompleteOnboardingPageController'
import CancelOnboardingPageController from './CancelOnboardingPageController'

const Web = {
    ShowOnboardingPageController: Object.assign(ShowOnboardingPageController, ShowOnboardingPageController),
    CompleteOnboardingPageController: Object.assign(CompleteOnboardingPageController, CompleteOnboardingPageController),
    CancelOnboardingPageController: Object.assign(CancelOnboardingPageController, CancelOnboardingPageController),
}

export default Web