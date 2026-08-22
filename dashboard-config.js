globalThis.DASHBOARD_CONFIG = Object.freeze({
  id: "daily-mtd",
  title: "Retail Operations OS — Daily Morning / MTD",
  reporting: Object.freeze({
    label: "Achievement through 21 Aug 2026",
    asOf: "2026-08-21",
    elapsedPeriods: 21,
    totalPeriods: 31,
    remainingPeriods: 10,
    periodUnit: "day"
  }),
  governance: Object.freeze({
    source: "August target + validated Daily MTD achievement workbook",
    dataThrough: "21 Aug 2026",
    published: "22 Aug 2026",
    expectedStores: 69
  }),
  benchmarks: Object.freeze({ loanAttachPct: 25, tradeInPct: 10 }),
  dataClassification: "Internal business reporting"
});
