import { useState } from "react";
import { projects } from "../data";
import Section from "./Section";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects" title="Projects">
      {categories.length > 2 && (
        <div className="filters" role="group" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter ${filter === c ? "is-active" : ""}`}
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <ul className="projects">
        {shown.map((p) => (
          <li className="project" key={p.title}>
            {p.image && <img className="project__image" src={p.image} alt={`${p.title} screenshot`} loading="lazy" />}
            <div className="project__body">
              <p className="project__cat">{p.category}</p>
              <h3>{p.title}</h3>
              <p className="project__desc">{p.description}</p>
              {p.result && <p className="project__result">{p.result}</p>}
              {p.tags.length > 0 && <p className="project__tags">{p.tags.join(" · ")}</p>}
              {(p.live || p.repo) && (
              <p className="project__links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="link">
                    Live demo
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="link">
                    Source code
                  </a>
                )}
              </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
