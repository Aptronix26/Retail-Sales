import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("./daily-data.js", import.meta.url), "utf8");
const index = fs.readFileSync(new URL("./index.html", import.meta.url), "utf8");
const sandbox = { globalThis: {} };
vm.runInNewContext(source, sandbox);

const actuals = sandbox.globalThis.PROD_ACH_2454;
const rows = Object.values(actuals);
const metrics = ["revenue", "appleAcc", "nonAcc", "iphone", "mac", "ipad", "watch", "airpods", "license"];
const expectedTotals = {
  revenue: 1416685059.15,
  appleAcc: 32003817,
  nonAcc: 36754598.8,
  iphone: 9896,
  mac: 2311,
  ipad: 1111,
  watch: 749,
  airpods: 1436,
  license: 309
};

assert.equal(Object.keys(actuals).length, 69);
assert.ok(rows.every(row => row.date === "2026-08-21"));
assert.ok(rows.every(row => row.store && metrics.every(metric => Number.isFinite(Number(row[metric])))));
assert.ok(!("ecomtl" in actuals));
assert.ok(!("plfskc" in actuals));
for (const metric of metrics) {
  const total = rows.reduce((sum, row) => sum + Number(row[metric]), 0);
  assert.ok(Math.abs(total - expectedTotals[metric]) < 0.001, metric + " total mismatch");
}
assert.equal(sandbox.globalThis.PROD_DATASET_VERSION_2454, "aug2026-2026-08-21-v2455");
assert.equal(sandbox.globalThis.PROD_META_2454.achievementRows, 69);
assert.match(index, /daily-data\.js\?v=20260822-1/);
assert.ok(index.indexOf("daily-data.js?v=20260822-1") < index.indexOf("CLEAN PRODUCTION AUTH + DATA BOOTSTRAP"));

console.log("Daily MTD production data validated: 69 stores through 21 Aug 2026");
