/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS harness for isolated TS module loading. */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

// Runs the real booking tracker and /api/strategisamtal route against a fake
// Brevo, so no real contacts are created and no Meta events are sent.
function setup(reply = () => Response.json({ success: true })) {
  const root = path.resolve(__dirname, "..");
  const cache = new Map();
  const upstream = [], pixel = [], storage = new Map();
  const browser = {
    fbq: (...args) => pixel.push(args),
    localStorage: { getItem: (k) => storage.get(k) ?? null, setItem: (k, v) => storage.set(k, v) },
  };
  const pending = [];
  const context = vm.createContext({
    Response, Request, AbortSignal, FormData, window: browser,
    document: { createElement: () => ({}), head: { appendChild() {} } },
    fetch: (url, options) => {
      if (url === "/api/strategisamtal") {
        const p = load("app/api/strategisamtal/route.ts").POST(new Request("https://example.com/api/strategisamtal", options));
        pending.push(p);
        return p;
      }
      upstream.push({ url, body: options.body });
      return Promise.resolve(reply(url, options));
    },
  });
  function load(file) {
    if (cache.has(file)) return cache.get(file).exports;
    const m = { exports: {} };
    cache.set(file, m);
    const compiled = ts.transpileModule(fs.readFileSync(path.join(root, file), "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
    }).outputText;
    const req = (id) => {
      if (id === "react") return { useEffect: (cb) => cb() };
      if (id.startsWith("@/")) {
        const base = id.slice(2);
        return load(fs.existsSync(path.join(root, base + ".ts")) ? base + ".ts" : base + ".tsx");
      }
      return require(id);
    };
    vm.runInContext(`(function(require,module,exports){${compiled}\n})`, context, { filename: file })(req, m, m.exports);
    return m.exports;
  }
  const settle = async () => { await Promise.all(pending); await new Promise((r) => setTimeout(r, 0)); };
  const visit = (props) => load("components/BookingTracker.tsx").default(props);
  return { upstream, pixel, storage, visit, settle, load };
}

const events = (pixel) => pixel.filter((a) => a[0] === "track").map((a) => a[1]);

test("booking redirect: Meta Schedule+Lead and one Brevo signup; reload does nothing", async () => {
  const t = setup();
  t.visit({ bookingId: "abc", firstName: "Anna", email: "anna@example.com" });
  await t.settle();
  assert.deepEqual(events(t.pixel).filter((e) => e !== "PageView"), ["Schedule", "Lead"]);
  assert.equal(t.upstream.length, 1);
  assert.match(t.upstream[0].url, /sibforms\.com\/serve\/MUIFAInvx.*\?isAjax=1$/);
  assert.equal(t.upstream[0].body.get("EMAIL"), "anna@example.com");
  assert.equal(t.upstream[0].body.get("FIRSTNAME"), "Anna");

  t.visit({ bookingId: "abc", firstName: "Anna", email: "anna@example.com" });
  await t.settle();
  assert.equal(events(t.pixel).filter((e) => e === "Schedule").length, 1);
  assert.equal(t.upstream.length, 1);
});

test("email-link visit (no booking id) sends nothing", async () => {
  const t = setup();
  t.visit({ bookingId: "", firstName: "Anna", email: "anna@example.com" });
  await t.settle();
  assert.equal(t.upstream.length, 0);
  assert.equal(events(t.pixel).filter((e) => e === "Schedule").length, 0);
});

test("Brevo rejection is retried on the next visit, Meta is not counted twice", async () => {
  let ok = false;
  const t = setup(() => Response.json({ success: ok }));
  t.visit({ bookingId: "x1", firstName: "", email: "b@example.com" });
  await t.settle();
  ok = true;
  t.visit({ bookingId: "x1", firstName: "", email: "b@example.com" });
  await t.settle();
  assert.equal(t.upstream.length, 2);
  assert.equal(events(t.pixel).filter((e) => e === "Schedule").length, 1);
  assert.equal(t.storage.get("brevo-booking-x1"), "1");
});

test("route rejects invalid email before contacting Brevo", async () => {
  const t = setup();
  const res = await t.load("app/api/strategisamtal/route.ts").POST(
    new Request("https://example.com/api/strategisamtal", { method: "POST", body: JSON.stringify({ email: "nope" }) }),
  );
  assert.equal(res.status, 400);
  assert.equal(t.upstream.length, 0);
});
