# x-PayOut Public Cloud Deployment Compass

**Last updated:** 2026-10-05

**Current position:** Gate 13 — beta.69 exact-release deployment and pre-commission readiness complete; commissioning remains unauthorized

**Overall status:** Foundation, managed-secret attachment, runtime reconciliation, exact-release deployment, strict pre-commission doctor, and immediate no-duplicate rerun are complete; commissioning, domain activation, and final verification have not run; legacy worksheet retirement remains prohibited

**Intended public host:** `https://payout.disburse.cash`

## Purpose

This compass is the durable operational memory for repeatedly deploying the
shared x-PayOut beta and demonstrating the same procedure to banks and EMIs.
Update it after every completed, blocked, rolled-back, or deferred gate.

The governing plan is
[X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_PLAN.md](X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_PLAN.md).

## Proven baseline

- A published x-PayOut release can be installed from Packagist without a local
  path repository.
- Laravel Cloud can provide the application, PostgreSQL database, cache,
  worker, scheduler, deployment, commands, and custom-domain attachment.
- A separately controlled private DigitalOcean Space can provide durable claim
  evidence and keepsake storage.
- Strict pre-commission and final doctors, Treasury opening capitalization,
  funded Maker and Checker invitations, public On-Demand Issuance, claims, and
  low-value real-money settlement have all been exercised in prior controlled
  cleanrooms.
- `payout.disburse.cash` has previously routed successfully with valid TLS.
- Previous production resources and financial evidence remain historical
  records; they are not instructions to replay transactions or balances.

Today, exact application, environment, deployment, process, database, cache,
domain, and secret IDs still live in the local value-free compatibility
worksheet. Gate 13 moves them into generated, reconstructible platform state.
Historical identifiers must never be copied into a new run without discovery
and identity checks.

## Gate ledger

| Gate | State | Evidence or remaining action |
| --- | --- | --- |
| 1. Record proven deployment | Complete | Historical deployment and lifecycle evidence preserved |
| 2. Close and reconcile retired host | Complete for the cleanroom objective | Previous host retired under explicit authority; no balance migration authorized |
| 3. Capture retirement evidence | Complete | Cutover and retained evidence recorded before replacement |
| 4. Freeze deployment kit | Complete | Cloud and Forge adapters, exact-version source, and prebuilt assets present |
| 5. Controlled retirement | Complete | Destructive actions separately authorized and executed |
| 6. Fresh hosting foundation | Complete | Isolated database, cache, compute, worker, scheduler, and private Space topology proved |
| 7. Safe commissioning | Complete | Pre-doctor, principals, Treasury, funded invitations, and final doctor proved |
| 8. Generated-domain acceptance | Complete | Browser, worker, storage, MCP, and report checks proved |
| 9. Restore custom domain | Complete with Cloud metadata caveat | DNS and TLS proved; Cloud control-plane metadata may reconcile asynchronously |
| 10. Institutional handoff | Complete for current Cloud controller | Beta.68 exact-release continuous run completed without intervention or controller error |
| 11. Portable instance profile | **In progress** | Compiler, authoritative runtime artifact, compatibility adapter, and fake-transport parity complete; two-input cleanroom remains |
| 12. Institutional Partner MCP | Complete for transport readiness | x-change v1.0.99 and x-mcp v0.3.0 deployed; Passport keys and contract v1.4.0 pinned; strict doctor 37/37 and MCP doctor green; client issuance remains governed |
| 13. Two-input one-command cleanup | **In progress** | Ownership, preflight, state, secret reconciliation, compiled controller authority, changed-only runtime, and per-phase resumption are green; live entry-point adoption remains |

## Gate 13 compass — two-input one-command cleanup

### Objective

One command must validate and compile the instance, reconcile managed secrets,
create or discover infrastructure, apply only changed runtime configuration,
deploy the exact release, pass pre-commission doctor, commission once when
authorized, attach and verify the domain, pass strict and MCP doctors, retain
sanitized evidence, and remain idempotent on rerun.

### Current facts

- The portable schema, compiler, examples, required-secret inventory, fake
  transport parity, GitHub validation workflow, and current Laravel Cloud
  controller already exist.
- `deployment.production.local` still combines platform target, generated
  resource state, confirmations, and duplicated non-secret runtime values.
- `deployment.production.secrets.local` remains a local secure re-entry
  worksheet; Laravel Cloud managed secrets are the production runtime
  authority.
- The current controller mutates the control worksheet through
  `upsert_local_state()`.
- The private `payout.disburse.cash.yaml` profile exists and is ignored from
  Git, but compiled mode still depends on the legacy control worksheet for
  parts of the run.
- Partner MCP is no longer a deferred configuration item: production runs
  x-change `v1.0.99`, x-mcp `v0.3.0`, contract `1.4.0`, strict doctor `37/37`,
  and MCP doctor ready. Production OAuth client creation remains a separate
  Maker/Checker-governed ceremony.

### Required sequence

| Slice | State | Exit evidence |
| --- | --- | --- |
| 13.0 Legacy-input classification | **Complete** | Both worksheet shapes have exact ownership; unknown, duplicate, and multiply owned keys fail |
| 13.1 External prerequisite catalog | **Complete for adapter contract** | DigitalOcean DNS, installed EMI provider, immutable release, private storage, HTTPS integration, and commissioning-evidence probes are fake-tested; live credentials remain a cleanroom concern |
| 13.2 Generated-state schema | **Complete** | Official Cloud read discovery, exact identity recovery, ambiguity/conflict failure, unchanged rerun, and deleted-state reconstruction are fake-proven |
| 13.3 Managed-secret importer | **Complete with fake CLI** | Official Cloud list/create/update/attach transport is wired; values use stdin and current-run rotation authority; exact-release cleanroom remains |
| 13.4 Compiled-state authority | **Complete in controller kernel** | Verified compiled profile owns normalized runtime and current-run authority is typed; worksheet is not consulted by the kernel |
| 13.5 Resumable one-command controller | **Complete with fake CLI** | Real entry point plus failure injection at all nine phases proves safe continuation and unchanged rerun behavior |
| 13.6 Sanitized evidence contract | **Complete with fake CLI** | Owner-only bounded evidence, same-fingerprint merge, and secret-value rejection are green |
| 13.7 Compatibility retirement | Not started | Worksheet dependencies removed after parity proof |
| 13.8 Exact-release cleanroom | **In progress — pre-commission ready** | Deployment `depl-a2e8e855-83a5-45da-8502-1ac7dcc1f97c` succeeded from `release/v1.0.0-beta.69` at exact peeled tag commit `853c5b00774878de89b905fc0d3ba3f5c26aae47`; strict pre-commission doctor passed 27/27; immediate bounded rerun created no replacement deployment; commissioning, domain, invitations, and financial operations did not run |

### External prerequisite policy

Preflight is read-only by default and precedes every Cloud or DNS mutation.
It validates the declared NetBank account and capabilities, canonical DNS and
nameserver custody, private storage, EngageSpark, TXTCMDR, HyperVerge,
Mapbox/OpenCage, Passport/Partner MCP, exact release, and commissioning
authority. Safe connectivity probes are opt-in per driver and must never move
money, send SMS/OTP, create KYC subjects, consume a paid map lookup, issue a
token, generate a Pay Code, or write a policy.

Every prerequisite reports `ready`, `not_applicable`, `needs_attention`, or
`blocked`. The applied run stops on `needs_attention` or `blocked` unless a
narrow, documented exception contract exists. Reports contain names,
capabilities, hashes, and redacted dispositions only.

### Safety invariants

- `instance.yaml` is desired-state authority; generated state cannot override
  it.
- `secrets.env` is a one-time bootstrap/recovery input, never ordinary runtime
  custody.
- Laravel Cloud managed secrets remain authoritative after import.
- Platform state is reconstructible and never contains secrets, account
  numbers, personal invitation data, or sticky approvals.
- Commissioning, domain activation, secret rotation, and destructive cleanup
  remain explicit current-run authorities.
- An unchanged rerun cannot recreate infrastructure, reattach an existing
  domain, repeat capitalization, reissue invitations, rotate secrets, or
  rewrite environment values.
- Losing local state cannot authorize guessing between multiple matching
  resources.

### Completed controlled slice — 2026-10-05

Compiled desired state is now authoritative in the new continuous controller
kernel while legacy worksheets remain an explicit rollback path:

1. add the remaining release, private-storage, SMS, OTP, KYC, maps,
   Partner-MCP, and commissioning prerequisite adapters;
2. invoke the full preflight report before the first create or update command;
3. consume generated state instead of mutating the control worksheet;
4. invoke managed-secret creation or rotation only with current-run authority;
5. compare desired runtime values with Cloud state and write changed keys only;
6. persist a checkpoint after each successful phase; and
7. inject one failure after every fake phase, then prove safe continuation and
   a completely unchanged rerun.

Additional proof:

- `compiled-instance.json` contains the normalized non-secret runtime map;
- the controller rejects state from another profile fingerprint or adapter;
- runtime comparison applies only changed keys and an unchanged rerun performs
  zero writes;
- checkpoints use `pending`, `failed`, `complete`, or `skipped` and are written
  atomically in owner-only state;
- a failure at preflight, foundation, secrets, runtime, deploy,
  pre-commission, commission, domain, or verify resumes at the failed phase;
- completed mutating phases are not replayed; and
- read-only preflight and final verification run again on an unchanged rerun.

Compatibility worksheet removal remains forbidden until one exact-release
cleanroom passes.

### Real entry-point fake parity — 2026-10-05

- `bin/x-payout-deploy continuous` accepts the portable instance, optional
  one-time secrets file, generated state/evidence locations, adapter, and
  current-run authorities.
- It compiles and verifies artifacts before constructing the Laravel Cloud
  adapter; no legacy worksheet is read.
- The fake first run exercised source, DNS, storage, integration, secret,
  infrastructure, runtime, deploy, remote-doctor, commissioning, domain, and
  final verification transports.
- The fake second run rediscovered state and repeated read-only preflight and
  doctor checks only. It did not create infrastructure, rewrite runtime,
  redeploy, recommission, or recreate the domain.
- Sanitized evidence retained the exact release, fingerprint, changed-key
  names, phase dispositions, resource IDs, and doctor summaries without any
  supplied secret value. Its top-level contract is committed as
  `ops/deployment/schema/evidence.v1.schema.json`, and focused tests verify
  the required shape, owner-only file mode, and secret-value rejection.

### Immediate next slice

Resume the separately authorized beta.69 exact-release cleanroom from the
failed foundation checkpoint with the real Laravel Cloud and DigitalOcean
transports. Discovery must adopt the one unambiguous detached resource set,
attach it without recreating infrastructure, and continue only after the
recovered identities are retained in generated state. The immediate run after
operational acceptance must be mutation-free. Compatibility retirement may be
reviewed only after that evidence is accepted.

### Beta.69 foundation recovery evidence — 2026-10-05

The first real two-input beta.69 cleanroom passed all 13 read-only preflight
checks and stopped safely in `foundation`. Generated evidence records:

- exact release `3neti/x-PayOut` `v1.0.0-beta.69`;
- `preflight: complete` and `foundation: failed`;
- managed-secret identities without supplied values;
- no deployment identity;
- no completed deployment, commissioning, domain activation, or final
  verification phase; and
- an empty local resource map because the foundation phase did not return a
  patch after its later operation failed.

The recovery slice now closes the resulting rediscovery gap without changing
the generated-state schema:

- unattached database clusters, `x_payout` schemas, and caches are discovered
  by the stable instance resource name;
- both the previously emitted mixed-case name and the corrected lowercase
  normalized name are recognized during recovery;
- more than one matching legacy/current resource fails closed as ambiguous;
- an injected failure after database and cache creation but before environment
  attachment reproduces the empty-resource-state checkpoint;
- the retry rediscovers and attaches those exact resources without issuing a
  second application, database-cluster, database, or cache creation command;
- the immediate completed rerun performs no infrastructure, runtime,
  deployment, commissioning, or domain mutation; and
- the deployment unit suite passes 62 tests and 487 assertions.

This is local fake-transport proof only. It authorizes no Cloud, DNS, provider,
secret, commissioning, invitation, messaging, or financial mutation by
itself. Compatibility worksheet retirement remains prohibited until the live
exact-release run reaches operational state and its immediate no-op rerun is
accepted.

### Beta.69 live recovery admission — 2026-10-05

A read-only Laravel Cloud inventory after the recovery commit confirms that a
bounded live resume is admissible:

- exactly one `x-PayOut` application and one `production` environment match
  the declared repository and environment identity;
- the environment has no database schema or cache attached;
- exactly one normalized foundation database cluster is available and contains
  exactly one `x_payout` schema;
- no matching x-PayOut cache exists, so the next foundation run may create one
  cache but must not create another database cluster or schema;
- exactly one application instance exists at the declared size, with scheduler
  disabled and no background worker;
- no domain is attached;
- all 18 deployment-required managed-secret IDs recorded in generated state
  still exist at organization scope and none are attached to the new
  environment; and
- the four Maker/Checker contact references are commissioning-only inputs, not
  deployment managed secrets.

The compiled profile and generated state retain the same profile fingerprint.
The next authorized command must use `--apply` without `--commission`,
`--activate-domain`, or `--rotate-secrets`. Its boundary is foundation recovery,
existing-secret attachment, changed-only runtime configuration, exact beta.69
deployment, and strict pre-commission verification. It must stop before any
opening capitalization, funded invitation, domain/DNS mutation, or financial
operation.

### Beta.69 bounded live resume — 2026-10-05

The authorized resume used `--apply` only. It did not receive commissioning,
domain-activation, secret-rotation, invitation, messaging, or financial
authority.

The first preflight stopped before mutation because the default DigitalOcean
CLI context could not read the declared zone. A read-only lookup proved the
dedicated `x-payout-production-dns` context could read `disburse.cash`; the
single corrected retry then passed preflight and completed:

- detached `x_payout` database-cluster and schema recovery;
- creation of the one missing normalized cache;
- database and cache attachment to the production environment;
- attachment of the 18 exact recorded deployment managed-secret IDs;
- changed-only runtime reconciliation;
- scheduler enablement; and
- queue-worker creation.

Generated state now records `preflight`, `foundation`, `secrets`, and `runtime`
as complete, retains the recovered resource identities, and records `deploy`
as failed. Laravel Cloud has no deployment record for this environment, so the
failure occurred before a deployment started. Commissioning and domain phases
were not reached.

The original deploy boundary was characterized exactly. The compiled release
ref was the immutable annotated Git tag `v1.0.0-beta.69`. Its tag object is
`296346d9a6743da12c63204634529880ca8d3d06`, and its peeled commit is
`853c5b00774878de89b905fc0d3ba3f5c26aae47`. Laravel Cloud rejected the tag
value with `The selected branch is no longer available` because environment
source selection accepts repository branches.

The corrective source contract is now implemented and tested. Instance profiles
declare `release.ref` as immutable release identity and
`release.cloud_source_branch` as the Laravel Cloud source selector. Preflight
resolves the tag and branch independently and blocks before mutation when the
branch is absent or points at another commit. Both the continuous controller
and retained compatibility controller use the Cloud branch while deployment
evidence preserves the immutable tag.

The private beta.69 profile selects `release/v1.0.0-beta.69`. Under explicit
source-control authority, that remote branch was created at peeled commit
`853c5b00774878de89b905fc0d3ba3f5c26aae47`. Remote verification proves the
branch and `refs/tags/v1.0.0-beta.69^{}` resolve to that same commit. The
annotated tag object itself is
`296346d9a6743da12c63204634529880ca8d3d06`; it is release metadata, not a valid
branch target. Deploying mutable `main` or weakening exact-release validation
remains forbidden. The completed bounded resume is recorded below.

### Beta.69 bounded deploy checkpoint — 2026-10-05

The bounded `--apply` resume rediscovered the existing foundation and started
exactly one Laravel Cloud deployment. Cloud completed deployment
`depl-a2e8e855-83a5-45da-8502-1ac7dcc1f97c` successfully from
`release/v1.0.0-beta.69` at commit
`853c5b00774878de89b905fc0d3ba3f5c26aae47`.

Two CLI streaming races were characterized and hardened without broadening
authority:

- deployment monitoring now polls the returned deployment ID and can recover
  exactly one already-successful deployment only when branch and commit match
  the immutable release;
- remote commands now start with `--no-monitor` and poll their returned command
  ID, avoiding multi-document JSON progress output.

The recovered deployment was persisted into generated state and sanitized
evidence. Strict pre-commission doctor passed all 27 checks. The controller
stopped with `commission: skipped`, and an immediate subsequent bounded run
remained `precommission_ready` with the same single deployment. No
commissioning, domain activation, secret rotation, invitation, or financial
operation ran. Compatibility worksheet retirement remains prohibited until an
explicitly authorized commissioning and final no-op operational rerun complete.

### Official adapter parity evidence — 2026-10-05

- Added an official Laravel Cloud JSON client using documented non-interactive
  CLI shapes. Errors are operation-scoped and do not reproduce raw provider or
  secret output.
- Added exact Cloud discovery for application plus repository, named
  environment, default instance, attached database and cluster, cache, queue
  worker, canonical domain, and managed-secret identities.
- Zero matches produce an explicit missing-resource plan. Multiple matches,
  duplicate secret names, missing recorded resources, or changed identities
  fail closed.
- Added the official Laravel Cloud managed-secret transport. Create and update
  values use standard input and never command arguments; environment
  attachment uses managed-secret IDs.
- Added a DigitalOcean DNS zone probe using the official `doctl` read command
  and an EMI provider adapter that delegates live identity/account readiness
  to the installed provider package's read-only preflight contract.
- The first fake run reconstructs owner-only state; the second run leaves the
  file byte-for-byte unchanged; deleting state rediscovers the same resource
  and secret identities without a create, update, attach, domain, financial,
  invitation, or commissioning call.
- The complete deployment-focused suite passes 91 tests and 443 assertions.
- No live Cloud, DNS, DigitalOcean, provider, secret, financial, messaging,
  domain, or commissioning mutation occurred.

## Turnkey operating contract

The Laravel Cloud adapter executes:

`plan → foundation → configure → deploy → pre-commission → commission → verify → domain → domain acceptance`

The `continuous` phase runs these steps without conversational pauses after an
authorized operator supplies the prerequisites. It remains fail-closed:

- infrastructure mutation requires `DEPLOY_CONFIRM_PRODUCTION=YES`;
- commissioning requires its own confirmation and provider cutover evidence;
- domain activation requires its own confirmation;
- every required managed secret name must already be attached to the target
  Cloud environment; and
- no secret value is read from Cloud or accepted from the production control
  worksheet.

If commissioning authority is absent, continuous execution stops after the
strict pre-commission doctor. That checkpoint is a successful safe stop, not a
partially commissioned host.

The domain gate is now part of the same continuous contract. It preserves the
DigitalOcean nameservers, waits within a bounded window, and accepts lingering
Laravel Cloud `origin=pending` metadata only when hostname and TLS are verified
and the live HTTPS origin probe succeeds. Its acceptance checks do not create a
funding order, Pay Code, claim, provider mutation, or message.

## Portable deployment disposition — 2026-10-04

### Decision

The next handoff form is one provider- and platform-neutral `instance.yaml`
plus one private `secrets.env`. The project will not build a replacement for
GitHub Actions, Laravel Cloud CLI, Forge, Deployer, Terraform, or provider
portals.

Custom code is limited to:

- validating and deterministically compiling the instance profile;
- delegating provider-specific validation and runtime translation to installed
  drivers;
- producing sanitized runtime, secret-name, commissioning, and fingerprint
  artifacts;
- selecting the correct commissioning-state path;
- enforcing exact releases and financial authority; and
- collecting doctor, balance, domain, and public-surface evidence.

Laravel Cloud push-to-deploy remains the ordinary recurring deployment path.
GitHub Actions is an optional validation and pre-commission orchestration
surface, not a replacement deployment platform and not a commissioning
authority. Thin platform targets invoke official infrastructure tools. The
x-change doctor, separately authorized commissioning commands, and balance
report remain the financial authority.

### Initial local-file inventory

The proven beta.68 operator machine has 16 deployment-related files outside
Git:

- one owner-only deployment-control worksheet;
- one owner-only secure re-entry worksheet containing 29 named entries;
- twelve generated DNS before/after evidence snapshots;
- one Laravel Cloud CLI authentication file; and
- one DigitalOcean CLI authentication file.

Only the control worksheet and two native CLI authentication files are needed
for an ordinary recurring run. The secure re-entry worksheet is needed only
when provider credentials must be created or replaced. DNS snapshots are
evidence, not inputs. Both deployment scripts are tracked in Git.

The Laravel Cloud CLI authentication file was found with mode `0644` and must
be restricted to `0600` before it is accepted as part of the portable handoff.
No credential value was read or recorded during this inventory.

### Migration boundary

The beta.68 controller is the behavioral reference and rollback path. The
first implementation slice may add schema, examples, compiler, tests, and a
compatibility loader, but must not change live Cloud resources, DNS, provider
state, commissioning, invitations, or Treasury. Legacy worksheet removal is
forbidden until one exact-release two-file cleanroom passes.

### Portable compiler evidence — 2026-10-04

- Added the provider- and platform-neutral `x-payout.instance.v1` schema and a
  sanitized institution example.
- Added a gitignored, owner-only `secrets.env` contract for initial import,
  recovery, and commissioning validation. Ordinary compilation accepts
  secret-name references from YAML without requiring secret values; the target
  verifies those names are already attached as platform-managed secrets.
- Added `bin/x-payout-profile`, which loads Composer only and does not boot
  Laravel, connect to a database or cache, or invoke any platform/provider.
- Compilation produces only deterministic sanitized artifacts:
  `compiled-instance.json`, `runtime.env`, `required-secrets.json`,
  `commissioning.yaml`, and `manifest.sha256`.
- Added a precedence-based legacy-setting classification contract. Focused
  coverage proves every setting in both legacy worksheets is classified as
  portable profile, provider-driver configuration, private secret, generated
  state, operator authority, platform target, or evidence.
- The compiler rejects missing drivers, missing capabilities, plaintext secret
  values, incomplete secret sets, and permissive secret-file modes.
- Focused profile and deployment-controller verification passed 29 tests and
  144 assertions. The proven beta.68 controller remains byte-for-byte equal to
  its published tag.
- No Cloud, DNS, DigitalOcean, NetBank, commissioning, financial, invitation,
  messaging, or secret mutation occurred in this slice.

### Laravel Cloud compatibility evidence — 2026-10-04

- The existing cleanroom controller now accepts `--compiled=DIR` or
  `PAYOUT_COMPILED_PROFILE_DIRECTORY` as an opt-in input mode.
- In compiled mode, verified artifacts supply runtime variables, exact source
  repository/ref, canonical public domain, required managed-secret names,
  provider cutover evidence, and opening-capitalization intent.
- The legacy control worksheet remains the authority for Cloud resource IDs,
  platform sizing/topology, generated state, DNS adapter state, and explicit
  operator confirmations. Without `--compiled`, legacy behavior is unchanged.
- The controller verifies the artifact manifest and shared profile fingerprint
  before evaluating any phase. A changed artifact fails closed.
- Generated `runtime.env` values are shell-safe single-quoted; secret keys are
  excluded and a permissive or incomplete private secrets file is rejected at
  compilation.
- A fake-Cloud configure proof confirmed that compiled runtime values and the
  compiled managed-secret inventory reach the existing configure path without
  exposing secret values.
- Focused profile/controller verification passed 34 tests and 165 assertions;
  shell syntax and formatting passed.
- No Laravel Cloud, DigitalOcean, DNS, NetBank, provider, commissioning,
  financial, invitation, messaging, or credential mutation occurred.

### Compiled-mode controller parity evidence — 2026-10-04

- A dedicated fake-transport matrix exercised compiled-mode foundation,
  generated-state persistence, configuration, exact release/ref selection,
  bounded deployment monitoring, pre-commission doctor, commissioning safe
  stop, already-operational skip, verified stale-manifest adoption, final
  strict doctor, balance reporting, domain creation, DNS no-op reconciliation,
  bounded domain verification, and public-surface acceptance.
- A complete compiled `continuous` rehearsal ran foundation through the
  accountable pre-commission checkpoint without conversational intervention.
  With commissioning authority absent, it created no commissioning command,
  invitation, Treasury action, or domain mutation.
- Domain tests proved the portable canonical hostname reaches Laravel Cloud
  and DigitalOcean adapters while nameservers remain external and untouched.
- The compiled release ref reached the existing Cloud environment/deployment
  commands, and tampered artifact manifests continued to fail before a phase.
- Combined legacy, compiler, and compiled-controller suites passed 43 tests
  and 209 assertions. Shell syntax, formatting, Composer validation, and diff
  checks passed.
- Every platform, DNS, provider, financial, messaging, and credential
  interaction in this gate was simulated locally; no external mutation ran.

### Protected GitHub Actions workflow evidence — 2026-10-04

- Added `.github/workflows/deploy-x-payout.yml` as both a reusable
  `workflow_call` and an operator-invoked `workflow_dispatch` workflow.
- The compile job runs the same portable profile validator, compiler, and
  manifest verifier used locally. It uploads only compiler-verified,
  secret-free artifacts plus a minimal JSON evidence record.
- The deployment job invokes the existing compatibility controller through
  the strict pre-commission checkpoint with commissioning, DNS mutation, and
  domain cutover authority forced off.
- The initial design included a distinct protected commissioning job. That
  design was subsequently superseded by the corrective simplification below;
  this paragraph is retained only as historical evidence.
- No private secrets file, controller worksheet, raw command transcript, or
  provider response is uploaded.
- Focused workflow-contract verification passed 4 tests and 32 assertions.
  No GitHub, Laravel Cloud, DNS, DigitalOcean, NetBank, commissioning,
  financial, invitation, messaging, or credential mutation occurred.

### GitHub compile-only acceptance evidence — 2026-10-04

- Pushed Gate 11 commit `6c1dd21ef4c5a014359f1b22d577e22a40a059c7`
  to `3neti/x-Payout` `main`.
- Created `x-payout-production-deployment` and
  `x-payout-production-commissioning`; both accept deployments only from
  `main`.
- Commissioning requires reviewer `3neti` and prevents self-review. Because
  the repository currently has no second collaborator, commissioning is
  intentionally blocked until an independent eligible reviewer is added.
- Stored only a clearly synthetic compile-validation secret bundle in the
  deployment environment. No Laravel Cloud token, platform controller
  worksheet, or production provider credential was added.
- GitHub Actions run `37205922353` completed successfully at the exact Gate 11
  commit. The compile job passed; deployment and commissioning jobs were both
  skipped.
- The sole artifact contained `compiled-instance.json`, `runtime.env`,
  `required-secrets.json`, `commissioning.yaml`, `manifest.sha256`, and the
  minimal workflow evidence record. Manifest verification and an explicit
  synthetic-secret scan passed. Profile fingerprint:
  `ecf47056c904d8ff07a92a8a750269e1943394a77bff0bf02c072b694c50fe62`.
- No Laravel Cloud, DNS, DigitalOcean, NetBank, commissioning, financial,
  invitation, messaging, or real credential mutation occurred.

### Corrective deployment-boundary simplification — 2026-10-04

- Laravel Cloud push-to-deploy remains the normal continuous deployment
  mechanism and is not gated by GitHub reviewers or Maker/Checker identities.
- The reusable GitHub workflow is optional and contains only profile
  compilation plus strict pre-commission verification against the environment
  already deployed by Laravel Cloud. It performs no foundation,
  configuration, deployment, DNS, domain, commissioning, or financial
  mutation.
- Profile compilation can emit the required managed-secret inventory without
  reading secret values. A private `secrets.env` is needed only for initial
  secret import, credential recovery, or a separately authorized one-time
  commissioning validation.
- Commissioning remains a distinct operator command. The previously created
  commissioning GitHub Environment is dormant and does not impede deployment
  or pre-commission verification.
- Focused compiler, workflow, controller-parity, and deployment-kit coverage
  passed 48 tests and 249 assertions. Composer validation, shell syntax,
  formatting, and diff checks passed.
- Published corrective commits `848d48c` and `c649457` to `main`.
- Removed the synthetic `PAYOUT_SECRETS_ENV`. The deployment environment now
  holds only the private instance profile, the value-free platform worksheet,
  and the Laravel Cloud CLI token.
- The first attempted live rehearsal proved that Laravel Cloud's environment
  selector requires a live branch rather than the immutable beta.68 tag. The
  private Cloud profile now tracks `main`; the workflow commit SHA remains the
  immutable evidence reference.
- A second attempt exposed an unreadable HTML response from Laravel Cloud's
  variables endpoint. That proved configuration replay did not belong in the
  optional workflow and caused the final narrowing to compile plus
  pre-commission verification only.
- GitHub Actions run `37210059107` completed successfully at commit
  `c6494577bfc91a1861bfd3f0fa3f2c404a0a4e37`. Strict pre-commission doctor
  passed `27/27`; profile fingerprint
  `0fae0e409abdd9df7021848234ab99d12ba4319bc19bb453699e71e0e713327b`.
  Sanitized pre-commission evidence was uploaded with seven-day retention.
- The successful workflow performed no foundation, variable configuration,
  release deployment, DNS, domain, commissioning, Treasury, invitation,
  payment, or messaging mutation.

### Continuous push-to-deploy acceptance — 2026-10-04

- Laravel Cloud push-to-deploy automatically deployed `main` commit
  `8dd89b0a259303fb4dc87cf1de7fea351a408728` as deployment
  `depl-a2e6e04e-44ec-41e6-837d-0a6d7ebbc3b2`; the production environment is
  running and its current deployment points to that commit.
- GitHub verification run `37210690426` compiled profile fingerprint
  `0fae0e409abdd9df7021848234ab99d12ba4319bc19bb453699e71e0e713327b`
  and passed the live strict pre-commission checkpoint without deployment or
  commissioning mutation.
- The generated Laravel Cloud hostname returned HTTPS 200. The stale custom
  domain record `domain-a2e5a1a4-f6a5-4892-aef8-3dcaa3abd5fd` was explicitly
  authorized for deletion after Cloud reported it detached and failed.
- Recreated `payout.disburse.cash` as
  `domain-a2e6e72a-e912-492d-9d76-bac6b4a139f2`. Existing DigitalOcean A and
  ACME records already matched Cloud, so no DNS or nameserver write was
  required. Hostname and TLS are verified; live homepage, public issuance,
  claim, and both MCP discovery documents return HTTPS 200.
- Cloud still reports `originStatus=pending` and an empty `environmentId`
  despite successful live routing. This remains a control-plane metadata lag,
  not a live availability failure.
- Partner and public-issuance MCP discovery are available, but both MCP
  transports remain disabled by production configuration. A browser GET to
  `/mcp/x-change/public` therefore returns 404 by design; transport enablement
  is a separate product/configuration gate.

### Public MCP activation acceptance — 2026-10-04

- The portable profile now couples `features.public_on_demand_issuance` to the
  browser and MCP runtime switches and requires an HTTPS public-issuance API
  base URL. The deployment controller owns all five non-secret public MCP
  runtime settings, preventing a later cleanroom deployment from silently
  disabling the transport.
- Focused deployment coverage passed `45` tests and `221` assertions. The
  private production profile compiled and verified with fingerprint
  `b6b6b40c1919b24f270428735ac22e68ed98e1ba855afe8fcfd3ba1b803c9809`.
- Laravel Cloud deployment `depl-a2e6f352-633b-4355-934d-b2eac6cb3c05`
  succeeded at exact commit `287ce84ba0a13e5b730983bd433ae52d90a53df7` after the runtime settings were
  applied.
- A standards-based MCP JSON-RPC handshake negotiated protocol `2025-06-18`
  with server `X-Change Public Issuance MCP` version `0.2.0`.
- `tools/list` returned exactly three tools: discovery, authoritative estimate,
  and browser handoff. Every tool declares read-only, non-destructive,
  idempotent, closed-world annotations.
- A live read-only estimate for `PHP 25.00` returned `PHP 15.00` in service
  fees and `PHP 40.00` total required. The handoff returned
  `/x/auto-generate?amount=25.00&currency=PHP`. Both responses explicitly
  reported `creates_order=false`; no funding order, payment, Treasury hold, or
  Pay Code was created.
- The anonymous transport is limited to `30` requests per minute per client IP.
  The institutional Partner MCP and Partner API remain disabled until their
  contract version, Passport signing keys, governed client, scopes, and issuer
  mandate are reconciled and accepted separately.

## Fresh beta.64 cleanroom custom-domain evidence — 2026-10-04

- Application: `app-a2e593f4-0252-40a9-816a-135de5b47d3c`.
- Environment: `env-a2e593f5-ce84-4cbb-a6e0-522ed343126f`.
- Published x-PayOut release: `v1.0.0-beta.64` at `d612bb6c`.
- Installed x-change: `v1.0.98`.
- Final strict doctor after custom `APP_URL`: `37/37`.
- Balance report: complete, read-only, no blockers.
- Domain attachment: `domain-a2e5a1a4-f6a5-4892-aef8-3dcaa3abd5fd`.
- DigitalOcean nameservers and unrelated records were preserved.
- Existing A and ACME records were reusable; one obsolete Cloud ownership TXT
  record from the deleted host was removed, then the attachment was recreated.
- Hostname and TLS became verified. Cloud origin metadata remained pending,
  while valid TLS and live HTTP 200 routing were independently proved.
- Homepage, claim entry, public MCP discovery, and the disabled public-issuance
  surface passed on `https://payout.disburse.cash`.
- The funded Maker and Checker invitations remained the only two Pay Codes;
  neither was claimed and commissioning was not replayed.

## Cleanroom retrospective and DNS automation decision — 2026-10-04

### Gaps exposed

- DigitalOcean DNS reconciliation required an authenticated browser session,
  interrupting an otherwise continuous installation.
- A stale Cloud ownership TXT record survived application deletion and blocked
  the first replacement attachment.
- Laravel Cloud's first failed domain attachment retained a frozen verification
  timestamp and had to be replaced after DNS was corrected.
- Laravel Cloud origin metadata remained pending after hostname, TLS, and live
  HTTPS routing were already healthy.
- The public `APP_URL` required a final idempotent configuration deployment
  after custom-domain acceptance.

### Corrections now in the deployment contract

- database, cache, deployment, hostname, and TLS operations have bounded waits;
- exact DNS requirements are emitted when verification stops;
- a failed domain attachment may be replaced without touching the application,
  nameservers, or financial state;
- `origin=pending` is accepted only when hostname and TLS are verified and a
  real HTTPS origin probe passes;
- homepage, claim entry, MCP discovery, and disabled public issuance form the
  non-financial custom-domain acceptance suite; and
- custom-domain reconciliation is part of the continuous reinstall lifecycle.

### DigitalOcean CLI disposition

The cleanroom script now includes an optional `doctl` DNS adapter. It uses a
dedicated custom-scoped token and named context while enforcing an exact
`disburse.cash` zone and managed-record allowlist because DigitalOcean's domain
scopes are broader than one DNS zone.

The adapter may reconcile only:

- `payout.disburse.cash` A records requested by Laravel Cloud;
- `_acme-challenge.payout.disburse.cash` CNAME records;
- the corresponding `www.payout.disburse.cash` companion records; and
- obsolete `_cf-custom-hostname.payout.disburse.cash` ownership tokens that are
  demonstrably absent from Laravel Cloud's current desired record set.

It never mutates NS, MX, mail-verification, `netbank.disburse.cash`, Spaces, or
any unrelated record. Manual DNS remains the fail-safe default.

### DigitalOcean CLI initialization — 2026-10-04

- Installed DigitalOcean `doctl` `1.167.0` on the controlled operator Mac.
- Created the 90-day custom-scoped token `x-payout-production-dns` with only
  Domain create, read, update, and delete permissions.
- Initialized the local named context `x-payout-production-dns`; the token is
  absent from Git, Laravel Cloud, application variables, and deployment files.
- Verified the local credential file is owner-readable and owner-writable only
  (`0600`).
- A read-only DNS query returned the expected allowlisted records: the
  `payout` A record, `_acme-challenge.payout` CNAME, and `www.payout` A record.
- No DNS record was created, changed, or deleted during initialization.
- The token expires on January 2, 2027 and must be rotated or revoked earlier
  if the operator Mac or credential boundary is no longer trusted.

### DNS adapter dry-run evidence — 2026-10-04

- `domain-reconcile` is non-mutating unless `--apply` is supplied.
- Live dry-run normalization produced two authoritative NOOPs: the `payout` A
  record and `_acme-challenge.payout` CNAME.
- The existing `www.payout` record remained untouched because it was not in
  Laravel Cloud's current desired set.
- Before and after allowlisted snapshots were written with mode `0600`.
- The adapter rejects empty Cloud record sets, records outside the allowlist,
  ambiguous existing records, and any write lacking all three confirmations:
  production, domain cutover, and DNS write.
- Isolated tests prove create, update, stale ownership-token deletion,
  post-write verification, and recovery snapshots without touching live DNS.

The live domain required no mutation. Automated writes remain disabled in the
committed example and require `DEPLOY_DNS_AUTOMATION_ENABLED=true` plus the
independent `DEPLOY_CONFIRM_DNS_WRITE=YES` ceremony.

## Secret custody decision

### 2026-10-03 — Laravel Cloud is the runtime secret authority

Keeper Business could not be purchased for the Philippines tenant and
HashiCorp Vault Dedicated is disproportionate to the current shared beta.
Neither product is a deployment dependency.

The accepted custody model is:

- Laravel Cloud managed secrets for active runtime credentials;
- local `.env` files only for development and sandbox environments;
- provider portals for recovery and credential rotation;
- Laravel Cloud-managed database credentials for attached databases;
- DigitalOcean for private Space and DNS resources; and
- a committed inventory containing secret names, purposes, owners, provider
  sources, rotation procedures, and Cloud secret IDs, but never values.

Laravel Cloud secret values are not exported or read back. If a provider
credential is lost, rotate it at the issuing provider and replace the managed
secret. `APP_KEY` and private signing keys require controlled recovery custody
because blind rotation can invalidate encrypted data or signatures.

## First sanitized continuous rehearsal — 2026-10-04

- Published commit: `ff0e78d`.
- Published release: `v1.0.0-beta.61`.
- Target application: `app-a2e3963b-0a2a-4c81-a49c-7e3b01273bd5`.
- Target environment: `env-a2e3963c-f6d5-4ffd-a4a6-a414deb445c8`.
- Environment status before rehearsal: `running`.
- Managed-secret attachment inventory: empty.
- Attachment checkpoint result: exit code `79`.
- An independent read-only remote strict pre-commission doctor subsequently
  passed `27/27`, proving the current direct runtime variables remain healthy.
- Deployment: not run.
- Commissioning: not run.
- Domain, financial records, provider activity, claims, SMS, and storage: not
  mutated.

The environment has masked runtime variables, but those variables are not
Laravel Cloud managed-secret attachments. The new adapter correctly refused to
treat masked variables as recoverable secret custody and did not attempt to
read them.

The approved re-entry inventory found candidate values for only part of the
required set. Eight values have no authoritative local source. `APP_KEY` is
Laravel Cloud-managed and is deliberately excluded from re-entry. No partial
secret set was created or attached because an incomplete override could damage
an otherwise healthy environment.

## Managed-secret bootstrap rehearsal — 2026-10-04

- The working testing environment became the first authority for shared
  integration credentials.
- `APP_KEY`, database credentials, cache credentials, and session state were
  not copied.
- A new least-privilege DigitalOcean Spaces key was limited to the retained
  production evidence bucket.
- Laravel Cloud's 30-attached-secret ceiling was reached and diagnosed.
- The deployment contract was corrected so only credentials and private keys
  require managed-secret custody; public and non-sensitive provider topology
  is now ordinary runtime configuration.
- Deployment `depl-a2e588f1-2f6b-46a7-9d26-c87649e4fe38` succeeded.
- The managed-secret attachment gate passed.
- Strict pre-commission doctor passed `27/27` under command
  `comm-a2e5898a-6e85-4804-8502-bc2763f723ea`.
- A real private-Space write/read/delete probe passed under command
  `comm-a2e589bd-2bdf-4f23-9224-bb8dd125ecd1` and removed its probe object.
- No commissioning or financial workflow was executed.

## Safety posture

- Never put production credential values in Git, the deployment control file,
  logs, reports, prompts, or copied command output.
- Never infer commissioning authority from deployment authority.
- Never replay shared NetBank history or infer exclusive host ownership from a
  provider balance.
- Never migrate Client Funds or other balances without a separately approved
  continuity plan.
- Never delete a Cloud, DigitalOcean, DNS, or provider resource unless the
  exact resource is named in a fresh authorization.
- A new real-money payment, SMS, claim, refund, or payout always requires its
  own acceptance authority.

## Known risks and deferred scope

1. Managed secret values cannot be recovered from Laravel Cloud; provider
   rotation and a controlled recovery copy for non-regenerable keys remain
   operator responsibilities.
2. DigitalOcean Space and DNS are external prerequisites. The adapter verifies
   their identifiers and application behavior but does not create, inspect, or
   modify them without separate authority.
3. Custom-domain origin metadata may remain pending briefly after DNS and TLS
   are operational. Live routing and certificate checks remain authoritative
   acceptance evidence while the Cloud control plane reconciles.
4. Balance migration remains deferred. Cleanroom commissioning recognizes only
   the explicitly approved provider cutover posture.
5. A successful shared-host cleanroom does not replace a bank or EMI's
   licensing, credential ownership, governance, reconciliation, support, and
   incident-response duties.

## Immediate next controlled move

Keep ordinary releases on Laravel Cloud push-to-deploy. The optional GitHub
workflow is now complete for compile and strict pre-commission evidence and
needs no reviewer, Maker/Checker contact, or private provider-value bundle.
The remaining Gate 11 proof is a separately authorized two-input cleanroom
using `instance.yaml`, one-time `secrets.env`, and native platform tooling;
commissioning remains a distinct one-time ceremony.

## Beta.65 continuous rehearsal evidence — 2026-10-04

- Published x-PayOut `v1.0.0-beta.65` at commit `0a77d85`.
- Laravel Cloud deployment `depl-a2e5e5ac-d3e3-4e5f-a633-76b165961eae`
  reached `deployment.succeeded` at the exact commit.
- Strict pre-commission doctor passed `27/27`.
- The first continuous implementation exposed two fail-closed gaps:
  Laravel Cloud's command wrapper reported success while the inner bootstrap
  exited `1`, and `deploy:monitor` remained attached after emitting terminal
  success.
- The repeated bootstrap correctly made no duplicate capitalization, but it
  left the commissioning manifest stale because an already initialized
  Treasury could not be capitalized again without authoritative opening
  reconciliation.
- Read-only balance evidence remained complete: provider inventory equaled
  Treasury positions, the provider snapshot was fresh, and no blockers or
  warnings were present.
- The existing-installation adoption command repaired only the stale
  commissioning manifest. Commissioning returned to `operational`, and final
  strict doctor passed `37/37`.
- DigitalOcean DNS reconciliation was an exact no-op. Laravel Cloud continued
  to report `origin=pending`, but verified TLS and the live origin probe passed.
- Home, Claim, public MCP discovery, and public On-Demand Issuance acceptance
  passed at `https://payout.disburse.cash` without creating a funding order.

The next script revision treats the inner `exitCode` as authoritative, skips
bootstrap when commissioning status is already operational, and bounds the
Cloud monitor with deployment-status polling. These controls are covered by
focused regression tests before the next release.

## Beta.66 exact-release acceptance — 2026-10-04

- Published x-PayOut `v1.0.0-beta.66` at commit `03e159b`.
- Deployment `depl-a2e602aa-ed7c-43c3-8f70-4d003af3e822` reached
  `deployment.succeeded` at that exact commit in 41 seconds.
- The bounded monitor exited at its first authoritative terminal poll instead
  of remaining attached.
- Strict pre-commission doctor passed `27/27`.
- Commissioning status was operational; bootstrap and opening capitalization
  were skipped.
- Final strict doctor passed `37/37`.
- The read-only balance report was complete with no blockers or warnings, and
  provider inventory equaled Treasury positions.
- DigitalOcean reconciliation was an exact A/CNAME no-op. No DNS record was
  created, updated, or deleted.
- Laravel Cloud still reported `origin=pending`; verified TLS and an HTTP 200
  live-origin probe satisfied the documented fallback.
- Home, Claim, public MCP discovery, and public On-Demand Issuance acceptance
  passed without creating a funding order.

The rehearsal also exposed that Cloud's deploy stream places `deployment_id`
in the first event rather than the last. The controller parser now searches
the full event stream. Stale installation manifests now use verified adoption
instead of bootstrap, and an existing domain no longer causes a redundant
second deployment. Those post-tag controller fixes require the next beta for
exact-release reproducibility.

## Beta.67 exact-release evidence — 2026-10-04

- Published x-PayOut `v1.0.0-beta.67` at commit `8b77d201`.
- Deployment `depl-a2e60f70-dc2b-440a-9cb2-c722517a22ca` reached
  `deployment.succeeded` at that exact commit.
- Strict pre-commission doctor passed `27/27`.
- A stale installation manifest was verified and adopted without bootstrap or
  opening capitalization; final strict doctor passed `37/37`.
- The balance report was complete with fresh liquidity, matched Treasury
  control, no blockers, and no warnings.
- DNS reconciliation was a no-op; verified TLS and the live-origin probe
  passed despite delayed Cloud `origin=pending` metadata.
- Home, Claim, public MCP discovery, and public issuance acceptance passed.
- The controller then exited non-zero because a `RETURN` trap referenced the
  local `body_file` variable after its function scope ended. The deployment
  was operational, but the automation rehearsal was correctly not called
  completely green.

## Beta.68 uninterrupted continuous evidence — 2026-10-04

- The response-file cleanup was isolated in a subshell and changed to an
  `EXIT` trap. A focused regression executes the real domain-acceptance phase
  and proves no return trap escapes.
- The focused deployment-controller suite passed 21 tests and 118 assertions;
  shell syntax, formatting, and diff checks passed.
- Published x-PayOut `v1.0.0-beta.68` at commit `7863e8d1` without altering
  beta.67.
- Deployment `depl-a2e61ee5-c65e-43f2-8f48-3903cf23e0f0` reached
  `deployment.succeeded` at the exact commit in 1 minute 21 seconds.
- Strict pre-commission doctor passed `27/27`.
- Commissioning status was already operational; bootstrap and opening
  capitalization were skipped.
- Final strict doctor passed `37/37`.
- The read-only balance report was complete with no blockers or warnings;
  provider inventory equaled Treasury positions and liquidity was fresh.
- DNS reconciliation was an exact no-op. Verified TLS and the live-origin
  probe satisfied the documented Cloud metadata fallback.
- Home, Claim, public MCP discovery, and public issuance safe-state acceptance
  passed without creating a funding order.
- The exact continuous controller completed with exit code `0`, with no
  intervening edits or manual phase substitutions. The repository remained
  clean and the remote tag resolved to the deployed commit.

## Update protocol

After every gate:

1. update **Current position** and **Overall status**;
2. update the gate ledger;
3. record exact evidence and identifiers without secret values;
4. append decisions, blockers, and accepted risks without deleting history;
5. distinguish read-only evidence from financial or external mutations; and
6. state the next bounded move and its authorization requirement.
