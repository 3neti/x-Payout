# x-PayOut Infrastructure Status

**Environment:** Laravel Cloud `production`  
**Host:** `https://payout.disburse.cash`  
**Recorded:** 2026-10-16  
**Package:** x-change `v1.0.210`  
**Branch:** `release/v1.0.0-beta.106`

## Current infrastructure

The payout environment is on the Laravel Cloud Growth plan in the Singapore
region. Testing is a separate environment and was not changed by this
upgrade.

| Area | Current state |
| --- | --- |
| Web application | One Flex 512 MB baseline replica |
| Web scaling | Custom CPU/memory autoscaling from 1 to 2 replicas |
| Scale thresholds | CPU 70%; memory 80% |
| Scheduler | Enabled on the application instance |
| Queue connection | Redis/Valkey |
| Queue workers | Redis workers: shared `partner-payments`, `x-change-funding`, `x-change-feedback`, and `default` worker; dedicated `x-change-issuance` worker with five tries |
| Database | Attached Laravel-managed payout PostgreSQL resource |
| Cache | Attached payout Valkey resource; not shared with testing |
| Evidence storage | Private object storage for claim evidence |
| Public protection | Turnstile enabled; application-level issuance and MCP rate limits enabled; Laravel Cloud edge rate limiting enabled in challenge mode |
| Deployment | Composer package install, x-change build publishing, frontend build, migrations, and commissioning refresh |

The application remains at one replica during normal low traffic and can scale
to a second replica when Cloud detects sustained resource pressure. This keeps
the beta cost lower than running two replicas continuously while preserving a
capacity path for bursts.

## Applied Growth changes

- Laravel Cloud organization upgraded from Starter to Growth.
- Payout app instance changed from `scalingType=none`, `min=1`, `max=1` to
  custom autoscaling with `min=1`, `max=2`.
- CPU and memory thresholds set to 70% and 80%.
- Scheduler retained as enabled.
- Existing queue workers were inspected and aligned with Redis metadata. The
  dedicated issuance worker remains separate so issuance retries do not compete
  with funding verification.
- Funding verification, issuance, feedback, partner-payment, and default queues
  were checked with `queue:monitor`; there were no pending or reserved jobs.
  Nine delayed funding verification jobs were visible and are expected to be
  consumed by the scheduled verifier.
- The failed-job list contains historical funding verification failures and was
  preserved for audit/review; it was not purged during commissioning.
- The payout Neon cluster now retains seven days of backups. A point-in-time
  restore was created as the isolated cluster `payout-p0-restore-20261016` and
  reached `available` without changing the live cluster.
- Payout endpoint smoke check returned HTTP 200 after the change.

## Dashboard controls applied

### Laravel Cloud edge rate limiting

Rate limiting is enabled for the production environment in Laravel Cloud's
Firewall settings. The selected level is **Challenge**: an IP that exceeds
100 requests per minute receives a CAPTCHA or Turnstile challenge for five
minutes. This is an edge layer; the application-level limits remain in place
for order creation, polling, recovery, and MCP traffic.

The payout domain is not present in the authenticated Cloudflare account's zone
list, so no Cloudflare WAF rule could be created there. Laravel Cloud owns the
active edge configuration for this host; its Challenge-mode limit remains the
effective edge control until the authoritative Cloudflare zone is identified.

### HSTS

HSTS is enabled in Laravel Cloud Response rules with:

- `Strict-Transport-Security: max-age=31536000`
- `includeSubDomains`: disabled
- `preload`: disabled

The header was verified on `https://payout.disburse.cash/x/auto-generate/`.
Subdomain scope and preload remain intentionally deferred until the complete
domain inventory is confirmed.

### Laravel Cloud spending alert

The Growth billing dashboard already has the beta spending alert set to
**$40.00**. No billing mutation was needed. The alert is an operator warning,
not a hard spending cap.

## Verification after dashboard changes

- Check the public auto-generate page and Turnstile challenge.
- Confirm the Laravel Cloud Firewall shows rate limiting enabled at Challenge.
- Confirm the response includes `Strict-Transport-Security: max-age=31536000`.
- Create and poll a non-financial estimate without creating an order.
- Verify normal payment polling is not rate-limited.
- Verify recovery and OTP throttling with a controlled test.
- Confirm HTTPS redirects and certificate validity for all payout hostnames.
- Review Cloud usage after the first full billing period and adjust the
  replica range or thresholds if the target is exceeded.

