'use client';
import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus('sending');
    const data = new FormData(form);
    const body = new URLSearchParams();
    for (const [name, value] of data.entries()) body.append(name, String(value));
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }
  if (status === 'success') return <div className="enquiry-form form-success" role="status"><span className="success-mark" aria-hidden="true">✓</span><h2>Your enquiry has been sent.</h2><p>Thanks for sharing your project. Aryan will use your contact details to get in touch.</p><button className="button" type="button" onClick={() => setStatus('idle')}>Send another enquiry</button></div>;
  return <form className="enquiry-form" name="project-enquiry" method="POST" onSubmit={submit} aria-busy={status === 'sending'}>
    <input type="hidden" name="form-name" value="project-enquiry"/>
    <div hidden><label>Leave this field empty<input name="bot-field" tabIndex={-1} autoComplete="off"/></label></div>
    <h2>Tell me what you have in mind.</h2><p className="form-intro">A few details are enough to get started. Fields marked * are required.</p>
    <div className="form-grid">
      <label>Your name *<input name="name" autoComplete="name" required maxLength={100} placeholder="Your full name"/></label>
      <label>School or business name *<input name="organisation" autoComplete="organization" required maxLength={150} placeholder="Organisation name"/></label>
      <label>Email address *<input type="email" name="email" autoComplete="email" required maxLength={254} placeholder="you@example.com"/></label>
      <label>Phone / WhatsApp<input type="tel" name="phone" autoComplete="tel" maxLength={30} placeholder="Your number with country code"/></label>
    </div>
    <label>What do you need? *<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>School website</option><option>Business website</option><option>Website redesign</option><option>Web app or enquiry dashboard</option><option>Website updates and maintenance</option><option>Not sure yet</option></select></label>
    <label>Current website<input type="url" name="website" autoComplete="url" maxLength={500} placeholder="https://yourwebsite.com"/></label>
    <label>Project details *<textarea name="message" required minLength={10} maxLength={5000} rows={5} placeholder="What would you like to build or improve? Include your timeline if you have one."/></label>
    <p className="form-privacy">Your details will be used to respond to this enquiry.</p>
    {status === 'error' && <p className="form-error" role="alert">Your enquiry could not be sent. Please try again, or contact Aryan by email or WhatsApp above.</p>}
    <button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send project enquiry'}</button>
  </form>;
}
