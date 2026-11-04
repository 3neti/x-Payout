import ContributionPageController from './ContributionPageController'
import ContributionContextController from './ContributionContextController'
import VerifyContributionPasswordController from './VerifyContributionPasswordController'
import UploadInvitedDocumentController from './UploadInvitedDocumentController'
import ViewContributionDocumentController from './ViewContributionDocumentController'
import UploadParticipantDocumentController from './UploadParticipantDocumentController'

const Contribution = {
    ContributionPageController: Object.assign(ContributionPageController, ContributionPageController),
    ContributionContextController: Object.assign(ContributionContextController, ContributionContextController),
    VerifyContributionPasswordController: Object.assign(VerifyContributionPasswordController, VerifyContributionPasswordController),
    UploadInvitedDocumentController: Object.assign(UploadInvitedDocumentController, UploadInvitedDocumentController),
    ViewContributionDocumentController: Object.assign(ViewContributionDocumentController, ViewContributionDocumentController),
    UploadParticipantDocumentController: Object.assign(UploadParticipantDocumentController, UploadParticipantDocumentController),
}

export default Contribution