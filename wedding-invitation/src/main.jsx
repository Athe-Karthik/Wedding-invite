import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <main className={`invitation-app ${opened ? "is-opened" : ""}`}>
      <section className="opening-screen" aria-label="Wedding invitation opening screen">
        <img
          className="opening-art"
          src="/opening-reference.jpg"
          alt="Vijay and Rashmika wedding invitation"
        />

        <button
          className="open-invitation"
          type="button"
          aria-label="Open invitation"
          onClick={() => setOpened(true)}
        />

        <div className="opening-hint" aria-hidden="true">
          Tap to open
        </div>
      </section>

      {opened && (
        <section className="after-open" aria-label="Invitation opened">
          <button className="back-button" type="button" onClick={() => setOpened(false)}>
            Back to cover
          </button>
          <p>Invitation pages will be added next.</p>
        </section>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
