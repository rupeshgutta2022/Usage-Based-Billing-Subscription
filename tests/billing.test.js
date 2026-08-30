const { usageCharge, invoiceFor } = require('../src/services/billing');

describe('Usage Billing & Invoicing Engine Tests', () => {
  const plan = {
    name: 'Pro Tier',
    priceMonthly: 99,
    priceAnnual: 990,
    limits: {
      apiCalls: 1000,
      storageGb: 50
    },
    overage: {
      apiCalls: 0.01,
      storageGb: 0.50
    }
  };

  test('should calculate zero overage within tier limits', () => {
    const usage = { apiCalls: 800, storageGb: 40 };
    const charge = usageCharge(usage, plan);
    expect(charge.total).toBe(0);
    expect(charge.lines.length).toBe(0);
  });

  test('should accurately calculate usage overage when limits exceeded', () => {
    const usage = { apiCalls: 1500, storageGb: 60 };
    // apiCalls: (1500-1000)*0.01 = 5.00
    // storageGb: (60-50)*0.50 = 5.00
    const charge = usageCharge(usage, plan);
    expect(charge.total).toBe(10.00);
    expect(charge.lines.length).toBe(2);
    expect(charge.lines[0].metric).toBe('apiCalls');
    expect(charge.lines[0].amount).toBe(5.00);
  });

  test('should generate full customer invoice with base + overages', () => {
    const customer = { id: 'cust-1', billingCycle: 'monthly' };
    const usage = { apiCalls: 2000, storageGb: 70 };
    const invoice = invoiceFor(customer, plan, usage);

    expect(invoice.subtotal).toBe(119.00); // 99 base + 10 apiCalls + 10 storageGb
    expect(invoice.overage).toBe(20.00);
    expect(invoice.lineItems.length).toBe(3);
    expect(invoice.lineItems[0].description).toContain('Pro Tier plan (monthly)');
  });
});
