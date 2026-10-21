import PaymentGateway from './PaymentGateway'
import FormFlowManager from './FormFlowManager'
import FormHandlerKYC from './FormHandlerKYC'
import FormHandlerLocation from './FormHandlerLocation'
import FormHandlerOtp from './FormHandlerOtp'
import HyperVerge from './HyperVerge'
import Instruction from './Instruction'
import Onboarding from './Onboarding'
import Voucher from './Voucher'
import XChange from './XChange'
import XCommerce from './XCommerce'
import XRider from './XRider'

const LBHurtado = {
    PaymentGateway: Object.assign(PaymentGateway, PaymentGateway),
    FormFlowManager: Object.assign(FormFlowManager, FormFlowManager),
    FormHandlerKYC: Object.assign(FormHandlerKYC, FormHandlerKYC),
    FormHandlerLocation: Object.assign(FormHandlerLocation, FormHandlerLocation),
    FormHandlerOtp: Object.assign(FormHandlerOtp, FormHandlerOtp),
    HyperVerge: Object.assign(HyperVerge, HyperVerge),
    Instruction: Object.assign(Instruction, Instruction),
    Onboarding: Object.assign(Onboarding, Onboarding),
    Voucher: Object.assign(Voucher, Voucher),
    XChange: Object.assign(XChange, XChange),
    XCommerce: Object.assign(XCommerce, XCommerce),
    XRider: Object.assign(XRider, XRider),
}

export default LBHurtado