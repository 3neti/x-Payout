# x-PayOut Retirement and Cleanroom Redeployment Compass

**Last updated:** 2026-10-03

**Current position:** Gate 2 — corrective dispositions required

**Overall status:** Audit complete; unresolved ledger obligations block retirement

**Current public host:** `https://payout.disburse.cash`

## Purpose

This compass is the durable operational memory for retiring the current public
x-PayOut beta and recreating it as a cleanroom demonstration for banks and
EMIs. Update it after every completed, blocked, rolled-back, or deferred gate.

The governing plan is
[X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_PLAN.md](X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_PLAN.md).

## Current verified facts

- Laravel Cloud application:
  `app-a2e24259-f715-4445-97e9-1a52680273d9`.
- Production environment:
  `env-a2e2425b-d774-44b2-a667-31abaa36a224`.
- Public URL: `https://payout.disburse.cash`.
- x-PayOut: `v1.0.0-beta.59`, commit `39c56c1`.
- x-change: `v1.0.98`, commit `5565cf14`.
- Active deployment:
  `depl-a2e2e354-98c3-4633-bb23-5098fed89b76`.
- Queue worker:
  `process-a2e2caf6-a96d-46ff-bb49-d118c1feca12` consuming
  `x-change-funding,x-change-feedback,default`.
- The release lock is Packagist-backed. The temporary Composer Git repository
  override was removed.
- PostgreSQL, durable cache, and separately controlled private DigitalOcean
  Space are part of the working topology.
- Public On-Demand Issuance and the public claim route have been exercised with
  real money.

## ZLXD lifecycle evidence

- Funding order: `01M3YETGTHB17A1EE65MRDRDNG`.
- Provider transaction: `438868770`.
- Payment: `PHP 40.00`.
- Pay Code: `ZLXD`.
- Principal: `PHP 25.00`.
- Commercial charge: `PHP 15.00`.
- Exactly one Commercial Sale was observed when issuance completed.
- The service-provider payable allocation was `PHP 15.00`.
- The user confirmed that ZLXD was claimed and redeemed.
- The user confirmed receipt of the `PHP 25.00` bank transfer in GCash.

**Disposition:** The external principal obligation is fulfilled. NetBank
reports the payout as completed and the user confirmed receipt, but the local
reconciliation remains `pending`. The persisted payout and Treasury release
must be synchronized exactly once before deletion.

## Gate ledger

| Gate | State | Remaining evidence or action |
| --- | --- | --- |
| 1. Record proven deployment | In progress | Finalize sanitized deployment record from captured audit evidence |
| 2. Close and reconcile current host | **Blocked** | Synchronize ZLXD; dispose of `PHP 40.00` Client Funds; resolve two funded invitations; disable new orders |
| 3. Capture retirement evidence | Pending | Recovery point, reports and hashes, Space inventory, cutover watermark |
| 4. Freeze deployment kit | In progress | Cloud and Forge adapters are tested locally; Packagist-only reinstall and live adapter proof remain |
| 5. Controlled retirement | Not authorized | Present exact deletion set and obtain fresh explicit approval |
| 6. Fresh hosting foundation | Pending | Choose Cloud or Forge; create isolated database/cache/storage, worker, scheduler, and deploy |
| 7. Safe commissioning | Pending | Cutover boundary, pre-doctor, principals, Treasury, final doctor |
| 8. Generated-domain acceptance | Pending | Browser, storage, worker, MCP, and report acceptance |
| 9. Restore custom domain | Pending | Domain, DNS, TLS, primary URL, final acceptance |
| 10. Institutional handoff | Pending | Sanitized repeatability and ownership bundle |

## Safety posture

- Do not delete the current app merely because the visible ZLXD lifecycle
  succeeded.
- No new public funding order should be created during retirement evidence
  capture.
- The retained private DigitalOcean Space and recovery point are outside the
  application-deletion set.
- Shared NetBank history must not be replayed or recapitalized by the
  replacement instance.
- A new real-money acceptance run requires separate authorization.
- Application deletion requires fresh explicit authorization after the exact
  resource set and final reconciliation are shown.

## Decisions

### 2026-10-02 — Preserve the successful lifecycle as evidence

ZLXD is the first completed public-production-beta proof for this retirement
cycle. Its payment, issuance, Commercial Sale, redemption, and payout evidence
must be preserved in the handoff bundle.

### 2026-10-02 — User-confirmed receipt is necessary but not the deletion gate

Receipt of the payout establishes the external outcome. Database, journal,
provider, and queue evidence remain necessary before destructive retirement.

### 2026-10-02 — Provider cutover is a financial control

Because the NetBank provider identity may be shared across hosts, the fresh
instance requires an explicit transaction watermark or cutover time. A fresh
database alone does not prevent recognition of historical provider activity.

### 2026-10-02 — Recreate from published artifacts

The cleanroom uses exact Packagist releases, packaged assets, a synchronized
lock, and no local repositories. This is the repeatability claim shown to
banks and EMIs.

### 2026-10-02 — Keep destructive authority narrow

Approval to document or reconcile is not approval to delete. The application,
database, cache, custom domain, or any retained evidence resource may be
deleted only when explicitly named in a later authorization.

### 2026-10-03 — Adopt Laravel Forge as the client-owned-server adapter

The deployment kit now has two first-class targets. Laravel Cloud remains the
adapter for the shared `payout.disburse.cash` service. Laravel Forge is the
adapter for a bank- or EMI-controlled VPS with its own infrastructure,
credentials, database, Redis, workers, scheduler, SSL, and backups.

Forge owns server and release operations. x-PayOut retains the exact-version
lock, pre-commission readiness, one-time commissioning, strict doctor, balance
evidence, and provider cutover controls. The recurring Forge deployment path
cannot invoke commissioning. Deployer is not combined with Forge and remains a
future adapter for unmanaged SSH or multi-server environments.

### 2026-10-03 — Start the cleanroom deployment record

The Laravel Cloud adapter completed a non-destructive preflight. The current
application remains running and no infrastructure was changed. The execution
log records the exact current topology, retained DigitalOcean Space, managed
secret IDs without values, failed unattached domain record, and a newly
allocated instance-scoped evidence prefix.

The preflight exposed one configuration correction for the replacement:
Laravel Cloud reports the existing app scheduler disabled even though scheduled
x-change activity is configured. The cleanroom foundation must explicitly
enable it. The deployment kit must be committed and published before it is
used for the source-only cleanroom proof.

## Known risks and deferred scope

1. ZLXD is redeemed and externally settled, but its local disbursement
   reconciliation remains `pending`; `PHP 25.00` remains in Pay Code Reserve.
2. An expired funding order credited `PHP 40.00` to Client Funds. That balance
   requires an explicit customer disposition before retirement.
3. Two funded onboarding invitations remain active and unredeemed, reserving
   `PHP 200.00`.
4. One historical failed issuance-resume job remains as incident evidence. Its
   order later issued successfully and the job must not be retried.
5. The provider snapshot is stale, so the final balance report is incomplete.
6. Provider inventory is shared across instances and is not proof of exclusive
   ownership by this host.
7. Balance migration is explicitly deferred; retirement evidence is not
   authority to recreate Client Funds in the replacement host.
8. A cleanroom demonstration does not replace a bank or EMI's licensing,
   governance, credential ownership, reconciliation, and incident-response
   duties.

## Immediate next controlled move

The read-only audit is recorded in
[PAYOUT_DISBURSE_CASH_RETIREMENT_AUDIT_2026_10_02.md](PAYOUT_DISBURSE_CASH_RETIREMENT_AUDIT_2026_10_02.md).

The next controlled gate is a separately authorized corrective disposition:

1. synchronize ZLXD's provider-completed result without creating a second
   payout;
2. choose how to return or otherwise honor the `PHP 40.00` Client Funds balance;
3. cancel or claim the two funded onboarding invitations;
4. disable new public issuance;
5. refresh the provider snapshot; and
6. rerun the read-only report and require a complete closing posture.

Do not clean failed jobs, delete resources, or recreate the application in the
same gate.

## Update protocol

After every gate:

1. update **Current position** and **Overall status**;
2. update the gate ledger;
3. record exact evidence and identifiers;
4. append decisions, blockers, and accepted risks without deleting history;
5. distinguish read-only evidence from financial or external mutations; and
6. state the next bounded move and its authorization requirement.
