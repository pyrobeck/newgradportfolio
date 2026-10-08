import { useState } from "react";
import Lightbox from "../components/Lightbox";
import { CLIENTS } from "../data/work";
import { scrollToId } from "../components/navbar";
import { ArrowRight } from "../components/icons";

export default function ClientWork() {
  const [viewer, setViewer] = useState(null); // { items, index, label }

  return (
    <section id="client" className="section" style={{ "--accent": "var(--yellow)" }}>
      <div className="wrap">
        <header className="section-head">
          <div className="reveal">
            <span className="section-num">02 — For Hire</span>
            <h2 className="section-title">
              Made for <em>other people</em>
            </h2>
          </div>
          <p className="section-lede reveal" style={{ "--d": "120ms" }}>
            Logos, posters, playbills and merch designed for real groups with real audiences. Open a
            project to see the full set.
          </p>
        </header>

        <div className="clients">
          {CLIENTS.map((c, i) => (
            <button
              key={c.org}
              className="client reveal"
              style={{ "--c": c.color, "--d": `${i * 100}ms` }}
              onClick={() => setViewer({ items: c.series, index: 0, label: c.org })}
              aria-label={`${c.org} — open ${c.series.length} pieces`}
            >
              <span className="client__img">
                <img src={c.src} width={c.w} height={c.h} alt="" loading="lazy" decoding="async" />
                <span className="card__stack">{c.series.length} pieces</span>
              </span>
              <span className="client__body">
                <span className="client__kind">{c.kind}</span>
                <span className="client__org">{c.org}</span>
                <span className="client__title">{c.title}</span>
                <span className="client__desc">{c.description}</span>
                <span className="client__foot">
                  <span className="client__stat">{c.stat}</span>
                  <span className="client__go">
                    View set <ArrowRight />
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="client-cta reveal">
          <p>
            <strong>Need something designed for your group, event or show?</strong> I take on logos,
            posters, merch and social graphics.
          </p>
          <a
            href="#contact"
            className="btn"
            style={{ "--c": "var(--yellow)" }}
            onClick={(e) => {
              e.preventDefault();
              scrollToId("contact");
            }}
          >
            Work with me
          </a>
        </div>
      </div>

      {viewer && (
        <Lightbox
          items={viewer.items}
          index={viewer.index}
          label={viewer.label}
          setIndex={(fn) => setViewer((v) => ({ ...v, index: typeof fn === "function" ? fn(v.index) : fn }))}
          onClose={() => setViewer(null)}
        />
      )}
    </section>
  );
}
