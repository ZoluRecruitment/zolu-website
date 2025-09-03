import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="zolu-header">
      <div className="zolu-header__inner">
        {/* Left: Logo + small "Recruitment" */}
        <a href="/" className="zolu-brand" aria-label="ZoLu Recruitment home">
          {/* Note the capital L and the cache-buster */}
          <img src="/Logo.png?v=1" alt="ZoLu" className="zolu-brand__logo" />
          <span className="zolu-brand__sub">Recruitment</span>
        </a>

        {/* Right: Uppercase nav */}
        <nav className="zolu-nav" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? " is-active" : "")
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? " is-active" : "")
            }
          >
            FIND STAFF
          </NavLink>

          {/* Emphasis to match your screenshot */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "zolu-nav__link is-strong" + (isActive ? " is-active" : "")
            }
          >
            FIND WORK
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              "zolu-nav__link" + (isActive ? " is-active" : "")
            }
          >
            ABOUT
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
