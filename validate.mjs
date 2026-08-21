import { readFile } from "node:fs/promises";

const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
const required = ["<!doctype", "<title", "viewport", "</body>", "</html>"];
const missing = required.filter((token) => !html.toLowerCase().includes(token));
if (missing.length) throw new Error(`Missing required HTML markers: ${missing.join(", ")}`);
if (html.includes("el('revTarget').value")) throw new Error("Unsafe form assignment regression detected");
for (const asset of ["ui-refresh.css", "ui-refresh.js"]) {
  if (!html.includes(asset)) throw new Error(`Missing UI refresh asset reference: ${asset}`);
}
console.log(`Validated index.html (${html.length.toLocaleString()} characters)`);
