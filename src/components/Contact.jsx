import { useState } from "react";
import { profile } from "../data";
import Section from "./Section";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's email app with the message filled in. No backend needed.
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section
      id="contact"
      alt
      title="Contact"
      intro="Have a project, internship or idea? Send me a message and I'll reply soon."
    >
      <div className="contact">
        <dl className="contact__info">
          <div>
            <dt>Email</dt>
            <dd>
              <a className="link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </dd>
          </div>
          {profile.socials.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>
                <a className="link" href={s.url} target="_blank" rel="noreferrer">
                  {s.url.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              </dd>
            </div>
          ))}
          <div>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
        </dl>

        <form className="form" onSubmit={submit}>
          <label>
            Your name
            <input name="name" value={form.name} onChange={update} required autoComplete="name" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={update} required />
          </label>
          <button className="btn btn--primary" type="submit">
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
