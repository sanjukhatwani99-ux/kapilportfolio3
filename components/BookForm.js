'use client';
import { useState } from 'react';

export default function BookForm() {
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
          <label htmlFor="bName">Full Name</label>
          <input id="bName" type="text" required />
        </div>
        <div className="form-field">
          <label htmlFor="bEmail">Email Address</label>
          <input id="bEmail" type="email" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="bPhone">Phone Number</label>
          <input id="bPhone" type="tel" required />
        </div>
        <div className="form-field">
          <label htmlFor="bType">Event Type</label>
          <select id="bType" required defaultValue="">
            <option value="">Select an option</option>
            <option>Wedding Day</option>
            <option>Pre-Wedding Shoot</option>
            <option>Destination Wedding</option>
            <option>Corporate Event</option>
            <option>Wedding Film</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="bDate">Event Date</label>
          <input id="bDate" type="date" required />
        </div>
        <div className="form-field">
          <label htmlFor="bCity">Event City</label>
          <input id="bCity" type="text" placeholder="e.g. Ahmedabad" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="bMessage">Tell Us A Little More</label>
        <textarea id="bMessage" placeholder="Venue, guest count, number of days, anything else useful"></textarea>
      </div>
      <button type="submit" className="btn dark-text full">Submit Booking Enquiry</button>
      <p className={`form-note${sent ? ' show' : ''}`}>
        Thank you — your enquiry has been received. We&apos;ll confirm availability for your date shortly.
      </p>
    </form>
  );
}
