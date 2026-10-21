# Stamp Rendering Commissioning

**Updated:** 2026-10-21. **Status:** runbook for proposed provider selection;
no credentials, runtime changes, paid usage or activation performed by this document.
Companion: [deployment compass](X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_COMPASS.md).

## Sources of truth

- x-stamp: `docs/rendering/PLAN.md` and `docs/rendering/COMPASS.md` own the portable
  provider/quality design. Documentation branch: `docs/configurable-stamp-rendering`.
- x-change: `docs/claim-ux/stamp-browser-rendering-guide.md` owns instruction
  projection, frozen orders, artifact compatibility, retries and financial policy.
- This host owns environment settings, scoped credentials and operational
  acceptance. Change package source first; never patch generated frontend copies.

Cross-repository paths above are in their respective owning repositories. These
new documentation commits remain local until an explicit publication step.

## Last verified release evidence: 2026-10-20

This is a historical verification snapshot, not a fresh check of today's Cloud.

| Environment | Exact host commit | Deployment |
| --- | --- | --- |
| Testing | `d50eea7602e8f6540527bed4326337698da40191` | `depl-a3062a4a-e31d-40fc-9e5c-e80f314fd8b6` |
| Payout | `a6f1a0b6124108c6cfa40c493f1881816ea8ecc9` | `depl-a3062c1d-8963-407b-a644-1d4295d7a918` |

Both used x-change v1.0.255, x-stamp v1.4.0 and designs v1.3.0. Effective rendering
was standard only; comparison disabled. Node was present, but Browsershot,
Puppeteer and Chromium were absent at the predeployment inspection. Guest Stamp
previews, public UI, strict asset checks and operational inventory were verified.

Periodic funding `ModelNotFoundException` job failures were observed before and
after payout deployment; historical failures were preserved. One Cloud system
ERROR appeared during startup, with no message retrieved. Record new acceptance
against a fresh baseline rather than claiming the environment was error-free.

## Released configuration versus proposed settings

The following keys describe the **released Browsershot/GD integration**, not a
Cloudflare switch. Verify installed versions and effective config before use:

| Current key | Role |
| --- | --- |
| `STAMP_RENDERING_PROFILE` | `standard`, `browser` or `browser-hd` |
| `STAMP_RENDERING_ALLOWED` | Allowed combined profiles for new selections |
| `STAMP_RENDERING_COMPARISON_ENABLED` | Keep false on Cloud; route is local-only |
| `STAMP_NODE_BINARY` | Trusted local Node executable path |
| `STAMP_NODE_MODULE_PATH` | Trusted local Puppeteer module path |
| `STAMP_CHROME_PATH` | Trusted local browser executable path |

The proposed model separates quality `standard`/`hd` and provider
`gd`/`browsershot`/`cloudflare`/`auto`, with strict or best-effort policy. Provider
selection, Cloudflare credentials, circuit/budget settings and automatic fallback
are not implemented by those current environment keys. Do not configure fictional
provider variables or set `browser-hd` expecting it to call Cloudflare.

Keep GD/standard defaults until adapter releases and testing acceptance are
complete. GD has no native HD capability. New default selection may fall back to
standard before payment, provided the preview shows the actual result and the
resolved provider/quality is frozen before funding. Already-paid contracts retain
strict recovery semantics and must not be silently downgraded or switched.

## Testing commissioning gates

1. Adopt tagged adapter-capable x-stamp, then x-change, then host dependencies.
   Resolve the current browser artwork restrictions before broad HD activation.
   Review package capabilities and confirm new configuration keys actually exist.
2. Select the hosting strategy. Local Browsershot needs a production dependency,
   Puppeteer, Chromium/Linux libraries, fonts, safe browser permissions and measured
   web/worker capacity. For remote Cloudflare rendering, keep local browser
   dependencies optional and prove equivalent document/network/script isolation.
3. Enable Cloudflare only deliberately. Install credentials through Cloud managed
   secrets, scoped to the intended account's browser operation. Never reuse a
   Turnstile secret or broad DNS administration token. Record credential presence
   and safe probe results, never values. Composed Stamp content leaves the app for
   remote rendering; exclude sessions, OTPs, raw evidence and unrelated private data.
4. Free-tier operation is allowed. Verify account eligibility, current limits and
   existing usage before selecting a budget. Do not upgrade to Paid automatically.
   See [Browser Run pricing](https://developers.cloudflare.com/browser-run/pricing/)
   and [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/),
   checked 2026-10-21: Free includes 10 browser minutes/day; Paid has a $5/month
   account minimum and 10 included browser hours/month, then $0.09/hour. Screenshot
   Quick Actions charge browser time only. Recheck before activation.
5. Account for testing and payout sharing allowances. Measure actual
   `X-Browser-Ms-Used`, cache hits, retries and preview edits. Ten free minutes is
   not a fixed 300-request quota; that estimate assumes two billable seconds per
   capture. A hard cap requires shared reservations/accounting across concurrent
   environments, not independent per-instance counters. Keep budget exhaustion
   separate from missing/invalid credentials and temporary service outage.
6. Use synthetic instructions to prove missing credentials, quota/rate limits,
   timeouts, circuit recovery, deduplication and cache isolation. Prove visible
   standard fallback and a refreshed review before funding. Use provider fixtures
   to prove paid retry/hold/idempotency and no second payment. Any live financial
   acceptance needs separate explicit authorization.
7. Validate actual PNG dimensions, native QR decoding, fonts/emoji, artwork/text,
   provider/requirement placement, mobile/desktop/themes, preview/issuance parity,
   stored-image reuse and matching OG metadata. Confirm old artifacts and signed
   orders remain valid; reject unsupported artwork before charging.
8. Publish package resources, run `npm ci --no-audit --no-fund`, `npm run build`
   and `php artisan x-change:doctor --assets --strict --no-interaction`. Verify
   the effective provider/quality policy in web and issuance workers after deploy.
   Keep the local comparison flag false; use controlled synthetic probes instead.

## Payout promotion, monitoring and rollback

Record exact package/host commits, deployment IDs, effective policy, dimensions,
artifact hash, render latency, browser milliseconds and budget headroom. Never
store credentials, HTML, claim QR URLs, session material or raw provider payloads
in commissioning notes or operational logs. Compare queues, scheduler, callback
route inventory and sanitized errors against a fresh predeployment baseline; do
not delete historical failed jobs or invoke callbacks as a smoke test.

Promote only after testing proves capacity, usage, compatibility and recovery.
Preserve existing release approval boundaries for payout. Cloud settings changes
require deployment and postdeploy verification; use the measured API billable time
rather than assuming local capture timing predicts Cloudflare billing.

Rollback new-order policy to GD/standard if acceptance fails. Do not remove the
adapter/runtime or credentials required by paid orders already frozen to another
provider. Keep those funds held and recover through the same idempotent issuance
path. Existing stored PNGs must remain readable without provider calls. Budget
controls must not silently make already-paid contracts unrecoverable.

Documentation adoption changes no Cloud setting, dependency, payment or database.
