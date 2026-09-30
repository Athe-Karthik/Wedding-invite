import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [opened, setOpened] = useState(false);

  if (opened) {
    return (
      <main className="after-open">
        <button className="back-button" onClick={() => setOpened(false)}>
          Back to cover
        </button>
        <p>Invitation pages will be added next.</p>
      </main>
    );
  }

  return (
    <main className="opening-screen">
      <img
        className="opening-art"
        src="/opening-generated.jpg"
        alt="Vijay and Rashmika wedding invitation"
      />

      <button
        className="open-invitation"
        type="button"
        aria-label="Open invitation"
        onClick={() => setOpened(true)}
      >
        <span>OPEN INVITATION</span>
      </button>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
