# x-PayOut Production Secret Custody and Recovery

**Status:** Adopted for the shared Laravel Cloud host

**Updated:** 2026-10-03

## Governing rule

Laravel Cloud managed secrets are the runtime authority. A local `.env` is for
development and sandbox use only. The production deployment adapter never
reads, writes, exports, or logs a plaintext production secret.

The value-free deployment worksheet is `deployment.production.local`, created
from `deployment.production.example`. It may contain Cloud resource IDs, Cloud
secret IDs, confirmation flags, cutover evidence, and non-secret runtime
configuration.

## Custody matrix

| Material | Active location | Recovery authority | Deployment behavior |
| --- | --- | --- | --- |
| `APP_KEY` | Laravel Cloud-managed application environment | Laravel Cloud application recovery | Never export, copy, or include in the re-entry worksheet |
| NetBank credentials and signing material | Laravel Cloud managed secrets | NetBank operator portal/support | Attach by ID; rotate at provider if lost |
| EngageSpark and TXTCMDR credentials | Laravel Cloud managed secrets | Respective provider account | Attach by ID; rotate at provider if lost |
| HyperVerge credentials | Laravel Cloud managed secrets | HyperVerge account | Attach by ID; rotate at provider if lost |
| Mapbox and OpenCage credentials | Laravel Cloud managed secrets | Respective provider account | Attach by ID; rotate at provider if lost |
| DigitalOcean Space access key | Laravel Cloud managed secrets | DigitalOcean account | Least-privilege key; rotate at DigitalOcean |
| Passport/private signing keys | Laravel Cloud managed secrets | Controlled continuity record or deliberate key rotation | Never commit; replacing may invalidate signatures |
| Database and cache credentials | Laravel Cloud resource attachment | Laravel Cloud resource recovery | Never copy into the control worksheet |
| Human administrator credentials and recovery codes | Current approved human custody procedure | Named organization administrators | Never inject into the application environment |
| Space objects and claim evidence | Private DigitalOcean Space | DigitalOcean recovery and x-change continuity procedures | Referenced by bucket and prefix only |
| DNS records | DigitalOcean DNS | DigitalOcean organization administrators | Desired record shape may be documented; no API token in Git |

## Required managed-secret gate

The control worksheet declares `DEPLOY_REQUIRED_CLOUD_SECRET_NAMES` and
`DEPLOY_CLOUD_SECRET_IDS`. During `configure` and again before commissioning,
the adapter:

1. attaches the approved secret IDs;
2. lists attachment metadata only;
3. verifies every required secret name is attached; and
4. stops before deployment when any name is missing.

Laravel Cloud does not expose a `secret:get` operation. Recovery therefore
means regenerating or rotating the credential at its issuing provider and
creating a replacement Cloud managed secret. It never means reconstructing a
plaintext production `.env`.

`APP_KEY` is outside this attachment inventory. Laravel Cloud generates and
manages it for the application environment; the deployment kit verifies its
runtime readiness through strict doctor without copying its value.

For the one-time migration from direct environment variables, copy
`deployment.production.secrets.example` to the gitignored
`deployment.production.secrets.local`, restrict it to mode `600`, populate it
from authoritative provider sources, and remove it after successful creation
and attachment of the managed secrets.

## Operator ceremony

1. Authenticate to the correct Laravel Cloud organization.
2. Review the environment and organization IDs.
3. Confirm required managed-secret records exist.
4. Place only their IDs in `deployment.production.local`.
5. Run the non-destructive plan.
6. Set `DEPLOY_CONFIRM_PRODUCTION=YES` for infrastructure and deployment.
7. Set `DEPLOY_CONFIRM_COMMISSIONING=YES` only after provider cutover evidence
   and opening-capitalization authority are accepted.
8. Set `DEPLOY_CONFIRM_DOMAIN_CUTOVER=YES` only after generated-domain
   acceptance and DNS readiness.
9. Run the continuous adapter and preserve a sanitized transcript.

## Recovery requirements

- Every managed secret must identify an issuing provider and a named owner.
- Rotation must create and attach the replacement before revoking the old
  credential when the provider supports overlap.
- `APP_KEY` must remain Laravel Cloud-managed; private signing keys must not be
  rotated as ordinary API keys.
- Database recovery uses supported snapshots and application-level continuity
  evidence, not a credential export.
- No secret value may appear in Git, documentation, chat transcripts, command
  arguments, process listings, deployment reports, or test fixtures.

## Deferred external vault

Keeper Business and HashiCorp Vault are not production dependencies. They may
be reevaluated later for organizational recovery or machine identity, but the
current deployment remains complete and recoverable without them.
