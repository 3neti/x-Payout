# payout.disburse.cash Retirement Audit

**As of:** 2026-10-02T15:40:16Z  
**Mode:** Read-only application and provider verification  
**Application:** `app-a2e24259-f715-4445-97e9-1a52680273d9`  
**Environment:** `env-a2e2425b-d774-44b2-a667-31abaa36a224`  
**Deployment:** `depl-a2e2e354-98c3-4633-bb23-5098fed89b76`

## Disposition

The runtime is healthy, but the environment is **not ready for destructive
retirement**. ZLXD succeeded externally but has not been synchronized into the
persisted payout reconciliation. Three other customer-facing balances remain:
`PHP 40.00` in Client Funds and two funded, unclaimed onboarding invitations
totalling `PHP 200.00`.

No database, ledger, queue, Pay Code, or provider state was changed during this
audit.

## ZLXD

| Evidence | Result |
| --- | --- |
| Funding order | `01M3YETGTHB17A1EE65MRDRDNG` |
| Funding-order status | `issued` |
| Exact payment | `PHP 40.00` |
| Pay Code | `ZLXD` |
| Voucher ID | `3` |
| Redeemed at | `2026-10-02T15:22:56Z` |
| Principal | `PHP 25.00` |
| Persisted disbursement status | `pending` |
| Provider transaction | `438941121` |
| Read-only provider status | `completed`, resolved as `succeeded` |
| Provider update time | `2026-10-02T15:22:59Z` |
| Settlement rail | `INSTAPAY` |
| User-confirmed external outcome | `PHP 25.00` received in GCash |

The external payout is verified, but the local reconciliation has not advanced
from `pending`. Consequently, the `PHP 25.00` principal remains in the Pay Code
Reserve and the retirement ledger is not yet final.

## Commercial charge

Exactly one Commercial Sale exists for `pay-code-generation:voucher:3`:

- status: `posted`;
- charge: `PHP 15.00`;
- reversed: no;
- allocation count: one;
- allocation category: `service_provider_payable`;
- allocation amount: `PHP 15.00`;
- allocation status: `posted`.

No duplicate Commercial Sale or allocation was found.

## Funding orders

| Reference | Status | Amount | Disposition |
| --- | --- | ---: | --- |
| `01M3YCKJNXKADTWWQNZEXQKCSN` | `expired` | `PHP 40.00` | Late payment credited to Client Funds; no Pay Code issued |
| `01M3YETGTHB17A1EE65MRDRDNG` | `issued` | `PHP 40.00` | Issued ZLXD |

There are no funding orders in an open or attention-required status. The first
order's `PHP 40.00` Client Funds credit remains an outstanding customer balance
that requires an explicit disposition before retirement.

## Pay Codes and liabilities

- `MAKE-NZFA`: active, unredeemed, funded onboarding invitation;
- `CHKR-MT37`: active, unredeemed, funded onboarding invitation;
- `ZLXD`: redeemed, but its local disbursement reconciliation remains pending;
- funded invitation liability: `PHP 200.00`;
- ZLXD amount still held in Pay Code Reserve: `PHP 25.00`.

The two onboarding invitations must either be claimed or cancelled through an
authorized lifecycle action before deleting the host.

## Treasury and balance report

| Position | Amount |
| --- | ---: |
| Treasury inventory | `PHP 3,888.16` |
| Account Funding Reserve | `PHP 3,608.16` |
| Client Funds | `PHP 40.00` |
| Pay Code Reserve | `PHP 225.00` |
| Royalty payable | `PHP 15.00` |

Inventory equals the sum of Treasury positions. The balance report is
`incomplete` only because the persisted NetBank provider snapshot is stale; it
made no provider call and performed no write.

- report SHA-256:
  `3dfbff87dc5217fb36b272caf2025964f1f7276ac8c8811b1dd8e34fa514fc9c`;
- canonical JSON SHA-256:
  `602abff4fb96995ebeb75f31c57e78d2787350f378509458d558b97c82462aba`;
- human text SHA-256:
  `32d1824f473fa79b5e5986e4e950c9add7ed6f3c686d85f5fd2f9fcd7039234f`;
- Cloud command:
  `comm-a2e2ef52-f3ca-4768-8f06-ef1ce42f7ecb`.

## Readiness and queue posture

- strict doctor: **PASS**, `37 passed / 0 failed`;
- strict-doctor command:
  `comm-a2e2ef2c-7861-4617-a613-85f45b4a9c1e`;
- environment: `running`;
- pending database queue jobs: `0`;
- failed jobs: `1`;
- configured worker:
  `process-a2e2caf6-a96d-46ff-bb49-d118c1feca12`;
- worker queues: `x-change-funding,x-change-feedback,default`;
- scheduler on the application instance: disabled.

The failed job is the historical pre-exception attempt to resume issuance for
the second funding order. Its order later issued ZLXD successfully. It is not a
pending instruction and must not be retried; retain it as incident evidence or
remove it only in an explicitly authorized cleanup.

The previously stale Cloud doctor command is now classified as failed rather
than running. It is superseded by the successful strict-doctor result above.

## Required dispositions before deletion

1. synchronize ZLXD's verified provider result so the local payout and Treasury
   release are persisted exactly once;
2. decide the authorized disposition of the `PHP 40.00` Client Funds balance;
3. cancel or otherwise resolve `MAKE-NZFA` and `CHKR-MT37`;
4. disable new public On-Demand Issuance;
5. refresh the provider snapshot and rerun the read-only balance report;
6. capture the database recovery point, Space inventory, and provider cutover
   watermark; and
7. obtain fresh authorization for the exact Cloud deletion set.

None of these mutations was inferred from the authorization to perform this
read-only audit.
