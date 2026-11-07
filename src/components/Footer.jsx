// src/components/Footer.jsx

import { NAV_LINKS, SOCIALS, PROFILE } from "../data/content.js";
import BrandIcon from "./BrandIcon.jsx";
import { scrollToId, scrollToTop } from "./scrollTo.js";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a
            href="#top"
            className="footer-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            {PROFILE.name}<span aria-hidden="true">.</span>
          </a>
          <p className="footer-tagline">{PROFILE.title}</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <ul>
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(id);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer-socials" aria-label="Social profiles">
          {SOCIALS.map(({ id, label, href }) => (
            <li key={id}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`}>
                <BrandIcon name={id} size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container">
        <div className="footer-bottom">
  <span>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>

  <span className="footer-credit">
    Designed &amp; Developed by{" "}
    Testimony Abiola
  </span>

  <button type="button" className="footer-top" onClick={scrollToTop}>
    Back to top <span aria-hidden="true">&uarr;</span>
  </button>
</div>
      </div>
    </footer>
  );
}
