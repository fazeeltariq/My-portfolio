import { skills } from "../data";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" alt title="Skills">
      <dl className="skills">
        {skills.map((group) => (
          <div className="skills__row" key={group.title}>
            <dt>{group.title}</dt>
            <dd>{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
