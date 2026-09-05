# x-PayOut Cleanroom Commissioning Guide

This guide describes how to create a fresh x-PayOut instance from the published Composer project, prepare it for NetBank-backed operation, and mint the initial onboarding Pay Codes for the Maker and Checker users.

x-PayOut is intentionally thin. The commissioning behavior, doctor checks, invitation Pay Code minting, and X-Change runtime assets come from `3neti/x-change`.

## What this creates

A successful cleanroom commissioning run produces:

- a Laravel 13 x-PayOut application;
- a configured `.env`;
- an installed X-Change runtime;
- a non-interactive system principal;
- NetBank-backed Treasury readiness;
- one Maker onboarding Pay Code;
- one Checker onboarding Pay Code.

The onboarding Pay Codes are physically shareable invitation codes. The Maker and Checker claim them through the normal public claim flow and become onboarded into the x-PayOut workspace.

## Prerequisites

Before running the bootstrap, prepare:

- PHP 8.4;
- Composer;
- a local database supported by the app configuration;
- the `3neti/x-payout` package published on Packagist;
- valid NetBank credentials for the target environment.

The web app should not be considered usable without NetBank credentials. The strict commissioning gate requires live provider readiness before the instance is treated as commissioned.

## One-command local install

Use the current published beta line:

```bash
composer create-project 3neti/x-payout my-payout-app "^1.0@beta" --stability=beta --prefer-stable --no-interaction \
  && cd my-payout-app \
  && composer x-payout:bootstrap -- --manifest=commissioning/default.yaml --no-interaction
```

For local verification without building frontend assets during the first pass, add `--skip-build`:

```bash
composer create-project 3neti/x-payout my-payout-app "^1.0@beta" --stability=beta --prefer-stable --no-interaction \
  && cd my-payout-app \
  && composer x-payout:bootstrap -- --manifest=commissioning/default.yaml --skip-build --no-interaction
```

If you are testing a specific package version, replace `^1.0@beta` with the version under test.

After installation, check the actual package versions Composer selected:

```bash
composer show 3neti/x-payout 3neti/x-change 3neti/form-flow
```

## Manifest

The default local manifest lives at:

```text
commissioning/default.yaml
```

It extends the canonical X-Change commissioning manifest:

```yaml
extends: x-change://commissioning/manifests/x-payout.default.yaml
application:
  key: x-payout
  name: x-PayOut
system_principal:
  name: x-PayOut System
```

The package-level manifest is the source of the required commissioning shape. The local file is intentionally small so individual x-PayOut instances can remain simple.

## Required NetBank credentials

The bootstrap requires the base NetBank credentials to be present in `.env`.

At minimum, the environment should provide the NetBank API endpoints and credentials used by the X-Change NetBank profile, including:

```text
NETBANK_DISBURSEMENT_ENDPOINT
NETBANK_TOKEN_ENDPOINT
NETBANK_QR_ENDPOINT
NETBANK_STATUS_ENDPOINT
NETBANK_BALANCE_ENDPOINT
NETBANK_CLIENT_ID
NETBANK_CLIENT_SECRET
NETBANK_CLIENT_ALIAS
NETBANK_SOURCE_ACCOUNT_NUMBER
NETBANK_SENDER_CUSTOMER_ID
```

Funding-specific aliases are derived during commissioning when the manifest declares them with `same_as`. Do not manually duplicate secrets unless the deployment intentionally uses a different funding credential set.

Derived aliases include:

```text
NETBANK_FUNDING_CLIENT_ID
NETBANK_FUNDING_CLIENT_SECRET
NETBANK_FUNDING_CORPORATE_ACCOUNT_NUMBER
NETBANK_FUNDING_BALANCE_ENDPOINT
NETBANK_FUNDING_VCA_ALIAS
```

The commissioning command must persist these values before child Artisan commands run, so strict doctor checks see the same active configuration that was written to `.env`.

## Bootstrap gates

The bootstrap performs the following controlled gates:

1. prepare the local environment from the manifest;
2. clear configuration;
3. run the strict pre-install doctor;
4. run migrations;
5. install X-Change with the NetBank profile;
6. provision the system principal;
7. mint the Maker and Checker onboarding Pay Codes;
8. run the strict final doctor;
9. print the environment summary and X-Change routes.

The install gate performs a live Treasury provider preflight. If DNS or outbound network access is blocked, the bootstrap fails before the instance is treated as commissioned.

## Expected output

A successful commissioning run prints an invitation table similar to:

```text
+---------+-----------+----------------------------------------+---------+
| Role    | Pay Code  | Claim URL                              | Status  |
+---------+-----------+----------------------------------------+---------+
| maker   | MAKE-D7Z5 | http://x-payout.test/x/claim/MAKE-D7Z5 | created |
| checker | CHKR-HPSV | http://x-payout.test/x/claim/CHKR-HPSV | created |
+---------+-----------+----------------------------------------+---------+
```

The exact Pay Codes change on each cleanroom run.

## Verify after commissioning

Run:

```bash
composer x-payout:doctor
php artisan x-change:doctor --strict
php artisan x-payout:commission --json
```

The strict doctor should report no failed checks. The commission command should return the current Maker and Checker invitation Pay Codes.

## Claim the onboarding invitations

Open the generated URLs:

```text
http://x-payout.test/x/claim/{MAKE-CODE}
http://x-payout.test/x/claim/{CHKR-CODE}
```

Each invitation should use the public onboarding claim experience, not the authenticated Cockpit shell. The user should see invitation-specific copy such as `Accept Invitation`, then complete the onboarding form.

After a successful claim, the user should be taken to the x-PayOut workspace.

## Troubleshooting

### The bootstrap says NetBank credentials are missing

Add the base NetBank credentials to `.env`, then rerun:

```bash
composer x-payout:bootstrap -- --manifest=commissioning/default.yaml --no-interaction
```

The strict gate is expected to fail when credentials are absent.

### The live Treasury preflight fails with DNS or connection errors

Confirm the machine running commissioning has outbound network access to the NetBank endpoints.

In local sandboxed environments, the same command may need explicit network permission. Without that, the provider preflight can fail even when the credentials are present.

### Funding aliases are missing after bootstrap

Confirm the installed `3neti/x-change` version includes manifest `same_as` support and prepared environment propagation. The `^1.0@beta` line should select a compatible release that contains those bootstrap fixes.

### The app key is duplicated or quoted incorrectly

The bootstrap should let the X-Change environment writer create a stable `APP_KEY`. It should not run a second `key:generate` step that appends or duplicates the key.

### The invitation claim page appears inside the Cockpit shell

That is a public onboarding polish defect. The intended behavior is a public invitation flow first, then workspace navigation after successful onboarding.

## Laravel Cloud deployment notes

Cloud deployment should follow the same commissioning principle:

1. create the Laravel Cloud app;
2. set the required NetBank environment variables in the Cloud environment;
3. deploy the published x-PayOut project;
4. run the same strict X-Change doctor gates;
5. mint or confirm Maker and Checker onboarding Pay Codes;
6. claim both invitations;
7. verify the Cockpit loads for onboarded users.

Do not treat a cloud deployment as ready until NetBank readiness and the final strict doctor pass.

## Last verified cleanroom baseline

This guide is written for the `^1.0@beta` x-PayOut line. The latest verified local cleanroom path used:

- `3neti/x-payout v1.0.0-beta.21`;
- `3neti/x-change v1.0.0-beta.329`;
- `3neti/form-flow v1.9.25`;
- manifest: `commissioning/default.yaml`;
- NetBank profile: `netbank`;
- strict doctor: 30 checks, 0 failed checks.

The baseline records what was last proven. It is not meant to freeze new installations forever. Use `composer show 3neti/x-payout 3neti/x-change 3neti/form-flow` after installation to see what Composer actually installed.
