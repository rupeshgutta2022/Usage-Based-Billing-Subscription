const content = document.getElementById('content');
const pageTitle = document.getElementById('pageTitle');
let currentPage = 'dashboard';

async function api(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

function toast(msg, type = 'success') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(() => el.remove(), 2800);
}

function formatMoney(n, currency = 'USD') {
  if (n === null || n === undefined) return 'Custom';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(n);
}

function formatNumber(n) {
  return new Intl.NumberFormat('en-US').format(n ?? 0);
}

function pct(used, limit) {
  if (limit === null || limit === undefined) return 0;
  return Math.min(100, Math.round((used / limit) * 100));
}

function meterClass(p) {
  if (p >= 90) return 'danger';
  if (p >= 75) return 'warn';
  return '';
}

/* ===================== DASHBOARD ===================== */
async function renderDashboard() {
  pageTitle.textContent = 'Dashboard';
  let data = {};
  try { data = await api('/api/dashboard'); } catch (e) { toast(e.message, 'error'); }

  const { usage = {}, limits = {}, overage = 0, mrr = 0, plan = '—', status = '—' } = data;

  content.innerHTML = `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="label">Current Plan</div>
        <div class="value">${plan}</div>
        <div class="sub">Status: <span class="badge ${status === 'active' ? 'success' : 'warning'}">${status}</span></div>
      </div>
      <div class="stat-card">
        <div class="label">Monthly Recurring</div>
        <div class="value">${formatMoney(mrr)}</div>
        <div class="sub">Base subscription</div>
      </div>
      <div class="stat-card">
        <div class="label">Current Overage</div>
        <div class="value">${formatMoney(overage)}</div>
        <div class="sub">This billing period</div>
      </div>
      <div class="stat-card">
        <div class="label">Est. Invoice</div>
        <div class="value">${formatMoney(mrr + overage)}</div>
        <div class="sub">Base + overage</div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Usage This Period</h3></div>
      <div class="card-body">
        ${renderMeters(usage, limits)}
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Quick Actions</h3></div>
      <div class="card-body" style="display:flex;flex-wrap:wrap;gap:12px">
        <button class="btn primary" onclick="loadPage('plans')">Change Plan</button>
        <button class="btn secondary" onclick="simulateUsage('apiCalls', 1000)">+1k API Calls</button>
        <button class="btn secondary" onclick="simulateUsage('storageGB', 1)">+1 GB Storage</button>
        <button class="btn secondary" onclick="simulateUsage('computeHours', 5)">+5 Compute Hours</button>
      </div>
    </div>
  `;
}

function renderMeters(usage, limits) {
  const metrics = [
    { key: 'apiCalls', label: 'API Calls' },
    { key: 'storageGB', label: 'Storage (GB)' },
    { key: 'seats', label: 'Seats' },
    { key: 'computeHours', label: 'Compute Hours' }
  ];

  return metrics.map(m => {
    const used = usage[m.key] || 0;
    const limit = limits[m.key];
    const p = pct(used, limit);
    const unlimited = limit === null || limit === undefined;
    return `
      <div class="meter">
        <div class="meter-header">
          <span>${m.label}</span>
          <span>${formatNumber(used)} ${unlimited ? '/ ∞' : `/ ${formatNumber(limit)}`} ${!unlimited ? `(${p}%)` : ''}</span>
        </div>
        <div class="meter-bar">
          <div class="meter-fill ${meterClass(p)}" style="width:${unlimited ? Math.min(p, 30) : p}%"></div>
        </div>
      </div>
    `;
  }).join('');
}

/* ===================== PLANS ===================== */
async function renderPlans() {
  pageTitle.textContent = 'Plans & Pricing';
  let plans = [];
  let me = {};
  try {
    [plans, me] = await Promise.all([api('/api/plans'), api('/api/customers/me')]);
  } catch (e) { toast(e.message, 'error'); }

  const currentPlanId = me.customer?.planId;

  content.innerHTML = `
    <div style="margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
      <p style="color:var(--muted)">Choose a plan that fits your usage. Overage rates apply when you exceed included limits.</p>
      <div>
        <button class="btn secondary sm" id="cycleMonthly" onclick="setCycle('monthly')">Monthly</button>
        <button class="btn secondary sm" id="cycleAnnual" onclick="setCycle('annual')">Annual (save ~17%)</button>
      </div>
    </div>
    <div class="plans-grid" id="plansGrid">
      ${plans.map(p => {
        const isCurrent = p.id === currentPlanId;
        const price = p.priceMonthly;
        return `
          <div class="plan-card ${p.popular ? 'popular' : ''}">
            ${p.popular ? '<div class="badge">Most Popular</div>' : ''}
            <h3>${p.name}</h3>
            <div class="desc">${p.description}</div>
            <div class="price">
              ${price === null ? 'Custom' : formatMoney(price)}
              ${price !== null ? '<span>/mo</span>' : ''}
            </div>
            <ul>
              ${(p.features || []).map(f => `<li>${f}</li>`).join('')}
            </ul>
            <button class="btn ${isCurrent ? 'secondary' : 'primary'}" style="width:100%"
              ${isCurrent ? 'disabled' : ''}
              onclick="changePlan('${p.id}')">
              ${isCurrent ? 'Current Plan' : (p.id === 'enterprise' ? 'Contact Sales' : 'Upgrade')}
            </button>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

let selectedCycle = 'monthly';
function setCycle(cycle) {
  selectedCycle = cycle;
  document.getElementById('cycleMonthly')?.classList.toggle('primary', cycle === 'monthly');
  document.getElementById('cycleAnnual')?.classList.toggle('primary', cycle === 'annual');
}

async function changePlan(planId) {
  if (planId === 'enterprise') {
    toast('Please contact sales for Enterprise plans');
    return;
  }
  try {
    await api('/api/subscriptions', {
      method: 'POST',
      body: JSON.stringify({ planId, billingCycle: selectedCycle })
    });
    toast('Plan updated successfully');
    loadPage('dashboard');
  } catch (e) {
    toast(e.message, 'error');
  }
}

/* ===================== USAGE ===================== */
async function renderUsage() {
  pageTitle.textContent = 'Usage';
  let data = {};
  let history = [];
  try {
    data = await api('/api/usage');
    history = await api('/api/usage/history');
  } catch (e) { toast(e.message, 'error'); }

  const { usage = {}, limits = {}, overage = 0 } = data;

  content.innerHTML = `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="label">Overage This Period</div>
        <div class="value">${formatMoney(overage)}</div>
      </div>
      <div class="stat-card">
        <div class="label">API Calls</div>
        <div class="value">${formatNumber(usage.apiCalls)}</div>
      </div>
      <div class="stat-card">
        <div class="label">Storage</div>
        <div class="value">${usage.storageGB?.toFixed?.(1) ?? 0} GB</div>
      </div>
      <div class="stat-card">
        <div class="label">Compute Hours</div>
        <div class="value">${usage.computeHours?.toFixed?.(1) ?? 0}</div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Current Period Meters</h3></div>
      <div class="card-body">${renderMeters(usage, limits)}</div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Simulate Usage (Demo)</h3></div>
      <div class="card-body" style="display:flex;flex-wrap:wrap;gap:10px">
        <button class="btn secondary" onclick="simulateUsage('apiCalls', 500)">+500 API Calls</button>
        <button class="btn secondary" onclick="simulateUsage('apiCalls', 5000)">+5k API Calls</button>
        <button class="btn secondary" onclick="simulateUsage('storageGB', 2)">+2 GB Storage</button>
        <button class="btn secondary" onclick="simulateUsage('seats', 1)">+1 Seat</button>
        <button class="btn secondary" onclick="simulateUsage('computeHours', 10)">+10 Compute Hrs</button>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Usage History</h3></div>
      <div class="card-body" style="padding:0">
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>API Calls</th>
              <th>Storage (GB)</th>
              <th>Seats</th>
              <th>Compute Hrs</th>
            </tr>
          </thead>
          <tbody>
            ${history.length ? history.map(h => `
              <tr>
                <td>${h.period}</td>
                <td>${formatNumber(h.apiCalls)}</td>
                <td>${h.storageGB?.toFixed?.(1) ?? 0}</td>
                <td>${h.seats ?? 0}</td>
                <td>${h.computeHours?.toFixed?.(1) ?? 0}</td>
              </tr>
            `).join('') : '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:32px">No history yet</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

async function simulateUsage(metric, quantity) {
  try {
    await api('/api/usage', {
      method: 'POST',
      body: JSON.stringify({ metric, quantity })
    });
    toast(`Added ${quantity} ${metric}`);
    if (currentPage === 'usage' || currentPage === 'dashboard') {
      loadPage(currentPage);
    }
  } catch (e) {
    toast(e.message, 'error');
  }
}

/* ===================== INVOICES ===================== */
async function renderInvoices() {
  pageTitle.textContent = 'Invoices';
  let invoices = [];
  let preview = {};
  try {
    invoices = await api('/api/invoices');
    preview = await api('/api/invoices/preview', { method: 'POST' });
  } catch (e) { toast(e.message, 'error'); }

  content.innerHTML = `
    <div class="card">
      <div class="card-header"><h3>Current Period Preview</h3></div>
      <div class="card-body">
        <div class="stats-grid" style="margin-bottom:0">
          <div class="stat-card">
            <div class="label">Plan</div>
            <div class="value" style="font-size:1.25rem">${preview.plan || '—'}</div>
          </div>
          <div class="stat-card">
            <div class="label">Base</div>
            <div class="value" style="font-size:1.25rem">${formatMoney(preview.base)}</div>
          </div>
          <div class="stat-card">
            <div class="label">Overage</div>
            <div class="value" style="font-size:1.25rem">${formatMoney(preview.overage)}</div>
          </div>
          <div class="stat-card">
            <div class="label">Est. Total</div>
            <div class="value" style="font-size:1.25rem">${formatMoney(preview.total)}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Invoice History</h3></div>
      <div class="card-body" style="padding:0">
        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Period</th>
              <th>Subtotal</th>
              <th>Overage</th>
              <th>Total</th>
              <th>Status</th>
              <th>Issued</th>
            </tr>
          </thead>
          <tbody>
            ${invoices.length ? invoices.map(inv => `
              <tr>
                <td><strong>${inv.id}</strong></td>
                <td>${inv.period}</td>
                <td>${formatMoney(inv.subtotal)}</td>
                <td>${formatMoney(inv.overage)}</td>
                <td><strong>${formatMoney(inv.total)}</strong></td>
                <td><span class="badge ${inv.status === 'paid' ? 'success' : 'warning'}">${inv.status}</span></td>
                <td>${new Date(inv.issuedAt).toLocaleDateString()}</td>
              </tr>
            `).join('') : '<tr><td colspan="7" style="text-align:center;color:var(--muted);padding:32px">No invoices yet</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/* ===================== SETTINGS ===================== */
async function renderSettings() {
  pageTitle.textContent = 'Settings';
  let me = {};
  try { me = await api('/api/customers/me'); } catch (e) { toast(e.message, 'error'); }

  const c = me.customer || {};
  content.innerHTML = `
    <div class="card" style="max-width:520px">
      <div class="card-header"><h3>Account</h3></div>
      <div class="card-body">
        <div style="margin-bottom:16px">
          <div style="font-size:.8rem;color:var(--muted);margin-bottom:4px">Organization</div>
          <div style="font-weight:600">${c.name || '—'}</div>
        </div>
        <div style="margin-bottom:16px">
          <div style="font-size:.8rem;color:var(--muted);margin-bottom:4px">Email</div>
          <div style="font-weight:600">${c.email || '—'}</div>
        </div>
        <div style="margin-bottom:16px">
          <div style="font-size:.8rem;color:var(--muted);margin-bottom:4px">Current Plan</div>
          <div style="font-weight:600">${me.plan?.name || '—'} (${c.billingCycle || 'monthly'})</div>
        </div>
        <div style="margin-bottom:20px">
          <div style="font-size:.8rem;color:var(--muted);margin-bottom:4px">Period</div>
          <div style="font-weight:600">
            ${c.currentPeriodStart ? new Date(c.currentPeriodStart).toLocaleDateString() : '—'}
            →
            ${c.currentPeriodEnd ? new Date(c.currentPeriodEnd).toLocaleDateString() : '—'}
          </div>
        </div>
        <button class="btn secondary" onclick="cancelSub()">Cancel Subscription</button>
      </div>
    </div>
  `;
}

async function cancelSub() {
  if (!confirm('Are you sure you want to cancel your subscription?')) return;
  try {
    await api('/api/subscriptions/cancel', { method: 'POST' });
    toast('Subscription canceled');
    loadPage('dashboard');
  } catch (e) {
    toast(e.message, 'error');
  }
}

/* ===================== ROUTER ===================== */
async function loadPage(page) {
  currentPage = page;
  document.querySelectorAll('.nav').forEach(b => {
    b.classList.toggle('active', b.dataset.page === page);
  });

  if (page === 'dashboard') return renderDashboard();
  if (page === 'plans') return renderPlans();
  if (page === 'usage') return renderUsage();
  if (page === 'invoices') return renderInvoices();
  if (page === 'settings') return renderSettings();
}

// Nav
document.querySelectorAll('.nav').forEach(btn => {
  btn.onclick = () => loadPage(btn.dataset.page);
});

document.getElementById('refreshBtn').onclick = () => loadPage(currentPage);
document.getElementById('themeBtn').onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('dark', document.body.classList.contains('dark'));
};
if (localStorage.getItem('dark') === 'true') document.body.classList.add('dark');

// Expose
window.loadPage = loadPage;
window.changePlan = changePlan;
window.simulateUsage = simulateUsage;
window.setCycle = setCycle;
window.cancelSub = cancelSub;

// Init
loadPage('dashboard');
