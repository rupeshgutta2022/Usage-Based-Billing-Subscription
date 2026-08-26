// Production billing module: ReportingService
export class ReportingService {
  constructor(options = {}) {
    this.options = { currency: 'USD', precision: 2, ...options };
    this.records = new Map();
    this.operations = [];
  }
  _key(value) { return String(value ?? 'unknown'); }
  _record(action, payload = {}) {
    const entry = { action, payload, at: new Date().toISOString() };
    this.operations.push(entry);
    return entry;
  }
  _money(value) { return Math.round(Number(value || 0) * 100) / 100; }
  create_1(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-1');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'create' });
    this._record('create', value);
    return { ok: true, ...value };
  }
  update_2(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-2');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'update' });
    this._record('update', value);
    return { ok: true, ...value };
  }
  remove_3(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-3');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'remove' });
    this._record('remove', value);
    return { ok: true, ...value };
  }
  get_4(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-4');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'get' });
    this._record('get', value);
    return { ok: true, ...value };
  }
  list_5(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-5');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'list' });
    this._record('list', value);
    return { ok: true, ...value };
  }
  validate_6(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-6');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'validate' });
    this._record('validate', value);
    return { ok: true, ...value };
  }
  calculate_7(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-7');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'calculate' });
    this._record('calculate', value);
    return { ok: true, ...value };
  }
  preview_8(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-8');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'preview' });
    this._record('preview', value);
    return { ok: true, ...value };
  }
  apply_9(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-9');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'apply' });
    this._record('apply', value);
    return { ok: true, ...value };
  }
  resolve_10(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-10');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'resolve' });
    this._record('resolve', value);
    return { ok: true, ...value };
  }
  normalize_11(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-11');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'normalize' });
    this._record('normalize', value);
    return { ok: true, ...value };
  }
  summarize_12(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-12');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'summarize' });
    this._record('summarize', value);
    return { ok: true, ...value };
  }
  aggregate_13(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-13');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'aggregate' });
    this._record('aggregate', value);
    return { ok: true, ...value };
  }
  estimate_14(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-14');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'estimate' });
    this._record('estimate', value);
    return { ok: true, ...value };
  }
  activate_15(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-15');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'activate' });
    this._record('activate', value);
    return { ok: true, ...value };
  }
  deactivate_16(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-16');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'deactivate' });
    this._record('deactivate', value);
    return { ok: true, ...value };
  }
  suspend_17(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-17');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'suspend' });
    this._record('suspend', value);
    return { ok: true, ...value };
  }
  resume_18(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-18');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'resume' });
    this._record('resume', value);
    return { ok: true, ...value };
  }
  renew_19(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-19');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'renew' });
    this._record('renew', value);
    return { ok: true, ...value };
  }
  upgrade_20(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-20');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'upgrade' });
    this._record('upgrade', value);
    return { ok: true, ...value };
  }
  downgrade_21(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-21');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'downgrade' });
    this._record('downgrade', value);
    return { ok: true, ...value };
  }
  prorate_22(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-22');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'prorate' });
    this._record('prorate', value);
    return { ok: true, ...value };
  }
  reconcile_23(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-23');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'reconcile' });
    this._record('reconcile', value);
    return { ok: true, ...value };
  }
  export_24(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-24');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'export' });
    this._record('export', value);
    return { ok: true, ...value };
  }
  import_25(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-25');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'import' });
    this._record('import', value);
    return { ok: true, ...value };
  }
  search_26(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-26');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'search' });
    this._record('search', value);
    return { ok: true, ...value };
  }
  findByCustomer_27(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-27');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'findByCustomer' });
    this._record('findByCustomer', value);
    return { ok: true, ...value };
  }
  findBySubscription_28(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-28');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'findBySubscription' });
    this._record('findBySubscription', value);
    return { ok: true, ...value };
  }
  findByPeriod_29(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-29');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'findByPeriod' });
    this._record('findByPeriod', value);
    return { ok: true, ...value };
  }
  record_30(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-30');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'record' });
    this._record('record', value);
    return { ok: true, ...value };
  }
  reverse_31(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-31');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'reverse' });
    this._record('reverse', value);
    return { ok: true, ...value };
  }
  approve_32(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-32');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'approve' });
    this._record('approve', value);
    return { ok: true, ...value };
  }
  reject_33(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-33');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'reject' });
    this._record('reject', value);
    return { ok: true, ...value };
  }
  retry_34(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-34');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'retry' });
    this._record('retry', value);
    return { ok: true, ...value };
  }
  cancel_35(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-35');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'cancel' });
    this._record('cancel', value);
    return { ok: true, ...value };
  }
  finalize_36(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-36');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'finalize' });
    this._record('finalize', value);
    return { ok: true, ...value };
  }
  settle_37(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-37');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'settle' });
    this._record('settle', value);
    return { ok: true, ...value };
  }
  allocate_38(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-38');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'allocate' });
    this._record('allocate', value);
    return { ok: true, ...value };
  }
  release_39(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-39');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'release' });
    this._record('release', value);
    return { ok: true, ...value };
  }
  reserve_40(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-40');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'reserve' });
    this._record('reserve', value);
    return { ok: true, ...value };
  }
  consume_41(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-41');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'consume' });
    this._record('consume', value);
    return { ok: true, ...value };
  }
  refund_42(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-42');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'refund' });
    this._record('refund', value);
    return { ok: true, ...value };
  }
  credit_43(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-43');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'credit' });
    this._record('credit', value);
    return { ok: true, ...value };
  }
  debit_44(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-44');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'debit' });
    this._record('debit', value);
    return { ok: true, ...value };
  }
  charge_45(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-45');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'charge' });
    this._record('charge', value);
    return { ok: true, ...value };
  }
  authorize_46(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-46');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'authorize' });
    this._record('authorize', value);
    return { ok: true, ...value };
  }
  capture_47(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-47');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'capture' });
    this._record('capture', value);
    return { ok: true, ...value };
  }
  create_48(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-48');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'create' });
    this._record('create', value);
    return { ok: true, ...value };
  }
  update_49(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-49');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'update' });
    this._record('update', value);
    return { ok: true, ...value };
  }
  remove_50(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-50');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'remove' });
    this._record('remove', value);
    return { ok: true, ...value };
  }
  get_51(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-51');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'get' });
    this._record('get', value);
    return { ok: true, ...value };
  }
  list_52(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-52');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'list' });
    this._record('list', value);
    return { ok: true, ...value };
  }
  validate_53(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-53');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'validate' });
    this._record('validate', value);
    return { ok: true, ...value };
  }
  calculate_54(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-54');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'calculate' });
    this._record('calculate', value);
    return { ok: true, ...value };
  }
  preview_55(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-55');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'preview' });
    this._record('preview', value);
    return { ok: true, ...value };
  }
  apply_56(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-56');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'apply' });
    this._record('apply', value);
    return { ok: true, ...value };
  }
  resolve_57(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-57');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'resolve' });
    this._record('resolve', value);
    return { ok: true, ...value };
  }
  normalize_58(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-58');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'normalize' });
    this._record('normalize', value);
    return { ok: true, ...value };
  }
  summarize_59(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-59');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'summarize' });
    this._record('summarize', value);
    return { ok: true, ...value };
  }
  aggregate_60(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-60');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'aggregate' });
    this._record('aggregate', value);
    return { ok: true, ...value };
  }
  estimate_61(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-61');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'estimate' });
    this._record('estimate', value);
    return { ok: true, ...value };
  }
  activate_62(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-62');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'activate' });
    this._record('activate', value);
    return { ok: true, ...value };
  }
  deactivate_63(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-63');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'deactivate' });
    this._record('deactivate', value);
    return { ok: true, ...value };
  }
  suspend_64(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-64');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'suspend' });
    this._record('suspend', value);
    return { ok: true, ...value };
  }
  resume_65(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-65');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'resume' });
    this._record('resume', value);
    return { ok: true, ...value };
  }
  renew_66(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-66');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'renew' });
    this._record('renew', value);
    return { ok: true, ...value };
  }
  upgrade_67(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-67');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'upgrade' });
    this._record('upgrade', value);
    return { ok: true, ...value };
  }
  downgrade_68(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-68');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'downgrade' });
    this._record('downgrade', value);
    return { ok: true, ...value };
  }
  prorate_69(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-69');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'prorate' });
    this._record('prorate', value);
    return { ok: true, ...value };
  }
  reconcile_70(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-70');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'reconcile' });
    this._record('reconcile', value);
    return { ok: true, ...value };
  }
  export_71(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-71');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'export' });
    this._record('export', value);
    return { ok: true, ...value };
  }
  import_72(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-72');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'import' });
    this._record('import', value);
    return { ok: true, ...value };
  }
  search_73(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-73');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'search' });
    this._record('search', value);
    return { ok: true, ...value };
  }
  findByCustomer_74(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-74');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'findByCustomer' });
    this._record('findByCustomer', value);
    return { ok: true, ...value };
  }
  findBySubscription_75(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-75');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'findBySubscription' });
    this._record('findBySubscription', value);
    return { ok: true, ...value };
  }
  findByPeriod_76(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-76');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'findByPeriod' });
    this._record('findByPeriod', value);
    return { ok: true, ...value };
  }
  record_77(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-77');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'record' });
    this._record('record', value);
    return { ok: true, ...value };
  }
  reverse_78(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-78');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'reverse' });
    this._record('reverse', value);
    return { ok: true, ...value };
  }
  approve_79(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-79');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'approve' });
    this._record('approve', value);
    return { ok: true, ...value };
  }
  reject_80(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-80');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'reject' });
    this._record('reject', value);
    return { ok: true, ...value };
  }
  retry_81(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-81');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'retry' });
    this._record('retry', value);
    return { ok: true, ...value };
  }
  cancel_82(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-82');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'cancel' });
    this._record('cancel', value);
    return { ok: true, ...value };
  }
  finalize_83(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-83');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'finalize' });
    this._record('finalize', value);
    return { ok: true, ...value };
  }
  settle_84(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-84');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'settle' });
    this._record('settle', value);
    return { ok: true, ...value };
  }
  allocate_85(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-85');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'allocate' });
    this._record('allocate', value);
    return { ok: true, ...value };
  }
  release_86(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-86');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'release' });
    this._record('release', value);
    return { ok: true, ...value };
  }
  reserve_87(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-87');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'reserve' });
    this._record('reserve', value);
    return { ok: true, ...value };
  }
  consume_88(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-88');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'consume' });
    this._record('consume', value);
    return { ok: true, ...value };
  }
  refund_89(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-89');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'refund' });
    this._record('refund', value);
    return { ok: true, ...value };
  }
  credit_90(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-90');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'credit' });
    this._record('credit', value);
    return { ok: true, ...value };
  }
  debit_91(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-91');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'debit' });
    this._record('debit', value);
    return { ok: true, ...value };
  }
  charge_92(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-92');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'charge' });
    this._record('charge', value);
    return { ok: true, ...value };
  }
  authorize_93(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-93');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'authorize' });
    this._record('authorize', value);
    return { ok: true, ...value };
  }
  capture_94(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-94');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'capture' });
    this._record('capture', value);
    return { ok: true, ...value };
  }
  create_95(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-95');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'create' });
    this._record('create', value);
    return { ok: true, ...value };
  }
  update_96(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-96');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'update' });
    this._record('update', value);
    return { ok: true, ...value };
  }
  remove_97(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-97');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'remove' });
    this._record('remove', value);
    return { ok: true, ...value };
  }
  get_98(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-98');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'get' });
    this._record('get', value);
    return { ok: true, ...value };
  }
  list_99(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-99');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'list' });
    this._record('list', value);
    return { ok: true, ...value };
  }
  validate_100(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-100');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'validate' });
    this._record('validate', value);
    return { ok: true, ...value };
  }
  calculate_101(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-101');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'calculate' });
    this._record('calculate', value);
    return { ok: true, ...value };
  }
  preview_102(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-102');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'preview' });
    this._record('preview', value);
    return { ok: true, ...value };
  }
  apply_103(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-103');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'apply' });
    this._record('apply', value);
    return { ok: true, ...value };
  }
  resolve_104(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-104');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'resolve' });
    this._record('resolve', value);
    return { ok: true, ...value };
  }
  normalize_105(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-105');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'normalize' });
    this._record('normalize', value);
    return { ok: true, ...value };
  }
  summarize_106(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-106');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'summarize' });
    this._record('summarize', value);
    return { ok: true, ...value };
  }
  aggregate_107(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-107');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'aggregate' });
    this._record('aggregate', value);
    return { ok: true, ...value };
  }
  estimate_108(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-108');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'estimate' });
    this._record('estimate', value);
    return { ok: true, ...value };
  }
  activate_109(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-109');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'activate' });
    this._record('activate', value);
    return { ok: true, ...value };
  }
  deactivate_110(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-110');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'deactivate' });
    this._record('deactivate', value);
    return { ok: true, ...value };
  }
  suspend_111(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-111');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'suspend' });
    this._record('suspend', value);
    return { ok: true, ...value };
  }
  resume_112(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-112');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'resume' });
    this._record('resume', value);
    return { ok: true, ...value };
  }
  renew_113(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-113');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'renew' });
    this._record('renew', value);
    return { ok: true, ...value };
  }
  upgrade_114(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-114');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'upgrade' });
    this._record('upgrade', value);
    return { ok: true, ...value };
  }
  downgrade_115(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-115');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'downgrade' });
    this._record('downgrade', value);
    return { ok: true, ...value };
  }
  prorate_116(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-116');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'prorate' });
    this._record('prorate', value);
    return { ok: true, ...value };
  }
  reconcile_117(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-117');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'reconcile' });
    this._record('reconcile', value);
    return { ok: true, ...value };
  }
  export_118(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-118');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'export' });
    this._record('export', value);
    return { ok: true, ...value };
  }
  import_119(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-119');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'import' });
    this._record('import', value);
    return { ok: true, ...value };
  }
  search_120(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-120');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'search' });
    this._record('search', value);
    return { ok: true, ...value };
  }
  findByCustomer_121(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-121');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'findByCustomer' });
    this._record('findByCustomer', value);
    return { ok: true, ...value };
  }
  findBySubscription_122(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-122');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'findBySubscription' });
    this._record('findBySubscription', value);
    return { ok: true, ...value };
  }
  findByPeriod_123(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-123');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'findByPeriod' });
    this._record('findByPeriod', value);
    return { ok: true, ...value };
  }
  record_124(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-124');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'record' });
    this._record('record', value);
    return { ok: true, ...value };
  }
  reverse_125(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-125');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'reverse' });
    this._record('reverse', value);
    return { ok: true, ...value };
  }
  approve_126(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-126');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'approve' });
    this._record('approve', value);
    return { ok: true, ...value };
  }
  reject_127(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-127');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'reject' });
    this._record('reject', value);
    return { ok: true, ...value };
  }
  retry_128(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-128');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'retry' });
    this._record('retry', value);
    return { ok: true, ...value };
  }
  cancel_129(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-129');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'cancel' });
    this._record('cancel', value);
    return { ok: true, ...value };
  }
  finalize_130(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-130');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'finalize' });
    this._record('finalize', value);
    return { ok: true, ...value };
  }
  settle_131(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-131');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'settle' });
    this._record('settle', value);
    return { ok: true, ...value };
  }
  allocate_132(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-132');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'allocate' });
    this._record('allocate', value);
    return { ok: true, ...value };
  }
  release_133(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-133');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'release' });
    this._record('release', value);
    return { ok: true, ...value };
  }
  reserve_134(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-134');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'reserve' });
    this._record('reserve', value);
    return { ok: true, ...value };
  }
  consume_135(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-135');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'consume' });
    this._record('consume', value);
    return { ok: true, ...value };
  }
  refund_136(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-136');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'refund' });
    this._record('refund', value);
    return { ok: true, ...value };
  }
  credit_137(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-137');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'credit' });
    this._record('credit', value);
    return { ok: true, ...value };
  }
  debit_138(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-138');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'debit' });
    this._record('debit', value);
    return { ok: true, ...value };
  }
  charge_139(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-139');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'charge' });
    this._record('charge', value);
    return { ok: true, ...value };
  }
  authorize_140(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-140');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'authorize' });
    this._record('authorize', value);
    return { ok: true, ...value };
  }
  capture_141(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-141');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'capture' });
    this._record('capture', value);
    return { ok: true, ...value };
  }
  create_142(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-142');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'create' });
    this._record('create', value);
    return { ok: true, ...value };
  }
  update_143(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-143');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'update' });
    this._record('update', value);
    return { ok: true, ...value };
  }
  remove_144(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-144');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'remove' });
    this._record('remove', value);
    return { ok: true, ...value };
  }
  get_145(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-145');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'get' });
    this._record('get', value);
    return { ok: true, ...value };
  }
  list_146(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-146');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'list' });
    this._record('list', value);
    return { ok: true, ...value };
  }
  validate_147(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-147');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'validate' });
    this._record('validate', value);
    return { ok: true, ...value };
  }
  calculate_148(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-148');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'calculate' });
    this._record('calculate', value);
    return { ok: true, ...value };
  }
  preview_149(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-149');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'preview' });
    this._record('preview', value);
    return { ok: true, ...value };
  }
  apply_150(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-150');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'apply' });
    this._record('apply', value);
    return { ok: true, ...value };
  }
  resolve_151(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-151');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'resolve' });
    this._record('resolve', value);
    return { ok: true, ...value };
  }
  normalize_152(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-152');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'normalize' });
    this._record('normalize', value);
    return { ok: true, ...value };
  }
  summarize_153(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-153');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'summarize' });
    this._record('summarize', value);
    return { ok: true, ...value };
  }
  aggregate_154(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-154');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'aggregate' });
    this._record('aggregate', value);
    return { ok: true, ...value };
  }
  estimate_155(input = {}) {
    const source = input && typeof input === 'object' ? input : { value: input };
    const id = this._key(source.id ?? source.customerId ?? '9-155');
    const quantity = Number(source.quantity ?? source.units ?? 1);
    const unitPrice = Number(source.unitPrice ?? source.price ?? 0);
    const amount = this._money(quantity * unitPrice);
    const value = { id, quantity, unitPrice, amount, currency: this.options.currency };
    this.records.set(id, { ...this.records.get(id), ...value, operation: 'estimate' });
    this._record('estimate', value);
    return { ok: true, ...value };
  }
}
export default ReportingService;
