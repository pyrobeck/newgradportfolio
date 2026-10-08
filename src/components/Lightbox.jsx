import { useCallback, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Close } from "./icons";

/** Fullscreen viewer: arrows / swipe / Esc. `items` = [{src,title,description}] */
export default function Lightbox({ items, index, setIndex, onClose, label }) {
  const closeRef = useRef(null);
  const touch = useRef(null);
  const item = items[index];
  const n = items.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n, setIndex]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n, setIndex]);

  const handlers = useRef({});
  handlers.current = { next, prev, onClose };

  useEffect(() => {
    const opener = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      const h = handlers.current;
      if (e.key === "Escape") h.onClose();
      if (e.key === "ArrowRight") h.next();
      if (e.key === "ArrowLeft") h.prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener?.focus?.({ preventScroll: true });
    };
  }, []);

  // preload neighbours
  useEffect(() => {
    if (n < 2) return;
    [items[(index + 1) % n], items[(index - 1 + n) % n]].forEach((it) => {
      const im = new Image();
      im.src = it.src;
    });
  }, [index, items, n]);

  const onTouchStart = (e) => (touch.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touch.current = null;
  };

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={label || item.title}>
      <div className="lightbox__bar">
        <span>
          {label ? `${label} · ` : ""}
          {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
        <button ref={closeRef} className="lightbox__close" onClick={onClose} aria-label="Close viewer">
          <Close />
        </button>
      </div>

      <div
        className="lightbox__stage"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img key={item.src} src={item.src} alt={item.title} />
        {n > 1 && (
          <>
            <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous image">
              <ArrowLeft />
            </button>
            <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next image">
              <ArrowRight />
            </button>
          </>
        )}
      </div>

      <div className="lightbox__cap">
        <h3>{item.title}</h3>
        {item.description && <p>{item.description}</p>}
        {n > 1 && n <= 20 && (
          <div className="lightbox__dots" aria-hidden="true">
            {items.map((_, i) => (
              <i key={i} className={i === index ? "on" : ""} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
