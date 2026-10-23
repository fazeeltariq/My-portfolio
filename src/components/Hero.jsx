import { profile } from "../data";

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__availability">{profile.availability}</p>
          <h1>{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>
          <p className="lead">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View my work
            </a>
            {profile.resumeUrl && (
              <a className="btn btn--secondary" href={profile.resumeUrl} download>
                Download resume
              </a>
            )}
            <a className="link" href="#contact">
              Contact me
            </a>
          </div>

          <p className="hero__meta">
            <span>{profile.location}</span>
            {profile.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="link link--quiet">
                {s.label}
              </a>
            ))}
          </p>

          <dl className="stats">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {profile.photo ? (
          <img className="hero__photo" src={profile.photo} alt={profile.name} />
        ) : (
          <div className="hero__photo hero__photo--empty" aria-hidden="true">
            {initials(profile.name)}
          </div>
        )}
      </div>
    </section>
  );
}
