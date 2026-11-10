/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS harness for isolated TS module loading. */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

// Run the actual route, client helper, form handler and pixel together without
// making real subscriptions, sending email or polluting Meta's production data.
function setup(reply = () => Response.json({ success: true })) {
  const root = path.resolve(__dirname, "..");
  const cache = new Map();
  const upstream = [], notifications = [], navigation = [], states = [];
  const browser = {};
  let pathname = "/webinar";
  const fields = { firstName: "Test", lastName: "Person", email: "test@example.com", datum: "ons", _honey: "" };
  const NativeFormData = FormData;
  class BrowserFormData extends NativeFormData {
    constructor(form) {
      super();
      if (form) for (const [key, value] of Object.entries(form)) this.set(key, value);
    }
  }
  const context = vm.createContext({
    Response, Request, AbortSignal, FormData: BrowserFormData,
    window: browser,
    document: { createElement: () => ({}), head: { appendChild() {} } },
    fetch: async (url, options) => {
      if (url === "/api/webinar") {
        return load("app/api/webinar/route.ts").POST(new Request("https://example.com/api/webinar", options));
      }
      upstream.push({ url, options });
      return reply(url, options);
    },
  });
  function load(file) {
    if (cache.has(file)) return cache.get(file).exports;
    const loadedModule = { exports: {} };
    cache.set(file, loadedModule);
    const compiled = ts.transpileModule(fs.readFileSync(path.join(root, file), "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
    }).outputText;
    const localRequire = (id) => {
      if (id === "react") return {
        useState: (initial) => [initial, (value) => states.push(value)],
        useRef: (value) => ({ current: value }), useId: () => "test",
        useEffect: (callback) => callback(),
      };
      if (id === "next/navigation") return { useRouter: () => ({ push: (url) => navigation.push(url) }), usePathname: () => pathname };
      if (id === "next/link") return () => null;
      if (id === "@/lib/formsubmit") return { sendForm: async () => notifications.push(true) };
      if (id.startsWith("@/")) {
        const base = id.slice(2);
        return load(fs.existsSync(path.join(root, base + ".ts")) ? base + ".ts" : base + ".tsx");
      }
      return require(id);
    };
    vm.runInContext(`(function(require,module,exports){${compiled}\n})`, context, { filename: file })(localRequire, loadedModule, loadedModule.exports);
    return loadedModule.exports;
  }
  const form = (source = "ads", dark = false) => load("components/WebinarSignupForm.tsx").default({ source, dark });
  const submit = (element, values = fields) => element.props.onSubmit({ preventDefault() {}, currentTarget: values });
  const visit = (url) => { pathname = url; load("components/MetaPixel.tsx").default(); };
  const registrations = () => (browser.fbq?.queue || []).filter((args) => args[1] === "CompleteRegistration");
  return { load, form, submit, visit, registrations, browser, fields, upstream, notifications, navigation, states };
}

test("visits, rerenders and direct thank-you visits send only PageView to the intended pixel", () => {
  const app = setup();
  app.visit("/webinar"); app.visit("/webinar");
  app.form(); app.form("ads", true);
  app.visit("/webinar/anmald"); app.visit("/webinar/anmald");
  assert.equal(app.registrations().length, 0);
  assert.equal(app.browser.fbq.queue.filter((args) => args[1] === "PageView").length, 2);
  assert.equal(app.browser.fbq.queue[0][1], "1519376236089915");
});

for (const dark of [false, true]) test(`ads form dark=${dark}: waits for Brevo, counts once despite double submit`, async () => {
  let resolve;
  const app = setup(() => new Promise((done) => { resolve = done; }));
  const form = app.form("ads", dark);
  const pending = app.submit(form);
  await app.submit(form);
  // Request.json() crosses an asynchronous stream boundary before the upstream call.
  await new Promise(setImmediate);
  assert.equal(app.registrations().length, 0);
  assert.equal(app.upstream.length, 1);
  resolve(Response.json({ success: true }));
  await pending;
  await app.submit(form);
  assert.equal(app.registrations().length, 1);
  assert.equal(app.registrations()[0][2].status, true);
  assert.equal(app.registrations()[0][2].content_category, "Onsdag 18 november");
  assert.equal(app.upstream[0].options.body.get("WEBINAR_NOVEMBER_2026"), "2");
  assert.equal(app.upstream[0].options.body.get("OPT_IN"), "1");
  assert.equal(app.notifications.length, 1);
  assert.deepEqual(app.navigation, ["/webinar/anmald"]);
});

for (const [label, reply] of [
  ["Brevo validation error", () => Response.json({ success: false }, { status: 400 })],
  ["HTTP 200 with success:false", () => Response.json({ success: false })],
  ["unrecognized JSON", () => Response.json({ message: "ok" })],
  ["truthy but non-boolean success", () => Response.json({ success: "true" })],
  ["HTML instead of JSON", () => new Response("<html>error</html>")],
  ["upstream failure with success:true", () => Response.json({ success: true }, { status: 503 })],
  ["timeout/network error", () => { throw new Error("network"); }],
]) test(`${label}: no conversion, email notification or redirect; retry allowed`, async () => {
  const app = setup(reply), form = app.form();
  await app.submit(form); await app.submit(form);
  assert.equal(app.upstream.length, 2);
  assert.equal(app.registrations().length, 0);
  assert.equal(app.notifications.length, 0);
  assert.equal(app.navigation.length, 0);
  assert.ok(app.states.includes("error"));
});

test("organic signup keeps its own Brevo form and does not count a paid conversion", async () => {
  const app = setup();
  await app.submit(app.form("organic"));
  assert.equal(app.upstream[0].url, app.load("lib/webinar.ts").WEBINAR.brevoForms.organic + "?isAjax=1");
  assert.equal(app.registrations().length, 0);
  assert.deepEqual(app.navigation, ["/webinar/anmald"]);
});

test("broken pixel cannot prevent the thank-you redirect after accepted signup", async () => {
  const app = setup();
  app.browser.fbq = () => { throw new Error("blocked"); };
  await app.submit(app.form());
  assert.deepEqual(app.navigation, ["/webinar/anmald"]);
});

test("invalid input and honeypot are rejected before contacting Brevo", async () => {
  const app = setup();
  const valid = { source: "ads", firstName: "Test", lastName: "Person", email: "test@example.com", sessionId: "tis" };
  for (const payload of [null, [], { ...valid, source: "unknown" }, { ...valid, sessionId: "unknown" }, { ...valid, email: "bad" }, { ...valid, firstName: " " }, { ...valid, honeypot: "bot" }]) {
    const response = await app.load("app/api/webinar/route.ts").POST(new Request("https://example.com/api/webinar", { method: "POST", body: JSON.stringify(payload) }));
    assert.equal(response.status, 400);
    assert.equal((await response.json()).ok, false);
  }
  assert.equal(app.upstream.length, 0);
});
