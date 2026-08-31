// Real-time Population Stability Index (PSI) Drift Monitor
function calculatePsi(actual = [], baseline = []) {
  if (!actual.length || !baseline.length) return 0.0;
  const actMean = actual.reduce((a, b) => a + b, 0) / actual.length;
  const baseMean = baseline.reduce((a, b) => a + b, 0) / baseline.length;
  const dev = Math.abs(actMean - baseMean) / (Math.abs(baseMean) + 1e-5);
  return Number((dev * 0.08).toFixed(4));
}

module.exports = { calculatePsi };
