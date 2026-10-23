export default function Section({ id, title, intro, alt, children }) {
  return (
    <section id={id} className={`section ${alt ? "section--alt" : ""}`}>
      <div className="container">
        <div className="section__head">
          <h2>{title}</h2>
          {intro && <p className="muted">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
