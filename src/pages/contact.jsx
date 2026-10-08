import { useState } from "react";
import { ArrowUpRight, Send } from "../components/icons";

/*
 * Contact form → Formspree.
 * 1. Sign up free at https://formspree.io and create a form.
 * 2. Paste the form ID (the part after /f/ in the endpoint) below.
 * Until then the form falls back to opening the visitor's email app, pre-filled.
 */
const FORMSPREE_ID = ""; // e.g. "xyzabcde"
const EMAIL = "beckbraun@cmail.carleton.ca";

const TOPICS = ["Commission", "Design work", "3D / Games", "Job or internship", "Just saying hi"];

const LINKS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, c: "var(--yellow)" },
  { label: "LinkedIn", value: "in/beckbraun", href: "https://www.linkedin.com/in/beckbraun/", c: "var(--cyan)" },
  { label: "Instagram", value: "@pyrobeckdraws", href: "https://www.instagram.com/pyrobeckdraws", c: "var(--magenta)" },
  { label: "itch.io", value: "pyrobeck.itch.io", href: "https://pyrobeck.itch.io/", c: "var(--red)" },
  { label: "GitHub", value: "pyrobeck", href: "https://github.com/pyrobeck", c: "var(--violet)" },
];

const EMPTY = { name: "", email: "", topic: TOPICS[0], message: "", _gotcha: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "That email doesn’t look right.";
  if (v.message.trim().length < 10) e.message = "A little more detail, please (10+ characters).";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [serverMsg, setServerMsg] = useState("");

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    if (values._gotcha) return; // bot

    // No Formspree ID yet → open the visitor's mail app instead.
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`[Portfolio] ${values.topic} — ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setServerMsg("");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          topic: values.topic,
          message: values.message,
          _subject: `[Portfolio] ${values.topic} — ${values.name}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setValues(EMPTY);
      } else {
        const data = await res.json().catch(() => ({}));
        setServerMsg(data?.errors?.map((x) => x.message).join(", ") || "");
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contact" style={{ "--accent": "var(--yellow)" }}>
      <div className="wrap contact__grid">
        <div className="reveal">
          <span className="section-num">05 — Contact</span>
          <h2 className="contact__big glitch">
            Let’s make
            <em>something.</em>
          </h2>
          <p className="section-lede" style={{ marginTop: 22 }}>
            Commissions, design work, 3D, games or a role on your team — I’d love to hear about it.
          </p>
          <ul className="links">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  style={{ "--c": l.c }}
                  {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <div>
                    <small>{l.label}</small>
                    <span>{l.value}</span>
                  </div>
                  <ArrowUpRight />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal" style={{ "--d": "120ms" }}>
          {status === "sent" ? (
            <div className="form" role="status">
              <div className="success">
                <div className="score">PERFECT!</div>
                <h3>Message {FORMSPREE_ID ? "sent" : "ready"}</h3>
                <p>
                  {FORMSPREE_ID
                    ? "Thanks for reaching out — I’ll get back to you soon."
                    : "Your email app should have opened with the message filled in. Just hit send!"}
                </p>
                <button className="btn btn--ghost" onClick={() => setStatus("idle")}>
                  Send another
                </button>
              </div>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="form__row">
                <div className={`field ${errors.name ? "has-error" : ""}`}>
                  <label htmlFor="f-name">Name</label>
                  <input
                    id="f-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Miles Morales"
                    value={values.name}
                    onChange={set("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "e-name" : undefined}
                  />
                  {errors.name && <span id="e-name" className="field__err">{errors.name}</span>}
                </div>
                <div className={`field ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="f-email">Email</label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={set("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "e-email" : undefined}
                  />
                  {errors.email && <span id="e-email" className="field__err">{errors.email}</span>}
                </div>
              </div>

              <fieldset className="field">
                <legend>What’s it about?</legend>
                <div className="pills">
                  {TOPICS.map((t) => (
                    <label key={t} className="pill">
                      <input type="radio" name="topic" value={t} checked={values.topic === t} onChange={set("topic")} />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className={`field ${errors.message ? "has-error" : ""}`}>
                <label htmlFor="f-message">Message</label>
                <textarea
                  id="f-message"
                  name="message"
                  placeholder="Tell me about your idea, timeline and budget…"
                  value={values.message}
                  onChange={set("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "e-message" : undefined}
                />
                {errors.message && <span id="e-message" className="field__err">{errors.message}</span>}
              </div>

              {/* honeypot for spam bots */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                value={values._gotcha}
                onChange={set("_gotcha")}
                style={{ display: "none" }}
                aria-hidden="true"
              />

              {status === "error" && (
                <div className="alert alert--err" role="alert">
                  Something went wrong sending that{serverMsg ? `: ${serverMsg}` : ""}. You can also email me
                  directly at <a href={`mailto:${EMAIL}`} style={{ textDecoration: "underline" }}>{EMAIL}</a>.
                </div>
              )}

              <div className="form__foot">
                <span className="form__note">Goes straight to my inbox.</span>
                <button className="btn" type="submit" disabled={status === "sending"} style={{ "--c": "var(--magenta)" }}>
                  {status === "sending" ? <span className="spinner" /> : <Send />}
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
