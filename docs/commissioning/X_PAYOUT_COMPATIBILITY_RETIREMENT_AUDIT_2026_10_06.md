# x-PayOut Compatibility Retirement Audit

**Audited:** 2026-10-06

**Accepted operational baseline:** x-PayOut `v1.0.0-beta.71` at
`b9869bd8f85bb8b65c5038f03675d17913b60688`

**Decision:** Retain compatibility mode until a bounded deprecation bridge is
complete. Do not delete either private worksheet or its tracked readers yet.

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
| `.github/workflows/deploy-x-payout.yml` | Transitional pre-commission workflow | Reconstructs `PAYOUT_PLATFORM_CONTROL_ENV` and invokes the legacy pre-commission command | A portable, read-only verifier using the compiled profile and generated state |
| `scripts/deploy-production-cleanroom.sh` | Explicit rollback controller | Sources and mutates `deployment.production.local`, including generated resource IDs | `bin/x-payout-deploy continuous`, after a documented deprecation window |

The normal beta.71 runtime and continuous controller do not depend on these
paths. The blockers are operational tooling and rollback compatibility, not a
hidden dependency in the commissioned application.

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

1. Add a portable, read-only pre-commission verifier and migrate the reusable
   GitHub workflow away from `PAYOUT_PLATFORM_CONTROL_ENV`.
2. Make the portable controller the only documented default. Mark the legacy
   script rollback-only and fail closed with a migration path when invoked
   without explicit compatibility authority.
3. Ship one deprecation release and prove fake-transport parity plus an
   unchanged operational rerun.
4. Confirm private secret recovery custody.
5. In a separately authorized removal slice, delete executable readers,
   examples, duplicate parsing, and legacy-only tests while preserving
   historical evidence.

## Result

Compatibility retirement is **admissible but blocked**. The next bounded slice
is the portable pre-commission verifier and CI migration. No Cloud, DNS,
provider, commissioning, invitation, secret, or financial state changed during
this audit.
