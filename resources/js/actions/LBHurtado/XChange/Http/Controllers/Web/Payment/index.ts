import PaymentPageController from './PaymentPageController'
import PaymentRecoveryReportController from './PaymentRecoveryReportController'
import SharedInvoiceController from './SharedInvoiceController'
import PaymentAttemptController from './PaymentAttemptController'
import PaymentQrCodeDownloadController from './PaymentQrCodeDownloadController'
import PaymentVerificationCheckController from './PaymentVerificationCheckController'

const Payment = {
    PaymentPageController: Object.assign(PaymentPageController, PaymentPageController),
    PaymentRecoveryReportController: Object.assign(PaymentRecoveryReportController, PaymentRecoveryReportController),
    SharedInvoiceController: Object.assign(SharedInvoiceController, SharedInvoiceController),
    PaymentAttemptController: Object.assign(PaymentAttemptController, PaymentAttemptController),
    PaymentQrCodeDownloadController: Object.assign(PaymentQrCodeDownloadController, PaymentQrCodeDownloadController),
    PaymentVerificationCheckController: Object.assign(PaymentVerificationCheckController, PaymentVerificationCheckController),
}

export default Payment