import CheckoutConsoleController from './CheckoutConsoleController'
import OperationsEconomicsController from './OperationsEconomicsController'
import OperationsPricingController from './OperationsPricingController'

const Checkout = {
    CheckoutConsoleController: Object.assign(CheckoutConsoleController, CheckoutConsoleController),
    OperationsEconomicsController: Object.assign(OperationsEconomicsController, OperationsEconomicsController),
    OperationsPricingController: Object.assign(OperationsPricingController, OperationsPricingController),
}

export default Checkout