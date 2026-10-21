import accountGrants from './account-grants'
import institutionFunds from './institution-funds'
import reconciliation from './reconciliation'

const treasury = {
    accountGrants: Object.assign(accountGrants, accountGrants),
    institutionFunds: Object.assign(institutionFunds, institutionFunds),
    reconciliation: Object.assign(reconciliation, reconciliation),
}

export default treasury