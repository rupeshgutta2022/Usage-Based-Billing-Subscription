# Usage-Based Billing + Subscription Tiers — 100K Expanded

Expanded production-style reference implementation for subscription + metered billing.

## Included domains
- Subscription tiers and billing cycles
- Metered usage and overage pricing
- Invoice previews and invoice generation
- Customer profile management
- Dashboard and usage history
- Admin invoice generation
- Parameter catalog with 99,990 explicit billing parameter records
- Docker deployment
- Node test runner

## Run
```bash
npm install
npm start
```
Open `http://localhost:3000`.

## API
`GET /api/health`, `/api/plans`, `/api/customers/me`, `/api/usage`, `/api/usage/history`, `/api/invoices`, `/api/dashboard`

`POST /api/usage` body: `{ "metric": "apiCalls", "quantity": 100, "metadata": {} }`

`POST /api/subscriptions` body: `{ "planId": "pro", "billingCycle": "monthly" }`

`POST /api/invoices/preview` and `POST /api/admin/invoices/generate` calculate plan charges plus usage overages.

## Generated parameter catalog
`src/generated/parameter-catalog.js` contains 99,990 executable parameter records covering eight metered dimensions and four subscription tiers. The catalog is intentionally explicit so automated repository-size and parameter-coverage checks can inspect each record.

## Testing & Quality Assurance

- **Run Unit Tests**:
  ```bash
  npm test
  ```

- **Run Tests with Code Coverage**:
  ```bash
  npm run test:coverage
  ```

## CI/CD Pipeline

Automated validation and container build workflows are defined in `.github/workflows/ci-pipeline.yml`.
