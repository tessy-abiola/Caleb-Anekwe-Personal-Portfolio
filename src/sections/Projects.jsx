// src/sections/Projects.jsx

import { PROJECTS, BEHANCE_URL } from "../data/content.js";
import BrandIcon from "../components/BrandIcon.jsx";
import useReveal from "../hooks/useReveal.js";
import "../styles/projects.css";

function ArrowUpRight() {
  return (
    <svg className="work-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4.5 13.5l9-9M6 4.5h7.5V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectCard({ project, featured, delay }) {
  const ref = useReveal();
  const { id, title, category, image, href } = project;

  return (
    <li
      ref={ref}
      className={`work-item reveal${featured ? " work-item--featured" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <a
        className="work-card"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} — ${category}. View the case study on Behance (opens in a new tab)`}
      >
        <div className="work-media">
          <img
            src={image}
            alt={`${title} project preview`}
            width="1280"
            height="720"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="work-body">
          <span className="work-index" aria-hidden="true">{id}</span>
          <div className="work-meta">
            <span className="work-category">{category}</span>
            <h3 className="work-title">{title}</h3>
          </div>
          <span className="work-cta" aria-hidden="true">
            <span className="work-cta-label">View on Behance</span>
            <span className="work-cta-icon"><ArrowUpRight /></span>
          </span>
        </div>
      </a>
    </li>
  );
}

export default function Projects() {
  const headerRef = useReveal();
  const moreRef = useReveal();

  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="container">
        <header className="work-header reveal" ref={headerRef}>
          <div>
            <span className="eyebrow">01 &mdash; Selected Work</span>
            <h2 id="work-title" className="section-title">
              Selected <em>work</em>
            </h2>
          </div>
          <p className="work-intro">
            Brand identity and social media design. Each project opens its full case study on Behance.
          </p>
        </header>

        <ul className="work-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} featured={i === 0} delay={i === 0 ? 0 : (i % 2) * 90} />
          ))}
        </ul>

        <div className="work-more reveal" ref={moreRef}>
          <div className="work-more-text">
            <h3 className="work-more-title">There&rsquo;s more on Behance.</h3>
            <p>Seven projects here. The wider body of work, including more brands, campaigns and motion pieces, lives on my Behance profile.</p>
          </div>
          <a className="btn btn--primary work-more-btn" href={BEHANCE_URL} target="_blank" rel="noopener noreferrer">
            <BrandIcon name="behance" size={22} />
            View More Projects on Behance
            <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 12L12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="visually-hidden">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
