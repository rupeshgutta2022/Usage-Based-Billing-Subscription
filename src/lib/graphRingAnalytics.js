// AegisGuard Graph Ring & Billing Fraud Detection
class GraphRingAnalytics {
  constructor() {
    this.nodes = new Map();
  }

  addAccountLink(fromAccount, toAccount) {
    if (!this.nodes.has(fromAccount)) this.nodes.set(fromAccount, new Set());
    this.nodes.get(fromAccount).add(toAccount);
  }

  detectCycles() {
    const visited = new Set();
    const stack = new Set();
    const cycles = [];

    const dfs = (node, path) => {
      visited.add(node);
      stack.add(node);
      const neighbors = this.nodes.get(node) || new Set();

      for (const n of neighbors) {
        if (!visited.has(n)) {
          dfs(n, [...path, n]);
        } else if (stack.has(n)) {
          const idx = path.indexOf(n);
          cycles.push(path.slice(idx));
        }
      }
      stack.delete(node);
    };

    for (const node of this.nodes.keys()) {
      if (!visited.has(node)) dfs(node, [node]);
    }
    return cycles;
  }
}

module.exports = GraphRingAnalytics;
