# x-PayOut Public Cloud Retirement and Cleanroom Redeployment Plan

**Status:** Cleanroom and continuous deployment proven; two-input one-command safety foundations implemented

**Updated:** 2026-10-05

**Current public host:** `https://payout.disburse.cash`

**Current x-PayOut:** `v1.0.0-beta.69` (`853c5b0`)

**Current x-change:** `v1.0.99` (`13e06cd3`)

## Objective

Deliver one fail-closed, resumable command that can reproduce an x-PayOut
instance from one portable `instance.yaml` and one private, one-time
`secrets.env` without a manually maintained deployment worksheet.

The one command must:

1. validate and compile the instance;
2. import or reconcile managed secrets;
3. create or discover Cloud infrastructure;
4. configure only changed runtime values;
5. deploy the exact release;
6. run the strict pre-commission doctor;
7. commission once when explicitly authorized;
8. attach and verify the domain;
9. run the final strict doctor and MCP doctor;
10. save sanitized state and evidence; and
11. succeed idempotently when rerun.

Before any infrastructure mutation, the command must also prove that every
declared external dependency is present, reachable where a safe probe exists,
and internally consistent. A missing provider account, DNS authority, object
store, SMS transport, identity-verification service, map provider, OAuth key,
or required credential must fail during planning rather than during or after
deployment.

This cleanup extends the already proven retirement and cleanroom procedure. It
does not weaken its financial, commissioning, evidence, or secret-custody
boundaries.

The final proof is not merely that a Laravel application can be recreated. It
must show that an institution can deploy, commission, operate, retire, and
recover an x-PayOut host using an auditable and fail-closed procedure.

The deployment kit supports two first-class hosting adapters:

- **Laravel Cloud** for the shared `payout.disburse.cash` service; and
- **Laravel Forge** for a bank- or EMI-controlled VPS.

Deployer remains a future portability option for unmanaged SSH or multi-server
targets. It is not layered on top of a Forge-managed server.

## Non-negotiable boundaries

- Do not delete the current application while an unresolved real-money
  obligation, funding order, Pay Code, Commercial Sale, or queued financial job
  remains.
- Do not infer a payer refund from an internal ledger reversal or credit.
- Preserve the database recovery point and private DigitalOcean Space before
  deleting Laravel Cloud resources.
- Deploy only exact published releases resolved through Packagist.
- Never copy plaintext secrets into reports, source control, or command output.
- Commission once. A failed later gate does not authorize repeating an earlier
  financial mutation.
- Establish a provider cutover boundary so the replacement host cannot
  recognize or capitalize transactions belonging to the retired host.
- Keep deletion and any new real-money acceptance as separately authorized
  actions.
- Laravel Cloud managed secrets are the sole runtime secret authority for the
  shared production host.
- A local `.env` is for development and sandbox use only. There is no local
  plaintext production `.env` fallback.
- The production deployment control worksheet may contain resource IDs,
  secret IDs, confirmations, and non-secret configuration, but never a secret
  value.

## Two-input one-command cleanup

### Cleanup Gate 0 — Classify every existing input

Build a tested migration matrix for every setting currently found in
`deployment.production.local` and `deployment.production.secrets.local`.
Each setting must have exactly one destination:

- portable desired state in `instance.yaml`;
- private bootstrap value in `secrets.env`;
- generated platform state;
- ephemeral operator or CI authority;
- sanitized evidence; or
- retired legacy input.

No setting may be silently dropped, read from two authorities, or copied into
the generated state merely for convenience.

**Acceptance:** The classification test covers every legacy setting and
rejects duplicate or unclassified ownership.

### Cleanup Gate 1 — Pre-mutation external-resource sanity checks

Add a read-only `preflight` phase which runs before foundation creation or
configuration. It must validate names, formats, references, and safe
connectivity without issuing money, messages, identities, tokens, Pay Codes,
or policies.

The initial prerequisite catalog is:

| Dependency | Required proof before deployment |
| --- | --- |
| NetBank | Declared corporate/source account, client aliases, endpoints, credential references, expected capabilities, and production/test mode are coherent; any provider probe must be read-only |
| DNS | Canonical hostname is valid; authoritative zone exists; expected nameservers are preserved; automation credentials can affect only allowlisted records |
| Private storage | Bucket/Space, region, endpoint, and managed-secret references exist; a bounded private write/read/delete can run only when separately enabled, otherwise configuration validation is read-only |
| EngageSpark | API-key and organization secret references exist; no SMS is sent during preflight |
| TXTCMDR | API endpoint and token reference exist; no OTP is sent during preflight |
| HyperVerge | Application/key references and workflow/base URLs exist; no applicant or KYC session is created |
| Mapbox/OpenCage | Required token references exist and the selected map/geocoding provider is coherent; no unnecessary billable lookup is made |
| Passport/Partner MCP | Signing-key references, migrations, HTTPS endpoints, exact contract version/hash, and enabled feature switches agree |
| Release | Repository/ref is immutable and resolves to the exact Composer lock and packaged frontend assets |
| Commissioning | Opening policy, provider cutover evidence, principals, invitations, and explicit authorization are complete before the commissioning phase is eligible |

Each check returns one of `ready`, `not_applicable`, `needs_attention`, or
`blocked`, with a redacted reason and remediation. `needs_attention` and
`blocked` stop an applied run unless the check has a documented, narrowly
scoped exception contract. No raw secret value may enter the report.

**Acceptance:** A missing or contradictory prerequisite stops before the first
Cloud or DNS mutation. Fake transports prove every catalog entry, timeout,
redaction rule, and fail-closed disposition.

### Cleanup Gate 2 — Introduce machine-owned platform state

Replace worksheet mutation with an ignored, owner-only state file such as
`ops/deployment/state/<instance-id>.json`. It contains only profile
fingerprint, adapter name, resource IDs, managed-secret IDs, last deployment
ID, and timestamps. It contains no credential, runtime value, personal
invitation detail, account number, or operator confirmation.

Writes must be atomic and schema-validated. The file is a resume cache, not an
authority. If missing, the adapter rediscovers resources by stable instance
identity and reconstructs it. Multiple or conflicting matches fail closed.

**Acceptance:** Delete the state file after a fake deployment; the next run
rediscovers exactly one resource set, recreates state, and produces no
duplicate infrastructure.

### Cleanup Gate 3 — Add one-time managed-secret reconciliation

Add an explicit secret-import phase consuming only the private `secrets.env`
and the required secret-name inventory compiled from `instance.yaml`.

It must:

- require owner-only file permissions;
- reject unknown, unused, empty, duplicate, or missing entries;
- create, rotate, or attach Laravel Cloud managed secrets without printing
  values;
- record only managed-secret IDs in state;
- support a read-only check mode; and
- permit later ordinary deployments without retaining `secrets.env` locally.

`APP_KEY`, generated database credentials, and other platform-owned values
remain platform-owned and are not imported from the worksheet.

**Acceptance:** Logs, process arguments, compiled artifacts, Git status, and
uploaded evidence contain no secret value. A second import is an idempotent
no-op unless an explicit rotation is requested.

### Cleanup Gate 4 — Make compiled desired state authoritative

The controller must accept `--instance`, `--adapter`, and optional `--state`;
it must no longer source desired runtime configuration from a control
worksheet. The verified compiler supplies runtime variables, exact release,
domain, provider topology, required secret names, commissioning intent, and
profile fingerprint.

Confirmations become invocation authority (`--apply`, `--commission`, and
`--activate-domain`) or protected CI-environment approval. They are never
sticky booleans in a local file.

Configuration reconciliation must compare desired and current values and
write only changed keys. Secret values remain unreadable; attachment is
reconciled by managed-secret identity and name.

**Acceptance:** An unchanged second run performs no environment-variable,
secret, infrastructure, DNS, commissioning, or domain mutation.

### Cleanup Gate 5 — Execute the complete one-command lifecycle

Provide one operator entry point with an explicit adapter, for example:

```bash
bin/x-payout-deploy continuous \
  --instance=ops/deployment/instances/payout.disburse.cash.yaml \
  --adapter=laravel-cloud \
  --apply \
  --commission \
  --activate-domain
```

The command executes the objective in order and persists a checkpoint after
each completed phase. A retry resumes from verified state. It never repeats
opening capitalization, invitation issuance, domain creation, or managed
secret creation merely because a later phase failed.

Commissioning remains ineligible unless the profile authorizes it, provider
cutover evidence is present, the pre-commission doctor passes, and the
operator supplies current commissioning authority.

**Acceptance:** Inject a recoverable failure after every phase. Each rerun
continues safely and finishes with one commissioned instance, one domain
attachment, and no duplicate financial or onboarding artifact.

### Cleanup Gate 6 — Sanitize state and evidence

Produce a bounded evidence bundle containing the exact Git SHA and release,
profile fingerprint, prerequisite report, resource identities, changed-key
names, deployment result, doctor summaries, MCP readiness, domain/TLS result,
commissioning disposition, and final timestamps.

Evidence must never include secret values, one-time client secrets, tokens,
OTP values, private keys, full provider responses, or unnecessary personal
information.

**Acceptance:** Automated secret-pattern and schema checks pass before local
retention or CI artifact upload.

### Cleanup Gate 7 — Retire compatibility mode

For one release, run legacy and two-input modes through the same fake Cloud,
DNS, provider, and secret transports and compare their effective desired
state and phase decisions. The new mode becomes default; legacy mode remains
an explicit rollback path.

After one exact-release cleanroom passes, remove:

- `deployment.production.local`;
- `deployment.production.secrets.local`;
- their example files;
- worksheet sourcing and `upsert_local_state()`;
- duplicate runtime and confirmation parsing; and
- tests whose only purpose is legacy worksheet behavior.

**Acceptance:** A repository search finds no production controller dependency
on either worksheet, while migration documentation still identifies the last
release that supports them.

### Cleanup Gate 8 — Definitive cleanroom and idempotency proof

From a clean checkout, supply only the private production `instance.yaml`, a
one-time `secrets.env` when managed secrets need creation, and authenticated
official CLIs. Run the complete command without conversational intervention.

Verify exact release, prerequisite readiness, infrastructure, changed-only
configuration, deployment, pre-doctor, one-time commissioning, custom domain,
strict doctor, MCP doctor, sanitized evidence, and non-financial browser/MCP
acceptance. Then rerun the same command and prove a no-op result.

Delete the local state file and rerun once more to prove safe discovery and
state reconstruction without duplication.

**Acceptance:** The first run reaches the declared operational state, the
second run is idempotent, and the recovery run reconstructs state while
preserving the same application, financial, identity, domain, and secret
artifacts.

## Two-input implementation evidence — 2026-10-05

The first implementation slice establishes the contracts that the continuous
controller will consume before it is allowed to replace compatibility mode:

- every key in both legacy worksheet shapes is assigned to exactly one final
  authority; unknown, duplicate, or multiply owned keys fail validation;
- compilation now emits a deterministic `preflight-plan.json` inside the
  verified artifact manifest;
- the preflight catalog covers exact release, DNS, private storage, managed
  secret custody, every provider identity and capability set, SMS, OTP, KYC,
  maps, geocoding, Partner MCP/Passport, and commissioning authority when the
  corresponding feature is declared;
- fake prerequisite transports prove that `needs_attention` and `blocked`
  dispositions stop before a mutation callback, while report evidence is
  restricted to an explicit value-free allowlist;
- the generated-state store accepts only profile fingerprint, adapter,
  resource IDs, managed-secret IDs, deployment ID, checkpoints, and timestamp;
  writes are atomic with owner-only permissions;
- the one-time secret loader requires an exact, owner-only input file and
  rejects missing, unused, empty, duplicate, or malformed entries;
- the managed-secret reconciler supports check-only, create-and-attach,
  explicit rotation, unchanged no-op, and identity-conflict failure paths
  without returning secret values; and
- the focused compiler, controller, adapter, workflow, and new deployment
  suites pass 82 tests and 383 assertions. Composer validation, formatting,
  and whitespace checks also pass.

This slice performs no Cloud, DNS, DigitalOcean, NetBank, provider,
commissioning, financial, invitation, messaging, domain, or secret mutation.
Gate 13 is not complete: the official Laravel Cloud, DNS, provider, and secret
transports still need to consume these contracts, and state rediscovery must
be proved before compatibility inputs can be removed.

## Gate 1 — Record the proven deployment

Create a durable, sanitized deployment record containing:

- application and environment IDs;
- generated and custom URLs;
- exact source commits and package versions;
- deployment and worker topology;
- database, cache, and private-storage topology without credentials;
- commissioning and strict-doctor results;
- System and Commercial Principal posture;
- opening inventory and Treasury positions;
- public On-Demand Issuance and MCP posture;
- known corrections made during the deployment; and
- the successful ZLXD lifecycle.

The command-level reconstruction procedure belongs in the cleanroom runbook;
the deployment record describes what actually happened.

**Acceptance:** Another operator can distinguish proven facts, configuration
requirements, historical incidents, and deferred work without access to this
conversation.

## Gate 2 — Close and reconcile the current host

Before retirement:

1. disable creation of new public On-Demand Issuance orders;
2. stop initiating new financial acceptance scenarios;
3. verify the database state of every open funding order and Pay Code;
4. verify the queue has no pending or failed financial jobs requiring
   disposition;
5. reconcile Commercial Sales and service-provider payable allocations;
6. run strict doctor and the read-only balance report;
7. record provider inventory as shared-provider evidence, not exclusive cash
   ownership; and
8. record every warning or accepted exception.

### ZLXD disposition

The user confirmed the following real-money lifecycle on 2026-10-02:

- funding order: `01M3YETGTHB17A1EE65MRDRDNG`;
- provider transaction: `438868770`;
- exact payment: `PHP 40.00`;
- Pay Code: `ZLXD`;
- principal: `PHP 25.00`;
- commercial charge: `PHP 15.00`;
- Pay Code claimed and redeemed; and
- the `PHP 25.00` bank transfer was received in the claimant's GCash account.

This closes the observed principal obligation externally. The retirement audit
confirmed the redemption, single Commercial Sale, and single allocation, but
also found that the local disbursement reconciliation remains `pending` while
NetBank reports `completed`. That result must be synchronized exactly once
before deletion.

**Acceptance:** No unresolved principal liability or ambiguous funding order
remains, and the final reports have timestamps and integrity hashes.

## Gate 3 — Capture the retirement evidence set

Preserve, without exposing secrets:

- an encrypted database recovery point or supported snapshot;
- the final continuity balance report and hashes;
- active, redeemed, cancelled, and attention-required Pay Code counts;
- funding-order states and provider transaction references;
- Commercial Sales and charge allocations;
- queue and scheduler posture;
- strict-doctor output;
- the installation manifest and configuration fingerprint;
- an inventory of private DigitalOcean Space objects; and
- a cutover timestamp and provider transaction watermark.

The private DigitalOcean Space is retained. Deleting the Cloud application
must not delete or make the evidence set unreadable.

**Acceptance:** Recovery evidence has been independently read-checked and the
provider cutover boundary is explicit.

## Gate 4 — Freeze a secret-free deployment kit

The demonstration kit must identify:

- `3neti/x-payout v1.0.0-beta.59` or a later explicitly approved release;
- `3neti/x-change v1.0.98` or its later approved lock;
- the complete stable Composer lock;
- packaged frontend assets and `public/build/manifest.json`;
- the commissioning manifest;
- required environment-variable names, never values;
- PostgreSQL, cache, queue worker, scheduler, and private-object-storage
  requirements;
- the pre-commission, commissioning, and final-doctor commands; and
- rollback and incident-response checkpoints.

The kit must expose a common lifecycle across its supported adapters:

`plan → foundation → configure → deploy → commission → verify → domain → domain acceptance`

The Laravel Cloud adapter also exposes a `continuous` phase. Once an
authorized operator has authenticated, attached the required managed secrets,
and supplied the independent production, commissioning, and domain
confirmations, that phase executes the gates in order without conversational
pauses. It stops safely at commissioning when financial authority is absent.
The domain phase preserves external nameservers, reuses matching DNS records,
waits for hostname and TLS verification, tolerates only the known
verified-TLS/live-origin `origin=pending` metadata lag, and performs
non-financial homepage, claim-entry, MCP-discovery, and disabled-public-
issuance acceptance.

Adapter ownership is explicit:

| Responsibility | Laravel Cloud adapter | Forge adapter |
| --- | --- | --- |
| Infrastructure | Cloud CLI | Forge dashboard/API |
| Source release | Cloud Git build | Forge Git deployment |
| Database/cache | Attached Cloud resources | Forge-managed or client-owned resources |
| Worker/scheduler | Cloud instance/process | Forge worker and scheduler |
| Secrets | Cloud managed secrets; attachment names and IDs only in the control worksheet | Forge-managed site `.env` |
| Application deploy | `deploy-production-cleanroom.sh` | `deploy-production-forge.sh` |
| Commissioning | x-PayOut bootstrap, once | x-PayOut bootstrap, once |
| Verification | strict doctor and balance report | strict doctor and balance report |

The Forge recurring deployment must never call the commissioning command.
Commissioning remains a separately confirmed, one-time financial ceremony.

### Optional DigitalOcean DNS adapter

Direct DigitalOcean CLI access is recommended for uninterrupted cleanroom
reinstalls, but only as an optional DNS adapter. It is not authority to manage
the entire DigitalOcean account.

The approved design is:

- use DigitalOcean's official `doctl` CLI;
- authenticate through a dedicated named context such as
  `x-payout-production-dns`;
- issue a custom-scoped token containing only `domain:read`, `domain:create`,
  `domain:update`, and `domain:delete`;
- keep the token out of Git, the deployment worksheet, application variables,
  logs, prompts, and Laravel Cloud;
- store only the non-secret context name in the local deployment worksheet;
- allow changes only inside the `disburse.cash` zone and only for the exact
  Laravel Cloud records associated with `payout.disburse.cash` and its `www`
  companion;
- refuse all nameserver, MX, SPF, DKIM, DMARC, NetBank, Spaces, and unrelated
  subdomain changes;
- snapshot matching DNS records before and after reconciliation;
- require Laravel Cloud's requested record set as the desired state; and
- retain the existing manual DNS path when `doctl` is unavailable or its
  credentials are absent.

DigitalOcean scopes apply to the resource category and are not treated as an
object-level restriction to this single zone. The deployment adapter must
therefore enforce its own zone and record-name allowlist. For demonstrations,
a short-lived token created before the cleanroom and revoked afterwards is
preferred. A persistent named context is acceptable only on a controlled
operator machine with restricted local file access and an established token
rotation procedure.

Current operator prerequisite (initialized 2026-10-04):

- `doctl` version: `1.167.0`;
- named context: `x-payout-production-dns`;
- token expiry: January 2, 2027;
- credential file mode: `0600`; and
- verified capability: read-only enumeration of the allowlisted
  `payout.disburse.cash` records.

The deployment code must reference the context name only. It must never read,
copy, print, export, or transmit the stored token. Token rotation is an
operator prerequisite and must not be coupled to an application deployment.

### Production secret custody

Keeper Business and HashiCorp Cloud were evaluated but are not dependencies of
the deployment kit. Keeper purchasing could not be completed for the
Philippines tenant, while HashiCorp's production Vault Dedicated offering is
disproportionate to this host.

Production custody is therefore:

- Laravel Cloud managed secrets for active runtime credentials;
- issuing provider portals for regeneration and rotation;
- Laravel Cloud-managed database credentials for attached databases;
- DigitalOcean for the private Space and DNS resources; and
- a committed, value-free inventory describing each secret's purpose, owner,
  issuing provider, rotation procedure, and required Cloud secret name.

Laravel Cloud secret values cannot be read back. Loss is handled by provider
recovery or rotation, not by exporting a production `.env`. `APP_KEY` and
private signing keys require explicit continuity handling because replacing
them may invalidate encrypted data or signatures.

The kit must install in an empty directory from Packagist without local path or
Git repository overrides.

**Acceptance:** A clean dependency install reproduces the intended exact
runtime versions and packaged assets.

## Gate 5 — Controlled retirement

This is destructive and requires fresh, explicit authorization after Gates 2
through 4 pass.

1. place the application in retired or maintenance posture;
2. detach `payout.disburse.cash` without changing its authoritative
   nameservers;
3. record final Laravel Cloud resource identifiers;
4. confirm the recovery point and private Space remain accessible;
5. delete the Laravel Cloud application and only the explicitly approved
   application-owned resources; and
6. verify that the public hostname no longer routes to the retired runtime.

Do not delete shared secrets, shared NetBank configuration, the retained
DigitalOcean Space, or provider-side history as part of this gate.

## Gate 6 — Fresh hosting foundation

Select exactly one approved hosting adapter for a cleanroom run.

### Gate 6A — Laravel Cloud

Create a new application from the published x-PayOut release:

- fresh Laravel Cloud application and production environment;
- fresh PostgreSQL database;
- fresh durable cache;
- private DigitalOcean Space attachment;
- web instance, scheduler, and queue worker for
  `x-change-funding,x-change-feedback,default`;
- encrypted secret attachments; and
- generated Cloud URL for initial verification.

Build with packaged assets. Do not run npm, Vite, or Vite Plus in Cloud.

**Acceptance:** Deployment is active, migration succeeds, packaged assets are
present, exact versions match the release lock, and no commissioning mutation
has occurred.

### Gate 6B — Laravel Forge

For a client-owned VPS:

- provision or attach an Ubuntu server through Forge;
- create the site, database, Redis connection, SSL certificate, backups, and
  health check;
- configure one supervised Redis queue worker for
  `x-change-funding,x-change-feedback,default`;
- enable the Laravel scheduler;
- install the Forge-managed application `.env` without committing secrets;
- use the package's committed frontend assets; and
- run the Forge adapter's `install` phase, which stops at the strict
  pre-commission doctor.

The Forge deployment-control worksheet is not the Laravel application `.env`.
It contains only deployment confirmations, paths, the expected release, and
the provider cutover evidence.

**Acceptance:** The server is healthy, migrations succeed, the queue worker and
scheduler are supervised, packaged assets exist, the exact x-change version
matches the lock, pre-commission doctor passes, and no commissioning mutation
has occurred.

## Gate 7 — Safe commissioning

1. apply the intended `netbank` deployment profile and production runtime
   tier;
2. set the new provider cutover boundary before any recognition step;
3. run the strict pre-commission doctor;
4. provision the System Principal and Commercial Principal;
5. establish the Commercial Revenue Account;
6. capitalize only provider inventory authorized for this new instance;
7. optionally issue funded Maker and Checker invitations when the rehearsal
   calls for them;
8. persist the installation manifest; and
9. run final strict doctor.

The replacement instance must not replay or recapitalize provider transactions
that belong to the retired instance.

**Acceptance:** Strict doctor passes, principal and Treasury controls reconcile,
and no historical provider transaction was recognized twice.

## Gate 8 — Generated-domain acceptance

Verify through the generated Cloud URL:

- home, pricing, Claim, and public On-Demand Issuance surfaces;
- Maker and Checker onboarding when included;
- EULA enforcement;
- Cockpit access and role routing;
- worker and scheduler execution;
- private evidence storage write/read/delete;
- public MCP discovery and a read-only MCP-client call;
- strict doctor; and
- the read-only balance report.

Use rollback-only or simulated scenarios first. Any real payment, SMS, Pay Code
issuance, or claim requires separate authorization and a stated maximum
exposure.

## Gate 9 — Restore `payout.disburse.cash`

Only after Gate 8 passes:

1. attach `payout.disburse.cash` to the new environment;
2. publish only Laravel Cloud's exact DNS records;
3. verify hostname, certificate, and origin;
4. set the custom domain as primary;
5. update `APP_URL` and clear cached configuration as required; and
6. rerun strict doctor and public-surface acceptance.

DigitalOcean DNS is a persistent prerequisite rather than a resource recreated
by the installer. A replacement host may reuse matching A and ACME records.
Obsolete Cloud ownership TXT records must be removed before recreating a failed
domain attachment. The adapter never changes the `disburse.cash` nameservers.

With the optional DNS adapter enabled, reconciliation must follow this order:

1. read Laravel Cloud's required domain records;
2. read only the allowlisted DigitalOcean records;
3. preserve records that already match;
4. create or update only missing or mismatched allowlisted records;
5. remove an obsolete `_cf-custom-hostname.payout` token only when it is not in
   Laravel Cloud's current required set;
6. verify authoritative DNS without changing nameservers;
7. ask Laravel Cloud to verify hostname and TLS; and
8. run non-financial custom-domain acceptance.

Operator commands:

```bash
# Mandatory review step; never writes DNS.
scripts/deploy-production-cleanroom.sh domain-reconcile \
  --control=deployment.production.local

# Separate live-change ceremony after reviewing the exact diff.
scripts/deploy-production-cleanroom.sh domain-reconcile --apply \
  --control=deployment.production.local
```

The apply form remains inert unless `DEPLOY_CONFIRM_PRODUCTION`,
`DEPLOY_CONFIRM_DOMAIN_CUTOVER`, and `DEPLOY_CONFIRM_DNS_WRITE` are all `YES`.
Every run writes owner-only before/after snapshots under
`storage/app/private/deployment/dns` by default. The script refuses an empty
Laravel Cloud desired set rather than treating it as a successful no-op.

## Gate 10 — Institutional handoff proof

Produce a sanitized demonstration bundle containing:

- elapsed time per gate;
- exact-version bill of materials;
- infrastructure and credential ownership matrices;
- commissioning and balance reports;
- cutover and rollback procedures;
- a clean command transcript with secrets removed;
- known limitations and deferred continuity features; and
- named operational responsibilities for the bank or EMI.

The claim is limited to repeatable deployment and commissioning. It is not a
claim that licensing, governance, reconciliation, or institutional operating
responsibility is supplied by the software alone.

## Gate 11 — Portable instance profile and standard deployment tooling

### Objectives

1. Reduce the operator-maintained installation contract to one portable
   `instance.yaml`; use one private `secrets.env` only for initial secret
   import, credential recovery, or an explicitly authorized commissioning
   ceremony.
2. Make the instance definition independent of Laravel Cloud, Forge, a bank,
   an EMI, or any one provider while still allowing installed drivers to
   declare and validate their own requirements.
3. Use GitHub Actions, Laravel Cloud CLI, Forge, Deployer, and provider-native
   tools for infrastructure work instead of building a competing provisioning
   framework.
4. Keep custom x-PayOut code limited to deterministic profile translation,
   exact-release enforcement, commissioning-state decisions, financial safety
   gates, readiness checks, and evidence collection.
5. Preserve the proven beta.68 continuous controller until the replacement
   path produces equivalent evidence from the same exact release.
6. Give a bank, EMI, enterprise, cooperative, or public institution a
   repeatable handoff that does not depend on conversational memory or
   machine-specific file placement.

### Two-file operator contract

The operator supplies:

- `instance.yaml`: non-secret institution identity, branding, canonical URL,
  connection drivers and capabilities, routing, commissioning intent, feature
  switches, and platform-neutral runtime requirements; and
- `secrets.env`: private provider credentials, storage credentials, and any
  commissioning identities used only for controlled initial secret import,
  credential recovery, or initial commissioning.

`instance.yaml` must not contain plaintext secret values. `secrets.env` is
gitignored, owner-only (`0600`), and is not reopened by an ordinary recurring
deployment after its values become platform-managed secrets. `APP_KEY`,
database credentials, cache credentials, and platform-native signing material
remain under their platform's own authority.

The portable profile may select a provider driver such as `netbank`, but the
common schema understands only connection references, capabilities, routing,
configuration maps, and secret references. The selected provider package owns
its configuration schema, required secret slots, runtime translation, and
readiness checks.

### Wiring

```text
instance.yaml + optional secrets.env
             |
             v
portable profile validator/compiler
             |
             +-- compiled-instance.json
             +-- runtime.env
             +-- required-secrets.json
             +-- commissioning.yaml
             +-- preflight-plan.json
             +-- manifest.sha256
             |
             v
GitHub Actions or the local deployment runner
             |
             v
thin platform target
  +-- Laravel Cloud CLI
  +-- Forge/Deployer
  +-- future institutional target
             |
             v
platform-neutral x-PayOut commissioning controller
             |
             +-- pre-commission doctor
             +-- commission once / verified adoption / operational skip
             +-- strict doctor
             +-- balance report
             +-- domain and public-surface acceptance
             v
sanitized evidence bundle
```

The compiler is deterministic: the same normalized profile produces the same
manifest fingerprint. It may read secret names but must not serialize secret
values. Its outputs are ephemeral build artifacts, not additional
operator-maintained configuration files.

The platform target owns infrastructure provisioning, runtime variables,
secret attachment, release deployment, workers, scheduler, domains, remote
command transport, and platform evidence. It does not decide opening
capitalization, Treasury treatment, invitation funding, or whether a financial
ceremony may be repeated.

The platform-neutral commissioning controller owns those financial decisions.
It uses the target only to execute an approved remote command and return its
exit code and evidence.

### Repository shape

```text
bin/
  x-payout-profile
  x-payout-deploy
ops/deployment/
  schema/instance.v1.schema.json
  examples/instance.yaml
  examples/secrets.env.example
  targets/laravel-cloud.sh
  targets/forge.sh
  commissioning.sh
.github/workflows/
  deploy-x-payout.yml
```

The existing `scripts/deploy-production-cleanroom.sh` and
`scripts/deploy-production-forge.sh` remain compatibility wrappers and the
behavioral reference until parity is proven. No new standalone deployment
package is introduced at this stage.

### Implementation sequence

1. **Complete.** Inventory every existing deployment setting and classify it as portable
   profile data, provider-driver configuration, private secret, generated
   infrastructure state, operator authority, or evidence.
2. **Complete.** Define and test `instance.v1` plus sanitized example files.
3. **Complete.** Implement the standalone profile validator/compiler without booting the
   Laravel application or requiring a database, cache, or commissioned host.
4. **Complete.** Add deterministic-output, schema, plaintext-secret rejection, missing
   driver, missing capability, and secret-reference tests.
5. **Complete.** Make the existing Laravel Cloud controller consume compiled artifacts while
   retaining its current command and legacy worksheet compatibility.
6. **Complete locally.** Prove parity against the beta.68 behavior: exact release, managed-secret
   gate, bounded monitor, operational skip or verified adoption, strict doctor,
   balance report, DNS reconciliation, and public acceptance.
7. **Complete locally.** Add an optional reusable GitHub Actions workflow that compiles the
   profile and runs the strict pre-commission doctor against the environment
   already deployed by Laravel Cloud. It uploads only sanitized evidence and
   performs no foundation, configuration, deployment, DNS, domain, or
   commissioning mutation. Laravel Cloud push-to-deploy remains the ordinary
   recurring deployment mechanism.
8. Adapt Forge only after Laravel Cloud parity is green; use Forge and Deployer
   for server mechanics rather than reproducing them.
9. Run one exact-release cleanroom from only the two operator inputs and native
   CLI authentication.
10. Deprecate the legacy worksheet only after that cleanroom passes; retain a
    compatibility error with a migration path for at least one release.

### Acceptance

- A fresh operator can validate and deploy from one YAML and one private
  `.env` without editing deployment scripts.
- No generated artifact, log, workflow output, or evidence bundle contains a
  secret value.
- The same compiled profile can target Laravel Cloud or Forge without changing
  business or commissioning semantics.
- Recurring deployment skips the one-time ceremony on an operational host.
- An uncommissioned host cannot cross the financial gate without explicit
  authority and provider cutover evidence.
- The exact deployed tag and commit, profile fingerprint, doctor results,
  balance evidence, domain result, and acceptance result are preserved.
- The beta.68 controller remains available as rollback until parity is proven.

## Current next move

The optional workflow is verified through the strict pre-commission checkpoint
against the live environment. It does not deploy, configure, commission, or
modify DNS. Normal application releases continue through Laravel Cloud
push-to-deploy.

Recurring deployment and pre-commission verification do not require GitHub
reviewers, Maker/Checker contact details, or a local `secrets.env`. The
controller validates that every runtime secret name required by the compiled
profile is already attached as a Laravel Cloud managed secret.

Initial secret import/recovery and one-time commissioning remain separate,
explicitly authorized operator procedures. The existing commissioning GitHub
Environment may remain dormant as a future governance option, but it is not a
dependency of deployment or pre-commission verification. The remaining proof
is a separately authorized cleanroom from `instance.yaml`, one-time
`secrets.env`, and native platform tooling. The published beta.68 tag remains
the rollback reference.

## Operating record

Progress and evidence are maintained in
[X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_COMPASS.md](X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_COMPASS.md).
The command-level commissioning procedure remains in
[X_PAYOUT_CLEANROOM_COMMISSIONING.md](X_PAYOUT_CLEANROOM_COMMISSIONING.md).
The secret custody and recovery inventory is maintained in
[X_PAYOUT_PRODUCTION_SECRET_CUSTODY.md](X_PAYOUT_PRODUCTION_SECRET_CUSTODY.md).
