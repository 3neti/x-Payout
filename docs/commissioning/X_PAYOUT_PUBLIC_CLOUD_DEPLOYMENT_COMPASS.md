# x-PayOut Public Cloud Deployment Compass

**Last updated:** 2026-10-04

**Current position:** Gate 10 — fresh beta.64 cleanroom and custom-domain acceptance proved

**Overall status:** Fresh host is commissioned and verified; institutional handoff packaging remains

**Intended public host:** `https://payout.disburse.cash`

## Purpose

This compass is the durable operational memory for repeatedly deploying the
shared x-PayOut beta and demonstrating the same procedure to banks and EMIs.
Update it after every completed, blocked, rolled-back, or deferred gate.

The governing plan is
[X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_PLAN.md](X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_PLAN.md).

## Proven baseline

- A published x-PayOut release can be installed from Packagist without a local
  path repository.
- Laravel Cloud can provide the application, PostgreSQL database, cache,
  worker, scheduler, deployment, commands, and custom-domain attachment.
- A separately controlled private DigitalOcean Space can provide durable claim
  evidence and keepsake storage.
- Strict pre-commission and final doctors, Treasury opening capitalization,
  funded Maker and Checker invitations, public On-Demand Issuance, claims, and
  low-value real-money settlement have all been exercised in prior controlled
  cleanrooms.
- `payout.disburse.cash` has previously routed successfully with valid TLS.
- Previous production resources and financial evidence remain historical
  records; they are not instructions to replay transactions or balances.

Exact application, environment, deployment, process, database, cache, domain,
and secret IDs belong in the local value-free deployment control worksheet for
each run. Never copy historical identifiers into a new run without inspection.

## Gate ledger

| Gate | State | Evidence or remaining action |
| --- | --- | --- |
| 1. Record proven deployment | Complete | Historical deployment and lifecycle evidence preserved |
| 2. Close and reconcile retired host | Complete for the cleanroom objective | Previous host retired under explicit authority; no balance migration authorized |
| 3. Capture retirement evidence | Complete | Cutover and retained evidence recorded before replacement |
| 4. Freeze deployment kit | Complete | Cloud and Forge adapters, exact-version source, and prebuilt assets present |
| 5. Controlled retirement | Complete | Destructive actions separately authorized and executed |
| 6. Fresh hosting foundation | Complete | Isolated database, cache, compute, worker, scheduler, and private Space topology proved |
| 7. Safe commissioning | Complete | Pre-doctor, principals, Treasury, funded invitations, and final doctor proved |
| 8. Generated-domain acceptance | Complete | Browser, worker, storage, MCP, and report checks proved |
| 9. Restore custom domain | Complete with Cloud metadata caveat | DNS and TLS proved; Cloud control-plane metadata may reconcile asynchronously |
| 10. Institutional handoff | **In progress** | Managed-secret and pre-commission rehearsal passed; publish the corrected Cloud secret/runtime boundary |

## Turnkey operating contract

The Laravel Cloud adapter executes:

`plan → foundation → configure → deploy → pre-commission → commission → verify → domain → domain acceptance`

The `continuous` phase runs these steps without conversational pauses after an
authorized operator supplies the prerequisites. It remains fail-closed:

- infrastructure mutation requires `DEPLOY_CONFIRM_PRODUCTION=YES`;
- commissioning requires its own confirmation and provider cutover evidence;
- domain activation requires its own confirmation;
- every required managed secret name must already be attached to the target
  Cloud environment; and
- no secret value is read from Cloud or accepted from the production control
  worksheet.

If commissioning authority is absent, continuous execution stops after the
strict pre-commission doctor. That checkpoint is a successful safe stop, not a
partially commissioned host.

The domain gate is now part of the same continuous contract. It preserves the
DigitalOcean nameservers, waits within a bounded window, and accepts lingering
Laravel Cloud `origin=pending` metadata only when hostname and TLS are verified
and the live HTTPS origin probe succeeds. Its acceptance checks do not create a
funding order, Pay Code, claim, provider mutation, or message.

## Fresh beta.64 cleanroom custom-domain evidence — 2026-10-04

- Application: `app-a2e593f4-0252-40a9-816a-135de5b47d3c`.
- Environment: `env-a2e593f5-ce84-4cbb-a6e0-522ed343126f`.
- Published x-PayOut release: `v1.0.0-beta.64` at `d612bb6c`.
- Installed x-change: `v1.0.98`.
- Final strict doctor after custom `APP_URL`: `37/37`.
- Balance report: complete, read-only, no blockers.
- Domain attachment: `domain-a2e5a1a4-f6a5-4892-aef8-3dcaa3abd5fd`.
- DigitalOcean nameservers and unrelated records were preserved.
- Existing A and ACME records were reusable; one obsolete Cloud ownership TXT
  record from the deleted host was removed, then the attachment was recreated.
- Hostname and TLS became verified. Cloud origin metadata remained pending,
  while valid TLS and live HTTP 200 routing were independently proved.
- Homepage, claim entry, public MCP discovery, and the disabled public-issuance
  surface passed on `https://payout.disburse.cash`.
- The funded Maker and Checker invitations remained the only two Pay Codes;
  neither was claimed and commissioning was not replayed.

## Cleanroom retrospective and DNS automation decision — 2026-10-04

### Gaps exposed

- DigitalOcean DNS reconciliation required an authenticated browser session,
  interrupting an otherwise continuous installation.
- A stale Cloud ownership TXT record survived application deletion and blocked
  the first replacement attachment.
- Laravel Cloud's first failed domain attachment retained a frozen verification
  timestamp and had to be replaced after DNS was corrected.
- Laravel Cloud origin metadata remained pending after hostname, TLS, and live
  HTTPS routing were already healthy.
- The public `APP_URL` required a final idempotent configuration deployment
  after custom-domain acceptance.

### Corrections now in the deployment contract

- database, cache, deployment, hostname, and TLS operations have bounded waits;
- exact DNS requirements are emitted when verification stops;
- a failed domain attachment may be replaced without touching the application,
  nameservers, or financial state;
- `origin=pending` is accepted only when hostname and TLS are verified and a
  real HTTPS origin probe passes;
- homepage, claim entry, MCP discovery, and disabled public issuance form the
  non-financial custom-domain acceptance suite; and
- custom-domain reconciliation is part of the continuous reinstall lifecycle.

### DigitalOcean CLI disposition

The cleanroom script now includes an optional `doctl` DNS adapter. It uses a
dedicated custom-scoped token and named context while enforcing an exact
`disburse.cash` zone and managed-record allowlist because DigitalOcean's domain
scopes are broader than one DNS zone.

The adapter may reconcile only:

- `payout.disburse.cash` A records requested by Laravel Cloud;
- `_acme-challenge.payout.disburse.cash` CNAME records;
- the corresponding `www.payout.disburse.cash` companion records; and
- obsolete `_cf-custom-hostname.payout.disburse.cash` ownership tokens that are
  demonstrably absent from Laravel Cloud's current desired record set.

It never mutates NS, MX, mail-verification, `netbank.disburse.cash`, Spaces, or
any unrelated record. Manual DNS remains the fail-safe default.

### DigitalOcean CLI initialization — 2026-10-04

- Installed DigitalOcean `doctl` `1.167.0` on the controlled operator Mac.
- Created the 90-day custom-scoped token `x-payout-production-dns` with only
  Domain create, read, update, and delete permissions.
- Initialized the local named context `x-payout-production-dns`; the token is
  absent from Git, Laravel Cloud, application variables, and deployment files.
- Verified the local credential file is owner-readable and owner-writable only
  (`0600`).
- A read-only DNS query returned the expected allowlisted records: the
  `payout` A record, `_acme-challenge.payout` CNAME, and `www.payout` A record.
- No DNS record was created, changed, or deleted during initialization.
- The token expires on January 2, 2027 and must be rotated or revoked earlier
  if the operator Mac or credential boundary is no longer trusted.

### DNS adapter dry-run evidence — 2026-10-04

- `domain-reconcile` is non-mutating unless `--apply` is supplied.
- Live dry-run normalization produced two authoritative NOOPs: the `payout` A
  record and `_acme-challenge.payout` CNAME.
- The existing `www.payout` record remained untouched because it was not in
  Laravel Cloud's current desired set.
- Before and after allowlisted snapshots were written with mode `0600`.
- The adapter rejects empty Cloud record sets, records outside the allowlist,
  ambiguous existing records, and any write lacking all three confirmations:
  production, domain cutover, and DNS write.
- Isolated tests prove create, update, stale ownership-token deletion,
  post-write verification, and recovery snapshots without touching live DNS.

The live domain required no mutation. Automated writes remain disabled in the
committed example and require `DEPLOY_DNS_AUTOMATION_ENABLED=true` plus the
independent `DEPLOY_CONFIRM_DNS_WRITE=YES` ceremony.

## Secret custody decision

### 2026-10-03 — Laravel Cloud is the runtime secret authority

Keeper Business could not be purchased for the Philippines tenant and
HashiCorp Vault Dedicated is disproportionate to the current shared beta.
Neither product is a deployment dependency.

The accepted custody model is:

- Laravel Cloud managed secrets for active runtime credentials;
- local `.env` files only for development and sandbox environments;
- provider portals for recovery and credential rotation;
- Laravel Cloud-managed database credentials for attached databases;
- DigitalOcean for private Space and DNS resources; and
- a committed inventory containing secret names, purposes, owners, provider
  sources, rotation procedures, and Cloud secret IDs, but never values.

Laravel Cloud secret values are not exported or read back. If a provider
credential is lost, rotate it at the issuing provider and replace the managed
secret. `APP_KEY` and private signing keys require controlled recovery custody
because blind rotation can invalidate encrypted data or signatures.

## First sanitized continuous rehearsal — 2026-10-04

- Published commit: `ff0e78d`.
- Published release: `v1.0.0-beta.61`.
- Target application: `app-a2e3963b-0a2a-4c81-a49c-7e3b01273bd5`.
- Target environment: `env-a2e3963c-f6d5-4ffd-a4a6-a414deb445c8`.
- Environment status before rehearsal: `running`.
- Managed-secret attachment inventory: empty.
- Attachment checkpoint result: exit code `79`.
- An independent read-only remote strict pre-commission doctor subsequently
  passed `27/27`, proving the current direct runtime variables remain healthy.
- Deployment: not run.
- Commissioning: not run.
- Domain, financial records, provider activity, claims, SMS, and storage: not
  mutated.

The environment has masked runtime variables, but those variables are not
Laravel Cloud managed-secret attachments. The new adapter correctly refused to
treat masked variables as recoverable secret custody and did not attempt to
read them.

The approved re-entry inventory found candidate values for only part of the
required set. Eight values have no authoritative local source. `APP_KEY` is
Laravel Cloud-managed and is deliberately excluded from re-entry. No partial
secret set was created or attached because an incomplete override could damage
an otherwise healthy environment.

## Managed-secret bootstrap rehearsal — 2026-10-04

- The working testing environment became the first authority for shared
  integration credentials.
- `APP_KEY`, database credentials, cache credentials, and session state were
  not copied.
- A new least-privilege DigitalOcean Spaces key was limited to the retained
  production evidence bucket.
- Laravel Cloud's 30-attached-secret ceiling was reached and diagnosed.
- The deployment contract was corrected so only credentials and private keys
  require managed-secret custody; public and non-sensitive provider topology
  is now ordinary runtime configuration.
- Deployment `depl-a2e588f1-2f6b-46a7-9d26-c87649e4fe38` succeeded.
- The managed-secret attachment gate passed.
- Strict pre-commission doctor passed `27/27` under command
  `comm-a2e5898a-6e85-4804-8502-bc2763f723ea`.
- A real private-Space write/read/delete probe passed under command
  `comm-a2e589bd-2bdf-4f23-9224-bb8dd125ecd1` and removed its probe object.
- No commissioning or financial workflow was executed.

## Safety posture

- Never put production credential values in Git, the deployment control file,
  logs, reports, prompts, or copied command output.
- Never infer commissioning authority from deployment authority.
- Never replay shared NetBank history or infer exclusive host ownership from a
  provider balance.
- Never migrate Client Funds or other balances without a separately approved
  continuity plan.
- Never delete a Cloud, DigitalOcean, DNS, or provider resource unless the
  exact resource is named in a fresh authorization.
- A new real-money payment, SMS, claim, refund, or payout always requires its
  own acceptance authority.

## Known risks and deferred scope

1. Managed secret values cannot be recovered from Laravel Cloud; provider
   rotation and a controlled recovery copy for non-regenerable keys remain
   operator responsibilities.
2. DigitalOcean Space and DNS are external prerequisites. The adapter verifies
   their identifiers and application behavior but does not create, inspect, or
   modify them without separate authority.
3. Custom-domain origin metadata may remain pending briefly after DNS and TLS
   are operational. Live routing and certificate checks remain authoritative
   acceptance evidence while the Cloud control plane reconciles.
4. Balance migration remains deferred. Cleanroom commissioning recognizes only
   the explicitly approved provider cutover posture.
5. A successful shared-host cleanroom does not replace a bank or EMI's
   licensing, credential ownership, governance, reconciliation, support, and
   incident-response duties.

## Immediate next controlled move

Publish the rehearsal hardening as the next beta, then repeat continuous mode
against the already operational instance. The run must recognize operational
commissioning state, skip the one-time ceremony, exit its deployment monitor
after a terminal result, and complete domain acceptance without operator
intervention. A fresh destructive cleanroom remains a separately authorized
demonstration.

## Beta.65 continuous rehearsal evidence — 2026-10-04

- Published x-PayOut `v1.0.0-beta.65` at commit `0a77d85`.
- Laravel Cloud deployment `depl-a2e5e5ac-d3e3-4e5f-a633-76b165961eae`
  reached `deployment.succeeded` at the exact commit.
- Strict pre-commission doctor passed `27/27`.
- The first continuous implementation exposed two fail-closed gaps:
  Laravel Cloud's command wrapper reported success while the inner bootstrap
  exited `1`, and `deploy:monitor` remained attached after emitting terminal
  success.
- The repeated bootstrap correctly made no duplicate capitalization, but it
  left the commissioning manifest stale because an already initialized
  Treasury could not be capitalized again without authoritative opening
  reconciliation.
- Read-only balance evidence remained complete: provider inventory equaled
  Treasury positions, the provider snapshot was fresh, and no blockers or
  warnings were present.
- The existing-installation adoption command repaired only the stale
  commissioning manifest. Commissioning returned to `operational`, and final
  strict doctor passed `37/37`.
- DigitalOcean DNS reconciliation was an exact no-op. Laravel Cloud continued
  to report `origin=pending`, but verified TLS and the live origin probe passed.
- Home, Claim, public MCP discovery, and public On-Demand Issuance acceptance
  passed at `https://payout.disburse.cash` without creating a funding order.

The next script revision treats the inner `exitCode` as authoritative, skips
bootstrap when commissioning status is already operational, and bounds the
Cloud monitor with deployment-status polling. These controls are covered by
focused regression tests before the next release.

## Update protocol

After every gate:

1. update **Current position** and **Overall status**;
2. update the gate ledger;
3. record exact evidence and identifiers without secret values;
4. append decisions, blockers, and accepted risks without deleting history;
5. distinguish read-only evidence from financial or external mutations; and
6. state the next bounded move and its authorization requirement.
