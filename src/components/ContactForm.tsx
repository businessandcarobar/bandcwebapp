'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log('Contact form submitted:', Object.fromEntries(formData));
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-secondary">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-secondary">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-secondary">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        className="rounded-xl bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-md"
      >
        Send Message
      </button>

      {submitted && (
        <p role="status" className="text-sm text-accent">
          Thanks for reaching out — check the console for the submitted data (no backend yet).
        </p>
      )}
    </form>
  );
}
