import { PROJECTS } from "../data/work";
import { ArrowUpRight } from "../components/icons";

const TOOLKIT = [
  { name: "React", c: "var(--cyan)" },
  { name: "Vite", c: "var(--violet)" },
  { name: "JavaScript", c: "var(--yellow)" },
  { name: "three.js / R3F", c: "var(--magenta)" },
  { name: "Unity", c: "var(--text)" },
  { name: "VR", c: "var(--red)" },
  { name: "Blender", c: "var(--yellow)" },
  { name: "Houdini", c: "var(--red)" },
  { name: "Digital painting", c: "var(--magenta)" },
  { name: "Brand & print", c: "var(--cyan)" },
];

export default function Games() {
  return (
    <section id="code" className="section" style={{ "--accent": "var(--cyan)" }}>
      <div className="wrap">
        <header className="section-head">
          <div className="reveal">
            <span className="section-num">04 — Code &amp; Play</span>
            <h2 className="section-title">
              Art that <em>runs</em>
            </h2>
          </div>
          <p className="section-lede reveal" style={{ "--d": "120ms" }}>
            The technology side: VR games, from an eight-month team capstone to my most recent release,
            and the code behind this portfolio.
          </p>
        </header>

        <div className="bento">
          {/* Capstone */}
          <article className="panel bento__main reveal" style={{ "--c": "var(--red)" }}>
            <div className="deck">
              <img className="deck__logo" src={PROJECTS.deckLogo} alt="Deck of Secrets logo" />
              <div>
                <span className="panel__eyebrow">Capstone · VR escape room</span>
                <h3>Deck of Secrets</h3>
                <p>
                  An escape-room game for VR, built over eight months with five other students as Code
                  Noir Studios — from first prototype to a public showcase booth.
                </p>
                <div className="stat">
                  <div><b>8</b><span>months</span></div>
                  <div><b>6</b><span>person team</span></div>
                  <div><b>VR</b><span>platform</span></div>
                </div>
                <a
                  className="panel__link"
                  href="https://codenoirstudios.wixsite.com/deckofsecrets/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download &amp; learn more <ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="photos">
              {PROJECTS.capstonePhotos.map((p) => (
                <img key={p.src} src={p.src} alt={p.alt} loading="lazy" decoding="async" />
              ))}
            </div>
          </article>

          {/* Rodney's Revenge */}
          <article className="panel bento__side reveal" style={{ "--c": "var(--yellow)", "--d": "80ms" }}>
            <span className="panel__eyebrow">Latest · VR game</span>
            <h3>Rodney’s Revenge</h3>
            <p>My most recent VR game — playable now on itch.io.</p>
            <a
              className="panel__link"
              href="https://pyrobeck.itch.io/rodneys-revenge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play on itch.io <ArrowUpRight />
            </a>
            <p style={{ marginTop: 22 }}>More games I’ve worked on live on my itch page.</p>
            <a className="panel__link" href="https://pyrobeck.itch.io/" target="_blank" rel="noopener noreferrer">
              pyrobeck.itch.io <ArrowUpRight />
            </a>
          </article>

          {/* This site */}
          <article className="panel bento__side reveal" style={{ "--c": "var(--cyan)", "--d": "160ms" }}>
            <span className="panel__eyebrow">Web · this site</span>
            <h3>Built, not templated</h3>
            <pre className="code" aria-label="Code sample">
<span className="c">// lazy-load three.js only on demand</span>{"\n"}
<span className="k">const</span> <span className="f">ModelViewer</span> = <span className="f">lazy</span>(() =&gt;{"\n"}
{"  "}<span className="k">import</span>(<span className="s">"./ModelViewer"</span>));
            </pre>
            <p style={{ marginTop: 16 }}>
              React + Vite, hand-written CSS, R3F for 3D, and a compressed asset pipeline so it loads fast
              on a phone.
            </p>
            <a
              className="panel__link"
              href="https://github.com/pyrobeck/pyrobeck.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source on GitHub <ArrowUpRight />
            </a>
          </article>

          {/* Toolkit */}
          <article className="panel bento__wide reveal" style={{ "--c": "var(--magenta)" }}>
            <span className="panel__eyebrow">Toolkit</span>
            <h3>Both sides of the screen</h3>
            <div className="toolkit">
              {TOOLKIT.map((t) => (
                <span key={t.name} className="tool" style={{ "--c": t.c }}>
                  <i /> {t.name}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
