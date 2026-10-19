import type { APIRoute } from 'astro';
import { subjectOptions } from '../../data/site';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX = 1000;

const json = (status: number, payload: Record<string, unknown>) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json(400, { ok: false, error: 'Invalid JSON body.' });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const subject = String(body.subject ?? '').trim();
  const message = String(body.message ?? '').trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = 'Name is required.';
  if (!EMAIL_RE.test(email)) errors.email = 'A valid email address is required.';
  if (!subjectOptions.includes(subject as never)) errors.subject = 'Please choose a subject.';
  if (message.length < 10 || message.length > MAX)
    errors.message = `Message must be 10–${MAX} characters.`;

  if (Object.keys(errors).length) {
    return json(400, { ok: false, errors });
  }

  // Honeypot: silently accept bot submissions without delivering.
  if (String(body.website ?? '').length > 0) {
    return json(202, { ok: true, delivered: false, reason: 'honeypot' });
  }

  const apiKey = import.meta.env.KNOCK_API_KEY;
  const workflow = import.meta.env.KNOCK_WORKFLOW ?? 'contact-form-submission';
  const recipient = import.meta.env.KNOCK_RECIPIENT ?? 'admin';

  if (!apiKey) {
    // Honest feedback: validated, but nothing was delivered.
    return json(202, { ok: true, delivered: false, reason: 'not_configured' });
  }

  try {
    const res = await fetch(`https://api.knock.app/v1/workflows/${workflow}/trigger`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipient,
        data: { name, email, subject, message, source: 'portfolio-contact-form' },
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('Knock delivery failed:', res.status, detail.slice(0, 400));
      return json(502, { ok: false, error: 'Delivery failed. Please email me directly.' });
    }

    return json(200, { ok: true, delivered: true });
  } catch (err) {
    console.error('Knock request error:', err);
    return json(502, { ok: false, error: 'Delivery failed. Please email me directly.' });
  }
};
