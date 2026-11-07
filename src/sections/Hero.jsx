// src/sections/Hero.jsx

import { PROFILE, HERO_FACTS } from "../data/content.js";
import { scrollToId } from "../components/scrollTo.js";
import "../styles/hero.css";

export default function Hero() {
  const go = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-container">
        <div className="hero-layout">
          <div className="hero-text">
            <p className="eyebrow hero-eyebrow">
              <span className="hero-dot" aria-hidden="true" />
              Graphic Designer <span aria-hidden="true">|</span> Motion Designer
            </p>

            <h1 id="hero-title" className="hero-headline">
              I design brands people <span className="hero-accent">remember.</span>
            </h1>

            <p className="hero-sub">
              I&rsquo;m {PROFILE.name}, a designer with 4+ years of experience across brand
              identity, social media, motion graphics and UI/UX, taking work from first
              concept to production-ready delivery.
            </p>

            <div className="hero-actions">
              <a className="btn btn--primary" href="#work" onClick={(e) => go(e, "work")}>
                View selected work
                <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a className="btn btn--ghost" href="#contact" onClick={(e) => go(e, "contact")}>
                Get in touch
              </a>
            </div>
          </div>

          <figure className="hero-photo">
            <div className="hero-photo-frame">
              <img
                src={PROFILE.photo}
                alt="Portrait of Caleb Anekwe"
                width="960"
                height="960"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <figcaption className="hero-caption">
              <span>{PROFILE.name}</span>
              <span>{PROFILE.location}</span>
            </figcaption>
          </figure>
        </div>

        <dl className="hero-facts">
          {HERO_FACTS.map(({ value, label }) => (
            <div key={label} className="hero-fact">
              <dt className="hero-fact-label">{label}</dt>
              <dd className="hero-fact-value">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
