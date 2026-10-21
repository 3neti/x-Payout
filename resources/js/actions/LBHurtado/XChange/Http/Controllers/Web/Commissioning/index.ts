import CommissioningStatusController from './CommissioningStatusController'
import CommissioningChecklistController from './CommissioningChecklistController'
import CommissioningStylesheetController from './CommissioningStylesheetController'
import OperationalReadinessController from './OperationalReadinessController'

const Commissioning = {
    CommissioningStatusController: Object.assign(CommissioningStatusController, CommissioningStatusController),
    CommissioningChecklistController: Object.assign(CommissioningChecklistController, CommissioningChecklistController),
    CommissioningStylesheetController: Object.assign(CommissioningStylesheetController, CommissioningStylesheetController),
    OperationalReadinessController: Object.assign(OperationalReadinessController, OperationalReadinessController),
}

export default Commissioning