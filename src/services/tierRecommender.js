// Tier recommendation service
const MultiInterestCapsuleRouter = require('../lib/pulseRecCapsules');

function recommendPlanTiers(customerUsage = {}) {
  const router = new MultiInterestCapsuleRouter();
  const vector = Object.values(customerUsage);
  const capsules = router.routeUsageInterests(vector);
  return {
    recommendedPlan: vector.length > 5 ? 'enterprise' : 'pro',
    capsulesCount: capsules.length
  };
}

module.exports = { recommendPlanTiers };
