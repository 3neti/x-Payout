# x-PayOut

x-PayOut is a thin Laravel 13 host for payout-focused X-Change deployments.

It is intended to be commissioned from a manifest, with the operational behavior supplied by the `3neti/x-change` package.

## Commissioning

To create a fresh local x-PayOut instance, validate NetBank readiness, and mint the initial Maker and Checker onboarding Pay Codes, see:

- [Deployment runbook](DEPLOY.md)
- [x-PayOut Cleanroom Commissioning Guide](docs/commissioning/X_PAYOUT_CLEANROOM_COMMISSIONING.md)
- [Public Cloud Retirement and Cleanroom Redeployment Plan](docs/commissioning/X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_PLAN.md)
- [Retirement and Cleanroom Redeployment Compass](docs/commissioning/X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_COMPASS.md)
- [payout.disburse.cash Retirement Audit — 2026-10-02](docs/commissioning/PAYOUT_DISBURSE_CASH_RETIREMENT_AUDIT_2026_10_02.md)
- [Cleanroom deployment execution log — 2026-10-03](docs/commissioning/X_PAYOUT_CLEANROOM_DEPLOYMENT_LOG_2026_10_03.md)
- [Portable production deployment plan](docs/commissioning/X_PAYOUT_PUBLIC_CLOUD_DEPLOYMENT_PLAN.md#cleanup-gate-5--execute-the-complete-one-command-lifecycle)
- [Compatibility retirement audit](docs/commissioning/X_PAYOUT_COMPATIBILITY_RETIREMENT_AUDIT_2026_10_06.md)
- [Production secret custody and recovery inventory](docs/commissioning/X_PAYOUT_PRODUCTION_SECRET_CUSTODY.md)
- [Forge deployment-control worksheet](.env.forge.production.example)
- [Forge deployment adapter](scripts/deploy-production-forge.sh)

The supported Laravel Cloud deployment entry point is `bin/x-payout-deploy`.
The former worksheet-based cleanroom controller has been retired. Production
deployment uses the portable instance profile, generated state, Laravel Cloud
managed-secret identities, and the owner-only recovery input described by the
deployment plan.
