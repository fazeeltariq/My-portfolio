import { useEffect, useState } from "react";
import { nav, profile } from "../data";

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" onClick={close}>
          {profile.name}
        </a>

        <nav
          className={`nav__links ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "is-active" : ""}
              aria-current={active === item.id ? "true" : undefined}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
