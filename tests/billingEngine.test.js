const { round, add } = require('../src/lib/money');

describe('Billing Engine Core Operations', () => {
  test('should validate input operations and monetary formats', () => {
    const total = add(50, 25.50);
    expect(total).toBe(75.50);
    expect(round(total * 1.18)).toBe(89.09);
  });
});
