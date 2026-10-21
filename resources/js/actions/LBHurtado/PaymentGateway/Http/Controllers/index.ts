import ConfirmDepositController from './ConfirmDepositController'
import ConfirmDisbursementController from './ConfirmDisbursementController'
import GenerateController from './GenerateController'
import DisburseController from './DisburseController'

const Controllers = {
    ConfirmDepositController: Object.assign(ConfirmDepositController, ConfirmDepositController),
    ConfirmDisbursementController: Object.assign(ConfirmDisbursementController, ConfirmDisbursementController),
    GenerateController: Object.assign(GenerateController, GenerateController),
    DisburseController: Object.assign(DisburseController, DisburseController),
}

export default Controllers