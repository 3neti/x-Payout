# x-PayOut Compatibility Retirement Audit

**Audited:** 2026-10-06

**Accepted operational baseline:** x-PayOut `v1.0.0-beta.74` at
`1b00f7d3d7e8f1bc218f99fb92269d01c62a3044`

**Decision:** Compatibility mode is retired. The classified reader, examples,
duplicate legacy parsing, and legacy-only tests are removed. Historical
evidence remains. The two ignored private worksheets were deleted only after
the beta.74 exact-release deployment and mutation-free rerun passed.

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

None. Executable and workflow scans find no dependency on either worksheet,
the retired controller, `PAYOUT_PLATFORM_CONTROL_ENV`,
`--control=`, or `upsert_local_state()`.

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

## Retired tracked artifacts

- `deployment.production.example`
- `deployment.production.secrets.example`
- `ops/deployment/contracts/legacy-setting-classification.json`
- legacy-only and parity tests identified by the machine-readable audit
- worksheet-oriented README and current secret-custody instructions

Historical commissioning logs, the deployment compass, and the governing plan
must be preserved. Their references are evidence of how earlier releases were
operated, not executable dependencies.

## Private local worksheet posture

Before retirement, both ignored local worksheets existed with owner-only mode
`0600`. The custody audit inspected only the approved metadata and never
printed, copied, hashed, or retained a secret value.

After beta.74 exact-release and no-op acceptance, both obsolete worksheets were
deleted. The complete, gitignored, owner-only
`ops/deployment/secrets.env` recovery inventory remains intact. Laravel Cloud
managed-secret attachments remain runtime custody, not value recovery.

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

## Completed acceptance bridge

1. Current-run authority named the exact compatibility artifacts.
2. Executable readers, examples, duplicate parsing, and legacy-only tests were
   removed while historical evidence was preserved.
3. Beta.74 was published and deployed at exact commit
   `1b00f7d3d7e8f1bc218f99fb92269d01c62a3044` as deployment
   `depl-a2ea332f-3a13-44f8-b271-1f0c3543d849`.
4. The immediate successful rerun preserved the normalized Cloud topology
   byte-for-byte at SHA-256
   `f7907933d1595752d6e66cc385afe2494adccea3207fa1d1ad1db0308b42c8c3`.
5. Strict doctor passed `37/37`, x-mcp doctor passed `4/4`, and the public
   host returned HTTP `200`.
6. Only then were the two private worksheets deleted.

## Result

Compatibility retirement is **complete**. Beta.74 is operational at the exact
retirement commit, its immediate successful rerun is mutation-free,
commissioning remained skipped, and no DNS, domain, secret rotation,
invitation, provider, messaging, OAuth issuance, or financial authority was
used.
