# x-PayOut Production Secret Custody and Recovery

**Status:** Adopted for runtime custody; Passport recovery continuity verified

**Updated:** 2026-10-06

## Governing rule

Laravel Cloud managed secrets are the runtime authority. The application's
ordinary local `.env` is for development and sandbox use only. The dedicated,
gitignored `ops/deployment/secrets.env` is an owner-only recovery input, not
an application runtime environment file. The deployment runner may read it
only during explicitly authorized initial import, recovery, or rotation and
must never write its values to compiled artifacts, state, evidence, logs, or
command arguments.

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

For initial import or controlled recovery, populate the exact required
inventory in the gitignored `ops/deployment/secrets.env`, restrict it to mode
`0600`, and keep it under approved owner custody. Laravel Cloud remains the
active runtime authority; this retained file exists so the two-input cleanroom
can reconstruct or rotate managed secrets without relying on Cloud export.

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
current runtime does not depend on them.

## Recovery custody audit — 2026-10-06

The beta.72 custody audit compared secret names and attachment identities only.
No secret value, hash, or masked provider payload was printed, copied, or
placed in evidence.

- all 18 names in the production recovery inventory are attached to the live
  Laravel Cloud environment;
- Laravel Cloud attachment proves runtime availability but cannot prove
  plaintext recovery because managed secret values are non-exportable;
- provider-issued and application-rotatable credentials now have documented
  owner roles, issuing authorities, and replacement procedures in
  `ops/deployment/contracts/secret-recovery-custody.json`;
- both ignored worksheets remain owner-only with mode `0600`;
- the re-entry worksheet has populated provider material but no populated
  `PASSPORT_PRIVATE_KEY` or `PASSPORT_PUBLIC_KEY` entry; and
- no independent Passport continuity artifact was located by filename or key
  declaration in this repository checkout.

That audit was resolved by the controlled rotation recorded below.

## Passport signing continuity rotation — 2026-10-06

- Generated one new 4096-bit Passport signing pair locally.
- Built the exact 18-name recovery input at
  `ops/deployment/secrets.env`; it is gitignored and mode `0600`.
- Verified the private/public relationship before any Cloud mutation.
- Updated only the existing `PASSPORT_PRIVATE_KEY` and
  `PASSPORT_PUBLIC_KEY` managed-secret identities.
- Redeployed `release/v1.0.0-beta.72` at commit
  `43d9c2cfd5cf2266c1d7bac44a4c470a7752f3ce`.
- Verified that the production public-key fingerprint matches the recovery
  input and that production derives the attached public key from the private
  key.
- Re-adopted the verified existing installation after the intentional
  configuration-fingerprint change. Adoption inspected existing identity and
  Treasury state and recorded the new manifest; it did not capitalize,
  invite, call a provider, or move money.
- Final strict doctor passed `37/37`, x-mcp doctor reported ready, the
  commissioning state returned `operational`, and the public host returned
  HTTP `200`.

Existing OAuth access tokens signed by the superseded key must be treated as
invalid and reissued. Recovery continuity is now verified, but compatibility
worksheet retirement remains a separate explicitly authorized gate.
