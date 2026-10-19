import { useState } from 'react';
import Ico from './Ico';

interface Props {
  subjects: string[];
  toEmail: string;
}

type Errors = Partial<Record<'name' | 'email' | 'subject' | 'message', string>>;
type Phase = 'idle' | 'sending' | 'sent' | 'validated' | 'failed';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX = 1000;

/**
 * Contact form with client validation, loading state and honest delivery
 * feedback: success when the mail workflow delivered, a pre-filled mailto
 * fallback when the deployment has no email provider configured yet.
 */
export default function ContactForm({ subjects, toEmail }: Props) {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [phase, setPhase] = useState<Phase>('idle');
  const [serverError, setServerError] = useState('');
  const [websiteValue, setWebsiteValue] = useState('');

  function validate(): Errors {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = 'Please tell me your name.';
    if (!EMAIL_RE.test(values.email.trim())) e.email = 'Please enter a valid email address.';
    if (!values.subject) e.subject = 'Pick a subject so I know the context.';
    const len = values.message.trim().length;
    if (len < 10) e.message = 'A little more detail helps — 10 characters minimum.';
    if (len > MAX) e.message = `Keep it under ${MAX} characters.`;
    return e;
  }

  function set<K extends keyof typeof values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key as keyof Errors]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(ev: { preventDefault: () => void }) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    setServerError('');
    if (Object.keys(e).length) {
      const first = document.querySelector<HTMLElement>('[aria-invalid="true"]');
      first?.focus();
      return;
    }

    setPhase('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, website: websiteValue }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        delivered?: boolean;
        error?: string;
      };

      if (res.ok && data.delivered) setPhase('sent');
      else if (res.ok && data.delivered === false) setPhase('validated');
      else {
        setPhase('failed');
        setServerError(data.error ?? 'Something went wrong while sending. Please email me directly.');
      }
    } catch {
      setPhase('failed');
      setServerError('Network error — please email me directly or try again.');
    }
  }

  const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(
    `[Portfolio] ${values.subject || 'Hello'} — ${values.name}`
  )}&body=${encodeURIComponent(`${values.message}\n\n— ${values.name}\n${values.email}`)}`;

  if (phase === 'sent') {
    return (
      <div id="contact-form" className="card rise-in scroll-mt-28 p-8 text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-500">
          <Ico name="check" className="h-8 w-8" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-extrabold text-navy-950">Message sent!</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-navy-500">
          Thanks {values.name.split(' ')[0]} — your message was delivered. I'll get back to you as soon as
          possible.
        </p>
        <button
          type="button"
          className="btn-ghost mt-6 !py-2.5 text-sm"
          onClick={() => {
            setValues({ name: '', email: '', subject: '', message: '' });
            setPhase('idle');
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  if (phase === 'validated') {
    return (
      <div id="contact-form" className="card rise-in scroll-mt-28 p-8 text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-amber-50 text-amber-500">
          <Ico name="alert" className="h-8 w-8" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-extrabold text-navy-950">Almost there</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-navy-500">
          Your message passed validation, but this deployment doesn't have an email provider connected yet —
          so I can't claim it was delivered. Send it straight to my inbox instead:
        </p>
        <a href={mailto} className="btn-primary mt-6 !py-2.5 text-sm">
          <Ico name="mail" className="h-4 w-4" /> Open in your mail app
        </a>
        <button
          type="button"
          className="ml-3 btn-ghost !py-2.5 text-sm"
          onClick={() => setPhase('idle')}
        >
          Back
        </button>
      </div>
    );
  }

  const field =
    'w-full rounded-2xl border border-ice-200 bg-ice-50/60 py-3 pl-11 pr-4 text-sm text-navy-900 placeholder:text-navy-300 transition focus:border-brand-400 focus:bg-white focus:outline-none';

  return (
    <form
      id="contact-form"
      onSubmit={onSubmit}
      noValidate
      className="card scroll-mt-28 p-6 sm:p-7"
      aria-busy={phase === 'sending'}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-aqua-400 text-white shadow-[0_14px_26px_-14px_rgba(29,110,245,0.9)]">
          <Ico name="send" className="h-5 w-5" />
        </span>
        <div>
          <h2 className="font-display text-xl font-extrabold text-navy-950">Send me a message</h2>
          <p className="text-xs text-navy-400">I'll get back to you as soon as possible. Let's start a conversation!</p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-[0.78rem] font-bold text-navy-700">
            Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Ico name="user" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
            <input
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              value={values.name}
              onChange={(e) => set('name', e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'cf-name-err' : undefined}
              className={field}
            />
          </div>
          {errors.name && <p id="cf-name-err" className="mt-1 text-xs font-semibold text-rose-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-[0.78rem] font-bold text-navy-700">
            Email <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Ico name="mail" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
            <input
              id="cf-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your.email@example.com"
              value={values.email}
              onChange={(e) => set('email', e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'cf-email-err' : undefined}
              className={field}
            />
          </div>
          {errors.email && <p id="cf-email-err" className="mt-1 text-xs font-semibold text-rose-500">{errors.email}</p>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="cf-subject" className="mb-1.5 block text-[0.78rem] font-bold text-navy-700">
            Subject <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Ico name="file" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
            <select
              id="cf-subject"
              name="subject"
              value={values.subject}
              onChange={(e) => set('subject', e.target.value)}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'cf-subject-err' : undefined}
              className={`${field} appearance-none pr-10`}
            >
              <option value="">What's this about?</option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <Ico name="chevron-down" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
          </div>
          {errors.subject && (
            <p id="cf-subject-err" className="mt-1 text-xs font-semibold text-rose-500">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <div className="mb-1.5 flex items-baseline justify-between">
            <label htmlFor="cf-message" className="block text-[0.78rem] font-bold text-navy-700">
              Message <span className="text-rose-500">*</span>
            </label>
            <span
              className={`text-[0.68rem] font-semibold tabular-nums ${
                values.message.length > MAX ? 'text-rose-500' : 'text-navy-300'
              }`}
              aria-live="polite"
            >
              {values.message.length}/{MAX}
            </span>
          </div>
          <div className="relative">
            <Ico name="message" className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-navy-300" />
            <textarea
              id="cf-message"
              name="message"
              rows={5}
              placeholder={'Tell me more...\n(your message, project idea, opportunity, etc.)'}
              value={values.message}
              onChange={(e) => set('message', e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'cf-message-err' : undefined}
              className={`${field} resize-none py-3`}
            />
          </div>
          {errors.message && (
            <p id="cf-message-err" className="mt-1 text-xs font-semibold text-rose-500">{errors.message}</p>
          )}
        </div>

        {phase === 'failed' && (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-3.5 text-xs font-semibold text-rose-600" role="alert">
            {serverError}
          </div>
        )}

        <button type="submit" disabled={phase === 'sending'} className="btn-primary w-full disabled:opacity-70">
          {phase === 'sending' ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Sending…
            </>
          ) : (
            <>
              <Ico name="send" className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>

        <p className="flex items-center justify-center gap-2 text-center text-[0.7rem] text-navy-400">
          <Ico name="lock" className="h-3.5 w-3.5" />
          I'll never share your information with anyone else.
        </p>

        {/* Honeypot — invisible to humans, catches naive bots. */}
        <input
          type="text"
          name="website"
          value={websiteValue}
          onChange={(e) => setWebsiteValue(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
      </div>
    </form>
  );
}
