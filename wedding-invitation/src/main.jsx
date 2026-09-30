import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="opening-reference-page">
      <img
        className="opening-reference"
        src="/opening-reference.svg"
        alt="Wedding invitation opening screen"
      />
      <button
        className="reference-open"
        aria-label="Open invitation"
        onClick={() => alert("Invitation opening animation will be added next.")}
      />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
