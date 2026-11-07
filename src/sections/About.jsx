// src/sections/About.jsx

import { ABOUT_PARAGRAPHS, ABOUT_FACTS } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "../styles/about.css";

export default function About() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-head reveal" ref={leftRef}>
          <span className="eyebrow">02 &mdash; About</span>
          <h2 id="about-title" className="section-title">
            Design with <em>consistency</em> and intent.
          </h2>
        </div>

        <div className="about-body reveal" ref={rightRef} style={{ transitionDelay: "90ms" }}>
          {ABOUT_PARAGRAPHS.map((text, i) => (
            <p key={i} className={i === 0 ? "about-lead" : "about-text"}>{text}</p>
          ))}

          <dl className="about-facts">
            {ABOUT_FACTS.map(({ label, value }) => (
              <div key={label} className="about-fact">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
