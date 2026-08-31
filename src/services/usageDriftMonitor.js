// Usage drift monitoring service
const { calculatePsi } = require('../lib/streamingPsiMonitor');

function checkUsageDrift(currentUsageWindow = [], historicalBaseline = []) {
  const psi = calculatePsi(currentUsageWindow, historicalBaseline);
  return {
    psi,
    driftDetected: psi > 0.2,
    status: psi > 0.2 ? 'ALERT_DRIFT' : 'HEALTHY'
  };
}

module.exports = { checkUsageDrift };
