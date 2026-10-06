# Payment Confirmation Resilience Adoption Plan

**Opened:** 2026-10-06

**Status:** Implementation and release acceptance in progress

## Objective

Adopt x-change `v1.0.101` in x-PayOut, configure one deployment-managed
partner payment-event receiver, process delivery on a dedicated durable queue,
and preserve fail-closed behavior until production explicitly supplies and
enables the receiver configuration.

Payment settlement remains authoritative in x-change. The receiver is a
downstream notification destination only. A delivery failure cannot repeat a
collection, reverse settlement, or create payment truth.

## Ordered gates

1. Lock x-change `v1.0.101` and preserve the exact Composer source reference.
2. Add host-owned receiver mapping without committing a receiver secret.
3. Add `partner-payments` to every deployed worker queue declaration.
4. Prove missing, malformed, or short configuration adds no receiver.
5. Prove valid configuration preserves package defaults and other receivers.
6. Run focused host, deployment, full-suite, formatting, build, and Composer
   acceptance in proportion to the touched surface.
7. Merge to x-PayOut `main` and publish the next immutable beta.
8. Retire historical branches only after merged ancestry or patch-equivalence
   is proven.

## Safety boundaries

- Delivery is disabled by default.
- No receiver secret is stored in Git, generated state, reports, or logs.
- Automated acceptance sends no HTTP notification and performs no financial
  operation.
- Live receiver enablement and deployment remain separately authorized gates.
- Immutable release branches remain historical evidence and are not retired.
