import AutoRegisterPageController from './AutoRegisterPageController'
import AutoRegisterMutationController from './AutoRegisterMutationController'

const PublicOnboarding = {
    AutoRegisterPageController: Object.assign(AutoRegisterPageController, AutoRegisterPageController),
    AutoRegisterMutationController: Object.assign(AutoRegisterMutationController, AutoRegisterMutationController),
}

export default PublicOnboarding