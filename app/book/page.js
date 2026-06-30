import BookForm from '@/components/BookForm';

export default function BookPage() {
  return (
    <section className="page active">
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80')" }}
      >
        <div className="container ph-inner">
          <span className="eyebrow">Reserve your date</span>
          <h1>Book Now</h1>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Book Now</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="book-grid">
            <div className="reveal">
              <span className="eyebrow">Booking enquiry</span>
              <h2 className="heading" style={{ marginBottom: 10 }}>Tell Us About Your Date</h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.85, fontSize: 15.3, maxWidth: 520, marginBottom: 34 }}>
                Fill in the details below and our studio will follow up with availability, package
                options and next steps within one working day.
              </p>
              <BookForm />
            </div>

            <aside className="book-side reveal delay-1">
              <h4>Why Book Early</h4>
              <ul>
                <li><span>Weddings confirmed / season</span><b>8–10</b></li>
                <li><span>Average response time</span><b>Within 24 hrs</b></li>
                <li><span>Booking deposit</span><b>25%</b></li>
                <li><span>Planning calls included</span><b>2</b></li>
                <li><span>Gallery delivery</span><b>4–6 weeks</b></li>
              </ul>
              <p style={{ marginTop: 24, fontSize: 13.5, color: 'var(--gray)', lineHeight: 1.8 }}>
                Dates are held on a first-confirmed basis once the booking deposit is received.
                We&apos;re happy to pencil your date for up to seven days while you decide.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </section>
  );
}
