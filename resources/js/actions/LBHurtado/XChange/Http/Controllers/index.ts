import Web from './Web'
import PublicIssuance from './PublicIssuance'
import PayCode from './PayCode'
import Onboarding from './Onboarding'
import Redemption from './Redemption'
import PartnerApi from './PartnerApi'

const Controllers = {
    Web: Object.assign(Web, Web),
    PublicIssuance: Object.assign(PublicIssuance, PublicIssuance),
    PayCode: Object.assign(PayCode, PayCode),
    Onboarding: Object.assign(Onboarding, Onboarding),
    Redemption: Object.assign(Redemption, Redemption),
    PartnerApi: Object.assign(PartnerApi, PartnerApi),
}

export default Controllers