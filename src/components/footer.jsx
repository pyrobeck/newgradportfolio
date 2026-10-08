import spider from "../assets/spiderbec.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <img src={spider} alt="" width="22" height="22" />© {new Date().getFullYear()} Beck Braun
        </span>
        <span>
          Built with React, Vite &amp; three.js ·{" "}
          <a href="https://github.com/pyrobeck/pyrobeck.github.io" target="_blank" rel="noopener noreferrer">
            Source on GitHub
          </a>
        </span>
      </div>
    </footer>
  );
}
