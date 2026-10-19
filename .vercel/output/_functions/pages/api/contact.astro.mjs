import { s as subjectOptions } from '../../chunks/site_Bli7x5TF.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX = 1e3;
const json = (status, payload) => new Response(JSON.stringify(payload), {
  status,
  headers: { "Content-Type": "application/json" }
});
const POST = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { ok: false, error: "Invalid JSON body." });
  }
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  const errors = {};
  if (name.length < 2) errors.name = "Name is required.";
  if (!EMAIL_RE.test(email)) errors.email = "A valid email address is required.";
  if (!subjectOptions.includes(subject)) errors.subject = "Please choose a subject.";
  if (message.length < 10 || message.length > MAX)
    errors.message = `Message must be 10–${MAX} characters.`;
  if (Object.keys(errors).length) {
    return json(400, { ok: false, errors });
  }
  if (String(body.website ?? "").length > 0) {
    return json(202, { ok: true, delivered: false, reason: "honeypot" });
  }
  {
    return json(202, { ok: true, delivered: false, reason: "not_configured" });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
