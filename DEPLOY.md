# x-PayOut Deployment Runbook

This is the operator entry point for installing, deploying, commissioning, and
recovering x-PayOut. The detailed architecture and historical evidence remain
in [`docs/commissioning`](docs/commissioning), while this file defines the
copy-paste operational contract.

## Deployment model

Production deployment uses one release-owned controller and two authoritative
operator inputs:

```text
bin/x-payout-deploy
    + portable instance YAML
    + owner-only secrets.env
    -> sanitized compiled profile
    -> Laravel Cloud deployment
    -> separately authorized commissioning
```

The controller is part of the immutable x-PayOut release. The instance YAML is
tracked and contains no secret values. The secrets file is never committed and
must remain under owner custody with mode `0600` or stricter.

Generated compiled artifacts, deployment state, and evidence are outputs. They
are not additional desired-state inputs.

## Canonical files

| Purpose               | Canonical location                                                             | Git policy                   |
| --------------------- | ------------------------------------------------------------------------------ | ---------------------------- |
| Deployment controller | `bin/x-payout-deploy`                                                          | Tracked in the release       |
| Profile compiler      | `bin/x-payout-profile`                                                         | Tracked in the release       |
| Production instance   | `ops/deployment/instances/payout.disburse.cash.yaml`                           | Tracked, non-secret          |
| Sanitized example     | `ops/deployment/examples/instance.yaml`                                        | Tracked, non-secret          |
| Credential template   | `ops/deployment/examples/secrets.env.example`                                  | Tracked, names only          |
| Owner recovery input  | `/Users/rli/.config/x-payout/payout.disburse.cash.secrets.env`                 | Never committed, mode `0600` |
| Compiled output       | `ops/deployment/build/{instance-id}` or an explicit private path               | Generated and sanitized      |
| Deployment state      | `ops/deployment/state/{instance-id}.json` or an explicit private path          | Generated                    |
| Evidence              | `ops/deployment/state/{instance-id}.evidence.json` or an explicit private path | Generated and sanitized      |

The historical `ops/deployment/secrets.env` path remains supported as an
owner-only recovery input, but credentials needed for destructive cleanroom
work must be copied outside the repository that may be deleted.

## Safety boundaries

The following authorities are deliberately separate:

1. Offline validation and compilation.
2. Laravel Cloud foundation and exact-release deployment with `--apply`.
3. Read-only pre-commission verification.
4. Commissioning with `--commission`.
5. Domain activation with `--activate-domain`.
6. Secret rotation with `--rotate-secrets`.
7. Queue, Horizon, financial canary, payment, claim, and redemption gates.

Do not combine later authorities merely because an earlier gate passed. A
deployment does not authorize commissioning, domain activation, secret
rotation, queue migration, or financial activity.

Never:

- commit credential values;
- pass credential values directly on a command line;
- run `source secrets.env`;
- store the only recovery copy inside a directory scheduled for deletion;
- use a floating branch or Composer constraint for cleanroom acceptance;
- delete a known-good installation before its replacement passes acceptance;
- edit generated state or evidence to force a retry forward;
- create replacement Cloud resources merely because rediscovery is ambiguous.

## Prerequisites

The controller machine requires:

- PHP 8.4 and Composer;
- Git access to the x-PayOut source repository;
- the Laravel Cloud CLI authenticated for the intended account;
- `doctl` authenticated for the intended DNS zone when domain reconciliation
  is in scope;
- AWS-compatible CLI access when the declared evidence storage is verified;
- outbound HTTPS access to declared provider and integration endpoints;
- a pushed immutable x-PayOut tag and matching release branch;
- an owner-controlled secrets file containing exactly the names required by
  the selected instance profile.

Confirm the local tools without printing credentials:

```bash
php --version
composer --version
git --version
cloud --version
doctl version
aws --version
```

## Publish the exact release first

Cleanroom acceptance must use an immutable tag, never an unpushed working tree.
Replace `<release>` and `<commit>` with the approved values.

```bash
cd /Users/rli/PhpstormProjects/x-PayOut
git status --short --branch
git push origin main
git branch --no-track release/<release> <commit>
git push origin refs/heads/release/<release>:refs/heads/release/<release>
git tag -a <release> <commit> -m "Release <release>"
git push origin <release>
git ls-remote --tags origin "refs/tags/<release>^{}"
git ls-remote --heads origin "refs/heads/release/<release>"
```

The tag, release branch, instance YAML, and deployed commit must resolve to the
same approved source. Follow the repository's release-branch convention when
creating the release branch; do not improvise a different ref in the instance
profile.

## Create a clean controller checkout

The controller checkout is not the deployed application directory. It is a
short-lived, exact-release control surface containing the release-owned
deployment tools.

```bash
cd /Users/rli/PhpstormProjects
git clone --branch <release> --depth 1 \
  git@github.com:3neti/x-payout.git \
  x-PayOut-deployer
cd /Users/rli/PhpstormProjects/x-PayOut-deployer
composer install --no-interaction --prefer-dist --optimize-autoloader
git status --short
git describe --tags --exact-match
```

The checkout must be clean and must report the exact approved tag.

## Authoritative input 1: instance YAML

The production file is
`ops/deployment/instances/payout.disburse.cash.yaml`. The following complete
sanitized example shows the required shape. Replace every example or
`REPLACE_WITH_...` value before using it as an instance profile.

```yaml
schema: x-payout.instance.v1

identity:
    id: example-payments-host
    legal_name: Example Payments Institution Inc.
    display_name: Example PayOut

release:
    repository: example/x-payout
    ref: v1.0.0
    cloud_source_branch: release/v1.0.0

public:
    canonical_url: https://payout.example.com
    locale: en
    currencies: [PHP]

features:
    public_on_demand_issuance: false
    partner_api: false
    sms_feedback: true

runtime:
    APP_NAME: Example PayOut
    APP_ENV: production
    APP_DEBUG: false
    APP_URL: https://payout.example.com
    APP_LOCALE: en
    APP_FALLBACK_LOCALE: en
    LOG_CHANNEL: stack
    LOG_LEVEL: info
    SESSION_DRIVER: redis
    SESSION_ENCRYPT: true
    SESSION_SECURE_COOKIE: true
    QUEUE_CONNECTION: redis
    CACHE_STORE: redis
    XCHANGE_RUNTIME_TIER: production
    XCHANGE_INSTANCE_ID: example-payments-host
    XCHANGE_PUBLIC_AUTO_GENERATE_ENABLED: false
    XMCP_PUBLIC_ISSUANCE_ENABLED: false
    XMCP_PUBLIC_ISSUANCE_DISCOVERY_ENABLED: true
    XMCP_PUBLIC_ISSUANCE_ENDPOINT: /mcp/x-change/public
    XMCP_PUBLIC_ISSUANCE_API_BASE_URL: https://payout.example.com/api/x/v1/public-issuance
    XMCP_PUBLIC_ISSUANCE_RATE_LIMIT_PER_MINUTE: 30
    XCHANGE_PARTNER_API_ENABLED: false
    XCHANGE_PARTNER_API_PUBLIC_DISCOVERY_ENABLED: true
    XCHANGE_PARTNER_API_ACCESS_CONTACT: api@example.com
    XMCP_ENABLED: false
    XMCP_PUBLIC_DISCOVERY_ENABLED: true
    XMCP_ENDPOINT: /mcp/x-change
    XMCP_API_BASE_URL: https://payout.example.com/api/partner/v1
    XMCP_ACCESS_CONTACT: api@example.com
    XMCP_EXPECTED_PARTNER_CONTRACT_VERSION: 1.4.0
    XMCP_EXPECTED_PARTNER_CONTRACT_SHA256: REPLACE_WITH_APPROVED_CONTRACT_SHA256
    XMCP_RATE_LIMIT_PER_MINUTE: 30

providers:
    active: primary-payout
    connections:
        - name: primary-payout
          driver: netbank
          currency: PHP
          capabilities:
              - balance
              - disbursement
              - funding
              - qr_ph
          runtime:
              XCHANGE_DEPLOYMENT_PROFILE: netbank
              NETBANK_FUNDING_API_URL: https://api.example-provider.invalid
              NETBANK_FUNDING_CORPORATE_ACCOUNT_NAME: Example PayOut Treasury
              NETBANK_FUNDING_CORPORATE_ACCOUNT_NUMBER: REPLACE_WITH_PROVIDER_ACCOUNT_NUMBER
              NETBANK_TEST_MODE: false
          secrets:
              client_id: NETBANK_CLIENT_ID
              client_secret: NETBANK_CLIENT_SECRET
              funding_client_id: NETBANK_FUNDING_CLIENT_ID
              funding_client_secret: NETBANK_FUNDING_CLIENT_SECRET
              funding_hmac_key: NETBANK_FUNDING_STANDING_HMAC_KEY

storage:
    evidence:
        driver: s3
        runtime:
            FILESYSTEM_DISK: s3
            AWS_DEFAULT_REGION: sgp1
            AWS_ENDPOINT: https://sgp1.digitaloceanspaces.com
            AWS_BUCKET: example-private-evidence
            AWS_USE_PATH_STYLE_ENDPOINT: false
            XCHANGE_CLAIM_EVIDENCE_DISK: s3
            XCHANGE_CLAIM_EVIDENCE_DIRECTORY: x-payout/active/example-payments-host/claim-evidence
            XCHANGE_INSTANCE_KEEPSAKE_DISK: s3
            XCHANGE_INSTANCE_KEEPSAKE_DIRECTORY: x-payout/active/example-payments-host/instance-keepsakes
        secrets:
            access_key_id: AWS_ACCESS_KEY_ID
            secret_access_key: AWS_SECRET_ACCESS_KEY

commissioning:
    opening:
        policy: system-capital
        connection: primary-payout
        allow_production: false
        cutover_at: REPLACE_WITH_APPROVED_ISO_8601_TIMESTAMP
        cutover_transaction_id: REPLACE_WITH_APPROVED_PROVIDER_WATERMARK
    commercial_principal:
        reference: commercial-primary
        legal_name: Example Payments Institution Inc.
        revenue_account_slug: commercial-revenue
    invitations:
        delivery_mode: manual
        maker:
            amount_minor: 10000
            email_secret: X_PAYOUT_MAKER_EMAIL
            mobile_secret: X_PAYOUT_MAKER_MOBILE
        checker:
            amount_minor: 10000
            email_secret: X_PAYOUT_CHECKER_EMAIL
            mobile_secret: X_PAYOUT_CHECKER_MOBILE

secret_refs:
    commissioning_access_token: XCHANGE_COMMISSIONING_ACCESS_TOKEN
    passport_private_key: PASSPORT_PRIVATE_KEY
    passport_public_key: PASSPORT_PUBLIC_KEY
    sms_api_key: ENGAGESPARK_API_KEY
    sms_organization_id: ENGAGESPARK_ORGANIZATION_ID
```

The real production profile may declare additional runtime settings. The
tracked production file—not this example—is desired-state authority.

## Authoritative input 2: credentials

Create the owner-only input outside any directory that may be deleted:

```bash
install -d -m 700 /Users/rli/.config/x-payout
install -m 600 \
  ops/deployment/examples/secrets.env.example \
  /Users/rli/.config/x-payout/payout.disburse.cash.secrets.env
```

Populate every value using its authoritative custodian. A complete template is:

```dotenv
AWS_ACCESS_KEY_ID=<required>
AWS_SECRET_ACCESS_KEY=<required>
ENGAGESPARK_API_KEY=<required>
ENGAGESPARK_ORGANIZATION_ID=<required>
NETBANK_CLIENT_ID=<required>
NETBANK_CLIENT_SECRET=<required>
NETBANK_FUNDING_CLIENT_ID=<required>
NETBANK_FUNDING_CLIENT_SECRET=<required>
NETBANK_FUNDING_STANDING_HMAC_KEY=<required>
XCHANGE_COMMISSIONING_ACCESS_TOKEN=<required>
PASSPORT_PRIVATE_KEY=<required-single-line-recovery-representation>
PASSPORT_PUBLIC_KEY=<required-single-line-recovery-representation>
X_PAYOUT_MAKER_EMAIL=<required>
X_PAYOUT_MAKER_MOBILE=<required>
X_PAYOUT_CHECKER_EMAIL=<required>
X_PAYOUT_CHECKER_MOBILE=<required>
```

The loader accepts exactly one `NAME=value` entry per physical line. It rejects
blank values, duplicate names, unknown names, missing names, and permissions
broader than `0600`. Passport recovery values must therefore use the verified
single-line custody representation; do not paste a raw multiline PEM block and
do not execute this file with a shell.

Verify custody without printing values:

```bash
chmod 600 /Users/rli/.config/x-payout/payout.disburse.cash.secrets.env
stat -f '%Sp %N' /Users/rli/.config/x-payout/payout.disburse.cash.secrets.env
git check-ignore ops/deployment/secrets.env
```

## Gate 0: offline validation and compilation

These commands validate and compile the two inputs without booting Laravel,
connecting to a database or cache, or invoking Laravel Cloud or a provider.

```bash
cd /Users/rli/PhpstormProjects/x-PayOut-deployer

INSTANCE="$PWD/ops/deployment/instances/payout.disburse.cash.yaml"
SECRETS="/Users/rli/.config/x-payout/payout.disburse.cash.secrets.env"
COMPILED="$PWD/ops/deployment/build/01M420J9JMF2FFBN1PE6JADZCA"

bin/x-payout-profile validate --instance="$INSTANCE"
bin/x-payout-profile compile \
  --instance="$INSTANCE" \
  --secrets="$SECRETS" \
  --output="$COMPILED"
bin/x-payout-profile verify --compiled="$COMPILED"
```

Expected results include `Valid x-payout.instance.v1 profile`, `Compiled
sanitized deployment artifacts`, and `Verified compiled deployment artifacts`.
The fingerprint emitted by compile and verify must match.

The compiled directory may contain only sanitized artifacts such as:

```text
compiled-instance.json
runtime.env
required-secrets.json
commissioning.yaml
manifest.sha256
```

No secret value may appear in compiled artifacts, state, evidence, or command
output.

## Gate 1: foundation and exact-release deployment

This is a mutating Laravel Cloud operation. It may create or rediscover the
declared application, environment, database, cache, runtime configuration,
managed-secret attachments, workers, and exact source deployment. It does not
commission or activate the public domain without their separate flags.

```bash
cd /Users/rli/PhpstormProjects/x-PayOut-deployer

STATE="$PWD/ops/deployment/state/01M420J9JMF2FFBN1PE6JADZCA.json"
EVIDENCE="$PWD/ops/deployment/state/01M420J9JMF2FFBN1PE6JADZCA.evidence.json"

bin/x-payout-deploy continuous \
  --instance="$INSTANCE" \
  --secrets="$SECRETS" \
  --compiled="$COMPILED" \
  --state="$STATE" \
  --evidence="$EVIDENCE" \
  --adapter=laravel-cloud \
  --apply
```

The controller persists successful resource identities before later operations
can fail. A retry must rediscover and attach those resources rather than create
replacements. Multiple plausible matches are a hard failure requiring operator
disposition.

## Gate 2: read-only pre-commission verification

Run this only after the exact deployment succeeds. It accepts no mutation
authority flags.

```bash
bin/x-payout-deploy precommission \
  --compiled="$COMPILED" \
  --evidence="$PWD/ops/deployment/state/01M420J9JMF2FFBN1PE6JADZCA.precommission.evidence.json" \
  --adapter=laravel-cloud
```

It must rediscover exactly one matching foundation and deployment, confirm the
immutable release branch and commit, and pass the remote strict pre-commission
doctor.

## Gate 3: commissioning

Commissioning is a separately authorized mutation. It performs the guarded
provider preview, remote Composer/Artisan bootstrap, principal provisioning,
Treasury opening, commercial baselines, and onboarding invitation creation.

```bash
bin/x-payout-deploy continuous \
  --instance="$INSTANCE" \
  --secrets="$SECRETS" \
  --compiled="$COMPILED" \
  --state="$STATE" \
  --evidence="$EVIDENCE" \
  --adapter=laravel-cloud \
  --apply \
  --commission
```

Commissioning must end with an operational manifest and a passing strict
doctor. It does not authorize payment, claim, redemption, queue migration,
Horizon commissioning, or any financial canary.

## Gate 4: domain activation

Domain activation remains independent even when commissioning passes:

```bash
bin/x-payout-deploy continuous \
  --instance="$INSTANCE" \
  --secrets="$SECRETS" \
  --compiled="$COMPILED" \
  --state="$STATE" \
  --evidence="$EVIDENCE" \
  --adapter=laravel-cloud \
  --apply \
  --activate-domain
```

Require the canonical hostname, DNS, TLS, and origin checks to pass before the
domain is accepted.

## Gate 5: controlled secret rotation

Attaching existing managed-secret identities is not rotation. Rotate only the
explicitly authorized names:

```bash
bin/x-payout-deploy continuous \
  --instance="$INSTANCE" \
  --secrets="$SECRETS" \
  --compiled="$COMPILED" \
  --state="$STATE" \
  --evidence="$EVIDENCE" \
  --adapter=laravel-cloud \
  --apply \
  --rotate-secrets=PASSPORT_PRIVATE_KEY,PASSPORT_PUBLIC_KEY
```

Use bare `--rotate-secrets` only when rotation of every required secret is
explicitly authorized. Rotation can invalidate existing credentials or tokens
and must never be inferred from ordinary deployment authority.

## Acceptance and mutation-free rerun

After the authorized gates:

1. Confirm the commissioning status is `operational`.
2. Run the strict x-change doctor.
3. Verify the expected release branch and commit in Laravel Cloud.
4. Verify the canonical HTTPS surface when domain activation was authorized.
5. Confirm the Maker and Checker invitation records exist exactly once.
6. Confirm the configured database worker still has its complete queue list.
7. Confirm failed queues are empty or explicitly dispositioned.
8. Repeat the exact successful controller command without adding authority.
9. Require the immediate rerun to create no replacement application,
   environment, database, cache, worker, deployment, domain, invitation, or
   financial mutation.
10. Preserve sanitized state and evidence with mode `0600`.

The immediate rerun is part of cleanroom acceptance, not optional cleanup.

## Local Composer cleanroom

Local installation is a separate workflow from Laravel Cloud orchestration.
Use an exact published x-PayOut version:

```bash
cd /Users/rli/PhpstormProjects
composer create-project 3neti/x-payout x-PayOut-cleanroom \
  '<exact-published-version>' \
  --no-interaction
cd /Users/rli/PhpstormProjects/x-PayOut-cleanroom
```

Prepare `.env` with the required local NetBank values, keep the partner API and
queue/runtime posture appropriate for local use, then run:

```bash
composer x-payout:bootstrap -- \
  --manifest=commissioning/default.yaml \
  --no-interaction
php artisan x-change:commissioning:status --json --no-interaction
php artisan x-change:doctor --strict --no-interaction
php artisan test --compact
npm run build
```

The Composer bootstrap installs and commissions one host. It does not replace
`bin/x-payout-deploy`, which owns the broader Laravel Cloud lifecycle.

## Safe local replacement

Do not delete the known-good local checkout first. Instead:

1. Push all approved commits and publish the exact release.
2. Copy credential custody outside the old checkout and verify mode `0600`.
3. Install into `/Users/rli/PhpstormProjects/x-PayOut-cleanroom`.
4. Complete local acceptance and the mutation-free rerun.
5. Rename the old checkout to a dated quarantine directory.
6. Rename the accepted cleanroom to `/Users/rli/PhpstormProjects/x-PayOut`.
7. Delete quarantine only under a later explicit cleanup decision.

The Cloud cleanroom does not require deleting the local controller checkout.

## Recovery rules

- Resume from generated state after inspecting the recorded failed checkpoint.
- Rediscover resources by stable deployment identity.
- Accept both previously emitted and corrected normalized resource names when
  the controller's compatibility contract permits them.
- Fail closed when discovery finds multiple plausible matches.
- Never clear or rewrite evidence simply to obtain a green rerun.
- Never rotate credentials merely because the controller is being retried.
- Never revive an expired order, claim mismatched payment evidence, or issue a
  Pay Code as part of deployment recovery.

## Deeper references

- [Cleanroom commissioning guide](docs/commissioning/X_PAYOUT_CLEANROOM_COMMISSIONING.md)
- [Public Cloud deployment plan](docs/commissioning/X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_PLAN.md)
- [Public Cloud deployment compass](docs/commissioning/X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_COMPASS.md)
- [Production secret custody](docs/commissioning/X_PAYOUT_PRODUCTION_SECRET_CUSTODY.md)
- [Compatibility retirement audit](docs/commissioning/X_PAYOUT_COMPATIBILITY_RETIREMENT_AUDIT_2026_10_06.md)
