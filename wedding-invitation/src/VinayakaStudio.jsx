import React, { useEffect, useState } from "react";
import "./VinayakaStudio.css";

const slots = [
  { key: "background", label: "01 · Background", hint: "Temple garden PNG" },
  { key: "chakra", label: "02 · Golden chakra", hint: "Transparent chakra PNG" },
  { key: "vinayaka", label: "03 · Vinayaka", hint: "Transparent front-facing PNG" }
];

export default function VinayakaStudio() {
  const [images, setImages] = useState({ background: "", chakra: "", vinayaka: "" });
  const [duration, setDuration] = useState(60);
  const [playing, setPlaying] = useState(true);

  useEffect(() => () => Object.values(images).forEach(url => url && URL.revokeObjectURL(url)), [images]);

  const loadImage = (key, file) => {
    if (!file) return;
    setImages(old => {
      if (old[key]) URL.revokeObjectURL(old[key]);
      return { ...old, [key]: URL.createObjectURL(file) };
    });
  };

  const ready = Object.values(images).every(Boolean);

  return (
    <main className="vin-studio">
      <header className="vin-studio-head">
        <div className="vin-studio-kicker">WEDDING INVITATION · MOTION LAB</div>
        <h1>Vinayaka <em>Layer Studio</em></h1>
        <p>Three independent artwork layers. Only the golden chakra moves.</p>
      </header>

      <section className="vin-studio-workspace">
        <div className="vin-preview-column">
          <div className="vin-stage">
            {images.background && <img className="vin-bg" src={images.background} alt="" />}
            {images.chakra && <img className={`vin-chakra ${playing ? "is-playing" : "is-paused"}`} style={{ "--spin-duration": `${duration}s` }} src={images.chakra} alt="" />}
            {images.vinayaka && <img className="vin-ganesha" src={images.vinayaka} alt="Vinayaka" />}
            {!ready && <div className="vin-empty-state"><span>✧</span><strong>Your composition will appear here</strong><small>Upload the three PNG layers to begin the preview.</small></div>}
          </div>
          <div className="vin-controls">
            <button type="button" onClick={() => setPlaying(v => !v)} disabled={!images.chakra}>{playing ? "Pause chakra" : "Play chakra"}</button>
            <label htmlFor="vin-speed">One revolution: <b>{duration}s</b></label>
            <input id="vin-speed" type="range" min="30" max="120" step="5" value={duration} onChange={e => setDuration(Number(e.target.value))} />
          </div>
          <p className="vin-caption">Clockwise · linear motion · infinite loop · background and Vinayaka remain stationary</p>
        </div>

        <aside className="vin-assets-panel">
          <h2>Artwork layers</h2>
          <p className="vin-panel-note">Choose the three cleaned PNG files from the production-preview ZIP you downloaded.</p>
          {slots.map(slot => (
            <label className={`vin-upload ${images[slot.key] ? "has-file" : ""}`} key={slot.key}>
              <span className="vin-upload-top"><b>{slot.label}</b><small>{images[slot.key] ? "Loaded ✓" : "PNG · transparent where applicable"}</small></span>
              <span className="vin-upload-hint">{slot.hint}</span>
              <input type="file" accept="image/png,image/webp,image/jpeg" onChange={e => loadImage(slot.key, e.target.files?.[0])} />
            </label>
          ))}
          <div className="vin-layer-order"><b>Render order</b><span>Background</span><i>↓</i><span>Rotating chakra</span><i>↓</i><span>Vinayaka foreground</span></div>
          <div className="vin-ready">{ready ? "All three layers loaded — preview ready." : `${Object.values(images).filter(Boolean).length} of 3 layers loaded`}</div>
        </aside>
      </section>
      <footer className="vin-studio-foot">Isolated review route · Does not change the wedding invitation experience</footer>
    </main>
  );
}
