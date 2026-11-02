import { useState } from 'react';
import Head from 'next/head';

const PHONE_DISPLAY = '+971 58 148 1826';
const PHONE_TEL = 'tel:+971581481826';
const WHATSAPP_BASE = 'https://wa.me/971581481826';
const EMAIL = 'info@nas-travels.com';
const OFFICE =
  'Bayat Complex, Office 118, Near Mamzar Center, Hor Al Anz (Alqeyada Metro Station), Dubai, U.A.E.';

const SERVICES = [
  {
    icon: '🛂',
    title: 'Visit Visa & Family Visa Assistance',
    text: 'Hassle-free Visit Visas and Family Visas — we handle the details so you can just enjoy the experience.',
  },
  {
    icon: '✈️',
    title: 'Airline Tickets & Tour Packages',
    text: 'Airline tickets and complete tour packages for your next trip, planned in comfort and style.',
  },
  {
    icon: '🚗',
    title: 'Luxury Rent A Car & ATA Service By Air',
    text: 'Luxury rent a car, plus ATA service by air — travel in absolute comfort and style.',
  },
  {
    icon: '🏜️',
    title: 'Desert Safaris, Cruise Tours & City Tours',
    text: 'Thrilling desert safaris, relaxing cruise tours and memorable city tours across the UAE.',
  },
];

const EXPERIENCES = [
  { icon: '🏜️', title: 'Desert Safari', style: 'grad-safari' },
  { icon: '🛥️', title: 'Cruise Tour', style: 'grad-cruise' },
  { icon: '🕌', title: 'Abu Dhabi City Tour', style: 'grad-abu' },
  { icon: '🏙️', title: 'Dubai City Tour', style: 'grad-dubai' },
  { icon: '🚗', title: 'Luxury Rent A Car', style: 'grad-car' },
  { icon: '✈️', title: 'Visas & Flights', style: 'grad-visa' },
];

const FAQS = [
  {
    q: 'Where is your office?',
    a: 'Bayat Complex, Office 118, Near Mamzar Center, Hor Al Anz (Alqeyada Metro Station), Dubai, U.A.E.',
  },
  {
    q: 'How do I book or enquire?',
    a: 'Call or WhatsApp us on +971 58 148 1826, email info@nas-travels.com, or use the enquiry form below — it opens a pre-written WhatsApp message to us.',
  },
  {
    q: 'What services do you offer?',
    a: 'Visit Visa & Family Visa Assistance, Airline Tickets & Tour Packages, Luxury Rent A Car & ATA Service By Air, Desert Safaris, Cruise Tours & City Tours — plus exclusive Abu Dhabi City Tours.',
  },
  {
    q: 'Do you handle every detail of the trip?',
    a: 'Yes — from visas and flights to cars, safaris and tours, we handle every detail of your travel so you can just enjoy the experience.',
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [name, setName] = useState('');
  const [service, setService] = useState(SERVICES[0].title);
  const [message, setMessage] = useState('');

  const whatsappLink = (presetService) => {
    const text = `Hello Noor Al Sama Tourism L.L.C, I would like to enquire about ${presetService}.`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
  };

  const handleEnquiry = (e) => {
    e.preventDefault();
    const text = `Hello Noor Al Sama Tourism L.L.C, my name is ${name || 'a visitor'} and I would like to enquire about ${service}. ${message}`;
    window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <Head>
        <title>
          Noor Al Sama Tourism L.L.C | Dubai Visit Visas, Desert Safaris, City Tours &amp; Luxury Rent A Car
        </title>
      </Head>

      <div className="topstrip">
        <span>
          📞 <a href={PHONE_TEL}>{PHONE_DISPLAY}</a> — Call / WhatsApp
        </span>
        <span>
          📧 <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </span>
        <span>🌐 www.nooralsamatour.com</span>
      </div>

      <header className="header">
        <a className="brand" href="#top">
          <span className="brand-mark">✈️</span>
          <span>
            <strong>Noor Al Sama Tourism</strong>
            <small>L.L.C — Dubai, UAE</small>
          </span>
        </a>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#experiences">Experiences</a>
          <a href="#booking">Booking</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn-whatsapp" href={WHATSAPP_BASE} target="_blank" rel="noreferrer">
          WhatsApp Us
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <p className="hero-kicker">✨ Dubai · United Arab Emirates</p>
          <h1>Noor Al Sama Tourism L.L.C</h1>
          <p className="hero-tagline">
            Your ultimate gateway to unforgettable journeys and seamless travel experiences in the
            UAE! ✈️🌍✨
          </p>
          <p className="hero-intro">
            From hassle-free Visit Visas and Family Visas to Luxury Rent A Car, thrilling Desert
            Safaris, City Tours, Cruise Tours, and exclusive Abu Dhabi City Tours — we handle every
            detail of your travel so you can just enjoy the experience. 🏖️🚗🏙️
          </p>
          <div className="hero-cta">
            <a className="btn btn-whatsapp btn-large" href={WHATSAPP_BASE} target="_blank" rel="noreferrer">
              📱 Plan My Trip on WhatsApp
            </a>
            <a className="btn btn-outline btn-large" href="#enquiry">
              Send an Enquiry
            </a>
          </div>
        </section>

        <section id="services" className="section">
          <h2>✨ Our Premium Services</h2>
          <p className="section-sub">Everything for your UAE trip, in one place.</p>
          <div className="grid">
            {SERVICES.map((s) => (
              <article className="card" key={s.title}>
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a className="card-link" href={whatsappLink(s.title)} target="_blank" rel="noreferrer">
                  Enquire about this →
                </a>
              </article>
            ))}
          </div>
          <div className="banner">
            <strong>🌟 Exclusive: Abu Dhabi City Tours</strong>
            <span> — a special highlight of our city tour range. Ask us on WhatsApp to plan yours.</span>
          </div>
        </section>

        <section id="experiences" className="section section-alt">
          <h2>🏖️ Experiences in the UAE</h2>
          <p className="section-sub">Deserts, cities, cruises, cars and visas — all handled for you.</p>
          <div className="grid">
            {EXPERIENCES.map((x) => (
              <article className={`tile ${x.style}`} key={x.title}>
                <div className="tile-icon">{x.icon}</div>
                <h3>{x.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Why travel with us?</h2>
          <div className="grid">
            <article className="card">
              <h3>✅ Hassle-free</h3>
              <p>Visas and bookings without the stress — we handle the details.</p>
            </article>
            <article className="card">
              <h3>🧳 Everything in one place</h3>
              <p>Visas, flights, tour packages, cars, safaris, cruises and city tours.</p>
            </article>
            <article className="card">
              <h3>💎 Comfort &amp; style</h3>
              <p>Travel in absolute comfort and style, from start to finish.</p>
            </article>
            <article className="card">
              <h3>📍 Based in Dubai</h3>
              <p>Visit us at Bayat Complex, Office 118, near Mamzar Center, Hor Al Anz.</p>
            </article>
          </div>
        </section>

        <section id="booking" className="section section-alt">
          <h2>How booking works</h2>
          <ol className="steps">
            <li>
              <strong>1. Enquire</strong>
              <p>WhatsApp, email or the form below.</p>
            </li>
            <li>
              <strong>2. Share your plan</strong>
              <p>Tell us the service, dates and travellers.</p>
            </li>
            <li>
              <strong>3. Confirm</strong>
              <p>We confirm your plan with you directly.</p>
            </li>
            <li>
              <strong>4. Travel</strong>
              <p>Enjoy the experience in comfort and style.</p>
            </li>
          </ol>
        </section>

        <section id="faq" className="section">
          <h2>Frequently asked questions</h2>
          <div className="faq">
            {FAQS.map((f, i) => (
              <div className="faq-item" key={f.q}>
                <button
                  className="faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                >
                  {f.q}
                  <span>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p className="faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        <section id="enquiry" className="section section-alt">
          <h2>📩 Send an enquiry</h2>
          <p className="section-sub">
            Fill this in and it opens a pre-written WhatsApp message to us — or email us directly.
          </p>
          <form className="form" onSubmit={handleEnquiry}>
            <label>
              Your name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Service
              <select value={service} onChange={(e) => setService(e.target.value)}>
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Abu Dhabi City Tour">Abu Dhabi City Tour</option>
              </select>
            </label>
            <label>
              Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your trip…"
                rows={4}
              />
            </label>
            <button className="btn btn-whatsapp btn-large" type="submit">
              Send via WhatsApp
            </button>
            <p className="form-note">
              Prefer email? <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </form>
        </section>

        <section id="contact" className="section">
          <h2>📍 Visit / Contact us</h2>
          <div className="contact-box">
            <p>
              <strong>Noor Al Sama Tourism L.L.C</strong>
            </p>
            <p>{OFFICE}</p>
            <p>
              📞 Call / WhatsApp:{' '}
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </p>
            <p>
              📧 Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <p>🌐 Website: www.nooralsamatour.com</p>
            <p>👉 Plan your next trip with us today and travel in absolute comfort and style!</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          <strong>Noor Al Sama Tourism L.L.C</strong> — Your ultimate gateway to unforgettable
          journeys and seamless travel experiences in the UAE!
        </p>
        <p>
          {OFFICE} · {PHONE_DISPLAY} · {EMAIL} · www.nooralsamatour.com
        </p>
      </footer>
    </>
  );
}
