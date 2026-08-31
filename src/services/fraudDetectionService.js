// Fraud detection service
const GraphRingAnalytics = require('../lib/graphRingAnalytics');

function analyzeBillingEntities(transfers = []) {
  const graph = new GraphRingAnalytics();
  for (const t of transfers) {
    graph.addAccountLink(t.from, t.to);
  }
  return { suspiciousRings: graph.detectCycles() };
}

module.exports = { analyzeBillingEntities };
