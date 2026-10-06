# x-PayOut Compatibility Retirement Audit

**Audited:** 2026-10-06

**Accepted operational baseline:** x-PayOut `v1.0.0-beta.71` at
`b9869bd8f85bb8b65c5038f03675d17913b60688`

**Decision:** Retain compatibility mode until the beta.72 deprecation release
is operationally accepted. Do not delete either private worksheet or its final
tracked reader yet.

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
boundaries. Beta.72 remains a candidate until its exact release is deployed
through the portable controller and the immediate identical rerun is accepted
as mutation-free.

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

Both ignored local worksheets still exist with owner-only mode `0600`. Their
contents were not read during this audit. They must not be committed, copied
into evidence, or deleted by an automated repository change.

`deployment.production.local` can be deleted manually only after all tracked
readers have been retired and the deprecation release is accepted.

`deployment.production.secrets.local` additionally requires confirmation that
every non-regenerable recovery value has authoritative custody outside the
worksheet. Laravel Cloud managed-secret IDs do not make secret values
recoverable.

## Required deprecation bridge

1. Ship beta.72 and prove fake-transport parity plus an
   unchanged operational rerun.
2. Confirm private secret recovery custody.
3. In a separately authorized removal slice, delete executable readers,
   examples, duplicate parsing, and legacy-only tests while preserving
   historical evidence.

## Result

Compatibility retirement is **admissible but blocked** by beta.72 operational
acceptance, the explicit rollback/deprecation window, and recovery-custody
confirmation. No Cloud, DNS, provider, commissioning, invitation, secret, or
financial state changed while preparing this release candidate.
