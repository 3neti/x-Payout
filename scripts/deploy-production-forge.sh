#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PHASE="${1:-plan}"
shift || true

ENV_FILE="${PAYOUT_FORGE_ENV_FILE:-${ROOT_DIR}/.env.forge.production}"

for argument in "$@"; do
    case "${argument}" in
        --env=*)
            ENV_FILE="${argument#--env=}"
            ;;
        *)
            echo "Unknown option: ${argument}" >&2
            exit 64
            ;;
    esac
done

if [[ ! -f "${ENV_FILE}" ]]; then
    echo "Missing ${ENV_FILE}. Copy .env.forge.production.example first." >&2
    exit 66
fi

set -a
# shellcheck disable=SC1090
source "${ENV_FILE}"
set +a

PHP_BIN="${FORGE_PHP:-php}"
COMPOSER_BIN="${FORGE_COMPOSER:-composer}"
SITE_PATH="${FORGE_SITE_PATH:-${ROOT_DIR}}"
SITE_BRANCH="${FORGE_SITE_BRANCH:-main}"
LOCK_FILE="${FORGE_DEPLOY_LOCK_FILE:-/tmp/x-payout-production-deploy.lock}"

usage() {
    cat <<'EOF'
x-PayOut Forge deployment adapter

Usage:
  scripts/deploy-production-forge.sh plan [--env=FILE]
  scripts/deploy-production-forge.sh install [--env=FILE]
  scripts/deploy-production-forge.sh deploy [--env=FILE]
  scripts/deploy-production-forge.sh commission [--env=FILE]
  scripts/deploy-production-forge.sh verify [--env=FILE]

install     First code deployment; ends at the strict pre-commission gate.
deploy      Recurring code deployment; requires final strict doctor to pass.
commission  Separately authorized one-time x-PayOut commissioning ceremony.
verify      Read-only strict doctor and continuity balance report.

Forge provisions the server, site, database, Redis, worker, scheduler, SSL,
health check, and application .env. This adapter never provisions or deletes
infrastructure and never stores application credentials.
EOF
}

require_command() {
    command -v "$1" >/dev/null 2>&1 || {
        echo "Required command not found: $1" >&2
        exit 69
    }
}

require_production_confirmation() {
    if [[ "${FORGE_CONFIRM_PRODUCTION:-NO}" != "YES" ]]; then
        echo "Set FORGE_CONFIRM_PRODUCTION=YES after reviewing this production deployment." >&2
        exit 77
    fi
}

require_commissioning_confirmation() {
    require_production_confirmation

    if [[ "${FORGE_CONFIRM_COMMISSIONING:-NO}" != "YES" ]]; then
        echo "Set FORGE_CONFIRM_COMMISSIONING=YES only for the approved one-time ceremony." >&2
        exit 77
    fi

    for key in FORGE_PROVIDER_CUTOVER_AT FORGE_PROVIDER_CUTOVER_TRANSACTION_ID; do
        local value="${!key:-}"
        if [[ -z "${value}" || "${value}" == *REPLACE_* ]]; then
            echo "Resolve ${key} before commissioning." >&2
            exit 65
        fi
    done
}

acquire_deployment_lock() {
    require_command flock
    exec 9>"${LOCK_FILE}"
    if ! flock -n 9; then
        echo "Another x-PayOut deployment is already running." >&2
        exit 75
    fi
}

enter_site() {
    if [[ ! -d "${SITE_PATH}" ]]; then
        echo "Forge site path does not exist: ${SITE_PATH}" >&2
        exit 72
    fi

    cd "${SITE_PATH}"
}

update_source() {
    if [[ "${FORGE_SOURCE_UPDATE_ENABLED:-true}" == "true" ]]; then
        require_command git
        git pull --ff-only origin "${SITE_BRANCH}"
    fi
}

assert_release_artifacts() {
    test -f composer.lock || {
        echo "composer.lock is missing." >&2
        exit 70
    }

    test -f public/build/manifest.json || {
        echo "Packaged frontend manifest is missing; do not build assets on the production server." >&2
        exit 70
    }

    if [[ -n "${FORGE_EXPECTED_XCHANGE_VERSION:-}" ]]; then
        "${COMPOSER_BIN}" show 3neti/x-change "${FORGE_EXPECTED_XCHANGE_VERSION}" --no-interaction >/dev/null
    fi
}

install_release() {
    require_production_confirmation
    acquire_deployment_lock
    require_command "${PHP_BIN}"
    require_command "${COMPOSER_BIN}"
    enter_site
    update_source

    "${COMPOSER_BIN}" validate --strict --no-interaction
    "${COMPOSER_BIN}" install \
        --no-dev \
        --no-interaction \
        --prefer-dist \
        --optimize-autoloader

    assert_release_artifacts
    "${PHP_BIN}" artisan migrate --force --no-interaction
    "${PHP_BIN}" artisan queue:restart --no-interaction
}

initial_install() {
    install_release
    "${PHP_BIN}" artisan x-change:doctor --pre-commission --strict --json --no-interaction
}

recurring_deploy() {
    install_release
    "${PHP_BIN}" artisan x-change:doctor --strict --json --no-interaction
}

commission() {
    require_commissioning_confirmation
    acquire_deployment_lock
    require_command "${PHP_BIN}"
    require_command "${COMPOSER_BIN}"
    enter_site

    cat <<EOF
Commissioning boundary:
  Cutover at:             ${FORGE_PROVIDER_CUTOVER_AT}
  Last retired provider: ${FORGE_PROVIDER_CUTOVER_TRANSACTION_ID}
EOF

    "${PHP_BIN}" artisan x-change:doctor --pre-commission --strict --json --no-interaction
    "${COMPOSER_BIN}" x-payout:bootstrap -- \
        --manifest=commissioning/default.yaml \
        --skip-build \
        --no-interaction
    "${PHP_BIN}" artisan x-change:doctor --strict --json --no-interaction
}

verify() {
    require_command "${PHP_BIN}"
    require_command "${COMPOSER_BIN}"
    enter_site
    assert_release_artifacts

    "${PHP_BIN}" artisan x-change:doctor --strict --json --no-interaction
    "${PHP_BIN}" artisan x-change:continuity:balance-report --json --pretty --no-interaction
}

render_plan() {
    cat <<EOF
X-PAYOUT FORGE DEPLOYMENT ADAPTER

Site path:       ${SITE_PATH}
Git branch:      ${SITE_BRANCH}
PHP:             ${PHP_BIN}
Composer:        ${COMPOSER_BIN}
Expected x-change: ${FORGE_EXPECTED_XCHANGE_VERSION:-composer.lock}

Forge owns:
  - VPS, firewall, Nginx, PHP, database, Redis, SSL, backups
  - application .env, supervised queue worker, scheduler, health check
  - Git deployment history and zero-downtime release management when enabled

x-PayOut owns:
  - exact Composer lock and packaged frontend assets
  - migrations, pre-commission doctor, one-time commissioning, strict doctor
  - balance evidence, provider cutover boundary, and financial controls

Recurring deployment never invokes commissioning.
EOF
}

case "${PHASE}" in
    help|-h|--help)
        usage
        ;;
    plan)
        render_plan
        ;;
    install)
        initial_install
        ;;
    deploy)
        recurring_deploy
        ;;
    commission)
        commission
        ;;
    verify)
        verify
        ;;
    *)
        usage >&2
        exit 64
        ;;
esac
