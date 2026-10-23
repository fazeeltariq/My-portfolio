import { experience, education } from "../data";
import Section from "./Section";

function Timeline({ title, items }) {
  return (
    <div>
      <h3 className="label">{title}</h3>
      <ol className="timeline">
        {items.map((item) => (
          <li key={item.role + item.period}>
            <h4>{item.role}</h4>
            <p className="timeline__meta">
              {item.org} · {item.period}
            </p>
            <ul>
              {item.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" alt title="Experience and education">
      <div className="columns">
        <Timeline title="Experience" items={experience} />
        <Timeline title="Education" items={education} />
      </div>
    </Section>
  );
}
