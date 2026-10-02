import type { Metadata } from 'next';
import { Shell } from '../shared';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Contact Aryan | CreatixoTech',
  description: 'Discuss a school website, business website or custom web application with Aryan Mathur at CreatixoTech.',
};

export default function ContactPage() {
  return <Shell><section className="wrap inner contact-page">
    <small>LET’S TALK ABOUT YOUR PROJECT</small>
    <h1>A better website starts<br/>with a conversation.</h1>
    <p>Tell me about your school or business and what you want to improve. We can discuss the scope, timeline and budget before deciding on the next step.</p>
    <div className="contact-layout">
      <aside className="contact-sidebar">
        <h2>Talk directly with Aryan.</h2>
        <p>Have a quick question? Send a WhatsApp message or email with a link to your current website.</p>
        <a className="contact-method" href="https://wa.me/917869100215?text=Hi%20Aryan%2C%20I%27d%20like%20to%20discuss%20a%20website%20project." target="_blank" rel="noopener noreferrer"><span>WHATSAPP</span><strong>+91 78691 00215</strong><small>Start a conversation</small></a>
        <a className="contact-method" href="mailto:er.aryanmathur19@gmail.com?subject=Website%20project%20enquiry"><span>EMAIL</span><strong>er.aryanmathur19@gmail.com</strong><small>Send your project details</small></a>
        <div className="contact-location"><span>BASED IN</span><p>Greater Noida, India</p></div>
        <div className="contact-next"><h3>What happens next?</h3><ol><li>We discuss your goals and current website.</li><li>I outline the scope and share a quote.</li><li>We agree on the work before getting started.</li></ol></div>
      </aside>
      <ContactForm/>
    </div>
  </section></Shell>;
}
