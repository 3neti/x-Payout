# x-PayOut Public Cloud Deployment Compass

**Last updated:** 2026-10-02  
**Current position:** Corrective release ready; storage recovery required before Gate 4  
**Overall status:** Blocked fail-closed; deployment succeeded, but commissioning is prohibited  
**Target:** `https://payout.disburse.cash`

## Purpose

This compass is the durable operational memory for the first public x-PayOut
cleanroom deployment. Update it after every completed, blocked, rolled-back, or
explicitly deferred gate.

The governing plan is
[X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_PLAN.md](X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_PLAN.md).

## Current facts

- Laravel Cloud application `x-PayOut` now exists as
  `app-a2e24259-f715-4445-97e9-1a52680273d9` in `ap-southeast-1`.
- Its production environment is
  `env-a2e2425b-d774-44b2-a667-31abaa36a224` with generated URL
  `https://x-payout-production-mixtag.laravel.cloud`.
- No current Laravel Cloud environment has a custom domain attached.
- `payout.disburse.cash` has no attachment conflict inside the current Laravel
  Cloud organization.
- External DNS ownership and records have not yet been verified.
- The proven nearby topology is `ap-southeast-1`.
- `x-change-testing / testing` remains running and must not be modified by this
  deployment.
- A clean canonical checkout at tag `v1.0.0-beta.51` was recovered into branch
  `codex/x-payout-beta52-release`.
- The corrective release candidate requires `3neti/x-change ^1.0.95`
  and `3neti/x-mcp ^0.2.0`, contains no Composer path repository, and locks
  those packages to `v1.0.95` and `v0.2.0` respectively.
- Composer strict validation passes. The focused build, bootstrap,
  commissioning-invitation, and release-contract suite passes with 10 tests
  and 62 assertions. The full host suite passes with 49 tests and 220
  assertions when supplied a test-only application key.
- Packagist publishes `3neti/x-payout v1.0.0-beta.51`; its tag and `main`
  resolve to commit `ef09567d1dc4319fcdf6fd983affd0f2560f67be` and its
  published Composer metadata requires `3neti/x-change:^1.0`.
- The intended x-change release at planning time is `v1.0.95`; the first Cloud
  deployment must still prove the exact lock and installed runtime version.
- Historical balances, users, and Pay Codes will not be restored into this
  cleanroom.
- Dedicated PostgreSQL cluster `frosty-king-61929244`, schema `1149023`, and
  private Valkey cache `cache-a2e24572-88d9-4882-85d0-2a0dce8505f4` are
  attached to the production environment.
- Private bucket `fls-a2e246fb-aa54-4b75-abb0-ab45681d3e35` was created for
  x-PayOut claim evidence. Its credentials are attached through encrypted
  Laravel Cloud secrets, but bounded runtime diagnostics prove that it is not
  operational from the environment.
- First deployment `depl-a2e24ea7-75aa-4fa1-a487-cf2dd564c763` succeeded from
  source commit `ef09567d1dc4319fcdf6fd983affd0f2560f67be`.
- The deployed runtime contains `3neti/x-change v1.0.64`, not the intended
  `v1.0.95`, and does not contain `3neti/x-mcp`. It must not be commissioned.
- `public/build/manifest.json` is present in the deployed release.
- The generated URL redirects to the protected commissioning surface and the
  instance remains financially locked.

## Gate ledger

| Gate | State | Evidence required before completion |
| --- | --- | --- |
| 0. Release integrity | Ready for publication | Corrective beta candidate locks x-change `v1.0.95` and x-mcp `v0.2.0`; validation and full host tests pass |
| 1. Cloud foundation | **Complete** | New app/environment, dedicated PostgreSQL, and private Valkey are present and attached |
| 2. Production configuration | **Blocked** | Runtime values and secrets are applied, but the private evidence bucket fails real writes in both S3 addressing modes |
| 3. Deploy before commissioning | **Complete** | Deployment `depl-a2e24ea7-75aa-4fa1-a487-cf2dd564c763` succeeded and the protected commissioning surface is active |
| 4. Commission once | Pending | Pre-commission pass, bootstrap result, final strict-doctor pass, principals and reserves |
| 5. Generated-domain lifecycle | Pending | Maker/Checker claims, EULA, low-value lifecycle, balance report, final doctor |
| 6. Custom-domain connection | Pending | Cloud domain ID, DNS records applied, hostname/SSL/origin connected, primary domain set |
| 7. Public-domain acceptance | Pending | Browser and runtime acceptance through `payout.disburse.cash` |

## Safety posture

- The target Cloud application and isolated infrastructure exist.
- No commissioning mutation has occurred.
- No onboarding invitations have been created.
- No balances or records have been transferred.
- No DNS record has been changed.
- Public traffic has not been switched.
- The private evidence bucket has not accepted any verified object.
- The existing testing instance remains the only active x-change host in scope.

## Decisions

### 2026-10-02 — Separate proof from traffic switching

The generated Laravel Cloud URL is used for deployment, commissioning, and
lifecycle proof. `payout.disburse.cash` is attached only after those gates pass.

### 2026-10-02 — Released packages only

The cleanroom must originate from an exact published x-PayOut release. Local
path repositories and `@dev` dependencies are disallowed.

### 2026-10-02 — Fresh operational state

No database, account, Pay Code, or balance restoration is part of this
deployment. Continuity evidence may be retained separately, but it is not an
authorization to recreate balances.

### 2026-10-02 — Fail closed

Failed deployment, readiness, commissioning, storage, provider, or domain gates
must not be converted into partial public operation.

## Known blockers and risks

1. `v1.0.0-beta.51` deploys successfully but installs `3neti/x-change
   v1.0.64`; the accepted release target is `v1.0.95`. `3neti/x-mcp` is also
   absent. A corrected x-PayOut release is required before commissioning.
2. The dedicated private bucket is nonfunctional from the runtime. Diagnostic
   command `comm-a2e254b1-34d9-4e1e-b97d-45b98eac23fe` returned
   `written=false` for both virtual-hosted and path-style addressing. The
   preceding check `comm-a2e25411-3966-4a34-8848-ed87713f8b01` failed with
   `League\\Flysystem\\UnableToCheckFileExistence`.
3. External DNS access for `disburse.cash` will be required at Gate 6.
4. Shared NetBank credentials can expose one provider inventory to multiple
   x-change hosts. Treasury snapshots must therefore be interpreted as
   instance evidence, not exclusive ownership of the bank balance.
5. Real-money lifecycle acceptance requires a separately authorized amount and
   must not be inferred from approval of this plan.

## Immediate next move

Complete two corrective, non-financial prerequisites:

1. prepare and publish the next x-PayOut beta with an exact release lock for
   `3neti/x-change v1.0.95` and the intended `3neti/x-mcp` release;
2. replace or repair evidence storage and require a successful bounded
   write/read/delete proof;
3. redeploy and verify exact runtime packages, assets, HTTPS canonical URLs,
   and the strict pre-commission doctor; and
4. stop without commissioning if any of those checks fails.

Do not change the authoritative nameservers for `disburse.cash`. After all
generated-domain lifecycle gates pass, attach `payout.disburse.cash` in Laravel
Cloud, publish only the exact CNAME/TXT records returned by Cloud at the current
DNS provider, verify the domain, and then make it primary.

The corrective files are prepared in a clean canonical Git branch. Publication
still requires explicit authorization to push the release commit and create
the next x-PayOut beta tag. The older dirty backup repository remains
untouched.

## Update protocol

After every gate:

1. change **Current position** and **Overall status**;
2. update the gate ledger;
3. record exact evidence and identifiers;
4. add new decisions, blockers, or risks without deleting history;
5. state the next bounded move; and
6. distinguish read-only evidence from external or financial mutations.
