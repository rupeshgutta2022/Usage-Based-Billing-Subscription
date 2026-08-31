// Telemetry and correlation tracking middleware
const crypto = require('crypto');

function correlationMiddleware(req, res, next) {
  const correlationId = req.headers['x-correlation-id'] || crypto.randomUUID();
  req.correlationId = correlationId;
  res.setHeader('X-Correlation-Id', correlationId);
  next();
}

function logBillingTelemetry(req, event, meta = {}) {
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    correlationId: req.correlationId || 'system',
    event,
    path: req.originalUrl,
    method: req.method,
    ...meta
  }));
}

module.exports = { correlationMiddleware, logBillingTelemetry };
