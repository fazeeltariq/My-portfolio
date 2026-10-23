import { achievements } from "../data";
import Section from "./Section";

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <ul className="achievements">
        {achievements.map((a) => {
          const meta = [a.issuer, a.year].filter(Boolean).join(" · ");
          return (
            <li key={a.title}>
              <h3>{a.title}</h3>
              {meta && <p className="muted small">{meta}</p>}
              <p>{a.description}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
