# x-PayOut Infrastructure Status

**Environment:** Laravel Cloud `production`  
**Host:** `https://payout.disburse.cash`  
**Recorded:** 2026-10-13  
**Package:** x-change `v1.0.156`  
**Branch:** `release/v1.0.0-beta.92`

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
| Queue workers | One shared worker for `partner-payments`, `x-change-funding`, `x-change-issuance`, `x-change-feedback`, and `default`; one dedicated `x-change-issuance` worker with five tries |
| Database | Attached Laravel-managed payout PostgreSQL resource |
| Cache | Attached payout Valkey resource; not shared with testing |
| Evidence storage | Private object storage for claim evidence |
| Public protection | Turnstile enabled; application-level issuance and MCP rate limits enabled |
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
- Existing queue workers were inspected and retained. A duplicate default
  worker was briefly created during verification and removed immediately; it is
  not part of the production topology.
- Payout endpoint smoke check returned HTTP 200 after the change.

## Remaining dashboard controls

These controls are outside the Laravel Cloud CLI and remain to be configured
in the provider dashboards.

### 1. Cloudflare rate limiting

Create rules for the public payment workflow, starting with conservative
IP-based limits:

- Order creation: challenge or block after repeated bursts from one IP.
- Payment polling: allow normal polling but cap aggressive refresh loops.
- Workspace recovery and OTP requests: apply the strictest limit.

Keep the application-level limits as the second layer. Start in challenge or
log mode, review legitimate traffic, then enforce. Verify that payment status
polling and recovery still work from a normal browser before tightening rules.

### 2. HSTS

Confirm that the payout domain and every required subdomain are HTTPS-only.
Then enable HSTS with a staged policy:

1. Start with a short max-age while checking all subdomains.
2. Increase to a long max-age such as one year once verified.
3. Add `includeSubDomains` only after every subdomain is confirmed safe.
4. Delay preload enrollment until the domain inventory is stable.

HSTS must be enabled only after certificate renewal and domain routing have
been verified for every included hostname.

### 3. Laravel Cloud spending alert

Create a monthly alert around the beta target, initially at **$40–$50**.
Review the breakdown by web compute, workers, database, cache, storage, and
bandwidth. Treat the alert as an operator warning; it is not a hard spending
cap.

## Verification after dashboard changes

- Check the public auto-generate page and Turnstile challenge.
- Create and poll a non-financial estimate without creating an order.
- Verify normal payment polling is not rate-limited.
- Verify recovery and OTP throttling with a controlled test.
- Confirm HTTPS redirects and certificate validity for all payout hostnames.
- Review Cloud usage after the first full billing period and adjust the
  replica range or thresholds if the target is exceeded.

