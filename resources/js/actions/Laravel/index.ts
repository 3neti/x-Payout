import Fortify from './Fortify'
import Passkeys from './Passkeys'
import Passport from './Passport'
import Sanctum from './Sanctum'

const Laravel = {
    Fortify: Object.assign(Fortify, Fortify),
    Passkeys: Object.assign(Passkeys, Passkeys),
    Passport: Object.assign(Passport, Passport),
    Sanctum: Object.assign(Sanctum, Sanctum),
}

export default Laravel