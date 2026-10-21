import VoucherGenerationController from './VoucherGenerationController'
import VoucherDataController from './VoucherDataController'

const Controllers = {
    VoucherGenerationController: Object.assign(VoucherGenerationController, VoucherGenerationController),
    VoucherDataController: Object.assign(VoucherDataController, VoucherDataController),
}

export default Controllers