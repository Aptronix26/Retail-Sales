globalThis.DASHBOARD_CONFIG = Object.freeze({
  id: "daily-mtd",
  title: "Retail Operations OS — Daily Morning / MTD",
  reporting: Object.freeze({
    label: "Achievement through 20 Aug 2026",
    asOf: "2026-08-20",
    elapsedPeriods: 20,
    totalPeriods: 31,
    remainingPeriods: 11,
    periodUnit: "day"
  }),
  governance: Object.freeze({
    source: "Embedded August target and MTD achievement workbooks",
    dataThrough: "20 Aug 2026",
    published: "22 Aug 2026",
    expectedStores: 69
  }),
  benchmarks: Object.freeze({ loanAttachPct: 25, tradeInPct: 10 }),
  dataClassification: "Internal business reporting"
});
