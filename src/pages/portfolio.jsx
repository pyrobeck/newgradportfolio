import { useEffect, useMemo, useState } from "react";
import Lightbox from "../components/Lightbox";
import { CATEGORY_COLORS, FILTERS, GALLERY } from "../data/work";

const TAG_LABEL = { illustration: "Illustration", fanart: "Fan art", painting: "Traditional", design: "Design", "3d": "3D" };

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [viewer, setViewer] = useState(null); // { items, index, label }

  // the hero's Gallery tile can pre-select a filter
  useEffect(() => {
    const on = (e) => setFilter(e.detail);
    window.addEventListener("gallery:filter", on);
    return () => window.removeEventListener("gallery:filter", on);
  }, []);

  const counts = useMemo(() => {
    const c = { all: GALLERY.length };
    GALLERY.forEach((g) => g.cats.forEach((k) => (c[k] = (c[k] || 0) + 1)));
    return c;
  }, []);

  const visible = GALLERY.filter((g) => filter === "all" || g.cats.includes(filter));
  // single pieces currently visible, so arrows walk through the filtered set
  const singles = visible.filter((g) => !g.series);

  const open = (g) => {
    if (g.series) setViewer({ items: g.series, index: 0, label: g.title });
    else setViewer({ items: singles, index: singles.indexOf(g), label: "Gallery" });
  };

  return (
    <section id="gallery" className="section" style={{ "--accent": "var(--magenta)" }}>
      <div className="wrap">
        <header className="section-head">
          <div className="reveal">
            <span className="section-num">01 — Gallery</span>
            <h2 className="section-title">
              Ink, paint <em>&amp; pixels</em>
            </h2>
          </div>
          <p className="section-lede reveal" style={{ "--d": "120ms" }}>
            Personal illustration, fan art and traditional pieces. Tap anything to see it full size.
          </p>
        </header>

        <div className="filters" role="tablist" aria-label="Filter artwork">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={`filter ${filter === f.id ? "is-active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label} <small>{counts[f.id] || 0}</small>
            </button>
          ))}
        </div>

        <div className="masonry">
          {visible.map((g) => {
            const main = g.cats[0];
            return (
              <button
                key={g.title}
                className="card"
                style={{ "--c": CATEGORY_COLORS[main] }}
                onClick={() => open(g)}
                aria-label={`${g.title}${g.series ? `, series of ${g.count}` : ""} — open`}
              >
                <img src={g.src} width={g.w} height={g.h} alt={g.title} loading="lazy" decoding="async" />
                {g.series && <span className="card__stack">{g.count} pieces</span>}
                <span className="card__cap">
                  <span className="card__title">{g.title}</span>
                  <span className="card__tag">{TAG_LABEL[main]}</span>
                </span>
              </button>
            );
          })}
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
