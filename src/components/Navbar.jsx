// src/components/Navbar.jsx

import { useState, useEffect, useRef } from "react";
import { NAV_LINKS } from "../data/content.js";
import { scrollToId, scrollToTop } from "./scrollTo.js";
import "../styles/navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const menuOpenRef = useRef(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 28);

      if (y > 80 && !menuOpenRef.current) {
        if (y > lastY.current + 6) setHidden(true);
        else if (y < lastY.current - 4) setHidden(false);
      } else {
        setHidden(false);
      }
      lastY.current = y;

      const current = NAV_LINKS.map(({ id }) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.getBoundingClientRect().top : Infinity };
      })
        .filter((o) => o.top <= window.innerHeight * 0.4)
        .sort((a, b) => b.top - a.top)[0];
      setActive(current ? current.id : "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on outside click or Escape
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => {
      if (e.type === "keydown" && e.key !== "Escape") return;
      if (e.type === "click" && e.target.closest?.(".nav-pill, .nav-mobile-menu")) return;
      setMenuOpen(false);
    };
    window.addEventListener("click", close);
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("click", close);
      window.removeEventListener("keydown", close);
    };
  }, [menuOpen]);

  const go = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <div className={`nav-wrapper${hidden ? " nav-hidden" : ""}`}>
        <nav className={`nav-pill${scrolled || menuOpen ? " scrolled" : ""}`} aria-label="Primary">
          <a
            className="nav-logo"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              scrollToTop();
            }}
            aria-label="Caleb Anekwe — back to top"
          >
            Caleb Anekwe<span aria-hidden="true">.</span>
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link${active === id ? " active" : ""}`}
                  aria-current={active === id ? "location" : undefined}
                  onClick={(e) => go(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a className="nav-cta" href="#contact" onClick={(e) => go(e, "contact")}>
            <span className="nav-cta-dot" aria-hidden="true" />
            Let&rsquo;s talk
          </a>

          <button
            type="button"
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="nav-mobile-menu" id="mobile-menu">
          <ul>
            {NAV_LINKS.map(({ id, label }, i) => (
              <li key={id}>
                <a href={`#${id}`} className="nav-mobile-link" onClick={(e) => go(e, id)}>
                  <span className="nav-mobile-num" aria-hidden="true">0{i + 1}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
