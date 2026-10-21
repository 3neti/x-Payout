import activations from './activations'
import revocations from './revocations'
import supersessions from './supersessions'
import deliveries from './deliveries'

const offers = {
    activations: Object.assign(activations, activations),
    revocations: Object.assign(revocations, revocations),
    supersessions: Object.assign(supersessions, supersessions),
    deliveries: Object.assign(deliveries, deliveries),
}

export default offers