import AgreementPageController from './AgreementPageController'
import AcceptAgreementController from './AcceptAgreementController'
import DeclineAgreementController from './DeclineAgreementController'

const Legal = {
    AgreementPageController: Object.assign(AgreementPageController, AgreementPageController),
    AcceptAgreementController: Object.assign(AcceptAgreementController, AcceptAgreementController),
    DeclineAgreementController: Object.assign(DeclineAgreementController, DeclineAgreementController),
}

export default Legal