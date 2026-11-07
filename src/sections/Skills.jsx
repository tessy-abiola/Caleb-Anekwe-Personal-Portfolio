// src/sections/Skills.jsx

import { SKILL_GROUPS, TOOLS } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "../styles/skills.css";

function SkillGroup({ group, index }) {
  const ref = useReveal();
  return (
    <li ref={ref} className="skill-group reveal" style={{ transitionDelay: `${index * 80}ms` }}>
      <span className="skill-group-num" aria-hidden="true">0{index + 1}</span>
      <h3 className="skill-group-title">{group.title}</h3>
      <ul className="skill-list">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export default function Skills() {
  const headerRef = useReveal();
  const toolsRef = useReveal();

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <header className="skills-header reveal" ref={headerRef}>
          <span className="eyebrow">04 &mdash; Skills &amp; Tools</span>
          <h2 id="skills-title" className="section-title">
            What I <em>do</em>
          </h2>
        </header>

        <ul className="skill-groups">
          {SKILL_GROUPS.map((g, i) => (
            <SkillGroup key={g.title} group={g} index={i} />
          ))}
        </ul>

        <div className="tools reveal" ref={toolsRef}>
          <h3 className="tools-title">Tools &amp; software</h3>
          <ul className="tools-grid">
            {TOOLS.map((tool) => (
              <li key={tool.name} className="tool">
                <span className="tool-name">{tool.name}</span>
                {tool.note && <span className="tool-note">{tool.note}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
