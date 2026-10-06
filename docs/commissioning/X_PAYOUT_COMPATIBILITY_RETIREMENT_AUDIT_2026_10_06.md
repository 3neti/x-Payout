# x-PayOut Compatibility Retirement Audit

**Audited:** 2026-10-06

**Accepted operational baseline:** x-PayOut `v1.0.0-beta.73` at
`e073e616da65036fbf94e4bb7ee7eea8521088d0`

**Decision:** The released portable controller and recovery custody
prerequisites are accepted. Compatibility retirement is eligible for a
separately authorized slice; retain the rollback reader and private worksheets
until that authority is granted and its acceptance sequence passes.

## What the beta.71 proof established

The portable `bin/x-payout-deploy continuous` controller can reconstruct the
Laravel Cloud foundation, reconcile managed-secret identities and changed
runtime values, deploy an immutable release, commission exactly once behind a
preview token, activate the custom domain, verify strict and MCP readiness, and
repeat without mutation. It does not read either legacy worksheet.

That proof satisfies the cleanroom prerequisite for reviewing compatibility
retirement. It does not prove that every surrounding operator and CI path has
already stopped using compatibility mode.

## Remaining active dependencies

| Path | Current role | Why it blocks immediate removal | Required replacement |
| --- | --- | --- | --- |
| `scripts/deploy-production-cleanroom.sh` | Explicit rollback controller | Sources and mutates `deployment.production.local`, including generated resource IDs | `bin/x-payout-deploy continuous`, after a documented deprecation window |

The normal runtime and continuous controller do not depend on these
paths. The blockers are operational tooling and rollback compatibility, not a
hidden dependency in the commissioned application.

## Deprecation release candidate

The README now identifies `bin/x-payout-deploy` as the supported Laravel Cloud
entry point. The compatibility controller describes itself as rollback-only
and exits with a migration path before reading a worksheet unless the current
invocation includes `--compatibility-rollback`.

Focused tests prove the missing-authority failure, the explicitly authorized
rollback path, fake-transport parity, and the existing worksheet safety
boundaries.

Beta.73 was deployed through the portable controller as deployment
`depl-a2ea2d61-0acc-40c8-8cd7-06c09efa48c6` at the exact release commit. The
first controller monitor timed out while Laravel Cloud was still deploying;
the safe retry recovered that same successful deployment rather than creating
a replacement. The immediate identical rerun left the sanitized Cloud
environment and deployment inventories unchanged. A separate read-only
portable verifier matched the same deployment and passed strict
pre-commission readiness. Commissioning, domain activation, secret rotation,
invitation delivery, and financial operations were not authorized.

## Portable verifier and CI migration completed

`bin/x-payout-deploy precommission` now consumes verified compiled artifacts,
rediscovers the exact Laravel Cloud resource and managed-secret identities,
proves the active deployment matches the immutable release branch and commit,
runs the strict remote pre-commission doctor, and emits owner-only sanitized
evidence. It accepts no mutation authority flags and writes no generated state.

The reusable GitHub workflow now calls that verifier directly. It no longer
declares `PAYOUT_PLATFORM_CONTROL_ENV`, creates `/tmp/x-payout-platform.env`,
or invokes `scripts/deploy-production-cleanroom.sh`.

The same command passed against the live beta.71 environment without
`--apply`. It matched deployment
`depl-a2e99ccb-7b85-4d63-9c17-28579d0add4a` at commit
`b9869bd8f85bb8b65c5038f03675d17913b60688`, passed the strict remote doctor,
and wrote `0600` sanitized evidence with disposition `verified_existing`.

## Tracked candidates for eventual removal

- `deployment.production.example`
- `deployment.production.secrets.example`
- `ops/deployment/contracts/legacy-setting-classification.json`
- legacy-only and parity tests identified by the machine-readable audit
- worksheet-oriented README and current secret-custody instructions

Historical commissioning logs, the deployment compass, and the governing plan
must be preserved. Their references are evidence of how earlier releases were
operated, not executable dependencies.

## Private local worksheet posture

Both ignored local worksheets still exist with owner-only mode `0600`. The
custody audit inspected key names and whether entries were populated, but did
not print, copy, hash, or retain any value. The worksheets must not be
committed, copied into evidence, or deleted by an automated repository change.

`deployment.production.local` can be deleted manually only after all tracked
readers have been retired and the deprecation release is accepted.

`deployment.production.secrets.local` additionally requires confirmation that
every non-regenerable recovery value has authoritative custody outside the
worksheet. Laravel Cloud managed-secret IDs do not make secret values
recoverable.

## Recovery custody audit

The value-free custody contract maps all 18 production recovery names to an
owner role, recovery authority, method, continuity class, and disposition.
Every provider-issued or application-generated credential has a documented
rotation path. The live Laravel Cloud environment has all 18 required names
attached.

The Passport signing pair was deliberately rotated under explicit authority.
The complete 18-name `ops/deployment/secrets.env` recovery inventory is
gitignored, owner-only, and independently matches the live production public
key. Existing tokens signed by the superseded pair require governed reissue
when needed; this does not block compatibility retirement.

Only names, attachment IDs, file modes, and populated-key names were examined.
No secret value or value-derived hash was emitted or retained.

## Required deprecation bridge

1. Obtain current-run authority naming the exact compatibility artifacts.
2. In that separately authorized removal slice, delete executable readers,
   examples, duplicate parsing, and legacy-only tests while preserving
   historical evidence.
3. Publish and deploy the retirement release, prove its immediate no-op rerun,
   and only then delete either private worksheet manually.

## Result

Compatibility retirement is **ready for separate authorization**. Beta.73
satisfies the released-controller, recovery-custody, exact-deployment, and
mutation-free-rerun prerequisites. No compatibility artifact or private
worksheet was removed by this audit update.
