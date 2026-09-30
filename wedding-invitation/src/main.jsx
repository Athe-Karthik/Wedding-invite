import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Heart, ArrowRight, MapPin, CalendarDays, Sparkles } from "lucide-react";
import "./styles.css";

function App() {
  const [bride, setBride] = useState("");
  const [groom, setGroom] = useState("");
  const [date, setDate] = useState("");
  const [showInvite, setShowInvite] = useState(false);

  const displayBride = bride.trim() || "Bride";
  const displayGroom = groom.trim() || "Groom";

  if (showInvite) {
    return (
      <main className="invite-shell">
        <section className="hero">
          <div className="hero-glow" />
          <div className="hero-content reveal">
            <span className="eyebrow">Together with their families</span>
            <div className="tiny-heart"><Heart size={16} fill="currentColor" /></div>
            <h1>{displayBride}</h1>
            <span className="ampersand">&</span>
            <h1>{displayGroom}</h1>
            <p className="hero-copy">invite you to celebrate their beautiful beginning.</p>
            {date && (
              <div className="date-pill">
                <CalendarDays size={17} />
                <span>{new Date(date + "T00:00:00").toLocaleDateString("en-IN", {
                  day: "numeric", month: "long", year: "numeric"
                })}</span>
              </div>
            )}
          </div>
          <button className="scroll-hint" onClick={() => document.getElementById("details")?.scrollIntoView({behavior:"smooth"})}>
            <span>Explore invitation</span>
            <ArrowRight size={16} />
          </button>
        </section>

        <section id="details" className="details">
          <div className="section-heading">
            <span className="eyebrow">The celebration</span>
            <h2>A day to remember</h2>
            <p>Come celebrate love, laughter and a new chapter with us.</p>
          </div>

          <div className="event-card">
            <div className="icon-wrap"><Sparkles size={22} /></div>
            <div>
              <span className="card-label">Wedding Ceremony</span>
              <h3>{date ? new Date(date + "T00:00:00").toLocaleDateString("en-IN", {weekday:"long", day:"numeric", month:"long"}) : "The wedding day"}</h3>
              <p>10:00 AM onwards</p>
            </div>
          </div>

          <div className="event-card">
            <div className="icon-wrap"><MapPin size={22} /></div>
            <div>
              <span className="card-label">Venue</span>
              <h3>Our Wedding Venue</h3>
              <p>Hyderabad, Telangana</p>
            </div>
          </div>

          <div className="closing">
            <Heart size={20} fill="currentColor" />
            <p>We can't wait to celebrate with you.</p>
            <strong>{displayBride} & {displayGroom}</strong>
          </div>

          <button className="back-button" onClick={() => setShowInvite(false)}>Edit invitation</button>
        </section>
      </main>
    );
  }

  return (
    <main className="creator-shell">
      <nav className="topbar">
        <div className="brand"><span className="brand-mark">W</span> wedence</div>
        <span className="free-badge">Free · No signup</span>
      </nav>

      <section className="creator">
        <div className="creator-inner">
          <div className="intro reveal">
            <div className="mini-flower">✦</div>
            <span className="eyebrow">Wedding invitation</span>
            <h1>Let's make<br /><em>your invite.</em></h1>
            <p>Enter a few details and see your invitation come to life.</p>
          </div>

          <div className="form-card reveal-delay">
            <label>
              <span>Bride's name</span>
              <input value={bride} onChange={e => setBride(e.target.value)} placeholder="Enter bride's name" />
            </label>

            <label>
              <span>Groom's name</span>
              <input value={groom} onChange={e => setGroom(e.target.value)} placeholder="Enter groom's name" />
            </label>

            <label>
              <span>Wedding date <small>(optional)</small></span>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            </label>

            <button className="primary" onClick={() => setShowInvite(true)}>
              See your invite <ArrowRight size={18} />
            </button>
          </div>

          <p className="footer-note">Made for your special day <Heart size={13} fill="currentColor" /></p>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
