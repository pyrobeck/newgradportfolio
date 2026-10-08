import { useCallback, useEffect, useRef, useState } from "react";
import spider from "../assets/spiderbec.png";
import electricViolet from "../assets/web/electric-violet.webp";
import froshFull from "../assets/web/frosh-full-set.webp";
import viEyes from "../assets/web/vi-eyes.mp4";
import viEyesPoster from "../assets/web/vi-eyes-poster.webp";
import capstoneBooth from "../assets/web/capstone-booth.webp";
import spidermanSketch from "../assets/web/spiderman-sketch.webp";
import { scrollToId } from "../components/navbar";
import { ArrowDown, ArrowLeft, ArrowRight, Play } from "../components/icons";

/* The "song list" — each tile is a mode you can jump into, Just Dance style. */
const MODES = [
  {
    id: "gallery",
    title: "Gallery",
    sub: "Illustration · Fan art · Paint",
    cover: electricViolet,
    color: "var(--magenta)",
    alt: "var(--cyan)",
    level: 4,
    burst: "13 works",
    blurb: "Digital portraits, fan art and traditional pieces — from Arcane studies to an art-battle painting.",
  },
  {
    id: "client",
    title: "For Hire",
    sub: "IEEE · EngFrosh · Musicals",
    cover: froshFull,
    color: "var(--yellow)",
    alt: "var(--magenta)",
    level: 3,
    burst: "1,300+ shirts",
    blurb: "Work made for other people — identity and print for IEEE Carleton, EngFrosh 2023 and the C-ENG musicals.",
  },
  {
    id: "3d",
    title: "3D & Motion",
    sub: "Blender · Houdini · Unity",
    cover: viEyesPoster,
    video: viEyes,
    color: "var(--violet)",
    alt: "var(--red)",
    level: 5,
    burst: "Spin it!",
    blurb: "An explorable witch house you can orbit in the browser, plus simulation and animation reels.",
  },
  {
    id: "code",
    title: "Code & Play",
    sub: "VR games · Web · React",
    cover: capstoneBooth,
    color: "var(--cyan)",
    alt: "var(--blue)",
    level: 4,
    burst: "VR!",
    blurb: "An 8-month VR escape room with a team of six, game jams, and the code behind this very site.",
  },
  {
    id: "contact",
    title: "Say Hi",
    sub: "Commissions · Collabs · Jobs",
    cover: spidermanSketch,
    color: "var(--red)",
    alt: "var(--yellow)",
    level: 1,
    burst: "Hi!",
    blurb: "Got a project, a commission or a role in mind? Send a message — it lands straight in my inbox.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [touched, setTouched] = useState(false);
  const heroRef = useRef(null);
  const trackRef = useRef(null);
  const mode = MODES[index];

  const select = useCallback((i, user = true) => {
    setIndex((i + MODES.length) % MODES.length);
    if (user) setTouched(true);
  }, []);

  const launch = useCallback((m) => {
    if (m.filter) window.dispatchEvent(new CustomEvent("gallery:filter", { detail: m.filter }));
    else if (m.id === "gallery") window.dispatchEvent(new CustomEvent("gallery:filter", { detail: "all" }));
    scrollToId(m.id);
  }, []);

  // keep the active tile visible in the scrolling rail
  useEffect(() => {
    const track = trackRef.current;
    const tile = track?.children[index];
    if (!track || !tile) return;
    const left = tile.offsetLeft - track.clientWidth / 2 + tile.clientWidth / 2;
    track.scrollTo({ left, behavior: "smooth" });
  }, [index]);

  // gentle attract-mode cycling until someone interacts
  useEffect(() => {
    if (touched || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % MODES.length), 4200);
    return () => clearInterval(t);
  }, [touched]);

  // arrow keys + enter while the hero is on screen
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(tag)) return;
      if (document.querySelector(".lightbox")) return;
      const r = heroRef.current?.getBoundingClientRect();
      if (!r || r.bottom < window.innerHeight * 0.4) return;
      if (e.key === "ArrowRight") { e.preventDefault(); select(index + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); select(index - 1); }
      if (e.key === "Enter" && (tag === "BODY" || document.activeElement?.classList.contains("tile"))) {
        e.preventDefault();
        launch(MODES[index]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, select, launch]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="hero"
      style={{ "--accent": mode.color, "--accent-2": mode.alt }}
      aria-label="Introduction"
    >
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blob hero__blob--a" />
        <div className="hero__blob hero__blob--b" />
        <img className="hero__web" src={spider} alt="" />
        <div className="halftone" />
      </div>

      <div className="wrap hero__top">
        <div>
          <span className="kicker">
            <span className="dot" /> Player 1 · Artist × Developer
          </span>
          <h1 className="hero__name glitch">Beck<br />Braun</h1>
          <p className="hero__tag">
            draws, codes &amp; builds <b>worlds</b> you can step into.
          </p>
          <p className="hero__intro">
            Illustrator and 3D artist with a technology background at Carleton University —
            I make art, then make it interactive. Pick a mode to start.
          </p>
          <div className="hero__actions">
            <button className="btn" onClick={() => launch(mode)} style={{ "--c": mode.color }}>
              <Play /> Play {mode.title}
            </button>
            <button className="btn btn--ghost" onClick={() => scrollToId("contact")}>
              Get in touch
            </button>
          </div>
        </div>

        <div className="feature" aria-live="polite">
          <div className="feature__frame">
            {mode.video ? (
              <video key={mode.title} src={mode.video} poster={mode.cover} autoPlay muted loop playsInline />
            ) : (
              <img key={mode.title} src={mode.cover} alt="" />
            )}
            <div className="halftone" />
          </div>
          <div className="feature__burst">{mode.burst}</div>
          <div className="feature__label">{mode.title}</div>
        </div>
      </div>

      <div className="wrap rail">
        <div className="rail__head">
          <div>
            <span className="kicker">Select your mode</span>
            <p className="rail__blurb">{mode.blurb}</p>
          </div>
          <div className="rail__arrows">
            <button className="rail__arrow" onClick={() => select(index - 1)} aria-label="Previous mode">
              <ArrowLeft />
            </button>
            <button className="rail__arrow" onClick={() => select(index + 1)} aria-label="Next mode">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="rail__track" ref={trackRef} role="listbox" aria-label="Modes">
          {MODES.map((m, i) => {
            const active = i === index;
            return (
              <button
                key={m.title}
                role="option"
                aria-selected={active}
                className={`tile ${active ? "is-active" : ""}`}
                style={{ "--c": m.color }}
                onClick={() => (active ? launch(m) : select(i))}
              >
                {m.video ? (
                  <video src={m.video} poster={m.cover} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
                ) : (
                  <img src={m.cover} alt="" loading={i > 2 ? "lazy" : "eager"} />
                )}
                <span className="tile__num">0{i + 1}</span>
                <span className="tile__go">PLAY ▸</span>
                <span className="tile__body">
                  <span className="tile__title">{m.title}</span>
                  <span className="tile__sub">{m.sub}</span>
                  <span className="tile__level" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((d) => (
                      <i key={d} className={d < m.level ? "on" : ""} />
                    ))}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        <p className="rail__hint">
          <span className="key">←</span><span className="key">→</span> choose ·{" "}
          <span className="key">Enter</span> or tap again to play ·{" "}
          <button onClick={() => scrollToId("gallery")} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            scroll <ArrowDown style={{ width: 12, height: 12 }} />
          </button>
        </p>
      </div>
    </section>
  );
}
