const { round, add, multiply } = require('../src/lib/money');

describe('Money Calculations Unit Tests', () => {
  test('should round float amounts to 2 decimal places', () => {
    expect(round(10.555)).toBe(10.56);
    expect(round(10.554)).toBe(10.55);
    expect(round(0)).toBe(0);
  });

  test('should accurately sum monetary quantities', () => {
    expect(add(10.25, 20.30, 5.45)).toBe(36.00);
    expect(add(0.1, 0.2)).toBe(0.3);
  });

  test('should accurately multiply units and rates', () => {
    expect(multiply(100, 0.05)).toBe(5.00);
    expect(multiply(1250, 0.012)).toBe(15.00);
  });
});
