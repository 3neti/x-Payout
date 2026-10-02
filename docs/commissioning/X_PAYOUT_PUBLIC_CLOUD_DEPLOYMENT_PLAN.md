# x-PayOut Public Cloud Cleanroom Deployment Plan

**Status:** In execution; Cloud foundation and first deployment complete, commissioning blocked  
**Recorded:** 2026-10-02  
**Target application:** `x-PayOut`  
**Target environment:** `production`  
**Target public URL:** `https://payout.disburse.cash`  
**Target region:** `ap-southeast-1`

## Objective

Deploy a genuinely clean x-PayOut host to Laravel Cloud, commission it from
released packages, prove the financial and onboarding lifecycle on the
Cloud-generated URL, and only then connect `payout.disburse.cash`.

This deployment does not transfer users, balances, Pay Codes, or database
records from x-change testing or any earlier x-PayOut instance.

The generated `laravel.cloud` URL is the deployment and commissioning proving
ground. The custom domain is a separately controlled traffic-switch gate.

## Non-negotiable boundaries

- Deploy an exact published x-PayOut release, never a local path repository or
  `@dev` dependency.
- Use a fresh database and independently configured durable infrastructure.
- Do not copy historical balances or operational records.
- Do not commission after a failed deployment.
- Do not attach public traffic before strict doctor and lifecycle acceptance.
- Do not expose secret values in commands, logs, or reports.
- Keep the instance fail-closed when any readiness gate fails.
- Do not repeat financial mutations merely because a later gate fails.

## Gate 0 — Release integrity

Prepare and prove the exact x-PayOut release that Laravel Cloud will deploy.

1. Start from the canonical `3neti/x-payout` repository.
2. Require a released `3neti/x-change` version, currently expected to be
   `v1.0.95`, rather than `@dev`.
3. Remove local Composer path repositories from the release artifact.
4. Synchronize `composer.json` and `composer.lock`.
5. Confirm that production frontend assets and `public/build/manifest.json`
   are included.
6. Run Composer validation and the focused cleanroom tests.
7. Publish an exact x-PayOut beta tag to GitHub and Packagist.
8. Install that exact tag into an empty temporary directory using Packagist
   only.
9. Record the selected x-PayOut, x-change, form-flow, x-mcp, and other direct
   runtime versions.

**Acceptance:** The release installs without reading any local package path,
and its lock resolves the intended released dependencies.

## Gate 1 — Cloud foundation

Create a new Laravel Cloud application because no current application matches
`x-PayOut` or `x-payout`.

- Application display name: `x-PayOut`
- Expected application slug: `x-payout`
- Source: `3neti/x-payout`, exact release branch or commit
- Region: `ap-southeast-1`
- Environment: `production`
- Fresh PostgreSQL database
- Durable cache and queue configuration
- Private durable claim-evidence storage

The existing `x-change-testing / testing` environment must remain untouched.

**Acceptance:** The application, environment, and dedicated infrastructure
exist, and no operational or financial records have been created.

## Gate 2 — Production configuration

Attach existing managed secrets only where they are valid for this new host:

- NetBank;
- EngageSpark;
- TXTCMDR;
- HyperVerge;
- Mapbox;
- OpenCage; and
- private storage credentials.

Configure at least:

- `APP_ENV=production`;
- `APP_DEBUG=false`;
- secure session cookies;
- durable session, cache, and queue drivers;
- the NetBank production deployment profile;
- private durable claim-evidence storage;
- System Principal and Commercial Principal commissioning values;
- funded Maker and Checker invitation amounts;
- EULA enforcement; and
- the intended public-issuance policy.

Secrets must be attached through Laravel Cloud secret management. Reports may
name a configured capability but must never reveal its credential value.

**Acceptance:** The pre-deployment configuration inventory is complete and no
secret appears in the deployment record.

## Gate 3 — Deploy before commissioning

Use the exact released host and its packaged production assets. Laravel Cloud
must not compile frontend assets during this deployment.

Build command:

```bash
composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader
```

Deploy command:

```bash
php artisan migrate --force
```

Verify that:

- the deployment becomes active;
- `public/build/manifest.json` exists;
- the home and commissioning surfaces respond;
- no npm, Vite, or Vite Plus build ran in Cloud; and
- installed package versions match the release lock.

**Stop condition:** A failed build or deploy ends this gate. Commissioning must
not run.

## Gate 4 — Commission once

Run the protected readiness and commissioning sequence:

```bash
php artisan x-change:doctor --pre-commission --strict
composer x-payout:bootstrap -- --manifest=commissioning/default.yaml --skip-build --no-interaction
php artisan x-change:doctor --strict
```

Record without exposing credentials:

- provider opening inventory;
- Account Funding Reserve;
- Pay Code Reserve;
- issuance guard and provider-liquidity state;
- System Principal;
- Commercial Principal;
- Maker invitation;
- Checker invitation; and
- strict-doctor pass and failure totals.

**Stop condition:** Any failed strict gate leaves the instance fail-closed.
Do not rerun commissioning until the failure and mutation posture are known.

## Gate 5 — Generated-domain lifecycle proof

Before connecting the public domain:

1. Claim the Maker invitation.
2. Claim the Checker invitation.
3. Accept the EULA for each interactive user.
4. Confirm the configured onboarding Client Funds.
5. Confirm Maker and Checker land in their correct workspaces.
6. Generate one separately authorized low-value Pay Code.
7. Verify its accounting, presentation, and claim route.
8. Run the read-only balance report and preserve its hashes.
9. Rerun strict doctor.

No custom DNS is required for this proof. Use the generated Cloud URL.

**Acceptance:** The clean host works independently of `disburse.cash`, strict
doctor passes, and the balance report agrees with the observed lifecycle.

## Gate 6 — Connect `payout.disburse.cash`

Only after Gates 0 through 5 pass:

1. Add `payout.disburse.cash` to the production environment.
2. Retrieve Laravel Cloud's exact DNS records.
3. Add those records to the authoritative `disburse.cash` DNS zone.
4. Verify hostname ownership, SSL, and origin routing.
5. Set the verified domain as the environment's primary domain.
6. Set `APP_URL=https://payout.disburse.cash`.
7. Redeploy or clear cached configuration as required.
8. Rerun strict doctor and confirm commissioning-manifest freshness.

Laravel Cloud is responsible for provisioning and renewing HTTPS after the
domain is correctly connected. Do not invent DNS targets; use the records
returned for this environment.

Keep the existing authoritative nameservers for `disburse.cash`. This gate is
not a nameserver migration. Add only the exact `payout` CNAME and any ownership
TXT record returned by Laravel Cloud at the current DNS provider. When the DNS
provider offers proxying, keep the record DNS-only until Laravel Cloud reports
hostname, certificate, and origin verification as complete.

**Acceptance:** Laravel Cloud reports hostname, SSL, and origin as connected,
and all application-generated public URLs use the custom domain.

## Gate 7 — Final public-domain acceptance

Verify through `https://payout.disburse.cash`:

- home page and pricing;
- Claim entry and claim QR;
- public On-Demand Issuance;
- Maker and Checker authentication;
- the Cockpit;
- Pay Code share links and stamps;
- secure cookies and redirects;
- public AI/MCP discovery;
- queue workers and scheduled processes;
- strict doctor; and
- the read-only balance report.

Any new real-money payment, SMS, Pay Code issuance, or claim during acceptance
requires its own explicit authorization and stated maximum exposure.

## Rollback

If domain verification or application acceptance fails:

1. preserve the generated Cloud URL;
2. remove or disable only the custom-domain traffic record;
3. leave financial operations fail-closed;
4. do not recreate the environment automatically;
5. do not repeat commissioning automatically; and
6. diagnose against the existing fresh database and recorded evidence.

If a rollback follows a financial mutation, first record the current Treasury,
invitation, Pay Code, and journal posture. A DNS rollback is not a financial
rollback.

## Required final report

The handoff report must include:

- application and environment IDs;
- generated and custom URLs;
- exact package versions and release commits;
- deployment ID and status;
- database, cache, queue, and private-storage readiness without credentials;
- pre-commission and final strict-doctor results;
- opening inventory and reserve figures;
- Maker and Checker claim URLs and redemption states;
- lifecycle evidence;
- balance-report timestamp and hashes;
- custom-domain hostname, SSL, and origin status; and
- every remaining warning, blocker, or deferred item.

## Operating record

Progress, evidence, blockers, and the next authorized move are maintained in
[X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_COMPASS.md](X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_COMPASS.md).
The established command-level procedure remains in
[X_PAYOUT_CLEANROOM_COMMISSIONING.md](X_PAYOUT_CLEANROOM_COMMISSIONING.md).
