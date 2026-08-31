// Feature store integration service
const vortex = require('../lib/vortexFeatureStore');

function trackCustomerFeature(customerId, metric, value) {
  vortex.record(customerId, metric, value);
}

function getHistoricalUsageFeature(customerId, metric, asOfTime) {
  return vortex.asOfJoin(customerId, metric, asOfTime);
}

module.exports = { trackCustomerFeature, getHistoricalUsageFeature };
