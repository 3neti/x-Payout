# x-PayOut Public Cloud Deployment Compass

**Last updated:** 2026-10-04

**Current position:** Gate 10 — managed-secret bootstrap required

**Overall status:** Turnkey adapter published; first live rehearsal failed closed before commissioning

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
| 10. Institutional handoff | **Blocked safely** | Attach required Laravel Cloud managed secrets, then repeat the continuous rehearsal |

## Turnkey operating contract

The Laravel Cloud adapter executes:

`plan → foundation → configure → deploy → pre-commission → commission → verify → domain`

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
- Remote strict doctor: not run.
- Deployment: not run.
- Commissioning: not run.
- Domain, financial records, provider activity, claims, SMS, and storage: not
  mutated.

The environment has masked runtime variables, but those variables are not
Laravel Cloud managed-secret attachments. The new adapter correctly refused to
treat masked variables as recoverable secret custody and did not attempt to
read them.

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

Complete the managed-secret bootstrap as a separate authorized checkpoint:

1. create or identify the required organization-managed secret records;
2. populate them by approved re-entry or provider-side rotation, never by
   exporting the current masked environment values;
3. attach their IDs to the target environment;
4. rerun the attachment checkpoint and strict pre-commission doctor;
5. repeat the continuous rehearsal through the non-financial checkpoint; and
6. request separate authority before commissioning, domain cutover,
   real-money acceptance, or resource deletion.

## Update protocol

After every gate:

1. update **Current position** and **Overall status**;
2. update the gate ledger;
3. record exact evidence and identifiers without secret values;
4. append decisions, blockers, and accepted risks without deleting history;
5. distinguish read-only evidence from financial or external mutations; and
6. state the next bounded move and its authorization requirement.
