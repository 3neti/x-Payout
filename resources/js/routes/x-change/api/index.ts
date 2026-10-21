import publicIssuance from './public-issuance'
import payCodes from './pay-codes'
import onboarding from './onboarding'

const api = {
    publicIssuance: Object.assign(publicIssuance, publicIssuance),
    payCodes: Object.assign(payCodes, payCodes),
    onboarding: Object.assign(onboarding, onboarding),
}

export default api