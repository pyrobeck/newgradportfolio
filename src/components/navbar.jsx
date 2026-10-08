import { useEffect, useState } from "react";
import spider from "../assets/spiderbec.png";

export const SECTIONS = [
  { id: "gallery", label: "Gallery", color: "var(--magenta)" },
  { id: "client", label: "For Hire", color: "var(--yellow)" },
  { id: "3d", label: "3D & Motion", color: "var(--violet)" },
  { id: "code", label: "Code & Play", color: "var(--cyan)" },
  { id: "contact", label: "Contact", color: "var(--yellow)" },
];

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the tab for the section in view
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    const top = () => window.scrollY < window.innerHeight * 0.5 && setActive(null);
    window.addEventListener("scroll", top, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", top);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header className={`nav ${scrolled || open ? "is-scrolled" : ""}`}>
        <div className="wrap nav__inner">
          <a href="#top" className="brand" onClick={go("top")} aria-label="Beck Braun — back to top">
            <img src={spider} alt="" />
            <span>BECK</span>
          </a>

          <nav className="nav__tabs" aria-label="Sections">
            {SECTIONS.slice(0, 4).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={go(s.id)}
                className={`nav__tab ${active === s.id ? "is-active" : ""}`}
                style={{ "--tab-c": s.color }}
                aria-current={active === s.id ? "true" : undefined}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <a href="#contact" onClick={go("contact")} className="btn nav__cta" style={{ "--c": "var(--yellow)" }}>
            Say hi
          </a>

          <button
            className="nav__burger"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
          </button>
        </div>
      </header>

      <nav id="mobile-menu" className={`sheet ${open ? "is-open" : ""}`} aria-label="Mobile" aria-hidden={!open}>
        {SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={go(s.id)}
            className="sheet__item"
            style={{ "--c": s.color }}
            tabIndex={open ? 0 : -1}
          >
            {s.label}
            <small>0{i + 1}</small>
          </a>
        ))}
      </nav>
    </>
  );
}
