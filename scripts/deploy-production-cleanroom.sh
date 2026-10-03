#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PHASE="${1:-plan}"
shift || true

CONTROL_FILE="${PAYOUT_DEPLOYMENT_CONTROL_FILE:-${ROOT_DIR}/deployment.production.local}"
APPLY=false
RENDER_ONLY=false

for argument in "$@"; do
    case "${argument}" in
        --apply)
            APPLY=true
            ;;
        --render-only)
            RENDER_ONLY=true
            ;;
        --control=*)
            CONTROL_FILE="${argument#--control=}"
            ;;
        --env=*)
            CONTROL_FILE="${argument#--env=}"
            ;;
        *)
            echo "Unknown option: ${argument}" >&2
            exit 64
            ;;
    esac
done

if [[ ! -f "${CONTROL_FILE}" ]]; then
    echo "Missing ${CONTROL_FILE}. Copy deployment.production.example to deployment.production.local first." >&2
    exit 66
fi

set -a
# shellcheck disable=SC1090
source "${CONTROL_FILE}"
set +a

CLOUD_BIN="${CLOUD_BIN:-cloud}"

runtime_variables=(
    APP_NAME APP_ENV APP_DEBUG APP_URL APP_LOCALE APP_FALLBACK_LOCALE
    LOG_CHANNEL LOG_LEVEL SESSION_DRIVER SESSION_ENCRYPT SESSION_SECURE_COOKIE
    QUEUE_CONNECTION CACHE_STORE BROADCAST_CONNECTION FILESYSTEM_DISK
    AWS_DEFAULT_REGION AWS_ENDPOINT AWS_BUCKET AWS_USE_PATH_STYLE_ENDPOINT
    XCHANGE_DEPLOYMENT_PROFILE XCHANGE_RUNTIME_TIER XCHANGE_INSTANCE_ID
    XCHANGE_CLAIM_EVIDENCE_DISK XCHANGE_CLAIM_EVIDENCE_DIRECTORY
    XCHANGE_INSTANCE_KEEPSAKE_DISK XCHANGE_INSTANCE_KEEPSAKE_DIRECTORY
    XCHANGE_INSTANCE_KEEPSAKE_DOWNLOAD_TTL_MINUTES
    XCHANGE_SYSTEM_USER_COLUMN XCHANGE_SYSTEM_USER_ID
    XCHANGE_COMMERCIAL_BILLING_MODE XCHANGE_COMMERCIAL_PRINCIPAL_REFERENCE
    XCHANGE_COMMERCIAL_PRINCIPAL_LEGAL_NAME
    XCHANGE_COMMERCIAL_PRINCIPAL_AUTHORIZATION_REFERENCE
    XCHANGE_COMMERCIAL_REVENUE_ACCOUNT_SLUG XCHANGE_COMMERCIAL_LEGAL_ENFORCEMENT
    XCHANGE_TREASURY_LEGAL_ENTITY_REFERENCE XCHANGE_TREASURY_LEGAL_PROFILE_VERSION
    XCHANGE_ON_DEMAND_ISSUANCE_ENABLED XCHANGE_ON_DEMAND_FUNDING_BASIS
    XCHANGE_ON_DEMAND_FIXED_QR_PH_ENABLED XCHANGE_ON_DEMAND_NETBANK_QR_MODE
    XCHANGE_ON_DEMAND_AUTOMATIC_VERIFICATION_ENABLED
    XCHANGE_ON_DEMAND_EXPIRY_SCHEDULED_ENABLED XCHANGE_PUBLIC_AUTO_GENERATE_ENABLED
    XCHANGE_PUBLIC_AUTO_GENERATE_MINIMUM_PRINCIPAL_MINOR
    XCHANGE_PUBLIC_AUTO_GENERATE_MAXIMUM_PRINCIPAL_MINOR
    XCHANGE_PUBLIC_AUTO_GENERATE_CURRENCIES XCHANGE_MOBILE_VERIFICATION_ENABLED
    XCHANGE_ONBOARDING_REQUIRE_OTP XCHANGE_ONBOARDING_REQUIRE_PIN_SETUP
    XCHANGE_IDENTITY_OTP_DRIVER XCHANGE_WITHDRAWAL_OTP_DRIVER
    XCHANGE_REDEMPTION_FEEDBACK_ENABLED XCHANGE_REDEMPTION_FEEDBACK_QUEUE
    XCHANGE_CAMPAIGNS_EMAIL_DELIVERY_ENABLED XCHANGE_CAMPAIGNS_SMS_DELIVERY_ENABLED
    X_FEEDBACK_SMS_DRIVER X_FEEDBACK_SMS_SENDER XCHANGE_FUNDING_BROADCAST_ENABLED
    XCHANGE_FUNDING_LIQUIDITY_SCHEDULED_REFRESH_ENABLED
    XCHANGE_COMMERCIAL_LIVE_PROVIDER_CALLS_ENABLED XCHANGE_COMMERCIAL_OPERATIONS_QUEUE
    XCHANGE_COMMERCIAL_SCHEDULED_RECONCILIATION_ENABLED XCHANGE_PARTNER_API_ENABLED
    XCHANGE_PARTNER_API_PUBLIC_DISCOVERY_ENABLED
    XCHANGE_TREASURY_OPENING_CAPITALIZATION_ALLOW_PRODUCTION
    XCHANGE_TREASURY_OPENING_CAPITALIZATION_ALLOWED_CONNECTIONS
    NETBANK_FUNDING_API_URL NETBANK_FUNDING_QR_ENDPOINT NETBANK_FUNDING_TOKEN_URL
    NETBANK_FUNDING_CORPORATE_ACCOUNT_NAME NETBANK_FUNDING_QR_MERCHANT_CITY
    NETBANK_FUNDING_QR_MERCHANT_NAME NETBANK_BALANCE_ENDPOINT NETBANK_CLIENT_ALIAS
    NETBANK_DISBURSEMENT_ENDPOINT NETBANK_FUNDING_BALANCE_ENDPOINT
    NETBANK_FUNDING_CORPORATE_ACCOUNT_NUMBER NETBANK_FUNDING_STANDING_HMAC_KEY_ID
    NETBANK_FUNDING_VCA_ALIAS NETBANK_QR_ENDPOINT NETBANK_SENDER_CUSTOMER_ID
    NETBANK_SOURCE_ACCOUNT_NUMBER NETBANK_STATUS_ENDPOINT NETBANK_TOKEN_ENDPOINT
    XCHANGE_INSTANCE_KEEPSAKE_PUBLIC_KEY NETBANK_TEST_MODE USE_OMNIPAY
    TXTCMDR_API_URL HYPERVERGE_BASE_URL HYPERVERGE_URL_WORKFLOW KYC_USE_FAKE
    LOCATION_HANDLER_MAP_PROVIDER
)

secret_runtime_keys=(
    APP_KEY AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY
    ENGAGESPARK_API_KEY ENGAGESPARK_ORGANIZATION_ID TXTCMDR_API_TOKEN
    HYPERVERGE_APP_ID HYPERVERGE_APP_KEY MAPBOX_TOKEN OPENCAGE_API_KEY
    NETBANK_CLIENT_ID NETBANK_CLIENT_SECRET NETBANK_FUNDING_CLIENT_ID
    NETBANK_FUNDING_CLIENT_SECRET NETBANK_FUNDING_STANDING_HMAC_KEY
    XCHANGE_COMMISSIONING_ACCESS_TOKEN
    XCHANGE_REDEMPTION_FEEDBACK_WEBHOOK_SECRET
)

assert_control_file_is_secret_free() {
    local key

    for key in "${secret_runtime_keys[@]}"; do
        if grep -Eq "^[[:space:]]*${key}[[:space:]]*=[[:space:]]*[^[:space:]#]+" "${CONTROL_FILE}"; then
            echo "${CONTROL_FILE} contains a value for production secret ${key}." >&2
            echo "Store the value in Laravel Cloud managed secrets; keep only its name and secret ID here." >&2
            echo "There is no local production .env fallback." >&2
            exit 78
        fi
    done
}

assert_control_file_is_secret_free

usage() {
    cat <<'EOF'
x-PayOut production cleanroom deployment cheat sheet

Usage:
  scripts/deploy-production-cleanroom.sh plan [--control=FILE] [--render-only]
  scripts/deploy-production-cleanroom.sh foundation --apply [--control=FILE]
  scripts/deploy-production-cleanroom.sh configure --apply [--control=FILE]
  scripts/deploy-production-cleanroom.sh deploy --apply [--control=FILE]
  scripts/deploy-production-cleanroom.sh pre-commission [--control=FILE]
  scripts/deploy-production-cleanroom.sh commission --apply [--control=FILE]
  scripts/deploy-production-cleanroom.sh verify [--control=FILE]
  scripts/deploy-production-cleanroom.sh domain-create --apply [--control=FILE]
  scripts/deploy-production-cleanroom.sh domain-verify --apply [--control=FILE]
  scripts/deploy-production-cleanroom.sh continuous --apply [--control=FILE]

The control file contains identifiers, confirmations, and non-secret runtime
configuration only. Production secret values belong exclusively in Laravel
Cloud managed secrets.

The script never deletes a Laravel Cloud or DigitalOcean resource. Mutating
phases require --apply and DEPLOY_CONFIRM_PRODUCTION=YES. Commissioning and
domain cutover have additional independent confirmations. The continuous phase
runs without pausing after those authorities and prerequisites are present.
EOF
}

value_of() {
    local key="$1"
    printf '%s' "${!key:-}"
}

require_command() {
    command -v "$1" >/dev/null 2>&1 || {
        echo "Required command not found: $1" >&2
        exit 69
    }
}

require_value() {
    local key="$1"
    local value
    value="$(value_of "${key}")"

    if [[ -z "${value}" || "${value}" == REPLACE_* ]]; then
        echo "Set ${key} in ${CONTROL_FILE}." >&2
        exit 65
    fi
}

require_resolved_value() {
    local key="$1"
    local value
    value="$(value_of "${key}")"

    require_value "${key}"

    if [[ "${value}" == *REPLACE_* ]]; then
        echo "Resolve the placeholder in ${key} inside ${CONTROL_FILE}." >&2
        exit 65
    fi
}

require_apply() {
    if [[ "${APPLY}" != true ]]; then
        echo "Phase ${PHASE} is mutating. Review plan, then rerun with --apply." >&2
        exit 77
    fi

    if [[ "${DEPLOY_CONFIRM_PRODUCTION:-NO}" != "YES" ]]; then
        echo "Set DEPLOY_CONFIRM_PRODUCTION=YES for this reviewed production mutation." >&2
        exit 77
    fi
}

cloud_help() {
    "${CLOUD_BIN}" "$1" -h -n >/dev/null
}

cloud_json() {
    local command="$1"
    shift
    cloud_help "${command}"
    "${CLOUD_BIN}" "${command}" "$@" --json -n
}

cloud_mutation() {
    local command="$1"
    shift
    cloud_help "${command}"
    "${CLOUD_BIN}" "${command}" "$@" -n
}

wait_for_database_cluster_available() {
    local cluster_id="$1"
    local attempt payload status

    for attempt in {1..30}; do
        payload="$(cloud_json database-cluster:get "${cluster_id}")"
        status="$(jq -r '.status // empty' <<<"${payload}")"

        if [[ "${status}" == "available" ]]; then
            return
        fi

        sleep 2
    done

    echo "Database cluster ${cluster_id} did not become available in time." >&2
    exit 75
}

wait_for_cache_available() {
    local cache_id="$1"
    local attempt payload status

    for attempt in {1..30}; do
        payload="$(cloud_json cache:get "${cache_id}")"
        status="$(jq -r '.status // empty' <<<"${payload}")"

        if [[ "${status}" == "available" ]]; then
            return
        fi

        sleep 2
    done

    echo "Cache ${cache_id} did not become available in time." >&2
    exit 75
}

upsert_local_state() {
    local key="$1"
    local value="$2"
    local temporary
    temporary="$(mktemp)"

    awk -v key="${key}" -v value="${value}" '
        BEGIN { found = 0 }
        index($0, key "=") == 1 { print key "=" value; found = 1; next }
        { print }
        END { if (found == 0) print key "=" value }
    ' "${CONTROL_FILE}" > "${temporary}"

    mv "${temporary}" "${CONTROL_FILE}"
    export "${key}=${value}"
}

render_plan() {
    cat <<EOF
X-PAYOUT CLEANROOM DEPLOYMENT

Repository:       ${DEPLOY_GIT_REPOSITORY:-3neti/x-Payout}
Branch:           ${DEPLOY_GIT_BRANCH:-main}
Region:           ${DEPLOY_CLOUD_REGION:-ap-southeast-1}
Environment:      ${DEPLOY_CLOUD_ENVIRONMENT_NAME:-production}
Public domain:    ${DEPLOY_PUBLIC_DOMAIN:-payout.disburse.cash}
DNS zone:         ${DEPLOY_DNS_ZONE:-disburse.cash} (nameservers preserved)
Evidence Space:   ${DEPLOY_DIGITALOCEAN_SPACE:-not configured}
Evidence prefix:  ${DEPLOY_EVIDENCE_PREFIX:-not configured}
Control file:     ${CONTROL_FILE}
Secret authority: Laravel Cloud managed secrets (names and IDs only here)

Phases:
  1. foundation     Create a fresh app/environment/database/cache/compute.
  2. configure      Attach managed secrets, runtime variables, worker, scheduler.
  3. deploy         Deploy published code and monitor to a terminal result.
  4. commission     Pre-doctor, one bootstrap, final strict doctor.
  5. verify         Versions, assets, doctor, balance evidence.
  6. domain-create  Ask Laravel Cloud for DNS records; do not change nameservers.
  7. domain-verify  Verify hostname, TLS, and origin after DNS is updated.

Continuous mode:
  foundation → configure → deploy → pre-commission checkpoint
  → separately authorized commission → verify → optional domain cutover

Persistent external resources:
  - DigitalOcean Space and its archived/active prefixes
  - disburse.cash DNS zone and existing nameservers
  - organization-managed Laravel Cloud secrets
  - NetBank provider identity and provider-side history

Never automated by this script:
  - deletion of the retired application or evidence
  - copying plaintext secrets from a local file
  - real-money payments, SMS sends, claims, or refunds
  - provider transaction replay or balance restoration
EOF
}

local_preflight() {
    require_command php
    require_command composer
    require_command jq
    require_command "${CLOUD_BIN}"

    composer validate --strict
    composer show 3neti/x-change --no-interaction
    test -f public/build/manifest.json

    php artisan x-change:deployment:generate \
        --target=laravel-cloud \
        --profile=netbank \
        --path=/tmp/x-payout-production.deployment.yaml \
        --json \
        --no-interaction

    php artisan x-change:deployment:validate \
        --path=/tmp/x-payout-production.deployment.yaml \
        --no-interaction
}

foundation() {
    require_apply
    require_command jq
    require_command "${CLOUD_BIN}"

    local application_id="${DEPLOY_CLOUD_APPLICATION_ID:-}"
    local environment_id="${DEPLOY_CLOUD_ENVIRONMENT_ID:-}"
    local payload

    if [[ -z "${application_id}" ]]; then
        payload="$(cloud_json application:create \
            --name="${DEPLOY_CLOUD_APPLICATION_NAME}" \
            --repository="${DEPLOY_GIT_REPOSITORY}" \
            --source-provider=github \
            --region="${DEPLOY_CLOUD_REGION}")"
        application_id="$(jq -r '.id' <<<"${payload}")"
        upsert_local_state DEPLOY_CLOUD_APPLICATION_ID "${application_id}"
        environment_id="$(jq -r '.defaultEnvironmentId // .environments[0].id // empty' <<<"${payload}")"

        if [[ -z "${environment_id}" ]]; then
            payload="$(cloud_json application:get "${application_id}")"
            environment_id="$(jq -r '.defaultEnvironmentId // .environments[0].id // empty' <<<"${payload}")"
        fi
    fi

    if [[ -z "${environment_id}" ]]; then
        payload="$(cloud_json environment:create "${application_id}" \
            --name="${DEPLOY_CLOUD_ENVIRONMENT_NAME}" \
            --branch="${DEPLOY_GIT_BRANCH}")"
        environment_id="$(jq -r '.id' <<<"${payload}")"
    fi
    upsert_local_state DEPLOY_CLOUD_ENVIRONMENT_ID "${environment_id}"

    if [[ -z "${DEPLOY_CLOUD_DATABASE_CLUSTER_ID:-}" ]]; then
        payload="$(cloud_json database-cluster:create \
            --name="x-payout-production" \
            --type="${DEPLOY_DATABASE_TYPE}" \
            --engine-version="${DEPLOY_DATABASE_ENGINE_VERSION}" \
            --region="${DEPLOY_CLOUD_REGION}")"
        upsert_local_state DEPLOY_CLOUD_DATABASE_CLUSTER_ID "$(jq -r '.id' <<<"${payload}")"
    fi

    if [[ -z "${DEPLOY_CLOUD_DATABASE_ID:-}" ]]; then
        wait_for_database_cluster_available "${DEPLOY_CLOUD_DATABASE_CLUSTER_ID}"
        payload="$(cloud_json database:create "${DEPLOY_CLOUD_DATABASE_CLUSTER_ID}" --name=x_payout)"
        upsert_local_state DEPLOY_CLOUD_DATABASE_ID "$(jq -r '.id' <<<"${payload}")"
    fi

    if [[ -z "${DEPLOY_CLOUD_CACHE_ID:-}" ]]; then
        payload="$(cloud_json cache:create \
            --name=x-payout-production \
            --type="${DEPLOY_CACHE_TYPE}" \
            --region="${DEPLOY_CLOUD_REGION}" \
            --size="${DEPLOY_CACHE_SIZE}" \
            --auto-upgrade-enabled=true \
            --is-public=false \
            --eviction-policy="${DEPLOY_CACHE_EVICTION_POLICY:-allkeys-lru}")"
        upsert_local_state DEPLOY_CLOUD_CACHE_ID "$(jq -r '.id' <<<"${payload}")"
    fi

    wait_for_cache_available "${DEPLOY_CLOUD_CACHE_ID}"

    cloud_json environment:update "${environment_id}" \
        --database-id="${DEPLOY_CLOUD_DATABASE_ID}" \
        --cache-id="${DEPLOY_CLOUD_CACHE_ID}" \
        --force >/dev/null

    payload="$(cloud_json environment:get "${environment_id}")"
    if [[ -z "${DEPLOY_CLOUD_INSTANCE_ID:-}" ]]; then
        local instance_id
        instance_id="$(jq -r '.instances[0] // empty' <<<"${payload}")"
        if [[ -z "${instance_id}" ]]; then
            payload="$(cloud_json instance:create "${environment_id}" \
                --name=App \
                --type=app \
                --size="${DEPLOY_COMPUTE_SIZE}" \
                --scaling-type=none \
                --min-replicas=1 \
                --max-replicas=1 \
                --uses-scheduler=true)"
            instance_id="$(jq -r '.id' <<<"${payload}")"
        fi
        upsert_local_state DEPLOY_CLOUD_INSTANCE_ID "${instance_id}"
    fi

    cloud_json instance:update "${DEPLOY_CLOUD_INSTANCE_ID}" \
        --uses-scheduler=true --force >/dev/null

    echo "Foundation ready. Generated identifiers were written to ${CONTROL_FILE}."
}

attached_secret_names() {
    require_value DEPLOY_CLOUD_ENVIRONMENT_ID

    cloud_json environment-secret:list "${DEPLOY_CLOUD_ENVIRONMENT_ID}" \
        | jq -r '.. | objects | (.key? // .name? // empty)' \
        | sort -u
}

assert_managed_secret_attachments() {
    require_resolved_value DEPLOY_REQUIRED_CLOUD_SECRET_NAMES

    local attached_names missing name
    attached_names="$(attached_secret_names)"
    missing=()

    while IFS= read -r name; do
        [[ -z "${name}" ]] && continue

        if ! grep -Fxq "${name}" <<<"${attached_names}"; then
            missing+=("${name}")
        fi
    done < <(tr ',' '\n' <<<"${DEPLOY_REQUIRED_CLOUD_SECRET_NAMES}" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')

    if (( ${#missing[@]} > 0 )); then
        echo "Required Laravel Cloud managed secrets are not attached:" >&2
        printf '  - %s\n' "${missing[@]}" >&2
        echo "Attach them at the authorized bootstrap checkpoint; no local production .env fallback is permitted." >&2
        exit 79
    fi

    echo "Managed-secret attachment gate passed. Values were not read."
}

configure() {
    require_apply
    require_value DEPLOY_CLOUD_ENVIRONMENT_ID
    require_value DEPLOY_CLOUD_INSTANCE_ID
    require_resolved_value DEPLOY_DIGITALOCEAN_SPACE
    require_resolved_value DEPLOY_CLOUD_SECRET_IDS
    require_resolved_value APP_URL
    require_resolved_value AWS_BUCKET
    require_resolved_value XCHANGE_INSTANCE_ID
    require_resolved_value XCHANGE_CLAIM_EVIDENCE_DIRECTORY
    require_resolved_value XCHANGE_INSTANCE_KEEPSAKE_DIRECTORY

    local key value
    for key in "${runtime_variables[@]}"; do
        value="$(value_of "${key}")"
        if [[ -n "${value}" && "${value}" != REPLACE_* ]]; then
            cloud_mutation environment:variables "${DEPLOY_CLOUD_ENVIRONMENT_ID}" \
                --action=set --key="${key}" --value="${value}" --force >/dev/null
        fi
    done

    local secret_ids
    # Accept either comma- or space-separated secret IDs.
    secret_ids="${DEPLOY_CLOUD_SECRET_IDS//,/ }"
    # shellcheck disable=SC2086
    cloud_json environment-secret:attach "${DEPLOY_CLOUD_ENVIRONMENT_ID}" ${secret_ids} >/dev/null

    assert_managed_secret_attachments

    if [[ -z "${DEPLOY_CLOUD_WORKER_PROCESS_ID:-}" ]]; then
        local processes process_id payload
        processes="$(cloud_json background-process:list "${DEPLOY_CLOUD_INSTANCE_ID}")"
        process_id="$(jq -r '.[] | select(.queue == "x-change-funding,x-change-feedback,default") | .id' <<<"${processes}" | head -1)"
        if [[ -z "${process_id}" ]]; then
            payload="$(cloud_json background-process:create "${DEPLOY_CLOUD_INSTANCE_ID}" \
                --type=worker \
                --connection=redis \
                --queue=x-change-funding,x-change-feedback,default \
                --backoff=30 --sleep=3 --rest=0 --timeout=60 --tries=3 --processes=1)"
            process_id="$(jq -r '.id' <<<"${payload}")"
        fi
        upsert_local_state DEPLOY_CLOUD_WORKER_PROCESS_ID "${process_id}"
    fi

    cloud_json instance:update "${DEPLOY_CLOUD_INSTANCE_ID}" \
        --uses-scheduler=true --force >/dev/null

    echo "Runtime variables, managed secrets, worker, and scheduler are configured."
}

pre_commission() {
    require_value DEPLOY_CLOUD_ENVIRONMENT_ID
    assert_managed_secret_attachments

    cloud_mutation command:run "${DEPLOY_CLOUD_ENVIRONMENT_ID}" \
        --cmd='php artisan x-change:doctor --pre-commission --strict --json'
}

deploy() {
    require_apply
    require_value DEPLOY_CLOUD_APPLICATION_ID
    require_value DEPLOY_CLOUD_ENVIRONMENT_ID

    local build_command deploy_command
    build_command='composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader'
    deploy_command='php artisan migrate --force'

    cloud_json environment:update "${DEPLOY_CLOUD_ENVIRONMENT_ID}" \
        --branch="${DEPLOY_GIT_BRANCH}" \
        --build-command="${build_command}" \
        --deploy-command="${deploy_command}" \
        --force >/dev/null

    cloud_mutation deploy "${DEPLOY_CLOUD_APPLICATION_ID}" "${DEPLOY_CLOUD_ENVIRONMENT_NAME}"
    cloud_mutation deploy:monitor "${DEPLOY_CLOUD_APPLICATION_ID}" "${DEPLOY_CLOUD_ENVIRONMENT_NAME}"
}

commission() {
    require_apply
    require_value DEPLOY_CLOUD_ENVIRONMENT_ID
    require_value DEPLOY_PROVIDER_CUTOVER_AT
    require_value DEPLOY_PROVIDER_CUTOVER_TRANSACTION_ID

    if [[ "${DEPLOY_CONFIRM_COMMISSIONING:-NO}" != "YES" ]]; then
        echo "Set DEPLOY_CONFIRM_COMMISSIONING=YES after reviewing the cutover evidence." >&2
        exit 77
    fi

    if [[ "${XCHANGE_TREASURY_OPENING_CAPITALIZATION_ALLOW_PRODUCTION:-false}" != "true" ]]; then
        echo "Opening capitalization remains disabled in ${CONTROL_FILE}." >&2
        exit 77
    fi

    cat <<EOF
Commissioning boundary:
  Cutover at:             ${DEPLOY_PROVIDER_CUTOVER_AT}
  Last retired provider: ${DEPLOY_PROVIDER_CUTOVER_TRANSACTION_ID}
EOF

    pre_commission
    cloud_mutation command:run "${DEPLOY_CLOUD_ENVIRONMENT_ID}" \
        --cmd='composer x-payout:bootstrap -- --manifest=commissioning/default.yaml --skip-build --no-interaction'
    cloud_mutation command:run "${DEPLOY_CLOUD_ENVIRONMENT_ID}" \
        --cmd='php artisan x-change:doctor --strict --json'
}

verify() {
    require_value DEPLOY_CLOUD_ENVIRONMENT_ID

    cloud_mutation command:run "${DEPLOY_CLOUD_ENVIRONMENT_ID}" \
        --cmd='composer show 3neti/x-change --format=json && test -f public/build/manifest.json && echo FRONTEND_MANIFEST_PRESENT'
    cloud_mutation command:run "${DEPLOY_CLOUD_ENVIRONMENT_ID}" \
        --cmd='php artisan x-change:doctor --strict --json'
    cloud_mutation command:run "${DEPLOY_CLOUD_ENVIRONMENT_ID}" \
        --cmd='php artisan x-change:continuity:balance-report --json --pretty'
}

domain_create() {
    require_apply
    require_value DEPLOY_CLOUD_ENVIRONMENT_ID

    if [[ "${DEPLOY_CONFIRM_DOMAIN_CUTOVER:-NO}" != "YES" ]]; then
        echo "Set DEPLOY_CONFIRM_DOMAIN_CUTOVER=YES after generated-domain acceptance." >&2
        exit 77
    fi

    if [[ -n "${DEPLOY_CLOUD_DOMAIN_ID:-}" ]]; then
        echo "Using existing Laravel Cloud domain ${DEPLOY_CLOUD_DOMAIN_ID}."
        return
    fi

    local payload domain_id
    payload="$(cloud_json domain:create "${DEPLOY_CLOUD_ENVIRONMENT_ID}" \
        --name="${DEPLOY_PUBLIC_DOMAIN}" \
        --wildcard-enabled=false \
        --verification-method=pre_verification)"
    domain_id="$(jq -r '.id' <<<"${payload}")"
    upsert_local_state DEPLOY_CLOUD_DOMAIN_ID "${domain_id}"

    echo "Laravel Cloud DNS records for the existing ${DEPLOY_DNS_ZONE} zone:"
    jq '.dnsRecords' <<<"${payload}"
    echo "Keep the DigitalOcean nameservers unchanged. Apply only these records, then run domain-verify."
}

continuous() {
    require_apply
    local_preflight
    foundation
    configure
    deploy
    pre_commission

    if [[ "${DEPLOY_CONFIRM_COMMISSIONING:-NO}" != "YES" ]]; then
        cat <<'EOF'
Continuous deployment reached the accountable commissioning checkpoint.
Review provider cutover evidence, then set DEPLOY_CONFIRM_COMMISSIONING=YES to
authorize the one-time financial ceremony. No commissioning mutation ran.
EOF
        return
    fi

    commission
    verify

    if [[ "${DEPLOY_CONFIRM_DOMAIN_CUTOVER:-NO}" == "YES" ]]; then
        require_resolved_value DEPLOY_PUBLIC_DOMAIN

        if [[ "${APP_URL}" != "https://${DEPLOY_PUBLIC_DOMAIN}" ]]; then
            echo "Set APP_URL=https://${DEPLOY_PUBLIC_DOMAIN} before the authorized domain cutover." >&2
            exit 65
        fi

        domain_create
        domain_verify
        configure
        deploy
        verify
    else
        cat <<'EOF'
Generated-domain deployment is commissioned and verified. Domain cutover did
not run because DEPLOY_CONFIRM_DOMAIN_CUTOVER is not YES.
EOF
    fi
}

domain_verify() {
    require_apply
    require_value DEPLOY_CLOUD_DOMAIN_ID

    if [[ "${DEPLOY_CONFIRM_DOMAIN_CUTOVER:-NO}" != "YES" ]]; then
        echo "Set DEPLOY_CONFIRM_DOMAIN_CUTOVER=YES after DNS records are present." >&2
        exit 77
    fi

    cloud_json domain:verify "${DEPLOY_CLOUD_DOMAIN_ID}"
}

case "${PHASE}" in
    help|-h|--help)
        usage
        ;;
    plan)
        render_plan
        if [[ "${RENDER_ONLY}" != true ]]; then
            local_preflight
        fi
        ;;
    foundation)
        foundation
        ;;
    configure)
        configure
        ;;
    deploy)
        deploy
        ;;
    pre-commission)
        pre_commission
        ;;
    commission)
        commission
        ;;
    verify)
        verify
        ;;
    domain-create)
        domain_create
        ;;
    domain-verify)
        domain_verify
        ;;
    continuous)
        continuous
        ;;
    *)
        usage >&2
        exit 64
        ;;
esac
