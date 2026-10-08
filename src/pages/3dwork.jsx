import { Component, Suspense, lazy, useEffect, useRef, useState } from "react";
import { REELS } from "../data/work";
import { Play, SoundOff, SoundOn, WitchHouseIcon } from "../components/icons";

const ModelViewer = lazy(() => import("../components/ModelViewer.jsx"));

class ViewerBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed)
      return (
        <div className="stage__poster">
          <p>The 3D viewer couldn’t start on this device (WebGL unavailable).</p>
        </div>
      );
    return this.props.children;
  }
}

/** Plays when on screen, pauses when off — saves battery on phones. */
function Reel({ reel }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !reduce) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <article className="reel reveal" style={{ "--c": reel.color }}>
      <div className="reel__media" style={reel.ratio ? { aspectRatio: reel.ratio } : undefined}>
        <video
          ref={ref}
          src={reel.src}
          poster={reel.poster}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          aria-label={reel.title}
        />
        {reel.audio && (
          <button
            className="reel__sound"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <SoundOff /> : <SoundOn />}
          </button>
        )}
      </div>
      <div className="reel__body">
        <h3 className="reel__title">{reel.title}</h3>
        <p className="reel__desc">{reel.description}</p>
        <div className="chips">
          {reel.tools.map((t, i) => (
            <span key={t} className={`chip ${i === 0 ? "chip--c" : ""}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ThreeDWork() {
  const [entered, setEntered] = useState(false);

  return (
    <section id="3d" className="section three" style={{ "--accent": "var(--violet)" }}>
      <div className="wrap">
        <header className="section-head">
          <div className="reveal">
            <span className="section-num">03 — 3D &amp; Motion</span>
            <h2 className="section-title">
              Worlds <em>in the round</em>
            </h2>
          </div>
          <p className="section-lede reveal" style={{ "--d": "120ms" }}>
            Modelled, lit and simulated — then shipped to the browser. Orbit the witch house below,
            or watch the reels.
          </p>
        </header>

        <div className="stage reveal">
          <div className="stage__info">
            <span className="kicker">
              <span className="dot" /> Interactive
            </span>
            <h3 className="stage__title">
              Witch House
              <em>potions, candles &amp; a creaky bookcase</em>
            </h3>
            <p>
              Modelled in Blender, with materials and effects built in Unity. Here it runs live in your
              browser with React Three Fiber.
            </p>
            <ul className="specs">
              <li><span>Modelling</span><b>Blender</b></li>
              <li><span>Materials / FX</span><b>Unity</b></li>
              <li><span>Web viewer</span><b>three.js · R3F</b></li>
              <li><span>Meshes</span><b>130</b></li>
              <li><span>Download</span><b>75 → 22 MB</b></li>
            </ul>
          </div>

          <div className="stage__canvas">
            {entered ? (
              <ViewerBoundary>
                <Suspense
                  fallback={
                    <div className="stage__progress" role="status">
                      Booting the 3D engine…
                    </div>
                  }
                >
                  <ModelViewer />
                </Suspense>
              </ViewerBoundary>
            ) : (
              <div className="stage__poster">
                <div className="halftone" />
                <div style={{ position: "relative" }}>
                  <WitchHouseIcon className="house-icon" />
                  <button className="btn" style={{ "--c": "var(--violet)" }} onClick={() => setEntered(true)}>
                    <Play /> Enter the Witch House
                  </button>
                  <small>~22 MB · loads on demand</small>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="reels">
          {REELS.map((r) => (
            <Reel key={r.title} reel={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
