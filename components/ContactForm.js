'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 6000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cName">Full Name</label>
          <input id="cName" type="text" required />
        </div>
        <div className="form-field">
          <label htmlFor="cEmail">Email Address</label>
          <input id="cEmail" type="email" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cPhone">Phone Number</label>
          <input id="cPhone" type="tel" />
        </div>
        <div className="form-field">
          <label htmlFor="cSubject">Subject</label>
          <input id="cSubject" type="text" placeholder="e.g. Wedding photography enquiry" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="cMessage">Message</label>
        <textarea id="cMessage" required></textarea>
      </div>
      <button type="submit" className="btn dark-text full">Send Message</button>
      <p className={`form-note${sent ? ' show' : ''}`}>
        Thank you — your message has been noted. Our studio will reply within one working day.
      </p>
    </form>
  );
}
