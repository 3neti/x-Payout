import payCodes from './pay-codes'
import bankTransfers from './bank-transfers'
import fallbacks from './fallbacks'

const fulfillments = {
    payCodes: Object.assign(payCodes, payCodes),
    bankTransfers: Object.assign(bankTransfers, bankTransfers),
    fallbacks: Object.assign(fallbacks, fallbacks),
}

export default fulfillments