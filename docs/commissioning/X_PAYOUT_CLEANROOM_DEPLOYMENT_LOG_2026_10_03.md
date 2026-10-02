# x-PayOut Cleanroom Deployment Log — 2026-10-03

**Target:** `payout.disburse.cash`

**Primary adapter:** Laravel Cloud

**Secondary adapter:** Laravel Forge for a later client-owned VPS proof

**Started:** 2026-10-03 07:06 Asia/Manila

**Current state:** Preflight complete; no Cloud resource has been mutated or
deleted in this run

## Logging rules

- Record commands by purpose, not by copying secret-bearing shell history.
- Preserve IDs, timestamps, release versions, result states, and sanitized
  errors.
- Never record credential values, authorization headers, OTPs, private keys,
  or full sensitive environment output.
- Distinguish read-only inspection, infrastructure mutation, application
  deployment, commissioning, and financial activity.
- Record every script correction before continuing to the next gate.

## Run 1 — Local deployment-kit preflight

### Source state

- Repository: `git@github.com:3neti/x-payout.git`
- Branch: `main`
- Current commit: `39c56c1e801b35b7a82c7eb20b8eb4af93717df0`
- Published identity represented by the checkout: `v1.0.0-beta.59`
- Installed x-change: `v1.0.98`, commit
  `5565cf14e5ff7cf18dd5ba6f384f170570a60905`
- The deployment-kit, Forge-adapter, plan, compass, and tests are local
  uncommitted changes. They are not yet available to a fresh Cloud checkout.

### Checks completed

- production deployment plan rendered successfully;
- Composer metadata passed strict validation;
- x-change Cloud deployment manifest generated successfully;
- generated manifest passed package validation;
- packaged `public/build/manifest.json` was present; and
- the manifest remained fail-closed and prohibited automatic database reset
  and automatic provider transfer.

### Result

The local release is structurally deployable, but the deployment kit must be
committed and published before it can be used as evidence of a source-only
cleanroom recreation.

## Run 2 — Existing Laravel Cloud topology inventory

This was read-only inspection. Sensitive values remained masked.

### Existing application

- Application ID: `app-a2e24259-f715-4445-97e9-1a52680273d9`
- Environment ID: `env-a2e2425b-d774-44b2-a667-31abaa36a224`
- Generated URL: `https://x-payout-production-mixtag.laravel.cloud`
- Environment state: `running`
- Current deployment:
  `depl-a2e2e354-98c3-4633-bb23-5098fed89b76`
- Source repository and branch: `3neti/x-Payout`, `main`
- Build command: Composer production install using the lock
- Deploy command: forced Laravel migrations
- Database schema ID: `1149023`
- Cache ID: `cache-a2e24572-88d9-4882-85d0-2a0dce8505f4`

### Compute and processes

- App instance: `inst-a2e2425b-de42-48d6-b8dc-2e0df338d163`
- Size: `flex-512mb`
- PHP: `8.5`
- Node: `24`
- Push-to-deploy: enabled
- Scheduler: **disabled**
- Queue worker:
  `process-a2e2caf6-a96d-46ff-bb49-d118c1feca12`
- Queue connection: Redis
- Queues: `x-change-funding,x-change-feedback,default`

### External private storage

- Provider: DigitalOcean Spaces
- Region: `sgp1`
- Space: `x-payout-production-evidence-20261002`
- Endpoint: `https://sgp1.digitaloceanspaces.com`
- Retired instance ID: `01M3XYG8WAYJ8VH0G9HXREA8QJ`
- Existing claim-evidence prefix: `x-change/claim-evidence`
- Existing keepsake prefix: `x-change/instance-keepsakes`

The Space is retained and is outside the application-deletion set. New objects
will use a distinct instance-scoped prefix:

`x-payout/active/01M3ZDW19ACC9CEJPB6FVVVGYA/...`

### Managed secrets

Sixteen existing Laravel Cloud managed-secret records were identified by ID
and attached to the ignored local deployment worksheet. Their values were not
read or copied. They cover the application key, NetBank, EngageSpark,
TXTCMDR, HyperVerge, map/location configuration, DigitalOcean Spaces, the
funding HMAC, and the affiliation identity pepper.

### Custom domain

- Domain record: `domain-a2e276e6-de7d-4733-96b2-47ac04abc18b`
- Name: `payout.disburse.cash`
- Environment attachment: none
- Hostname status: failed
- SSL status: failed
- Origin status: failed
- DNS records returned by Cloud: none

The existing failed record is not evidence of an active Cloud domain
attachment. The cleanroom will validate its generated URL first and create or
attach the custom domain only at the dedicated cutover gate.

## Improvements captured before mutation

1. The cleanroom foundation must explicitly enable the Laravel scheduler. The
   current runtime advertises scheduled refresh behavior while its Cloud app
   instance reports the scheduler disabled.
2. New evidence and keepsakes must use the new stable instance prefix instead
   of the historical global prefixes.
3. Secret reuse is by Laravel Cloud secret ID only. No plaintext secret is
   exported into the deployment kit or log.
4. `APP_URL` remains the new generated Cloud URL through acceptance. It changes
   to `https://payout.disburse.cash` only immediately before the separately
   controlled domain cutover and redeployment.
5. The custom-domain record is not reused merely because its name matches. Its
   failed and unattached state must be reconciled explicitly.
6. The deployment scripts must be published with the host release before a
   source-only cleanroom proof can claim repeatability.
7. Commissioning remains separate from deployment and may execute once only
   after the provider cutover time and transaction watermark are accepted.

## Prepared replacement worksheet

The ignored `.env.production` now contains:

- the retained Space name;
- the new stable instance ID and isolated prefixes;
- the existing managed-secret IDs;
- confirmations still set to `NO`; and
- no secret values.

The new Cloud application, environment, database, cache, instance, worker,
generated URL, provider cutover boundary, and domain IDs remain unset until
their respective gates execute.

## Next controlled action

Publish the deployment kit in the next x-PayOut beta, then decide the exact
retirement boundary for the running beta. Do not create a replacement from an
uncommitted local script, and do not delete the running application in the same
operation as commissioning the replacement.
