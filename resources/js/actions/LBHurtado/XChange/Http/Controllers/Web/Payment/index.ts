import PaymentPageController from './PaymentPageController'
import PaymentAttemptController from './PaymentAttemptController'
import PaymentQrCodeDownloadController from './PaymentQrCodeDownloadController'
import PaymentVerificationCheckController from './PaymentVerificationCheckController'

const Payment = {
    PaymentPageController: Object.assign(PaymentPageController, PaymentPageController),
    PaymentAttemptController: Object.assign(PaymentAttemptController, PaymentAttemptController),
    PaymentQrCodeDownloadController: Object.assign(PaymentQrCodeDownloadController, PaymentQrCodeDownloadController),
    PaymentVerificationCheckController: Object.assign(PaymentVerificationCheckController, PaymentVerificationCheckController),
}

export default Payment