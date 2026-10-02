import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowUpRight, CalendarDays, Clock3, Heart, MapPin, Music2, Share2, Sparkles } from "lucide-react";
import "./styles.css";

const couple = { bride: "Drashti", groom: "Akash", date: "Wedding date to be announced", venue: "Venue details to follow" };
const events = [
  { day: "01", name: "Haldi", time: "Date & time to be announced", note: "A morning of sunshine, turmeric, laughter and blessings.", icon: "✿" },
  { day: "02", name: "Mehendi", time: "Date & time to be announced", note: "Beautiful patterns, music and memories with our favourite people.", icon: "❋" },
  { day: "03", name: "Sangeet", time: "Date & time to be announced", note: "An evening filled with rhythm, dance and joyful celebrations.", icon: "♫" },
  { day: "04", name: "The Wedding", time: "Date & time to be announced", note: "The sacred beginning of a lifetime together. Be there for our vows.", icon: "♡" }
];
const photos = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=85", alt: "A romantic wedding celebration" },
  { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1100&q=85", alt: "Wedding couple celebrating together" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1100&q=85", alt: "Wedding ceremony with flowers" }
];

function FloralRule() { return <div className="floral-rule" aria-hidden="true"><i/><span>✿</span><b>✧</b><span>✿</span><i/></div>; }
function Lotus({ className = "" }) { return <svg className={className} viewBox="0 0 140 70" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.25"><path d="M70 62C43 48 39 23 70 8c31 15 27 40 0 54Z"/><path d="M70 62C28 56 14 35 29 22c19 1 34 17 41 40Z"/><path d="M70 62c42-6 56-27 41-40-19 1-34 17-41 40Z"/><path d="M70 62C51 39 54 19 70 8c16 11 19 31 0 54Z"/><path d="M18 63h104M34 68h72"/></g></svg>; }

function App() {
  const [opened, setOpened] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const share = async () => {
    const text = "You're invited to celebrate the wedding of Akash & Drashti. More details coming soon!";
    try { if (navigator.share) await navigator.share({ title: "Akash & Drashti", text, url: location.href }); else { await navigator.clipboard.writeText(location.href); setCopied(true); window.setTimeout(() => setCopied(false), 2200); } } catch {}
  };

  if (!opened) return (
    <main className="cover-screen">
      <div className="cover-grain"/>
      <div className="cover-frame">
        <div className="corner corner-tl">❧</div><div className="corner corner-tr">❧</div><div className="corner corner-bl">❧</div><div className="corner corner-br">❧</div>
        <div className="cover-topline"><span>॥ श्री गणेशाय नमः ॥</span><span>AN INVITATION TO CELEBRATE LOVE</span></div>
        <div className="cover-art" aria-hidden="true">
          <div className="sun-halo"/><div className="cloud cloud-one"/><div className="cloud cloud-two"/>
          <div className="temple"><div className="temple-flag">⚑</div><div className="temple-spire"/><div className="temple-roof"/><div className="temple-body"><div className="temple-door"/></div><div className="temple-steps"/></div>
          <div className="cover-hills"/>
          <div className="cover-flower flower-a">✿</div><div className="cover-flower flower-b">✿</div>
        </div>
        <div className="cover-names"><p>TOGETHER WITH THEIR FAMILIES</p><h1>{couple.groom}<em>&</em>{couple.bride}</h1><div className="cover-date">JOYFULLY INVITE YOU TO SHARE IN THEIR WEDDING CELEBRATION</div></div>
        <button className="open-btn" onClick={() => { setOpened(true); window.scrollTo(0,0); }}>OPEN INVITATION <ArrowDown size={15}/></button>
        <div className="cover-bottom"><span>WITH LOVE</span><span>✧</span><span>AND BLESSINGS</span></div>
      </div>
    </main>
  );

  return (
    <main className="site-shell">
      <header className="site-nav">
        <a className="brand" href="#home" aria-label="Back to top">A <i>&</i> D<span>✧</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">{menuOpen ? "CLOSE" : "MENU"} <span>☰</span></button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>{[["Story","#story"],["Celebrations","#events"],["Gallery","#gallery"],["Details","#details"]].map(([label,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}</nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-backdrop"/>
        <div className="hero-arch">
          <div className="arch-garland garland-left">❧</div><div className="arch-garland garland-right">❧</div>
          <div className="hero-copy"><p className="eyebrow">A CELEBRATION OF FOREVER</p><div className="hero-symbol">॥ श्री ॥</div><h1>{couple.groom}<span>&</span>{couple.bride}</h1><p className="hero-invite">With the blessings of our families, we invite you to join us as we begin our forever.</p><FloralRule/><p className="hero-date">{couple.date}</p><a className="text-link" href="#story">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
        </div>
        <div className="hero-caption">TWO SOULS · ONE BEAUTIFUL JOURNEY</div>
      </section>

      <section className="story-section section-pad" id="story">
        <div className="section-kicker">A NOTE FROM OUR HEARTS</div><h2>With joyful hearts,<br/><em>we invite you</em></h2><FloralRule/>
        <p className="story-text">Some moments become memories, and some moments become the beginning of a lifetime. As our families come together and our story unfolds into a new chapter, your presence and blessings would mean the world to us.</p>
        <p className="signature">With love, <span>{couple.groom} & {couple.bride}</span></p>
        <Lotus className="lotus"/>
      </section>

      <section className="garden-section">
        <div className="garden-image" role="img" aria-label="A lush garden filled with flowers"/>
        <div className="garden-plaque"><span>OUR SPECIAL DAY</span><b>Made more beautiful<br/>with you by our side</b><i>✧</i></div>
      </section>

      <section className="events-section section-pad" id="events">
        <div className="section-kicker">THE WEDDING FESTIVITIES</div><h2>Days of <em>celebration</em></h2><FloralRule/>
        <p className="section-lead">A little music, a lot of laughter, age-old traditions and memories to last forever. Come celebrate every moment with us.</p>
        <div className="event-grid">{events.map(event=><article className="event-card" key={event.name}><div className="event-top"><span>{event.day}</span><i>{event.icon}</i></div><h3>{event.name}</h3><p>{event.note}</p><div className="event-time"><CalendarDays size={14}/>{event.time}</div></article>)}</div>
      </section>

      <section className="couple-section" id="gallery">
        <div className="couple-photo" style={{backgroundImage:"url('https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1800&q=85')"}}/>
        <div className="couple-overlay"><span>THE BRIDE & THE GROOM</span><h2>Two hearts.<br/><em>One promise.</em></h2><p>And a lifetime of little moments waiting to happen.</p></div>
      </section>

      <section className="gallery-section section-pad">
        <div className="section-kicker">A FEW FRAMES OF FOREVER</div><h2>Love in <em>every detail</em></h2><FloralRule/>
        <div className="photo-grid">{photos.map((photo,i)=><figure key={photo.src} className={"photo photo-"+i}><img src={photo.src} alt={photo.alt} loading="lazy"/><figcaption>✧</figcaption></figure>)}</div>
      </section>

      <section className="countdown-section">
        <div className="countdown-decor">✿</div><p className="section-kicker">UNTIL WE SAY “I DO”</p><h2>The countdown <em>begins</em></h2><FloralRule/><p className="countdown-note">The date is being finalised. We can't wait to share it with you.</p><div className="counter"><div><b>--</b><span>DAYS</span></div><i>:</i><div><b>--</b><span>HOURS</span></div><i>:</i><div><b>--</b><span>MINUTES</span></div></div><p className="countdown-foot">A LITTLE MORE TIME, A LIFETIME OF LOVE</p>
      </section>

      <section className="details-section section-pad" id="details">
        <div className="section-kicker">SAVE A LITTLE SPACE IN YOUR HEART</div><h2>We hope <em>to see you</em></h2><FloralRule/>
        <div className="details-card"><div className="detail-icon"><MapPin/></div><span>THE WEDDING DESTINATION</span><h3>Coming soon</h3><p>{couple.venue}</p><div className="detail-separator">✧</div><div className="detail-icon"><CalendarDays/></div><span>THE WEDDING DAY</span><h3>To be announced</h3><p>{couple.date}</p></div>
        <button className="share-btn" onClick={share}><Share2 size={16}/>{copied ? "LINK COPIED" : "SHARE THIS INVITATION"}</button>
      </section>

      <footer className="footer"><div className="footer-ornament">✧ ❀ ✧</div><p>WITH THE LOVE AND BLESSINGS OF OUR FAMILIES</p><h2>{couple.groom}<i>&</i>{couple.bride}</h2><span>WE CAN'T WAIT TO CELEBRATE WITH YOU</span><a href="#home" className="back-top"><ArrowUp size={15}/> BACK TO TOP</a><small>MADE WITH LOVE</small></footer>
    </main>
  );
}
createRoot(document.getElementById("root")).render(<App />);
