import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// Edit this list any time. Remove an event here if the client does not need it.
const events = [
  { name: "Haldi", subtitle: "A golden beginning", description: "An intimate celebration filled with turmeric, blessings, laughter and family traditions.", motif: "✺" },
  { name: "Mehendi", subtitle: "Patterns of joy", description: "An afternoon of intricate mehendi, music and happy moments with our loved ones.", motif: "❋" },
  { name: "Sangeet", subtitle: "An evening of music", description: "A joyful evening of rhythm, dance and celebration as our families come together.", motif: "♫" },
  { name: "Wedding", subtitle: "The sacred union", description: "Join us as we exchange our vows and begin this beautiful journey together.", motif: "ॐ" }
];

function FloralDivider() {
  return <div className="floral-divider" aria-hidden="true"><span>✥</span><i /><span>❀</span><i /><span>✥</span></div>;
}

function App() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return (
      <main className="opening-screen">
        <img className="opening-art" src="/opening-generated.jpg" alt="Vijay and Rashmika wedding invitation" />
        <button className="open-invitation" type="button" aria-label="Open invitation" onClick={() => setOpened(true)} />
      </main>
    );
  }

  return (
    <main className="invitation-page">
      <nav className="invite-nav">
        <a href="#welcome">V & R</a>
        <div><a href="#events">Celebrations</a><a href="#venue">Venue</a></div>
      </nav>

      <section className="welcome-section" id="welcome">
        <div className="leaf leaf-left" aria-hidden="true">❧</div>
        <div className="leaf leaf-right" aria-hidden="true">❧</div>
        <p className="eyebrow">WITH THE BLESSINGS OF OUR FAMILIES</p>
        <div className="ornament">❋</div>
        <p className="eyebrow">WE INVITE YOU TO CELEBRATE</p>
        <h1>Vijay <span>&</span> Rashmika</h1>
        <FloralDivider />
        <p className="welcome-copy">Two hearts, two families and one beautiful beginning. Your presence will make our celebration complete.</p>
        <p className="date-line">26 · OCTOBER · 2026</p>
        <a className="scroll-link" href="#events">EXPLORE THE CELEBRATIONS <span>↓</span></a>
      </section>

      <section className="events-section" id="events">
        <p className="eyebrow">THE WEDDING FESTIVITIES</p>
        <h2>Celebrations</h2>
        <FloralDivider />
        <p className="section-intro">Every ritual tells a story. We would love for you to be part of ours.</p>
        <div className="event-list">
          {events.map((event, index) => (
            <article className="event-card" key={event.name}>
              <div className="event-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="event-motif" aria-hidden="true">{event.motif}</div>
              <div className="event-copy">
                <p className="event-kicker">A CELEBRATION OF LOVE</p>
                <h3>{event.name}</h3>
                <p className="event-subtitle">{event.subtitle}</p>
                <p>{event.description}</p>
                <span className="event-time">DATE & TIME TO BE ANNOUNCED</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="venue-section" id="venue">
        <div className="temple-mark" aria-hidden="true">⌂</div>
        <p className="eyebrow">THE CELEBRATION AWAITS</p>
        <h2>Udaipur</h2>
        <FloralDivider />
        <h3>ITC Mementos</h3>
        <p>Rajasthan, India</p>
        <p className="venue-date">26 October 2026</p>
        <p className="venue-note">We look forward to celebrating these special moments with you.</p>
        <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=ITC+Mementos+Udaipur" target="_blank" rel="noreferrer">VIEW VENUE ON MAP ↗</a>
      </section>

      <footer className="invite-footer">
        <div className="footer-ornament">❋ ❋ ❋</div>
        <p>WITH LOVE AND BLESSINGS</p>
        <h2>Vijay <span>&</span> Rashmika</h2>
        <p className="footer-small">WE CAN'T WAIT TO CELEBRATE WITH YOU</p>
        <button className="back-button" onClick={() => { setOpened(false); window.scrollTo(0, 0); }}>Back to cover</button>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
