import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the complete Iteration 0 homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Big digital help for/);
  assert.match(html, /Starting small/);
  assert.match(html, /Four skills/);
  assert.match(html, /You don.t need to know/);
  assert.match(html, /Concept projects/);
  assert.match(html, /Working together/);
  assert.match(html, /Start with what you need/);
  assert.match(html, /Why RBH/);
  assert.match(html, /Questions are a good start/);
  assert.match(html, /Let.s make the next step simple/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("keeps brand details and concept integrity explicit", async () => {
  const [page, brand] = await Promise.all([readFile(new URL("../app/page.tsx", import.meta.url), "utf8"), readFile(new URL("../config/brand.ts", import.meta.url), "utf8")]);
  assert.match(brand, /name: "RBH Design Studio"/);
  assert.match(brand, /whatsapp: ""/);
  assert.match(page, /These are concepts—not client work/);
  assert.doesNotMatch(page, /testimonial|award-winning|trusted by/i);
});
