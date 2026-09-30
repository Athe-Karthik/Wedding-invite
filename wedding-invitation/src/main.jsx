import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function TempleArtwork() {
  return (
    <svg className="temple-art" viewBox="0 0 420 390" role="img" aria-label="Traditional South Indian wedding temple illustration">
      <defs>
        <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9a84f"/>
          <stop offset="1" stopColor="#9b5f27"/>
        </linearGradient>
        <linearGradient id="stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8c57d"/>
          <stop offset="1" stopColor="#a76b37"/>
        </linearGradient>
      </defs>

      <g className="gopuram">
        <path d="M150 335 L175 78 L245 78 L270 335Z" fill="url(#stone)" stroke="#875426" strokeWidth="2"/>
        <path d="M163 292 L257 292 M166 260 L254 260 M169 228 L251 228 M172 196 L248 196 M175 164 L245 164 M178 132 L242 132 M181 101 L239 101" stroke="#8c552d" strokeWidth="2"/>
        <path d="M190 80 L195 52 L225 52 L230 80Z" fill="url(#gold)" stroke="#875426" strokeWidth="2"/>
        <path d="M205 48 L210 28 L215 48Z" fill="#b9782e"/>
        <g fill="#b36d2d" stroke="#8b5126" strokeWidth="1">
          <circle cx="183" cy="113" r="7"/><circle cx="237" cy="113" r="7"/>
          <circle cx="180" cy="145" r="7"/><circle cx="240" cy="145" r="7"/>
          <circle cx="177" cy="177" r="7"/><circle cx="243" cy="177" r="7"/>
          <circle cx="174" cy="209" r="7"/><circle cx="246" cy="209" r="7"/>
          <circle cx="171" cy="241" r="7"/><circle cx="249" cy="241" r="7"/>
        </g>
        <rect x="190" y="278" width="40" height="57" rx="4" fill="#70401f"/>
        <path d="M190 278 Q210 248 230 278Z" fill="#c98a35"/>
        <circle cx="210" cy="292" r="5" fill="#e5b85f"/>
      </g>

      <g className="wedding-party">
        <g transform="translate(94 218)">
          <circle cx="0" cy="0" r="16" fill="#8a4b2e"/><path d="M-25 28 Q0 5 25 28 L20 105 L-20 105Z" fill="#c98c2f"/>
          <path d="M-20 105 L-32 135 M20 105 L32 135" stroke="#70401f" strokeWidth="9" strokeLinecap="round"/>
          <path d="M-19 48 Q0 60 19 48" stroke="#f1c56b" strokeWidth="5"/>
        </g>
        <g transform="translate(132 210)">
          <circle cx="0" cy="0" r="16" fill="#89502f"/><path d="M-24 27 Q0 6 24 27 L19 112 L-19 112Z" fill="#d5a04b"/>
          <path d="M-18 110 L-29 138 M18 110 L29 138" stroke="#70401f" strokeWidth="9" strokeLinecap="round"/>
        </g>
        <g transform="translate(172 200)">
          <circle cx="0" cy="0" r="18" fill="#70422b"/><path d="M-28 30 Q0 2 28 30 L21 125 L-21 125Z" fill="#427b93"/>
          <path d="M-18 125 L-28 148 M18 125 L28 148" stroke="#5b351f" strokeWidth="10" strokeLinecap="round"/>
          <path d="M-16 51 Q0 65 16 51" stroke="#f0c36a" strokeWidth="6"/>
        </g>
        <g transform="translate(215 205)">
          <circle cx="0" cy="0" r="17" fill="#805037"/><path d="M-27 29 Q0 5 27 29 L22 128 L-22 128Z" fill="#b43d35"/>
          <path d="M-19 128 L-30 149 M19 128 L30 149" stroke="#62381f" strokeWidth="10" strokeLinecap="round"/>
          <path d="M-18 50 Q0 62 18 50" stroke="#eac16b" strokeWidth="6"/>
        </g>
        <g transform="translate(257 214)">
          <circle cx="0" cy="0" r="16" fill="#8a5234"/><path d="M-24 27 Q0 6 24 27 L19 110 L-19 110Z" fill="#3e7a63"/>
          <path d="M-18 110 L-28 138 M18 110 L28 138" stroke="#613b24" strokeWidth="9" strokeLinecap="round"/>
        </g>
        <g transform="translate(294 220)">
          <circle cx="0" cy="0" r="15" fill="#8c5335"/><path d="M-23 27 Q0 6 23 27 L18 104 L-18 104Z" fill="#bd4f68"/>
          <path d="M-17 104 L-27 133 M17 104 L27 133" stroke="#603a26" strokeWidth="9" strokeLinecap="round"/>
        </g>
      </g>

      <g fill="#d28a38">
        <circle cx="80" cy="350" r="8"/><circle cx="103" cy="355" r="6"/><circle cx="317" cy="355" r="6"/><circle cx="340" cy="350" r="8"/>
      </g>
      <path d="M70 365 Q210 338 350 365" fill="none" stroke="#b87935" strokeWidth="4"/>
    </svg>
  );
}

function LeafCluster({ side }) {
  return (
    <div className={`leaf-cluster ${side}`} aria-hidden="true">
      <span className="leaf leaf-a" />
      <span className="leaf leaf-b" />
      <span className="leaf leaf-c" />
      <span className="banana" />
    </div>
  );
}

function HangingDecorations() {
  return (
    <div className="hanging" aria-hidden="true">
      <span><i /><b /><em /></span>
      <span><i /><b /><em /></span>
      <span><i /><b /><em /></span>
    </div>
  );
}

function OpeningScreen() {
  return (
    <main className="opening-screen">
      <div className="paper-texture" />
      <LeafCluster side="left" />
      <LeafCluster side="right" />
      <HangingDecorations />

      <section className="opening-content">
        <div className="top-ornament">❧</div>
        <p className="wedding-label">THE WEDDING OF</p>
        <h1>Vijay</h1>
        <div className="and">&amp;</div>
        <h2>Rashmika</h2>

        <div className="mandala" aria-hidden="true">
          <div className="mandala-ring ring-1" />
          <div className="mandala-ring ring-2" />
          <div className="mandala-ring ring-3" />
          <div className="mandala-center" />
        </div>

        <div className="details-copy">
          <p>26 OCTOBER 2026</p>
          <p>ITC MEMENTOS, UDAIPUR, RAJASTHAN, INDIA</p>
        </div>

        <button className="open-button">OPEN INVITATION</button>
      </section>

      <div className="artwork-wrap">
        <TempleArtwork />
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<OpeningScreen />);
