// src/sections/Experience.jsx

import { EXPERIENCE, EDUCATION } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "../styles/experience.css";

function Entry({ entry, index }) {
  const ref = useReveal();
  return (
    <li ref={ref} className="exp-entry reveal">
      <div className="exp-when">
        <span className="exp-num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <time className="exp-date">{entry.date}</time>
      </div>
      <div className="exp-who">
        <h3 className="exp-role">{entry.role}</h3>
        <p className="exp-org">{entry.org}</p>
        <p className="exp-type">{entry.type}</p>
      </div>
      <ul className="exp-bullets">
        {entry.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </li>
  );
}

export default function Experience() {
  const headerRef = useReveal();
  const eduRef = useReveal();

  return (
    <section id="experience" className="section experience" aria-labelledby="exp-title">
      <div className="container">
        <header className="exp-header reveal" ref={headerRef}>
          <span className="eyebrow">03 &mdash; Experience</span>
          <h2 id="exp-title" className="section-title">
            Where I&rsquo;ve <em>worked</em>
          </h2>
        </header>

        <ol className="exp-list">
          {EXPERIENCE.map((entry, i) => (
            <Entry key={`${entry.org}-${entry.date}`} entry={entry} index={i} />
          ))}
        </ol>

        <div className="exp-edu reveal" ref={eduRef}>
          <span className="exp-edu-label">Education</span>
          <div>
            <h3 className="exp-role">{EDUCATION.degree}</h3>
            <p className="exp-org">{EDUCATION.school}</p>
          </div>
          <time className="exp-date">{EDUCATION.date}</time>
        </div>
      </div>
    </section>
  );
}
