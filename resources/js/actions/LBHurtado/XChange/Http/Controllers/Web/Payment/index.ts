import PaymentPageController from './PaymentPageController'
import SharedInvoiceController from './SharedInvoiceController'
import PaymentAttemptController from './PaymentAttemptController'
import PaymentQrCodeDownloadController from './PaymentQrCodeDownloadController'
import PaymentVerificationCheckController from './PaymentVerificationCheckController'

const Payment = {
    PaymentPageController: Object.assign(PaymentPageController, PaymentPageController),
    SharedInvoiceController: Object.assign(SharedInvoiceController, SharedInvoiceController),
    PaymentAttemptController: Object.assign(PaymentAttemptController, PaymentAttemptController),
    PaymentQrCodeDownloadController: Object.assign(PaymentQrCodeDownloadController, PaymentQrCodeDownloadController),
    PaymentVerificationCheckController: Object.assign(PaymentVerificationCheckController, PaymentVerificationCheckController),
}

export default Payment