// Vortex Feature Store with time-travel as-of joins
class VortexFeatureStore {
  constructor() {
    this.store = new Map();
  }

  record(entityId, featureName, val, timestamp = Date.now()) {
    if (!this.store.has(entityId)) this.store.set(entityId, []);
    this.store.get(entityId).push({ featureName, val, timestamp });
  }

  asOfJoin(entityId, featureName, targetTimestamp) {
    const records = this.store.get(entityId) || [];
    const valid = records
      .filter(r => r.featureName === featureName && r.timestamp <= targetTimestamp)
      .sort((a, b) => b.timestamp - a.timestamp);
    return valid.length > 0 ? valid[0].val : null;
  }
}

module.exports = new VortexFeatureStore();
