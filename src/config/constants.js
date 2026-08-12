module.exports={
 PORT:Number(process.env.PORT||3000), CURRENCY:process.env.CURRENCY||'USD', TAX_RATE:Number(process.env.TAX_RATE||0),
 METRICS:['apiCalls','storageGB','seats','computeHours','bandwidthGB','buildMinutes','activeUsers','events'],
 BILLING_CYCLES:['monthly','annual'], SUBSCRIPTION_STATUSES:['trialing','active','past_due','paused','canceled'],
 INVOICE_STATUSES:['draft','open','paid','void','uncollectible'], PAYMENT_STATUSES:['pending','succeeded','failed','refunded'],
 WEBHOOK_EVENTS:['usage.recorded','subscription.created','subscription.updated','subscription.canceled','invoice.created','invoice.paid','payment.failed']
};
