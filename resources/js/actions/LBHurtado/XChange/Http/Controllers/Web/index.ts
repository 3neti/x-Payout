import Commissioning from './Commissioning'
import Claim from './Claim'
import PublicPricingPageController from './PublicPricingPageController'
import PublicAnalyticsPageController from './PublicAnalyticsPageController'
import Provisioning from './Provisioning'
import Checkout from './Checkout'
import PublicOnboarding from './PublicOnboarding'
import StampRenderingComparisonController from './StampRenderingComparisonController'
import StampPreviewController from './StampPreviewController'
import Cockpit from './Cockpit'
import PublicIssuance from './PublicIssuance'
import PublicAutoGeneratePageController from './PublicAutoGeneratePageController'
import PublicIssuanceRecoveryController from './PublicIssuanceRecoveryController'
import PublicIssuanceReceiptController from './PublicIssuanceReceiptController'
import Legal from './Legal'
import Onboarding from './Onboarding'
import DashboardPageController from './DashboardPageController'
import PayCodeIndexPageController from './PayCodeIndexPageController'
import PayCodeCreatePageController from './PayCodeCreatePageController'
import PayCodeShowPageController from './PayCodeShowPageController'
import BalancePageController from './BalancePageController'
import StoredValueInstrumentPageController from './StoredValueInstrumentPageController'
import LinkPaynamicsWalletController from './LinkPaynamicsWalletController'
import Payment from './Payment'
import Leads from './Leads'

const Web = {
    Commissioning: Object.assign(Commissioning, Commissioning),
    Claim: Object.assign(Claim, Claim),
    PublicPricingPageController: Object.assign(PublicPricingPageController, PublicPricingPageController),
    PublicAnalyticsPageController: Object.assign(PublicAnalyticsPageController, PublicAnalyticsPageController),
    Provisioning: Object.assign(Provisioning, Provisioning),
    Checkout: Object.assign(Checkout, Checkout),
    PublicOnboarding: Object.assign(PublicOnboarding, PublicOnboarding),
    StampRenderingComparisonController: Object.assign(StampRenderingComparisonController, StampRenderingComparisonController),
    StampPreviewController: Object.assign(StampPreviewController, StampPreviewController),
    Cockpit: Object.assign(Cockpit, Cockpit),
    PublicIssuance: Object.assign(PublicIssuance, PublicIssuance),
    PublicAutoGeneratePageController: Object.assign(PublicAutoGeneratePageController, PublicAutoGeneratePageController),
    PublicIssuanceRecoveryController: Object.assign(PublicIssuanceRecoveryController, PublicIssuanceRecoveryController),
    PublicIssuanceReceiptController: Object.assign(PublicIssuanceReceiptController, PublicIssuanceReceiptController),
    Legal: Object.assign(Legal, Legal),
    Onboarding: Object.assign(Onboarding, Onboarding),
    DashboardPageController: Object.assign(DashboardPageController, DashboardPageController),
    PayCodeIndexPageController: Object.assign(PayCodeIndexPageController, PayCodeIndexPageController),
    PayCodeCreatePageController: Object.assign(PayCodeCreatePageController, PayCodeCreatePageController),
    PayCodeShowPageController: Object.assign(PayCodeShowPageController, PayCodeShowPageController),
    BalancePageController: Object.assign(BalancePageController, BalancePageController),
    StoredValueInstrumentPageController: Object.assign(StoredValueInstrumentPageController, StoredValueInstrumentPageController),
    LinkPaynamicsWalletController: Object.assign(LinkPaynamicsWalletController, LinkPaynamicsWalletController),
    Payment: Object.assign(Payment, Payment),
    Leads: Object.assign(Leads, Leads),
}

export default Web