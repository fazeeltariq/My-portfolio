import { about } from "../data";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
        <div className="about__text">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div>
          <h3 className="label">What I focus on</h3>
          <ul className="plain-list">
            {about.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
